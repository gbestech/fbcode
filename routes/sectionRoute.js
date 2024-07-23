const express = require("express");
const route = express.Router();
const Sections = require("../models/sectionModel");

const {
  createSection,
  getSections,
  getSection,
  updateSection,
  deleteSection,
} = require("../controllers/sectionController");

route.post("/", createSection);

route.get("/", getSections);
route.get("/:id", getSection);
route.put("/:id", updateSection);
route.delete("/:id", deleteSection);

module.exports = route;
