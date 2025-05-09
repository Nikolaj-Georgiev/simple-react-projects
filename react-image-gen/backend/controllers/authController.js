import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { findUserByEmail, createUserRecord } from "../models/userModel.js";
import config from "../config/env.js";

export const signup = async (req, res, next) => {
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

    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return res.status(400).send({ error: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 12);
    const result = createUserRecord(email, hashedPassword);

    const token = jwt.sign(
      { userId: result.lastInsertRowid },
      config.jwtSecret,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).send({ message: "User created successfully", token });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = findUserByEmail(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, config.jwtSecret, {
      expiresIn: "1h",
    });

    res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
};
