import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
};

export default Layout;
