// backend/utils/sendEmail.js
const nodemailer = require('nodemailer');
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/env/${env}`);

if (env === 'test') {
  // W środowisku testowym zwracamy symulowaną odpowiedź, bez nawiązywania połączenia SMTP.
  module.exports = async function sendEmail(options) {
    console.log("Test environment: Symulacja wysyłki emaila", options);
    return Promise.resolve({ message: "Email wysłany" });
  };
} else {
  // W środowisku innym niż test tworzymy rzeczywisty transporter
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: true, // true dla portu 465, false dla innych
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASSWORD
    }
  });

  module.exports = async function sendEmail(options) {
    const mailOptions = {
      from: config.EMAIL_SENDER,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html
    };
    return transporter.sendMail(mailOptions);
  };
}
