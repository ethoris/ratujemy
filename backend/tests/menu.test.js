// tests/menu.test.js
const { sequelize, Menu } = require('../models');

describe('🛠️ Test modelu Menu', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test('✅ Tworzenie menu', async () => {
    // Zależnie od Twojego modelu Menu
    const menu = await Menu.create({
      title: 'Home',
      slug: 'home',
      link: '/home',
      label: 'Start'
    });
    expect(menu.id).toBeTruthy();
    expect(menu.title).toBe('Home');
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
