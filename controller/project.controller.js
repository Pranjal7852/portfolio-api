const Project = require("../models/projects.model");

exports.getAllProject = async (req, res) => {
  try {
    const project = await Project.find();
    if (!project) {
      res.json({ message: "No project found" });
    }
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.addproject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).send({ message: "Project not found." });
    }

    res.status(200).send({ message: "Project deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
