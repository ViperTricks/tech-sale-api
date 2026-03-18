const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root route (fix lỗi 404)
app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Tech Sale API is running 🚀",
        time: new Date()
    });
});

// API routes
app.use("/api", userRoutes);

// Handle 404 cho route không tồn tại
app.use((req, res) => {
    res.status(404).json({
        status: "error",
        message: "Route not found"
    });
});

module.exports = app;