import { createContext, useContext, useState, useCallback } from "react";
import MessageModal from "../components/toast-message/toast-message";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
    const [toastState, setToastState] = useState({
        open: false,
        message: "",
        type: "success"
    });
    
    const showHideToast = useCallback((message, type = "success") => {
        setToastState({
            open: true,
            message,
            type
        });
        
        const timer = setTimeout(() => {
            setToastState(prev => ({ ...prev, open: false }));
        }, 3000); 
        
        return () => clearTimeout(timer); 
    }, []);
    
    // ⬇️ دالة منفصلة لإخفاء الـ Toast يدوياً
    const hideToast = useCallback(() => {
        setToastState(prev => ({ ...prev, open: false }));
    }, []);

    return (
        <ToastContext.Provider value={{ showHideToast, hideToast, toastState }}>
            <MessageModal 
                open={toastState.open} 
                message={toastState.message}
                type={toastState.type}
                onClose={hideToast} 
            />
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};