import express from "express";
import { allItem, latestItem } from "../controllers/allItem.js";


const router = express.Router();


router.get("/get-allProduct", allItem);
router.get("/latestproducts", latestItem);
// router.get("/product-details/:id", getProduct);






export { router as allProductRoutes };
