import db from "../config/db.js";

export const findUserByEmail = (email) => {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
};

export const createUserRecord = (email, hashedPassword) => {
  return db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, hashedPassword);
};
