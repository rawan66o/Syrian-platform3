import { Outlet } from "react-router";
import "./layout.css";
import NavBar from "../components/navbar/navbar";
import CourseDetailsNavBar from "../components/course-details-components/course-details-navbar/course-details-navbar";
import { useLocation } from "react-router";
const Layout = () => {
    const location = useLocation();
    const authPaths = ["/register", "/login", "/forgot-password", "/new-password"];

    console.log(location)
    return <div className="pages_styles">
        {authPaths.includes(location.pathname) ? <NavBar /> :
            <CourseDetailsNavBar />}
        <Outlet />
    </div>
}
export default Layout;

