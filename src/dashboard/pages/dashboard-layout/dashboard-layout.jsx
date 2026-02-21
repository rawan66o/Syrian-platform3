import './dashboard-layout.css'
import Navbar from "../../../components/volunteer-projects/navbar/Navbar"
import SidebarDashboard from '../../components/sidebar-dashboard/sidebar-dashboard'
import Footer from '../../../components/footer/footer'
import { Outlet } from 'react-router-dom'

function DashboardLayout(){
   return (
    <div>
      <Navbar />
      <div className='layout-dashboard'>
        {/* SIDEBAR SECTION */}
        <div className='layout-dashboard-sidebar'>
          <SidebarDashboard />
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