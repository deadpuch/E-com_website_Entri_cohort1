import express from "express";
import { saleAuth } from "../middleware/salesAuth.js";
import { deleteProducts, sellerAddProduct, sellerEditProduct, sellerProducts } from "../controllers/sellerProduct.js";




const router = express.Router();

router.post("/addproduct", saleAuth, sellerAddProduct)
router.put("/edit_product/:id", saleAuth, sellerEditProduct)

router.get("/all_product", saleAuth, sellerProducts)
router.delete("/delete_product/:id", saleAuth, deleteProducts)




export { router as sellerProductRoutes };
