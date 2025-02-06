const env = process.env.NODE_ENV || 'development';
const config = require(`./config/env/${env}`);
const express = require('express');
const sequelize = require('./config/db.config');
const routes = require('./routes');
const logger = require('./config/logger.config');
const bodyParser = require('body-parser');
const protectedRoutes = require('./routes/protectedRoute');

const app = express();
app.use(express.json());
app.use('/api', routes);
app.use('/api', protectedRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

sequelize.sync()
  .then(() => {
    logger.info('Baza danych zsynchronizowana');
    app.listen(PORT, () => logger.info(`Serwer działa na porcie ${PORT}`));
    console.log("🔑 JWT_SECRET:", config.JWT_SECRET || "⛔ Nie znaleziono JWT_SECRET!");
  })
  .catch(err => logger.error('Błąd synchronizacji bazy:', err));
  

module.exports = app;

