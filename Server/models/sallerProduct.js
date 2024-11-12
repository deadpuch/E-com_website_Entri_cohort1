import mongoose from "mongoose";

const sellerProductSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    productImage: {
      type: String,
      default: "",
    },

    price: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
    },

    productDescription: {
      type: String,
    },

    cateogory: {
      type: mongoose.Types.ObjectId,
      ref: "Cateogory",
    },

    review: {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },

    sellerDetails: {
      type: mongoose.Types.ObjectId,
      ref: "salesusers",
    
    },
  },

  {
    timestamps: true,
  }
);

export const SELLER_PRODUCTS = mongoose.model(
  "seller_products",
  sellerProductSchema
);
