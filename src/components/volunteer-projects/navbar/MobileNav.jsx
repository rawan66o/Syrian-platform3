import './MobileNav.css'

const MobileNav = ({ onClose }) => {
  const menuItems = [
    {
      name:'الرئيسية', 
      logo:'/images/icons/dashboard/home.png',
      logo2:'/images/icons/dashboard/home/home2.png',
    },
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

  return (
    <div className="mobile-nav">
      {/* قسم المستخدم والإشعارات */}
      <div className="mobile-nav-header">
        {/* معلومات المستخدم */}
        <div className="user-info">
          <img
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            alt="الصورة الشخصية"
            className="user-avatar"
          />
          <span className="user-name">المدربة ريم فالح</span>
        </div>

        {/* الإشعارات واللغة */}
        <div className="header-icons">
          <button className="icon-button">
            <span className="icon">🔔</span>
          </button>
          
          <button className="icon-button">
            <span className="icon">🌐</span>
          </button>
        </div>
      </div>

      <div className="divider"></div>

      {/* شريط البحث */}
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="ابحث هنا..."
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="divider"></div>

      {/* قائمة التنقل */}
      <div className="nav-menu">
        {menuItems.map((item, index) => (
          <div key={item} className="nav-item-container">
            <button 
              className="nav-item"
              onClick={onClose}
            >
              <img src={item.logo} alt={item.name} className="nav-item-logo" style={{width:'20px',height:'20px'}}/>
              {item.name}
            </button>
            {index < menuItems.length - 1 && (
              <div className="menu-divider"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileNav