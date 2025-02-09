// tests/media.test.js
const { sequelize, Media } = require('../models');

describe('🛠️ Test modelu Media', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test('✅ Tworzenie media', async () => {
    // zakładam, że w Media.js jest np. fields: fileName, size, url, type
    const media = await Media.create({
      fileName: 'image.jpg',
      size: 2048,
      url: 'https://example.com/image.jpg',
      type: 'image'
    });
    expect(media.id).toBeTruthy();
    expect(media.fileName).toBe('image.jpg');
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
