const request = require('supertest');
const { sequelize, Page } = require('../models');
const app = require('../index');

describe('📄 Testy stron (Page)', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('✅ Powinno utworzyć rekord strony (domyślnie status: draft)', async () => {
    const payload = {
      title: 'About Us',
      slug: 'about-us',
      content: 'To jest zawartość strony About Us.'
      // Nie przesyłamy statusu – powinien być ustawiony domyślnie jako "draft"
    };

    const res = await request(app)
      .post('/api/v1/page')
      .send(payload)
      .expect(201);
    
    expect(res.body).toHaveProperty('message', 'Strona utworzona');
    expect(res.body.page).toHaveProperty('id');
    expect(res.body.page.title).toBe(payload.title);
    expect(res.body.page.status).toBe('draft');
  });

  it('✅ Powinno utworzyć rekord strony z podanym statusem "published"', async () => {
    const payload = {
      title: 'Contact Us',
      slug: 'contact-us',
      content: 'Treść strony kontaktowej.',
      status: 'published'
    };

    const res = await request(app)
      .post('/api/v1/page')
      .send(payload)
      .expect(201);
    
    expect(res.body.page.status).toBe('published');
  });

  it('✅ Powinno zwrócić listę stron', async () => {
    const res = await request(app)
      .get('/api/v1/page')
      .expect(200);
    
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('✅ Powinno zaktualizować rekord strony', async () => {
    const page = await Page.findOne({ where: { slug: 'about-us' } });
    const payload = { title: 'Updated About Us', status: 'published' };

    const res = await request(app)
      .put(`/api/v1/page/${page.id}`)
      .send(payload)
      .expect(200);
    
    expect(res.body).toHaveProperty('message', 'Strona zaktualizowana');
    expect(res.body.page.title).toBe('Updated About Us');
    expect(res.body.page.status).toBe('published');
  });

  it('✅ Powinno usunąć rekord strony', async () => {
    const page = await Page.findOne({ where: { slug: 'contact-us' } });
    const res = await request(app)
      .delete(`/api/v1/page/${page.id}`)
      .expect(200);
    
    expect(res.body).toHaveProperty('message');
    const deleted = await Page.findByPk(page.id);
    expect(deleted).toBeNull();
  });

  
});
