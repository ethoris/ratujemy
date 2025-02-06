const request = require('supertest');
const app = require('../index');

describe('📌 Menu API', () => {
  let menuId;

  test('✅ Tworzenie nowego menu', async () => {
    const res = await request(app).post('/api/menu').send({
      title: 'Kontakt',
      slug: 'kontakt',
      order: 3,
      link: '/kontakt'
    });
    expect(res.statusCode).toBe(201);
    menuId = res.body.id;
  });

  test('✅ Usuwanie menu', async () => {
    const res = await request(app).delete(`/api/menu/${menuId}`);
    expect(res.statusCode).toBe(200);
  });
});
