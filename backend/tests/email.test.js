const request = require('supertest');
const app = require('../index');

describe('📧 Testy wysyłki e-mail', () => {
  it('✅ Powinno wysłać testowego e-maila', async () => {
    const payload = {
      to: 'jan.kowalski@example.com',
      subject: 'Testowy e-mail',
      text: 'To jest testowy e-mail.'
    };

    const res = await request(app)
      .post('/api/v1/email/send')
      .send(payload)
      .expect(200);

    // Ustaw oczekiwany komunikat w zależności od środowiska
    const expectedMessage = process.env.NODE_ENV === 'test' ? 'Email wysłany (testowy)' : 'Email wysłany';
    expect(res.body).toHaveProperty('message', expectedMessage);
  });
});
