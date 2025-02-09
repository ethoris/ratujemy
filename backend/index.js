const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors'); // Importujemy moduł CORS
const routes = require('./routes');
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const { createClient } = require('redis');
const config = require('./config/env/development');
const errorHandler = require('./middleware/errorHandler'); // Import globalnego middleware obsługi błędów
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); // Importujemy naszą specyfikację Swagger


const app = express();

// Ustawienia podstawowe
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfiguracja CORS – tutaj możesz ograniczyć dostęp tylko do zaufanych domen
const corsOptions = {
  origin: ['https://twoja-zaufana-domena.com'], // Wprowadź tutaj domeny, którym chcesz zezwolić na dostęp
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); // Montujemy CORS

// Konfiguracja klienta Redis
const redisClient = createClient({
  url: config.REDIS_URL || 'redis://localhost:6379'
});
redisClient.connect().catch(console.error);

// Konfiguracja limiterów
const limiterAnon = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minut
  max: 50,
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(...args)
  }),
  message: 'Za dużo żądań, spróbuj ponownie później'
});

const limiterAuth = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(...args)
  }),
  message: 'Za dużo żądań, spróbuj ponownie później'
});

// Middleware rate limiting – ustawiony przed głównymi trasami
app.use('/api/v1/', (req, res, next) => {
  if (req.user) {
    return limiterAuth(req, res, next);
  }
  return limiterAnon(req, res, next);
});

// Montujemy główny router aplikacji
app.use('/api/v1', routes);
// Globalna obsługa błędów – musi być dodana na końcu!
app.use(errorHandler);

// Montujemy dokumentację API pod ścieżką /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
