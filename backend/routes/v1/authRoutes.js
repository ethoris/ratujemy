// routes/v1/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, deleteUser } = require('../../controllers/authController');
const authMiddleware = require('../../middleware/authMiddleware');
const validateRegister = require('../../middleware/validateRegister');

router.post('/register', validateRegister, register);
router.post('/login', login);
router.delete('/delete', authMiddleware, deleteUser);

module.exports = router;
