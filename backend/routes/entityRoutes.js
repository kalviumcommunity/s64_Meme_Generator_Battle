const express = require('express');
const router = express.Router();
const Entity = require('../models/entity');

// Update an entity
router.put('/:id', async (req, res) => {
    try {
        const updatedEntity = await Entity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEntity) return res.status(404).json({ message: "Entity not found" });
        res.json(updatedEntity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an entity
router.delete('/:id', async (req, res) => {
    try {
        const deletedEntity = await Entity.findByIdAndDelete(req.params.id);
        if (!deletedEntity) return res.status(404).json({ message: "Entity not found" });
        res.json({ message: "Entity deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
