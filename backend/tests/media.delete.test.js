const request = require('supertest');
const { sequelize, Media } = require('../models');
const app = require('../index');

describe('📷 Test usuwania Media', () => {
  let mediaRecord;

  beforeAll(async () => {
    await sequelize.sync({ force: true });
    // Utwórz rekord Media do usunięcia
    mediaRecord = await Media.create({
      fileName: 'toDelete.jpg',
      originalName: 'original_toDelete.jpg',
      type: 'image/jpeg',
      size: 1500,
      url: '/uploads/toDelete.jpg'
    });
  });

  it('✅ Powinno usunąć plik o danym ID', async () => {
    const res = await request(app)
      .delete(`/api/v1/media/${mediaRecord.id}`)
      .expect(200);
    expect(res.body.message).toMatch(new RegExp(`Plik o ID ${mediaRecord.id} został usunięty`, 'i'));

    const deleted = await Media.findByPk(mediaRecord.id);
    expect(deleted).toBeNull();
  });

 
});
