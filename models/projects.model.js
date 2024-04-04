const mongoose = require("mongoose");

const project = new mongoose.Schema({
  projectCategory: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  projectGithub: {
    type: String,
    required: false,
  },
  projectDeployed: {
    type: String,
    required: false,
  },
  projectImage: {
    type: String,
    required: false,
  },
  projectDesccription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", project);
