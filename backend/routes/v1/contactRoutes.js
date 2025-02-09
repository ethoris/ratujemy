const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../../controllers/contactController');

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Wysłanie formularza kontaktowego
 *     description: Przyjmuje dane formularza, generuje PDF, zapisuje dane w bazie oraz wysyła e-mail do administracji i potwierdzenie dla klienta.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - phone
 *               - situationDescription
 *               - deviceType
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Jan"
 *               lastName:
 *                 type: string
 *                 example: "Kowalski"
 *               phone:
 *                 type: string
 *                 example: "123456789"
 *               email:
 *                 type: string
 *                 example: "jan.kowalski@example.com"
 *               situationDescription:
 *                 type: string
 *                 example: "Mój telefon nie włącza się."
 *               deviceType:
 *                 type: string
 *                 enum: ["Pendrive/Karta Flash", "Dysk HDD/SSD", "Telefon", "Tablet"]
 *                 example: "Telefon"
 *     responses:
 *       200:
 *         description: Formularz wysłany, dane zapisane, potwierdzenie wysłane.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Formularz wysłany, dziękujemy za kontakt."
 *                 contact:
 *                   $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Błąd walidacji lub przetwarzania.
 */
router.post('/', submitContactForm);

module.exports = router;
