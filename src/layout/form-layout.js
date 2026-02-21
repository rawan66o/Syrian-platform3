import { Outlet } from "react-router"
import Navbar from "../viewCopmonont/forms/navbar"

function FormLayout() {
   return(
    <>
        <Navbar />
        <Outlet />
    </>
   ) 
}

export default FormLayout