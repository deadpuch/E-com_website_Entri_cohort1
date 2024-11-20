import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Dashboard/menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
