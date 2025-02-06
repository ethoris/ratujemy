const request = require('supertest');
const app = require('../index');

describe('📝 Posts API', () => {
  let postId;

  test('✅ Tworzenie nowego posta', async () => {
    const res = await request(app).post('/api/posts').send({
      title: 'Testowy Post',
      slug: 'testowy-post',
      content: 'Treść posta',
      status: 'published',
      author: 'admin'
    });
    expect(res.statusCode).toBe(201);
    postId = res.body.id;
  });

  test('✅ Pobieranie postów', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('✅ Usuwanie posta', async () => {
    const res = await request(app).delete(`/api/posts/${postId}`);
    expect(res.statusCode).toBe(200);
  });
});