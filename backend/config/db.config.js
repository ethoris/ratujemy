const { Sequelize } = require('sequelize');
const config = require('./env/development'); // Wybór środowiska

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: 'postgres',
  port: config.DB_PORT || 5432,
  logging: false,
});

module.exports = sequelize;
