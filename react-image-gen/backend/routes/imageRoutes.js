import express from "express";
import {
  createImage,
  getRemainingImageCount,
} from "../controllers/imageController.js";
import { enforceAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/generate-image", enforceAuth, createImage);
router.get("/remaining-count", enforceAuth, getRemainingImageCount);

export default router;
