/**
 * tests/user.test.js
 * Testy operacji na profilu użytkownika: pobieranie, aktualizacja, usuwanie.
 */
const request = require('supertest');
const { sequelize, User } = require('../models');
const app = require('../index');

describe('🔐 Testy operacji na profilu użytkownika', () => {
  let token;

  beforeAll(async () => {
    // Synchronizujemy model User
    await User.sync({ force: true });
    // Rejestrujemy użytkownika, aby mieć konto do testów
    await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'test@example.com',
        password: 'secret123',
        confirmPassword: 'secret123'
      })
      .expect(201);
    // Logujemy się, by uzyskać token
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'test@example.com', password: 'secret123' })
      .expect(200);
    token = res.body.token;
  });

  describe('GET /api/v1/user/profile', () => {
    it('✅ Powinno zwrócić dane użytkownika przy ważnym tokenie', async () => {
      const res = await request(app)
        .get('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      expect(res.body.email).toBe('test@example.com');
    });

    it('❌ Powinno zwrócić 401, gdy brak tokena', async () => {
      const res = await request(app)
        .get('/api/v1/user/profile')
        .expect(401);
      expect(res.body.error).toMatch(/token/i);
    });
  });

  describe('PATCH /api/v1/user/profile', () => {
    it('✅ Powinno zaktualizować hasło użytkownika', async () => {
      const res = await request(app)
        .patch('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          newPassword: 'newSecret999',
          confirmPassword: 'newSecret999'
        })
        .expect(200);
      expect(res.body.message).toBe('Profil zaktualizowany.');
    });

    it('❌ Powinno zwrócić 400, gdy brak confirmPassword', async () => {
      const res = await request(app)
        .patch('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          newPassword: 'xxxyyy'
        })
        .expect(400);
      // Zmieniamy oczekiwaną wiadomość na "Oba pola są wymagane"
      expect(res.body.error).toMatch(/oba pola są wymagane/i);
    });
    
  });

  describe('DELETE /api/v1/user/profile', () => {
    it('✅ Powinno usunąć konto przy ważnym tokenie', async () => {
      const res = await request(app)
        .delete('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      expect(res.body.message).toBe('Użytkownik usunięty.');
      const user = await User.findOne({ where: { email: 'test@example.com' } });
      expect(user).toBeNull();
    });

    it('❌ Powinno zwrócić 401, gdy token jest niepoprawny', async () => {
      const res = await request(app)
        .delete('/api/v1/user/profile')
        .set('Authorization', 'Bearer invalidTokenHere')
        .expect(401);
      expect(res.body.error).toMatch(/Nieprawidłowy token/i);
    });
  });

  
});
