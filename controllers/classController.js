const Student_class = require("../models/classModel");

const asyncHandler = require("express-async-handler");

//create student
const createClass = asyncHandler(async (req, res) => {
  try {
    // Check if the class already exists based on certain criteria (e.g., class name)
    const existingClass = await Student_class.findOne({
      class_name: req.body.class_name,
    });
    if (existingClass) {
      // If class already exists, handle it accordingly (e.g., return an error)
      return res.status(400).json({ error: "Class already exists" });
    }

    // Create the class if it doesn't already exist
    const student_class = await Student_class.create(req.body);
    res.status(200).json(student_class);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all students
//install async handler along while using throw error
//
const getClasses = asyncHandler(async (req, res) => {
  try {
    const student_class = await Student_class.find({});
    res.status(200).json(student_class);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
//get  a single student_class
const getClass = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const student_class = await Student_class.findById(id);
    res.status(200).json(student_class);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
//update student_class
const updateClass = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const student_class = await Student_class.findByIdAndUpdate(id, req.body);
    if (!student_class) {
      res.status(404);
      throw new Error(`Cannot find the student with the ID ${id}`);
    }
    res.status(200).json(student_class);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
const deleteClass = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const student_class = await Student_class.findByIdAndDelete(id);
    if (!student_class) {
      res.status(404);
      throw new Error(`Cannot find the student with the ID ${id}`);
    }
    res.status(200).json(student_class);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
module.exports = {
  createClass,
  getClasses,
  getClass,
  updateClass,
  deleteClass,
};
