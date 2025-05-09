import jwt from "jsonwebtoken";
import config from "../config/env.js";

const secretKey = process.env.JWT_SECRET_KEY;

export const enforceAuth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; //Bearer token

  if (!token) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Unauthorized" });
  }
};
