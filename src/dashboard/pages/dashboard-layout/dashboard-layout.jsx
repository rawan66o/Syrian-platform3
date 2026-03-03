import './dashboard-layout.css'
import Navbar from "../../../components/volunteer-projects/navbar/Navbar"
import SidebarDashboard from '../../components/sidebar-dashboard/sidebar-dashboard'
import Footer from '../../../components/footer/footer'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

function DashboardLayout(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);

      if (window.innerWidth > 992) {
        setIsSidebarOpen(true);
      }else{
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  
  return (
   <div>
     <Navbar isMobile={isMobile} onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
     <div className='layout-dashboard'>
       {/* SIDEBAR SECTION */}
       
       <div className='layout-dashboard-sidebar'>
         <SidebarDashboard isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
       </div>
       {/* CONTENT SECTION */}
       <div className='layout-dashboard-content'>
         <Outlet />
       </div>
     </div>
     <Footer />
   </div>
  )
}

export default DashboardLayout