const express = require("express");
const router = express.Router();
const workController = require("../controller/work.controller");
/**
 * @swagger
 * tags:
 *   - name: Work Experience
 *     description: Work experience endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Work:
 *       type: object
 *       required:
 *         - companyRole
 *         - companyName
 *         - timeStart
 *         - description
 *       properties:
 *         companyRole:
 *           type: string
 *           description: The role held at the company
 *         companyName:
 *           type: string
 *           description: The name of the company
 *         companyLink:
 *           type: string
 *           description: Link to the company's website
 *         timeStart:
 *           type: string
 *           format: date
 *           description: The start date of the employment or role
 *         timeEnd:
 *           type: string
 *           format: date
 *           description: The end date of the employment or role, null if currently working
 *         currentWorking:
 *           type: boolean
 *           description: Flag indicating whether the individual is currently working in this role
 *         description:
 *           type: array
 *           items:
 *             type: string
 *           description: List of responsibilities and descriptions of the work done
 */

/**
 * @swagger
 * /work:
 *   get:
 *     tags:
 *       - Work Experience
 *     summary: Get all work experiences
 *     description: Returns a list of all work experiences.
 *     responses:
 *       200:
 *         description: A list of work experiences.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Work'
 *       500:
 *         description: Internal server error
 */
router.get("/", workController.getAllWork);

/**
 * @swagger
 * /work/add:
 *   post:
 *     tags:
 *       - Work Experience
 *     summary: Add a new work experience
 *     description: Adds a new work experience to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Work'
 *     responses:
 *       200:
 *         description: New work experience created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Work'
 *       500:
 *         description: Internal server error
 */
router.post("/add", workController.addWork);

/**
 * @swagger
 * /work/delete/{id}:
 *   delete:
 *     tags:
 *       - Work Experience
 *     summary: Delete a work experience
 *     description: Deletes a specific work experience by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the work experience to delete
 *     responses:
 *       200:
 *         description: Work experience deleted successfully.
 *       404:
 *         description: Work experience not found
 *       500:
 *         description: Internal server error
 */
router.delete("/delete/:id", workController.deleteWork);

module.exports = router;
