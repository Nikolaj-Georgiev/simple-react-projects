import { generateImage } from "../services/imageService.js";

export const createImage = async (req, res, next) => {
  try {
    const { prompt, options } = req.body;

    if (!prompt || prompt.trim().length === 0) {
      return res.status(400).send({ error: "Invalid prompt" });
    }

    const { image, format } = await generateImage(prompt, options);
    res.type(format);
    res.status(201).send(image);
  } catch (error) {
    next(error);
  }
};
