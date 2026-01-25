const express = require("express");
const cors = require("cors");
const supportRoutes = require("./Routes/supportRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "https://frontend-7ugq.onrender.com", // frontend link added here
  methods: ["GET", "POST", "PUT", "DELETE"],    // allowed HTTP methods
  credentials: true                             // if you need cookies/auth
}));

app.use(express.json());

// Routes
app.use("/api/support", supportRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Mini Healthcare Backend is running");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
