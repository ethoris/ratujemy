// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/env/${env}`);

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Brak tokena' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;  // { id, email }
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Nieprawidłowy token' });
  }
};
