import { useEffect, useState } from 'react';
import { MenuIcon } from '../icons/nav-menu-icons/nav-menu-icons';
import classes from './navbar.module.css';
import { NavLink, useLocation } from 'react-router';
const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const closeMenu = () => {
            setMenuOpen(false);
        };
        closeMenu();
    }, [location.pathname]);

    return <div className={classes.nav_container}>
        <div className={`${classes.backdrop_nav} ${menuOpen ? classes.backdrop_nav_show : ""}`}
            onClick={() => { setMenuOpen(false) }}
        />
        <div className={classes.nav}>
            <div className={classes.right_wing_nav}>
                <img src="/icons/syrian_platform_icon/sp.jpeg" className="sp_logo_class" alt="" />
                <div className={classes.separation_line} />
                <NavLink className={classes.nav_link} to="/">
                    الصفحة الرئيسية
                </NavLink>
            </div>
            <div className={`${classes.left_wing_nav} ${menuOpen ? classes.menuOpen : ""}`}>
                <NavLink className={classes.left_nav_link}>
                    الدعم والمساعدة
                </NavLink>
                <NavLink className={classes.left_nav_link}>
                    سياسة الخصوصية
                </NavLink>
                <div className={classes.lang_container}>
                    <label >
                        <img className={classes.lang_icon} src='/icons/lang_icon/global.svg' alt='' />
                    </label>
                    <select className={classes.lang_select} >
                        <option>
                            العربية
                        </option>
                    </select>
                </div>
            </div>
            <div className={classes.menu_icon_container} onClick={() => { setMenuOpen(true) }}>
                <MenuIcon />
            </div>
        </div>
    </div>
}
export default NavBar;