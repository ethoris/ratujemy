// backend/config/db.config.js
const { Sequelize } = require('sequelize');
const currentEnv = process.env.NODE_ENV || 'development';
const config = require(`./env/${currentEnv}`);

// Tworzymy instancję Sequelize na podstawie pliku env/ (development.js, production.js, test.js)
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: 'postgres',
  port: config.DB_PORT || 5432,
  logging: false,
});

module.exports = sequelize;
