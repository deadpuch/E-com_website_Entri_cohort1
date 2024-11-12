import express from "express";
import { checkSaleUser, salesDeleteAccount, salesLogin, salesLogout, salesProfile, salesProfileUpdate, salesResetPassword, salesSignup } from "../controllers/salesController.js";
import { saleAuth } from "../middleware/salesAuth.js";
import { sellerProductRoutes } from "./sellerProduct.js";


const router=express.Router();

router.post("/signup",salesSignup)
router.post("/login",salesLogin)


router.get('/profile',saleAuth,salesProfile)
router.put('/logout',saleAuth,salesLogout)


router.put('/reset-password',salesResetPassword)
router.put('/profile-update',saleAuth,salesProfileUpdate)
router.delete('/delete-account',saleAuth,salesDeleteAccount)

router.get('/checkSales-user',saleAuth,checkSaleUser)

router.use("/seller-Product",saleAuth,sellerProductRoutes)


export{router as salesRoutes}