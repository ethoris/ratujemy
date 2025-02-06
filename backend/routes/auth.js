const express = require('express');
const { register, login, deleteUser } = require('../controllers/authController');
const passport = require('passport');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/protected-route', authMiddleware, (req, res) => {
  res.json({ message: 'Dostęp przyznany!', user: req.user });
});
router.delete('/users/:id', authMiddleware, deleteUser);


router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/dashboard');
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/dashboard');
});


module.exports = router;
