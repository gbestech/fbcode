const Sections = require("../models/sectionModel");
const asyncHandler = require("express-async-handler");

// Create section
const createSection = asyncHandler(async (req, res) => {
  try {
    const section = await Sections.create(req.body);
    res.status(201).json(section);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all sections
const getSections = asyncHandler(async (req, res) => {
  try {
    const sections = await Sections.find({});
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single section
const getSection = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const section = await Sections.findById(id);
    if (!section) {
      res.status(404).json({ message: `Section not found with ID ${id}` });
      return;
    }
    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update section
const updateSection = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const section = await Sections.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!section) {
      res.status(404).json({ message: `Section not found with ID ${id}` });
      return;
    }
    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete section
const deleteSection = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const section = await Sections.findByIdAndDelete(id);
    if (!section) {
      res.status(404).json({ message: `Section not found with ID ${id}` });
      return;
    }
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  createSection,
  getSections,
  getSection,
  updateSection,
  deleteSection,
};
