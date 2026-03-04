import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ isMobile, onToggleSidebar, isSidebarOpen }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  const [anchorEl, setAnchorEl] = useState(null)
  // eslint-disable-next-line

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuItems = ['الصفحة الرئيسية', 'الكورسات', 'المنتدى', 'المشاريع', 'اتصل بنا']

  return (
    <div className="navbar">
      <div className='nav-right'>
        <img className='icon-logo' alt='' src="/images/logo/spLogo12.png" />
        <div className='divid' />
        {menuItems.map((item) => (
          <h6
            key={item}
            style={{
              cursor: 'pointer',
              color:'#70798B',
              fontSize: '16px',
              '&:hover': {
                color: '#6f7a91ff',
              },
            }}
          >
            {item}
          </h6>
        ))}

      </div>
      <div className='nav_center'>
        <input className='search_input' />
        <img className='icon_search'
          src='/icons/search_icon/search_normal.svg' 
          alt='بحث' 
        />
      </div>
      <div className='nav_left'>
        <div className='notificat'>
          <div className='btn_notification'>
            {unreadCount > 0 && (
              <span className='notification_count'>
                {unreadCount}
              </span>
            )}
            <img src='/images/icons/dashboard/notification.png' alt='' className='not_image' />
          </div>
          
          <div className='btn_notification' >
            <img src='/images/icons/dashboard/earth.png' alt='' className='lang_images'/>
          </div>
        </div>

        {isMobile && (
          <div 
            className={`btn_notification menu-btn ${isSidebarOpen ? 'active' : ''}`} 
            onClick={onToggleSidebar}  // فقط نستخدم الدالة من props
          >
            <img 
              className='lang_images' 
              src={isSidebarOpen 
                ? '/images/icons/dashboard/close.png'     // أيقونة إغلاق (X)
                : '/images/icons/dashboard/nav-icon.svg'  // أيقونة قائمة
              }
              alt={isSidebarOpen ? 'إغلاق' : 'قائمة'}
            />
          </div>
        )}

        <div className='profile' onClick={handleProfileMenuOpen}>
          <img className='profile_avatar' alt='' src='/images/logo/2.jpg'/>
          <h6>المدربة ريم فالح</h6>
        </div>
      </div>
    </div>
  )
}

export default Navbar