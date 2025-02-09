const nodemailer = require('nodemailer');
const config = require('../config/env/development');

let transporterPromise;

if (process.env.NODE_ENV === 'test') {
  // W środowisku testowym używamy Ethereal
  transporterPromise = nodemailer.createTestAccount().then(testAccount => {
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
    // W środowisku testowym nie logujemy, aby nie wywoływać problemów
    return transporter;
  }).catch(err => {
    console.error('Błąd przy tworzeniu konta testowego:', err);
    throw err;
  });
} else {
  // W innych środowiskach korzystamy z konfiguracji z pliku config
  transporterPromise = Promise.resolve(
    nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: true, // np. dla portu 465
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD
      }
    })
  );
}

exports.sendTestEmail = async (req, res, next) => {
  try {
    const transporter = await transporterPromise;
    const payload = req.body; // Oczekujemy, że payload zawiera: to, subject, text

    const info = await transporter.sendMail({
      from: config.EMAIL_SENDER,
      to: payload.to,
      subject: payload.subject,
      text: payload.text
    });

    if (process.env.NODE_ENV === 'test') {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      // W środowisku testowym pomijamy console.log, aby nie logować po zakończeniu testów
      return res.status(200).json({ message: 'Email wysłany (testowy)', previewUrl });
    }

    // W środowisku produkcyjnym/deweloperskim możemy logować, jeśli to potrzebne:
    console.log('Email wysłany:', info);
    return res.status(200).json({ message: 'Email wysłany', info });
  } catch (error) {
    console.error('Błąd wysyłki emaila:', error);
    next(error);
  }
};
