import classes from './navbar.module.css';
import { NavLink } from 'react-router';
const NavBar = () => {
    return <div className={classes.nav_container}>
        <div className={classes.nav}>
            <div className={classes.right_wing_nav}>
                <img src="/icons/syrian_platform_icon/sp.jpeg" className="sp_logo_class" alt="" />
                <div className={classes.separation_line} />
                <NavLink className={classes.nav_link} to="/">الصفحة الرئيسية</NavLink>
            </div>
            <div className={classes.left_wing_nav}>
                <NavLink className={classes.left_nav_link}>الدعم والمساعدة</NavLink>
                <NavLink className={classes.left_nav_link}>سياسة الخصوصية</NavLink>
                <div className={classes.lang_container}>
                    <img className={classes.lang_icon} src='/icons/lang_icon/global.svg' alt='' />
                    <select className={classes.lang_select}>
                        <option>
                            العربية
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
}
export default NavBar;