const express = require("express");
const multer = require("multer");
const Event = require("../models/Event");
const router = express.Router();
const path = require("path");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

// Add a new event with image upload
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description, date, location, time } = req.body;
  const image = req.file ? req.file.path : ""; // Path of the uploaded image

  const event = new Event({
    title,
    description,
    date,
    location,
    time,
    image,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;