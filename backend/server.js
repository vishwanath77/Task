// server.js or app.js (your Node.js server)
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const cors = require("cors");

// Allow requests from frontend on localhost:3000
app.use(cors({
  origin: "http://localhost:3000", // Adjust this if necessary
}));

app.use(express.json()); // For parsing application/json

// Endpoint to save exercises to data.json
app.post('/save-exercises', (req, res) => {
  const exercises = req.body;

  // Define the path to the data.json file
  const filePath = path.join(__dirname, 'data.json');

  // Save the exercises to the file
  fs.writeFile(filePath, JSON.stringify(exercises, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving exercises' });
    }
    res.status(200).json({ message: 'Exercises saved successfully' });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
