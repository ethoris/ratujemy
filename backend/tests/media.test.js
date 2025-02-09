const request = require('supertest');
const { sequelize, Media } = require('../models');
const app = require('../index');

describe('📷 Testy Media', () => {
  beforeAll(async () => {
    // Upewnij się, że baza jest czysta; synchronizujemy model Media
    await sequelize.sync({ force: true });
    // Opcjonalnie możesz utworzyć kilka rekordów:
    await Media.bulkCreate([
      { fileName: 'image1.jpg', originalName: 'original1.jpg', type: 'image/jpeg', size: 2048, url: '/uploads/image1.jpg' },
      { fileName: 'image2.jpg', originalName: 'original2.jpg', type: 'image/jpeg', size: 1024, url: '/uploads/image2.jpg' }
    ]);
  });

  it('✅ Powinno zwrócić listę plików', async () => {
    const res = await request(app)
      .get('/api/v1/media')
      .expect(200);

    // Oczekujemy, że odpowiedź zawiera obiekt z kluczami total i files
    expect(res.body).toHaveProperty('total');
    expect(res.body).toHaveProperty('files');
    expect(Array.isArray(res.body.files)).toBe(true);
    expect(res.body.total).toBe(res.body.files.length);
  });


});
