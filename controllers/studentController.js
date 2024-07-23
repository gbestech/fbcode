const Student = require("../models/studentModels");

const asyncHandler = require("express-async-handler");

//create student
const createStudent = asyncHandler(async (req, res) => {
  try {
    const students = await Student.create(req.body);
    res.status(200).json(students);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
//get all students
//install async handler along while using throw error
//
const getStudents = asyncHandler(async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
//get  a single student
const getStudent = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
//update student
const updateStudent = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body);
    if (!student) {
      res.status(404);
      throw new Error(`Cannot find the student with the ID ${id}`);
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
const deleteStudent = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      res.status(404);
      throw new Error(`Cannot find the student with the ID ${id}`);
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
