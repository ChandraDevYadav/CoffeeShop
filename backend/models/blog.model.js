import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: String,
  comment: String,
  date: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: [{ type: String, required: true }], // Now an array
    userImage: { type: String, required: true },
    date: { type: Date, default: Date.now },
    rating: { type: Number, default: 0 },
    author: { type: String, required: true },
    category: { type: String },
    tags: [String],
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
