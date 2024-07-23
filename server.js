require("dotenv").config();
const express = require("express");
const mongodb = require("mongodb");
const studentRoute = require("./routes/studentRoute");
const classRoute = require("./routes/classRoute");
const sectionRoute = require("./routes/sectionRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");
const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());
const mongoose = require("mongoose");
app.use("/api/students", studentRoute);
app.use("/api/classes", classRoute);
app.use("/api/sections", sectionRoute);
app.get("/", (req, res) => {
  res.send("Hello Ahmad ");
});
app.use(errorMiddleware);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
