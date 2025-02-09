// jest.global-setup.js
const { sequelize } = require('./models');

module.exports = async () => {
  // Synchronizujemy wszystkie modele, usuwając istniejące tabele
  await sequelize.sync({ force: true });
  console.log('Global Setup: Baza danych zsynchronizowana');
};