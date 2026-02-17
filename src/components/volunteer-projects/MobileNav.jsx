import React from 'react'
import '../../styles/MobileNav.css'

const MobileNav = ({ onClose }) => {
  const menuItems = ['الرئيسية', 'الكورسات', 'المنتدى', 'المشاريع', 'اتصل بنا']

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
              {item}
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