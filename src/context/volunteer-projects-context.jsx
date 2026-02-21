import { createContext, useContext, useReducer, useCallback } from "react";
import projectReducer, { initialProjectsState } from "../Reducers/project-reducer";
import CommentReducer, { initialComments } from '../Reducers/comment-reducer'

const ProjectsContext = createContext(null);
const CommentContext = createContext();

export function ProjectsProvider({ children }) {
  const [state, dispatch] = useReducer(projectReducer, initialProjectsState);
  const [commentsState, commentsDispatch] = useReducer(CommentReducer, initialComments);

  const projectValue = { state, dispatch }
  const commentsValue = { commentsState, commentsDispatch }
  
 
  return (
    <ProjectsContext.Provider value={projectValue}>
      <CommentContext.Provider value={commentsValue}>
        {children}
      </CommentContext.Provider>
    </ProjectsContext.Provider>
  );
}

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  } 
  return context;
};

export const useComments = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useComments must be used within a ProjectsProvider");
  } 
  return context;
};