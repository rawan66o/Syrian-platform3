// DashboardLayout.jsx
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
        setIsSidebarOpen(false); // إغلاق السايدبار إذا كبرت الشاشة
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
    <div className="dashboard-layout">
      <Navbar 
        isMobile={isMobile}
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      
      <div className="dashboard-container">
        {/* سايدبار سطح المكتب (يظهر دائماً في الشاشات الكبيرة) */}
        {!isMobile && (
          <div className="desktop-sidebar-wrapper">
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
        
        {/* المحتوى الرئيسي */}
        <div className={`main-content ${!isMobile ? 'with-sidebar' : ''}`}>
          {/* هنا يظهر المحتوى الخاص بكل صفحة */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;