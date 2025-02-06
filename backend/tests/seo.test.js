const request = require('supertest');
const app = require('../index');

describe('🔎 SEO API', () => {
  let seoId;

  test('✅ Dodawanie ustawień SEO', async () => {
    const res = await request(app).post('/api/seo').send({
      pageId: 1,
      title: 'Strona główna',
      description: 'Opis SEO dla strony głównej',
      keywords: 'seo, test, home'
    });
    expect(res.statusCode).toBe(201);
    seoId = res.body.id;
  });

  test('✅ Pobieranie ustawień SEO', async () => {
    const res = await request(app).get('/api/seo/home');
    expect(res.statusCode).toBe(200);
  });

  test('✅ Usuwanie ustawień SEO', async () => {
    const res = await request(app).delete(`/api/seo/${seoId}`);
    expect(res.statusCode).toBe(200);
  });
});

