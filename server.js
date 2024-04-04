const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { dbConnect } = require("./db/dbConnect");
const morgan = require("morgan");
const workExperience = require("./routes/work.route");
const project = require("./routes/project.route");
//importing environment variables
require("dotenv").config();

const app = express();

// middelwares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// static public route
app.use("/public", express.static("public"));
const port = 8000 || process.env.PORT;
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ apiVersion: "1.0", author: "Pranjal Goyal", status: 200 });
});

// resume pdf route
app.get("/resume", (req, res) => {
  const pdfPath = path.join(
    __dirname + "/public/pdf/PranjalGoyal_ResumeFullStack_Feb2024.pdf"
  );
  res.sendFile(pdfPath, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred, unable to display the file");
    }
  });
});

//routes
app.use("/work", workExperience);
app.use("/project", project);
// server starting scrpit
app.listen(port || process.env.PORT, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const startServer = async () => {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
  }
};

startServer();
