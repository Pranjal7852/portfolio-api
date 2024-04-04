require("dotenv").config();
const mongoose = require("mongoose");
module.exports.dbConnect = () => {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("db is connected");
    })
    .catch((err) => console.log(err));
};
