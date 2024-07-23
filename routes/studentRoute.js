const express = require("express");
const route = express.Router();
const Student = require("../models/studentModels");

const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

route.post("/", createStudent);

route.get("/", getStudents);
route.get("/:id", getStudent);
route.put("/:id", updateStudent);
route.delete("/:id", deleteStudent);

module.exports = route;
