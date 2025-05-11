import { generateImage } from "../services/imageService.js";
import db from "../config/db.js";

export const createImage = async (req, res, next) => {
  try {
    const userId = req.userId;

    const user = db
      .prepare("SELECT image_count FROM users WHERE id = ?")
      .get(userId);

    if (user.image_count >= 5) {
      return res.status(403).send({
        error: "Image limit reached",
        message: "You've reached your limit of 5 images",
      });
    }

    const { prompt, options } = req.body;

    if (!prompt || prompt.trim().length === 0) {
      return res.status(400).send({ error: "Invalid prompt" });
    }

    const { image, format } = await generateImage(prompt, options);

    // Increment user's image count
    db.prepare(
      "UPDATE users SET image_count = image_count + 1 WHERE id = ?"
    ).run(userId);

    res.setHeader("X-Remaining-Images", 5 - (user.image_count + 1));

    res.type(format);
    res.status(201).send(image);
  } catch (error) {
    next(error);
  }
};

export const getRemainingImageCount = async (req, res, next) => {
  try {
    const userId = req.userId;

    // Get current image count
    const user = db
      .prepare("SELECT image_count FROM users WHERE id = ?")
      .get(userId);

    // Calculate remaining
    const remainingCount = Math.max(0, 5 - user.image_count);

    res.status(200).json({ remainingCount });
  } catch (error) {
    next(error);
  }
};
