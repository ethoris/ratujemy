const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/env/development');

const router = express.Router();

// Middleware do weryfikacji tokena
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Brak tokena, autoryzacja odmówiona' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Nieprawidłowy token' });
  }
};

// Endpoint chroniony - wymaga tokena
router.get('/protected-route', authenticate, (req, res) => {
  res.json({ message: 'Dostęp do zasobu chronionego', user: req.user });
});

module.exports = router;
