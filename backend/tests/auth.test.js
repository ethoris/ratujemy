/**
 * Testy autoryzacji (rejestracja, logowanie, usuwanie użytkownika)
 */
const request = require('supertest');
const { sequelize, User } = require('../models'); 
// ↑ Zakładam, że models/index.js eksportuje { sequelize, User } itd.
const app = require('../index'); 
// ↑ Główny plik aplikacji Express, gdzie np. robisz app.listen()

describe('🔐 Testy autoryzacji', () => {
  beforeAll(async () => {
    // Czyścimy tablicę Users, aby testy zaczynały się "od zera"
    await sequelize.sync({ force: true });
  });

  test('✅ Rejestracja użytkownika /api/v1/auth/register', async () => {
    const payload = {
      email: 'test@example.com',
      password: 'secret123'
    };
    const res = await request(app)
      .post('/api/v1/auth/register')
      .send(payload)
      .expect(201);

    // Sprawdzamy odpowiedź (np. status, zwrotka)
    expect(res.body).toHaveProperty('message', 'Użytkownik zarejestrowany.');
    // sprawdzamy, czy user pojawił się w bazie
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

    // w odpowiedzi powinien być np. token JWT
    expect(res.body).toHaveProperty('token');
    // zapiszmy token do wykorzystania w dalszych testach
    const token = res.body.token;
    expect(token).toBeDefined();
  });

  test('✅ Usuwanie użytkownika /api/v1/auth/delete', async () => {
    // logujemy się, by pobrać token
    const loginRes = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'test@example.com',
        password: 'secret123'
      });
    const token = loginRes.body.token;

    // wywołujemy DELETE, przekazując token w nagłówku
    const deleteRes = await request(app)
      .delete('/api/v1/auth/delete')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(deleteRes.body).toHaveProperty('message', 'Użytkownik usunięty.');
    // sprawdzamy, czy usera nie ma w bazie
    const user = await User.findOne({ where: { email: 'test@example.com' } });
    expect(user).toBeNull();
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
