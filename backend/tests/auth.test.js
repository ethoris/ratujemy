/**
 * tests/auth.test.js
 * Testy autoryzacji: rejestracja, logowanie, usuwanie użytkownika.
 */
const request = require('supertest');
const { sequelize, User } = require('../models');
const app = require('../index');

describe('🔐 Testy autoryzacji', () => {
  beforeAll(async () => {
    // Aby uniknąć błędów związanych z relacjami (np. w tabeli Posts)
    // synchronizujemy tylko model User, który jest potrzebny w testach auth.
    await User.sync({ force: true });
  });

  describe('POST /api/v1/auth/register', () => {
    it('✅ Powinno zarejestrować użytkownika przy poprawnych danych', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'secret123',
        confirmPassword: 'secret123'
      };

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send(payload)
        .expect(201);

      expect(res.body).toHaveProperty('message', 'Użytkownik zarejestrowany.');
      const user = await User.findOne({ where: { email: 'test@example.com' } });
      expect(user).not.toBeNull();
    });

    it('❌ Powinno zwrócić błąd 400, gdy e-mail już istnieje', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'secret123',
        confirmPassword: 'secret123'
      };

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send(payload)
        .expect(400);

      expect(res.body.error).toMatch(/Użytkownik już istnieje/i);
    });

    it('❌ Powinno zwrócić błąd 400, gdy hasła nie pasują do siebie', async () => {
      const payload = {
        email: 'newuser@example.com',
        password: 'abc123',
        confirmPassword: 'def456'
      };

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send(payload)
        .expect(400);

      expect(res.body.error).toMatch(/Hasła nie pasują do siebie/i);
    });
  });

  describe('POST /api/v1/auth/login', () => {
    it('✅ Powinno zalogować użytkownika i zwrócić token', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'secret123'
      };

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send(payload)
        .expect(200);

      expect(res.body).toHaveProperty('token');
    });

    it('❌ Powinno zwrócić 401, gdy podane jest nieprawidłowe hasło', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'wrongpassword'
      };

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send(payload)
        .expect(401);

      expect(res.body.error).toMatch(/Nieprawidłowe hasło/i);
    });
  });

  describe('DELETE /api/v1/auth/delete', () => {
    let token;
    beforeAll(async () => {
      // Logujemy się, aby uzyskać token
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'test@example.com', password: 'secret123' });
      token = res.body.token;
    });

    it('✅ Powinno usunąć użytkownika przy ważnym tokenie', async () => {
      const res = await request(app)
        .delete('/api/v1/auth/delete')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(res.body.message).toBe('Użytkownik usunięty.');
      const user = await User.findOne({ where: { email: 'test@example.com' } });
      expect(user).toBeNull();
    });
  });

  afterAll(async () => {
   
  });
});
