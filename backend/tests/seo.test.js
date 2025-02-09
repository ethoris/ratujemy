const request = require('supertest');
const { sequelize, Seo } = require('../models');
const app = require('../index');

describe('🔍 Testy SEO', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('✅ Powinno utworzyć rekord SEO', async () => {
    const payload = {
      pageId: 1,
      title: 'Test SEO',
      description: 'Opis SEO dla testu',
      keywords: 'seo, test'
    };

    const res = await request(app)
      .post('/api/v1/seo')
      .send(payload)
      .expect(201);

    expect(res.body).toHaveProperty('message', 'SEO utworzone');
    expect(res.body.seo).toHaveProperty('id');
    expect(res.body.seo.title).toBe('Test SEO');
  });

  it('✅ Powinno zwrócić listę rekordów SEO', async () => {
    const res = await request(app)
      .get('/api/v1/seo')
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('✅ Powinno zaktualizować rekord SEO', async () => {
    const seoRecord = await Seo.findOne();
    const res = await request(app)
      .put(`/api/v1/seo/${seoRecord.id}`)
      .send({ title: 'Zaktualizowany SEO' })
      .expect(200);
    expect(res.body).toHaveProperty('message', 'SEO zaktualizowane');
    expect(res.body.seo.title).toBe('Zaktualizowany SEO');
  });

  it('✅ Powinno usunąć rekord SEO', async () => {
    const seoRecord = await Seo.findOne();
    const res = await request(app)
      .delete(`/api/v1/seo/${seoRecord.id}`)
      .expect(200);
    expect(res.body).toHaveProperty('message');
    const deleted = await Seo.findByPk(seoRecord.id);
    expect(deleted).toBeNull();
  });

 
});
