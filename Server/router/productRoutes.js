import express from "express";
import { adminAuth } from "../middleware/adminAuth.js";
import { addProduct, deleteProduct, editProduct, getProduct } from "../controllers/productController.js";
import { saleAuth } from "../middleware/salesAuth.js";
import { sellerAddProduct } from "../controllers/sellerProduct.js";


const router = express.Router();

router.post("/addproduct", adminAuth, addProduct);
router.put("/product-update/:id", adminAuth, editProduct);


router.get("/productProfile", adminAuth, getProduct);
router.delete("/product-delete/:id", adminAuth, deleteProduct);



router.post("/selleraddproduct", saleAuth, sellerAddProduct)


export { router as productRoutes };
