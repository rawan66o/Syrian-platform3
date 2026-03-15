import { useState, useEffect } from 'react';
import Navbar from "../../../components/volunteer-projects/navbar/Navbar"
import SidebarMobile from '../../components/sidebar-dashboard/sidebar-mobile';
import SidebarDashboard from '../../components/sidebar-dashboard/sidebar-dashboard'
import Footer from '../../../components/footer/footer'
import { Outlet } from 'react-router-dom'
import style from './dashboard-layout.module.css';

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={style.layout_dashboard}>
      <div className={style.dashboard_navbar}>
        <Navbar 
          isMobile={isMobile}
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      
      <div className={style.dashboard_main}>
        {/* سايدبار سطح المكتب */}
        {!isMobile && (
          <div className={style.layout_dashboard_sidebar}>
            <SidebarDashboard 
              isOpen={true} 
              onClose={() => {}} 
            />
          </div>
        )}

        {/* سايدبار الموبايل */}
        {isMobile && (
          <SidebarMobile 
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
          />
        )}

        {/* المحتوى الرئيسي */}
        <div className={style.layout_dashboard_content}>
          <Outlet />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default DashboardLayout;