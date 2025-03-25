import { Outlet, Navigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Make sure you have a Footer component

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar /> {/* ✅ Navbar always stays on top */}
      
      <div className="main-content">
        {/* ✅ If user is on "/", show Signin by default */}
        {location.pathname === "/" ? <Navigate to="/signin" /> : <Outlet />}
      </div>

      <Footer /> {/* ✅ Footer always at the bottom */}
    </>
  );
}

export default Layout;