const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS
app.api
app.use("/api", require("./routes"));


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Import and use the routes
const memeRoutes = require("./routes");
app.use("/api", memeRoutes); // All meme-related API endpoints will be prefixed with /api

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

