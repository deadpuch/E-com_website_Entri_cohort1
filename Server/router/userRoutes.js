import express from "express"
import { checkUser, userDeleteAccount, userLogin, userLogout, userProfile, userProfileUpdate, userResetPassword, userSignup } from "../controllers/userController.js"
import { userAuth } from "../middleware/userAuth.js"
import { getProduct } from "../controllers/productController.js"
import { userReview } from "./userReview.js"
const router=express.Router()

router.post("/signup", userSignup)
router.post("/login",userLogin)


router.get('/profile',userAuth,userProfile)
router.put('/logout',userAuth,userLogout)


router.put('/reset-password',userResetPassword)
router.put('/profile-update',userAuth,userProfileUpdate)
router.delete('/delete-account',userAuth,userDeleteAccount)

router.get('/check-user', userAuth,checkUser)

router.get("/allProduct", userAuth, getProduct);

router.use("/review",userReview)

export {router as userRoutes}