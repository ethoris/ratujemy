const request = require('supertest');
const app = require('../index');

describe('📧 Testy wysyłki e-mail', () => {
  it('✅ Powinno wysłać testowego e-maila', async () => {
    const payload = {
      to: 'test@example.com',
      subject: 'Test Email',
      text: 'To jest testowy email'
      // Możesz dodać również html, jeśli to wymagane
    };

    const res = await request(app)
      .post('/api/v1/email/send')
      .send(payload)
      .expect(200);
    
    expect(res.body).toHaveProperty('message', 'Email wysłany');
  });
});
