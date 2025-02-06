const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/env/development');
const validator = require('validator'); // ✅ Dodajemy walidację e-maila

exports.register = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Niepoprawny format email' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Hasło musi mieć co najmniej 6 znaków' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Hasła nie pasują do siebie' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Użytkownik już istnieje' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, passwordHash: hashedPassword });

    console.log("✅ Rejestracja zakończona sukcesem!")
    res.status(201).json({ message: 'Rejestracja zakończona sukcesem. Zweryfikuj e-mail.' });
  } catch (error) {
    console.error('Błąd rejestracji:', error);
    res.status(500).json({ error: 'Błąd serwera' });
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

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Nieprawidłowe hasło' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      config.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('🚨 Błąd logowania:', error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Sprawdzenie, czy użytkownik istnieje
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Użytkownik nie istnieje' });
    }

    // Usunięcie użytkownika
    await user.destroy();
    res.json({ message: 'Użytkownik został usunięty' });

  } catch (error) {
    console.error('🚨 Błąd usuwania użytkownika:', error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};