import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.js";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};