import { adminRoutes } from "./adminRoutes.js"
import express from "express"
import {userRoutes} from "./userRoutes.js"
import { salesRoutes } from "./salesRouter.js"

const router=express.Router()

router.use("/user",userRoutes)
router.use("/admin",adminRoutes)
router.use("/sales",salesRoutes)

export {router as apiRouter}