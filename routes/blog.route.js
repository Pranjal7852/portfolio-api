const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog.controller");

/**
 * @swagger
 * tags:
 *   - name: Blog
 *     description: Endpoints for Blog application
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       required:
 *         - title
 *         - body
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the blog post
 *         subtitle:
 *           type: string
 *           description: Subtitle of the blog post
 *         body:
 *           type: string
 *           description: Main content of the blog post
 *         image:
 *           type: string
 *           description: URL to an image associated with the blog post
 *         clapCount:
 *           type: integer
 *           description: The number of claps the blog post has received
 *           default: 0
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the blog post was created
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *           description: A list of skills highlighted in the blog post
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags associated with the blog post
 */

/**
 * @swagger
 * /blog:
 *   get:
 *     tags:
 *       - Blog
 *     summary: Get all blogs
 *     description: Retrieves a list of blogs, with an optional query parameter to limit the number of blogs returned, sorted by creation date in descending order.
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Maximum number of blogs to return
 *         required: false
 *     responses:
 *       200:
 *         description: A list of blogs.
 *         content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the blog post
 *                 required: true
 *               subtitle:
 *                 type: string
 *                 description: Subtitle of the blog post
 *               body:
 *                 type: string
 *                 description: Main content of the blog post
 *                 required: true
 *               image:
 *                 type: string
 *                 description: URL to an image associated with the blog post
 *               clapCount:
 *                 type: integer
 *                 description: The number of claps the blog post has received
 *                 default: 0
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the blog post was created
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: A list of skills highlighted in the blog post
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Tags associated with the blog post
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get("/", blogController.getAllBlogs);

/**
 * @swagger
 * /blog/add:
 *   post:
 *     tags:
 *       - Blog
 *     summary: Add a new blog
 *     description: Adds a new blog to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the blog post
 *               subtitle:
 *                 type: string
 *                 description: Subtitle of the blog post
 *               body:
 *                 type: string
 *                 description: Main content of the blog post
 *               image:
 *                 type: string
 *                 description: URL to an image associated with the blog post
 *               clapCount:
 *                 type: integer
 *                 description: The number of claps the blog post has received
 *                 default: 0
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the blog post was created
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: A list of skills highlighted in the blog post
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Tags associated with the blog post
 *     responses:
 *       201:
 *         description: New blog created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/add", blogController.addBlog);

/**
 * @swagger
 * /blog/delete/{id}:
 *   delete:
 *     tags:
 *       - Blog
 *     summary: Delete a blog
 *     description: Deletes a specific blog by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the blog to delete
 *     responses:
 *       200:
 *         description: Blog deleted successfully.
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal server error
 */
router.delete("/delete/:id", blogController.deleteBlog);

module.exports = router;
