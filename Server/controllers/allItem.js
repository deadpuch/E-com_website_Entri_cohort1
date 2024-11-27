import { PRODUCT } from "../models/productModel.js";

export const allItem = async (req, res, next) => {
  try {
    const allProducts = await PRODUCT.find()
      .populate("admin_data", "-password -createdAt -updatedAt -__v")
      .populate(
        "seller_data",
        "-password -GST_no  -Active  -__v  -updatedAt -createdAt"
      )
      .populate({
        path: "review", // Populate reviews
        populate: { path: "user_data", select: "User_name profilePic" }, // Populate user data in reviews if needed
      });

    res.json({ message: "all products fetched", data: allProducts });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const latestItem = async (req, res, next) => {
  try {
    const allProducts = await PRODUCT.find()
      .populate("admin_data", "-password -createdAt -updatedAt -__v")
      .populate(
        "seller_data",
        "-password -GST_no  -Active  -__v  -updatedAt -createdAt"
      )
      .populate({
        path: "review", // Populate reviews
        populate: { path: "user_data", select: "User_name profilePic" }, // Populate user data in reviews if needed
      });

    
    res.json({ message: "all products fetched", data: allProducts });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};
