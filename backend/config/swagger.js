// backend/config/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Wersja OpenAPI
    info: {
      title: 'API Dokumentacja - Ratujemy Dane',
      version: '1.0.0',
      description: 'Dokumentacja API dla projektu Ratujemy Dane'
    },
    servers: [
      {
        url: 'http://localhost:4000/api/v1',
        description: 'Środowisko deweloperskie'
      }
    ]
  },
  // Ścieżka do plików, w których znajdują się komentarze Swagger (np. w kontrolerach lub w plikach route)
  apis: ['./backend/routes/v1/*.js', './backend/controllers/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
