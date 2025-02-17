// backend/middleware/requireAdmin.js
const jwt = require('jsonwebtoken');
const config = require('../config/env/development');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Brak tokena' });
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Nieprawidłowy token' });
    }
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Brak uprawnień administratora' });
    }
    req.user = decoded;
    next();
  });
};
