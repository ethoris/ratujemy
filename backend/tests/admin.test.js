const request = require('supertest');
const http = require('http');
const jwt = require('jsonwebtoken');
const app = require('../index'); // Upewnij się, że index.js eksportuje Twoją aplikację Express
const server = http.createServer(app);
const { sequelize, User } = require('../models');
const config = require('../config/env/development');

// Generujemy token dla administratora przy użyciu JWT_SECRET
const adminToken = jwt.sign(
  { id: 1, email: 'admin@example.com', role: 'admin' },
  config.JWT_SECRET,
  { expiresIn: '1h' }
);

describe('Admin API', () => {
  beforeAll(async () => {
    // Resetujemy model User – czysta baza dla testów
    await User.sync({ force: true });
    // Tworzymy przykładowych użytkowników (nie-admin)
    await User.create({
      email: 'user1@example.com',
      passwordHash: 'hashedpassword',
      role: 'user'
    });
    await User.create({
      email: 'user2@example.com',
      passwordHash: 'hashedpassword',
      role: 'user'
    });
  });

  describe('GET /api/v1/admin/users', () => {
    it('✅ Powinno zwrócić listę użytkowników dla admina', async () => {
      const res = await request(server)
        .get('/api/v1/admin/users')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);
      
      // Sprawdzamy, czy odpowiedź jest tablicą
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('POST /api/v1/admin/homepage', () => {
    it('✅ Powinno zaktualizować ustawienia strony głównej dla admina', async () => {
      const payload = {
        title: 'Nowy tytuł strony głównej',
        content: 'Nowa treść strony głównej'
      };

      const res = await request(server)
        .post('/api/v1/admin/homepage')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(payload)
        .expect(200);
      
      expect(res.body).toHaveProperty('message', 'Strona główna została zaktualizowana.');
    });
  });

  // Opcjonalnie: nie zamykamy połączenia, aby nie wpływać na kolejne testy
  // afterAll(async () => {
  //   await sequelize.close();
  // });
});
