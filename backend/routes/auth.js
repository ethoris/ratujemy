// tests/auth.test.js
const request = require('supertest');
const { sequelize, User } = require('../models');
const app = require('../index');

describe('🔐 Testy autoryzacji', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test('✅ Rejestracja użytkownika /api/v1/auth/register', async () => {
    const payload = {
      email: 'test@example.com',
      password: 'secret123',
      confirmPassword: 'secret123'
    };
    const res = await request(app)
      .post('/api/v1/auth/register')
      .send(payload)
      .expect(201);

    // Oczekujemy message: "Użytkownik zarejestrowany."
    expect(res.body.message).toBe('Użytkownik zarejestrowany.');

    // Sprawdzamy, czy user w bazie
    const user = await User.findOne({ where: { email: 'test@example.com' } });
    expect(user).not.toBeNull();
  });

  test('✅ Logowanie użytkownika /api/v1/auth/login', async () => {
    const payload = {
      email: 'test@example.com',
      password: 'secret123'
    };
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send(payload)
      .expect(200);

    // Oczekujemy { token }
    expect(res.body).toHaveProperty('token');
  });

  test('✅ Usuwanie użytkownika /api/v1/auth/delete', async () => {
    // Wywołujemy DELETE /api/v1/auth/delete
    const res = await request(app)
      .delete('/api/v1/auth/delete')
      .expect(200);

    // Oczekujemy message: "Użytkownik usunięty."
    expect(res.body.message).toBe('Użytkownik usunięty.');

    // Sprawdzamy, czy usera nie ma w bazie
    const user = await User.findOne({ where: { email: 'test@example.com' } });
    expect(user).toBeNull();
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
