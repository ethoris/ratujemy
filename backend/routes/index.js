// routes/index.js
const express = require('express');
const router = express.Router();

// Importujemy routery przy użyciu ścieżek relatywnych
const authRoutes = require('./v1/authRoutes');
const usersRoutes = require('./v1/usersRoutes');
const mediaRoutes = require('./v1/mediaRoutes');
const menuRoutes = require('./v1/menuRoutes');
const seoRoutes = require('./v1/seoRoutes');
const pageRoutes = require('./v1/pageRoutes');
const emailRoutes = require('./v1/emailRoutes');

// Montujemy routery
router.use('/auth', authRoutes);
router.use('/user', usersRoutes);
router.use('/media', mediaRoutes);
router.use('/menu', menuRoutes);
router.use('/seo', seoRoutes);
router.use('/page', pageRoutes);
router.use('/email', emailRoutes);

module.exports = router;
