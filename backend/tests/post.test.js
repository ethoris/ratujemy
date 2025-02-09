// tests/post.test.js
const { sequelize, Post, User } = require('../models');

describe('🛠️ Test modelu Post', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test('✅ Tworzenie posta + relacja z User', async () => {
    // Najpierw user
    const user = await User.create({
      email: 'author@example.com',
      passwordHash: 'super_secret'
    });

    // Post, zakładając, że w Post jest: title, slug, content, authorId
    const post = await Post.create({
      title: 'Pierwszy post',
      slug: 'pierwszy-post',
      content: 'Treść posta testowego',
      authorId: user.id
    });
    expect(post.authorId).toBe(user.id);

    // W pliku models/index.js jest Post.belongsTo(User, { as: 'user', foreignKey: 'authorId' })
    const relatedUser = await post.getUser();
    expect(relatedUser.email).toBe('author@example.com');
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
