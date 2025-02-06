const jwt = require('jsonwebtoken');
const config = require('../config/env/development'); // ✅ Pobieranie konfiguracji

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Brak tokena, autoryzacja odrzucona' });

  try {
    const verified = jwt.verify(token.replace('Bearer ', ''), config.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Nieprawidłowy lub wygasły token' });
  }
};