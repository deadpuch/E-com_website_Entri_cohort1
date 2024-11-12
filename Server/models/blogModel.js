import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    content: {
      type: String,
    },

    image: {
      type: String,
    },

    thumbnail: {
      type: String,
      default:"https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.model("blogs", blogSchema);
