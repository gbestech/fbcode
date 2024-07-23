const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Please enter the student's name"],
  },
  lname: {
    type: String,
    required: [true, "Please enter the student's lname"],
  },
  gender: {
    type: String,
    required: [true, "Please enter the student's gender"],
  },
  address: {
    type: String,
    required: [true, "Please enter the student's address"],
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: [true, "Please enter the class ID"],
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sections",
    required: [true, "Please enter the session ID"],
  },
  image: {
    type: String,
    required: [true, "Please enter the student's age"],
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
