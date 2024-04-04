const express = require("express");
const router = express.Router();
const projectController = require("../controller/project.controller");
router.get("/", projectController.getAllProject);
router.post("/add", projectController.addproject);
router.delete("/delete/:id", projectController.deleteProject);

module.exports = router;
