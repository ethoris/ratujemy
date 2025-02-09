const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const config = require('../config/env/development');
const Contact = require('../models/Contact');

// Funkcja generująca PDF na podstawie danych formularza
function generatePdf(formData, outputPath) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const stream = fs.createWriteStream(outputPath);
      
      doc.pipe(stream);
      doc.fontSize(16).text('Formularz Kontaktowy', { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(`Imię: ${formData.firstName}`);
      doc.text(`Nazwisko: ${formData.lastName}`);
      doc.text(`Telefon: ${formData.phone}`);
      doc.text(`E-mail: ${formData.email || 'Brak'}`);
      doc.moveDown();
      doc.text(`Opis sytuacji:`);
      doc.text(formData.situationDescription, { indent: 20 });
      doc.moveDown();
      doc.text(`Typ urządzenia: ${formData.deviceType}`);
      
      doc.end();
      
      stream.on('finish', () => resolve(outputPath));
      stream.on('error', reject);
    } catch (error) {
      reject(error);
    }
  });
}

// Konfiguracja transportera nodemailer
// Zakładamy, że transporter został zainicjowany globalnie lub w podobny sposób – poniżej przykład konfiguracji,
// który w środowisku testowym (NODE_ENV === 'test') wykorzystuje Ethereal.
let transporterPromise;
if (process.env.NODE_ENV === 'test') {
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
    return transporter;
  }).catch(err => {
    console.error('Błąd przy tworzeniu konta testowego:', err);
    throw err;
  });
} else {
  transporterPromise = Promise.resolve(
    nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: true,
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD
      }
    })
  );
}

exports.submitContactForm = async (req, res, next) => {
  try {
    const { firstName, lastName, phone, email, situationDescription, deviceType } = req.body;
    
    if (!firstName || !lastName || !phone || !situationDescription || !deviceType) {
      return res.status(400).json({ error: 'Wszystkie pola oprócz e-maila są wymagane' });
    }
    
    // Zapisujemy dane formularza w bazie danych
    const contactRecord = await Contact.create({ firstName, lastName, phone, email, situationDescription, deviceType });
    
    // Ścieżka do tymczasowego pliku PDF – upewnij się, że folder "uploads" istnieje
    const pdfPath = path.join(__dirname, '..', 'uploads', `contact_${Date.now()}.pdf`);
    
    // Generujemy PDF z danymi formularza
    await generatePdf({ firstName, lastName, phone, email, situationDescription, deviceType }, pdfPath);
    
    const transporter = await transporterPromise;
    
    // Przygotowujemy wiadomość e-mail do administratora z załączonym PDF-em
    const adminMailOptions = {
      from: config.EMAIL_SENDER,
      to: 'pat2382@gmail.com',
      subject: 'Nowy formularz kontaktowy',
      text: 'W załączniku znajdziesz dane z formularza kontaktowego.',
      attachments: [
        {
          filename: path.basename(pdfPath),
          path: pdfPath
        }
      ]
    };
    await transporter.sendMail(adminMailOptions);
    
    // W środowisku testowym pomijamy wysyłkę potwierdzenia dla klienta, aby uniknąć błędów związanych z odbiorcą
    if (email && process.env.NODE_ENV !== 'test') {
      const confirmationMailOptions = {
        from: config.EMAIL_SENDER,
        to: email,
        subject: 'Potwierdzenie przyjęcia formularza kontaktowego',
        text: 'Dziękujemy za kontakt. Otrzymaliśmy Twoje zgłoszenie i wkrótce się odezwiemy.'
      };
      await transporter.sendMail(confirmationMailOptions);
    }
    
    // Opcjonalnie usuwamy tymczasowy plik PDF
    fs.unlink(pdfPath, (err) => {
      if (err) console.error('Błąd usuwania pliku PDF:', err);
    });
    
    return res.status(200).json({ message: 'Formularz wysłany, dziękujemy za kontakt.', contact: contactRecord });
  } catch (error) {
    console.error('Błąd obsługi formularza kontaktowego:', error);
    next(error);
  }
};
