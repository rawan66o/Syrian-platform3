import { Outlet } from "react-router"
import Navbar from "../components/volunteer-projects/navbar/Navbar"
import Footer from "../components/footer/footer"

function VolunteerLayout() {
   return(
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
   ) 
}

export default VolunteerLayout