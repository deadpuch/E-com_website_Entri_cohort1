import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { SELLER_PRODUCTS } from "../models/sallerProduct.js";
import { Sales } from "../models/salesModel.js";

export const sellerAddProduct = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the token and extract the sales user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const salesUser = await Sales.findById(decoded.id);

    if (!salesUser) {
      return res.status(404).json({ message: "Sales user not found" });
    }

    const {
      productName,
      productImage,
      price,
      thumbnail,
      productDescription,
      cateogory,
      review,
      sellerDetails,
    } = req.body;

    if (!productName || !price) {
      return res.status(400).json({ message: "field required" });
    }

    const newProduct = new SELLER_PRODUCTS({
      productName,
      productImage,
      price,
      thumbnail,
      productDescription,
      cateogory,
      review,
      sellerDetails: salesUser._id,
    });

    await newProduct.save();

    res.json({ message: "seller product added successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const sellerEditProduct = async (req, res, next) => {
  try {
    const {
      productName,
      productImage,
      price,
      thumbnail,
      productDescription,
      cateogory,
      review,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    await SELLER_PRODUCTS.updateOne(
      { _id: req.params.id },
      {
        $set: {
          productName: productName,
          productImage: productImage,
          price: price,
          thumbnail: thumbnail,
          productDescription: productDescription,
          cateogory: cateogory,
          review: review,
        },
      }
    );

    res.json({ message: "product updated successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const sellerProducts = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the token and extract the sales user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const salesUser = await Sales.findById(decoded.id);

    if (!salesUser) {
      return res.status(404).json({ message: "Sales user not found" });
    }

    const fetchProduct = await SELLER_PRODUCTS.find({
      sellerDetails: new mongoose.Types.ObjectId(salesUser),
    }).select("");

    if (!fetchProduct) {
      return res.status(404).json({ message: "no products" });
    }

    res.json({ message: "product fetch successfully", data: fetchProduct });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const deleteProducts = async (req, res, next) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.json({ message: "product not found" });
    }

    await SELLER_PRODUCTS.deleteOne({
      _id: new mongoose.Types.ObjectId(productId),
    });

    res.json({ message: "item deleted successfullty" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};
