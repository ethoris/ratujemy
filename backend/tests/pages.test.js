const request = require('supertest');
const app = require('../index');

describe('🔒 Auth API', () => {
  let token;

  test('✅ Rejestracja nowego użytkownika', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'test@example.com',
      password: 'Test1234!',
      confirmPassword: 'Test1234!',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toMatch(/Rejestracja zakończona sukcesem/);
  });

  test('✅ Logowanie użytkownika', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'Test1234!',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
  });

  test('✅ Dostęp do zasobów chronionych (wymaga tokena)', async () => {
    const res = await request(app)
      .get('/api/protected-route')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });

  test('❌ Brak dostępu bez tokena', async () => {
    const res = await request(app).get('/api/protected-route');
    expect(res.statusCode).toBe(401);
  });
});
