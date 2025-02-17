const express = require('express');
const router = express.Router();

const authRoutes = require('./v1/authRoutes');
const userRoutes = require('./v1/usersRoutes'); // Usuń lub zakomentuj, jeśli nie są potrzebne
const mediaRoutes = require('./v1/mediaRoutes');
const menuRoutes = require('./v1/menuRoutes');
const seoRoutes = require('./v1/seoRoutes');
const pageRoutes = require('./v1/pageRoutes');
const contactRoutes = require('./v1/contactRoutes');
const emailRoutes = require('./v1/emailRoutes');
const postRoutes = require('./v1/postsRoutes'); // Usuń lub zakomentuj, jeśli nie są potrzebne
const adminRoutes = require('./v1/adminRoutes'); 
const homepageRoutes = require('./v1/homepageRoutes'); 

router.use('/auth', authRoutes);
router.use('/user', userRoutes); // Usuń lub zakomentuj
router.use('/media', mediaRoutes);
router.use('/menu', menuRoutes);
router.use('/seo', seoRoutes);
router.use('/page', pageRoutes);
router.use('/contact', contactRoutes);
router.use('/email', emailRoutes);
router.use('/post', postRoutes);
router.use('/admin', adminRoutes);
router.use('/homepage', homepageRoutes); // Usuń lub zakomentuj, jeśli nie są potrzebne

module.exports = router;
