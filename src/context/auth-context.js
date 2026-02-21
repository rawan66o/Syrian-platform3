// 📁 context/AuthContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { authReducer, initialAuthState } from '../Reducers/auth-reducer';

// 1. إنشاء Context
const AuthContext = createContext();

// 2. Provider Component
export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    if (state.currentUser && !localStorage.getItem('currentUser')) {
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    }
  }, [state.currentUser]);


  const contextValue = {

    authState: state,
    
    user: state.currentUser,
    token: state.token,
    isLoading: state.isLoading,
    error: state.error,
    
    isAuthenticated: !!state.currentUser,
    isAdmin: state.currentUser?.role === 'admin',
    isOrganization: state.currentUser?.type === 'organization',
    
    dispatch 
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// 5. Custom Hook للاستخدام
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};