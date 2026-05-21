import { useLocation, useNavigate } from 'react-router';
import './sidebar-dashboard.css'
import { useState, useEffect } from 'react';

function SidebarMobile({ isOpen, onClose }) {
    const [activeItem, setActiveItem] = useState('لوحة التحكم');
    const navigate = useNavigate();
    const location = useLocation();

    const list = [
        {
            name:'لوحة التحكم',
            logo:'/images/icons/dashboard/category/category2.png',
            logo2:'/images/icons/dashboard/category/category.png',
            path: '/dashboard'
        },
        {
            name:'الملف الشخصي',
            logo:'/images/icons/dashboard/user/user.png',
            logo2:'/images/icons/dashboard/user/user2.png',
            path: '/dashboard/profile'
        }, 
        {
            name:'الشهادات',
            logo:'/images/icons/dashboard/degree2.png',
            logo2:'/images/icons/dashboard/degree.png',
            path: '/dashboard/certificates'
        }, 
        {
            name:'المشاريع التطوعية',
            logo:'/images/icons/dashboard/lambe/project-icon.png',
            logo2:'/images/icons/dashboard/lambe/project-icon2.png',
            path: '/dashboard/my-progects'
        }, 
        {
            name:'الكورسات',
            logo:'/images/icons/dashboard/course-icon/course-icon.png',
            logo2:'/images/icons/dashboard/course-icon/course-icon3.png',
            path: '/dashboard/my-courses'
        }
    ];

    useEffect(() => {
        const currentPath = location.pathname;
        const activeItemFromPath = list.find(item => item.path === currentPath);
        
        if (activeItemFromPath) {
            setActiveItem(activeItemFromPath.name);
        } else if (currentPath === '/dashboard/settings') {
            setActiveItem('الاعدادات');
        };
    }, [location.pathname])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleItemClick = (itemName, path) => {
        setActiveItem(itemName);
        
        if (path) {
            navigate(path);
        }
        
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="sidebar-mobile">
            <div className="sidebar-mobile-overlay" onClick={onClose} />
            
            <div className="sidebar-mobile-content">
                <div className="sidebar-content">
                    {list.map((item, ind) => (
                        <div 
                            className={`content-sidebar-flex ${activeItem === item.name ? 'active' : ''}`}
                            key={ind}
                            onClick={() => handleItemClick(item.name, item.path)}
                        >
                            <img
                                src={activeItem === item.name ? item.logo2 : item.logo} 
                                alt={item.name}
                            />
                            <h5>{item.name}</h5>
                        </div>
                    ))}
                </div>

                <div className='sidebar-footer'>
                    <div className='footer-title'>
                        <h6>أخرى</h6>
                    </div>
                    <div className="footer-content">
                        <div 
                            className={`content-sidebar-flex ${activeItem === "الاعدادات" ? 'active' : ''}`} 
                            onClick={() => handleItemClick("الاعدادات")}
                        >
                            <img
                                src={activeItem === "الاعدادات" 
                                    ? '/images/icons/dashboard/setting/linear.png'
                                    : '/images/icons/dashboard/setting/setting-2.png'} 
                                alt="الإعدادات"
                            />
                            <h5>الاعدادات</h5>
                        </div>
                        <div 
                            className={`content-sidebar-flex ${activeItem === "تسجيل الخروج" ? 'active' : ''}`} 
                            onClick={() => {
                                console.log("تسجيل الخروج");
                                onClose();
                            }}
                        >
                            <img
                                src={activeItem === "تسجيل الخروج" 
                                    ? '/images/icons/dashboard/Unlock/Unlock-3.png'
                                    : '/images/icons/dashboard/Unlock/Unlock-2.png'} 
                                alt="تسجيل الخروج"
                            />
                            <h5>تسجيل الخروج</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarMobile;