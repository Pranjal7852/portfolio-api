const Blog = require("../models/blog.model");

exports.getAllBlogs = async (req, res) => {
  const limit = req.query.limit || 10;
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(limit);
    res.json(blogs);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.addBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message }, err);
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }
    res.status(200).json({ message: "Blog deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
