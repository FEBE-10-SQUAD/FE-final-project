import React from "react";
import { Outlet } from "react-router-dom";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <div className="utk-outlet">
        <Outlet />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default AppLayout;
