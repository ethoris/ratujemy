// backend/middleware/requireAdmin.js
const authMiddleware = require('./authMiddleware');

module.exports = (req, res, next) => {
  // Najpierw weryfikujemy token
  authMiddleware(req, res, () => {
    // Następnie sprawdzamy, czy token zawiera rolę "admin"
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      return res.status(401).json({ error: 'Brak uprawnień administratora' });
    }
  });
};
