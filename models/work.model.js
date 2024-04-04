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
    required: true,
  },
  timeStart: {
    type: Date,
    required: true,
  },
  timeEnd: {
    type: Date,
    required: true,
  },
  currentWorking: {
    type: Boolean,
  },
  desccription: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("work", work);
