import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Userlist from "../pages/userlist";
import AddProduct from "../pages/addProduct";
import SellerList from "../pages/sellerList";
import Layout from "../Layout/Layout";



export const router=createBrowserRouter([

{
    path:"/",
    element:<Layout/>,
    children:[
        {
            path:"",
            element:<Dashboard/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"user",
            element:<Userlist/>
        },
        {
            path:"addProducts",
            element:<AddProduct/>
        },
        {
            path:"seller",
            element:<SellerList/>
        },
    ]
}

]) 