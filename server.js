const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Basic /ping route
app.get("/ping", (req, res) => {
    res.status(200).send("Pong!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
