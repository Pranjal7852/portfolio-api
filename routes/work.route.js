const express = require("express");
const router = express.Router();
const workController = require("../controller/work.controller");

router.get("/", workController.getAllWork);

router.post("/add", workController.addWork);

// router.post("/", )

module.exports = router;