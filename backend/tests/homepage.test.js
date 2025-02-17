const request = require('supertest');
const http = require('http');
const jwt = require('jsonwebtoken');
const app = require('../index');
const server = http.createServer(app);
const { sequelize, User } = require('../models');
const config = require('../config/env/development');

// Generujemy token dla administratora
const adminToken = jwt.sign(
  { id: 1, email: 'admin@example.com', role: 'admin' },
  config.JWT_SECRET,
  { expiresIn: '1h' }
);

describe('Homepage API', () => {
  beforeAll(async () => {
    // Resetujemy model User – czysta baza dla testów
    await User.sync({ force: true });
    // Tworzymy przykładowego admina, aby middleware requireAdmin akceptował token
    await User.create({
      email: 'admin@example.com',
      passwordHash: 'hashedpassword',
      role: 'admin'
    });
  });

  describe('POST /api/v1/admin/homepage', () => {
    it('should update homepage settings with valid data', async () => {
      const payload = {
        title: 'New Homepage Title',
        content: 'New homepage content'
      };

      const res = await request(server)
        .post('/api/v1/admin/homepage')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(payload)
        .expect(200);

      expect(res.body).toHaveProperty('message', 'Strona główna została zaktualizowana.');
    });
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
