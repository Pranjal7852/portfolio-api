const Work = require("../models/work.model");

exports.getAllWork = async (req, res) => {
  try {
    const work = await Work.find();
    if (!work) {
      res.status(200).json({ message: "no work found" });
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addWork = async (req, res) => {
  try {
    const work = new Work(req.body);
    if (!work) {
      res.json({ message: "check input work" });
    }
    console.log(work);
    await work.save();
    res.status(200).json({ work });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteWork = async (req, res) => {
  try {
    const id = req.params.id;
    const work = await Work.findByIdAndDelete(id);

    if (!work) {
      return res.status(404).send({ message: "Work experience not found." });
    }

    res.status(200).send({ message: "Work experience deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
