// tests/page.test.js
const { sequelize, Page } = require('../models');

describe('🛠️ Test modelu Page', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test('✅ Tworzenie page', async () => {
    // Załóżmy, że Page ma title, slug, content
    const page = await Page.create({
      title: 'Example Page',
      slug: 'example-page',
      content: 'Lorem ipsum...'
    });
    expect(page.id).toBeTruthy();
    expect(page.title).toBe('Example Page');
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
