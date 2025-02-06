const request = require('supertest');
const app = require('../index');
const config = require('../config/env/test'); // Pobieramy konfigurację

const PORT = config.PORT || 4001; // Używamy zmiennej konfiguracyjnej

describe('🔒 Auth API', () => {
  test('Rejestracja nowego użytkownika', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        email: 'test@example.com',
        password: 'Test1234!',
        confirmPassword: 'Test1234!'
      })
      .set('Accept', 'application/json'); // ✅ Ustawienie nagłówka JSON
  
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toMatch(/Rejestracja zakończona sukcesem/);
  });

  test('❌ Rejestracja - błędny email', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'invalid-email',
      password: 'Test1234!',
      confirmPassword: 'Test1234!'
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/Niepoprawny format email/);
  });

  test('✅ Logowanie użytkownika', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'Test1234!'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
  });

  test('❌ Logowanie - błędne dane', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'WrongPassword!'
    });
    expect(res.statusCode).toBe(401);
  });

  test('✅ Dostęp do zasobów chronionych (wymaga tokena)', async () => {
    const res = await request(app).get('/api/protected-route')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });

  test('❌ Brak dostępu bez tokena', async () => {
    const res = await request(app).get('/api/protected-route');
    expect(res.statusCode).toBe(401);
  });
});

let server;

beforeAll(() => {
  server = app.listen(PORT);
});

afterAll(async () => {
  await server.close();
});
