import express from "express";
import config from "./config/env.js";
import authRoutes from "./routes/authRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(express.json());

// CORS setup
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

// Routes
app.use("/auth", authRoutes);
app.use("/images", imageRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
