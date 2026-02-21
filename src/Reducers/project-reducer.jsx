import { getInitialProjectsData } from "../viewCopmonont/volunteer-projects/projects-data";

export const initialProjectsState = {
  projects: getInitialProjectsData(), 
  currentProject: null,
  joinRequests: JSON.parse(localStorage.getItem('join-requests')) || [],
  selectedProject: null,
  isLoading: false,
  error: null
};

function projectReducer(state = initialProjectsState, action) {
  console.log('Reducer Action:', action.type);
  
  const saveToStorage = (projectsData, requestsData = null) => {
    if (projectsData !== null) {
      // ترتيب المشاريع قبل الحفظ
      const sortedProjects = projectsData.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      localStorage.setItem('volunteer-projects', JSON.stringify(sortedProjects));
    }
    if (requestsData !== null) {
      localStorage.setItem('join-requests', JSON.stringify(requestsData));
    }
  };
  
  switch (action.type) {
    case 'SET_PROJECT': {
      return{
        ...state,
        currentProject: action.payload
      }
    }
    
    case 'ADD_PROJECT': {
      const newProject = {
        ...action.payload,
        id: action.payload.id || `proj_${Date.now()}`,
        createdAt: new Date().toISOString(),
        currentVolunteers: action.payload.currentVolunteers || 0,
        volunteersNeeded: action.payload.volunteersNeeded || 10,
        isFull: false,
        volunteersApplied: [],
        joinRequests: []
      };
      
      const updatedProjects = [...state.projects, newProject];
      saveToStorage(updatedProjects);
      
      return {
        ...state,
        projects: updatedProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      };
    }
    
    case 'UPDATE_PROJECT': {
      const { id, updates } = action.payload;
      
      const updatedProjects = state.projects.map(project => 
        String(project.id) === String(id)
          ? { ...project, ...updates, updatedAt: new Date().toISOString() }
          : project
      );
      
      saveToStorage(updatedProjects);
      
      return {
        ...state,
        projects: updatedProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        selectedProject: state.selectedProject?.id === id ? null : state.selectedProject
      };
    }
    
    case 'ADD_JOIN_REQUEST': {
      const { projectId, user, ...requestData } = action.payload;
      
      const newRequest = {
        id: `request_${Date.now()}`,
        projectId,
        userId: user?.id || 'guest',
        userName: user?.name || requestData.name || 'مستخدم',
        userEmail: user?.email || requestData.email,
        status: 'pending',
        requestedAt: new Date().toISOString(),
        ...requestData
      };
      
      const updatedRequests = [...state.joinRequests, newRequest];
      saveToStorage(null, updatedRequests);
      
      // تحديث المشروع ليضيف الطلب
      const updatedProjects = state.projects.map(project => {
        if (String(project.id) === String(projectId)) {
          return {
            ...project,
            joinRequests: [...(project.joinRequests || []), newRequest.id]
          };
        }
        return project;
      });
      
      saveToStorage(updatedProjects, updatedRequests);
      
      return {
        ...state,
        projects: updatedProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        joinRequests: updatedRequests
      };
    }
    
    case 'APPROVE_REQUEST': {
      const { requestId } = action.payload;
      
      const request = state.joinRequests.find(r => r.id === requestId);
      if (!request) return state;
      
      // تحديث حالة الطلب
      const updatedRequests = state.joinRequests.map(req => 
        req.id === requestId 
          ? { ...req, status: 'approved', approvedAt: new Date().toISOString() }
          : req
      );
      
      // زيادة عدد المتطوعين في المشروع
      const updatedProjects = state.projects.map(project => {
        if (String(project.id) === String(request.projectId)) {
          const newCount = (project.currentVolunteers || 0) + 1;
          const volunteersApplied = [...(project.volunteersApplied || []), request.userId];
          
          return {
            ...project,
            currentVolunteers: newCount,
            isFull: newCount >= (project.volunteersNeeded || 10),
            volunteersApplied
          };
        }
        return project;
      });
      
      saveToStorage(updatedProjects, updatedRequests);
      
      return {
        ...state,
        projects: updatedProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        joinRequests: updatedRequests
      };
    }
    
    case 'DELETE_PROJECT': {
      const { id } = action.payload;
      
      const updatedProjects = state.projects.filter(project => 
        String(project.id) !== String(id)
      );
      
      saveToStorage(updatedProjects);
      
      return {
        ...state,
        projects: updatedProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        selectedProject: state.selectedProject?.id === id ? null : state.selectedProject
      };
    }
    
    case 'SET_SELECTED_PROJECT':
      return {
        ...state,
        selectedProject: action.payload
      };
    
    case 'CLEAR_SELECTED_PROJECT':
      return {
        ...state,
        selectedProject: null
      };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    
    case 'RELOAD_PROJECTS': {
      const savedProjects = localStorage.getItem('volunteer-projects');
      const projects = savedProjects 
        ? JSON.parse(savedProjects).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        : getInitialProjectsData();
      
      return {
        ...state,
        projects
      };
    }
    
    default:
      return state;
  }
}

export default projectReducer;