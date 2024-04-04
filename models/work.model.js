const mongoose = require("mongoose");

const work = new mongoose.Schema({
  companyRole: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyLink: {
    type: String,
    required: false,
  },
  timeStart: {
    type: Date,
    required: true,
  },
  timeEnd: {
    type: Date,
    required: false,
    default: null,
  },
  currentWorking: {
    type: Boolean,
  },
  desccription: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Work", work);
