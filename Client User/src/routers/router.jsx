import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Mobile/Home";
import { Product } from "../pages/Mobile/Product";
import { MobileFooter } from "../pages/Mobile/MobileFooter";
import { Profile } from "../pages/Mobile/Profile";

export const RouterPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileFooter />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
