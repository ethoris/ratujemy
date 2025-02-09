const sendEmail = require('../config/email.config');

exports.sendTestEmail = async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;
    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({ error: 'Wszystkie pola (to, subject, text lub html) są wymagane' });
    }
    await sendEmail({ to, subject, text, html });
    return res.status(200).json({ message: 'Email wysłany' });
  } catch (error) {
    console.error('Błąd wysyłania emaila:', error);
    return res.status(500).json({ error: 'Błąd wysyłania emaila' });
  }
};
