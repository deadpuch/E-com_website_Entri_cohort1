import mongoose from "mongoose";
import { REVIEW } from "../models/reviewModel.js";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const createReview = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id).select("-password");

    const { rating, comment } = req.body;

    if (!comment || !rating) {
      return res.json({ message: "feedback and rating required" });
    }

    const addReview = new REVIEW({
      user: user,
      rating: rating,
      comment: comment,
    });

    await addReview.save();

    res.json({ message: "review created successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const editReview = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const reviewId = req.params.id;
    const { comment, rating } = req.body;

    const review = await REVIEW.find(
      { user: mongoose.Types.ObjectId(decoded.id) },
      { _id: mongoose.Types.ObjectId(reviewId) }
    );
    if (!review) {
      return res
        .status(404)
        .json({ message: "Review not found or unauthorized access" });
    }

    await updateOne(
      { _id: review._id },
      { $set: { comment: comment, rating: rating } }
    );

    res.json({ message: "review updated" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const allReview = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const allData = await REVIEW.find({
      user: new mongoose.Types.ObjectId(decoded.id),
    });

    res.json({ message: "all review fetched", data: allData });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const reviewId = req.params.id;

    if (!reviewId) {
      return res.json({ message: "review not found" });
    }

    await REVIEW.deleteOne({ _id: new mongoose.Types.ObjectId(reviewId) });
    res.json({ message: "review deleted" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};
