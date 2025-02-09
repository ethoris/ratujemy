const request = require('supertest');
const { sequelize, Media } = require('../models');
const app = require('../index');

describe('📷 Test uploadu Media (JSON payload)', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('✅ Powinno przesłać dane JSON i utworzyć rekord Media', async () => {
    const payload = {
      fileName: 'uploaded.jpg',
      originalName: 'original_uploaded.jpg',
      type: 'image/jpeg',
      size: 3000,
      url: '/uploads/uploaded.jpg'
    };

    const res = await request(app)
      .post('/api/v1/media')
      .send(payload)
      .expect(201);

    expect(res.body).toHaveProperty('message', '✅ Plik przesłany!');
    expect(res.body.file).toHaveProperty('id');
    expect(res.body.file.fileName).toBe('uploaded.jpg');
  });


});
