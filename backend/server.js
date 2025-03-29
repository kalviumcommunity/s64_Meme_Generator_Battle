const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const entityRoutes = require("./entityRoutes");
const authRoutes = require("./routes/auth");
const memeRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS

// Routes
app.use("/auth", authRoutes);
app.use("/api", memeRoutes); // Meme-related API endpoints
app.use("/api", entityRoutes); // Entity-related API endpoints

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
