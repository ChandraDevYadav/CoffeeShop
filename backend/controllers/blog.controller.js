import Blog from "../models/blog.model.js";

// Create Blog
export const createBlog = async (req, res) => {
  try {
    const { title, description, rating, author, category, tags } = req.body;

    const newBlog = new Blog({
      title,
      description,
      image: req.files["image"].map((file) => file.filename), // Now an array
      userImage: req.files["userImage"][0].filename,
      rating,
      author,
      category,
      tags: tags ? tags.split(",") : [],
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Blog
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addCommentToBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const { user, comment } = req.body;
    blog.comments.push({ user, comment });
    await blog.save();

    res.status(201).json(blog.comments);
  } catch (err) {
    console.error("Error adding comment:", err);
    res.status(500).json({ message: "Server error" });
  }
};
