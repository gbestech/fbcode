const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
  class_name: {
    type: String,
    required: [true, "Please enter your Class Name"],
    unique: true,
  },
  class_code: {
    type: String,
    required: [true, "Please enter your Class Code"],
    unique: true,
  },
  section_name: {
    type: [String],
    required: [true, "Please enter at least one Section Name"],
  },
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
``;
