import express from "express";
import { allItem } from "../controllers/allItem.js";


const router = express.Router();


router.get("/get-allProduct", allItem);
// router.get("/product-details/:id", getProduct);






export { router as allProductRoutes };
