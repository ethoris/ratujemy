// tests/user.test.js
const { sequelize, User } = require('../models');

describe('🛠️ Test modelu User', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test('✅ Tworzenie użytkownika', async () => {
    const user = await User.create({
      email: 'jane.doe@example.com',
      passwordHash: 'someHash'
    });
    expect(user.id).toBeTruthy();
    expect(user.email).toBe('jane.doe@example.com');
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
