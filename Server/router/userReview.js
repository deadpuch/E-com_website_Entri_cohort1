import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import { allReview, createReview, deleteReview, editReview } from "../controllers/reviewController.js";

const router=express.Router();

router.post("/create_review",userAuth,createReview)
router.put("/edit_review/:id",userAuth,editReview)

router.get("/allreview",userAuth,allReview)
router.delete("/delete_review/:id",userAuth,deleteReview)




export{router as userReview }