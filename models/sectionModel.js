const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema({
  section_name: {
    type: String,
    required: true,
    unique: true,
  },
});
const Sections = mongoose.model("Sections", sectionSchema);
module.exports = Sections;
