const nodemailer = require('nodemailer');
const config = require('../config/env/development');

const transporter = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: config.SMTP_PORT,
  secure: config.SMTP_PORT === 465, // Ustawia SSL, jeśli port to 465
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASSWORD
  }
});

exports.sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: config.EMAIL_SENDER,
      to: to,
      subject: subject,
      text: text
    });
    console.log(`✅ E-mail wysłany do: ${to}`);
  } catch (error) {
    console.error('❌ Błąd wysyłania e-maila:', error.message);
  }
};
