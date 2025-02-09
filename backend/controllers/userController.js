// controllers/userController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, { attributes: ['id', 'email', 'role'] });
    if (!user) return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    return res.status(200).json(user);
  } catch (error) {
    console.error('Błąd pobierania profilu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;
    if (!newPassword || !confirmPassword) {
      return res.status(400).json({ error: 'Oba pola są wymagane' });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'Hasła nie pasują do siebie' });
    }
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    user.passwordHash = await bcrypt.hash(newPassword, 10);
    await user.save();
    return res.status(200).json({ message: 'Profil zaktualizowany.' });
  } catch (error) {
    console.error('Błąd aktualizacji profilu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    await user.destroy();
    return res.status(200).json({ message: 'Użytkownik usunięty.' });
  } catch (error) {
    console.error('Błąd usuwania profilu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};
