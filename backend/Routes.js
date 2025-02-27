const express = require("express");
const router = express.Router();
const Meme = require("./model.js"); // Import MongoDB Model

// ✅ Create a Meme (POST)
router.post("/memes", async (req, res) => {
    console.log("Incoming data:", req.body); // Debugging line
    try {
        const { name, description, imageUrl, caption, userId } = req.body;
        const newMeme = new Meme({ name, description, imageUrl, caption, userId });
        await newMeme.save();
        res.status(201).json(newMeme);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// ✅ Retrieve All Memes (GET)
router.get("/memes", async (req, res) => {
  try {
    const memes = await Meme.find();
    res.json(memes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Retrieve a Single Meme by ID (GET)
router.get("/memes/:id", async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);
    if (!meme) return res.status(404).json({ error: "Meme not found" });
    res.json(meme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update Meme (PUT)
router.put("/memes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Updating Meme with ID:", id);

        const updatedMeme = await Meme.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedMeme) {
            console.log("Meme not found in database");
            return res.status(404).json({ error: "Meme not found" });
        }

        console.log("Meme updated successfully:", updatedMeme);
        res.status(200).json(updatedMeme);
    } catch (error) {
        console.error("Error updating meme:", error);
        res.status(500).json({ error: error.message });
    }
});


// ✅ Delete Meme (DELETE)
router.delete("/memes/:id", async (req, res) => {
  try {
    const deletedMeme = await Meme.findByIdAndDelete(req.params.id);
    if (!deletedMeme) return res.status(404).json({ error: "Meme not found" });
    res.json({ message: "Meme deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
