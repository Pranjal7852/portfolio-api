const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  clapCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  skills: {
    type: [String],
    required: false,
  },
  tags: {
    type: [String],
    required: false,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
