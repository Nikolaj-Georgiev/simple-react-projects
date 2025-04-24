// import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const secretKey = process.env.JWT_SECRET_KEY;

export function createUser(email, password) {}

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
