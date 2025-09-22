
// Simple Node.js backend for School Club Platform
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Temporary in-memory "database"
let clubs = [
  { id: 1, name: "Robotics Club", description: "Build robots and join competitions" },
  { id: 2, name: "Drama Club", description: "Perform plays and cultural shows" }
];

// Routes
app.get("/", (req, res) => {
  res.send("School Club & Organization Management Platform Backend is running!");
});

// Get all clubs
app.get("/api/clubs", (req, res) => {
  res.json(clubs);
});

// Add new club
app.post("/api/clubs", (req, res) => {
  const newClub = { id: clubs.length + 1, ...req.body };
  clubs.push(newClub);
  res.status(201).json(newClub);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
