const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog.controller");

router.get("/", blogController.getAllBlogs);
router.post("/add", blogController.addBlog);
router.delete("/delete/:id", blogController.deleteBlog);

module.exports = router;
