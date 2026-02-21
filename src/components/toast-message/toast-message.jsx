import './toast-message.css';

function MessageModal({ open, message, type = "success", onClose }) {
    const styles = {
        success: {
            background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
            icon: "✓",
            iconColor: "#4CAF50"
        },
        error: {
            background: "linear-gradient(135deg, #F44336, #C62828)",
            icon: "✗",
            iconColor: "#F44336"
        },
        warning: {
            background: "linear-gradient(135deg, #FF9800, #F57C00)",
            icon: "⚠",
            iconColor: "#FF9800"
        },
        info: {
            background: "linear-gradient(135deg, #2196F3, #1565C0)",
            icon: "ℹ",
            iconColor: "#2196F3"
        }
    };

    const currentStyle = styles[type] || styles.success; 
    return (
        <div className='toast-container' 
            style={{transform: `translateX(-50%) ${open ? "translateY(0)" : "translateY(-100px)"}`,
                background: currentStyle.background,}}>
            <div className='toast-text' style={{color: currentStyle.iconColor}}>
                {currentStyle.icon}
            </div>
            <div style={{flex: 1}}>
                <strong>{message}</strong>
                <p style={{ margin: "5px 0 0", fontSize: "14px", opacity: 0.9 }}>
                    {type === "success" && "تمت العملية بنجاح"}
                    {type === "error" && "حدث خطأ، حاول مرة أخرى"}
                    {type === "warning" && "تنبيه مهم"}
                    {type === "info" && "معلومة"}
                </p>
                
            </div>
        </div>
    );
}

export default MessageModal;