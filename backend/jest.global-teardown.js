// jest.global-teardown.js
const { sequelize } = require('./models');

module.exports = async () => {
  await sequelize.close();
  console.log('Global Teardown: Połączenie z bazą zostało zamknięte');
};
