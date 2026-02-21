const savedComments = localStorage.getItem('app_comments');
const parsedComments = savedComments ? JSON.parse(savedComments) : {};

export const initialComments = {
  commentsByProject: parsedComments || {},
  currentProjectId: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  sortBy: 'newest',
  replyTo: null,
  editingComment: null,
  newComment: {
    author: '',
    content: '',
    parentId: null
  }
};

const CommentReducer = (state = initialComments, action) => {
  let newState;
  
  switch (action.type) {
    case 'SET_CURRENT_PROJECT': {
      return {
        ...state,
        currentProjectId: action.payload
      };
    }
    
    case 'FETCH_COMMENTS_FOR_PROJECT': {
      const { projectId, comments } = action.payload;
      
      return {
        ...state,
        loading: false,
        commentsByProject: {
          ...state.commentsByProject,
          [projectId]: comments
        }
      };
    }
    
    case 'FETCH_COMMENTS_REQUEST': {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    
    case 'FETCH_COMMENTS_SUCCESS': {
      const allComments = action.payload;
      
      newState = {
        ...state,
        loading: false,
        comments: allComments,
        totalPages: Math.ceil(allComments.length / 10)
      };
      
      localStorage.setItem('app_comments', JSON.stringify(newState.comments));
      return newState;
    }
    
    case 'ADD_COMMENT_REQUEST': {
      return {
        ...state,
        loading: true
      };
    }
    
    // ⬇️ فقط هذه النسخة تبقى (النسخة المحسنة)
    case 'ADD_COMMENT_SUCCESS': {
      const { projectId, comment } = action.payload;
      const newComment = {
        id: Date.now().toString(),
        ...comment,
        timestamp: new Date().toISOString(),
        likes: [],
        dislikes: [],
        replies: []
      };
      
      // جلب التعليقات الحالية لهذا المشروع - تأكد أنها مصفوفة
      const currentProjectComments = Array.isArray(state.commentsByProject[projectId]) 
        ? state.commentsByProject[projectId] 
        : [];
      
      let updatedComments;
      
      if (newComment.parentId) {
        // دالة متداخلة لإضافة ردود متعددة المستويات
        const addReplyRecursive = (comments, parentId, reply) => {
          return comments.map(c => {
            if (c.id === parentId) {
              return {
                ...c,
                replies: [...(c.replies || []), reply]
              };
            }
            
            // إذا كان للتعليق ردود، ابحث فيها
            if (c.replies && c.replies.length > 0) {
              return {
                ...c,
                replies: addReplyRecursive(c.replies, parentId, reply)
              };
            }
            
            return c;
          });
        };
        
        updatedComments = addReplyRecursive(currentProjectComments, newComment.parentId, newComment);
      } else {
        // إضافة تعليق رئيسي جديد
        updatedComments = [newComment, ...currentProjectComments];
      }
      
      newState = {
        ...state,
        loading: false,
        commentsByProject: {
          ...state.commentsByProject,
          [projectId]: updatedComments
        },
        replyTo: null,
        newComment: {
          author: '',
          content: '',
          parentId: null,
          timestamp: null
        }
      };
      
      // حفظ في localStorage
      try {
        localStorage.setItem('app_comments', JSON.stringify(newState.commentsByProject));
      } catch (error) {
        console.error('Failed to save comments to localStorage:', error);
      }
      
      return newState;
    }
    
    // ⬇️ إضافة حالة ADD_COMMENT البسيطة للتوافق
    case 'ADD_COMMENT': {
      const { projectId, comment } = action.payload;
      const newComment = {
        id: Date.now().toString(),
        ...comment,
        timestamp: new Date().toISOString(),
        likes: [],
        dislikes: [],
        replies: []
      };
      
      const currentProjectComments = state.commentsByProject[projectId] || [];
      
      let updatedComments;
      
      if (newComment.parentId) {
        updatedComments = currentProjectComments.map(c => {
          if (c.id === newComment.parentId) {
            return {
              ...c,
              replies: [...(c.replies || []), newComment]
            };
          }
          return c;
        });
      } else {
        updatedComments = [newComment, ...currentProjectComments];
      }
      
      newState = {
        ...state,
        commentsByProject: {
          ...state.commentsByProject,
          [projectId]: updatedComments
        },
        replyTo: null
      };
      
      localStorage.setItem('app_comments', JSON.stringify(newState.commentsByProject));
      return newState;
    }
    
    case 'UPDATE_COMMENT_SUCCESS': {
      const { projectId, commentId, updatedData } = action.payload;
      
      const updateRecursive = (comments, targetId, data) => {
        return comments.map(comment => {
          if (comment.id === targetId) {
            return { ...comment, ...data };
          }
          
          if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: updateRecursive(comment.replies, targetId, data)
            };
          }
          
          return comment;
        });
      };
      
      if (projectId && state.commentsByProject[projectId]) {
        const updatedComments = updateRecursive(
          state.commentsByProject[projectId],
          commentId,
          { ...updatedData, editedAt: new Date().toISOString() }
        );
        
        newState = {
          ...state,
          loading: false,
          commentsByProject: {
            ...state.commentsByProject,
            [projectId]: updatedComments
          },
          editingComment: null
        };
      } else {
        const updatedComments = updateRecursive(
          state.comments,
          action.payload.id,
          { ...action.payload, editedAt: new Date().toISOString() }
        );
        
        newState = {
          ...state,
          loading: false,
          comments: updatedComments,
          editingComment: null
        };
      }
      
      localStorage.setItem('app_comments', JSON.stringify(
        projectId ? newState.commentsByProject : newState.comments
      ));
      
      return newState;
    }
    
    case 'SET_REPLY_TO': {
      return {
        ...state,
        replyTo: action.payload,
        newComment: {
          ...state.newComment,
          parentId: action.payload
        }
      };
    }
    
    case 'SET_EDITING_COMMENT': {
      return {
        ...state,
        editingComment: action.payload
      };
    }
    
    case 'UPDATE_NEW_COMMENT': {
      return {
        ...state,
        newComment: {
          ...state.newComment,
          [action.payload.field]: action.payload.value
        }
      };
    }
    
    case 'CLEAR_NEW_COMMENT': {
      return {
        ...state,
        newComment: {
          author: '',
          content: '',
          parentId: null,
          timestamp: null
        },
        replyTo: null
      };
    }
    
    default: {
      return state;
    }
  }
};

export default CommentReducer;