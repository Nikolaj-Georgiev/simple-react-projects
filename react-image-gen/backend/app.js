import express from "express";
import { createUser, enforceAuth, login } from "./middleware/auth.js";
import { generateImage } from "./image.js";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      return res.status(400).send({ error: "Invalid email or password" });
    }

    const token = createUser(email, password);
    res.status(201).send({ message: "User created successfully", token });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Creating user failed, invalid credentials" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = login(email, password);
    res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    if (error.statusCode === 400) {
      return res.status(400).send({ error: error.message });
    }

    res
      .status(500)
      .json({ error: "Login failed, please check your credentials" });
  }
});

app.post("/generate-image", enforceAuth, async (req, res) => {
  const { prompt, options } = req.body; // options => aspect_ratio, format, quality

  const { image, format } = await generateImage(prompt, options);
  res.type(format);
  res.status(201).send(image);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
