import { Outlet } from "react-router";
import Navbar from "../pages/auth/navbar/navbar";

function LoginLayout() {
    return <div style={{background: 'linear-gradient(to bottom, #E6F6FA 0%, #ffff 100%)' }}>
        <Navbar />
        <Outlet />
    </div>
}

export default LoginLayout;