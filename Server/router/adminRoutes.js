import express from "express"
import { adminDeleteAccount, adminLogin, adminLogout, adminProfile, adminProfileUpdate, adminResetPassword, adminSignup, checkAdmin } from "../controllers/adminController.js"
import { adminAuth } from "../middleware/adminAuth.js"
import { productRoutes } from "./productRoutes.js"
const router=express.Router()

router.post("/signup", adminSignup)
router.post("/login",adminLogin)


router.get('/profile',adminAuth,adminProfile)
router.put('/logout',adminAuth,adminLogout)


router.put('/reset-password',adminResetPassword)
router.put('/profile-update',adminAuth,adminProfileUpdate)
router.delete('/delete-account',adminAuth,adminDeleteAccount)

router.get('/check-admin',adminAuth,checkAdmin)

router.use('/product',productRoutes)

export {router as adminRoutes}