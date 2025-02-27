const mongoose = require("mongoose");

const MemeSchema = new mongoose.Schema({
  name: { type: String, required: true }, // `name` is required
  description: { type: String, required: true }, // `description` is required
  imageUrl: { type: String, required: true },
  caption: { type: String },
  userId: { type: String, required: true }
});

const Meme = mongoose.model("Meme", MemeSchema);
module.exports = Meme;
