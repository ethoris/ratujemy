const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const { createClient } = require('redis');
const config = require('./config/env/development');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const db = require('./models');
const path = require('path');

const app = express();
app.set('trust proxy', 1);

// Podstawowa konfiguracja
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfiguracja CORS – dozwolone domeny
const corsOptions = {
  origin: ['https://twoja-zaufana-domena.com', 'http://localhost:3000'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Konfiguracja klienta Redis
const redisClient = createClient({
  url: config.REDIS_URL || 'redis://localhost:6379'
});
redisClient.connect().catch(console.error);

// Rate limiting – stosujemy tylko w środowiskach innym niż testowe
if (process.env.NODE_ENV !== 'test') {
  const limiterAnon = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    store: new RedisStore({ sendCommand: (...args) => redisClient.sendCommand(...args) }),
    message: 'Za dużo żądań, spróbuj ponownie później'
  });

  const limiterAuth = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    store: new RedisStore({ sendCommand: (...args) => redisClient.sendCommand(...args) }),
    message: 'Za dużo żądań, spróbuj ponownie później'
  });

  // W zależności od obecności użytkownika wybieramy odpowiedni limiter
  app.use('/api/v1/', (req, res, next) => {
    if (req.user) {
      return limiterAuth(req, res, next);
    }
    return limiterAnon(req, res, next);
  });
}

app.set('models', db);

// Montujemy główny router (wszystkie endpointy API)
app.use('/api/v1', routes);

// Globalna obsługa błędów
app.use(errorHandler);

// Dokumentacja API za pomocą Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;

app.use(express.static(path.join(__dirname, 'public')));

// Dla SPA - przekierowanie wszystkich nieznalezionych tras do index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});