// controllers/authController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/env/${env}`);
const validator = require('validator');

exports.register = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Niepoprawny adres e-mail' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Hasło musi mieć min. 6 znaków' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Hasła nie pasują do siebie' });
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Użytkownik już istnieje' });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ email, passwordHash });
    return res.status(201).json({ message: 'Użytkownik zarejestrowany.' });
  } catch (error) {
    console.error('Błąd rejestracji:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'E-mail i hasło są wymagane' });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
    }
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ error: 'Nieprawidłowe hasło' });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, config.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Błąd logowania:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // Zakładamy, że middleware authMiddleware ustawia req.user (z tokena)
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'Użytkownik nie istnieje' });
    }
    await user.destroy();
    return res.status(200).json({ message: 'Użytkownik usunięty.' });
  } catch (error) {
    console.error('Błąd usuwania użytkownika:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};
