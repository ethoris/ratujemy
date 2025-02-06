const request = require('supertest');
const app = require('../index'); // Upewnij się, że importujesz poprawnie aplikację
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/env/development');

let token;
let userId;

beforeAll(async () => {
  // 🔹 Tworzymy użytkownika testowego
  const user = await User.create({
    email: 'deleteuser@example.com',
    passwordHash: 'testpassword123',
  });

  userId = user.id;

  // 🔹 Tworzymy token JWT
  token = jwt.sign({ id: user.id, email: user.email }, config.JWT_SECRET, { expiresIn: '1h' });
});

afterAll(async () => {
  // Usunięcie testowych danych po zakończeniu testów
  await User.destroy({ where: { email: 'deleteuser@example.com' } });
});

describe('🗑️ DELETE /api/users/:id - Usuwanie użytkownika', () => {
  test('✅ Powinno usunąć użytkownika przy poprawnym tokenie', async () => {
    const res = await request(app)
      .delete(`/api/users/${userId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/Użytkownik został usunięty/);
  });

  test('❌ Powinno zwrócić błąd 404, jeśli użytkownik nie istnieje', async () => {
    const res = await request(app)
      .delete('/api/users/99999') // ID, które raczej nie istnieje
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toMatch(/Użytkownik nie istnieje/);
  });

  test('❌ Powinno zwrócić błąd 401, jeśli brak tokena', async () => {
    const res = await request(app).delete(`/api/users/${userId}`);

    expect(res.statusCode).toBe(401);
    expect(res.body.error).toMatch(/Brak tokena/);
  });

  test('❌ Powinno zwrócić błąd 403, jeśli token jest nieprawidłowy', async () => {
    const res = await request(app)
      .delete(`/api/users/${userId}`)
      .set('Authorization', 'Bearer FAKE_TOKEN');

    expect(res.statusCode).toBe(403);
    expect(res.body.error).toMatch(/Nieprawidłowy token/);
  });
});
