// tests/menu.test.js
const request = require('supertest');
const { sequelize, Menu } = require('../models');
const app = require('../index');

describe('🍔 Testy Menu', () => {
  beforeAll(async () => {
    // Synchronizujemy bazę, aby utworzyć tabele. Jeśli chcesz testować tylko Menu, możesz synchronizować tylko ten model:
    await sequelize.sync({ force: true });
  });

  it('✅ Powinno utworzyć rekord Menu', async () => {
    const payload = {
      title: 'Home',
      slug: 'home',
      link: '/home',
      label: 'Start'
    };

    const res = await request(app)
      .post('/api/v1/menu')
      .send(payload)
      .expect(201);

    expect(res.body).toHaveProperty('message', 'Menu utworzone');
    expect(res.body.menu).toHaveProperty('id');
    expect(res.body.menu.title).toBe(payload.title);
  });

  it('✅ Powinno zwrócić listę rekordów Menu', async () => {
    const res = await request(app)
      .get('/api/v1/menu')
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  
});
