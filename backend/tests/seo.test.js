// tests/seo.test.js
const { sequelize, Seo } = require('../models');

describe('🛠️ Test modelu Seo', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test('✅ Tworzenie Seo', async () => {
    // Załóżmy, że w Seo masz pageId, title, description, keywords
    const seo = await Seo.create({
      pageId: 123,
      title: 'Test SEO Title',
      description: 'Test SEO Description',
      keywords: 'keyword1, keyword2'
    });
    expect(seo.id).toBeTruthy();
    expect(seo.pageId).toBe(123);
    expect(seo.title).toBe('Test SEO Title');
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
