const express = require("express");
const route = express.Router();
const Classes = require("../models/classModel");

const {
  createClass,
  getClasses,
  getClass,
  updateClass,
  deleteClass,
} = require("../controllers/classController");

route.post("/", createClass);

route.get("/", getClasses);
route.get("/:id", getClass);
route.put("/:id", updateClass);
route.delete("/:id", deleteClass);

module.exports = route;
