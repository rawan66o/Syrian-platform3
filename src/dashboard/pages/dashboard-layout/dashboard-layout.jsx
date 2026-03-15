import { useState, useEffect } from 'react';
import Navbar from "../../../components/volunteer-projects/navbar/Navbar"
import SidebarMobile from '../../components/sidebar-dashboard/sidebar-mobile';
import SidebarDashboard from '../../components/sidebar-dashboard/sidebar-dashboard'
import Footer from '../../../components/footer/footer'
import { Outlet } from 'react-router-dom'
import './dashboard-layout.css';

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
    <div className="layout-dashboard">
      <div className='dashboard-navbar'>
        <Navbar 
          isMobile={isMobile}
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      
      {/* سايدبار سطح المكتب */}
      {!isMobile && (
        <div className="layout-dashboard-sidebar">
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
      <div className="layout-dashboard-content">
        <Outlet />
      </div>
      
      <Footer />
    </div>
  );
}

export default DashboardLayout;