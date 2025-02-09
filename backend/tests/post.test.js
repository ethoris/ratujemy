// tests/post.test.js
const { sequelize, Post, User } = require('../models');
const { Sequelize } = require('sequelize');

describe('📝 Testy modelu Post', () => {
  beforeAll(async () => {
    // Upewnij się, że synchronizujesz wszystkie modele – dzięki relacjom, tabela Users zostanie utworzona przed Posts.
    await sequelize.sync({ force: true });
    // Utwórz przykładowego użytkownika, aby móc przypisać go do postu
    await User.create({
      email: 'author@example.com',
      passwordHash: 'hashed_password_sample'
    });
  });

  it('✅ Model Post powinien zostać utworzony przy poprawnych danych', async () => {
    const user = await User.findOne({ where: { email: 'author@example.com' } });
    const post = await Post.create({
      title: 'Test Post',
      slug: 'test-post',
      content: 'Treść posta testowego.',
      authorId: user.id
    });
    expect(post.id).toBeTruthy();
    expect(post.title).toBe('Test Post');
    expect(post.slug).toBe('test-post');
    expect(post.content).toBe('Treść posta testowego.');
    expect(post.authorId).toBe(user.id);
  });

  it('❌ Model Post nie powinien utworzyć rekordu, gdy brakuje wymaganych pól', async () => {
    // Próbujemy utworzyć post bez pola "title" (które ma allowNull: false)
    await expect(Post.create({
      slug: 'test-post-2',
      content: 'Treść posta testowego.',
      authorId: 1
    })).rejects.toThrow(Sequelize.ValidationError);
  });

  
});
