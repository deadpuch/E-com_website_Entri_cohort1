import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
    },

    productImage: {
      type: String,
      default: "",
    },

    price: {
      type: String,
      require: true,
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
      require: true,
    },

    review: {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  },

  {
    timestamps: true,
  }
);

export const Product = mongoose.model("products", productSchema);
