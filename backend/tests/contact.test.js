const request = require('supertest');
const { sequelize, Contact } = require('../models');
const app = require('../index');

describe('📞 Testy formularza kontaktowego', () => {
  beforeAll(async () => {
    // Synchronizujemy model Contact (dropping istniejącej tabeli) – by mieć czystą bazę
    await Contact.sync({ force: true });
  });

  it('✅ Powinno przyjąć poprawne dane formularza i zwrócić potwierdzenie', async () => {
    const payload = {
      firstName: "Jan",
      lastName: "Kowalski",
      phone: "123456789",
      email: "jan.kowalski@example.com",
      situationDescription: "Mój telefon nie włącza się.",
      deviceType: "Telefon" // Upewnij się, że wartość odpowiada jednemu z dozwolonych (np. "Telefon")
    };

    const res = await request(app)
      .post('/api/v1/contact')
      .send(payload)
      .expect(200);

    // Sprawdzamy, czy odpowiedź zawiera komunikat oraz zapisany rekord kontaktowy
    expect(res.body).toHaveProperty('message', 'Formularz wysłany, dziękujemy za kontakt.');
    expect(res.body).toHaveProperty('contact');
    expect(res.body.contact).toHaveProperty('id');
    expect(res.body.contact.firstName).toBe(payload.firstName);
  });

  it('❌ Powinno zwrócić błąd 400, gdy brakuje wymaganych pól', async () => {
    // Pomińmy wymagane pole firstName
    const payload = {
      lastName: "Kowalski",
      phone: "123456789",
      situationDescription: "Problem z urządzeniem",
      deviceType: "Telefon"
    };

    const res = await request(app)
      .post('/api/v1/contact')
      .send(payload)
      .expect(400);

    expect(res.body).toHaveProperty('error');
  });
});
