const app = require('./index');
const { sequelize } = require('./models');
const env = process.env.NODE_ENV || 'development';
const config = require(`./config/env/${env}`);
const PORT = process.env.PORT || 4000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`))
      .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.error(`Port ${PORT} jest już zajęty. Spróbuj użyć innego portu.`);
        } else {
          console.error('Błąd uruchomienia serwera:', err);
        }
      });
    console.log("🔑 JWT_SECRET:", config.JWT_SECRET || "⛔ Nie znaleziono JWT_SECRET!");
  })
  .catch(err => console.error('Błąd synchronizacji bazy:', err));
