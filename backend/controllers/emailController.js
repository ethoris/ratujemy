const emailService = require('../config/email.config');

exports.sendEmail = async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    if (!to || !subject || !text) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }

    await emailService.sendEmail(to, subject, text);
    res.status(200).json({ message: 'E-mail wysłany!' });
  } catch (error) {
    console.error('❌ Błąd wysyłania e-maila:', error);
    res.status(500).json({ error: 'Błąd wysyłania e-maila', details: error.message });
  }
};
