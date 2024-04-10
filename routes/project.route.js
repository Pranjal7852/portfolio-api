const express = require("express");
const router = express.Router();
const projectController = require("../controller/project.controller");
/**
 * @swagger
 * tags:
 *   - name: Project
 *     description: List of Projects
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - projectCategory
 *         - projectName
 *         - projectDesccription
 *       properties:
 *         projectCategory:
 *           type: string
 *           description: The category of the project
 *         projectName:
 *           type: string
 *           description: The name of the project
 *         projectGithub:
 *           type: string
 *           description: The GitHub URL of the project
 *         projectDeployed:
 *           type: string
 *           description: The URL where the project is deployed
 *         projectImage:
 *           type: string
 *           description: The URL of an image of the project
 *         projectDesccription:
 *           type: string
 *           description: A detailed description of the project
 */

/**
 * @swagger
 * /project:
 *   get:
 *     tags:
 *       - Project
 *     summary: Get all projects
 *     description: Returns a list of all projects.
 *     responses:
 *       200:
 *         description: A list of projects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 *       500:
 *         description: Internal server error
 */
router.get("/", projectController.getAllProject);

/**
 * @swagger
 * /project/add:
 *   post:
 *     tags:
 *       - Project
 *     summary: Add a new project
 *     description: Adds a new project to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: New project created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       500:
 *         description: Internal server error
 */
router.post("/add", projectController.addproject);

/**
 * @swagger
 * /project/delete/{id}:
 *   delete:
 *     tags:
 *       - Project
 *     summary: Delete a project
 *     description: Deletes a specific project by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the project to delete
 *     responses:
 *       200:
 *         description: Project deleted successfully.
 *       404:
 *         description: Project not found
 *       500:
 *         description: Internal server error
 */
router.delete("/delete/:id", projectController.deleteProject);

module.exports = router;
