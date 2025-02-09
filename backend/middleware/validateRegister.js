const { body, validationResult } = require('express-validator');

const validateRegister = [
  body('email')
    .isEmail()
    .withMessage('Podaj poprawny adres e-mail'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Hasło musi mieć co najmniej 8 znaków'),
  body('confirmPassword')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Hasła nie pasują do siebie'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
  }
];

module.exports = validateRegister;
