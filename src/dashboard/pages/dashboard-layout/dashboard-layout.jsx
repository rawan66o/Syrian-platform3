import { useState, useEffect } from 'react';
import Navbar from "../../../components/volunteer-projects/navbar/Navbar";
import SidebarMobile from '../../components/sidebar-dashboard/sidebar-mobile';
import SidebarDashboard from '../../components/sidebar-dashboard/sidebar-dashboard';
import Footer from '../../../components/footer/footer';
import { Outlet, useLocation } from 'react-router-dom';
import style from './dashboard-layout.module.css';

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 991;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

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
        {!isMobile && (
          <div className={style.layout_dashboard_sidebar}>
            <SidebarDashboard 
              isOpen={true} 
              onClose={() => {}} 
            />
          </div>
        )}

        {isMobile && (
          <SidebarMobile 
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
          />
        )}

        <div className={style.layout_dashboard_content}>
          <Outlet />
        </div>
      </div>
      <div className={style.dashboard_footer}>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;