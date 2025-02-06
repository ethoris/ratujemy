const express = require('express');
const emailRoutes = require('./email');
const postRoutes = require('./posts');
const mediaRoutes = require('./media');
const menuRoutes = require('./menu');
const seoRoutes = require('./seo');
const authRoutes = require('./auth');
const router = express.Router();

router.use('/pages', require('./pages'));
router.use('/posts', postRoutes);
router.use('/media', mediaRoutes);
router.use('/menu', menuRoutes);
router.use('/seo', seoRoutes);
router.use('/email', emailRoutes);
router.use('/auth', authRoutes);

module.exports = router;
