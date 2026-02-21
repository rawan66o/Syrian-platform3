import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar-dashboard.css'

function SidebarDashboard() {
    const [activeItem, setActiveItem] = useState('لوحة التحكم');
    const navigate = useNavigate();

    // تحديد المسارات لكل عنصر
    const list = [
        {
            name:'لوحة التحكم',
            logo:'/images/icons/dashboard/category/category2.png',
            logo2:'/images/icons/dashboard/category/category.png',
            path: '/dashboard' // المسار الرئيسي للداشبورد
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
    ]

    const handleItemClick = (itemName, path) => {
        setActiveItem(itemName);
        
        // التنقل إلى المسار المحدد
        if (path) {
            navigate(path);
        }
        
        console.log(`تم النقر على: ${itemName}`);
    }

    const handleSettingsClick = () => {
        setActiveItem("الاعدادات");
        // هنا يمكنك التنقل إلى صفحة الإعدادات إذا كان لديك مسار لها
        // navigate('/dashboard/settings');
        console.log("تم النقر على الإعدادات");
    }

    const handleLogoutClick = () => {
        setActiveItem("تسجيل الخروج");
        // هنا يمكنك إضافة منطق تسجيل الخروج
        // navigate('/login');
        console.log("تم النقر على تسجيل الخروج");
    }

   return(
    <div>
        <div className="header-sidebar">
            <h6>معلوماتي</h6>
        </div>
        <div className="content-sidebar">
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
        <div className='footer'>
            <div className='footer-title'>
                <h6>اخرى</h6>
            </div>
            <div className="footer-content">
                <div 
                    className={`content-sidebar-flex ${activeItem === "الاعدادات" ? 'active' : ''}`} 
                    onClick={() => handleItemClick("الاعدادات")}
                >
                    <img style={{width:'20px', height:'20px'}}
                        src={activeItem === "الاعدادات" 
                            ? '/images/icons/dashboard/setting/linear.png'
                            : '/images/icons/dashboard/setting/setting-2.png'} 
                        alt="الإعدادات"
                    />
                    <h5>الاعدادات</h5>
                </div>
                <div 
                    className={`content-sidebar-flex ${activeItem === "تسجيل الخروج" ? 'active' : ''}`} 
                    onClick={handleLogoutClick}
                >
                    <img style={{width:'20px', height:'20px'}}
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
   )
}

export default SidebarDashboard