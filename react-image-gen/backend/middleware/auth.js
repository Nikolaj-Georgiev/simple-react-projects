import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import db from '../db.js';

const secretKey = process.env.JWT_SECRET_KEY;

export function createUser(email, password) {
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

  if (user) {
    throw new Error('User creation failed, invalid credentials');
  }

  const hashedPassword = bcrypt.hashSync(password, 12);
  const result = db
    .prepare('INSERT INTO users (email, password) VALUES (?, ?)')
    .run(email, hashedPassword);

  const token = jwt.sign({ userId: result.lastInsertRowid }, secretKey, {
    expiresIn: '1h',
  });
  // jwt.sign(
  //   { userId: result.lastInsertRowid },
  //   secretKey,
  //   { expiresIn: '1h' },
  //   (err, token) => {
  //     if (err) {
  //       throw new Error('Token generation failed');
  //     }
  //     return token;
  //   });

  return token;
}

export function login(email, password) {}

// export const auth = (req, res, next) => {
//   try {
//     const token = req.header('Authorization').replace('Bearer ', '');
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.userId = decoded.userId;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: 'Please authenticate' });
//   }
// };
