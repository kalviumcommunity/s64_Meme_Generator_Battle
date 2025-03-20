const express = require("express");
const router = express.Router();
const Entity = require("./entity");

// **Add a new entity**
router.post("/entities", async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEntity = new Entity({ name, description });
    await newEntity.save();
    res.status(201).json(newEntity);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// **Get all entities**
router.get("/entities", async (req, res) => {
  try {
    const entities = await Entity.find();
    res.json(entities);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
