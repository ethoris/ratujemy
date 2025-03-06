const express = require('express');
const router = express.Router();

// Helper – jeśli moduł ma właściwość default, zwróć ją, w przeciwnym razie moduł
const getRouter = (mod) => mod.default || mod;

const authRoutes = require('./v1/authRoutes');
const userRoutes = require('./v1/usersRoutes');
const mediaRoutes = require('./v1/mediaRoutes');
const menuRoutes = require('./v1/menuRoutes');
const seoRoutes = require('./v1/seoRoutes');
const pageRoutes = require('./v1/pageRoutes');
const contactRoutes = require('./v1/contactRoutes');
const emailRoutes = require('./v1/emailRoutes');
const postRoutes = require('./v1/postsRoutes');
const adminRoutes = require('./v1/adminRoutes');
const homepageRoutes = require('./v1/homepageRoutes');

router.use('/auth', getRouter(authRoutes));
router.use('/user', getRouter(userRoutes));
router.use('/media', getRouter(mediaRoutes));
router.use('/menu', getRouter(menuRoutes));
router.use('/seo', getRouter(seoRoutes));
router.use('/page', getRouter(pageRoutes));
router.use('/contact', getRouter(contactRoutes));
router.use('/email', getRouter(emailRoutes));
router.use('/post', getRouter(postRoutes));
router.use('/admin', getRouter(adminRoutes));
router.use('/homepage', getRouter(homepageRoutes));

module.exports = router;
