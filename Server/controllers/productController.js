import mongoose from "mongoose";
import { Product } from "../models/productModel.js";

export const addProduct = async (req, res, next) => {
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

    if (!productName || !price) {
      return res.status(400).json({ message: "field required" });
    }

    const newProduct = new Product({
      productName,
      productImage,
      price,
      thumbnail,
      productDescription,
      cateogory,
      review,
    });
    await newProduct.save();

    res.json({ message: "product added successfully" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const editProduct = async (req, res, next) => {
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

    await Product.updateOne(
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

export const getProduct = async (req, res, next) => {
  try {
    const fetchProduct = await Product.find().select("");

    res.json({ message: "product fetch successfully", data: fetchProduct });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.json({ message: "product not found" });
    }

    await Product.deleteOne({ _id: new mongoose.Types.ObjectId(productId) });

    res.json({ message: "item deleted successfullty" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || "internal server error" });
  }
};
