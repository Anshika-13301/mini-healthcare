const express = require("express");
const cors = require("cors");

const supportRoutes = require("./Routes/supportRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/support", supportRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Mini Healthcare Backend is running");
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
