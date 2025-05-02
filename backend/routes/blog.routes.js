import express from "express";
import multer from "multer";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
  addCommentToBlog,
} from "../controllers/blog.controller.js";
import path from "path";

const router = express.Router();

// Setup Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/blog/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Create blog with images
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 5 }, // Allow multiple images
    { name: "userImage", maxCount: 1 },
  ]),
  createBlog
);

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlog);
router.post("/:id/comments", addCommentToBlog);

export default router;
