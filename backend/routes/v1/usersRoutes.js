// routes/v1/userRoutes.js
const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, deleteProfile } = require('../../controllers/userController');
const authMiddleware = require('../../middleware/authMiddleware');

router.get('/profile', authMiddleware, getProfile);
router.patch('/profile', authMiddleware, updateProfile);
router.delete('/profile', authMiddleware, deleteProfile);

module.exports = router;
