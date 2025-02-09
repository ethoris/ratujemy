const express = require('express');
const router = express.Router();
const { sendTestEmail } = require('../../controllers/emailController');

/**
 * @swagger
 * /email/send:
 *   post:
 *     summary: Wysyłka testowego e-maila
 *     description: Wysyła e-mail testowy. W środowisku testowym używa Ethereal.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - to
 *               - subject
 *               - text
 *             properties:
 *               to:
 *                 type: string
 *                 example: "jan.kowalski@example.com"
 *               subject:
 *                 type: string
 *                 example: "Testowy e-mail"
 *               text:
 *                 type: string
 *                 example: "To jest testowy e-mail."
 *     responses:
 *       200:
 *         description: Email wysłany.
 */
router.post('/send', sendTestEmail);

module.exports = router;
