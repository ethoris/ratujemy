// backend/config/logger.config.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, errors } = format;

// Definicja własnego formatu logów
const customFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
});

const logger = createLogger({
  level: 'info', // Ustaw minimalny poziom logowania
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }), // Włącz logowanie stack trace dla błędów
    customFormat
  ),
  transports: [
    new transports.Console(), // Logi do konsoli
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // Tylko błędy do pliku
    new transports.File({ filename: 'logs/combined.log' }) // Wszystkie logi do innego pliku
  ]
});

// Opcjonalnie – jeśli jesteś w środowisku deweloperskim, możesz dodać dodatkowy transport
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple()
  }));
}

module.exports = logger;
