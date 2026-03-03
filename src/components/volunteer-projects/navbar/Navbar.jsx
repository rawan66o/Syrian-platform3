import { useState } from 'react'
import './Navbar.css'
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Divider,
  Menu,
  MenuItem,
  Drawer,
  useMediaQuery
} from '@mui/material'
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Language as LanguageIcon
} from '@mui/icons-material'
import MobileNav from './MobileNav'

const Navbar = ({ isMobile, onToggleSidebar, isSidebarOpen }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  // eslint-disable-next-line
  const isMobileMedia = useMediaQuery('(max-width:1199px)') // lg breakpoint

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuItems = ['الصفحة الرئيسية', 'الكورسات', 'المنتدى', 'المشاريع', 'اتصل بنا']

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>الملف الشخصي</MenuItem>
      <MenuItem onClick={handleMenuClose}>الإعدادات</MenuItem>
      <MenuItem onClick={handleMenuClose}>تسجيل الخروج</MenuItem>
    </Menu>
  )

  return (
    <div className="navbar">
      <div className='nav-right'>
        <img className='icon-logo' src="/images/logo/spLogo12.png" />
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
            <img src='/images/icons/dashboard/notification.png' className='not_image' />
            {unreadCount > 0 && (
              <span className='notification_count'>
                {unreadCount}
              </span>
            )}
          </div>
          
          <div className='btn_notification' >
            <img src='/images/icons/dashboard/earth.png' className='lang_images'/>
          </div>
        </div>

        {isMobile && (
          <div className='btn_notification' onClick={onToggleSidebar}>
            <img className='not_image' src='/images/icons/dashboard/nav-icon.svg'/>
          </div>
        )}

        <div className='profile' onClick={handleProfileMenuOpen}>
          <img className='profile_avatar' src='/images/logo/2.jpg'/>
          <h6>المدربة ريم فالح</h6>
        </div>
      </div>
    </div>
  )
}

export default Navbar