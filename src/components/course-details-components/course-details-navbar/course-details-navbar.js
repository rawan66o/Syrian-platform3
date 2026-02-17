import "./course-details-navbar.css";
import { NavLink } from "react-router";
import { useLocation } from "react-router";
const CourseDetailsNavBar = () => {
    const location = useLocation();
    const loggedIn = true;
    const testPath = (path) => {
        return /^\/courses\/\d+$/.test(path);
    };
    const fullNavPaths = [
        "/",
        "/courses",
        "/volunteer-projects",
        "/posts-projects",
        "/student-guide",
        "/coach-guide",
        "/volunteer-guide",
        "/partners",
        "/dashboard",
        "/dashboard/profile",
        "/dashboard/certificates",
        "/dashboard/my-courses",
        "/dashboard/my-progects",
    ];



    if (fullNavPaths.includes(location.pathname) || testPath(location.pathname)) {
        return <div className="course_details_navbar">
            <div className="nav_body" dir="rtl">
                <div className="nav_body_icon_links">
                    <img src="/icons/syrian_platform_icon/sp.jpeg" className="sp_logo_class" alt="" />
                    <div className="nav_separation_line" />
                    <div className="nav_links_to_pages">
                        <NavLink
                            className={({ isActive }) => {
                                return isActive ? "clicked_nav_link" : "course_nav_link";
                            }}
                            to="/" >
                            الرئيسية
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                return isActive ? "clicked_nav_link" : "course_nav_link";
                            }}
                            to="/courses">
                            الكورسات
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                return isActive ? "clicked_nav_link" : "course_nav_link";
                            }}
                            to="/forum"
                        >
                            المنتدى
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                return isActive ? "clicked_nav_link" : "course_nav_link";
                            }}
                            to="/projects">
                            المشاريع
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => {
                                return isActive ? "clicked_nav_link" : "course_nav_link";
                            }}
                            to="/contact-us">
                            اتصل بنا
                        </NavLink>
                    </div>
                </div>
                <div className="course_details_navbar_search_container">
                    <input className="course_details_nav_search_input" type="search" placeholder="البحث" />
                    <img className="course_details_nav_search_icon" src="/icons/search_icon/search_normal.svg" alt="" />
                </div>
                <div className="signup_notifications_language_container">
                    <div className="notifications_language_container">
                        <button className="not_lang_button">
                            <img src="/icons/notifications_icon/notification.svg" alt="" />
                        </button>
                        <button className="not_lang_button">
                            <img src="/icons/language_icon/material-symbols-light_language.svg" alt="" />
                        </button>
                    </div>
                    <div className="nav_separation_line" />
                    <div className="signup_button_container">
                        {!loggedIn && <button className="signup_button">تسجيل الدخول</button>}
                        {loggedIn && <div className="navbar_user_container">
                            <img src="/images/nav_user/nav_user.png" alt="" />
                            <p className="navbar_user_container_username">المدرب.محمد الشيخ</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    }
    else {
        return <div className="course_details_navbar">
            <div className="nav_body" dir="rtl">
                <div className="nav_body_icon_links">
                    <img src="/icons/syrian_platform_icon/sp.jpeg" className="sp_logo_class" alt="" />
                    <div className="nav_separation_line" />
                    <div className="nav_links_to_pages">
                        <NavLink className="clicked_nav_link" to="/">الرئيسية</NavLink>
                    </div>
                </div>
                <div className="signup_notifications_language_container">
                    <div className="notifications_language_container">
                        <button className="not_lang_button">
                            <img src="/icons/notifications_icon/notification.svg" alt="" />
                        </button>
                        <button className="not_lang_button">
                            <img src="/icons/language_icon/material-symbols-light_language.svg" alt="" />
                        </button>
                    </div>
                    <div className="nav_separation_line" />
                    <div className="signup_button_container">
                        {!loggedIn && <button className="signup_button">تسجيل الدخول</button>}
                        {loggedIn && <div className="navbar_user_container">
                            <img src="/images/nav_user/nav_user.png" alt="" />
                            <p className="navbar_user_container_username">المدرب.محمد الشيخ</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    }
};
export default CourseDetailsNavBar;
