const initialAuthState = {
    users: JSON.parse(localStorage.getItem("users")) || [], 
    currentUser: null,
    isLoading: false,
    error: null,
    token: null
};

function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case 'REGISTER_REQUEST':
            return { ...state, isLoading: true, error: null };
            
        case 'REGISTER_SUCCESS': {
            const newUser = action.payload;
            
            const updatedUsers = [...state.users, newUser];
            
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            console.log('users in localStorage:', localStorage.getItem('users'));
            return {
                ...state,
                users: updatedUsers,
                currentUser: newUser,
                isLoading: false,
                error: null
            };
        }
            
        case 'REGISTER_FAILURE':
            return { ...state, isLoading: false, error: action.payload };

        case 'LOGIN_REQUEST':
            return { ...state, isLoading: true, error: null };
        
        case 'LOGIN_SUCCESS': {
            // const users = state.users;
            const user = state.users.find(user => 
                user.email === action.payload.email && 
                user.password === action.payload.password
            );
            
            if (user) {
                return {
                    ...state,
                    currentUser: user,
                    token: action.payload.token || null,
                    isLoading: false,
                    error: null
                };
            } else {
                return {
                    ...state,
                    isLoading: false,
                    error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
                };
            }
        }
            
        case 'LOGIN_FAILURE':
            return { ...state, isLoading: false, error: action.payload };

        case 'FORGOT_PASSWORD_REQUEST':
            return { ...state, isLoading: true, error: null };
        
        case 'FORGOT_PASSWORD_SUCCESS': {
            const user = state.users.find(user => user.email === action.payload.email);
            
            if (user) {
                return { 
                    ...state, 
                    currentUser: user,
                    isLoading: false, 
                    error: null 
                };
            } else {
                return { 
                    ...state, 
                    isLoading: false, 
                    error: 'البريد الإلكتروني غير مسجل' 
                };
            }
        }
        
        case 'FORGOT_PASSWORD_FAILURE':
            return { ...state, isLoading: false, error: action.payload };
        
        case 'RESET_PASSWORD_REQUEST':
            return { ...state, isLoading: true, error: null };
        
        case 'RESET_PASSWORD_SUCCESS': {
            const { email, newPassword } = action.payload;
            
            // update password for the user 
            const updatedUsers = state.users.map(user => {
                if (user.email === email) {
                    return { ...user, password: newPassword };
                }
                return user;
            });
            
            // save to localStorage
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            
            return {
                ...state,
                users: updatedUsers,
                isLoading: false,
                error: null,
                currentUser: null 
            };
        }
        
        case 'RESET_PASSWORD_FAILURE':
            return { ...state, isLoading: false, error: action.payload };

        case 'LOGOUT':
            return {
                ...state,
                currentUser: null,
                token: null,
                error: null
            };

        case 'RELOAD_USERS':
            return {
                ...state,
                users: JSON.parse(localStorage.getItem("users")) || []
            };

        default:
            return state;
    }
}

export { initialAuthState, authReducer };
export default authReducer;