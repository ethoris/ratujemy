// tests/models.test.js
const { sequelize, User, Seo, Menu, Media, Page, Post } = require('../models');

describe('🛠️ Testy modeli', () => {
  beforeAll(async () => {
    // Resetujemy bazę na potrzeby testów
    // w środowisku NODE_ENV=test łączy się do testowej bazy
    await sequelize.sync({ force: true });
  });

  // -------------------------------------------------------
  // 1. Test modelu User
  // -------------------------------------------------------
  test('✅ Model User - sprawdzamy utworzenie', async () => {
    // Tworzymy encję użytkownika z wymaganymi polami
    const user = await User.create({
      email: 'john.doe@example.com',
      passwordHash: 'hashed_password_sample'
      // np. jeśli masz w modelu pole "role" z defaultValue: 'user',
      // nie musisz go podawać
    });
    expect(user).toBeDefined();
    expect(user.id).toBeTruthy();
    expect(user.email).toBe('john.doe@example.com');
  });

  // -------------------------------------------------------
  // 2. Test modelu Seo
  // -------------------------------------------------------
  test('✅ Model Seo - sprawdzamy utworzenie', async () => {
    const seo = await Seo.create({
      pageId: 123,
      title: 'SEO Title Test',
      description: 'SEO description test',
      keywords: 'keyword1, keyword2'
    });
    expect(seo).toBeDefined();
    expect(seo.id).toBeTruthy();
    expect(seo.pageId).toBe(123);
  });

  // -------------------------------------------------------
  // 3. Test modelu Menu
  // -------------------------------------------------------
  test('✅ Model Menu - sprawdzamy utworzenie', async () => {
    // Załóżmy, że w modelu Menu są pola: title, slug, link, label itp.
    const menu = await Menu.create({
      title: 'Home Menu',
      slug: 'home-menu',
      link: '/home',
      label: 'Start'
    });
    expect(menu).toBeDefined();
    expect(menu.id).toBeTruthy();
    expect(menu.title).toBe('Home Menu');
    // ...
  });

  // -------------------------------------------------------
  // 4. Test modelu Media
  // -------------------------------------------------------
  test('✅ Model Media - sprawdzamy utworzenie', async () => {
    // Załóżmy, że Media ma: fileName, size, url, type
    const media = await Media.create({
      fileName: 'image.jpg',
      size: 12345, // np. rozmiar w bajtach
      url: 'https://example.com/image.jpg',
      type: 'image'
    });
    expect(media).toBeDefined();
    expect(media.id).toBeTruthy();
    expect(media.fileName).toBe('image.jpg');
    // ...
  });
  // -------------------------------------------------------
  // 5. Test modelu Page
  // -------------------------------------------------------
  test('✅ Model Page - sprawdzamy utworzenie', async () => {
    // Załóżmy, że w modelu Page są pola title, slug, content
    const page = await Page.create({
      title: 'Example Page',
      slug: 'example-page',
      content: 'Lorem ipsum...'
    });
    expect(page).toBeDefined();
    expect(page.id).toBeTruthy();
    expect(page.title).toBe('Example Page');
  });

  // -------------------------------------------------------
  // 6. Test modelu Post (z relacją do User)
  // -------------------------------------------------------
  test('✅ Model Post - relacja z User', async () => {
    // 1. Tworzymy użytkownika
    const user = await User.create({
      email: 'author@example.com',
      passwordHash: 'super_secret'
    });

    // 2. Tworzymy post (wymaga: title, slug, content, authorId)
    const post = await Post.create({
      title: 'Pierwszy post',
      slug: 'pierwszy-post',
      content: 'Treść posta testowego',
      authorId: user.id
    });

    // 3. Sprawdzamy klucz obcy
    expect(post.authorId).toBe(user.id);

    // 4. Dzięki relacji (index.js) mamy post.getUser()
    const relatedUser = await post.getUser();
    expect(relatedUser.email).toBe('author@example.com');
  });

  // -------------------------------------------------------
  // Koniec testów
  // -------------------------------------------------------
 
});
