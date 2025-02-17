const express = require('express');
const router = express.Router();
const requireAdmin = require('../../middleware/requireAdmin');
const { body, validationResult } = require('express-validator');

/**
 * GET /api/admin/users
 * Endpoint dostępny tylko dla administratora – zwraca listę wszystkich użytkowników.
 */
router.get('/users', requireAdmin, async (req, res, next) => {
  try {
    // Zakładamy, że obiekt models jest ustawiony globalnie w aplikacji (np. przez app.set('models', models))
    const models = req.app.get('models');
    const users = await models.User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error('Błąd pobierania użytkowników:', error);
    return res.status(500).json({ message: 'Błąd podczas pobierania użytkowników.' });
  }
});

/**
 * POST /api/admin/homepage
 * Endpoint dostępny tylko dla administratora – aktualizuje ustawienia strony głównej.
 * Walidacja danych wejściowych przy użyciu express-validator.
 */
router.post(
  '/homepage',
  requireAdmin,
  [
    body('title').notEmpty().withMessage('Title jest wymagany'),
    body('content').notEmpty().withMessage('Content jest wymagany')
  ],
  async (req, res, next) => {
    // Walidacja danych wejściowych
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Przykładowa logika aktualizacji ustawień strony głównej.
      // Możesz zastąpić to odpowiednim zapytaniem do modelu, np.:
      // await models.Homepage.update(req.body, { where: { id: 1 } });
      return res.status(200).json({ message: 'Strona główna została zaktualizowana.' });
    } catch (error) {
      console.error('Błąd podczas aktualizacji strony głównej:', error);
      return res.status(500).json({ message: 'Błąd podczas aktualizacji strony głównej.' });
    }
  }
);

module.exports = router;
