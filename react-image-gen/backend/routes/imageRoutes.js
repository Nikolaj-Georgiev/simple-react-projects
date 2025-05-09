import express from "express";
import { createImage } from "../controllers/imageController.js";
import { enforceAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/generate-image", enforceAuth, createImage);

export default router;
