const request = require('supertest');
const app = require('../index');
const path = require('path');

describe('🖼️ Media API', () => {
  test('✅ Upload pliku', async () => {
    const res = await request(app)
      .post('/api/media/upload')
      .attach('file', path.join(__dirname, 'test-image.jpg'));
    expect(res.statusCode).toBe(201);
  });

  test('✅ Pobieranie listy plików', async () => {
    const res = await request(app).get('/api/media');
    expect(res.statusCode).toBe(200);
  });
});
