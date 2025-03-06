# Project Export

## Project Structure

```
📁 .github
  📁 workflows
    📄 cicd.yml
📁 backend
  📁 config
    📁 env
      📄 development.js
      📄 production.js
      📄 test.js
    📄 cache.config.js
    📄 config.json
    📄 db.config.js
    📄 email.config.js
    📄 passport.config.js
    📄 stripe.config.js
    📄 swagger.js
    📄 swagger.yaml
  📁 controllers
    📄 authController.js
    📄 contactController.js
    📄 emailController.js
    📄 homePageController.js
    📄 homeSectionController.js
    📄 mediaController.js
    📄 menuController.js
    📄 pageController.js
    📄 paymentController.js
    📄 postController.js
    📄 seoController.js
    📄 serviceController.js
    📄 userController.js
  📁 middleware
    📄 authMiddleware.js
    📄 cacheMiddleware.js
    📄 errorHandler.js
    📄 validateMedia.js
    📄 validateMenu.js
    📄 validatePage.js
    📄 validatePost.js
    📄 validateRegister.js
    📄 validateSeo.js
  📁 migrations
    📄 20250206-create-pages.js
    📄 20250206231514-create-users-table.js
    📄 20250206231516-create-posts-table.js
    📄 20250206231517-create-seo-table.js
    📄 20250206231518-create-menus-table.js
    📄 20250301-create-services.js
    📄 20250302-create-home-sections.js
  📁 models
    📄 Contact.js
    📄 Homepage.js
    📄 HomepageVersion.js
    📄 HomeSection.js
    📄 index.js
    📄 Media.js
    📄 Menu.js
    📄 Page.js
    📄 Post.js
    📄 Seo.js
    📄 Service.js
    📄 User.js
  📁 routes
    📁 v1
      📄 adminRoutes.js
      📄 authRoutes.js
      📄 contactRoutes.js
      📄 emailRoutes.js
      📄 homepageRoutes.js
      📄 homeSectionRoutes.js
      📄 mediaRoutes.js
      📄 menuRoutes.js
      📄 pageRoutes.js
      📄 paymentRoutes.js
      📄 postsRoutes.js
      📄 protectedRoutes.js
      📄 seoRoutes.js
      📄 serviceRoutes.js
      📄 usersRoutes.js
    📄 index.js
  📁 scripts
    📄 backup.sh
    📄 restore.sh
  📁 seeders
  📁 tests
    📄 admin.test.js
    📄 auth.test.js
    📄 contact.test.js
    📄 email.test.js
    📄 homepage.test.js
    📄 media.delete.test.js
    📄 media.test.js
    📄 media.upload.test.js
    📄 menu.test.js
    📄 models.test.js
    📄 page.test.js
    📄 post.test.js
    📄 seo.test.js
    📄 user.test.js
  📄 .gitignore
  📄 index.js
  📄 jest.config.js
  📄 jest.global-setup.js
  📄 jest.global-teardown.js
  📄 package.json
  📄 redisClient.js
  📄 server.js
📁 frontend
  📁 public
    📄 index.html
    📄 manifest.json
    📄 robots.txt
  📁 src
    📁 admin
      📄 AdminFooter.js
      📄 AdminHeader.js
      📄 AdminLayout.js
      📄 AdminSidebar.js
      📄 Dashboard.js
      📄 EditContent.js
      📄 EditHomepage.js
      📄 ManageHomeSections.js
    📁 api
      📄 api.js
    📁 assets
      📁 images
        📁 about
          📄 img1
        📁 services
        📁 social
      📁 video
    📁 components
      📁 Auth
        📄 Login.js
        📄 Register.js
      📄 Button.js
      📄 Card.js
      📄 ContactFrom.js
      📄 Footer.js
      📄 Hero.js
      📄 HomeSections.js
      📄 MediaGallery.js
      📄 Navbar.js
      📄 PostsList.js
      📄 ProtectedRoute.js
      📄 ResponsiveBox.js
      📄 Services.js
      📄 ServicesSection.js
    📁 layouts
      📄 MainLayout.js
    📁 pages
      📄 About.js
      📄 Contact.js
      📄 Home.js
    📄 App.css
    📄 App.js
    📄 App.test.js
    📄 index.css
    📄 index.js
    📄 reportWebVitals.js
    📄 setupTests.js
  📄 .gitignore
  📄 package.json
  📄 postcss.config.js
  📄 README.md
  📄 tailwind.config.js
📄 .gitignore
📄 package.json
📄 project-export.md
📄 README.md
```

## Files

### .github/workflows/cicd.yml
Last modified: 2025-03-04T16:42:38.099Z
Size: 1.10 KB

```yaml
name: CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      # Jeśli Twoja aplikacja wymaga kompilacji/budowania, np. transpile ES6, uruchom poniższy krok:
      - name: Build application
        run: npm run build

      - name: Deploy to Production
        run: echo "Deploying to production..."
        # Tutaj możesz dodać kroki wdrożeniowe, np. wysyłkę plików przez scp, użycie Heroku CLI, itp.

```

### .gitignore
Last modified: 2025-03-04T16:42:38.100Z
Size: 0.65 KB

```
# 📌 Ignorowanie folderów zależności i buildów
node_modules/
.env
.env.local
.env.development
.env.production
.env.test
npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json

# 📌 Ignorowanie logów i plików tymczasowych
logs/
*.log
logs/*.log
debug.log
nohup.out

# 📌 Ignorowanie plików edytora
.vscode/
.idea/
*.swp
*.swo
*.swn

# 📌 Ignorowanie danych sesji i cache
sessions/
cache/
tmp/

# 📌 Ignorowanie migracji lokalnych (jeśli używasz Sequelize)
migrations/
seeders/

# 📌 Ignorowanie plików multimedialnych (opcjonalnie)
uploads/
public/uploads/

# 📌 Ignorowanie plików Docker (jeśli używasz)
docker-compose.override.yml

```

### README.md
Last modified: 2025-03-06T15:45:51.936Z
Size: 0.00 KB

```markdown

```

### backend/.gitignore
Last modified: 2025-03-05T04:08:32.371Z
Size: 0.57 KB

```
# 📌 Ignorowanie folderów zależności i buildów
node_modules/
.env
.env.local
.env.development
.env.production
.env.test
npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json

# 📌 Ignorowanie logów i plików tymczasowych
logs/
*.log
logs/*.log
debug.log
nohup.out

# 📌 Ignorowanie plików edytora
.vscode/
.idea/
*.swp
*.swo
*.swn

# 📌 Ignorowanie danych sesji i cache
sessions/
cache/
tmp/

# 📌 Ignorowanie plików multimedialnych (opcjonalnie)
uploads/
public/uploads/

# 📌 Ignorowanie plików Docker (jeśli używasz)
docker-compose.override.yml

```

### backend/config/cache.config.js
Last modified: 2025-03-04T16:42:38.100Z
Size: 0.24 KB

```javascript
const redis = require('redis');

const client = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

client.on('error', (err) => console.error('Redis error:', err));

client.connect();

module.exports = client;

```

### backend/config/config.json
Last modified: 2025-03-04T16:42:38.100Z
Size: 0.53 KB

```json
{
    "development": {
      "username": "mratuj",
      "password": "MaksOla2020",
      "database": "ratujemy_dane_dev",
      "host": "localhost",
      "dialect": "postgres"
    },
    "test": {
      "username": "mratuj",
      "password": "MaksOla2020",
      "database": "ratujemy_dane_test",
      "host": "localhost",
      "dialect": "postgres"
    },
    "production": {
      "username": "mratuj",
      "password": "MaksOla2020",
      "database": "ratujemy_dane",
      "host": "localhost",
      "dialect": "postgres"
    }
  }
  
```

### backend/config/db.config.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 0.48 KB

```javascript
// backend/config/db.config.js
const { Sequelize } = require('sequelize');
const currentEnv = process.env.NODE_ENV || 'development';
const config = require(`./env/${currentEnv}`);

// Tworzymy instancję Sequelize na podstawie pliku env/ (development.js, production.js, test.js)
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: 'postgres',
  port: config.DB_PORT || 5432,
  logging: false,
});

module.exports = sequelize;

```

### backend/config/email.config.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 1.07 KB

```javascript
// backend/utils/sendEmail.js
const nodemailer = require('nodemailer');
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/env/${env}`);

if (env === 'test') {
  // W środowisku testowym zwracamy symulowaną odpowiedź, bez nawiązywania połączenia SMTP.
  module.exports = async function sendEmail(options) {
    console.log("Test environment: Symulacja wysyłki emaila", options);
    return Promise.resolve({ message: "Email wysłany" });
  };
} else {
  // W środowisku innym niż test tworzymy rzeczywisty transporter
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: true, // true dla portu 465, false dla innych
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASSWORD
    }
  });

  module.exports = async function sendEmail(options) {
    const mailOptions = {
      from: config.EMAIL_SENDER,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html
    };
    return transporter.sendMail(mailOptions);
  };
}

```

### backend/config/env/development.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 1.05 KB

```javascript
module.exports = {
    DB_NAME: 'ratujemy_dane_dev',
    DB_USER: 'mratuj',
    DB_PASSWORD: 'MaksOla2020', // Hasło bez znaków specjalnych, na próbę
    DB_HOST: 'localhost',
    DB_PORT: 5432,
    JWT_SECRET: 'd2be91e25c0866ac02c616f6d60bef14605441a12fc08ef55b6113364899cbf87314c955c27469d2bf2c3429b7237093e5d6ce9af7ca6d8173739b07a549dc92b4619b0d86b0510097c1bd755055961cc10bfb2d4eacf572d2287ee6f6f57e1c494e42c6ed5b60c24c2cbbe8b1b57056eeb5ac5fff6644137831959346993961f1da4b1ac2e0c32c35f200aa286a19621bfa61b964c1b63231e1df6dd9b79cff3681a9582d8724960906d76090f7a995bba702a04bf2f8614a44355e2c61a44c21a725e412e4b41a5b1e0ac01acc8eb27297b4fd0a4b4429c4fb5450b8af1b8f49a2faba15b6a7af195310f21bd20057b22c0f2d228476b636f403a82df30879',
    REDIS_URL: 'redis://localhost:6379',
    PORT: 4000,
    SMTP_HOST: 'ssl0.ovh.net',  // Jeśli OVH → zmień na 'ssl0.ovh.net'
    SMTP_PORT: 465,             // Można użyć 465 dla SSL
    SMTP_USER: 'biuro@ratujemydane.pl',
    SMTP_PASSWORD: 'Borch34ti@',
    EMAIL_SENDER: 'biuro@ratujemydane.pl'  // Twój e-mail firmowy
  };
  
```

### backend/config/env/production.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 0.28 KB

```javascript
module.exports = {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS_URL: process.env.REDIS_URL,
    PORT: process.env.PORT || 4000
  };
  
```

### backend/config/env/test.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 0.72 KB

```javascript
module.exports = {
    DB_NAME: 'ratujemy_dane_test',
    DB_USER: 'mratuj',
    DB_PASSWORD: 'MaksOla2020',
    DB_HOST: 'localhost',
    JWT_SECRET: 'd2be91e25c0866ac02c616f6d60bef14605441a12fc08ef55b6113364899cbf87314c955c27469d2bf2c3429b7237093e5d6ce9af7ca6d8173739b07a549dc92b4619b0d86b0510097c1bd755055961cc10bfb2d4eacf572d2287ee6f6f57e1c494e42c6ed5b60c24c2cbbe8b1b57056eeb5ac5fff6644137831959346993961f1da4b1ac2e0c32c35f200aa286a19621bfa61b964c1b63231e1df6dd9b79cff3681a9582d8724960906d76090f7a995bba702a04bf2f8614a44355e2c61a44c21a725e412e4b41a5b1e0ac01acc8eb27297b4fd0a4b4429c4fb5450b8af1b8f49a2faba15b6a7af195310f21bd20057b22c0f2d228476b636f403a82df30879',
    REDIS_URL: 'redis://localhost:6379',
    PORT: 4001
  
  };
  
```

### backend/config/passport.config.js
Last modified: 2025-03-04T16:42:38.102Z
Size: 1.31 KB

```javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ where: { googleId: profile.id } });
      if (!user) {
        user = await User.create({
          googleId: profile.id,
          email: profile.emails[0].value,
        });
      }
      return done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/api/auth/facebook/callback',
      profileFields: ['id', 'emails', 'name'],
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ where: { facebookId: profile.id } });
      if (!user) {
        user = await User.create({
          facebookId: profile.id,
          email: profile.emails[0].value,
        });
      }
      return done(null, user);
    }
  )
);

module.exports = passport;

```

### backend/config/stripe.config.js
Last modified: 2025-03-04T16:42:38.102Z
Size: 0.12 KB

```javascript
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = stripe;

```

### backend/config/swagger.js
Last modified: 2025-03-04T16:42:38.102Z
Size: 0.69 KB

```javascript
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

```

### backend/config/swagger.yaml
Last modified: 2025-03-04T16:42:38.102Z
Size: 6.11 KB

```yaml
openapi: 3.0.0
info:
  title: API Dokumentacja - Ratujemy Dane
  version: '1.0.0'
  description: Dokumentacja API dla projektu Ratujemy Dane
servers:
  - url: http://localhost:4000/api/v1
    description: Środowisko deweloperskie
paths:
  /auth/register:
    post:
      summary: Rejestracja użytkownika
      description: Rejestruje nowego użytkownika.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - email
                - password
                - confirmPassword
              properties:
                email:
                  type: string
                  example: test@example.com
                password:
                  type: string
                  example: secret123
                confirmPassword:
                  type: string
                  example: secret123
      responses:
        '201':
          description: Użytkownik zarejestrowany.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Użytkownik zarejestrowany.
        '400':
          description: Błąd walidacji.
  /auth/login:
    post:
      summary: Logowanie użytkownika
      description: Umożliwia zalogowanie użytkownika i zwraca token JWT.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - email
                - password
              properties:
                email:
                  type: string
                  example: test@example.com
                password:
                  type: string
                  example: secret123
      responses:
        '200':
          description: Token JWT.
          content:
            application/json:
              schema:
                type: object
                properties:
                  token:
                    type: string
                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
        '401':
          description: Nieprawidłowe dane logowania.
  # Dodaj tutaj inne endpointy, np. /user/profile, /media, /menu, /seo, /page itd.
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
          example: 1
        email:
          type: string
          example: test@example.com
        role:
          type: string
          example: user
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
    Media:
      type: object
      properties:
        id:
          type: integer
          example: 1
        fileName:
          type: string
          example: uploaded.jpg
        originalName:
          type: string
          example: original_uploaded.jpg
        type:
          type: string
          example: image/jpeg
        size:
          type: integer
          example: 3000
        url:
          type: string
          example: /uploads/uploaded.jpg
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
    Menu:
      type: object
      properties:
        id:
          type: integer
          example: 1
        title:
          type: string
          example: Home
        slug:
          type: string
          example: home
        link:
          type: string
          example: /home
        label:
          type: string
          example: Start
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
    Seo:
      type: object
      properties:
        id:
          type: integer
          example: 1
        pageId:
          type: integer
          example: 1
        title:
          type: string
          example: SEO Title
        description:
          type: string
          example: SEO description for the page
        keywords:
          type: string
          example: seo, test
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
    Page:
      type: object
      properties:
        id:
          type: integer
          example: 1
        title:
          type: string
          example: About Us
        slug:
          type: string
          example: about-us
        content:
          type: string
          example: Treść strony About Us
        status:
          type: string
          enum: [draft, published]
          example: draft
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
components:
  schemas:
    Contact:
      type: object
      properties:
        id:
          type: integer
          example: 1
        firstName:
          type: string
          example: "Jan"
        lastName:
          type: string
          example: "Kowalski"
        phone:
          type: string
          example: "123456789"
        email:
          type: string
          example: "jan.kowalski@example.com"
        situationDescription:
          type: string
          example: "Mój telefon nie włącza się."
        deviceType:
          type: string
          enum: ["Pendrive/Karta Flash", "Dysk HDD/SSD", "Telefon", "Tablet"]
          example: "Telefon"
        createdAt:
          type: string
          format: date-time
          example: "2025-02-09T10:00:00Z"
        updatedAt:
          type: string
          format: date-time
          example: "2025-02-09T10:00:00Z"

```

### backend/controllers/authController.js
Last modified: 2025-03-06T16:30:31.175Z
Size: 3.09 KB

```javascript
// backend/controllers/authController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/env/${env}`);
const validator = require('validator');

exports.register = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Niepoprawny adres e-mail' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Hasło musi mieć min. 6 znaków' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Hasła nie pasują do siebie' });
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Użytkownik już istnieje' });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    // Domyślnie rejestrujemy użytkownika z rolą "user". Administratora ustaw ręcznie.
    await User.create({ email, passwordHash });
    return res.status(201).json({ message: 'Użytkownik zarejestrowany.' });
  } catch (error) {
    console.error('Błąd rejestracji:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'E-mail i hasło są wymagane' });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
    }
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ error: 'Nieprawidłowe hasło' });
    }
    // Tutaj mamy dostęp do zmiennej user, więc możemy logować payload
    console.log("Generating token with payload:", { id: user.id, email: user.email, role: user.role });
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      config.JWT_SECRET,
      { expiresIn: '1h' }
    );
    return res.status(200).json({ token, role: user.role });
  } catch (error) {
    console.error('Błąd logowania:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // Zakładamy, że middleware authMiddleware ustawia req.user na podstawie tokena
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'Użytkownik nie istnieje' });
    }
    await user.destroy();
    return res.status(200).json({ message: 'Użytkownik usunięty.' });
  } catch (error) {
    console.error('Błąd usuwania użytkownika:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

console.log("Generating token with payload:", { id: user.id, email: user.email, role: user.role });

```

### backend/controllers/contactController.js
Last modified: 2025-03-04T16:42:38.103Z
Size: 4.42 KB

```javascript
const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const config = require('../config/env/development');
const Contact = require('../models/Contact');

// Funkcja generująca PDF na podstawie danych formularza
function generatePdf(formData, outputPath) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const stream = fs.createWriteStream(outputPath);
      
      doc.pipe(stream);
      doc.fontSize(16).text('Formularz Kontaktowy', { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(`Imię: ${formData.firstName}`);
      doc.text(`Nazwisko: ${formData.lastName}`);
      doc.text(`Telefon: ${formData.phone}`);
      doc.text(`E-mail: ${formData.email || 'Brak'}`);
      doc.moveDown();
      doc.text(`Opis sytuacji:`);
      doc.text(formData.situationDescription, { indent: 20 });
      doc.moveDown();
      doc.text(`Typ urządzenia: ${formData.deviceType}`);
      
      doc.end();
      
      stream.on('finish', () => resolve(outputPath));
      stream.on('error', reject);
    } catch (error) {
      reject(error);
    }
  });
}

// Konfiguracja transportera nodemailer
// Zakładamy, że transporter został zainicjowany globalnie lub w podobny sposób – poniżej przykład konfiguracji,
// który w środowisku testowym (NODE_ENV === 'test') wykorzystuje Ethereal.
let transporterPromise;
if (process.env.NODE_ENV === 'test') {
  transporterPromise = nodemailer.createTestAccount().then(testAccount => {
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
    return transporter;
  }).catch(err => {
    console.error('Błąd przy tworzeniu konta testowego:', err);
    throw err;
  });
} else {
  transporterPromise = Promise.resolve(
    nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: true,
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD
      }
    })
  );
}

exports.submitContactForm = async (req, res, next) => {
  try {
    const { firstName, lastName, phone, email, situationDescription, deviceType } = req.body;
    
    if (!firstName || !lastName || !phone || !situationDescription || !deviceType) {
      return res.status(400).json({ error: 'Wszystkie pola oprócz e-maila są wymagane' });
    }
    
    // Zapisujemy dane formularza w bazie danych
    const contactRecord = await Contact.create({ firstName, lastName, phone, email, situationDescription, deviceType });
    
    // Ścieżka do tymczasowego pliku PDF – upewnij się, że folder "uploads" istnieje
    const pdfPath = path.join(__dirname, '..', 'uploads', `contact_${Date.now()}.pdf`);
    
    // Generujemy PDF z danymi formularza
    await generatePdf({ firstName, lastName, phone, email, situationDescription, deviceType }, pdfPath);
    
    const transporter = await transporterPromise;
    
    // Przygotowujemy wiadomość e-mail do administratora z załączonym PDF-em
    const adminMailOptions = {
      from: config.EMAIL_SENDER,
      to: 'pat2382@gmail.com',
      subject: 'Nowy formularz kontaktowy',
      text: 'W załączniku znajdziesz dane z formularza kontaktowego.',
      attachments: [
        {
          filename: path.basename(pdfPath),
          path: pdfPath
        }
      ]
    };
    await transporter.sendMail(adminMailOptions);
    
    // W środowisku testowym pomijamy wysyłkę potwierdzenia dla klienta, aby uniknąć błędów związanych z odbiorcą
    if (email && process.env.NODE_ENV !== 'test') {
      const confirmationMailOptions = {
        from: config.EMAIL_SENDER,
        to: email,
        subject: 'Potwierdzenie przyjęcia formularza kontaktowego',
        text: 'Dziękujemy za kontakt. Otrzymaliśmy Twoje zgłoszenie i wkrótce się odezwiemy.'
      };
      await transporter.sendMail(confirmationMailOptions);
    }
    
    // Opcjonalnie usuwamy tymczasowy plik PDF
    fs.unlink(pdfPath, (err) => {
      if (err) console.error('Błąd usuwania pliku PDF:', err);
    });
    
    return res.status(200).json({ message: 'Formularz wysłany, dziękujemy za kontakt.', contact: contactRecord });
  } catch (error) {
    console.error('Błąd obsługi formularza kontaktowego:', error);
    next(error);
  }
};

```

### backend/controllers/emailController.js
Last modified: 2025-03-04T16:42:38.103Z
Size: 2.00 KB

```javascript
const nodemailer = require('nodemailer');
const config = require('../config/env/development');

let transporterPromise;

if (process.env.NODE_ENV === 'test') {
  // W środowisku testowym używamy Ethereal
  transporterPromise = nodemailer.createTestAccount().then(testAccount => {
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
    // W środowisku testowym nie logujemy, aby nie wywoływać problemów
    return transporter;
  }).catch(err => {
    console.error('Błąd przy tworzeniu konta testowego:', err);
    throw err;
  });
} else {
  // W innych środowiskach korzystamy z konfiguracji z pliku config
  transporterPromise = Promise.resolve(
    nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: true, // np. dla portu 465
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD
      }
    })
  );
}

exports.sendTestEmail = async (req, res, next) => {
  try {
    const transporter = await transporterPromise;
    const payload = req.body; // Oczekujemy, że payload zawiera: to, subject, text

    const info = await transporter.sendMail({
      from: config.EMAIL_SENDER,
      to: payload.to,
      subject: payload.subject,
      text: payload.text
    });

    if (process.env.NODE_ENV === 'test') {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      // W środowisku testowym pomijamy console.log, aby nie logować po zakończeniu testów
      return res.status(200).json({ message: 'Email wysłany (testowy)', previewUrl });
    }

    // W środowisku produkcyjnym/deweloperskim możemy logować, jeśli to potrzebne:
    console.log('Email wysłany:', info);
    return res.status(200).json({ message: 'Email wysłany', info });
  } catch (error) {
    console.error('Błąd wysyłki emaila:', error);
    next(error);
  }
};

```

### backend/controllers/homePageController.js
Last modified: 2025-03-06T15:40:32.375Z
Size: 0.52 KB

```javascript
// backend/controllers/homepageController.js
const Homepage = require('../models/Homepage');

exports.getHomepage = async (req, res) => {
  try {
    const homepage = await Homepage.findOne();
    if (!homepage) {
      return res.status(404).json({ message: 'Strona główna nie została jeszcze skonfigurowana.' });
    }
    res.status(200).json({ homepage });
  } catch (error) {
    console.error('Błąd pobierania strony głównej:', error);
    res.status(500).json({ error: 'Błąd pobierania strony głównej' });
  }
};

```

### backend/controllers/homeSectionController.js
Last modified: 2025-03-06T15:40:32.375Z
Size: 2.12 KB

```javascript
const HomeSection = require('../models/HomeSection');

exports.getHomeSections = async (req, res) => {
  try {
    const sections = await HomeSection.findAll({ order: [['order', 'ASC']] });
    res.status(200).json(sections);
  } catch (error) {
    console.error('Błąd pobierania sekcji strony głównej:', error);
    res.status(500).json({ error: 'Błąd pobierania sekcji' });
  }
};

exports.createHomeSection = async (req, res) => {
  try {
    const { type, title, content, order } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Tytuł sekcji jest wymagany' });
    }
    const section = await HomeSection.create({ type, title, content, order });
    res.status(201).json({ message: 'Sekcja utworzona', section });
  } catch (error) {
    console.error('Błąd tworzenia sekcji:', error);
    res.status(500).json({ error: 'Błąd tworzenia sekcji' });
  }
};

exports.updateHomeSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, title, content, order } = req.body;
    const section = await HomeSection.findByPk(id);
    if (!section) {
      return res.status(404).json({ error: 'Sekcja nie znaleziona' });
    }
    section.type = type !== undefined ? type : section.type;
    section.title = title !== undefined ? title : section.title;
    section.content = content !== undefined ? content : section.content;
    section.order = order !== undefined ? order : section.order;
    await section.save();
    res.status(200).json({ message: 'Sekcja zaktualizowana', section });
  } catch (error) {
    console.error('Błąd aktualizacji sekcji:', error);
    res.status(500).json({ error: 'Błąd aktualizacji sekcji' });
  }
};

exports.deleteHomeSection = async (req, res) => {
  try {
    const { id } = req.params;
    const section = await HomeSection.findByPk(id);
    if (!section) {
      return res.status(404).json({ error: 'Sekcja nie znaleziona' });
    }
    await section.destroy();
    res.status(200).json({ message: 'Sekcja usunięta' });
  } catch (error) {
    console.error('Błąd usuwania sekcji:', error);
    res.status(500).json({ error: 'Błąd usuwania sekcji' });
  }
};

```

### backend/controllers/mediaController.js
Last modified: 2025-03-04T16:42:38.103Z
Size: 1.84 KB

```javascript
const Media = require('../models/Media');

exports.getAllFiles = async (req, res) => {
  try {
    const files = await Media.findAll();
    res.status(200).json({ total: files.length, files });
  } catch (error) {
    console.error('❌ Błąd pobierania plików:', error);
    res.status(500).json({ error: 'Błąd pobierania plików' });
  }
};

exports.uploadFile = async (req, res) => {
  try {
    let fileData;
    if (req.file) {
      // Jeśli plik został przesłany przez Multer (multipart/form-data)
      const { originalname, mimetype, size, filename } = req.file;
      fileData = {
        fileName: filename,
        originalName: originalname,
        type: mimetype,
        size: size,
        url: `/uploads/${filename}`
      };
    } else if (req.body && req.body.fileName) {
      // Jeśli dane są przesłane jako JSON
      const { fileName, originalName, type, size, url } = req.body;
      fileData = {
        fileName,
        originalName,
        type,
        size,
        url: url || `/uploads/${fileName}`
      };
    } else {
      return res.status(400).json({ error: 'Brak pliku w żądaniu' });
    }
    
    const file = await Media.create(fileData);
    return res.status(201).json({ message: '✅ Plik przesłany!', file });
  } catch (error) {
    console.error('❌ Błąd przesyłania pliku:', error);
    return res.status(500).json({ error: 'Błąd przesyłania pliku' });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await Media.findByPk(id);
    if (!file) return res.status(404).json({ error: 'Plik nie znaleziony' });
    await file.destroy();
    res.status(200).json({ message: `✅ Plik o ID ${id} został usunięty` });
  } catch (error) {
    console.error('❌ Błąd usuwania pliku:', error);
    res.status(500).json({ error: 'Błąd usuwania pliku' });
  }
};

```

### backend/controllers/menuController.js
Last modified: 2025-03-04T16:42:38.103Z
Size: 2.01 KB

```javascript
const Menu = require('../models/Menu');

exports.createMenu = async (req, res) => {
  try {
    const { title, slug, link, label } = req.body;
    if (!title || !slug || !link || !label) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    const menu = await Menu.create({ title, slug, link, label });
    return res.status(201).json({ message: 'Menu utworzone', menu });
  } catch (error) {
    console.error('Błąd tworzenia menu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.getMenu = async (req, res) => {
  try {
    const menus = await Menu.findAll();
    return res.status(200).json(menus);
  } catch (error) {
    console.error('Błąd pobierania menu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, link, label } = req.body;
    const menu = await Menu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ error: 'Menu nie znalezione' });
    }
    // Aktualizujemy pola, jeśli zostały przesłane w żądaniu
    if (title !== undefined) menu.title = title;
    if (slug !== undefined) menu.slug = slug;
    if (link !== undefined) menu.link = link;
    if (label !== undefined) menu.label = label;

    await menu.save();
    return res.status(200).json({ message: 'Menu zaktualizowane', menu });
  } catch (error) {
    console.error('Błąd aktualizacji menu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ error: 'Menu nie znalezione' });
    }
    await menu.destroy();
    return res.status(200).json({ message: `Menu o ID ${id} zostało usunięte` });
  } catch (error) {
    console.error('Błąd usuwania menu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

```

### backend/controllers/pageController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 2.76 KB

```javascript
// backend/controllers/pageController.js
const Page = require('../models/Page');
const redisClient = require('../redisClient');

exports.createPage = async (req, res) => {
  try {
    const { title, slug, content, status } = req.body;
    if (!title || !slug || !content) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane (title, slug, content)' });
    }
    const page = await Page.create({ title, slug, content, status });
    // Po utworzeniu rekordu usuwamy cache listy stron, aby następny odczyt pobrał aktualne dane
    await redisClient.del('pages_all');
    return res.status(201).json({ message: 'Strona utworzona', page });
  } catch (error) {
    console.error('Błąd tworzenia strony:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.getPages = async (req, res) => {
  try {
    const cacheKey = 'pages_all';
    // Sprawdzamy, czy wynik jest zapisany w Redis
    const cachedPages = await redisClient.get(cacheKey);
    if (cachedPages) {
      return res.status(200).json(JSON.parse(cachedPages));
    }
    // Jeśli nie, pobieramy dane z bazy
    const pages = await Page.findAll();
    // Zapisujemy wynik w Redis z TTL = 60 sekund
    await redisClient.setEx(cacheKey, 60, JSON.stringify(pages));
    return res.status(200).json(pages);
  } catch (error) {
    console.error('Błąd pobierania stron:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updatePage = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, content, status } = req.body;
    const page = await Page.findByPk(id);
    if (!page) {
      return res.status(404).json({ error: 'Strona nie znaleziona' });
    }
    if (title !== undefined) page.title = title;
    if (slug !== undefined) page.slug = slug;
    if (content !== undefined) page.content = content;
    if (status !== undefined) page.status = status;
    await page.save();
    // Po aktualizacji inwalidujemy cache
    await redisClient.del('pages_all');
    return res.status(200).json({ message: 'Strona zaktualizowana', page });
  } catch (error) {
    console.error('Błąd aktualizacji strony:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deletePage = async (req, res) => {
  try {
    const { id } = req.params;
    const page = await Page.findByPk(id);
    if (!page) {
      return res.status(404).json({ error: 'Strona nie znaleziona' });
    }
    await page.destroy();
    // Po usunięciu rekordu usuwamy cache
    await redisClient.del('pages_all');
    return res.status(200).json({ message: `Strona o ID ${id} została usunięta` });
  } catch (error) {
    console.error('Błąd usuwania strony:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

```

### backend/controllers/paymentController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 0.42 KB

```javascript
const stripe = require('../config/stripe.config');

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: 'Błąd przetwarzania płatności' });
  }
};

```

### backend/controllers/postController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 2.39 KB

```javascript
const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error('❌ Błąd pobierania postów:', error);
    res.status(500).json({ error: 'Błąd pobierania postów' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`🔍 Szukam posta o ID: ${id}`); // LOG DLA DEBUGOWANIA

    const post = await Post.findByPk(id);

    if (!post) {
      console.log(`❌ Post ID ${id} nie znaleziony!`); // LOG
      return res.status(404).json({ error: 'Post nie znaleziony' });
    }

    console.log(`✅ Post znaleziony:`, post); // LOG
    res.status(200).json(post);
  } catch (error) {
    console.error('❌ Błąd pobierania posta:', error);
    res.status(500).json({ error: 'Błąd pobierania posta', details: error.message });
  }
};

  
  exports.createPost = async (req, res) => {
    try {
      const { title, slug, content, status } = req.body;
  
      if (!title || !slug || !content) {
        return res.status(400).json({ error: "Wszystkie pola są wymagane" });
      }
  
      const newPost = await Post.create({ title, slug, content, status });
      return res.status(201).json(newPost);
    } catch (error) {
      console.error("❌ Błąd tworzenia posta:", error);
      return res.status(500).json({ error: "Błąd tworzenia posta", details: error.message });
    }
  };

  exports.deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);
      if (!post) return res.status(404).json({ error: 'Post nie znaleziony' });
  
      await post.destroy();
      res.status(200); // ❌ Nie zwraca wiadomości
    } catch (error) {
      console.error('❌ Błąd usuwania posta:', error);
      res.status(500).json({ error: 'Błąd usuwania posta' });
    }
  };

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, content, status } = req.body;

    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: 'Post nie znaleziony' });

    await post.update({ title, slug, content, status });
    res.status(200).json(post);
  } catch (error) {
    console.error('❌ Błąd aktualizacji posta:', error);
    res.status(500).json({ error: 'Błąd aktualizacji posta' });
  }
};
```

### backend/controllers/seoController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 2.03 KB

```javascript
// controllers/seoController.js
const Seo = require('../models/Seo');

exports.createSeo = async (req, res) => {
  try {
    const { pageId, title, description, keywords } = req.body;
    if (!pageId || !title || !description || !keywords) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    const seo = await Seo.create({ pageId, title, description, keywords });
    return res.status(201).json({ message: 'SEO utworzone', seo });
  } catch (error) {
    console.error('Błąd tworzenia SEO:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.getSeo = async (req, res) => {
  try {
    const seoList = await Seo.findAll();
    return res.status(200).json(seoList);
  } catch (error) {
    console.error('Błąd pobierania SEO:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updateSeo = async (req, res) => {
  try {
    const { id } = req.params;
    const { pageId, title, description, keywords } = req.body;
    const seo = await Seo.findByPk(id);
    if (!seo) {
      return res.status(404).json({ error: 'SEO nie znalezione' });
    }
    if (pageId !== undefined) seo.pageId = pageId;
    if (title !== undefined) seo.title = title;
    if (description !== undefined) seo.description = description;
    if (keywords !== undefined) seo.keywords = keywords;
    await seo.save();
    return res.status(200).json({ message: 'SEO zaktualizowane', seo });
  } catch (error) {
    console.error('Błąd aktualizacji SEO:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteSeo = async (req, res) => {
  try {
    const { id } = req.params;
    const seo = await Seo.findByPk(id);
    if (!seo) {
      return res.status(404).json({ error: 'SEO nie znalezione' });
    }
    await seo.destroy();
    return res.status(200).json({ message: `SEO o ID ${id} zostało usunięte` });
  } catch (error) {
    console.error('Błąd usuwania SEO:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

```

### backend/controllers/serviceController.js
Last modified: 2025-03-06T15:40:32.376Z
Size: 2.18 KB

```javascript
const Service = require('../models/Service');

exports.getServices = async (req, res) => {
  try {
    const services = await Service.findAll({ order: [['order', 'ASC']] });
    res.status(200).json(services);
  } catch (error) {
    console.error('Błąd pobierania usług:', error);
    res.status(500).json({ error: 'Błąd pobierania usług' });
  }
};

exports.createService = async (req, res) => {
  try {
    const { title, description, icon, image, order } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Tytuł jest wymagany' });
    }
    const service = await Service.create({ title, description, icon, image, order });
    res.status(201).json({ message: 'Usługa utworzona', service });
  } catch (error) {
    console.error('Błąd tworzenia usługi:', error);
    res.status(500).json({ error: 'Błąd tworzenia usługi' });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, icon, image, order } = req.body;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Usługa nie znaleziona' });
    }
    service.title = title !== undefined ? title : service.title;
    service.description = description !== undefined ? description : service.description;
    service.icon = icon !== undefined ? icon : service.icon;
    service.image = image !== undefined ? image : service.image;
    service.order = order !== undefined ? order : service.order;
    await service.save();
    res.status(200).json({ message: 'Usługa zaktualizowana', service });
  } catch (error) {
    console.error('Błąd aktualizacji usługi:', error);
    res.status(500).json({ error: 'Błąd aktualizacji usługi' });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Usługa nie znaleziona' });
    }
    await service.destroy();
    res.status(200).json({ message: 'Usługa usunięta' });
  } catch (error) {
    console.error('Błąd usuwania usługi:', error);
    res.status(500).json({ error: 'Błąd usuwania usługi' });
  }
};

```

### backend/controllers/userController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 1.71 KB

```javascript
// controllers/userController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, { attributes: ['id', 'email', 'role'] });
    if (!user) return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    return res.status(200).json(user);
  } catch (error) {
    console.error('Błąd pobierania profilu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;
    if (!newPassword || !confirmPassword) {
      return res.status(400).json({ error: 'Oba pola są wymagane' });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'Hasła nie pasują do siebie' });
    }
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    user.passwordHash = await bcrypt.hash(newPassword, 10);
    await user.save();
    return res.status(200).json({ message: 'Profil zaktualizowany.' });
  } catch (error) {
    console.error('Błąd aktualizacji profilu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    await user.destroy();
    return res.status(200).json({ message: 'Użytkownik usunięty.' });
  } catch (error) {
    console.error('Błąd usuwania profilu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

```

### backend/index.js
Last modified: 2025-03-06T15:40:32.377Z
Size: 2.45 KB

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const { createClient } = require('redis');
const config = require('./config/env/development');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const db = require('./models');
const path = require('path');

const app = express();
app.set('trust proxy', 1);

// Podstawowa konfiguracja
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfiguracja CORS – dozwolone domeny
const corsOptions = {
  origin: ['https://twoja-zaufana-domena.com', 'http://localhost:3000'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Konfiguracja klienta Redis
const redisClient = createClient({
  url: config.REDIS_URL || 'redis://localhost:6379'
});
redisClient.connect().catch(console.error);

// Rate limiting – stosujemy tylko w środowiskach innym niż testowe
if (process.env.NODE_ENV !== 'test') {
  const limiterAnon = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    store: new RedisStore({ sendCommand: (...args) => redisClient.sendCommand(...args) }),
    message: 'Za dużo żądań, spróbuj ponownie później'
  });

  const limiterAuth = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    store: new RedisStore({ sendCommand: (...args) => redisClient.sendCommand(...args) }),
    message: 'Za dużo żądań, spróbuj ponownie później'
  });

  // W zależności od obecności użytkownika wybieramy odpowiedni limiter
  app.use('/api/v1/', (req, res, next) => {
    if (req.user) {
      return limiterAuth(req, res, next);
    }
    return limiterAnon(req, res, next);
  });
}

app.set('models', db);

// Montujemy główny router (wszystkie endpointy API)
app.use('/api/v1', routes);

// Globalna obsługa błędów
app.use(errorHandler);

// Dokumentacja API za pomocą Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;

app.use(express.static(path.join(__dirname, 'public')));

// Dla SPA - przekierowanie wszystkich nieznalezionych tras do index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```

### backend/jest.config.js
Last modified: 2025-03-04T16:42:38.105Z
Size: 0.27 KB

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  globalSetup: './jest.global-setup.js',
  globalTeardown: './jest.global-teardown.js',
  testPathIgnorePatterns: ['/node_modules/', '/config/'],
  testTimeout: 20000 // Ustaw timeout na 10 sekund (10000 ms)
};


```

### backend/jest.global-setup.js
Last modified: 2025-03-04T16:42:38.105Z
Size: 0.27 KB

```javascript
// jest.global-setup.js
const { sequelize } = require('./models');

module.exports = async () => {
  // Synchronizujemy wszystkie modele, usuwając istniejące tabele
  await sequelize.sync({ force: true });
  console.log('Global Setup: Baza danych zsynchronizowana');
  
};
```

### backend/jest.global-teardown.js
Last modified: 2025-03-04T16:42:38.105Z
Size: 0.20 KB

```javascript
// jest.global-teardown.js
const { sequelize } = require('./models');

module.exports = async () => {
  await sequelize.close();
  console.log('Global Teardown: Połączenie z bazą zostało zamknięte');
};

```

### backend/middleware/authMiddleware.js
Last modified: 2025-03-06T15:40:32.378Z
Size: 0.70 KB

```javascript
// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/env/${env}`);

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Auth Header:", authHeader); // Debug: wypisuje otrzymany nagłówek
  if (!authHeader) {
    return res.status(401).json({ error: 'Brak tokena' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Błąd weryfikacji tokena:", error);
    return res.status(401).json({ error: 'Nieprawidłowy token' });
  }
};
```

### backend/middleware/cacheMiddleware.js
Last modified: 2025-03-04T16:42:38.106Z
Size: 0.92 KB

```javascript
// backend/middleware/cacheMiddleware.js
const redisClient = require('../redisClient');

const cacheMiddleware = (cacheKey, ttlSeconds = 60) => {
  return async (req, res, next) => {
    try {
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        // Jeśli dane są w cache, wysyłamy je jako odpowiedź
        return res.status(200).json(JSON.parse(cachedData));
      }
      // Nadpisujemy res.send, aby zapisać wynik w cache przed wysłaniem odpowiedzi
      const originalSend = res.send.bind(res);
      res.send = async (body) => {
        // Zapiszemy body (upewnij się, że jest typu string lub skonwertuj go)
        await redisClient.setEx(cacheKey, ttlSeconds, body);
        originalSend(body);
      };
      next();
    } catch (error) {
      // Jeśli wystąpi błąd podczas pobierania z cache, kontynuujemy bez cache
      next();
    }
  };
};

module.exports = cacheMiddleware;

```

### backend/middleware/errorHandler.js
Last modified: 2025-03-06T16:10:45.482Z
Size: 0.74 KB

```javascript
// backend/middleware/requireAdmin.js
const jwt = require('jsonwebtoken');
const config = require('../config/env/development');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Brak tokena' });
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Nieprawidłowy token' });
    }
    // Debug – wypisz zawartość tokena
    console.log("Decoded token:", decoded);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Brak uprawnień - wymagany status admina' });
    }
    req.user = decoded;
    next();
  });
};

```

### backend/middleware/validateMedia.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.22 KB

```javascript
module.exports = (req, res, next) => {
  const { fileName, url, type, size } = req.body;
  if (!fileName || !url || !type || !size) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
  }
  next();
};

```

### backend/middleware/validateMenu.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.19 KB

```javascript
module.exports = (req, res, next) => {
  const { title, link } = req.body;
  if (!title || !link) {
    return res.status(400).json({ error: 'Tytuł i link są wymagane' });
  }
  next();
};

```

### backend/middleware/validatePage.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.21 KB

```javascript
module.exports = (req, res, next) => {
  const { title, slug, content } = req.body;
  if (!title || !slug || !content) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
  }
  next();
};

```

### backend/middleware/validatePost.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.24 KB

```javascript
module.exports = (req, res, next) => {
    const { title, slug, content, author } = req.body;
    if (!title || !slug || !content || !author) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    next();
  };
  
```

### backend/middleware/validateRegister.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.63 KB

```javascript
const { body, validationResult } = require('express-validator');

const validateRegister = [
  body('email')
    .isEmail()
    .withMessage('Podaj poprawny adres e-mail'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Hasło musi mieć co najmniej 8 znaków'),
  body('confirmPassword')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Hasła nie pasują do siebie'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
  }
];

module.exports = validateRegister;

```

### backend/middleware/validateSeo.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.25 KB

```javascript
module.exports = (req, res, next) => {
    const { pageId, metaTitle, metaDescription } = req.body;
    if (!pageId || !metaTitle || !metaDescription) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    next();
  };
  
```

### backend/migrations/20250206-create-pages.js
Last modified: 2025-03-05T04:22:04.968Z
Size: 0.86 KB

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pages', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Pages');
  }
};
```

### backend/migrations/20250206231514-create-users-table.js
Last modified: 2025-03-05T04:22:06.936Z
Size: 0.75 KB

```javascript
// migrations/20250206-create-users.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      passwordHash: { type: Sequelize.STRING, allowNull: false },
      role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'user' },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};
```

### backend/migrations/20250206231516-create-posts-table.js
Last modified: 2025-03-05T04:28:23.685Z
Size: 0.90 KB

```javascript

// migrations/20250206-create-posts.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: { type: Sequelize.STRING, allowNull: false },
      slug: { type: Sequelize.STRING, allowNull: false },
      content: { type: Sequelize.TEXT, allowNull: false },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Posts');
  }
};
```

### backend/migrations/20250206231517-create-seo-table.js
Last modified: 2025-03-05T04:21:21.399Z
Size: 0.89 KB

```javascript
// backend/migrations/XXXXXX-create-seo-table.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Seo', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pageId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      keywords: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Seo');
  }
};
```

### backend/migrations/20250206231518-create-menus-table.js
Last modified: 2025-03-05T04:20:50.596Z
Size: 0.64 KB

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Menus', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: { type: Sequelize.STRING, allowNull: false },
      link: { type: Sequelize.STRING, allowNull: false, unique: true },
      order: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Menus');
  }
};
```

### backend/migrations/20250301-create-services.js
Last modified: 2025-03-06T15:48:34.635Z
Size: 1.03 KB

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Services', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      icon: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Services');
  }
};

```

### backend/migrations/20250302-create-home-sections.js
Last modified: 2025-03-06T15:49:17.852Z
Size: 0.98 KB

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HomeSections', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'about'
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('HomeSections');
  }
};

```

### backend/models/Contact.js
Last modified: 2025-03-04T16:42:38.108Z
Size: 0.82 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Contact = sequelize.define('Contact', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  firstName: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  lastName: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  phone: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  email: { 
    type: DataTypes.STRING, 
    allowNull: true  // opcjonalne, bo klient może nie podać
  },
  situationDescription: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  deviceType: { 
    type: DataTypes.ENUM('Pendrive/Karta Flash', 'Dysk HDD/SSD', 'Telefon', 'Tablet'),
    allowNull: false 
  }
}, {
  tableName: 'Contacts',
  timestamps: true
});

module.exports = Contact;

```

### backend/models/HomeSection.js
Last modified: 2025-03-06T15:40:32.378Z
Size: 0.69 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const HomeSection = sequelize.define('HomeSection', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // Typ sekcji – na przykład 'about' dla sekcji "O nas / misja i wartości"
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'about'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'HomeSections',
  timestamps: true
});

module.exports = HomeSection;

```

### backend/models/Homepage.js
Last modified: 2025-03-04T16:42:38.108Z
Size: 0.81 KB

```javascript
// models/HomepageVersion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const HomepageVersion = sequelize.define('HomepageVersion', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  homepageId: { type: DataTypes.INTEGER, allowNull: false },
  heroTitle: { type: DataTypes.STRING, allowNull: false },
  heroSubtitle: { type: DataTypes.TEXT, allowNull: true },
  heroBackground: { type: DataTypes.STRING, allowNull: true },
  mainContent: { type: DataTypes.TEXT, allowNull: true },
  fontFamily: { type: DataTypes.STRING, allowNull: true },
  fontSize: { type: DataTypes.STRING, allowNull: true },
  textColor: { type: DataTypes.STRING, allowNull: true }
}, {
  tableName: 'HomepageVersions',
  timestamps: true
});

module.exports = HomepageVersion;

```

### backend/models/HomepageVersion.js
Last modified: 2025-03-06T16:27:18.140Z
Size: 0.94 KB

```javascript
// backend/models/HomepageVersion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const HomepageVersion = sequelize.define('HomepageVersion', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  homepageId: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  heroTitle: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  heroSubtitle: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  },
  heroBackground: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  mainContent: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  },
  fontFamily: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  fontSize: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  textColor: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }
}, {
  tableName: 'HomepageVersions',
  timestamps: true
});

module.exports = HomepageVersion;

```

### backend/models/Media.js
Last modified: 2025-03-04T16:42:38.108Z
Size: 0.47 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Media = sequelize.define('Media', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fileName: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  size: { type: DataTypes.INTEGER, allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: true });

module.exports = Media;

```

### backend/models/Menu.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.64 KB

```javascript
// models/menu.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Menu = sequelize.define('Menu', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Menus',  // Upewnij się, że nazwa tabeli jest spójna (np. "Menus")
  timestamps: true
});

module.exports = Menu;

```

### backend/models/Page.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.60 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Page = sequelize.define('Page', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  title: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  slug: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true 
  },
  content: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  status: { 
    type: DataTypes.ENUM('draft', 'published'), 
    defaultValue: 'draft' 
  }
}, { 
  tableName: 'Pages', 
  timestamps: true 
});

module.exports = Page;

```

### backend/models/Post.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.51 KB

```javascript
// models/post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Post = sequelize.define('Post', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  authorId: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'Posts',
  timestamps: true
});

module.exports = Post;

```

### backend/models/Seo.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.83 KB

```javascript
// backend/models/Seo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Seo = sequelize.define('Seo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pageId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT, // lub STRING – ważne, by w migracji było to samo
    allowNull: true
  },
  keywords: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'Seo',
  timestamps: true
});

module.exports = Seo;

```

### backend/models/Service.js
Last modified: 2025-03-06T15:40:32.379Z
Size: 0.64 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Service = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'Services',
  timestamps: true
});

module.exports = Service;

```

### backend/models/User.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.54 KB

```javascript
// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  passwordHash: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' }
}, {
  tableName: 'Users', // Używamy tej samej nazwy, co w migracji
  timestamps: true
});

module.exports = User;

```

### backend/models/index.js
Last modified: 2025-03-06T16:28:16.233Z
Size: 1.88 KB

```javascript
// backend/models/index.js
const sequelize = require('../config/db.config');
const User = require('./User');
const Page = require('./Page');
const Post = require('./Post');
const Media = require('./Media');
const Menu = require('./Menu');
const Seo = require('./Seo');
const Contact = require('./Contact');
const Homepage = require('./Homepage');
const HomepageVersion = require('./HomepageVersion'); // Upewnij się, że ten model jest poprawnie eksportowany


const db = { sequelize, User ,Page, Post, Media, Menu, Seo, Homepage, HomepageVersion };
async function initDatabase() {
  // 1. Tworzy tabele zdefiniowane w modelach (dla dev/test).
  await sequelize.sync();

  // 2. Tylko jeśli nie jesteśmy w testach, tworzymy indeksy i logujemy
  if (process.env.NODE_ENV !== 'test') {
    console.log('📌 Baza danych zsynchronizowana.');

    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_pages_slug ON "Pages" (slug)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_posts_slug ON "Posts" (slug)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_media_url ON "Media" (url)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_menu_link ON "Menus" (link)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_seo_pageId ON "Seo" (pageId)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_users_email ON "Users" (email)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_homepage_id ON "Homepage" (id)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_homepageversion_homepageId ON "HomepageVersions" (homepageId)');
  }
}

User.hasMany(Post, {
  as: 'posts',         // user.getPosts(), user.setPosts(), ...
  foreignKey: 'authorId',
});
Post.belongsTo(User, {
  as: 'user',          // post.getUser(), post.setUser(), ...
  foreignKey: 'authorId',
});

module.exports = {
  sequelize, User, Post, Media, Menu, Seo, Page, Contact,
  initDatabase
};

```

### backend/package.json
Last modified: 2025-03-04T16:42:38.110Z
Size: 1.62 KB

```json
{
    "name": "cms-backend",
    "version": "1.0.0",
    "description": "CMS Backend with Node.js, Express, Sequelize, PostgreSQL, Redis, Stripe, SendGrid, and Passport.js",
    "main": "index.js",
    "scripts": {
        "start": "node server.js",
        "dev": "kill-port 4000 && nodemon server.js",
        "migrate": "sequelize db:migrate",
        "seed": "sequelize db:seed:all",
        "test": "cross-env NODE_ENV=test jest --runInBand"
    },
    "dependencies": {
        "@sendgrid/mail": "^7.7.0",
        "bcrypt": "^5.1.1",
        "bcryptjs": "^2.4.3",
        "body-parser": "^1.20.3",
        "compression": "^1.7.4",
        "cors": "^2.8.5",
        "cross-env": "^7.0.3",
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "express-rate-limit": "^7.5.0",
        "express-validator": "^7.2.1",
        "helmet": "^7.2.0",
        "jsonwebtoken": "^9.0.0",
        "multer": "^1.4.5-lts.1",
        "nodemailer": "^6.10.0",
        "passport": "^0.6.0",
        "passport-facebook": "^3.0.0",
        "passport-google-oauth20": "^2.0.0",
        "pdfkit": "^0.16.0",
        "pg": "^8.13.1",
        "pg-hstore": "^2.3.4",
        "rate-limit-redis": "^1.7.0",
        "redis": "^4.7.0",
        "sequelize": "^6.37.5",
        "stripe": "^12.0.0",
        "swagger-jsdoc": "^6.2.8",
        "swagger-ui-express": "^5.0.1",
        "winston": "^3.17.0"
    },
    "devDependencies": {
        "jest": "^29.7.0",
        "kill-port": "^2.0.1",
        "nodemon": "^3.0.1",
        "sequelize-cli": "^6.6.2",
        "supertest": "^6.3.4"
    },
    "engines": {
        "node": ">=18.0.0"
    },
    "license": "MIT"
}

```

### backend/redisClient.js
Last modified: 2025-03-04T16:42:38.110Z
Size: 0.26 KB

```javascript
const { createClient } = require('redis');
const config = require('./config/env/development');

const redisClient = createClient({
  url: config.REDIS_URL || 'redis://localhost:6379'
});

redisClient.connect().catch(console.error);

module.exports = redisClient;

```

### backend/routes/index.js
Last modified: 2025-03-06T15:40:32.380Z
Size: 1.37 KB

```javascript
const express = require('express');
const router = express.Router();

const authRoutes = require('./v1/authRoutes');
const userRoutes = require('./v1/usersRoutes'); // Usuń lub zakomentuj, jeśli nie są potrzebne
const mediaRoutes = require('./v1/mediaRoutes');
const menuRoutes = require('./v1/menuRoutes');
const seoRoutes = require('./v1/seoRoutes');
const pageRoutes = require('./v1/pageRoutes');
const contactRoutes = require('./v1/contactRoutes');
const emailRoutes = require('./v1/emailRoutes');
const postRoutes = require('./v1/postsRoutes'); // Usuń lub zakomentuj, jeśli nie są potrzebne
const adminRoutes = require('./v1/adminRoutes'); 
const homepageRoutes = require('./v1/homepageRoutes'); 
const homeSectionRoutes = require('./v1/homeSectionRoutes');
const serviceRoutes = require('./v1/serviceRoutes');


router.use('/auth', authRoutes);
router.use('/user', userRoutes); // Usuń lub zakomentuj
router.use('/media', mediaRoutes);
router.use('/menu', menuRoutes);
router.use('/seo', seoRoutes);
router.use('/page', pageRoutes);
router.use('/contact', contactRoutes);
router.use('/email', emailRoutes);
router.use('/post', postRoutes);
router.use('/admin', adminRoutes);
router.use('/homepage', homepageRoutes); // Usuń lub zakomentuj, jeśli nie są potrzebne
router.use('/homepage/sections', homeSectionRoutes);
router.use('/services', serviceRoutes);

module.exports = router;

```

### backend/routes/v1/adminRoutes.js
Last modified: 2025-03-04T16:42:38.111Z
Size: 1.91 KB

```javascript
const express = require('express');
const router = express.Router();
const requireAdmin = require('../../middleware/requireAdmin');
const { body, validationResult } = require('express-validator');

/**
 * GET /api/admin/users
 * Endpoint dostępny tylko dla administratora – zwraca listę wszystkich użytkowników.
 */
router.get('/users', requireAdmin, async (req, res, next) => {
  try {
    // Zakładamy, że obiekt models jest ustawiony globalnie w aplikacji (np. przez app.set('models', models))
    const models = req.app.get('models');
    const users = await models.User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error('Błąd pobierania użytkowników:', error);
    return res.status(500).json({ message: 'Błąd podczas pobierania użytkowników.' });
  }
});

/**
 * POST /api/admin/homepage
 * Endpoint dostępny tylko dla administratora – aktualizuje ustawienia strony głównej.
 * Walidacja danych wejściowych przy użyciu express-validator.
 */
router.post(
  '/homepage',
  requireAdmin,
  [
    body('title').notEmpty().withMessage('Title jest wymagany'),
    body('content').notEmpty().withMessage('Content jest wymagany')
  ],
  async (req, res, next) => {
    // Walidacja danych wejściowych
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Przykładowa logika aktualizacji ustawień strony głównej.
      // Możesz zastąpić to odpowiednim zapytaniem do modelu, np.:
      // await models.Homepage.update(req.body, { where: { id: 1 } });
      return res.status(200).json({ message: 'Strona główna została zaktualizowana.' });
    } catch (error) {
      console.error('Błąd podczas aktualizacji strony głównej:', error);
      return res.status(500).json({ message: 'Błąd podczas aktualizacji strony głównej.' });
    }
  }
);

module.exports = router;

```

### backend/routes/v1/authRoutes.js
Last modified: 2025-03-04T16:42:38.111Z
Size: 0.47 KB

```javascript
// routes/v1/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, deleteUser } = require('../../controllers/authController');
const authMiddleware = require('../../middleware/authMiddleware');
const validateRegister = require('../../middleware/validateRegister');

router.post('/register', validateRegister, register);
router.post('/login', login);
router.delete('/delete', authMiddleware, deleteUser);

module.exports = router;

```

### backend/routes/v1/contactRoutes.js
Last modified: 2025-03-04T16:42:38.112Z
Size: 2.01 KB

```javascript
const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../../controllers/contactController');

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Wysłanie formularza kontaktowego
 *     description: Przyjmuje dane formularza, generuje PDF, zapisuje dane w bazie oraz wysyła e-mail do administracji i potwierdzenie dla klienta.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - phone
 *               - situationDescription
 *               - deviceType
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Jan"
 *               lastName:
 *                 type: string
 *                 example: "Kowalski"
 *               phone:
 *                 type: string
 *                 example: "123456789"
 *               email:
 *                 type: string
 *                 example: "jan.kowalski@example.com"
 *               situationDescription:
 *                 type: string
 *                 example: "Mój telefon nie włącza się."
 *               deviceType:
 *                 type: string
 *                 enum: ["Pendrive/Karta Flash", "Dysk HDD/SSD", "Telefon", "Tablet"]
 *                 example: "Telefon"
 *     responses:
 *       200:
 *         description: Formularz wysłany, dane zapisane, potwierdzenie wysłane.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Formularz wysłany, dziękujemy za kontakt."
 *                 contact:
 *                   $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Błąd walidacji lub przetwarzania.
 */
router.post('/', submitContactForm);

module.exports = router;

```

### backend/routes/v1/emailRoutes.js
Last modified: 2025-03-04T16:42:38.112Z
Size: 1.01 KB

```javascript
const express = require('express');
const router = express.Router();
const { sendTestEmail } = require('../../controllers/emailController');

/**
 * @swagger
 * /email/send:
 *   post:
 *     summary: Wysyłka testowego e-maila
 *     description: Wysyła e-mail testowy. W środowisku testowym używa Ethereal.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - to
 *               - subject
 *               - text
 *             properties:
 *               to:
 *                 type: string
 *                 example: "jan.kowalski@example.com"
 *               subject:
 *                 type: string
 *                 example: "Testowy e-mail"
 *               text:
 *                 type: string
 *                 example: "To jest testowy e-mail."
 *     responses:
 *       200:
 *         description: Email wysłany.
 */
router.post('/send', sendTestEmail);

module.exports = router;

```

### backend/routes/v1/homeSectionRoutes.js
Last modified: 2025-03-06T15:40:32.380Z
Size: 0.49 KB

```javascript
const express = require('express');
const router = express.Router();
const {
  getHomeSections,
  createHomeSection,
  updateHomeSection,
  deleteHomeSection
} = require('../../controllers/homeSectionController');
const requireAdmin = require('../../middleware/requireAdmin');

router.get('/', getHomeSections);
router.post('/', requireAdmin, createHomeSection);
router.put('/:id', requireAdmin, updateHomeSection);
router.delete('/:id', requireAdmin, deleteHomeSection);

module.exports = router;

```

### backend/routes/v1/homepageRoutes.js
Last modified: 2025-03-06T16:28:40.168Z
Size: 4.40 KB

```javascript
// backend/routes/v1/homepageRoutes.js
const express = require('express');
const router = express.Router();
const Homepage = require('../../models/Homepage');
const HomepageVersion = require('../../models/HomepageVersion'); // Dodany import
const requireAdmin = require('../../middleware/requireAdmin');

// GET - Pobiera bieżącą zawartość strony głównej
router.get('/', async (req, res) => {
  try {
    const homepage = await Homepage.findOne({ where: { id: 1 } });
    if (!homepage) {
      return res.status(404).json({ message: 'Strona główna nie została jeszcze skonfigurowana.' });
    }
    res.json(homepage);
  } catch (error) {
    console.error('Błąd podczas pobierania strony głównej:', error);
    res.status(500).json({ message: 'Błąd serwera podczas pobierania strony głównej.' });
  }
});

// POST - Aktualizacja (lub utworzenie) strony głównej – tylko administrator
router.post('/', requireAdmin, async (req, res) => {
  try {
    const { heroTitle, heroSubtitle, heroBackground, mainContent, fontFamily, fontSize, textColor } = req.body;
    let homepage = await Homepage.findOne({ where: { id: 1 } });
    
    if (homepage) {
      // Zapisujemy obecną wersję przed aktualizacją
      await HomepageVersion.create({
        homepageId: homepage.id,
        heroTitle: homepage.heroTitle,
        heroSubtitle: homepage.heroSubtitle,
        heroBackground: homepage.heroBackground,
        mainContent: homepage.mainContent,
        fontFamily: homepage.fontFamily,
        fontSize: homepage.fontSize,
        textColor: homepage.textColor
      });
      // Aktualizujemy rekord
      homepage.heroTitle = heroTitle;
      homepage.heroSubtitle = heroSubtitle;
      homepage.heroBackground = heroBackground;
      homepage.mainContent = mainContent;
      homepage.fontFamily = fontFamily;
      homepage.fontSize = fontSize;
      homepage.textColor = textColor;
      await homepage.save();
    } else {
      // Jeśli rekord nie istnieje, tworzymy nowy
      homepage = await Homepage.create({
        heroTitle,
        heroSubtitle,
        heroBackground,
        mainContent,
        fontFamily,
        fontSize,
        textColor
      });
    }
    res.json({ message: 'Strona główna została zaktualizowana.', homepage });
  } catch (error) {
    console.error('Błąd podczas aktualizacji strony głównej:', error);
    res.status(500).json({ message: 'Błąd podczas aktualizacji strony głównej.' });
  }
});

// GET - Pobranie historii wersji strony głównej (tylko admin)
router.get('/versions', requireAdmin, async (req, res) => {
  try {
    const versions = await HomepageVersion.findAll({
      where: { homepageId: 1 },
      order: [['createdAt', 'DESC']]
    });
    res.json(versions);
  } catch (error) {
    console.error('Błąd podczas pobierania wersji strony głównej:', error);
    res.status(500).json({ message: 'Błąd podczas pobierania wersji strony głównej.' });
  }
});

// POST - Przywrócenie wybranej wersji strony głównej (tylko admin)
router.post('/versions/:id/revert', requireAdmin, async (req, res) => {
  try {
    const versionId = req.params.id;
    const version = await HomepageVersion.findByPk(versionId);
    if (!version) {
      return res.status(404).json({ message: 'Wybrana wersja nie została znaleziona.' });
    }
    // Przywracamy wersję
    let homepage = await Homepage.findOne({ where: { id: 1 } });
    if (!homepage) {
      homepage = await Homepage.create({
        heroTitle: version.heroTitle,
        heroSubtitle: version.heroSubtitle,
        heroBackground: version.heroBackground,
        mainContent: version.mainContent,
        fontFamily: version.fontFamily,
        fontSize: version.fontSize,
        textColor: version.textColor
      });
    } else {
      homepage.heroTitle = version.heroTitle;
      homepage.heroSubtitle = version.heroSubtitle;
      homepage.heroBackground = version.heroBackground;
      homepage.mainContent = version.mainContent;
      homepage.fontFamily = version.fontFamily;
      homepage.fontSize = version.fontSize;
      homepage.textColor = version.textColor;
      await homepage.save();
    }
    res.json({ message: 'Strona główna została przywrócona do wybranej wersji.', homepage });
  } catch (error) {
    console.error('Błąd podczas przywracania wersji strony głównej:', error);
    res.status(500).json({ message: 'Błąd podczas przywracania wersji strony głównej.' });
  }
});

module.exports = router;

```

### backend/routes/v1/mediaRoutes.js
Last modified: 2025-03-04T16:42:38.112Z
Size: 0.71 KB

```javascript
// routes/v1/mediaRoutes.js
const express = require('express');
const multer = require('multer');
const { uploadFile, getAllFiles, deleteFile } = require('../../controllers/mediaController');

const router = express.Router();

// Konfiguracja Multer – zapis do folderu "uploads/"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Ustawiamy trasę POST na '/' zamiast '/upload'
router.post('/', upload.single('file'), uploadFile);

// Pozostałe trasy:
router.get('/', getAllFiles);
router.delete('/:id', deleteFile);

module.exports = router;

```

### backend/routes/v1/menuRoutes.js
Last modified: 2025-03-04T16:42:38.113Z
Size: 0.31 KB

```javascript
const express = require('express');
const router = express.Router();
const { createMenu, getMenu, updateMenu, deleteMenu } = require('../../controllers/menuController');

router.get('/', getMenu);
router.post('/', createMenu);
router.put('/:id', updateMenu);
router.delete('/:id', deleteMenu);

module.exports = router;

```

### backend/routes/v1/pageRoutes.js
Last modified: 2025-03-04T16:42:38.113Z
Size: 0.42 KB

```javascript
const express = require('express');
const router = express.Router();
const { createPage, getPages, updatePage, deletePage } = require('../../controllers/pageController');
const cacheMiddleware = require('../../middleware/cacheMiddleware');

router.post('/', createPage);
router.get('/', cacheMiddleware('pages_all', 60), getPages);
router.put('/:id', updatePage);
router.delete('/:id', deletePage);

module.exports = router;

```

### backend/routes/v1/paymentRoutes.js
Last modified: 2025-03-04T16:42:38.113Z
Size: 0.22 KB

```javascript
const express = require('express');
const { createPaymentIntent } = require('../../controllers/paymentController');
const router = express.Router();

router.post('/intent', createPaymentIntent);

module.exports = router;

```

### backend/routes/v1/postsRoutes.js
Last modified: 2025-03-04T16:42:38.114Z
Size: 0.48 KB

```javascript
const express = require('express');
const { getAllPosts, getPostById, createPost, deletePost, updatePost} = require('../../controllers/postController');

const router = express.Router();

router.get('/', getAllPosts); // 📌 Pobieranie listy postów
router.get('/:id', getPostById); // 📌 Pobieranie posta po ID
router.post('/', createPost); // 📌 Tworzenie nowego posta
router.delete('/:id', deletePost); // 📌 Usuwanie posta
router.put('/:id', updatePost);


module.exports = router;

```

### backend/routes/v1/protectedRoutes.js
Last modified: 2025-03-04T16:42:38.114Z
Size: 0.78 KB

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config/env/development');

const router = express.Router();

// Middleware do weryfikacji tokena
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Brak tokena, autoryzacja odmówiona' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Nieprawidłowy token' });
  }
};

// Endpoint chroniony - wymaga tokena
router.get('/protected-route', authenticate, (req, res) => {
  res.json({ message: 'Dostęp do zasobu chronionego', user: req.user });
});

module.exports = router;

```

### backend/routes/v1/seoRoutes.js
Last modified: 2025-03-04T16:42:38.114Z
Size: 0.33 KB

```javascript
// routes/v1/seoRoutes.js
const express = require('express');
const router = express.Router();
const { createSeo, getSeo, updateSeo, deleteSeo } = require('../../controllers/seoController');

router.post('/', createSeo);
router.get('/', getSeo);
router.put('/:id', updateSeo);
router.delete('/:id', deleteSeo);

module.exports = router;

```

### backend/routes/v1/serviceRoutes.js
Last modified: 2025-03-06T15:40:32.381Z
Size: 0.45 KB

```javascript
const express = require('express');
const router = express.Router();
const {
  getServices,
  createService,
  updateService,
  deleteService
} = require('../../controllers/serviceController');
const requireAdmin = require('../../middleware/requireAdmin');

router.get('/', getServices);
router.post('/', requireAdmin, createService);
router.put('/:id', requireAdmin, updateService);
router.delete('/:id', requireAdmin, deleteService);

module.exports = router;

```

### backend/routes/v1/usersRoutes.js
Last modified: 2025-03-04T16:42:38.115Z
Size: 0.44 KB

```javascript
// routes/v1/userRoutes.js
const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, deleteProfile } = require('../../controllers/userController');
const authMiddleware = require('../../middleware/authMiddleware');

router.get('/profile', authMiddleware, getProfile);
router.patch('/profile', authMiddleware, updateProfile);
router.delete('/profile', authMiddleware, deleteProfile);

module.exports = router;

```

### backend/scripts/backup.sh
Last modified: 2025-03-04T16:42:38.115Z
Size: 0.67 KB

```shell
#!/bin/bash
# backup.sh – skrypt tworzący kopię zapasową całej bazy danych

# Ustaw zmienne środowiskowe
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="mratuj"
DB_NAME="ratujemy_dane_dev"
BACKUP_DIR="./backups"
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/${DB_NAME}_full_backup_${DATE}.sql"

# Upewnij się, że katalog backup istnieje
mkdir -p "${BACKUP_DIR}"

# Wykonaj backup całej bazy danych przy użyciu pg_dump
pg_dump -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" "${DB_NAME}" > "${BACKUP_FILE}"

if [ $? -eq 0 ]; then
  echo "Backup bazy danych został utworzony: ${BACKUP_FILE}"
else
  echo "Błąd podczas tworzenia backupu bazy danych" >&2
  exit 1
fi

```

### backend/scripts/restore.sh
Last modified: 2025-03-04T16:42:38.116Z
Size: 0.65 KB

```shell
#!/bin/bash
# restore.sh – skrypt przywracający całą bazę danych z backupu

# Ustaw zmienne środowiskowe
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="mratuj"
DB_NAME="ratujemy_dane_dev"

# Ścieżka do pliku backupu przekazywana jako pierwszy argument
BACKUP_FILE="$1"

if [ -z "$BACKUP_FILE" ]; then
  echo "Usage: $0 /sciezka/do/backup_file.sql"
  exit 1
fi

# Przywróć bazę danych z backupu przy użyciu psql
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" "${DB_NAME}" < "${BACKUP_FILE}"

if [ $? -eq 0 ]; then
  echo "Baza danych została przywrócona z backupu: ${BACKUP_FILE}"
else
  echo "Błąd podczas przywracania bazy danych" >&2
  exit 1
fi

```

### backend/server.js
Last modified: 2025-03-04T16:42:38.116Z
Size: 0.79 KB

```javascript
const app = require('./index');
const { sequelize } = require('./models');
const env = process.env.NODE_ENV || 'development';
const config = require(`./config/env/${env}`);
const PORT = process.env.PORT || 4000;

sequelize.sync()
  .then(() => {
    if (require.main === module) {
      app.listen(PORT, () => {
        console.log(`Serwer działa na porcie ${PORT}`);
        console.log("🔑 JWT_SECRET:", config.JWT_SECRET || "⛔ Nie znaleziono JWT_SECRET!");
      }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.error(`Port ${PORT} jest już zajęty. Spróbuj użyć innego portu.`);
        } else {
          console.error('Błąd uruchomienia serwera:', err);
        }
      });
    }
  })
  .catch(err => console.error('Błąd synchronizacji bazy:', err));

```

### backend/tests/admin.test.js
Last modified: 2025-03-04T16:42:38.116Z
Size: 2.07 KB

```javascript
const request = require('supertest');
const http = require('http');
const jwt = require('jsonwebtoken');
const app = require('../index'); // Upewnij się, że index.js eksportuje Twoją aplikację Express
const server = http.createServer(app);
const { sequelize, User } = require('../models');
const config = require('../config/env/development');

// Generujemy token dla administratora przy użyciu JWT_SECRET
const adminToken = jwt.sign(
  { id: 1, email: 'admin@example.com', role: 'admin' },
  config.JWT_SECRET,
  { expiresIn: '1h' }
);

describe('Admin API', () => {
  beforeAll(async () => {
    // Resetujemy model User – czysta baza dla testów
    await User.sync({ force: true });
    // Tworzymy przykładowych użytkowników (nie-admin)
    await User.create({
      email: 'user1@example.com',
      passwordHash: 'hashedpassword',
      role: 'user'
    });
    await User.create({
      email: 'user2@example.com',
      passwordHash: 'hashedpassword',
      role: 'user'
    });
  });

  describe('GET /api/v1/admin/users', () => {
    it('✅ Powinno zwrócić listę użytkowników dla admina', async () => {
      const res = await request(server)
        .get('/api/v1/admin/users')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);
      
      // Sprawdzamy, czy odpowiedź jest tablicą
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('POST /api/v1/admin/homepage', () => {
    it('✅ Powinno zaktualizować ustawienia strony głównej dla admina', async () => {
      const payload = {
        title: 'Nowy tytuł strony głównej',
        content: 'Nowa treść strony głównej'
      };

      const res = await request(server)
        .post('/api/v1/admin/homepage')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(payload)
        .expect(200);
      
      expect(res.body).toHaveProperty('message', 'Strona główna została zaktualizowana.');
    });
  });

  // Opcjonalnie: nie zamykamy połączenia, aby nie wpływać na kolejne testy
  // afterAll(async () => {
  //   await sequelize.close();
  // });
});

```

### backend/tests/auth.test.js
Last modified: 2025-03-04T16:42:38.117Z
Size: 3.56 KB

```javascript
/**
 * tests/auth.test.js
 * Testy autoryzacji: rejestracja, logowanie, usuwanie użytkownika.
 */
const request = require('supertest');
const { sequelize, User } = require('../models');
const app = require('../index');

describe('🔐 Testy autoryzacji', () => {
  beforeAll(async () => {
    // Aby uniknąć błędów związanych z relacjami (np. w tabeli Posts)
    // synchronizujemy tylko model User, który jest potrzebny w testach auth.
    await User.sync({ force: true });
  });

  describe('POST /api/v1/auth/register', () => {
    it('✅ Powinno zarejestrować użytkownika przy poprawnych danych', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'secret123',
        confirmPassword: 'secret123'
      };

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send(payload)
        .expect(201);

      expect(res.body).toHaveProperty('message', 'Użytkownik zarejestrowany.');
      const user = await User.findOne({ where: { email: 'test@example.com' } });
      expect(user).not.toBeNull();
    });

    it('❌ Powinno zwrócić błąd 400, gdy e-mail już istnieje', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'secret123',
        confirmPassword: 'secret123'
      };

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send(payload)
        .expect(400);

      expect(res.body.error).toMatch(/Użytkownik już istnieje/i);
    });

    it('❌ Powinno zwrócić błąd 400, gdy hasła nie pasują do siebie', async () => {
      const payload = {
        email: 'newuser@example.com',
        password: 'secret123',      // poprawna długość
        confirmPassword: 'secret124'  // różnią się od siebie
      };

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send(payload)
        .expect(400);

      expect(res.body.error).toMatch(/Hasła nie pasują do siebie/i);
    });
  });

  describe('POST /api/v1/auth/login', () => {
    it('✅ Powinno zalogować użytkownika i zwrócić token', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'secret123'
      };

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send(payload)
        .expect(200);

      expect(res.body).toHaveProperty('token');
    });

    it('❌ Powinno zwrócić 401, gdy podane jest nieprawidłowe hasło', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'wrongpassword'
      };

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send(payload)
        .expect(401);

      expect(res.body.error).toMatch(/Nieprawidłowe hasło/i);
    });
  });

  describe('DELETE /api/v1/auth/delete', () => {
    let token;
    beforeAll(async () => {
      // Logujemy się, by uzyskać token
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'test@example.com', password: 'secret123' });
      token = res.body.token;
    });

    it('✅ Powinno usunąć użytkownika przy ważnym tokenie', async () => {
      const res = await request(app)
        .delete('/api/v1/auth/delete')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(res.body.message).toBe('Użytkownik usunięty.');
      const user = await User.findOne({ where: { email: 'test@example.com' } });
      expect(user).toBeNull();
    });
  });

  afterAll(async () => {
    // Jeśli korzystasz z global setup/teardown, nie zamykaj połączenia tutaj.
  });
});

```

### backend/tests/contact.test.js
Last modified: 2025-03-04T16:42:38.117Z
Size: 1.63 KB

```javascript
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

```

### backend/tests/email.test.js
Last modified: 2025-03-04T16:42:38.117Z
Size: 0.66 KB

```javascript
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

```

### backend/tests/homepage.test.js
Last modified: 2025-03-04T16:42:38.117Z
Size: 1.38 KB

```javascript
const request = require('supertest');
const http = require('http');
const jwt = require('jsonwebtoken');
const app = require('../index');
const server = http.createServer(app);
const { sequelize, User } = require('../models');
const config = require('../config/env/development');

// Generujemy token dla administratora
const adminToken = jwt.sign(
  { id: 1, email: 'admin@example.com', role: 'admin' },
  config.JWT_SECRET,
  { expiresIn: '1h' }
);

describe('Homepage API', () => {
  beforeAll(async () => {
    // Resetujemy model User – czysta baza dla testów
    await User.sync({ force: true });
    // Tworzymy przykładowego admina, aby middleware requireAdmin akceptował token
    await User.create({
      email: 'admin@example.com',
      passwordHash: 'hashedpassword',
      role: 'admin'
    });
  });

  describe('POST /api/v1/admin/homepage', () => {
    it('should update homepage settings with valid data', async () => {
      const payload = {
        title: 'New Homepage Title',
        content: 'New homepage content'
      };

      const res = await request(server)
        .post('/api/v1/admin/homepage')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(payload)
        .expect(200);

      expect(res.body).toHaveProperty('message', 'Strona główna została zaktualizowana.');
    });
  });

  afterAll(async () => {
    await sequelize.close();
  });
});

```

### backend/tests/media.delete.test.js
Last modified: 2025-03-04T16:42:38.118Z
Size: 0.86 KB

```javascript
const request = require('supertest');
const { sequelize, Media } = require('../models');
const app = require('../index');

describe('📷 Test usuwania Media', () => {
  let mediaRecord;

  beforeAll(async () => {
    await sequelize.sync({ force: true });
    // Utwórz rekord Media do usunięcia
    mediaRecord = await Media.create({
      fileName: 'toDelete.jpg',
      originalName: 'original_toDelete.jpg',
      type: 'image/jpeg',
      size: 1500,
      url: '/uploads/toDelete.jpg'
    });
  });

  it('✅ Powinno usunąć plik o danym ID', async () => {
    const res = await request(app)
      .delete(`/api/v1/media/${mediaRecord.id}`)
      .expect(200);
    expect(res.body.message).toMatch(new RegExp(`Plik o ID ${mediaRecord.id} został usunięty`, 'i'));

    const deleted = await Media.findByPk(mediaRecord.id);
    expect(deleted).toBeNull();
  });

 
});

```

### backend/tests/media.test.js
Last modified: 2025-03-04T16:42:38.118Z
Size: 1.05 KB

```javascript
const request = require('supertest');
const { sequelize, Media } = require('../models');
const app = require('../index');

describe('📷 Testy Media', () => {
  beforeAll(async () => {
    // Upewnij się, że baza jest czysta; synchronizujemy model Media
    await sequelize.sync({ force: true });
    // Opcjonalnie możesz utworzyć kilka rekordów:
    await Media.bulkCreate([
      { fileName: 'image1.jpg', originalName: 'original1.jpg', type: 'image/jpeg', size: 2048, url: '/uploads/image1.jpg' },
      { fileName: 'image2.jpg', originalName: 'original2.jpg', type: 'image/jpeg', size: 1024, url: '/uploads/image2.jpg' }
    ]);
  });

  it('✅ Powinno zwrócić listę plików', async () => {
    const res = await request(app)
      .get('/api/v1/media')
      .expect(200);

    // Oczekujemy, że odpowiedź zawiera obiekt z kluczami total i files
    expect(res.body).toHaveProperty('total');
    expect(res.body).toHaveProperty('files');
    expect(Array.isArray(res.body.files)).toBe(true);
    expect(res.body.total).toBe(res.body.files.length);
  });


});

```

### backend/tests/media.upload.test.js
Last modified: 2025-03-04T16:42:38.118Z
Size: 0.80 KB

```javascript
const request = require('supertest');
const { sequelize, Media } = require('../models');
const app = require('../index');

describe('📷 Test uploadu Media (JSON payload)', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('✅ Powinno przesłać dane JSON i utworzyć rekord Media', async () => {
    const payload = {
      fileName: 'uploaded.jpg',
      originalName: 'original_uploaded.jpg',
      type: 'image/jpeg',
      size: 3000,
      url: '/uploads/uploaded.jpg'
    };

    const res = await request(app)
      .post('/api/v1/media')
      .send(payload)
      .expect(201);

    expect(res.body).toHaveProperty('message', '✅ Plik przesłany!');
    expect(res.body.file).toHaveProperty('id');
    expect(res.body.file.fileName).toBe('uploaded.jpg');
  });


});

```

### backend/tests/menu.test.js
Last modified: 2025-03-04T16:42:38.118Z
Size: 1.07 KB

```javascript
// tests/menu.test.js
const request = require('supertest');
const { sequelize, Menu } = require('../models');
const app = require('../index');

describe('🍔 Testy Menu', () => {
  beforeAll(async () => {
    // Synchronizujemy bazę, aby utworzyć tabele. Jeśli chcesz testować tylko Menu, możesz synchronizować tylko ten model:
    await sequelize.sync({ force: true });
  });

  it('✅ Powinno utworzyć rekord Menu', async () => {
    const payload = {
      title: 'Home',
      slug: 'home',
      link: '/home',
      label: 'Start'
    };

    const res = await request(app)
      .post('/api/v1/menu')
      .send(payload)
      .expect(201);

    expect(res.body).toHaveProperty('message', 'Menu utworzone');
    expect(res.body.menu).toHaveProperty('id');
    expect(res.body.menu.title).toBe(payload.title);
  });

  it('✅ Powinno zwrócić listę rekordów Menu', async () => {
    const res = await request(app)
      .get('/api/v1/menu')
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  
});

```

### backend/tests/models.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 4.01 KB

```javascript
// tests/models.test.js
const { sequelize, User, Seo, Menu, Media, Page, Post } = require('../models');

describe('🛠️ Testy modeli', () => {
  beforeAll(async () => {
    // Resetujemy bazę na potrzeby testów
    // w środowisku NODE_ENV=test łączy się do testowej bazy
    await sequelize.sync({ force: true });
  });

  // -------------------------------------------------------
  // 1. Test modelu User
  // -------------------------------------------------------
  test('✅ Model User - sprawdzamy utworzenie', async () => {
    // Tworzymy encję użytkownika z wymaganymi polami
    const user = await User.create({
      email: 'john.doe@example.com',
      passwordHash: 'hashed_password_sample'
      // np. jeśli masz w modelu pole "role" z defaultValue: 'user',
      // nie musisz go podawać
    });
    expect(user).toBeDefined();
    expect(user.id).toBeTruthy();
    expect(user.email).toBe('john.doe@example.com');
  });

  // -------------------------------------------------------
  // 2. Test modelu Seo
  // -------------------------------------------------------
  test('✅ Model Seo - sprawdzamy utworzenie', async () => {
    const seo = await Seo.create({
      pageId: 123,
      title: 'SEO Title Test',
      description: 'SEO description test',
      keywords: 'keyword1, keyword2'
    });
    expect(seo).toBeDefined();
    expect(seo.id).toBeTruthy();
    expect(seo.pageId).toBe(123);
  });

  // -------------------------------------------------------
  // 3. Test modelu Menu
  // -------------------------------------------------------
  test('✅ Model Menu - sprawdzamy utworzenie', async () => {
    // Załóżmy, że w modelu Menu są pola: title, slug, link, label itp.
    const menu = await Menu.create({
      title: 'Home Menu',
      slug: 'home-menu',
      link: '/home',
      label: 'Start'
    });
    expect(menu).toBeDefined();
    expect(menu.id).toBeTruthy();
    expect(menu.title).toBe('Home Menu');
    // ...
  });

  // -------------------------------------------------------
  // 4. Test modelu Media
  // -------------------------------------------------------
  test('✅ Model Media - sprawdzamy utworzenie', async () => {
    // Załóżmy, że Media ma: fileName, size, url, type
    const media = await Media.create({
      fileName: 'image.jpg',
      size: 12345, // np. rozmiar w bajtach
      url: 'https://example.com/image.jpg',
      type: 'image'
    });
    expect(media).toBeDefined();
    expect(media.id).toBeTruthy();
    expect(media.fileName).toBe('image.jpg');
    // ...
  });
  // -------------------------------------------------------
  // 5. Test modelu Page
  // -------------------------------------------------------
  test('✅ Model Page - sprawdzamy utworzenie', async () => {
    // Załóżmy, że w modelu Page są pola title, slug, content
    const page = await Page.create({
      title: 'Example Page',
      slug: 'example-page',
      content: 'Lorem ipsum...'
    });
    expect(page).toBeDefined();
    expect(page.id).toBeTruthy();
    expect(page.title).toBe('Example Page');
  });

  // -------------------------------------------------------
  // 6. Test modelu Post (z relacją do User)
  // -------------------------------------------------------
  test('✅ Model Post - relacja z User', async () => {
    // 1. Tworzymy użytkownika
    const user = await User.create({
      email: 'author@example.com',
      passwordHash: 'super_secret'
    });

    // 2. Tworzymy post (wymaga: title, slug, content, authorId)
    const post = await Post.create({
      title: 'Pierwszy post',
      slug: 'pierwszy-post',
      content: 'Treść posta testowego',
      authorId: user.id
    });

    // 3. Sprawdzamy klucz obcy
    expect(post.authorId).toBe(user.id);

    // 4. Dzięki relacji (index.js) mamy post.getUser()
    const relatedUser = await post.getUser();
    expect(relatedUser.email).toBe('author@example.com');
  });

  // -------------------------------------------------------
  // Koniec testów
  // -------------------------------------------------------
 
});

```

### backend/tests/page.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 2.37 KB

```javascript
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

```

### backend/tests/post.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 1.44 KB

```javascript
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

```

### backend/tests/seo.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 1.63 KB

```javascript
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

```

### backend/tests/user.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 3.05 KB

```javascript
/**
 * tests/user.test.js
 * Testy operacji na profilu użytkownika: pobieranie, aktualizacja, usuwanie.
 */
const request = require('supertest');
const { sequelize, User } = require('../models');
const app = require('../index');

describe('🔐 Testy operacji na profilu użytkownika', () => {
  let token;

  beforeAll(async () => {
    // Synchronizujemy model User
    await User.sync({ force: true });
    // Rejestrujemy użytkownika, aby mieć konto do testów
    await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'test@example.com',
        password: 'secret123',
        confirmPassword: 'secret123'
      })
      .expect(201);
    // Logujemy się, by uzyskać token
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'test@example.com', password: 'secret123' })
      .expect(200);
    token = res.body.token;
  });

  describe('GET /api/v1/user/profile', () => {
    it('✅ Powinno zwrócić dane użytkownika przy ważnym tokenie', async () => {
      const res = await request(app)
        .get('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      expect(res.body.email).toBe('test@example.com');
    });

    it('❌ Powinno zwrócić 401, gdy brak tokena', async () => {
      const res = await request(app)
        .get('/api/v1/user/profile')
        .expect(401);
      expect(res.body.error).toMatch(/token/i);
    });
  });

  describe('PATCH /api/v1/user/profile', () => {
    it('✅ Powinno zaktualizować hasło użytkownika', async () => {
      const res = await request(app)
        .patch('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          newPassword: 'newSecret999',
          confirmPassword: 'newSecret999'
        })
        .expect(200);
      expect(res.body.message).toBe('Profil zaktualizowany.');
    });

    it('❌ Powinno zwrócić 400, gdy brak confirmPassword', async () => {
      const res = await request(app)
        .patch('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          newPassword: 'xxxyyy'
        })
        .expect(400);
      // Zmieniamy oczekiwaną wiadomość na "Oba pola są wymagane"
      expect(res.body.error).toMatch(/oba pola są wymagane/i);
    });
    
  });

  describe('DELETE /api/v1/user/profile', () => {
    it('✅ Powinno usunąć konto przy ważnym tokenie', async () => {
      const res = await request(app)
        .delete('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      expect(res.body.message).toBe('Użytkownik usunięty.');
      const user = await User.findOne({ where: { email: 'test@example.com' } });
      expect(user).toBeNull();
    });

    it('❌ Powinno zwrócić 401, gdy token jest niepoprawny', async () => {
      const res = await request(app)
        .delete('/api/v1/user/profile')
        .set('Authorization', 'Bearer invalidTokenHere')
        .expect(401);
      expect(res.body.error).toMatch(/Nieprawidłowy token/i);
    });
  });

  
});

```

### frontend/.gitignore
Last modified: 2025-03-04T16:42:38.120Z
Size: 0.30 KB

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

### frontend/README.md
Last modified: 2025-03-04T16:42:38.120Z
Size: 3.28 KB

```markdown
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```

### frontend/package.json
Last modified: 2025-03-04T16:42:38.120Z
Size: 1.15 KB

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:4000",
  "dependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.4.0",
    "react-quill": "^2.0.0",
    "react-router-dom": "^7.1.5",
    "react-scripts": "5.0.1",
    "styled-components": "^6.1.15",
    "typed.js": "^2.1.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.2",
    "tailwindcss": "^3.3.3"
  }
}

```

### frontend/postcss.config.js
Last modified: 2025-03-04T16:42:38.120Z
Size: 0.11 KB

```javascript
module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  };
  
```

### frontend/public/index.html
Last modified: 2025-03-04T16:42:38.121Z
Size: 1.68 KB

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

### frontend/public/manifest.json
Last modified: 2025-03-04T16:42:38.122Z
Size: 0.48 KB

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

### frontend/public/robots.txt
Last modified: 2025-03-04T16:42:38.122Z
Size: 0.07 KB

```
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

### frontend/src/App.css
Last modified: 2025-03-04T16:42:38.122Z
Size: 0.00 KB

```css

```

### frontend/src/App.js
Last modified: 2025-03-04T16:42:38.122Z
Size: 1.42 KB

```javascript
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./admin/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./admin/Dashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Contact from "./pages/Contact";
import EditHomePage from "./admin/EditHomepage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Panel administratora */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/admin/edit-home" 
        element={
          <ProtectedRoute>
            <AdminLayout>
              <EditHomePage />
            </AdminLayout>
          </ProtectedRoute>
        } 
      />
    </Routes>
  </Router>
);

export default App;

```

### frontend/src/App.test.js
Last modified: 2025-03-04T16:42:38.123Z
Size: 0.24 KB

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

### frontend/src/admin/AdminFooter.js
Last modified: 2025-03-04T16:42:38.123Z
Size: 0.31 KB

```javascript
// src/admin/AdminFooter.js
import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="bg-white text-center py-4 border-t">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default AdminFooter;

```

### frontend/src/admin/AdminHeader.js
Last modified: 2025-03-04T16:42:38.123Z
Size: 0.52 KB

```javascript
// src/admin/AdminHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-brand-dark">
        <Link to="/admin">Admin Dashboard</Link>
      </div>
      <div>
        <button className="text-brand-dark hover:text-brand-blue transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;

```

### frontend/src/admin/AdminLayout.js
Last modified: 2025-03-04T16:42:38.123Z
Size: 0.60 KB

```javascript
// src/admin/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex flex-col flex-grow">
        <header className="bg-white shadow px-4 py-3">
          <h1 className="text-2xl font-bold">Panel Admina</h1>
        </header>
        <main className="flex-grow p-6 bg-gray-100">
          {children ? children : <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

```

### frontend/src/admin/AdminSidebar.js
Last modified: 2025-03-04T16:42:38.124Z
Size: 0.94 KB

```javascript
// src/admin/AdminSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-brand-dark text-white p-4">
      <h2 className="text-xl font-bold mb-6">Panel Admina</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink 
              to="/admin" 
              className={({ isActive }) => isActive ? "font-bold text-brand-blue" : "hover:text-gray-300"}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/edit-home" 
              className={({ isActive }) => isActive ? "font-bold text-brand-blue" : "hover:text-gray-300"}
            >
              Edytuj stronę główną
            </NavLink>
          </li>
          {/* Dodaj inne linki według potrzeb */}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

```

### frontend/src/admin/Dashboard.js
Last modified: 2025-03-04T16:42:38.124Z
Size: 0.34 KB

```javascript
// src/admin/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">This is the admin dashboard. Here you can manage your content and settings.</p>
    </div>
  );
};

export default Dashboard;

```

### frontend/src/admin/EditContent.js
Last modified: 2025-03-05T04:02:21.345Z
Size: 1.51 KB

```javascript
// EditContent.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditContent = ({ initialContent, onChange }) => {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [content, setContent] = useState(initialContent || '');

  const handleToggleMode = () => setIsHtmlMode(prev => !prev);

  const handleContentChange = (value) => {
    setContent(value);
    onChange(value);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleToggleMode}
        className="mb-2 bg-gray-200 px-3 py-1 rounded"
      >
        Przełącz tryb: {isHtmlMode ? 'HTML' : 'WYSIWYG'}
      </button>
      {isHtmlMode ? (
        <textarea
          className="w-full border p-2 rounded h-40"
          value={content}
          onChange={(e) => handleContentChange(e.target.value)}
        />
      ) : (
        <ReactQuill 
          value={content} 
          onChange={handleContentChange} 
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['link', 'image', 'video'],
              ['clean']
            ]
          }}
          formats={[
            'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'link', 'image', 'video'
          ]}
        />
      )}
    </div>
  );
};

export default EditContent;

```

### frontend/src/admin/EditHomepage.js
Last modified: 2025-03-06T16:11:35.764Z
Size: 3.79 KB

```javascript
// frontend/src/admin/EditHomepage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditHomepage = () => {
  const [homepageData, setHomepageData] = useState({
    heroTitle: '',
    heroSubtitle: '',
    heroBackground: '',
    mainContent: '',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    textColor: '#000000'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Pobieranie danych strony głównej z API
  useEffect(() => {
    axios.get('/api/v1/homepage')
      .then(response => {
        if (response.data && response.data.homepage) {
          setHomepageData(response.data.homepage);
        }
      })
      .catch(err => {
        console.error('Błąd pobierania strony głównej:', err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHomepageData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Pobranie tokena z localStorage
    const token = localStorage.getItem('token');
    console.log("Token:", token); // Debugowanie – sprawdź czy token jest prawidłowy

    if (!token) {
      setError('Brak tokena. Upewnij się, że jesteś zalogowany.');
      setLoading(false);
      return;
    }

    axios.post('/api/v1/homepage', homepageData, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then(response => {
      console.log('Strona główna została zaktualizowana:', response.data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Błąd podczas aktualizacji strony głównej:', err);
      setError('Błąd podczas aktualizacji strony głównej.');
      setLoading(false);
    });
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Edytuj stronę główną</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Tytuł sekcji hero:</label>
          <input
            type="text"
            name="heroTitle"
            value={homepageData.heroTitle}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Podtytuł sekcji hero:</label>
          <textarea
            name="heroSubtitle"
            value={homepageData.heroSubtitle}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Link do tła sekcji hero:</label>
          <input
            type="text"
            name="heroBackground"
            value={homepageData.heroBackground}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Główna treść strony:</label>
          <textarea
            name="mainContent"
            value={homepageData.mainContent}
            onChange={handleInputChange}
            className="w-full border p-2 rounded h-40"
          />
        </div>
        {/* Dodatkowe pola, np. fontFamily, fontSize, textColor, można dodać według potrzeb */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition"
          disabled={loading}
        >
          {loading ? 'Zapisywanie...' : 'Zapisz zmiany'}
        </button>
      </form>
    </div>
  );
};

export default EditHomepage;

```

### frontend/src/admin/ManageHomeSections.js
Last modified: 2025-03-06T15:40:32.382Z
Size: 2.47 KB

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageHomeSections = () => {
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({
    type: 'about',
    title: '',
    content: '',
    order: 0
  });

  const fetchSections = () => {
    axios.get('/api/v1/homepage/sections')
      .then(response => {
        setSections(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania sekcji:', error);
      });
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const handleInputChange = (e) => {
    setNewSection({ ...newSection, [e.target.name]: e.target.value });
  };

  const addSection = (e) => {
    e.preventDefault();
    axios.post('/api/v1/homepage/sections', newSection)
      .then(response => {
        fetchSections();
        setNewSection({ type: 'about', title: '', content: '', order: 0 });
      })
      .catch(error => {
        console.error('Błąd dodawania sekcji:', error);
      });
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Zarządzanie Sekcjami Strony Głównej</h2>
      <form onSubmit={addSection} className="mb-6">
        <input 
          type="text" 
          name="title" 
          placeholder="Tytuł sekcji" 
          value={newSection.title} 
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <textarea 
          name="content" 
          placeholder="Treść sekcji" 
          value={newSection.content} 
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input 
          type="number" 
          name="order" 
          placeholder="Kolejność" 
          value={newSection.order} 
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Dodaj sekcję
        </button>
      </form>
      <div>
        {sections.map(section => (
          <div key={section.id} className="border-b py-2">
            <h3 className="font-semibold">{section.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
            <p>Kolejność: {section.order}</p>
            {/* Opcjonalnie przyciski edycji/usuwania */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageHomeSections;

```

### frontend/src/api/api.js
Last modified: 2025-03-04T16:42:38.124Z
Size: 1.16 KB

```javascript
// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Upewnij się, że adres odpowiada Twojemu backendowi
});

// Przykładowe metody – rozszerzaj zgodnie z endpointami backendu
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const sendContactMessage = async (formData) => {
  const response = await api.post('/contact', formData);
  return response.data;
};

export const fetchPosts = async () => {
  const response = await api.get('/post');
  return response.data;
};

export const fetchMedia = async () => {
  const response = await api.get('/media');
  return response.data;
};

// Dodane funkcje dla strony głównej
export const fetchHomepage = async () => {
  const response = await api.get('/homepage');
  return response.data;
};

export const updateHomepage = async (data) => {
  const response = await api.post('/homepage', data);
  return response.data;
};

export default api;

```

### frontend/src/assets/images/about/img1
Last modified: 2025-03-04T16:42:38.128Z
Size: 315.51 KB

```
���� Exif  MM *         ��(ICC_PROFILE         mntrRGB XYZ             acsp                             ��     �-                                                   	desc   �   trXYZ  d   gXYZ  x   bXYZ  �   rTRC  �   (gTRC  �   (bTRC  �   (wtpt  �   cprt  �   <mluc          enUS   X    s R G B                                                                                XYZ       o�  8�  �XYZ       b�  ��  �XYZ       $�  �  ��para        ff  �  Y  �  
[        XYZ       ��     �-mluc          enUS        G o o g l e   I n c .   2 0 1 6�� C 	


 ' .)10.)-,3:J>36F7,-@WAFLNRSR2>ZaZP`JQRO�� C&&O5-5OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO�� �" ��           �� E   !1AQaq�"2���B#3R�$4b�r���C%5c�SsD&T����            �� #   !1AQ2"a��   ? �3'6E��[G)���̨ �y� Y$�J�m8������XH�p@ !H�b.���`{� �ȕ$�PvC�Y����"��|�h��CId�,1��@�����Y�_p�E�  ��`<]ɒ��(Y �8%�e�@B� H�]���
@"�D  s`!��|x,���K�	�bX}���b��wp/Ȑ,�G X&!�m��
��xp^ �C^JL�$(������ 6&���.@��
 {� $"Ů0����, Ar, �r"͉=�@�� ��K��=��\ +}�%��<���{ �� 8����r)�m�  x���k�` 0 �,��?�&rnh��p �e�8�M� �x < &�Ȁ)9`8!H xyE"a�y��#� ������0���-�Q����{k��_����N".F��N
լ �3�/$#<�_��cR�V8��s�j.�1j�/�0=[MK�=�&�������ڝj�����}�9��҈	E���>�h��0!~Ā$�Q�Z�ȋ�?��C��6,PG�E�=�d<AF<.�ڟbE���2�Q�p�4��T�H5T��n�0}�U�>���:��������OEt���SXG�<��Oa�0��r+K R7.�EM�v�&������)�uO>v��|��-:�6�+'�^EUWP��6��s����j�c5�F���}��Q�6��R}Zc��:t�ڊ�X�BN=^�q�)��!_��3���Z�~���I��Fνn���'���������S� �ʽ�g�?ק�~瞼I��r��nJ<����j� �i��mӅ'���q�5��j�fu7��L�']��G[5���{����A�[L�V�I6t�J�������Z���+�]��*�:���\��T��և]Ur�,�ϧ:�'��}��m	�e��j�]?k�����Z����?��v�s��z-*�۹����_�x;�Eq���F��:��'gq��j��T�G����D�Lpv�$S��I�w,^�ß v�܀�����j )2���c(�[���Z�B��Zsdh�����c1,����-�U�W$��k����rb�s�5˨ކ�ҭ5�?C���Z%|������jҭC��G8u��Y�<�}�:�&�N�uqjI!�N���Ň N��8'� @S3)y������7+a`
��0!W�I`	��� O&�,0�� rR �� � ��� | �vD��� 0�@b!�`f
$0(�lA��) ��B��� �� ��Q��,�N !�y���� dx����2@8\(��
�`.�	%�<�D��)rF�� ��1�=�� ���@��F !�H�d�=������
�%bx �G�� D+8��`$<�h6��w{���g� O�Y�E-ب5ܜܯ$�n@j`�`;�$<dr.�@q$`"��O~�"B�!�[@8#���ݎ�9gz���!ۼI��cM^Y�I����/#��vEn>I������n���K��'�y��xʒZ$�y�X�jR̵�-bF ��k�֥y�È�4��%���Ne�7/�`�Z�V~Ym�>��B�4��6�ʎ�E���W����^Cj��~J�KO�TH �3{�`���@9j�kD� �6K��L���_"��^J�Bi(�۱jN;����	��/$j�@���#�S6",�w������	� ���Y,���i~��w%���q`J���9*Q�v^n�v����Q��n�1�6���aJ �b�8	º���*w��	�{��pYN ���L�و�IBf�%݆��r	h�����#��e�~9����	^c� Gv�ӊQ���[�r���-�3�Y�dE�_ʹ�$O�KT�s�0-UYtą��)s� ��`*N���K�I�G���-ػ�J~#�+��J^;�)$�X;߰X������p�skW�M�<s,��$4��[��E�YJ.f�P��ep�OaR�3�;�/�՜˿b;�{��4Iv`~�4��`c�[�+����(b�^@��^nL ����l�@�!W�@��7�'7�JrO#��$�w*�����
Ǹ� � �}�2� O% \�N@�%���Y]��^��$Ix %��( �M��$"I�@HY�2#�>� >B#�dC ��$�EH�yO<��܏�E�#�y�8� �Af2 �{��PlE� 
��FP/�O�7x�u�T���8`�����t8($��2��d	~���"l d䋀)"Db�� �� �!����A$��{�p R1p �ZH>@>� �/�
��C�
���_�a��$��/�y�+ P@��,�Q�$I�@�Ky	 ^H� �D�� B@ ,�&Y@A=�#��    X�X���8����*5�,����_����_��� ța�\E�@,69A�|%�Q[�jS�r�jF������Z"�3�w���8���Vi�T}�+UЂ���j�#�y�s$[ث��� O�# �!.�)+�,a��
�� �2�J����C�5p2���ė�p�߰����؏85��8笿�g緮kie3�Z�}:�l~yM�~N��>~�O�#�rκׄ�uZ�=FNJȊ��I��LX�el6�̠:6�Jjʓ)�E+��Coթ��J���x�t�k��춚�[V�J�VWd|��j�z�p��򬗂,`��b��s���PG�i�}Z\�|���Ss�Q�QϧN�j2w������j_�KX����=��?�zU_���U� �(�=� �u��/:����J���Q�&�S2�:��B�۟�p�� ��� ���iҠ�� ��G%��?_��_ᣤ)�4��o�����[���T�O���t�b�=z�U���m-����I7^#W��<#�~Э��ӥ�����E���Z���Ce������GSK�nw�?m�����tkSeZVg�ލ=l�'�Ʀ�w��o^�K��͑�� Q�;��ҫq���K4S3#áJ�M.�_����Ԉ�Q���=s]��6�!v�ȈG*�@���Ef,D�bńC+d,�� �!+�h�;�R�j.�X�V��s�&��d�j-%�}�UL"?�e\T���.	��-2ѕ�L�r�&��tg�CS��T�ʥs8r���S'&���=8��߰ݽ*�����z��S\��U:j��c�w�-QS�G=8u��Xpf��JK&��*")P�p�@ �H� 6 p$c�����
�@�P"� W�<� &�d�Hp �D��'�xp �n�C,�� $� ��_�H`(,� bd2� dL9 ��0H( y 9'%�=��  9� &0P����;"���X	�$>${ '-�@�JDE%��?pdH@B��ddE"*RK�� \d"K��&nA;� )
����pX�N@M��`�	���FT�+Ÿ&Cl��X�N� �{�P�($�H�q�)�"��P�a��]Ռ�7
7"�a� �����/a�dM���bş܃%|<�x."�q�0i��9��qj�;j?�x87���q$j�&B���|�*ː�`�w`m(gJe;�1J��lU-�6�V��9��m_@#X��7.,H�{�t����R��R��G	9:UJ�s|���d�d�<RK�HRyENQ�l0�E�8�'�/�+8�U�Լ\�� %�%��$wa�6�����U3�i�W �߰v�*-Wv�D�C�8L�.	���ay"w �(spڒD�r
��4�~�K� T��ԑƬ������ܖ����KI9H��U�V�P����$MD7(G�*T�X�n��'~@�{�ּ�)+�B�d^I�VK� v�橆gٕ`����p&뒩V(�.WEVY�����Ng��L�TV��a*r�x����0!��K/�<@��E�R]V#Q-��:e���
�h��0�T��!F~��w&i��&� m�lrI� I� .��n�>Z��bl^0�g�#�  g��*��G7K��O Kt�]q���I}�L�ɥr'B`,#�C�rG
� Wԧ�*sO�IiM9�}�RL;�`*�T&`�5�#����x,�!��$���o���Ev N6 NC��g $�ت
��^B�+V�*P��Xf�%�g,
�V��=�Y�J����H�E�/ 9�B�"�rnXD�������d�*ț�v��9�����O�b�H\���n�$�ܷ���#}��}��r e� �0�y��d�-#8  ��#�[��FE� Bؖ � ��e @�pO�\ �Yo������"İȟ
�l�I=����ߒ�W�� Ȁ 	�ObJy��Kp��J,0��(�F!P`9�w �� �  B��,� >�� �-�� p���@ $^W#�Op$��Ù� ,\$&��.�'%��Ŋ��;�=�+@   ���lP ^@�	�E��!/# G� �R� 
�2i2��i}IY<g��5���Ԝ��w��Z!]�a���dDHb�{���I�%�_�WL��U'�]3��1�@�2�bÛ�{z�6>���t+Y�������I�#���TD��V�����=��9&@���y�K#�d���
G�2rP~I�^H��y#Ey&@����#�$�ї�\	��%F�I�p1Z]Oc���ԏ���������ο��>}n�-���7�8���5S2���TU{�"x#��g�7�r��zMS�MMI�y5�`��?Qz{w�B��̏�������)�;��˛}�+GY�J�*�J���>���ZYEN2b�_����F��)>��#k�}Zg���o�}4u�>�^N:nZ����S�
�7��� �4.z[��ߌ�� �W/U��}5���Y?U;8�����?$��l�Z��)��=ov���3z�i1�q����g���zf�ߥB���ڄ}=8T�����ЩӴ�NТ�;+��8oZ=UY�I�AV�_���V���z6PJi���ґ�u��Ò��Z�ux1	' ~3�To,�7<1>����S�Ϙ�����EK������8gz_ڤ��Lw��)��������b+H�!B�$r#���V'76�ȑ�-S&�cQ&kMR���2�J�j�ȫY�W�a�j��1^H�%��C.p9�?A�KveDb��G*Db�kܜ\ܸ�k�%��KM7&��/8g~zp�>��>�T����QU'�5^�i�C>��t�iR��ߛ�s�zɜ�QcL!`B/@�� F^A �  
ba`�Hw`6   ��� y�	�� �\��` !^� ��  2��`y(	� ܾA9 �Ȅ@e����L   $�'�<��@�y 8� ��#���6+d�	�s� 2X���"? ^�"��_ \d{9-�1!�NK�y �#ȸ�O�H<�y2���᠀@>�. ���_��x(�����^�|��q�E��K�\YH�Þ@��1�q�,�K�+��p,Hk�H�\�n@$=ʾI��2��<�(�nC^@�"a��$��e�r�0=N¤���_7<�JA��K�j�� �QZ{�m��&�hZ@aw�<>�o�/����7Kᜑ֘�r�=� Rs�~b���8�ܢ���"����X_q�*��o�2��$�E���Y���Aʥ�x3R���[81\IU��ʿ�\pN��@@i�M��BaŜ�p'*[b�7/=B�A�����	�8��+d�K�2�j己�؂�A�DR�?b^<̢�V$��WrM��RV変-�5o`^B�o�ň4�|ؐ�]��M�ҜܱhV~IOg�6hM��_H� |9ș�`�����i2T�ҲXw�@���䪤�i����udq�-�"�KM��bz�$Gn	x���(L]c䉾��w.l�P\���������5��J��m�Wf��$��u~Ľ�X$ڞ�f��d���t"\8*�0M�0�Ns�E��.�X	�[L�%��q�0�)��$���c�f�����sTv"��l�w� �c��M����B���D�%L\(K����kX�ȝJ�'+�KdL�>Ū��䒦ː�=P�O�Hw#�����ߘ#JapMO6�"��Y�H�K� ��k�u7Ć��~�
�e�/���-�P�M��oq���%�g��,�Y�TL<`+dy�B�y+@e��M��B�E�< �dO ,ܜܰUG�A` y����+��.�w Մ!��`<�B�J��X,�<R�E7�K���Dx�5��e	i &��@�I;��&�ༀ �P�F� ��o?��b<�; �h ��#|���6%��#�Ko�#���� �9D��6KA>E���r0�	�|�=�h � Y���`Ve��2_ EfY
\�x�"W5�$r�Ŋ���Hp"yh~�O�\�� `Ad �G�p pI�&m i���x܌Hܲ�ah���n��jn�0� ��� d /� _a��	�ht�� {(�,ؐVHU�� 1r�$C�}��  pR�  �(�x�. W䃑� @ ��) � `CT�RA�}U}����^���|�]�q�1p���0�r^l\�@s pBY,Z��
\6l�2T����`<ڊ�z+�Q��	��:�&��(��:�t��������E]J9ب�8ew�H4A�r�""^C����1�����> ����\���}��+��.[rј�Ǹw�Dn,a�f\��j�ҫ���>���}�E:m\���M����c����j�%�Q�N��stp���=q�K2��q&fJ����$�{�Yg Na6#� ���xA?%}0����vyMO���*n������������J�����]kL!	+0��4��G�T�����w�?���?��m�K���t���t��K���?��ϣ�ާHW�}���k'�D�� �c��m����o������ �� b��Z̍_�Tܚ��ï��l��^N����N[��_�~�_��)�x7�l89��<���m�=��N&�~�iT&�[/]�l�Ίk�\<��{dӴ�=m7�ޕ���9���Z�vO��-M7�(������o�����]����k���	LL�Ҹc���G�54��K<{��O����|�~Ks��mu*�բ�j��A�髅�*��Z��M֫���m���4ܛM�.����N]|�:��ۯQ['�	(��-%����Ǯ�מq>	�j�#}��^�3,X�s��^ł���U�T��(�3sTĢ$��%,�i���cSb)���K"�>��nErvf*�jy#��ʳ���j��QQnY�28�"9C�b��a���/!!��5�y�h�=c=Mp��`�m5����[�����-9G���:���wkP�O'��������򼟡��UR���.�u1Ձ6#�VT6,
����`'�?�ǀ,;��8  * ���9*�b~�8hV�� b�! E�1
`�% �� ��	�_r[���[E�D�0�"d�B ��,�����Ȝ����Pd(G  (��� ��h��$Bٓ� �r1  �!����9�̮�d��A� ��@T8p2E_ !�0� � N�9�	_#����@�^ �����' ��	�r0���[,� d0�1��	 0 }�0��	�G�@/,9$�"�I�����K��.E�u�^7 �e����d̲����X-�!��k��5I�RNUc%V{�*�37 5wSib�Cm/`YJ�-�|k��g4˗�B�R��#i,�w�������.ė��#�U�*>����:�S�̥s�ʟ�*����b�7����z�Y\��)N0sv���v$�`3TI1,�"��$$�UjpN8�#w�fc�eo��<��sܶJR'{XȎ��0�˷aeb�����L���X�C ����-JT�L�d�%�bӟ�X���	�:}�Kb%4La��>5�IL;��U՗�i�����̿k�,_�H�6 בx�;��J曷��ʢ9%���0�7�4��b˲ ������XS6$_6`���:o�]���58K�V�2��+W��ifE/3�����ɧi�f nl[����e5��+y��W��?��j����f��sI� �.�_�%:n�7k��U�UV,٧�Z��Ҥe�U�*���e�E���:eف�k�$M6�^�ȥF@�Zp���	��� i�4D�\�|X��X�T���"��+�S��2�~�K0ʢ���<�5�8�b�7J�JZ�v%Y��J��nX����.����'��A!�Wx	BEj��O��%�X%�x��#�+d��	. ����@P�H`/�
��� H���^@�ಋhX�R�Oq ,-���Y�x@@W�Ps v 9#(<�FK����
�DV��|��p{��a Q��X�"W+@/>e �V'#]�0B�� ��ߑ V��`�	�$�8ʰ�6!?����lL�+��� R�&f�S i�a�E�7ؐ���� *�Fl��^yrP���$�G��<� M��3�@&VI�qrp09�h)"�r�$*� ݉/��0����@�"�}��ʸ$���8�#��< � p,$ #�� )��!7�FGU�������|� Y�d\ I/�
����,�����(Ȋ���L�%��l2  \] �d�J  $H �0 @   0G-�J��4�A�=U^{�*ܳ����>M�]��q����Y69r� !����r��X*��. �ŐN��Py�)i�ՙ+�Up<�E�+���j�G��j���Q������JG�隤��Ҫh����P��#]� �p�b�#5p�dGp���X��@�1\�-����!�p� �K�F�,Ȼ����G�F09UO�ρ�sSG諏�R�~{x�kg_���� V�ly�jm�l��T��Uf"MY�~
�\���Ij��p��<�AG�����:��V�������u��WЩ�iB<�����d��ɣ*椢'x%h��į,�[V���P|��]H���'>�]9tҺG��5S�}��i� ���oB���.a��Ŵuz}:��O@� ���� ����6��� �R�����©�Y�G�����,�zz��
95��gӟ��>�� ~�Y���V��Ҿ�f�Ǔ�^�o��R���� )�yl���RSc�����_ѩ'��|z�Ͻ�e�W�zc�]� j������Q+T���t���s�_�uu��UF�4�SQT�����ЇAѾ�v��&m����댡+ذ�x"�p_{�-`*rO�$͑F��
X�/&�Ŋ��j�Ek�4��)�Y�����K"����
�=��MM�A�e�y"�Y<����M�6bH� x�2E�(.�r"y��jNuS���T�9�ϮY����G����UtT�'�jnZ+tT�����/�QTҞM�#�w��?c�J��x�f4QB��K�
IHȜ�@�  �$H � q����	� �H����@�@X7Z��
�G�$ 0�Ñ�2R��� 
N�  )����0��!rD!| &�� ��N  � ��G� ���$ ��|��G�݅سhD�D� උ���B�=��b) H�`"(! N�h ,08$�
8 ��0� bI R,,G���i��;���� ����aw�� ���,K �y�&ݒ+�J/$��D~��x	K4� �G��b�O`�{2̨ �T�#�j�U?t���r�����,HO	������q��S/�3k���X�w&F@rHM�6)}���V�<`_��%"c�o�\%5)Ŋ����Ke�{�*�\ewi͐	o$S,�Q�#N&2\�720P�9�l�����vf���ڔ,���%�����"\�_��rIS!�4�w��8�r�s� �b V�%9v���*v���+��m�$x�~ ���T��꽀Jv�aY䯆e$��[����ɬ�$Z�	.C~�!���g�Z�k�y�*�� �y�܅Tq�	����^��W,<ى�Qrw]6�J�<[�(�ws�Bv���rj�#>2[7)〥�YT5&e��:���"�u~	���f�F�oҲX�K�༱0��,O!9>�D�P����`R�k��V@&\!�|�v%-4�p���.�����0�&� ��P�H�&9~ Sd� ��i�O�䲱 ��:rfZm9�jb/po{�pۉlҙ�Da��O�2Ei@)�K��C�y	� ���[�&N���f��@�`T��@)Dx*�'�� ��*M]�@��E�`8bU�ˈyE!o���1> ����+��@T�̈E��DO�_6ؒd'qn
���;��=�x/ 
�ĩ3�@�r��d�$�`X�X���X#e�� ��B���D�56�F$� �NJ�n�V�䶉@D*p��j@�*���y�
��� ��Đf��� �R ^P�Dv�
�$^	�BW�Kǐ4����d� d��\r����( �@p~�, ��#��	� r p\�M��`�a~ �����[r@{� S-���`��J�$�G &�"dI'����� ` � )���#I����\��@�� ��	( B� <����C��Ȁ8 ^H rh� 6��A�G��@� 
@����^HP F�/7/$W^USMύ��}QM�X9w����Hsl� {�~�@0��Y ^D,��`�#(��!��XM�pե����֦��5��IW���l����Q�JRg���}:ϭ���J�Nu��W�N���@�؏ Nn h+1r���>�Q	۸�2�j��(Բ<��8d���Z	 e��G�Dw�:f��~w�_��+��m��Gc��:��:��}�>]X�9��+N,rR��5Wn�4�F^<��0��*�/�lr,݀��
�iM��]����TI�U}�%`��NK���ӒUl��j���_�;kֽϬ���t�I�ѩ*����zt� 2~����S�|$� ����O��� ��� ���[�9�8=�� ���HG�ҾV��Tɩ�J>~�-�J��=��s��d�[�'�?ş����D��I��8�g���%X<z�u8=�J<U/��7��u��'��4�޻����_�k��-���T��O/7Og�5�����զ�S���� �37?a������sC�~>i
r�Z?�{s6��)�Ҥy:�z�)�Y�{��U�`��p��<����*@JpU<��D^FXy�R�Ȥ6i(�*DV�
��c�Rj,U�fT�%m���JդF7+�9#l��2��g dw*�2�E�#!�D����@ؾ�أ&Z�.Y�eG*�y1���U^:r���zo���;���W��Q��������ZZ��3��Nr�\ʳ)��n�O�OI��\�
�ʔ    ��0)@�d�H�����)b�
�����&D�P�7b<��T���	 ���9� �\rB�a  
�$( ��FP�  7����@�
�  � ��`��d��r���� ���'>@��L`/�h /���" 0�X ��G�%��B���G��@T<�	7� /	���	�-��x�FVFD$�a� �\0��� ����(���F�2 L� 4��	���"� ��ܻd��$AQf�0V�'�8�IC	�q�0�lb�����%p'73U��s�N\ʫJ9Tӎ�J� 4���p$s$|�^-��Xo��!����VPN�W`"ɆӸH:�U�%7+� g�X`8I���U剔.UF_�P��'��G�-�%y��	�,;�+EV�$k��4�tc.e�m�-�vR�D�"%(��������S$|GcN�2�Z���i�Rq0P��"�X�CYr�NT,���h����\Ao 9����JW�P{5}�Y�S �n�D��P$�f�y�*r�����!�5��J��Lߐ^[#M�e��Nr�p��I�/|���N`���S�DV�6�5LFMJ�RN��	�2��[a|�ia��	_(̦YI]r$�C�C�P��m��?~��	�v �$�cෳ�.�^@u	�x
^Qx���ʢ�qȫ7*P�	�,-0�����+�!VX�k��8��	
e�d�����̬�Yf���
ݼ� �
������8�e�SN 'yJdaN��/W	L�0�k<�*�!D *J,��1O��6-��ǃT��$�$�;��*�2,E%k�VJPS
_�_� 8�d�l�O��otU��f%	��@��$�p�X�p#�� 	�r�@�D���\"E�lp	� ���^J��Wh ^�_l�H.D䷘�|b�,ā}�� �� � nE��Y�k�����[/ N
�b ,�'��J* n��Ĉ	�+ ���L�6�?��, m0�� H {=��D�
x{ �Y�e"�^E��?�+�+�
X��\�$��$_�q ��	 W��.�`ܒP��/	a 
@�+{��-�@a	������~�Qň�X f���X���`ds+7 Q�F�y5ȑ7�	P  ��k��F�H# ���k�j� ��/ p �<�  #�'V�,�,\�J���Z@�376[���)0 8+!a� {�`�J� �e  `�{��	)}��x�< �l �B�p� E����H )r2���y2P�����������>�Ͽ�^?I+��ʹ�
��	a���U9��,�
�*"�J�� r���~÷ U��:�����3�Ԡ�PF�騯��,����UEN�Y�qM]5'�,��Ӛe�����zvgf��/,��|_�H+�T�<6@�[r
�1�� ��!��|�.&�'�%N�5���9�����j5���q�=�����USG_���� .�铃�s�w�})�f������8,�Pq؎�' 0����n�`���3.MKlE4��R�>�t��o����&��y�*|�]�hj�,Ʀlͧ*�v� �A���>F���O'تԜ��t��r��/Ο�G�y=�W�S�W�
?���=��)uzk_��I��� HP�G�'����h#��.��f�6oR�n�&5� |�Úe��--���sjO>�� �Q�?ş��h��k���џ��}�`T^��MV�{�CMg���7�=~0�/��7�](��U^��r����iu7KP����t��"���z�M�UD�nu��_zoU+��d����~Q� �[�r�;e����S���.�_�\�H�p�>�Zf��jx��"�ʖB����{��̄I��,�3K�H�� %�y"�W��%+��*��`�&u�(1W���ݎm��F�����vF� �d�Qk�r_�3��ܑ���dp_ NJܩ'k�g�ׁ�e��a�h�ч��jVls�3U�N�$�P����=r��w����c��R�Ӕ��OK�}_N�t��ݞ<��Ǯ_}��iU֎�trDY��
)I��s���rDPPl �%�B 
�.@���   �e� �H��	�*# 
  ���� #��!H@  =��$
B�FA2��B�&P�p$srr�'#��`�� �Y���� � ��>@�(r@(!n��x��"e"�`��&,�!�20'�=�� ,��C�W� v 2�2d{��p� $��y k�6��$y,�/�,v'���� [�-�$�%eA����	��P��
��flA��@.���z�rtn��+�ʬ�9�L�Y�cÀ�wɘ�r��� D��6-��� �&�y���^rb�&$JV9쀍���W/�� f�����!��T���{�r�2��_wd�(ݥ~��~�؂qr'r�{�6�D�9+R����)T�1�+I�,C`D�~'h#��v��?���J��W�����EQB0/A� ����mR�������8JD0��e� s+%�`f�O��)�J�+�"}��_�k�	f C�d%7$��%Ӱ�؎,��Ř� v�P�!�q�k��U���2��ƚ��.��)R��lU�r�9NfĎJ��(� f��*�Y� `��V����?
�,�Ò�l_ē-� T�.Ĕ݋����.T�؊���DUe,�e�|��H�+�&�yɪ�+i�o�6���S� ��B��I��M;IR�?�IX�*
������L�`S�lfK��T�"��2�Tۀ/R�x��O(�GU�8m_��R��AW{�n�6����vEP��r[.�����~��>m����ӌ")E�ے/�ܡ����L�,���{"W��M�&W�� ��<�(�P����b����A�\,�"��Orsa�9l�<��ObJ�"#�n!�X�9/�,� D�".���J#E�{
��1�E!�|	"��`%�(�	v���<�JP4��$A`dp��p �2���"� �,".C`X��D~�8EI����$��U�^@a�/ Wɒ��.���� X���!2�2����J&XeV�X��ŉp+ȷ� ,�Ev,������"*��2/"K�����
��#�%`RA�K�@
`BN �V��'6q��A��L���	/�+E� @�� ?�G� Pȃ� 8 �W�$�H�� �� � � �D�O �E��؀ � xP!I���#�f�`xc{�=�� c��@����  d	�� ��L��D��� xȕ���y�G���JM�{�?ɓ���_M+�Mt���2OcuJ�O''C%�!m�$�D��RI��# 
�h��T��9'(�+�]�5�&��eHQ��d�E�#:�e#��=�6<��&V�H�G�,B��W��Y��i�f|F������#E�H/�A�e���X��YH�@�>��{�C74Pc<��Y'�
#���e��T������ P��Jy?C9���Q�+��:��u������$��Ԝ�k��?j��1R���9�Gm���j]E+"�ǂ�
�GW�Ԧ�_V�-�#�:��Z�,��^_.�:�7G'���U������}�,��c�9pO�IB�ee��S�:�����N����`�_'QԪ�W.��+ı���T���<��\�v3^`�U�">�������ϫZ�ls��ӏ��p�e��K'�IMkܐ��z�v��K���KT�?������?��� @ߐ���'.:��NڙgL\�øk��d�yD��MzrM��K{K�[�ԟo��� ���I��Mt�<U�L�x5)���=��-��������O�L�_��է}�N�����8G��/L��U~�z�y�{� k}M������K�e5�۝C�� �*�m:5(q�=I~��K�ܴ������:C�rۿ��t���u��s�s�B,����+�?�K��(�>ųU�APFC��,5,���BD�4EEt�%�+�E�X�ȣ���ĩX�&u\R��S�a�m��e��E�/$_����%~P�#�R4�@L8'�Q(j ͤ;Hc���f6Ӄ.K �W6��n\f��F���Щf�~k�Q�=7w)QUW�Z��H�~��ӭ{ٟ��n֥
���w�8u�>�ax�   �(a��' � 57A�	�b� "� 	�P�X ��"$I��0����d�]�\� < �  � �����A� �  H�2�� ��0!P� ��pGp�I�x"� V@ �$�$x 
Œ V��|�G���ظܬ�2 E��E�]�`$��Kp!f�CWP� �9 ��r0�r ��%� 9�G�VD�(���
02  �0P~��)���e��%�!",ه��J�_�[�B�U��H�a��� �H��9;A�Q���Z� �[��s��7R������b�Np��7��A=���0i 5J��j�x��fɤʺo$vY:Ի`��e�b����G�,��^	xŀ'�yN�@D��'�fϹ���w|g!� �A�!��р"�K�6&!:�s�7����0�^�U�Q%k�oa)�[�G$D���n
��_#��S}P��p�O<%!�9 ��kH_�d�k]�c/�*S/��}��>�P�D�4��������@g�����W���������J]�`DU,���#�2�g Jo2T�\H�c7��&l�X�0��"��+�m;d�qvN!�R�P�%܉��.m�*}�I��^�p���!�%��9�p+R�	��o�'��>�,��	�gv�B��*�e�S�+�����"M�J�X�'�>ҝ�jn\K�`������B,�b '��n�0��3U�ԩ�$�7�4�s����wk �sy*����*�_��nfMZ����2�/�=Y#}-a�)�Mc� G�Y���V�IKS�	���#�H�P��+2�U�����ܑ˗�Cj\6���İ�R2^`	��!�&J�ha��Ia@�0��.DH�W�fS��fo`P$\�@�PFi E�e��"/�!�A�=� ��X1��$���O#�r�B���$�� B��E�,0F�c�3�)�| �%����,� >JG�?���]�� �	%"H\HAr�Xrg�7*�@D�,\��[���r�G�&�,�7.I�WV��#r?��Uٙ~�"Iʡ�nv
�w�π���9)�%�Y@ ��� L	��r���r�c�"m�^�I�e�vP ��q "�����7c7��f�v�+��	 P�.�0�&İ2����1�ơ �I!��R\��x�$O�	���	�R� q���X� � ��G��
B���� 
��~ 9�A��a0�9�2$M�6�א  @sr�8(A9]���Or��DB��@�?�� �T�#򫢚�Z���_�)���~?}MKQC���н��r��/��vggc�N��K�,{�T��<�n xA~�n.\�<H	�q�/�8�'aȸw��σ:�ʔ^`Һ��j�A2uա�c�W��������s�#ϱ*�֕]t�'F�xvZ�_k�{�X1f4ʒ�6Z����.H 0 	x�; ��[ A�Q�.V,@x�˷��N����
O���S��F�s������]ﱍ:��u�WJ�R��ƕ
^Ody��Ek�%���i褬�O��W�����NL��.��mK�Um���U�}�+SqM58��nv���I,+O&U�=9�jj��,x}_MQ�
0}K��-mWJW���3���L�j�5��=]���
,K�{���[g����v���m���}tR��{Q��*�Bjp9**%e%X�v����W��>N���}Z�"9����h�i=zUEi>�G'�K��I
�?����(�� �����k��������O_�+�_�����K���AֻO��U��WR����/Rd�������+��eB̘�}7+�nhRW�1�ۦ�:`�W�*����cg�,��븮�\3�㔮��~��I�U-�#��k��fpՏW/7O������_N��ӟ̳�~A�����\��[HU��Ne����)��m��^N�y8�o��珯׳��?��pW�aRK�P�"��%Ab�(4�$T��U�Tǐ��E*�Q1�Hs7.<0X�B�͌j�X�+�
��	��ra�e�x#f��$�b�G#�JNJ�h)�e�x/#���2偒\ӵ�t�T��,ӻ2�L9|��53�q��*�hT��5������ij&��؏w���V�qN�
��zg����oJ�wt~�CV�JI��.�u1�1䬈H��fQ@�ᑖJ!Y 
@��{����[�*�A͈. O�M�V @L!_�0QA=������r�@VW�  8&@ B�P(���X�d�\I�W��`N
D�Bp e# G�� �d 8�H M�v,9��
�M��c 0I�$�"�>Gd���  ����$��	 �&B
8�e�~��;��22��-�\@�Tp_!Q�C����v�$�)'�0K���F\Ob?,Չ+�,����6D�!��x��62����rHX@��O��r���:��5��瓛��;�E��Z������]*P��O|�R�n�[/r�i���J���O,��i.�k+�ç�(��Mţ�Y���7�5'7���ß���J�@�vv5��r/UF�\��- *	��\�D�L�̅3��C�V���'�ف<�`��JO !�%Y/R|����H�sp�a��q��\�� G����5ݕ`��H���\���_��!��M�	���"Л��Z$LA J̒�1��6��#��D(�;�/���)��Ŀb�؊���|�Gk�����eG IM]�--{H�,�	��[�3F��' ^sTI!{��.�BRG3�Y@w2J�L3�w�;�ݧ6��7�'ۀ50��E���#���ŋL���!1M�PŬGo����(͌��Z�E�M�����W�#5����5	;��sav�"�Uї��k;�u;Z��Gor���{�ڒ��[Md	*��8�
�3hh�8���B*�!$���4��c-��.��;v1|s
	-+���Vᄾ�' Y͙b"�a�GU���^��!o����~�rc��(Oo��pܩ��H }�c Y�
��$��<����H_ I�`W���C������`'��`.܋��`�PX#����!b@�NŘ�.�$��`�� #�H� =�W+�����nIp�,�&]�d;yR��H["�>@�ቸ�#�#��e"EJ��R?܊�0�,������6�"*r@,#�K��"���|�./�8�%A9)@,���,\<Hp���8�)	ܩ�<�FnR����^�rQ )�V+�#v ~B$O ' Y"�X� . H�	�{2;+�����	/W��r���P$Z*@"!�+ء`x 9�!� �&�'�ŎH�Z`D �7  Y(!Ȑ�"���y*�� ��x X#�H�bJ)2  �/��K��{�0 e�p ��Q��~@�  � &S� -❳?1��Z������w��{ګ�ժ	V	%��O�������*�V�Y���u��]�p��hJKn�-��9�#�ȎU�����t� U/!َ7��ya�,�{p�� E5���}
�i��J��..}JthZwFo����Ԝd�o����}� �BXGM�MN�Z*O}=��u����*L��Utб�U�����93�H*C��c$�+��/b���Rd�ς5?B[�^F �"�P�K�u;<��� �.���Oп��u�9:|�w����d�J��U$�y1Sꩾdy�*�K���;}n�!�5ܴ�WCȳI_cI�uN_�ێ�Mu���tn�K��o�/O&g%��h��B�jД+%��={Z�m^�OK��v<�[���몫$y7z�k�K�r3�V��h�pԲ��l�4mz�c���ժO�MM�颛(>N��jdEb82I��T[��W	X�$��G�Ԏ�>V�%�}]_ʚ����?�z_��i�<'���i~zD+�>�mޓ� ��z��?�y}۪*����O�A��}��㫈;��=�6�
<z�u(�-(�%?Eh*hJ����[�����UUqfv�����i�1����ON����:����_ס�#�k���r�|�kWT������o��-�mM�>�Wv>���G���MU.�)+��/O�iR��*�I�Y��*�����_�U���U覟T4�h�~R�U��ß��گ�F����5�[��^�E�=�4AH¸���DR
�O��X����(%kAo���"*��M��J��VC�
%ɝH��jfu1�����&�D�&Za�4�QM
2�d8w��!Q> i�� ���<���d��>�BR�G����qD2��fg&�F�a�*Sso&j��Ӟ��2�4���;w�����1Ė��-��=G�4�UҚvf�����V�Oٳ������89�$R y!@ 81��2Rp0 B+2	ERb�TNK�0 ���1�H�pP 䬀R<�`Z�� #�� d��H J�� @P o�' Pp�> ��@!Hx& �E�% �/, �@ ��	�c.��P�!P�j�=��/�   � rB��%�(�<���X�F	��=�����
L�iH�=��������$&&�SܢH� _r?0�� �Bw+��(������A�/g�	D��Q�c��ԥ�f1 r�M88ָG��k#�i5�)w���@��"�`�Y�R��!/X�M/p3�s�FQ&�~�,������:���M�`Fe�ʥi�ݱ'v�#R���(�R0��f̰��!� KI�P���X��t��Z���%8�2����e@�I-��x�
�Cc\��e��"!�|(%�!�J��r��rO��Kwy�%J���g"��,4�Wi`7G�\��w	9� \X+���D��Z��'$��s Y���p�+p'��_|,��S�"Q�~d�Z+k��^}� �/$JU�{�,�*N4��N����R�ݛ�8Pi�L�?A��@;52W������~�Ld�yL7<	�`#i�h��L�� �d��2P��I��g�J,�,厥�@���ZJ�[s�M�� �)V��:v�Vv"�K�"�u�)m��e��^���P�DU.E-{�L7�kȋK%Q���Se�V���n替ĦW��D��r�4Ny.iʐ%1��b�DJq�b�J�~@J��ZY�Y
�QI�e X�L��W������|�&ԳMv`*��Y��2�ӦXI)��?/��1f蹸v�^>�"S�\`�HY/ F��Y@d�B;@� ?��U0JA슥���� D -א��'� � �	�� @* [�V��� ";H�d{@1p��%��p���d��	�aP��@R{���##�� b� $�	 �1�p�$��ʂ#��s$_�<�<�@���2p�	"E�Ȑ�f���`U��$L��dM���Qr�x, �&K, w��B�@.NJ��h�� �f� �FX	�n�Ty�Ђ  � �� r���h"d/  , � 2����G�  p"@	@r,.��� ,@ N� ���� NC��&K �p+��2=���  �0 [�C9A� �A���p$ ��Q|!%E�@H ��E��@rDcq�MG�7*�Z��&�� ���q���ۧtSM�RI{�f<�B�vp'��w��qb �`��B�Deą�]y������|	AQ2�9����`�� t�� ��S^��;/o�}����?�c�y>�w|k�a&�E�#U��J�v���u]����].d������İ�"\iW�^ �ǹ��T�H�?ƲHG0e�d�be��Dd҂4#��z��m��Q���ͺ�Z�x�|ܩf��uht��!4}OP�� �)D:�*��G�����r��9�x;�'*�$�`ܮx�v:QD��˞���0ʎ������r��(˞��i�R�Fԩ`}='�������s�i�iѶ��7V���Xc�$�^ �w*$rJ��b��z6_��j~S���G��_d���u���I���u��<*���K����/�E�=^�� ���y=#�֥����X�v�!+�����՘=֟sϪ�X�x��iD�ǧS;��sZ֦�=~���SY�U=4����m~��zh��i$g��"����[����g��� ��&��g�ǝ6ڃ��Z�M����.��~����z��^�\�����UՅ?��*�����[����j�Ҫn)����V����������0s�[MN`��������K�`����C�#�I�Q5%j�+�El�R_�,�%�EI�"���
勐NM6��I�R%���pA��N�+��8�d�H�2�c*˹�fJ'�W�@��VɓL��ʈW��`�1��`BL���G�������L5�˟��h�2BNG��^.@������&��Tu��5˨ƞ�ӭC>��x�(J�̏�%����V�i�tw����Ӕ�/<�=_�����Ύ5C$�IB�%   B� @
H.# � b +� 8 o����, �l�G-!V�~�Ce�ŀ	� ��� 8 rR4 ,D o�Td d�G��@5q��=�"f�c������ ��+V K��@૱
 ��
 G 0$�A� > x�� ���x*� L���� ��;	 ��}� �$ �!��*&E�@T�2�  l�[�X����AB�݀�xe��$؅�.8(q�>�2�_s��Qc��Nz��I-���-*�B��, ���&�p��p�8���,�|�f�ڼ��@'kd�Ŀԗ$�����U6	ɮ �ъ���_���#�ŭ$���k!>I�aVR�F@�8�R%���r<p���@Hsu���^��	�Y縥,���@����B����~�1fDT�bCj�!�p�Z��%mr"�`˱^ma�{�4�Q2Wx����;d�k�B���k���`���_.�G3�	��
�e+��ژ���� Q�	K�N�X��!���/�
���(���y�
�!"JvE����t�i���XK�(W�ZXA�A����g�"�}Œ�
�/�Jy#��&��X�2�ݒ�O!/����,�� C��(DI�1�7 9�T�pe۾nT�@9ꁘsq~]������J��5�e���+���$���$S9�W����T�J�� ;U�waX:]/ Bk��T��e�p��5�a��n�aԛ�2���H��~�UK��� eu;~��*a\��|��� ~[�4��2fe��R�X�TۄL�4%KR�҈��!���B����2?�ŮO� Gwa|"�$Ð ���]�O#��ڃ<��N��M�}®2쇹
�� +���i����9'��J�s H�P槈'!;���K#�%d�B�^��d�qؓ��!)ej2�+M��y Wl> �H��y(D���N@��d�&�}��� �� �̠�O�. <� D[2^�
�;) �;�D\.@�Kŀ�`�$���@��� ñrH�%�L	�P�Y� �Op�p_p@x�C� ��O�=��|��^���@���H-� pG>�8�G� 9' �@ 
���� M���@A
��H�`? 0V� ��$X �#,�@�E{���1" Ce  �<` @���(�q!�8)&� �L D,��$E
����(��G6 L�6/� '`��NJ��� �a�
B؏!MO�߱���� ���N�^�n������ ���#�X9:��ZI�q� �UdG=�Q�>G� a@/����!Y�;+�x�Y�NJ��	w2�P���'[ZM�j���薏���u���� ��1Ҽ5Y���%܏8 Ƥ��vSNU�鱾IV=�w"IpV�F�i��+Y K��!"�����n�� �L���\��H�� 0�p_{�2��+.�s@��v��7TK>v�é����R��t]�X�>�)���e��|}�'�v3V�1�t��<���]���|X�Ѧ83V�1d_�O�Ǵw���[wJ�~���9ճO��-f���[z�;�ޛO�j�Q�<z�Jq��|����lt���q�t88�M��.�c�Cn��C��ӥn������ʪs��;I��Բ���}?}�~�iS��QW�V��z�T�K6�.G�GQ*���J]j�Mm+t�ꦤՄ�=?�z]ji�wI�Ե)����?��?P����x;�z��nt�:�+f�k[�D����֩t��N�Z��3�����pv��������OOGAQ���-�z7N�6^�]u�[�8�����Q��x��o�M2��]ņ|����K������7v�7�����i�c�������|,9�{��*����z�y�{�U��-}:�Mޤ��ȶ��q'�G_Gl��ܿ���g�Z���9�}]��6:�9mi_MFٮO�o?�j,B�d�G�o�{�ُ���Vt�$��Q�ɮ*��r^m���E��C����`XA�L����Ƣ�¸4f/&ٌ;�hm�dӆ��^0PV�l_��2T8Ē`� ����P^	R�3q7/pe̶i��Y,Fg�ς��d�2�%@�9��$����5�N�����5u�{�)-4�������J�]X�ܵY���z=N���}&|�F_�Դ}&�w��~��H��F��% � KH�# Hh��r��Â�� L� xd`    8 ��|*Ix  � f�`�� a�0(H!`�=� ��#$ld �-���0�� r �Y&P�`_�x?!b�(� NADX�s�%� 0�����X���R{�� 5q�	��G!) M�?�HeV$x�H�"���3a!� VZH��Z�	p'�X���b@rG!.X�%�qve`���
�$r@�P��;D��<\Eİ2ݎu�^5���"�(��S ���E��?� ��I��V,aw,�+ �%x$łs�w�Z�%E�f&R2Y�F�M��0I/ث?p��̶ұݤ�uR�%�RL�i�s.�n0M�M�$wV�p��R�_m�c�#���	�,�Z�Ћ�+��+`���j�=ȭi��#�t� V��]���NGxYnX���3���Cʹ��[�D���쒹�!6����%L!�O��5ps����E��	�g�a1~��rKY�m;�[�-J3�
�*��L_�	���+}�J�I� %�rjT(��b�k�3�7�V�~ĴbeL��nR&��'*��*Tr�I|+����f �j�c�S{}�n{c�����cO��!�g�	�.ě�
�^�%M�H�&WO)�1�	,\�I�y��r�p�0��S54���9�m0���0j}�U��)�˫� u7	w���p�tn��t��b{��&lk�����*_�.]���,M��'
@��-X�&ՙe˾E)���	Gb4۔��+M��]�a5��Sop$��&�M�D�'uu5L>@��	�"�����p$��V݄	�x�T��|�p��䭾�]�!�?�r�DB ,�()E^2�@rd�����V8�<��D��Ip/�tW&T�.Y=���@Ib�%��7/J�"eH����' g�7������@�E� RdD �%bIe��� ��`ݢA{���.8f_%�,Ihd�@� M�٘�T�c��ܨ5 E�O�Ňp�؎�^@`���� C��I� k�g�$�%p/>�^�/�'%y%Ǹ�	!`�{���%�2�{� ˒��,M�&Y�����!d�F �@Z 9� � B�@$`�6 ���� #� &�	 ^H�H. �l�e ���P�(@��@d�@P��N �` I!�^D�I����$�$��`
 �� ��!HP��!d '%�#	\Xp�g�k�v~�������_���Ӈ���4��uM/���^�j���T���Ѥ�ԩ���+P���q%t�&�eD�hP��༗9�ܾI�d�b`s`�%��U�hꛁ�SqE�=U_>ǃ�W��tR�v��6�ꔰk��>����$$�R3ɖ��ƥ/��ua�Oɧ�S�}J� �^�:W��5X��]�U�	R�\��Rqw8%j�OI�Z���X��[Ut���[�v8u�I��W��*ԛ<�du k�[F�n�p�\���.�/ULd}L�V�V	�B�Ez��:�I��5�z��Z��V��7<�ץ�(�}C�>Bˆ1u���e�sqܟ2S[�������t�78F[���A:ed��˺�A���@�NT�ut�^�.�3N-���?v,{�
m�*Ѧ��zyC����U៩{Z*nR~=��?C�?&F//��U�A��*}��C����N]����<�4:�KG�V��P���_訇�����O�>R��jQTڐ��.��?M��$�i�ѿ��u��K��pv�N��Y��\%ct�}ݖ|��u��]�5�>��������Вq��:����vq'�sR�Aа���R�o���Q��N;��g���SK�'-M�:�L���_��;lꪍU��q�]ᴪ��_�U�X��
����'x��Хhi*S�F��Px���+������Ө����\8g��*�k�;����sO�G�?WN��j\3�ӥR�Wҷ4lu���SK�}����y}��j��6���OBr苶~)��\�_�o=;w�}�SW�b̽ڌIoQ9澎�%�Kl��:mQJ]��Kٞ.�^��謻���j%���W���Ո9}T�-jR���M�pZ�����T�֪�Y'2L]tHՎKUwF��jlL]t�*G?��h-e<th�s���
�/�1u�5Ʌ�����M�5�L�,\=Jyg*�wc*ʕrs����,��s�g�]i�2î=��&�\5�#}��QrJบ1.'�4��e���p�D��[S`<��7(��	�I/�Pd��gfŀܹ#�+W�ɎM"0"T�J���J"��W�׹���O��g�w*��Ϸ�e��d)a���^�� N�E����R���<���S��e����� ��K����x�T ^A@H!}��� p�dЂL��
�r8
.���� /�^${ � 
A6	���]�#Cب0!}�` �� )8) H `{�$�"<����2PB(� @ ����ܡ� 	%��@�@���*$�yA �` p/�� ����� ���*��%�� 2�{��Q�=�?s%��rw� Rr0=�;2<�#�	('NpO d�/$��Y6f,��/:Ε8��]R�&嘹ɤ�r�}�!(�J��q`�x,|� ����)�����D� �(ɇ�t�����!c?�[�rH��@V�fְt�:��`���T��9b�~��&jPl�rX�	� ���e�I.n_�s䮙^�m����s_�s.�#��*s*=�3��E��8��mF���C��"?�!-��vcض��9�)r�� 6�R�%�?x@"�(d]R�>@5��(;(hG�}^�Z��?P2����~�VP9����3~@�)�D�%��e�7{��;��ICp�S �p��-3%Wr���5`����@e�+�,���1 e��n9-J]������W2�Q�K*%9�I����q/��$sSMɗ��\*��B�Gw�U��%X�׀"I;��ͥL<
TZ�+�CAc2�h�� �x��U��Ϙhi�nä.��qun@�Fȟ��x�@�V#m+1[��wk8N�����h�������J��À/�u/&o/��VY+��7���WM2�$Yh��� Y$��l����8�_��Q�2��y+Vi�D�$(X�݀.,0"pȘ�D`.H�ʙp,���a2 %\ �y|� ����	�ɜ��7�@��ā��V؎�h���H"����;�)@,��k����#/�,��/���#� \\5����pU�0,�#�c���0ŀe���O��.�c�sp'�x0� /��/"o�(�#�m�e�57$�R�,�C,qdU�\N@�>E��k�E�,��Kn0Hsq=�	�WDH��
�?�&���	�\�3�������	r��ܤH+���A,$D�� e @�*����c(�L�SD�@r##��A�s,[�U�  (`/�H�y�B`@� <�R��#�` ��"(P   ��$@!�	$U�� 0��H�A,8�
�H ��(	  �,� ��z��~���}�sFz�k�גns�����tH�L>�'W�Yզ�JV��~LoWUT%vԍ9MPݎ�}�'��5!�а�� Ok�j� /�!P(���e�b\���.4���-8&��P� �U[��J��ɭ�u�UGMڦ�������N��3���o�L5lƛ�n�q��/�O��u?��>Kiԏ�U���c�xC�*��܏���t�o���W��ξ�Wp�M���ԧ�Q�O�=��j�򏞯n���ls�&�t�WFY*|��Euv93]MҔS�T�b�\��$GU��H�׫�:�'�a0�>��&&�g�����u#��3�[i)duv9���� i�����b@�ùz�b��]O!T�#3 ja�ݕT�Ny�*v�U>��GT3/������v�:����Gܪҩ���R�<����9̼٩}]RN��Nr�j�� !뵌�83�G����~y^�nw]�blWP��]�S9�h$�:�P������W��>�$��ξL�K9�	�:��%U���2���瑆����&̉La��\����t:����,u�'ܖI��u�5�j��S#uZ�9l}g{�g�^�ɵ��4�_�jSp�-#]� ��2��L�8r&��z>�Y���7,�|��Z�2�s���v�0�]j�qv��\��؜H�z��U��w8p$d=Wo��R�2HȾ���d�l�ۂ&<��vU����7G+���q��]~�Ꮹ��<����U��r��rr��/�z��S#��sb�2<����KԾNsq*`y=6�/R��
��N���� ԏf�z_�F��i��${�B8c1-׆C�ՙ[�c�_KImiV��px�-Fڙ�{Y�~8_�E�"{�`����  �    `@dPd1�   ,� �  L�Ȼ0"�d<�`� a� lp8$���*-6 �(~ �� .B�� �d!��d ��|��(h� x  ) �� F��& y< �p �"O�*�'��� �<��   w1� ��l �X?`�� @�8 �#�W�!Y| ��n@䒤�܌ �d�{|��߂�	*$`;0��� �H�H��^I�2�pI�������w��J��*�¿s�X8Ԕ��$�FUݮ٩S��Ix���d"r�Y��ʀ
e�,�������Ϲ&E����W���f�0}�S� sm1r�m&]��x/�'<���*Nxf*V:|��q��C�x�a�9�����}�h�i03l%�^�#�����O2O�Za��wbB� 1i��rK�+N�n+�?�1� �L�/�Af�vr�Zy8�\(�V.i�D�[ܭC�%x��11�H�q`��DO�(��p3L,W��"�:es�
��!�%����B%��vj<�2c8
��Sky%��"��)uX�2��M��ՖX��Hp��w�5���� �NĪ�g"m��8�&x���%_� �|"T���R�Y� �W
��͚��_�77��H��*� !�+��'�tʼ��C��P)�
��`
-�v#��F�� g���cح'��/1 e^�O6�%7�S�	;��Ö�xD���ˋ~�T�M݉hD��"�.U�8�%K��Vr��� p��$˄���\�2��o�ʔ��M$���V��!`[�PxDX�\���q!{� ��E�W� �1���<������n ;%� S�I7/ ..�$�bʁ� <�{���2[ � K�,Yx��NG [�s#����(�;��C!�E��D\X�#���#�*�@��X�8�9(s���B�B� $ȋ\�.Yc� E#�Ph	r�  ��Fi%�����1n�d�`Y h�R]�"�B B��sǐ����lY+�	6@H�rL����# THh<XG�-�D��bdk����v�
�q�@h=�`����aAp,7/�nȰ	d�� �`*D��!7,{�p�I�X�aـ' �0�)f @�� W#��>@� 
���x �  !@�+����đ@ �`Hr���""��" h��ʀHd�H	�O�(�$��� �|?P_�>��}F~�ɞ����P�0J�+��-*e��j������F6���USc[���gM���h�Vy.�3�n�``,�"L�p2儇�ܪ0�ؿ G��1�½�
���Z{�Ԫ�����yw*�zzw���]��M�R������Ԫ��'If1���(�*F�����_��m���������}G�J^�x��ͳ8H�6��y\#"5ft�I�ۘ�IΩ��5~���S��.i��굩�rxI/,ަ���]u6�-;Z��g�Y���Y�N� ��fՋ� �� W����y�i+��N鞅�z�.I� ���OQíI>�����f�b?MՋ&���D�M�u%��zf�`���f��Ξ��Z2�M�=/�5{��uSΞ���.:�gg����2�;Y�4<S�ru[�z�L���j��/MՈ�О)�<�W�S�v� �ky/�;]� ��W�q�\�J�u� ��O�e{^��t�[�Y���u���?��� MC���a��H깿������c�=F&.ER��� I��K�=���➣xD�Svm��4��M��m:�A➇R�&��׻�|j�覧CN�����i%UI�[������x����"���7�TsR��SQR��Mz�/'���0�sB�Uǚk�����������C�5��<� �R�'�� �4ע�N\��[�{�=�=1�2��q�f�%����*u+��R��/�[�!����K�K�\��R�9Mt��GWs�ե)��E8�Fr��<�퓗�Q&^��/�k��
�rs���t���k�iy3]����H���_&�Mѧ�s^Iy���*�uoʹ��q������Pe?b`�"L^;�Z�.��L���Չ�ղ/�2��8#��F�Q�\��ֱ�`�c���
�9&�6s�Hu�0t�NLu�uB.K�e굇Sh�7*	͌�v\&\��32:���k���17���ݻ���MB^X�����:�ԋ�H4��u;�+|�c�uyL��3*lI�0uگ��/I�߻O'�iT��V�=�ۨL���6�V��"x�Oܹ7���}1��s���}��5>ǡ��DX!J, #͘`HC�  S��  �
���%��
 2�J@� @(�  r @��2��I8�8�O���� �&Â� ��V�d�0B͉� \ Y| a$�(���y`E0P2�$��`�Z@dQ+H��b�d=��@�e0�y(��"c� +� 	+�iw�c%��K��"; �l�#�q�� @D�À����fP<
�� ���DpY�n��L�c�+#k0�9�.� `�y F�Y,�x%�Xg's�x�ǂ��cIr��_�
��@��a<��v��XPͤX�"�-�[�e�8���J�@�M�@GfL�|JD~ G�9�y*�9Q&]2��'��� b (-WFq i@�Y���R5�δ�'[�"Xxd���Ѯ`�Jـ��r����$�� p'{����[��� L8�㔰%f�E���"��	
�W����"�pE��i�;0S���,�iaV!���%pc�
�7�� ���O�r�\qfN����ʜg���i������t�7 !�Ď.&�E�w�;(Y�gb% �ՄJ��CHk$�
�(n]��U�H��*0�#Q���<|�; 	M^J��%]��.�v�V�`��@�pҹ��Ӓ<�|�r�T���p��:e���N#��<���n�|�c)�*�XY�0�~T���j�@�ܑ[�A)��7k06��Oo�w੾a@�&�a�Dwv�;J��j�����`+r��I�$������,T�wF`S`/���p�ݡ_��)*�ˆR�sV#A ����9"@
� �`
O`��̒��/�#� X& �Nq��[� P��K�M��F0�ȟ 8���D@c  �J���. O`(���Y9��p-#�*$C*�H�;�Q.$�I p�'U��ȕ��sP�.�,ǰ�h$�R$�
.��	� C%�
��
����%D� ���d �G"o` M�@|<,�S H/�A=�B}���ض���.`��p /�)���F~ a��)&�,w$�&�
NK�s���XpX$X�9��b��X��$����Ap+� ��Ȉ��	�a%k���$��`ؓ%Ȅ��#Ay,��	ńZ�@��c�q��P!R  �Q2�M�9�t$r ���$Y%�,��#$@I�7��q��$
�B�BH�Ā+@4���6�>�>G�O\�&z�k�׉Y��ٙ�����_��0U2K��24û�Āv���G��h�Y �v��4$	ʿ�-�7&�RU(a%B�pEw|��9����H�U�s�/�)�i>[]ϧG�=7��*�S��5R��m��)&��l�ؚ6�po��o��J\�zt�jf������^�6�;H�#V�-��@�;v� �����Z]���,.�)� �`�� �S�]��.�t���]�M=��Od� :(��K� �S�����:;"�F*)쏅��g���ZT���#�OV�Z�G#~RiN�Ou֟�>����J�(�Z�f䉮u��?�����%JY���.Ck_�j��n5;�s/"mm�+� S/���p����Q���_�u���,����s�9d��Q���t�F�������z�4U�(�����ŨJ|Ͽ	[�)�g�u�x9غ�V�o].�M*O)��޻�}��^�ֺ��6�/�����[�zR��ؒ.�#^�]Q,��5�Z�ii)����5���+OF���:�]�r����ݥN�5Q�`�P�>�=.s�n�*�z�QTW����t*��8����~�g������{eMMO������ ������hꉎI16������ ��}������G�K#�'�7j� �C/�v/;zd�̀�mx��[L-� �mR��JG��v�z>ά�~�� �z� �R�Y�$���� �m��"?G�ͨ>���m|� �F�!Rs�жu�}6�K>���2_��/G�ٯ���Z_�w�Ϗ�4�����[S����o-�Ҹ��5VM-�u\�%�O���2�E�Z�R�OyT�&���/*�<�����tI�R��%����'�߷Iv����ٯ .8t�#��ԣ+�n�ĳ�H�VMA*����j��%�[��2>����O��U�ѮF��Z��Dy@U[䪷"X /[�u�\��j�S�C
��%IAa ;����_'�tө�'�a� T��=��t�_�y���%�e��-�D�sQ��n�F�1���[U�>�J�C�!� ��`�{ V�;�	  @^@ 
 @��I��D.C Gp'�dH�;�`
�� @�0 ��� ����*��/��(Ł   R � p\��@%r�`d p����P� +� ���I���!P6^	 B�pI�`@/ N +a�p&�H ~��$��#�b�a�0&J $�� (� ���� 
G��"�#��(Y� y Ȓ�ِr\y' �Y8%����� j�9&X$^20N`x&Xs�r�B3%n��V�Wg�MD�rj�U�I٢+X�N
,��6��.�+�0�I�����Z2#�`J�����4�f-kH#�� ��In�K�2�`��dg� ��P�H�H5v�9Ԭk���~ĥ/,��g%���,�@E�5+7�H��ŧ6�e�`�U1�a��aSu.̭���˄bD%F� W)���8��z��Յ�Y*ſ@%�$r���"���s%��9 �3ba�r�/�RL������ ��F|�-9	�x|���8h�p��l�6#ib��
�Sp*V��x��%�透�Ⱥ���X��S�dV��!B�=��Y@mFF~@�K'!˘�7 I\�]��$�-cQn�Q3��$ME�I��D��i).R���]�Ӫ�m/���'�M�f�w��)d�� ���G��8�X�9E�b�R�H������)������1f�]2I\+��D�r�ZU�Y�� %\ ��/�,
ܼD�&y�iĩ����8L;5b̻���.�j�I�| �S"���$ݤ�XZ�!Ŋ�a$��{�lx
�n^,�!I�d�7���3rĄ�� r�� %VyŸ \��q!0&`�d�c�K�#"; ��L�9pP$ñaπ�.� �l&I���N
H��{� ;�;p 0 x	@ �O����H�/$� T'�؉@BL�K����!}ʠ	��'p"�9�W`"W).X ���>�)]�����B��Ȅ������d�~�����B@�FG�2�8+�����[�T��װM��� #������dI8"�8
@a	��}ňЀ4�L�`H��#A	Y ;��$�	��H �-�� C����d<�34	"	�d
@ "�}�$ ��A�����j $�ਏ D�eEȬ��9$�#���C�&�g�'���U�u^é076'�uRh�� ��k�Z��f]RI]�؃=H���b�����]��N��u.�i��	K�5N�����U�|��N�3�\~�tU>ZKc��챂0I��+�͐a8`2������F���e�PO�m(L�
�E��S�[&8"RJ|��AV �X�����)�>eG��o�Zc��<���^_�f[�s"6gA���4s�� 9��?Y���iv��F$��Jy��^Հf��YВH��� U�D��dH	��D�
�I R�Q$+"`M��D��d��ν=zp�`~�(�ת�|Mec�߈��:���W5rn3^J�y�u¯��4�E��,����������Y��	)�Z\Z�~U�;� ��R���;�Џ��$V\>Y�$��~%J�R��E~U~x?M�ZV�CI�����?��G�W�����R���}%�Ԫ�J��w?�z���I�[��[]Ju��r�ZX?#ԩ�SSS,D~�`��Q?�G��}��5���2*���I�I�H�
 A=� VHU�>_���#�{�n���3��}SMQ�k�!c�ԩ��i.��P��~�F�c��B<�.�{�T��n5��C�K�Sc�J*9�?�Gk�yo�b<�7�Ԋ�J�*]���(��u��o����Q�\:82�#9�L����I��r[(� �AFKr*$�5��đ *��*EI k�ip�G����͏N��#��)�?fuݹh��8��/Z���7�}�	� ����v�4R:4cAF����p͈�� p 02 ��� y 8@ � ��2T�<.
=�;e��0� )  �0F�	 8 �<6
��*%� ��'l^ �&��` ]����\H@X��A�v�ĆAb���
�`���!@0@�e� n@��p���#^H��8 6�/�8�s`�e�`K�r�@R.�s?�#�e �& !�!����>�RH�@�Cw @8�"� �=�� L�NJ�`1�K���L �'2T�7�@\�f�2�2� r�v�;�Ƨ>�E��k���FW��K�^�#A�yhe�$��]���!��3䭸'=�x ��{H��7b%ٚ��@9�L{��P#�$}�K�`OA��:y�{�@�$E&��H���
\��Ẅ́�أG:�� GE�5 r�x0��3;�9�.�s�V�l���Uk�%|v	"_�߹*o	`���BH�\�S E�i_�e�LT�EO��Ji~�e�2�YՂ �b�ø�F �!��E8�[ID��
�R�*�c��Y��/`�|XD%l	��e���٦D�t��sT���}�Qu�i�X�B���fض	��.�\�^ M�x%�KI!�(6�ɨ�o�"W��sJ����ӹ�����P�Bi,.^I�\]y	؉����\	P� �%�&��E����BM� |�9�`^fK��L�ܓ.�� �g/,6�W+]�������Kq��ݩ*�' "���\�� "V-���m�MN?����rr���b�%^�'K�`?J�2���$���O�B�l�"���J.!�l����6TN@�ܡ�/ F&Ë� Y���c�X"yag`,��<�����䨀R͌���� B� [v$�G 4R���2_�̂�  �͐ � ��T���X��r�� p$ �/�'p�C2Y`8�	łP �Sآ@��H_p��L��#ȸ�
�*ؓv&H�O��� �%�H@F/�R�`"
픏�
��	� [�f�e� ���"�/������'�I7/6+I�	/���)
HQ�  ����B�	�� � g�nI6�'!��pG�^�0����� �H�&\X� (  �`[� 4	�� 0%��x O` F��V�gC�� ��sb=W:�H��[&]l�͘�}d�����Q�U���2���~���H~��G�s,�?��R��_'"� uz��}Vr�� t����0r��^@��ZQ���}���X�}�XU�WsǸ�����y�������L�Xqt&�d'�%ls9�//!UD	#W�T|� �	AjX�	6�Ek0a!.o���y��!@/ؠa��[�J}��R�}�� �D�ϫ��r�ޫ� ɓ"7c���f�����N��?Y��}7^��Ӄ�/��g��^�����d�J�G��T���G z>���|�����Z�<����ս�6�=?U�c�(�w�_��yp=W�Qw<��B��>�<��*��V��V�7S�����.O7S/S̃��:�;����=]h�h�*�j\��뀫G��SS��~#R�j��Q,��+Gs�:˦�o��.�������i��a� ��
4���P䜚X���p?I�6�������� �h� ��S����Bg��T�8�~���GeK��E~Z��?M�n��3�t~u�~���Io)�5G��ο�*P�yj���T�סĩ���������k��d�}Wܑ֧��$��t�A�<����J���"�!@1�@A
    �H��x?;��� ˸�~��_��~�-������jOmL����o���T��kQ��#�5�W|�ͩ��n?ŏ�m��y9��h��u}�5�w��q$kh�N2��ԥ!s��EvV9>N�ɤqw$�t�1��'�b�PU<�Y�7*R�H��A~CW	(TEcI��`�\W�J֭� �ow���gV�¤n�������}۽?sI�b��Q�o��k��K�F�&��k�[;�%��H (�� ���``� �`0� 
I�@��) �� A  � ��H�@ 2$ c��� �`
��_��$l� �䌸7#�c(g��, ���H�X ���"�*r��x�&� @�&[�!|H�&x� �"n\�$�H\c�0� �$`<(D�08+D!�����C�"��G7�Հ�p�  N�v/�L ���� �<y#�C�ȥ� Q��\Y�#����dM�TT	 89��$x�e�	 E�]�a���,ؕN �W�&R�j���"�b ���O%��dE���L<\5/�Iv��1q���B�q|�c�  U�!�����*�� K7����-&���q�k�?�vN �Z ��Vw"�We3 gݕ���UU�˖�fgD��6@eZ���~J��X��M�0����*����6tj_������F�m�4�l���sbE�.�~J���C��LY��4���� ��Gqpլ�}��x��D_�¸j��s(�6y8W5*;��{%����v,F_�!7r��Q�%� e>� ��	��Z�25uܡ���Yd�,ѪT&݉1e��p����K�ǰx�*��z{/`'�eM��N"��Y%k��_=��9�6��/)<�<�v�a�L��-���4H��
�k Jbą/%k�!`�TX'T��e%���`	�rs�jjk�����%	`��X��r?Bq$�5ݲ�H�n&�=�6��� ����]�&�M�'�9\���@��W���>
�����8m������M��6%FJ�c���#�VCeH��Q �a�@������""$$�a༑�H���Ey��9+��XHe��� 5�Eʑ ��,E�p��3  X��%� ��%�p�j$Y7<3y�`	����Dp��  �p &NK�9ib�Vn&�d���`����6%��H��|�qr��J
����D���b9 ����` ���[ m � r�B�8	B�ܖ*�B [v'%� �^`��
�f9���Eܳ
�%	� f�"�� ��B�-�ɮ#��ʃe�BH ҁ`�|9( H)9b<�ra�H� ��'�hB  �%��fRrh� ��y&P�_܌G�����J$`@�� �^@�+`�2��0@#9kLOs��s�^,���#�T���!S�y��	n@��6���NX�"e]���Y�
Ģsq�A2X�I�^ ���� �a>Y��^Z:���Vɞ����Q$�pKI�٫\�FV�@$��+�%�S�d�!rI�rAY2����s '��[CLD��qr� l;1����|>H�� J�{������>��ؔy��Q�ޫ}n�tdG?:?ι�ls_�#\���4E�8=Q�p[#)تy�w
�O"b�jD�*}���̕~�
�&D����"�P�b���2	sp(�B�eI��,ܲf$��G����#��p'�L���uhʹ�����=����U������TkU��J�|�I�r�ڊ�$��F�%�,��J
���Z�`d�.B�o�#G�*�|�?X��i�zj}�}�Nu�G��Ej�k�>�>�(�k�����O��?���Ҫ�S^O�SmK��=�V��-S�4���W��T�v�'䪥׬�p��z����W	�U/���3TC������'��Ou=����pE@[ 8!`
  �	#) rU�d��/���}b���>��8����Uk�;ܤ|*gP�{*'L��?�߹�/M��ҩ�+��j�>c_�#����Rv��V�֦3&Z���_�^0t�D���%l���濮謄e�Xx;,h���U9n�sl�Z�v�^�*�j#��
�~�j ��;V
d�{W �A�.B� ! �M\�D6�$���<�%��� {}6SԌ�r���Ӕ��no�g�G%�;l�4��.OG���Зs|����� -E
(H�U�d��9  /� ��$  �V  ��o�@� d���  q�P$�    '!���lO� ��$��L�� R`"� �@�!H����b� �o��� �����r$I��{����C X�����{,X� E�B` �� '%  <�{"�*��,Or�&�X'�Pؐ / ���]��@���*#��"�HFD�0�Er���2��� /o; �]�a '��H��rs`��`j�a����
�Y�c5`5d�2�Vno]�w2U|�xJ$ F�_$�+�8`L����~f�X%�e�}ՐW�bQ0��ٙ�������L`� ��e�.��%H�+���*�yU���!~�^H� &=����^�Ջ #3��:6�*L��3<�Nm�-y�����..��z�CV�J�b#�����δ���F�d¿��,e��~�G�k�$ۺ��/�<5�(ɧw{0	B��qد<�&8�\�j̓nJQ|�mtZe�@�p������.J�������n���J�&@�V"�v:m�g;?����D2�0��~
�6$� r�Mԧ�p��ָSW�������K"p����K��Y��h���p+^O��~�N,�^�!`KY��A)I+�y�BP��+P��9]�O��w���D�@��2H��HZ�+}S*���a�-_?��%+p%y� ���`�l�ExY�i@j��Kb<�.�H�gr�>@�x4����
�r�Q�8�6���)o��V�"��&��qKx
������*A@$(�	�!7"s���D��8�;,@D
� W` �v�1a�J�^` N��  L��L ����Rp�^JE� K�
�J��
�@�I�$.XUILRh
���.�Ż' Q���^G#�� �r\�{ �L��-E�����R<\ �
d
=��`NE��	1����p�dB �`��
���T�$\�E�s ��
F�
��d7+"E�	dʄwE�J���
��.,	)H* k��p ��dn��(N �;")��@�$�K�9 "]���v1q�l@�#}���" ���ʃ%I0) �  A�.x,I�U�y �� �[' �!�lH�p�� l��u��t���6ff��WɈ
��3�nGr����	R��y#v�0�e�X9�&1$�Y-��[�2�p	��$�# Yay9�r�K?�9�"6l8'i'%x����Y����sI�����˸e�'���#�P����`E�����9+��2U`#�9.X`P������� <{"/L�On�� ˴�&�f�>�^IGU��9��:n��r�ȍ��}tΘ]�Q�Ms���NR�ɚ0Uvz��Ye��o����%�ba��I�ԙ,C���Y.WlD�NC@XQ�c��`� �� �.� '�T���܃��)��
V�NE��NK͆ Ƶ=zR��}KI�F��<>O����=�]S�	q�Ԕqn���:T�Jk�c�kl!�MLx,U��PZt�SI�(g�m��שS�C������K��m����&�>rw+v7�Zq���QS۱�o�V����^O��ދ_���J���~�ҿhlڪ��R�6��_���Ӵ�}�s�YIB3�
�9>�%:p�>�>�%����� 3����;�x���z���>��(N�-G�������I7
��R��=X�?g�U���iuN!aw?SKZ������sc�<ޟkBX��E (2� (  � ��d���>���c�>��T^��}_�3�^���_'C�ϓ���ԯc^���S�O����� �����(�����ס����'����o�+��,��&~j���s5ӗ���1�n�����o��_�bpk��C�L����J�b��r���91U�#�S0e�x:4a�<���A@$�M(!W�'�h�U�}��� �`�`�U�.$�����{�?���'Ú��a}���Z��s�'�ҩ��,��{=N����g���W�D*_j%��!H�    H � 
��^@�   / &�$,T8@���$ �lRp@�� { �^ ? D�Or����r�4B�FEpk�%�؎�{��� � Ibl ��Uȡ
� �D  \�2����G�N@p?�F `0�� ?b�@p06H�x�� �P�Ў�"�݄�>^�$Z�Ȟ ���@L�,�R�������@��̈nK�	�n�\�(O`ܜ��#�ˑ���`�f�_���|v���;AG�rD�-(��"��/QY����-�͓% ����� ���HS�[� L"6�8|����H[��
l�˞@9Y-D����G"`b��w� �rF�� bC�p��V�b��@NMeA0XpS��k�9n,P+�%���M��f��6�X����?QR�&e� Y-JT���U�l8�a�ۓ�����\�X%K����.iK�vR��p����Հe�U�*^	��sh-�=������XK3h<^K`��D�&x�[Ŕ��� ���Ex#X7k�"��V���N�$��M�#�]I�A1�ZDZ�X���YȌrŘ���GJ��#��s(��bU������\�ۜ��Ȇ����@�$0��k���r��Fr��5�۹��!uC�m	�x'�_�	�:�z�7���M���E�F%���
���|����#�φ%;`$��Q NM&�����J��(3R��� �8y_���dp�6|V�1�
��˻��S�	�q��*\0��#��@ �̗ l,.&�퐲 "���a\?p��'%�	=� B�g`݋fP���_p'�$�*�6|�D�����%�@ L�p+PEb�H�=�ŉ�-���@f.\�`C�T3��\��c�!y[d�����<�n��@5r\��� �~ �$� �p- �����I9�,/"I�c8l��n�,B�$�Q�P#*Q�O"��WHdE��YV `�@�Y�&8�%�'�̒lT�
b@;�XP�p�1�n*���{��P (�� E���/�]�a �I 
B����N ���@0J ��)$B&�|鈔d�Bb.@?e|�,�p$ � �0F��
	r��R 1�oɝG���w0oV������b��@�oa	E���)+'�������&s���I�p��I*��i��[H���$� I�\�s����]�~�>�+���vN`+> eW,pH�Q]�B�~� 	�� ;0�q�@¶C��Qd�+�u�׳�?s��c�UK�(��kl哮�����>�9�����rv�M��+�G�R\��<���Q$�ܡ7-�L�ۀ/2,�� Fx'*�o`*��[�װd�̑w(�z�� Wb����/�I�ff�m�d�@�Q��S+`_ ��@YpU<�H���oT����u��m��Z�tb��5ZT����IgM5%��U�V��	�y4?K�%�<��?O��mM���t&�S�~o�R{�©3��� ��],�L��ֽ%-�O>���f�g�[MA�/���]k��?e���~�j˾O�2Q ���~"� %L��}����!Mi'L? ��/���Io4�S9??D�F����=ҷ�uRꌔ}OV��Ӷ��Z�WCWO����������&����If����5U)��ؤ��t�O�a� MGG��  ��
@P  
��@|X�m��+i��OW���ߩ�M���u{ҿ(�zv5��L�:������ e� J���ߩU������~��=�J��~i�]{��|������_so7g��\d�@q�ͨ:;&b���n`�W��X9�Q��g�#ܨ���R[A8�� |�,K �O���|�K�8�n`�� ��}���Y��� 1�ON�ѿ��.��G������o�O�����>����ug��g����Dej!��@ 9         ���  `�A���"�&ű ;H^ H Pܼ�������a�@��  E�~��� �FWp a�+2����$h��� � `��`(>@�d�@WbF�B �,�� @8Ā@�؀D��#��,���`{���\d	���@\��E'  ��@I]����vYk$r�v%���x.@��*i� �jk��	ܳ`���������J]��	%XJ_�H୙�J0U�O�Z}�W�ps��������(�K����LD����Y4H�b�D�HC|������&��_�ΐ"Wq਎|���	(bH"No��Y�s���Z��@��D�-��j��I�Eþ�V@rU|R��	�/Լd	ġ��D�� ���@���_��^@�- �R��-�\?!����V��iǃBPvw�����ũ�-6��TϹ� ��>�e�ċH���W�3S}����i5T���2P�a�_�1����Ax��B��V�(�9�,��m\	��e�Tʬi;�c���7wv��en�O"3?�Q0��ĈN��M�`$}��Pj>��{�	�a��e�@�>���U��n�'9"vw-2�vyܾ]����I���_�ZO�EJ҄ݢ���"�/���c����|��y"弚m)O��]T(2��S��E�X��Ȫ�wEI2]g�B%V	(+�� [۰W�2�L�PY��^l-�-M敀#����ʉ��|Vl*����̷`?Kn������Oع���0�����#�H�X��f���s���}�TH=��W|�]�dyb',�� � +0�ē��q Y��� �f8�H,\	��Z#�		 �|@`�@(�@X  y$���'���;�08�lA=����m�?�mrHy�	�M��qb^J� >&rJ���bH����Ye�
��� ��yد7GpӘm B,_�7`� �@��;Tā|� Gbf�Y�(�D�p��-���& 6�DY ����*@I�E�
� ��s �| (� B�	 0V��@.��/����! B� �H}�  ` � �%���� ݈�!H��R����Ǫ��\��:�d��H�_�.��	=�@��@J[(�9D���� �P�`� ���*ې&y�@��I!�ٍOʠي� )*�ן��{�/�M��%���`H���ܷ����TB���Y^H�6���dX �� R�sp�=�{\Gq�@�A���N��g��ӲqMK�%�/��������qJ�L��ʹ�J�W�g��I�R��8�#Rf��G�8UQ�D��J�� �EL�v �XI=��\�7d��(�(��@��!�$�
����eX{��� �b�0"�.^l$<�B$� XEw $M�()��V���Z�i?��{�I׻�&�3�U[r�<ڭԚ����;��TUK�F(�k�~�����N��Æݑ���W�4�5�.���j<>����ԧSAMt�[u��V��tշtj<���Z_�=OK�W�����Z� z����ҟb&�%]ukjM*[�v^���K�M��}������ѫM��p|�OQ�OM֫m���ԢΝJK�k�~�������u��d�^��}�I��k������G������S��K��UC�fU�+Pd,���v�'�G���gI����cR���������d��� 3���W�Ժ]�+�z�ѫm��}5���~.�����U'��n��իSN�Z�-�~)Z�U�P��;[zg��<�	����U�K @!b�   ��@ 
�솑����2~s���	�������������ނ��(?�l?�^���D�='Ix	_��J�Ե/{G��5;��~��+K�j������c�N_sB�Kئt�F�<��P'�\$@x9�.��d��(�Y�|�ud�[�Q$˳/&]�QbH��̻y��N�"@X)x"g X�rL@Q���S��Vl"�c,��]���� ��'�R��׶��_'�����ԥ^��Ju��g���-o�ӏ�:�~��+!�ȹH8 �    ��H��� 	 0B�� `A VH�^  " B؀R �  � ;�p!@�  F��� ��	 #��n����v �;�EbP�"�
$	�"F@d{�� �["<�}�bY< ���I B��bę+�68 ��l@O�2�9  \{ $� "V��0Ē�I<ؤ�a���0���!��h� �wc�,Hai"/pd����8dn^Bs�%�Y
�Oa����/���ďfo B?�����9��^,q�s�&��s&�X�W�r�%�$N�+�������[dE���*E���j�������wr���P)NI�r�F�AW�7r���p6$� ���Q}Ÿ'�a`7h"r����ܹvB�� ؎Qp�� ���#W��2@Àt�ɪG b�c�r��v��K�X�x'3�	ᙩt�#�K1w�#R&���L_&�3�f��7偛2�yc����l���a`�ҦLŋ8�s��u)�+j Yه̼"���xȼQ e(�*P�vW�i��H��2��B�88B#��DNsq���Yac�d��_,��2��8�a�v�%�^MT�`%i,��|�̟o9�<��	��a�V��"��[�_UK�r� #�ݍ8��3�*^H�njNm�UNR� ���`_+vۼA"�P��U��*[�&��^.`�
c�	7��$��������s+��$鼢ĸ�R�V��
m��#�r�l,#�
��1~B�� $��
�*�H���'�iH��U2L���Oܹ I� �v#S��T�J��"���P �J�`�H��
䁲@���$��/ܹ �Dق�NJ0��Rp[� ��($X��K�N@���7N�J�2V� \��G��h�.���b� ��"�ȋ{�p8���������6 �.G00@(r�"�VɀNY��ܮ&�#�J��d�2� .ŀ+�3�
�|1f�w��%ܼ�@�ňC�?p!lNlP$���7#c��ح���Vg� l�qp�@v�+v'i+H�"�� 
D0 �'�2 2D ��  *b� �+�"c�K +���/6 M��\9 =�) � �����־�&��8���r�/�U�e��2�� ���[#k� � L2�r`�`"�q��͉ \�E����M��$�/d7q�U��p�pJ��^į�y���?y$\�]�rRO���璉D�EX�6�Լ���?
��!+c�{�-��d�`,��w�� �	͋̀4z6y������rJ1�w8����^�2%Pד���:���K��?�^��j�gM}���d�r�
R��"C �7�K	X��y,���ؓ�"�K�E�t���
��8"��l�Zl8���W+���08�&H�[4�*"�M ,ܲg�(L܍˱S��x
&	��P����5M3~ŧO%��Y"3��U��֕eO�[S����� ����ݹo�>���"��j�s�h��k� I���ԩ�ѩ�g�V�d�9U�\E�k8���z���/� ��O�����~����=�T���J]�3��Zq���4�*�&-Y��+��)UUөKx���j2~��{N�U�Q�ߪfb��ԧ!G���gA˅>��w>G�K�mOJ@~K� ��?A�uN�>����?�%�'��=� [�8l�_g�����UkiR�M�]��T�:�ʛ�#��F��z��3���֧�x#��m�*fǡ�O������B�"A@  �@�/!� 	 rT�U����N��=N�����~wԜ+�]���#���$�+Mq���� ?'�IQ�zK��_��I/��/h���� P����"}^���L��_���]9}�&���S:Q���4ڃ�]�b�B�f5���(��λs�eDnQ�+0��ܡPv�Gr� m�'���b\�Wv�"��\Y�S�,J�����6 �:?����U�g��Z#��v���V���j{���d}�@_��f��s����9+!��HRH
   �  d    D (X��&@� �"@p� 
��p 0X 0����   "��� =������ �0� ���)=�d� ` e�C`"� R ���,� ��@a� r0	%�W@D$r�����b@pL\�"c�3���$ؘ��	̲�Do�!�#�$�g$���V	!;`��#p%�$	�T���Q㑂\	�����Ȃ�@���	 E���;�d�s��ƹ�J$G��bx�Tx�-� �/�N|���خ�� ����p�J�䉉���l��_��ܓ7.H%\@����+����`6�\������[ɛ�Y�M��G$Q�`2F��$��]y�1q����x�'	خ~ �\yeʹ0qk\�H�Y�>Yx���>857�&�Cʎ�k� a�[��8sl�m2�ՓS,��&j���%J�ri��7.� svJ�Z�yc�x6����|gl��+���C�Y�,K��&e�K�[͉��9J�8��k�V��˹��"<����$x���O6"�� �Fy�vV曑��o���CB%� E=�^ ��	KҌ���,%�w��'�,�C|X	�#̖2V�5a�C�8+P�HD�ǂ�-�UM��p\]�B�9��t��ӲNBK�k̀�weW����t2�*ei$"�aN%���F���% F����0�0�b^�O��.���Eaӎ�y����
԰��$2�W`���1` _q~B� T�G`#p.�x���6M�ȎD ",W���*8��j���� �w M�Ap�9W���> `&��"�	��`;� Q�^D ��|��{B�F�o./�@��C�$�8�'��A� �p �  �J@v$��ds$Y *o���+%M�#� 	|��
���_��	�H��� �U,�� �^ d��HҾd�%
X�#�"�P���VD��vC9.x'v�8�/�}�r9x`TF�o���XH�����5�	 K�p  ��Y�  �� �vyE�/% @-�X L/#ȋ���-���_�@�M�A`X���� Ȱ�  2@ 2H �@P#� �&L�uh�M2�_'����yڀ�ɗsUY D2?�&^@d_���<��!�����K	�ěd
�HxD��NP�&ś��PaGl02I�@��+�%X%*R�G��3�;�8�xd��r	�Ĉm
���/q���]�S ���eH��B���Á "# O'}����qj�:�m[�Q77��v�/�ZǞ� B�69����sj�5����_����'4A���W�,�;`���Ĳ;��}���W������"*nC�	����I��~V�M���s�Z]^L����Y�z��$)�UT����%�y���#�թM+���g��Z��&>�V/���t��,ɵ�����n�ש��O/���}X>_�-;������/��_q�n|�wt��z��<O/������%?�$����]P�����Z���z�nIV�N���<���/�3�����J��=OR���zZ��L2=������3��k�ZZ��ԮO���=��]:��g������CCg���B��E���uSUK�c�����(�A�_Oi��[_GI6�_��/V�� S�UI}�G���-E|{�u�}o��Y�_/��.�?Com�ꘪ�|�65���ϣ�F�-%6-�k��z�Tҗ'��n���z��&*���=_eo*��'�{�^�˳�<�t�O���jc�_���'��>�wzu5d�����}���F��i�د��ӳ��4Կ�k��������F��z��W��z{���S_�bG�?��ښO�Ӯ���{��i?�G���T�Sn�J�Sf�w�t�k�� _M�ɥ�K?9�ծ��m�޾檪�]J<��$_�_��]�Ԟ���Ζ�t{�ޞ��i� ��R� ��k�D�u�ac�i���_��MOѥ�5WZM+�,�Vo�A4�USL� �ih����_���Ó�>��]����C����I���N� �^���[�� :�̟Խ9Ǧi�L%~/��R�k��|� P�Ͽ�����g����ӗ��s��l�_�R�	�Ws��T�b�2�|�����4�H�S��`��Φ�S���i'���q3�Q����@�̲��8�X�L�`pEUH� W�I*�mE�S��S���N�l��[��9u3ڭ��?�c�?s$J�JG����v�>g��?�K�:������3%��W"J@�    < x� ��
@ 0$� (`� � f� �@0�#,�   A 0�y ��#  Q
� �$  �@A( 2|`H��f�NC �!�&ri$ܡ+  Z � �@� K�"��� � �e��H9 %[�)�pb��'��w�K��f� 7��{�!�8�|���$�-� /%Q�Lه�]�<�w+K-��d��wȎ�#l�x@i���8`VI�[\� %rGU�@x.�N�6:���
�dI��WdEE
���+��H�r&�Wk�<�� �� ��|��]�D;X#p����*7tH��fPx�|rH|�J0\؍� X|a����`�H��r�x��s�&]��[I< jX/`� �bU��<{"oa��&�ь�	G%��L�dIr�r�S
� L<��Y#��1�w��5�"'��^/ s�y%�ғ�K��s�xVG�,�
�f�{����+J����;~�*WO��psj�@M������B�)&�)��L��7�Q0�%���_���`�V̒eM�)��
����%�f@;�1p��4�6��(*���F�� J��v� sW冔��y}�j�.M7�);w
�xemǁ. 	��a��*Yi��fg�G	�M�F]�Y�A6� �\���_�U�B�`���eµ�Bl*T��Cm"C�b���b�ry�n����D/<��p��!["]�Y�r%̚D��C5KD�p�j;u	��Rj%����N{�H��
�"��-r�f��9��Zac%�{��v�l
�a	�b'�s�]��o�V�#��/�d�/6�q R@�U��Op�@(� ���Z�"��P�'�� ���q$���(qȄ�./0<���"�op�����X�؞��r����)�\f�G� s�XQv"y���`�B  �� �r� r -�  hD0&p �p�D�2bI�g%��	vUpY����!ǹI?���H�r��d�@`T����!�&\]d��T�	����<�w ������  X�!nA���5��
Ģ% �� 	>@������x�<0 p� ��G6 � HI$ț��_p�`��~l 	 d ,X
� ��M� ଀Op��F�����橞�x�yZW
�O�bƚI.�p���؃,�{ ]��]� �% y-��x�	9��#NJ�r6���2\� �I�2�p�F�X�5{���N�#�����QHe�T��J#����L���s���O{UǆE)(.=�,�>JA-�vٵ�*^>�]��'���&T�vܞ��O4�dX�Lj��=�z��o�K?Q�ѵ7F��[jY�$�G�������*,ع���Hr=�fK�H*��L(�<dq�)͹,�7d��(T��s,���+ũz�ryf�g�̘�<���~�V�i�1T�"�ģ.Q^rb�.PS%�$n�2�(��\˺������u4���5<���=2����*�N��t�C����*t��6}
��=[�HUS������6_dgW�t�	v4�0���ȃ�}�9���ɖ�i�T�q��z��N��Nug�e1���6�T�78�Q�cZ�����S�=��i�� 1Ӗ+I����ڈ<ypz�צ��e��� 8�� �Uuot�2����m[�������u��=>׮U��k�_G�qkn$�6�u��~�ֵu56�kQCj5����Me�ܩGl� �]�;)8m?�O'gg��׫�Ň$�IQ��̗�]���f���6s�M)����*�_U�J��7�/��T��U=����{�:���T��?X����g�~<����{�����>���q��j�(�7R�])�����WV*�{M]��ӯ��n��w��(�v�ӺG�������S����yu�V��jGON���?�zu	�f���_���o:*����~'�ղ�Gq����Gܭ����� ���DY���-�^�������Z�kꦪ���-P���f������j/��j�=E�2��MU%f�-J��ç��ꩱ���y��e����RL:�������5���é�w8�N&���p����N��5�W%�9*�&�K�1[�M�	��"�Y�a5����ɘ�T@UpYDB,J�Ե>�Nm$�	A�nވ� J<����J��xy$J�;`���� -1����~�Э���:�����꼐�$�us �    n �    �� @  � �  
@) e @�  N �| �  �!x � d��@��8 H�a9��� �H�@
K���G�5b��E$H'&��&}�� + � ��	�$� <d~ � %� '�}��!�	 �ćp#+V�R� �@5ko��� G�,���*�$o��?%�p� �Wwd��~�'�f�<���rHɮL����[2;w[䌵;X���y9;��rq�
�fJ�Qr�Z�I \2Na�[��8^�p�@]��m3ah�&r�Y�a��,s��4�#�pݔ��dc乺qq6�aC���pe�@D�"�~� 0��
�x_ E<�6�@xK�
�LK^�mŀ>�%%���`<%s$j��	�	�_c-������#��M� �[�a9/{i���I/��V^@å.lf_�sr�F���d���ˊ@�3Z�i6��p9:RD�:����W��^�r��K��	��a;�#M`S�,���mF
����q/�?�|�\\��r9�'�ҋ9X+|p�~e�v� #IXբ�&c�S�)�dK<����p_���nH�� Z�)�NV
ڲY1dU�"� a�Y����K�4ћM�o�%��*�ş���r�Y�X^sb],�`��C	G�F�.� '��+JI���6�R���(�e�fJ�%&�I��@E1�dq�x��EH�ܪ�����/sL��|�_�	���%b8�XW�~@�K��L�(�nY�"��X�+!����y� 0��PY��	bv +d@w R{�	� Z��/�$��Xsf��NAW�`!Bh@S؀�� ,��9  �&�.;����9�ț��"-���X� X ��92V,�|�� �I(@B�S��]�1b���PH*�G(q�W!g 8%�����p@	!xI0��� Q�I+ �䃀)9 \a��@	Y� V` .P�X	���8فq�@�p� RAWpāa7BlI�.�'`�@2�h
�&
���  ��=�0c
D "��H � ��H, ǐ$\7���Ĵ &�[�p<��O;�Ѯ�Y<��0nL�����v8x!Y�����,X��X��H���,��J��ی�� "W%��7N��{ ,��.G.�o���_�#���%WD^J��MC�e�˲�8Wh?b|��`�-r(��,�R��
�p<� �� �d�pGpb�e�H/��!^I�dGrc� #&���\���}e$�{�8<�{���s�A�-g�O�\\帏��%��q�z�P�zh�Z����j�=Q¾��⊬��=Ɵ#�MK�3Sp���/��k�'�|eUT���S�ZWl�2�o��{�����Ы����E�aQ  ��	��z{�M�y~V�G���_����A�[F��.�����5�0ٚ��sM\�S��-����烛����*�3S��A���� W+����+��GݧR�����*��������Q�+r�~���T^0<i
��C�K���J�H�a�gDb�`Ue�5�k�s��,�r������g<}J�R�:Fk���lx�i?s�W��$[=GB��&��b���{6�Br�p�J�]郛֫N�JWf�c[ժ��c�_��nhu/v~cCOWV����~����?R�UN������i>���~����U;ʖ��׏������z��_��WUܒ�?-���joWk��|�CB$z�}/J~���Ui~[��7�S�;�~���s�}A���Gq���Aݫ#����ȉ�$v@O&kIR�2id��t6X��-]D�˒j8�rGZ垾{w�2�Xdu&F�sL���$�2���*�df�.Ykv�&��J�:b��!>Q5Q,��/�����2���R�TE �8,H.J�
�@cU%CG�ԫ�wg��)�w�|z�u3qU4Νguch�E\����{���b��P�'99�|�L�5����h�Yy�2�x5=ª5h2�Q�U�4��.�JkI�}M[i���ݮ�O��]y(������X����Ll����9w��,�d:9/��
' �� v(
�  �e       ��(�/�$�ܠB  0' @ 8 	�  ' � � ��\��{�DXH`L�&G�Z�����@.�X�   r�r�g��$ܾ �#�p�
$MÀ#��@#�&@�&�6�&P�B,8���@��� \2M���J8r���"ےX�n�倈#e%�R�Q0P�X��0l�X��P����������n�X#p��9�ʸ`X�L���X
�=�d�����Vy+Ǒ0��27e}̷i�}��Z�0snX��
p�i\��g���Ò����B��@�������,UkAh؀$c�F�L	b�����(�?�!+�G0'�{��I ϰVa���6��^<2��/`���7�U�O�#�i� �>"�?m�K<G�+�d�1�`��Pw�ͦ�Y�-� 
���r�G
�o�'h	FI	`.����O�{��`�73�k,B�0�%�������Dt�!76�R����3�Z��Z@r�2�o��zzo&}�?p"��7�D୸��E�ݣ�2��Y@� nB�!|	�@BWbT�W�ٌXF1p���G�Xj���b�T �7"��I��Uw �2Gebԥ�`$õ����3w�v�x~����	��@E	�?���Ey`2���'�&��~�^�Uu䒱j�P�Y|�p�"�e^m�*yA���:��9���r\AC��N� ȘR��%�a)]��ĳ5T��������L��G*�_��	��dW�,c���� 2�^@�,��4@&	;�t,�&`�H��DeX�C(O b���@hA^@pÌ�;��;;I���(OԲ�a9,��\+�~��ܼK�NI�
�>	� �2Hy/F�/w	Xp Y�
D^.�ةH$��X'7����o T�y�`��>$}�
 ��d�PpxanB�xb2�brX���,� Y�|�̑[��`�rb,�*R�80[�JYD�� V��`
�A��"� ����;  � s%܎ 6K��2�A �xb@�T/��  $a� RG"J��Or�
F �e�k ��� @> ^@{��"� rd+��%�
@!���8k����sۮ�x�� �Ԯe����8`e������x�'(�CT�J'��B@�ܘ��(�$�`HA�}�8�0��B#��[�"LX��7���@ �Q�s����j���v�o����L��[�/V(TI�c�/ ��?����Հ��;�%���;�j� e�5���W3���Q�p�I�JO^��)I�B02�s֎�βs����5
�75X�$��rzc����
f����P����ZϦ�c�ٷ�S��nN�|�gf�Z	�X�Mr�$�~�K�Pf4�a�ʭAz�Q���RJ���@j�=h�UҮ4k�nb�)�'*��jޤ�J�vz)�<��%��뵌׿�������t�iQܒCk�^�Rw�j=�P��>V��N���O�{j\�l��bz��V�n��U�>��7�b�Q�yk�i�і�Uo�X9=�/���f�+'�����ܤ��<���^�M+B����5%*��v����+��~�RNǯ��s��
�r�t���6�����i��=ת��T�tR����}���S�!$���z�F���W�_���#��%sJ&���� ���r�������tH��J!�2~C�9���P����^j��� ���ԯO�p��)V�3����'7�Z��³�c����|Ԥ��kP�����W�s�u[n���q/����U�]_��/s��gc�]Zޥ��)���f��ϭ}7�F���Cg���׊�0�'�7�fz�9��4���S�9�l���6�o��Oؕ3�������A�o�ս5�w��+n���Z7���]'M5,����u�[_�Zj]����]*Z����b�c�����wtU�����y�(��;�Z��ڰ~� �6uѷ��k`�}�� ��N��.�-��n�� өY8>����(��UU���Z�:�������W�t�'�a��E�{��J3�U��L�ۥ���i9�Kc�=>]z�|Ɋ��,�}~�8'J���_���:+o�z*l��������k�K\R���ɩ�f���:����i�N�-\_���S�-&W�S�&�VG�k�9�B�8&�*�o#�r?���L�,i���?�۹�^G�����������D��^]mZ��<�M�}_�V&��Skx�!i���TWr}zvj[���Qa�!����my>�[jU�'^�F��i��/8�M^N��Z*�����[���;y6�s)[ɪU�*�K�$T�"�T`{��L=�3�i���J�+���Z��c�{w�}�,b�ğ��=?c�>��})F�O� J:�����
��@  �  *� L ʈ"`	 0  �$��'�P   	  � E�%�,rGp �	��� ��5�7�#�8�B� ��0/2Ap��p$c R`�D ð�  5`bH��>�9(�pB�	P'*c�&^��@!p@!��0� #A�����FV*$�d�d�x�a�ȧ�r���o���P=�q�{�d��dp&ğ 2E���LJAp.X�(c���������؂� �d�",8�9|,U�� <�� d�J߃,�x*�J0:��_sz�FK��N �7/3p*Ds���"�)�x��k��krN$e�������V~�"�nX���8�{\�bp?P,X���`�R�&.͕�	|?�H� B�@O��=� �Z�<@����b'`,��,� C��đ[�]�b~�Y�E���e�@ӆ�Ј��8n@(�BT�����&�� ���
"��l��_��^.2��%N� �9FZY5-�IO+ fD��+\vvNɓ��:�@�W$G���s?��&Z��n&��WP�Z
���(�ES�`mE��D퐜�04���.2F�ɥ�3ň�L�0�|e'e>DK�6����@�Kx-��[���?��خ���^�8����r�yk�I��rpNP�E�XD02��7k�[�j�'/V���M�["��~�8*v��y�p{6-�!� $_tX
� �-�����Z"@�H��ْ�~�\$�D�	�A�T����ɗ	�����`�F�VBG���$.�2����F�'>���d�C�	�%"̀��8�I9��|�Z|�-q��x ,i"BnG�*�I��� �͋a�̳��@�l@(�Z81�����RR 0 ,^FD � ��#	dL]�
�$o�o!ؾ�[w
,�d�3� !��R���{�͂�À���!@�Y���plA@�{*@=����V`�d�����bXi�J�a �����@I�R�	 ����<�䣙# �8���=ǰ2䃀9 �����A�bI@,��  
B� -�@q��s$e&@ 0 r<���I#�C�	%��

�r$��G @����Z3p9��\�V��=������+Os>��2�̑�
���$�G�������_��F[��,�aB%ݏ!�"�������@f
�B��&@0�3�=������[�B0՜��晙��v��E��*<���2,V��bAb;L��Z����/�a�tF� ���r���Ѷ�.H���� 6�Q���y���bǌȑu?.M3������k_R�5Н�瞭*�Ԛff���*m�2w�Ls�=x�=f܇���*���w/���ױ>���u[�r)�T��Og�
�z������KJ��|ճt�ʚ�V����Ъ�c�S��KS�zuW'�y{V�)���K<KU��:��y{��1�O�Gs��\�Gѫ���^ǯB�Aν�O;Ы���o���d��ˆ����L��;���n�S5��3ѭ�
�n���Xǵ��uM˵�U5����v�TU�4�)<L�s���S�1媚{见�nnsU�ަ:U���2�{
k:�ZV�<�hT�1��I��U�S"�����=*�1UO��M�zk�/�������ZuF�*]sN�]����ЩT}o��:y<�����Ғ]���J��9�һRg�޵��֦W��eI%6Pv�mU|$�K~C��� IWb��]���E�V���R��7��~�3�*�F���=�#�=�����S��m9E�S�|��mc/b�'�q�P��c�h�]��rP�)�P�/G�N��_�n)ե'���c��-����n��%K���>��ХU����ϱN�B�4j�׊���>��?Mt����G��Mٯ�D{Tλ^~�z������H�t���B�<� �m��?5�a��jW��6�<����ڧ���B��-�̫n�Z���;�}[н+s�ꦯ���Rl��j�5�>��3o�u�8S���h�4ꧦl��C�'Li�Ӭ�
 �Kj��T�c�4�]IŌ궪i_��;���SMBcܱ%�8ѩhv:*���S1{�Hߌ�Dh�n)�z[G����
�e��:�i�s%4�jP���B�������R�N枌؊���:׷k7��}++U7&��iZr�-�J�*��B�}�7N߉d�*�U��h�K&ތ+u����ڪ�8j}�&I�\����^�ʪ�#�yA(�0�;�i�s=g��/��[���:�LvSdz��JT�٢�:g�jM%�E\�X���#�"ñ��\�K�� QG�����qK�D{7V��E�z�V��&j1Q�(?_��6��H��������?����s������     X  d C� �TB�FX  	 O �p( �  �@  �@�  �'7+;�;؈� �#. �%��$�B W�!��D(  ��_`@� ����H�9�$�`X��y� y ؖy$	 ��`��0$`FD�
��
G�dY�1�)�W������H/����@|�Oy�
�>����pY^�~�~X|��F`bF
�`(��� ��,�^�#&bŇ���p3��}� C/����R{K���D�-�����
��"*��� �㱜�{���>B���b��d� N�X�a�<��]��?�n]�^�^J܈Q(	���>�I��	�T��=��/�i�,�q �Fځܹs�	� vK7�,3���?�ˈ��&_v[.1 �a�U^J� d+١u��l��ȷ,<[!%��'�8j�>��
�� �E��Ť\��e;��4w�]�����X3{�n�ʹ�����4�J�(�ȘV����o��W���1Rq)Eή�&Z���C��}�d�r���+��X�#�	d���[�v"VmX�LA��=���@��为2���l�i���H�����s70�����R�	�%G�[��]���J�<5�N�H�3%m��%��Q��b�`7�~�o),��*��!T� ݈�`ݣ�7)a�~�z��$�7UBY$��3-���Ŋ5-�v$O,�<A�W�+\^
��-�uy�*��W ӻ��j��Ĕ�J%ry�z�M7C
���~�d]�K��" H��Q>7��! &/%l� 	y  g #�p��`�|� �� �%q�q`r�q 
8"*��~��U�w#�ŀr���Gr�ـ+o��ś8���O�}���9��� 4_l ��`+� �2q<�\+0�'�A��&���3q6`&ÐH� }�iP�y4 ��0Řr ���[�2�!xK��� ��,NJ�2� 
'!� $�ܼd�F��������j��a�N��	�J1��@	 �P���`@���P8��3�,	�P�ʐJ�� �rr�<�,����		�[$%�W,�`Ho� �	�\A � ��� @$ �
� ���p[�>�s�VO^�Z�ʬ?*�<����x4݌�L�rs/�ǐ��	�K��+��R�$��P�)��' <���\[���X$���� =ʚ$�lc.�R�ӹ���]b������yh�&~�K�E;w��� E9�e�0�^�$� �'�~$O��a�9/@It��R����ԥ�dw
#ȿSլ�I��7�ʣ�+��Ɋ���Ft�S�:&�I����$��BYH�ob [+��䜈��8"�[�e %�2 H���ETA)
��=Ԗ�$�wѻ^*�����J��ǵ=U��L�W�޸�����U��{�_����{�9f�n�Y�e���p�?�I�kd��:Q���JIU��j#�JEY3��6�X+� �g�*H��)4w�x���)xI�8��z�j�i/ds�vB�d�*[���X�c�}mIt�WU+�K:�)��k'�5*�i�TF"ķ��4�u%Jrj�
ۖ~��4�)]KJ�S��JL�:�	D|�G�����骔{�t��jq$�"�T�Q���<�����{�Lp�-�J� ���r��L{6۝Β���=�M�	%_�|�[N�:�����>��]T�SSٜ� �U��Ī�Y�bZ�z���n�Z���U/�Jʗݗ���:��:��N��~�3�����Y
�ӣ��t�i�9��RM^�*�e���@ݓ�_��Cw�ꛧp�89��T���Jh�#o�6�1���v9��	�x �5+�}C�2F�
�GWT�\e�[#�π:�TՇ�m�����G�xE��9������n��j`�>$���m9%3�5�=mZ�V5&�����W�a�4�jW>֭��ԭ���׷������'��}U��q�UYaSf���kty=Zq�yW�t�ؽ��ة����Tr��u��*v0��H��M�d�r�`3[u;�Ĝ�:�/�DG�uzO"�=;��,��R��O��-��
m���m�D��G����}��9v�����@��    $  � (�  � ( �� � Ő�   ��G�(��<����� �`���� ��HQn@ ā �`I(�$�D� �D��a�� �,\,�@,�o`$.CȒ `�N.�AZ��";�	`(�`2 �@y DʀH�X�P$aā.N|�#"�d��>�,23`� 9ZD ^G� @䨏�w�,&X�96NdrW E#w�" 2�"�(�\�,v'%m �0Y+�Z$��G���Qy*�����&0Y�܌H�A]��T����#n,^}� I�ŉS!�Ń� ��HWW' Wy��e���d�m1�&X	S%��͊�~ /�F��r�Et��Cnց�D�n<�]�̩�Y`I�aN
���^ŘC��X���#��@�@1���NI%q��9����(sa@%)��p�'v�W-$.�Ei-������-M��Ip�-\�����~Õd� ���*&9E�XMV&��6*��K7vU�\�P*��3Jw�05K�\�S7,�j�j��b�ʻ��/qi�pT�"ɪg��h����R�|���Kq�0ӋX���Y�w.J���h�ف�dGM�6Ҏ�	�5E�(�ߡTC�Ȏ�i��Q��*ɪ>��y��6���-x�=N��-9<��SMQ$z�?`=58~�N��T�L;@Z��&X�i��H�^�P嶲b�d�T��W�M`�-7Y�d��ܲ6҅���V[q�V����n�+��!����J_<���� ��Φ�)t�� c����W�)�����*������Sp:��h+�T���uR�s���ڜ��w��L��1�4+�N�kq`�� %p8$���	�� =�9����  	%�p'%��r ��d��1~@;���7 k�>�w $ �8�N �	6���؜�����\�� *r$�C�/���Ï`�Hd�l<I�TF� � #�� @c%H%�lȞ�+�]�!�
T���67,�@����V�
�9+^Aܓa 
f��,��}�,� �<��	� �y!_q��Aa ���8D�=Ā�H$v��_�.2O���\�[# C.��������
D�d$��$p pR<��)  0'8(   ��G�"V	7��  )9 B���  &�8���-r��n�K����-��F�RT�,�&����J�'�|�uF�@�d&�{����$X��pI,N��@�
�� ��2F��S��M�T�y���J93ɺ����N��Y@��p�e���H������q	"9��"����#�@M���-#�L`c�Dd{�x����+�V��2�$��;�;
ͦܐz5�i��ዞ��m4�
3BL�+�8s�(ǃ�O(�MtҮѷ��K����:�RxQ�2�se�~ 4Hv�:��O`5�v-ҙD;�/b:�c5V��mSc]'�SyV�-��¯T�)zm@�M}�i�ss��T���� �b��L"/^�N�t7�-=G�v���?���?��i����z��� :T�M��� ؟ˤ���ެ���wQ��}��j�
�{3�W�oR��o���oq�R�87-�ʽܘ����槨�v*��<�YNN�j�<��z(����Ի&���R�F,�J�V+]��82ؔ���m'<`E�5.J�@�̈́����@V�J.���kJ�z���(���OQ�O�~OE���G��9�iSS�s��K����>ר��|-�QW�9W9��"r�1���O�,�'6���`5�S�&{!��wv2M�G`5/�upebRY��ݮ�*v�I��Nf}�J7/�O(��̐Y�"xVL92��|��r�#p���Q�IQ WS����w#��EY� ��33���V�W����\��7an�$�z�8tǑ�s>ÃU%'�K%��=�9�N��7>|��\���+�x����-�U�MĮI(	'&�"����d��b��!�`�[N��9ǃJmkN��2m^.q���SU��I�{����1u�����{3�'}��J�%�պi�X=����1WJ��'���=�-�t��� �?g�_��w�˶�
ts9         "�  � �� <E"�r ��, `.�� G�"�@)<� c� X)@  2`��#(�	v � �p9@$�C}���pɌ���pܩ�, �� ���=� 6�
;w \��X$ ��&P�
�A��!�pB� �@^M�	�H��Q�k�E��
�B́y$���/ Urx,�#�y���	6#�f�~�&J�Eoa�`��
�bZŋo�Y�	��س%�`9W1
�۞z��o�H4���tÈ'6.p�� ���@a�$8y@�K����!���x�e�'���,�!� L����y"��Dxb�� Z|�"��	ʺ�#�,��E�e��lI�| ���p�N��%�c؟ Xq"P�"�K%X��E-ܘW�
�� +s�Zn^=�.�%$�c��`�&����!��/�:�.ݑʻ �U�G�͉X`G�bE�j"���l9
��!�jW�iř
����X�f�\�&��ܲљj�K�8 �vFb!nX��H�d˧1cp�&���0�����(���p9�n��:T�O�6nX�BJ���5S e��#N;v5�b>gɖ�[��#���h�>v�t���8��>F�}UKX:�NI�B}��MF5ZZ�L�o��Y�}�Z���� =p�����y�>e��RM1ڭg-^<���8T�|�T+��:�o�V;k����>��+c�[��T�^)��9�k�͡)��r�b��;��&��	/	�G�����ly�2a��J=�]�&߹�KY�8h���iwl�[J~߹K�JE�qN��ԙ��n�m���kU-�b}����$����?;YW� I��ʬ9��B��� ^ ���c#�.II|�-�e�d^.NG�� �;�qI� �.9 =� ��0��.I%�E�,�� ^�FV� �9�pN.P ^�r�f� >�	^
�� .���F�h�N�d� s 20��[L���/x��
GHh��2%y%�|I2 $�,_��J�zm����%D~�"���,� $�I1vY��Y2@,��H �P#(���! �Cp <� AH2W�X?��,�v)!Hl �IX`� D0%�@\add^
� H��� A�\���И 8������&�@��|�� C���0 ��`6�� 1$y$����b�I��w=��ɩM�Ep2��0��2̷7Z� �jp �#�}�i  x�8%͊��0x����
�*l`��"̗�
���fl��I$��� �Wy2�;3U(3��}:�#�*����I�9����}��|IeN	�{�L|��y���rL�m,��N<JI�D���+�*\��+ �z�)?�z5�R�d�4�9=z��O#��eBL�J����z��T��mA���W��M.����u�5V<[n)q7=\I�ǫu����zI+�6�Iy/�M6� S����J��M8�q9���3��B�X�
d�w/�**dB���b5�����}�"l*�h�(���T��=O�`�*�M~[�z�1K������U1�=2�1,���ڋ���ў�H���~b���9L�V��/���J��RGM�M�n|�x~W�ָ#Mqs�U�(l�_�P�S�����i̳�W��+�WK����3�KV�sK^��:մ�qc�Z5��/і7N�Qr������:��U�V� �7N�;;\�1��Fo����Zʤ���E'�kL�&j�_U�w��:w�OS9�E��D�zo�Z�����n�A�K�����B�����:��6?*����ϳ��I�ҡQ��K�b�i���4}����n#���Y���ĺZ�==hs�����I��i�9���>�p�]�|Z�UM���k2k�V}��u&�RJ%I�⍨�'�M�ݏ�Oq�z�R�۹�j�*��Oɟ��v�_�Oq�ZK(�i⤏Ͻ�]�#�G��T���V�yD���������#�j;�ʞ��?Y'�/^��� ��� ���d{���� $���<�nt�'翨�|�=z�c�ߠ{�e�D����j���*e�g�����ɗ����u�/USv��=�����PO�(P��|wS���r� 8{�������Џ��rf����q=�ӫ~�� �G'�W�K꙱�=��[����OS��ϏCiٞ�æ�K�jt�^���EW��Ǐ�t���&r��5֒�������W���L���Z�N}nI��:�ٚ��Ckz��w9�j�V��l�ݮ]�� ���0}:)]7a���sR��їK�C:6���� r�{��S'V���\�,5�ɨ�o�tH��]ѥ�$��"��r��tk�2��+iv4�Ηci2�d�z{��]�g�6z�9F�� l#7�^���C;n��}�	3]v���K�G������T�t�T~�N�h�×j$1��X���� �  
A R7    �  � �H <� 
A�@�� d��  0� F �� ��(�� �� 8 0   NPo�(ԍ �����c>�B��	�RE�pL�"V� +p #��d) L�� /��&�BE�� &�3��8/7'r�X08ȸ Ub�i� "
E0_p'�����^I -��� ZI�<�8e��HŅ��-����Z/� Oci���<��N.nNu���dSqȞB���훑��=��x�2ǂ�l��aC+�!mLI�HB�$��̇�WP���Nq�8��r	<�QvO�a�6�L�HL]�/7L�34��V/s`/0�
d���nl�n�N߸��2&����v�+�������-���!Bx I��U{�|�;��^��"�����\{�6V�x�\/0iY4d�`|�Cv.@��+�'�nX[�L��5h3 UF�H�%]� I�Ax�;�Y*R��D%g$L^Y�K<��Vs f"�2F�Ѯ<���kp�L8mM�> ꪅ�P��vr�^�%S�ups�I��ӪTԖ�T�3=S�N�`�l������! +���4c���7UUxXU*�UW��n��s sש��l�ڊ*=ڭO-��Z�qr+�ܮ�9��-U%���U<#-s��VW94�pJ��^�Odʫ�M$� �K���~	o��v �x��m��&겓���n��2Z��1S�4�0g��0�^�k��j�T}U�0�`��=?�'�z��tQscǻ��q��T��:���g����5_��@��nHR;�� 0<��� �� ���y�l� -6@(�����'�@�FQ E�$H[`�Nm�(��"X�94G� L�ڔ%�G� ����@�!���H,Y@L2�,��@�S(�\E䫐'�pq`�� �($�G�G,0+d��ER.J�,E}���ܰ�mDv~I����J�'�\=�oȎŏ����|��@�^}���� ,؋�]�l��cL� ��- /D\�����_�;� WXL��.���	�@K�bp@)$G�$b�� 29�*R�#lA�/ ��/�  ��0!�����I!�($�(l�� �#B�&Źp&l&,W ��K��1�"�<�	��y)��>�F7�U�ǭ�g���˭���eD�2�6�9����5�����u|��nЈ��7��Y$bB�M��՗!��Ua�`�.�M�Y*�T� , �a���sK�6�{v�ϧ^S�s`�/6��c�a���"��H�AJ"��I=��o�G%x�$`q{!6�HI��%vV�=�G%ܜ�1f�d��r�<�L��H���J���%cɿ�??��Z�tx6.7�d�>��Q���5�2�=\�����tފ�::Lm��'���L5>�U8���ZMuJ>��&����J^Vt�P�j����3��������� J�t'69��r�uT�%�S���:ΝW!���Uk>��<�����ET��F�D�L�-2WW���\����&0g��-�Q.�+�+�N.�\�,����p9)��f�c�L�5R��y�KǱ�J�0��S'&��q�N�����S�L�T�F]�5*c�^ևVul�w��TH/��:����9ղiٟM�ˉ����4*4|���u�Pa�ɫ����t�9$9�^�˻Tu]�r��t6t6��:jxfj��$��"[*y�^�qMU���<ډ������Ay�+��r�3�R�rz��oɟ�Β�l�/Oq�z�ڪ��߱��+N�����i�{)����S�� ���)Z�H���l�a[w_#�_�K�c��^�^nj�N��&��+�J�����ڟ�����E�_*0^��/Mo�7O���C�|x��gڧӝN����D��|WħN��ڝ�U^����.$�;KD3?�|>Z-#?N��O��"|�:G�<>ӫ��U�gܧgGk�������Xx|/�Wf*ѯ	3�� MJ�2� MOdO�x~y���]�m5#���Bf�ӡG�?���(�W<�֝�\I������B�$��|�M;v��=�Uc�������Ouq�)�T��� F�ϩҗ�R�I��kf�rmm]8>�iad��Tǆ��MS�W2z��o�5\��f*�z�''��yE�rg7s�R�2��i�V �1�9,(�2�,�a1��\�X�� Bb�*��p�U�(�zr� ���\�zd��sh%��򿃓J��̮q��1+�驽������k����$��?����E�w�ǿ� aA$��8 8 �RG RP p9 
@�0  �� ��C ���*�� R � ��    �� + ��  ;���� R� A�p@�t��H{� ;�w#� �
�sŀ&q�8���@_#���!r  =�q 8!`q�	�� ��d��  {g" !r�knP��Lԓ�Z
��� �X��;0?@�q�BX=��_�"�� 	��;0p���'�<1� `�%����2�(8kFI6 Mв��D���#�r ��o'Z��S�*1�9AIV{���(����q�5���bր���v	�L9-���7)Ay�
�@��*���ࢤ�I7� �T$!�%?r4�w$ð&<�ȗ�S��y���tW{\ĮÈ' &,���l��w	6�q�G*_�J���9��.�%K�i�L� ���R��h�0���v\����v$@��2�@T�R|�_0!>ˀ,@�?Re�a����r0��$���"�/$O�);��0�ԤH��Iy �9��O�䝮P��8Ō��,������n��ƽG=�����'\|����'S�K���Rz� S�r�j���Rz�ɉ����1�z���s=I��c�m���*rW�͜�l�v�����T��s�P���<�Ԓ�\����jp�CF:�M\�QO��V#_m�EZ�ݜ��M�Z�sԦ�͋^�uJ$ۨ�bptT8�i�UIո�RTs�i�:�����^;�j�4�Y��.�6����h������^���tni�ʧ|���e��|#�S2��Һ��[��H�G&f�#M�驽D��m�� N{�IY;�4���u\�R3��xꭷs)9ͅW�b�x:2��r�0ʉd���*B��.�K�$^@��� HGa�, R9 �P �#�d>�y��  팇,�!�9�� w %�RQ�ߔ`�%  ���-�� c�H	 �p*�$� D�}ǈ; ��X�!����"|�H8��U��l��nN��1tC��%�����\{��'��/�6�^�a��6=��_pd$��% ���^ �"#��J$�a��H����� ������ ��%"����-���H)H������@@ai���܎� pF��� +�`{��
,��ft^�E� ���� E�@ ��H�� � ��  ���9����9 K�7 F�I�ۆi߀��yu��[v<��y�b8����²�O$n�&^b6U=� �H��@�#v/�F�dX
����"&V�#��ٰ���vAK�Ts>J�9����3V%�y7U��ݜ�u�H���r�sm"K���g���]ˀ^��f'�����A����`�G�PHk%��@3c,����\��W��Ֆ�k�%��\��*�� fiY�CB����r|ݣ^���O�� ;]�����/���� ��_����H��[?�S�u�e���}O��:��Y��a�|���w4���N��[t�Z��/����2~�[O��u��~ymj��o�T��\���*]��|3��VM~%}�.J�nVB:Wi'�E�έ>��iZ����^f�'�g��t��O+���i�+���m8<��:ӗ���uP�1Z�O�����}=l�ܽh]R<X���a����k��EK�8�n�LT�>�A��rQŧ$f���V@���"��f�v4� �Eb�
�+�Đ��	��rMJb94J�p;mv��V��Na�~��Wd��i����J���l�])���� ��F)�Ϯ�\~ws��ij:th�q����q�W���7�E]�MZ�T����Bh�CM+AӦ=�	�G%�B�%�N��GD��Ga�	R�E�]��
0U+��S�4H�T��Ja�ȗ� e.+��,<�y�y�I��
@��,�%y�&�F������@�Av6����Y9�u%H�K�"V��e]�"�|���^�Jr�T������P��L�0��P��5	�ءT*l�-S��Cv8U�3-��_�hbō33����X�U����
ʥ'sQ��'`"�V0��*��X�Y����F�Ǔ��Ӫ籞�M��G�ۗ��Љ^�HI�g��Q�_F_���J���Ï�S%]Ͱ���  H   $ *E 9  P H�a�I�  �   � ��� 9 x"�\ �l0)� p�xD�� ����8 ��X��Ñv ~��%�@X�.�B{01�(p�!@%��H �sDD��@p��Ź(;Z	l�� ���Mܞ 5b%r�p�,F�$���	�L�@[�$^ �Z̢�$Y�����6�?A*l&�]�s!��бp�+�K�p�[,��x�Gp��W��"򄀲�!��X	U���Q»�2��J)E��_�,ܶ�p���n� En�UtK0w,�3�^/�D�pU�, s��Jɇr�h��|��/�*Y��p3C��_�+�@U|�x�jQ��+_��fo��p����=��n@�I��w@��e9J�n��f�Y	�%r�~	=N&ğ U|�{!� Nn��R����&���{m�H�BO!�����*n 1NC�E��'08��D�d�ĕ��^6PHS,/!��b<���N�%�7*���+ i�Ff��Q��jґG=Z���z��:�D��[y��7Swf�wff�T�w�4��Eʚs#)K�V� p,�.�#j,��N���w�%�UQ��[�*&*]I�5�Gw���v����:��D�̀��*m(X%R҂;S��R���m��=.��1ҩ9VュBi�D#U��9��.�Zu�/�c}M+^��I��S��v�9Ү�4Լ��TI35�-�f�������I���5���\��r�9�'j��ȒN`ܩ`�,���4ۂD8e�J�Тk��k���kJ~�#�S�8sc���6g�W��	X���ܓ�^j�˦� �FM��}5J�՗��HB�0V#$� ��'# 	��``p0..�	y����EY ��@�^@r  ��0�dG� � ������AX�D��I [@Hp09�  ��Yl, Y��0FJ8
�@��"�. ���I@�d�Id��@�=�+\�ܗ�. �T�͆aزW�b�Y���r���a9	rQ�"�W b�6� Ww��Ȝ�����l,  �XYR�[� ��� /!a��$_<� %p � (�\{���, 6l@� ��G�� $����X� N�<�$������P�� NJ @Ke$G8�J$	@ ,������p'�G �dXH�� 2 ���.. ��2 XH�lNlx<��,�3ͬ��{��>L8���Ď�ٗ�K^�l9$9����R&@Ig���mρ=��,�Y)A�9
�ʄ�)�ǹb�� Oa�PWU�ͫ���r�Ӕ��,n�������}�=¬(�! 8�	����nEi rŉ�`���B�$\17�8JX��G�R�����y�qS]�%V[V�U�������t-�K�}��ޭ}X��4=�D��zx�H�����'բ���KN�*U*Р���;�{#;�4>�ѭR�cy����	Lr��;��n��x��^�Z[�oy?]��S���&z�i��֛���dץ�H��:���mbN��W��� ��ΘH�-Xө|�Z��1!�����\�&�*$�
�z�pk��+�S؊��I>��p5q��4)�����9��l}MWԸ��o4��o����������Og���p��-t��#�Ҧ��t���V��$���
�x���j��'��t��u�oC�G*��>�S2_����ᩲN���=[J��z��7�Ol5��ѭ+�5%}'�K�ή��5�E��.Ƕ�*n!�*ӷ��������T�L]e�B
R�'$�kj_����� =�����q�����5EIՃ����;�j>.��h·c��ҵꜜ[Mv3
@��T���*���s�D��[��H���O����גOb9AW$w��W1��{�$�^�������͌��~f�5�(J���צle��;��^�_���u����56:J�=�z>�B�ux:S�լ�<S�|��	���?�Y���^�<�O���}t�U�_�OQ�n��m%�㩨�x-5�)d�r�yഷ9GMGE��<U���V}>��%Ut�g]3�KV���q➞�S�/��~�=5Sg�KAԤyON-�GZ�X��*��`�骝^K��=2�2���sl� ���ew#Q�Psw1��F*W(�Dk�N�J�H�_��)�VB� #���D| ��ՠ5ؑ��{�5����}O� ��1�g��Mĺ�ͼ��� 0�#5��K�p��,#���[��~���?�=��r�9*��  ��  �        �    ܒVH � A �(  � 2O 8����`P� @_`��  L�� ���9"���1<�@ _ O�q�"� ����<��J!E �  U���rr 	 �B����
�@ ��@Hw=�%� r�ĉ��D���� IR 8C��\�	+��?a~�|���>��-x�8$�)�n�	B`�,�T��c����#�%�;�<�n`�o�I��,�f3�Ue��M��[��MM����FW�V��F�,J�C� `O��0��*��W�1�@��`$��`[�p1���Q<24��nT<$D����ْr�)�ʾB|`L� X�[�!d�V�`Gk�(ex��D9���w'2\M���Ą���n����pa��!���"����;�!> �
�,�j,`��Il�`�8�������؊,�W �:e�%�%����*��w,$�Z��%�O$�0�2��]��"/9#i���"o�,����p��p�X�u5h6rթ��5u%T.LT�
���.�y`j�^Ƨ�K��e��,1J��:P���e���!�9`t�����	T�nY�d�°��М�%XR���əsobĩ��t@mrb���T㟃)�o�
�y~���YM�c)�K��A�L���a�R�jj*U�Ԥ�k������V_�nL4{|�����_�Q;�v5RJĲPnஞ�]`��_�pb��r��'7~$@j�� C/����P��i0�2��ń�b4��Hu/��M*2y��n���׭���թ�}j�`���b�
��3����r�T���~N���Ҁ���	 0���"D� E�Af�l��+��|�l�7��$"�Xw 8��@@�9+ -#����W�@ �A< �܀U�~�p �ve����f����\rA%�"�RY�9� =�v� 8"*�Q��b> O��]� ��;@6��_��Z
�N�y�$��$> ���&d9/ H*baY�m�"�]�=�;E���G���Ƚ�|`rR�����pD�n@��(]��O����� 	'�%@<X�|Y\�V	p�d,�� L`J��� � 	e $IB� ����� �?b�� T��r�`+!\�  �ܤ 
I 0
�#��@7@����[E��` H � 
�8"+ H�GqpKI�nǟUB��g|@�ĥFrt��n�Y���M�3=� ��o�Āp�	�݉�l����/>	ى��ǐ�aߐ Q0��+J;�Q@L���	J9�bJT�U��ҷk�ģ�n�r8�� ��7C����� �E��u���XM��\
ۋ�b� M��Ҁ%���@�L<�"�A�͉ wO�4yj��E3П����U�!/�哘 �iU����kMZ���m����7-��f��k� tI�i�Ż�g�o��=�i��1����ȳ���m�*��SZ�g��o�{GJ��1�:jLkS]zp�������Q�'O��i�q�Z�/�4UZnb��L}ju�ևfx�����k9*=� ]�>����}��v�׸�r=x<5V����d`�=��˒}y�����$z�=�nQ?'�s\�f�Um,�}Z����%ҩ�����M�>#�h����-���zu5��j[$W��2=V�����凪�0z����G��g��GX����2>�ĞGSfUW�=�qx�/Y�<��̝@zޢ�:�yz��T��$� {�4ӣɊvҎ��pzt�N��jk��m�
LѶuE��V���;j���qyY��i��Z��w?C��J��f�=I]<��n4k��cè�*��>�f�z}m}ju5T�������Vfּ�`��}=��&�<t�E�赩o,N���*ƺc�צ��Ӯ�K/��Ш��%i׵���Y'uT$>���͙~�|�)�t)�]*ng����k]*-���s���Fu5zt�싆��k7��V��r�s�S֪�����;W�ݭ'�M�<������Mr�v�>���z�E4���z��{m*(zu)q<3��mjU�R�
��ѫ�R�jMx:*��Z7N�[��N� R��[	��J8n��zoɣ�*Jfc�����	�����=�C�W����)��Cw�kT�O�^�7#��N{��'��P�����]'�sUr��٢�=;zz��<�8G�c�l�����u58>֎Ίtո<�Jiŏ���0H���RЦ��d�*��?A�i^O�R~/ň���C(���r��&Y�T1x9�<��vɗ&����D�'65� 	��'r�%%���@+�6*"��,)C��=�m���G����߹��-_���N�H֪}f0X�}_���z��Ҽ��=}J��~�����_���B�� 
   8)
 0 y,�       (� #(v �  0`
@,�@��=�� �  �d���r9$��Z$X�!�̉�=�`R������� 29� fP��I2 Xd5 ��a�9 !�  y� @�w�  � X>IHǹ	9�������p�q�+�K�b_��"@���e���ˑp"YP���qa�@�p�9�a\�eg�M�U�� b�)�������(��1.B'�o��s�Q��.a�9X�/u�#�>Z&0V��!��e%˹!�d� !_#�� �a�����qb�����bRWf\s��X��_I��!LqdIsh,�		��. K��E�w| w�G���$��P��	�|�~ �"�HR�J�Ogr6�5�NrWF^}����ds�J���/!�R	�D�7ܕ>�
���� U{�`�rp��7��͂��7.��b���"%M��L�b�pJ���J�v� �Di񂎬����̧v��Io�;&�3-(���p�sA٣ϩ�̈́y�nmbE�M�s&f�Rg�6��L�>96�ys�k�n���<�T&��G����KuM�~L /W�$�p�ݜ4I\d�ܩh�b�˹q9����9E�F�5��jW����+�2������	��T��� �z�jk�橩'��oi5u/��^٫*ls��_?�a.�Soh�i�rz���k\�jniԒjKV�Q)I��Ԣ�S��&��T���S ���\Nl����\�UZ�j��36�MH�7
ܑ�ɕT��ɩ[�eU�5+���f�4�[ɪ*��y���諜X��֣�ny�Mٞ��k��S�s\�sJ2��
O;��z4�IX�#���	������,\�Y�b亐-�����;�d��� �$�� ��ra ���D����E�! B;�2 ]�,.��Ga���Q�����.\"+��k;���H�"��ȏ@Y�� �&�@@���!�^u�7��B �_�r +�; � ?ܶa 8^l�$8L{�
܈�¸�d�]�Y���v�Ү|�#��@.FY��_^!" �%H�V�����%G�3b����� �{�� ���C�#�^K�D�v(@�(N�X�Y�؀�rP� � '8\�IH�  ��(pX�
9�
�a]d,�^ ��O�BR �+`��$���B̡�� � |����#�) !X`A�RG F�k��]X�X㬗M��֥��M�g��Y��2F��f��8��j� ;22���7��@�^ Zł��~	�cV��IR q�]�܁�E>�3�J�g*��]�p��X%h�;^DϹ��c��Ć��/`V�ؘ��i'ā|��x������J��K�@��]�#
譤����SG��S�2Q���q�4/�{bǋo?Q��3�f��,@Bv�{0#H�*n��Ē�H�W�EyJUl���/c�Z�k�5:�7Sb�0��*�V��}��:i�]wS#����R�I��3�ޕ7�ʭ���ԧ<�"y|�ܝR�ϱ���U�>�y�=6���S��^�2ܣ���Z��[�p�N�r��u1��U�oG�Q͢)e��/Ш�K�o��a(���I�&��U�*��& �Q:����V79�^�K�m��UW���'5PN+���i�*~���nU)A�6h�+ۣ����EhR��>���J�8Ӹe�w��O���诺?U�H���Z�b5:����Z��U\�}���QsJ���Ua����ct괻�^��S�Q���d�ױ�u\��`��i�pmke���Չ*Ԃ����U�1��S�:S���ը�$��'D,J5/&��n�E��p���'��1K~��
������Ի���� 	������s=��F�J�)ҽmK�6<;v֜��מ���z��.b�ϓţR�BO��ꛦN��Ղu��]��7�y���`UTIº��\Y~����8:�G8V�,��Uw%.�iL+�TU�Q����}=�}ek/E5v}?Ok�##��*J��і����St���'��	�!�7K��SL�G�ު��z�_J�Y%��?�i�L���V�i7,�N�Ԏ^]u�h˱Ɲʕ(�]2��h�v�Z���K֫��v'2�=�v��h��L�_�˷٭�n���5�^�=IOf�l�f�Q�I1e���\@T*^��"�	^����!g��Y�njϹ����R|�d}-�?���73��k_R�G����%O&]��,e�D���U��� É���.��g����S�d �
 H      �(�       H` ��pY/ A����
r�8!Ipp   /�D��+l'ܸ =�U�@�c��S��G�C��D�İb�m $	i����`� �#e�2�	@8� @���a"���Ā2& r ��b|��rRy���p<�m��� &�{�l ��ت`�	x*v�.�<ܩ@MH�C��#�r\
9�l���	'� �.�q�*��̹�M��c���ɧ'J�q,��^&��U����pI�Z� q��Ew��!n0��]��$ρ* VS'SA��h �����|�_��~���@��U��$�Rݐ�H�ENU�ߙ �IXs2E@�?p�ļI�o�8 W&|�%�8��̒d��y^���J|X4ӰZ�&�ye�L���e�V��I���@,fH�Ùb���E)�duK��Yy��D��x �eĉu+�6�ؓ�"E�HL���9��<{ �$��Ia܍�Xf=�x˹C��L۹[QbO�$������y�n0A��WT�;W��<��kB�m;��muG,<�%�N���6Q�r��ĐY�?r6ة��$�IB[�n%S̴iF_`$D�
�O�m܁y��d��գ�"T���2���ҥ�i���J����KoW��$�t��>��	�M䃗҅h'������n���'�b����A�:�V%�71�Q��٤�Lv9׵I����>��*ny���Rg�Z���d�Ւ��i����զ�(���W]UT�oؕ�Z���|����bֹ���s*�S����M�۾ĭ7rӉL̥���4��s������i�Ǫ[:�K9�,�2�cH�Q�q��gJ�3�P�����EPy��u���`�?��1�
ʓ� ^2A`*I!$/0��ȼ�`X�I�'�6D������W��H� �̲��X �C؀WrO�b	�Q�m`�p p?�&H�����Y/!�0�dG�/ [��"�0=�{�d)������!���(ے5y+�@�(�X7`(�pd�C��dK�\
H.ŹDpM�d	�	� ��e��K���B;<�R x"W���yXx@Y����W 012*�H�.�vb�b,�̑D6�2�0P�p �V��b	"�{���VD��)����,rP%�  E���Du@O�)#�n�  7 0R\  }�Rx6.	`� � HWR 
8�e �, rN � ��� X8��G�v9j���᭦����v9�*;#3|�,�Y@e�o��e�.��T�G �Ȼ~�����W�dn^ \�^
8D�IA �D�&�d$pU FCX@f�rq���UԬk��}�p�*��x)���3yɥt!@!L�60K��4 ��#�$|�'�y�Af� ��l�>�����2<�7�9j^��3�r��%�đ3`��.���9=��#��R�R粝}>���u%�3*��g%�p&2^G�'�E�P�@��2|���<�;A�`De��5]ʬ�M-uv�u+Қ�wr�]G�We�ݔ=]�VMf�+�9T�����]�t�X�գ]-��c�u�K� ���җ/�����j���/��54Rm��ע�0nw��<�ȓui9�L:�L��dm�(�{	�d`�?r&;{�:�)�z׸W�ѫ�gf��f|-�&~�b�T�0�����R���۷�1����?�R}����OԿO����G�}j��������U��_Y�]��U�	d�
��fE��SXe��滚�aTbON�k^�=n˂I�US�}N�qZ�O�q~�=� ��65���g�.&���W\Ra��a���������v�;���~oV��s����juѫUU��J��V��T�T�J���P�J;���k�k�m=ƝIޚ��>v�N����c���AU��+��[9V����g>��kTP����m��W�QE;��V)�r����?N�z�껿��G����N�Z�=u^�Yvg���nv�Ӫ�����/�FW�ĉ_��z}[{�i��M��}-�㮧M*��Z��4���>�����Ti/c�Z覣���?��c�>'�W��~�S�Q��~���o~oyRu8�3�H������m�4�Zs�"jVF�\`t��jG��ږ�oZ��x"�t�%}5����-�Š��UQ���Z:��Zj�)�yj�ץ4�K��kc��qUU�MNm���j�	��:��[K'��SuT�I���MAe`�7M6�Lkm�B�s����"\�@�]��ap� �k�ϣ��v����V>��� ��ؔyj�������U����R�#/��qN�w�����1��3��3���_��2�T2 �!X � �@ $ ` P 	   $� B�   �  G����@; �Sؖ���?q�(2Id�܁>
��P�O�
@ 9�L +�D`9  �w-�8�d&�#r ��D  ����9d�x � �`�p��v!��� Gv��w'9 
@'%�@������dȶ�pא����0� �<�㛀Հ7|�B��,�7؜\bQ� .���F�`�y,�M���	�GsVfa��Aʬ���Ҿ�8��I̕>L�{��C��C�br؟��LsvV��O,<�@E��%�A��I�����L�\���'��� �+e�M�Y�QfpL�S��A`y����;b���"S.qǱ��������W�@p:��
q""�;s#������	l _T���If�	r^��fD�H��Nrq�9r&,򄸇�7���IE��f*��s��&p�:e R����Hx	~�V���[I���,������%�
����M?s-���#i#3/خ�� U�^��2�#���sͭWS�U���I��䪩w�F���M�eT�Q�؂���&�$�0�]NC�ɛ���y(���d�������~ޒY�T��b����G#Ѡ��O�ӥ�n�ij.}[�
���>%�؁�̲�$;)`UyP��p� /�j�.檤�0��W)۔�.�O�� ����mSΘ�Y��j����^d�7%@x��)a�R�i�ۅc-�Y�-b�:��#P�u}�
��dk-�ER�6ä�˟!c7#m�0���R�Y3R
�Ws�n��ugɨ��Q8Ds��� %G�!�%	�`2rYIr���&�������* �@L`��� 	��B�p����� ��G$iw$�
��h&9�B,_p r	BH #�� wb� �{��2Ș*��
O��C��C�Bl��գ��j���,������fL�^�E� ���K� 8�Y�ȺKp�À"R�M�	�S'�� v�ؾ� �rOdV�p�"�F�/��� �X$D.	���!��qÑp*K�D0+�AT��C��d ��B
  � < Ce�-�@�A� �"9+@�2� �&Yn@@�H Ƞ$P$�G��p�B�?�6�p$p d` <�n ���� �,� s`I��  �_�9$p�dsԘ:��?-���L���u����R��e��#m"�7.����n$�/�{�Ypr,k��L���k"s%@J�$���v(x/L�=kB�ih$����=�Ev5�px�/�/Cwr{V��}+ׂ�6�g
�d��讖|����Ú�!�\"g���CE' !���(=��� �\E����ȓ����'��l(�a�@��B�ܟې7B�Z��:�~L��rJ0բI0_r>�mj�O���R�N���}}jN"N?��ܵ�Ә�U��5+�O�o���tJG�oE:t*R��CQ`ߍcҽ8�0�s��C~NU:[x1xjt���n7��𾕀�����2Ap2LTd�/�0a���r3`��L�cmrF���ͩ;3�Qr��J>��=5�}L�`�˪��8ԿC�T��j�7ʨ���c�F
�UP�Ў��;�.���RN��_�$.��.��h�N��}'�b�,��܊�r������R�����n~oM���>ϧ�4��n�L~�ӵ��>ֵii��k��I�����T|bϷ��j5]_��U��_����RԅU��o�UT�Y$j>gE�Ѷ�KZN�c�S���i��T��	5�����5'"��CL]:�}ϷB��h���t:t:�p��x�j0�u��� MMt������߻<�Է�A��}=}��)�z�3{�F���:u4�� F���M��������W�R���>N愛�(O�ǒ�x=z��]]ĮNC�����&�}/J��:+T��}�N?��'�oE:T����&�M��GhI'��驳�J�"{\qJҰEvw�I�e��c�����|\����#���t�:'�B�8�sԪ$���:J��F����+�֦��I?���h�>�߫k�WEJ�s��R�W�n+ӣ�[�1�yׯq^��nT5�⢷]n���ŽM}_����z:zp���#��7�F��ۯ�4�>�'�?��|�s�=��ǫS��*�#��,?���J��3�=0§J^Y��+����u�iWl�ק��ҫ�c���ժ�գ��{�T�Oڲ�ĵ�� r�ަ�S��n� B�:֖�]4��</M9�D�Z4U�SԮ�г|����f�V�I&lP�!L3u7��@��X�x�T�ejV���f�kd�t%Nڅ���.O{q�LD�*�M}���I��U�~IZ|!~���� ��>�>W��gN.}W��ǟ��eHQH �$   ��A  	    r �  r � �   ����=�� ��d`" �x( 	x+%�@���2 ��0 �@ ���D�!HEP� `H =�r��1� r	 �r�+@N$6� �2L�lN.�~Cp.Bb`� � y	K����	����/%򐻸��'(q`k�Jc Qr��b�"ܠ�bFH���؂#-��s5>�q�σ+9F��r'��ŗ��ty�(L#-��56�2I�`<`��*���O��s?7&�`��33k��2Q���e�rL�(���Lį�.��]ªUَ��H���U]��rH�lu7�.PGb�H7R; ��������1|�&}������v��ȳ|��	1�/��&U�W7*�L�O����5(,]D��Q1�5d�����6�W�Ť^]Ǻ"wh��a{��o�����M�	j�/(�FW�<�C�c�e+,]��3!���m���ʐ�1UH�yG
�D���|.]{Iº�W9���G��O�p�ʳ���y0� P'�d��w%�]�UO��ES75K�pe�M"��@o7���No�6�QZxX'WO�	�<�����fPO���A*\r��Ҕ�J�ݶN���w����7�Ǜl�xg�T��o�;/&SS�lʂ7`�D���2��Pb��t�G�qTL+��ժ]G�q[�����Z���O⾚b	"�n����s�ɭJ���Nr+q�m��a�r�,aXw^;�:ʓ5c(�pn�a[��G:�cq���B164�eB�(3,6���(Զb!��iY�f�.Q*ęW#b�v��Q��(��Q
��lNdg!yC����nɂ���R��Zd�[�قC��`�H�@%FZ���ȸq��n� ��jC�d��&��"� �bĀ� \��H` /�!Hʀqa�E�9h�
�����y� �y �`?Գ���� $��p,A� Q�y���[H��I@U������#��(�y�[�&�y�%��<<"� "H���$��32����$���U��U�[��PfQ2��2/"� D"�'��>@�BHL��BlE� ���`����c @�  ^ @���<Z��B� ��$���l�/� � �� �,`�(� '�)$!20(�BL
=���  B�� /$�`��   p$�	 
fnX ��L�
N@��ƣ���&+@xu��絛���\ܼ�x���k��-\�� >C$�0-�uһ���m6�9��*0yj�MnVO5`A=�!����=Z;I�¹�ہ�,�%"� $��  ��) o�l�:ߙ��SY�1'��sT�tᔠ��������W�>�w 5bKJZ+j ���B�,H�r�<��c���)�Y���jG 	6�{��X��@V�q ]?��3���TZ��b����.��i�����T�n:�����]4��SVL�ɩ:0�WS��Fx��W�:�:��U��U����B�'Ϧ��z�����]ލ1c/A��Պg�_U�t5��M�J2�����v�����V�,��S1~:��<�� ���9�x1y���T��W;<��:��z�s�]���IG��R�µs�^\��^�sf�ló*2ݑ"�i�FXThɡ
.��T�/r�V(�Q����[O1�f��0;�o��j�m����>���F��nt�����g�K�#\���U[�j]>&��[���-��g�nQ�pǎ����}�=x��Lp��vF�νOs*dz���˰��ͷ�H��3в�q��N�9��p��^��dԦt=U��Vl}jt���BJb�-/K�kQV�LR�'I\�ϥ�V�+����1�����rΚ�z�p��Ξ�o��db�Y7M=U~g��p[��G;u�C����H4�{��<�#jy!���0F�&��S���gCO��:����U�V�V�*��M��|������Zڔ��)���#�V��� K��Y�_��sH�>��Uj=:o��3��Uyf�R]��p��ɤaU�9#ŉ�I@i`�7q0�G�ɘmf �\㹯�.����n&���jA���^�N�	�S?S�����6�N�����;/���u����B� s��z�ӧ�QU��tb�;����ip�po�q�M�/'h���kp���6'��ȫ=ʽ���YVaZ��"��<�f�g���`�|����5/�T�>0}[i�,f��-6�Z��CR��L+1��m�Z�t��\B�G�z��͢��g�kJ�O�駆t���;��G���|�?Y�V���� ����*Т���3�/����v�[M��֭/?f~b�����ٕ�t^�]U� �|�����]�k��z+�iڝz�w7�~�M����fk�g�W�|
=csB�]��� K=Z��Զ�_N���f�]G�����h�ӭUK��V,� H@���� HP   H2 @� =� @
'  ��),� '� 2 �ب��ap   �NK��� (	�p��2@�{ 1 ^	  � 	 R��� �r ��\���H�A�#� �@x!��  d �sr��;���, �9��8��ג�JYBL�^�$� ��+ �/���I�<1y �q͊KH,�#�1Q����s!�w'�rȹhL+_��|�o�Q���@���j��13vI�F���ET��[�X��:��9�ڂD]��Sj9'SO�_��� B7�������J0I��v%^��J3�.��$�W�e���٫w
"އ�ܩQn�7�GN��U����.�� ׸�{�� F��Mđԗ UvWTX�m)$�B���Ԗ�rE�D�X��]O���{��a^H���i
���+IZ$��6c�	�[�B�"Wl;���l��05�MY�"D?p#m��!=�ߐ
g�]L�:�)D}� �k��bĩ� L�������e�F@��%sͭT6�;�ۥ(_�U̷��#�n�ד=R�� ����W���m�3t��IO�%�@���X�a�2j\(��'��͡��4�\ayľL�]Nl��ͬK8O�	��$`m�Vj}�����8Y+x��u`﷢��Lbj�={Za��U{�����Z-y::�h>���=KT�$GԣwKMR�t�q)͙��:륻�7�Mxoئ�IN���U*�O�Ѻs�yg���UT^��͡LM�P����E7��n�e�������ԓ_��4۟�����Q�|^*��Xbeȧ3[�2��I����G���9V�1Z�s�s�St �R�me����MI�3Xm�'9|���i��0fyd�*�GE��9���-T�y�����V5R�c�,_�,�!yW���$C�J��6 _ �%���x	��a��K ,� G��p/`&0� ?#����#n�a p=�H�NlT�"�bG7 �A�-�D�Ď@R��R(@���%�BR�$�^	�{Y ����$Xp�8� B!}��|���n�.��o+Je�A'�B�$U�
��q��	��3���O����$ʰk"@4����S����%��`2Y"|���$�����! ��Xq�_��R\�
 `��M��+�;��*�'�����)�� @%	@ 2��Xd3�$�@
F� 	���& @�=��� adx 2! ���� �H(\��J��������a@�@��% @@(� ��a�&���@x������Y\�u!Q�ɷt�rY>M7rg$����	1�Zr#��b�uI�)8ט=6H�j~y�Dr&���zv�<�h;��p=��XM���e�������Y�+_s��[�������ۧ	�?{����%�n��2݋�j�()��K��`���"��'��x��	m"�*����r����W�$n�ZsΡt�Lj;#4s���Ng�W7���%]�꙱�X���9v��NK2tsX���$�	�����嚦�M�ex+���K��jRϗK�s�ҝWܣ��o����-vk��$�/�p��v���J���z�)��b�tҏ-i6�U��0��ǆ�9��-J&�'�-�(�</��ԡ�yk�G�zTՓ�{J[�<���[���>��ǔy���Sx&+�]ΕiT�'*���]�L����V#F�H0��v ��m�f�j<�����p��nj�>�K�/��� 1{�Q��c�r�e�7���23�1tt�籪RY�����0}2�:hS�]ݹ������j�@q���Uun)K-����G��U�>Ֆt�-�����[�zh� �o��wOCh�*hKק���eE�MMO�|/�������W'G?����Z�Ϊp�ng��n�Ó���Ǫ��,[dʬJ)�&��?�F,���p,����yg~ǟw.����p�z��N9�˔�w�݇��J��te����;}�UDX���{e��Tl�UQU�>Q�o�[��7/n��']sͯ֫s��Q�pv�89���i�&�S�v�pjy��Z�]���{c�)^ϸa�HݠU�C�
��������S�T���%y5�S��,�o�GGo��zMLE�?����z꛿��Vꮾ���4��1���<m儥��UV�e��W� ^�,�[7/� ��R#l�)acVX�I
|�k��l��乫�0E]K�٭zT�<iMJ-s٪���f�-9+B�y4��ʹ*R=�t?$\���9H/ Y��K !2:S���B��֢��S�zjO��T8�UחN�M
����G��}-���jZ{�z_��Znpf�9��3|�ad���ikQ�JtԚ|��O��wU�*�tsI��{�=�MJyGiԮ�V}ǳI��q$�@ �A  0A   B� @ �   )
@����@R �!E��$��r\\0X �`�� �ȋ�X�H�r� �H�PG��F�����0�����@ pO�
K ������B�D܍���e�&C��{ �C B،�����A|�&X��� IL�����D�
H+#�\,H��^	�A�9�ft�ο!j�Z�L x��+��� m��4� C���"�C� v� ˫)�ϐ/G��G$��""�d��芸�9�J���OIQ�d���<��/~�^D��ܑy
����ņ��Dk����Y���أ�}�'1':]�4����P���ͤ�]��m|��\�Jn�V8�V"�)���@�9H�ݳSl{��x@fntNNM���_r
�K�w%����msk�@+���ل�O,�� �pw,��3�����J݃Ǔ.`M���� �V��F�I�yuv	�ĤɅp���L9�>��-+dz�D�ǭ2�{��E��cɩ`Mʀ�9#i;�R��Q��m,X�߰ua"�I܏���ͭ�}�����E.�L�O�Ȗ�d������3��t�`�T�Jl�]J	��c�-�� �Q,�����zu}����b��犄�����0=�]=)��W�Z�^��u��{��N���#�Dx���SLz�9ʌ� ݅�ҝ�������CO��{]/�B��J�F�o�+5�J�<:�%��Z�8g��D�sv�2|�Ӛ�OZ��7c�k����ec���6��b���iOV,f�EY�i�� i�ldF��Q	W~�{qo7:;K1�<A��r���ҷv�9T����;���g6t��Qҕ[������Q/�ޯc�J
���;��|@q�� ds��2�����	7,|���%��)��I'�V.�x�y �R@ 7H ��"�c8
r;fB]��m ,�&�S��^K�$؂��J �!� ��	�k�	��&�+*C�-�p If���Ki�/���ȷ  �����NI2\��"P�q`1* ��K�� �6�nW��Y�VT\'� ��I�) �'�4�{�"���d���{�" A"�&�E����� �v �0Y�%�,rFāl
�L�%ܸy �@� ["H�R1|�	 S"݀�6G%J�$��`�� 6&�d�C~	$�� �d���`�w�X"G��'$H�`knP�#�,@�
 �� �� ��Pex�IV
G�.�Y�k,�n,�;rQ*������r*�y+i��~;�li˪�c�zU$���ny���~��'�Qː!M�y �R�'&�iԩx�>�����Z��5N�p=%�T�ɵ����F�=J`�Z�����qϮ��j�&y*�s��ӆ]�"�̒�ru��<��X�r))8L�N�o��L	���s+�e�f�� ���V	��L�`,�>�,���d%�kO,��&�]�Zղ�F0�y"�U�t��ncT�I���r�_�a��9:��@��q 8*3�Y� ���E��*V�Oa�{"�F��^�e��Y���J�Ȅ��_b؋�fU�$����)��&+�[jj�2p���jn,{��#s�y��>���.����i�Kr��%J�e�����-{~j�:��h÷����R�L�kl)�E*�:��|��\���n�*i�<��z��}I�&5�˘�;�`�^?si�ɆU���R��ө�v����e�}F��K��C�_�{�~ܲw��H�G1	ل��,Q��}o�[:5�OR��]S��\�-U�Z��ԫOR�4�:ĳ_�����Ue��M������cݫ��믧����]���M:Tt���7{�I�9*
-O�Ii�ɣ�x
�8�Q���e~>%�Q��Q K%0�\ |��"�5�b�M�������J��w������h4��Jᕵ?�a�#�k���]T��QU��g���V���g�R�0o�99ׯB2�4�\�=
��={�V9��y�\ɓ�����V�k��5p��x����<�wR�g�/��Gܝ��0{^�<��S�"ҭ��Ko\�2� ^��=��L-���� Kn��Z�U��w���&���'\�ʅV�8�S��E��8�%����`%.u�=����x�I�LZ�p��Ō�y�52�'b���b+�;�$�U��w�w�^*��?)�թj�ηRӖw��;�?s�hv�]T�O�Q�ԵөR�=z^��NkO�*N���K�Z�����U����3�c��(M?QЭ­{3�:�ԭɜV�Ҽ����q��� I��M#��EU�}��U5T-��{iSO?��=u���˺xg�5�Si9�6tn4Z�/��=�����nt�,�ǹ]������㿃�=�:�i�zy�\~_�>����� ^C R�Q  �    �   �!pI�!��N
$&��bl  `2�Ȁ0��@� ��� �E� `xT�p%��+d` �A2�{  ZD,� X���
��K�������e�"��p��5p$p�؀R�H� @�_�2��A@x#�\ߒq�X+  d�$V(K���ț�W���$��Y����ȥ� 9�� �pYdnP���뻓g-L؈�92��� �X�h6��a�x(�<��d�e�jh���YD¸���8�Ǹ����L'k�/������_nJ��F�b�$�!�NK�l�e��+b0*��2��"`��ݣ�����J(�.,�iW����4��@��o&[mD�p���@:��,���x
��p7�:���і����������R�g�N�S��"w�GzV4��ƚ��)r���Q�&��'8 �C�#	�LD��ǂJਜ��NlI�6�F� w'<��]\��g$��G�� Z�%{�Ӹ���{o�M�����-Z�=�Om�ۉ��ת%G0����� �&ϒJ��U��0ܾ�X#P�/�k���CS�I�� ���B�J��S�'Wk�K�(50��@��uB�o�l�S9�*��,U۟$Vn�FWSJ.m:S�7=ʇU
�B[N�KM>���y�Ӫ�����hT�l�0��~��ؘ��4V�H)�8�i���KU� <��h��Ԯ�L��N}��55�4y�57CS�:�_�>����Gɩ�N��Gfk��E.%|J9��ʆ]0����E)H�]�%\�2��x�[ɺ��ŞM�k�Xg�zjI#�\��g�馹�f��ڕ�"�D��uR۶ԡ_��5��9�wc�J���x S�@Y���#�e/`�bK �y� F�x ]�x 4I�I�D� �� 8��Dx�
1�aL��ŖD��V�Fr\h��p�>G� ��{�d �Dd��C$� ��OrE�k�e�b+1�!Ĉ� $ � P(�I�'�$�I��T��(�/ N.,>��(�	�4�2��"�VHذD��{���rC.�.r%�&�ܫ�"��%�a�D��O��ԓ������A]�8#E�"l�!`�J˂ K�c�B�-��  ` ��2P6 T��phr8�V�A F �\ �y	rX)� �1�P'�< B�v ����(�pF�\�&  �̕�a \m X$	��� Do�
,�!�� �I� 6F�Ѐ2G84G�+ɯ.Ǚ�A��V<��Q͒���3/Tq�3���� rY����b9��C�4��l�#��
�N@��2ӂ%%���6�!7dC���g�z�w�'%�be~���F*ri�Fg���)��ڋ��~.�[��]�qi"��C���vk�4��I��H� ҎX�f� Ԓ\����
ؓ3vT�����H����ٙ���37^$�z�c���J�b��\,B!=[4�R�ƥ�5D����vߒc�]r!�2ήcͰ_�Hp�"7�U�Ov
x�"s�@^6��dIE|X���R�P/"�#�r�dW�\`�!���b�%|�S�Kx�'e�d{N�! �h�5�� ��$��9*�D@�.L�橈]2�#�z��B�VO�M�����I,�Ϧ��|��K���suF�g�ї�:詮��k�����U~�:tt:���}����STK��uU҃��u6w��E3�[QI��jU)Q��b�.��5V�v1�Dd���4�Re�R���v0k��E�O^�tg��E�G��qR�yV���b���b�����&xjާɟ�jʧ쇊k�%�T�Y�ֶ�_�GU�T�����5���׫�KH�*k�UJ;���%�/G�mO� �i>�#�?��^��^�y���բ'�/_NOn��M�K�Mƍ��u��~�� 3|������>c�Q�?�Ҹ��Q�;I?�7���$zi����m��(4���x�(�9ռP~���~�C���W�g�O�}:�m����K>4��[�/�g���E�Ҷ4�]��{i����v_Jj��7ߥ"�����jjUt��V��ܟ���t�U�+� ��R����zz6;M��-������.�a���}=֍Zu~���jcu��4�k�%�u,�O�U��wf�4k֫��7��k�C�#���9���o3���M�L����H����o��Ớ[;J�{$��I�+�иA���c�ۓ/�.�g�J�$g���j�7sR�=*��n�w�N$�����X�iM�5~��/r+�d��rđ^ƈ*
�g�d�'�G$Ҿ��'�s��K��}�ۖ�~*��H����x���M��E|��1'��;o����g?�=�X�i��X**O�I���R�V4��s���mML�Qq��O�5�*n{�Cc���1�v>��������t�iUөC�s�����T�U7����6�0|���i�6���F��T�>���=j�8G�ףq�5U��c�lu���i��t�R}Iݽ6�۵L�y�M}OR�WG�󶻇����{5����O���j����ٕ����:�j��t>����ܥʓ��ד���R�2rP$p@@ � �
8`I)@0�� �@��H  � #�ȸ �p� E�  p ~ @��<�$���!Pc L�k�/ p�( 8#� Ggb�.Wr<�d) ��{�p$�&�آp�l ؀�8 ��}�#�2 �2 ���)�� w
@i!�Adr �Ad���r����y��Oԭw&H#�'*ܫX��r���y�v�j�~P1UٙL�P�s�$��*�J����8��ఛ̴Gy�Q�a.2\c!�g�2�p�o&��-���=��qb���ς'k+����D��k�#}�Ҧ�w��~.�X��RL�HE���MJ$O�\�<O��f!E�ʍD��Y�s*�� �V�wdny
�����7��$X��x �y%���$�[7��EĮW<�<?ܓl��?s*W��^σ�&�9Z�r��uD�b��7gj������IJ��ϩ��:���m%<����3�"�:�P��O9$ʙ3Ԧ*��)rGRM$�e��9�x$��(�KpѤ�ݜ�P�Z\����I�*��D�k�rcRaZ$�U_5*�!��o�§��V�9���]�r���C��r�|i� kʛ�j���Q�WSI 6�+��Vm����(Nň\�'�*p�e!����`��݀m��ZRI]�y���.��%U͚P�ڿQ��=[jRRϡBj����j��R�Y�"���m���+;�;a�ڔ�L��H:*�&5+瀱'W.�u�m9<��w����'7jJ�F��qS��?q���-�F�M8�3�\�Θ2�Q���0�әF��2�d�X*[�.]�"E��dˋɶ����,J��â���҂��GIX��$�J�bCh�6���]<���(�	�5{��ˇdm����u{!(�#B���$y`;݀) ���� y	Ja �߀/ �
� ��2���K�@�e '6/ I  �^	���r& >F8 �L �,x"L

�f�"ŲA݀��� /�=�K,[�#��$��߀�p������ ��G!dm<2�#9 "�r? #�>@X�E����_�qp&QiJ.% ܰ+��&&��o WT�7h�.C~ÃM^DX	��#��H
��])1b X*��� `l@��I Y�F��'�d��\�ܼZ���� �� �I�p� O`,܂@	���	� ��?�P�~@$����D��	=�0�1a�d�e�$e"�`%"��Fr��	(�I�
��A��n� JDa�f�X"���y*qs׬�Z��(���JŌ�� ���i�����
�;�Gx3ԧ�E�=�ݐk3q��Y�$5r�8��4����+LM�� Ģ��rM�@<��qb6��p^2b�c��J�F[�����%�q��M���s=P���7b7.�s��@}��é>��V�<L����2��Ir�$L�r�%��/	�m��l@�B7��fծ�q�� 6�����m�	�����V�Z5T�ҟ��r�\<��.�ual�œ�9���	$� �T\��8C�� <%�y$��%��Y]�q`�>C�i{p�3�� X���dYQp*db��g���Y,�	 V$�݀�H��K8 �gWEj�i4��P�i;���hׄ�<����-R}�Uwryk�~[Wa�E6����B�e4�ؽ4�*��Z���\��ߏ���Z�ͦw��]V����H�n���O�)�{����_n�����ྶ��ij?jY�i��ttӴ�t��3���P����6��\$k�Oo����V�m��� �cѧ�^�Z��E��G��(t��Na�G�R��j���� �v����m�ڃ�
���'�������V���ӧ�OgO��֯���1=Wħ�s��� �����2�l���gՐ�mxh�?�i��� Z=4m4(��Zkڔt��M��*)�K�餒R���Ņ�l�BH�GQ E�r �'��`��{�R���֒?+���~�귟�S��]E�+������� �}_�?���O��-F���}�M� Ie2����[��z|}#��TG��л�O�n^���fE�]`���r�]�v0ړMaw1Wۂ�U+3��̘s>摖�|@��/F����D�*��y"E�"��Sy,.��<H��h�b��4o��kv���?�2�I�s7�^t�m}&�c)�J��U2�����rF��I���Z*"/%EY4�$F
���j4S6���-��'%P��z����JO�=ZuJFlm�:iV�{��R�d鞣ϸ֥�o��S[H�R��c笯f�UѨ�����k�]$���T{�>��!�Ky7����s�~�(����&��g��� P@���    `  � �R@09  �G��� V �  >V+  �(�p*!@��TAo�� y�� 5 @_r\���r  !Y H� �����@E���(���/,�`��/ʰ�r �� ����sb`<�X�6 0 �w+�&ր&�2��
�t���܁���e���l�4�J ���Y��Ԥi�W*�"&���1���L����{q&�yd/�&�s�NJ��y��M[!�J���� �y"|���r������+3�X��$O��q�"wp�/උ��>x��;+2YFP�rE繤�$�6� Uت�.j���^�ܲ��vN���dmÂU1%�P� ��.��*$��ǀ`'fIDܘ� �q��᷎Ę`o���R�(����W�����BeZ�[�r��`/WD��6�0Is��ܔ���D�4���v����l�=+6gE�m�V\�ض"���%�js�a�VV���V��A�Z��G��fN�ޫ��s��l��d���ܲ��ո*��$E������\;d�����_�ы��sF�d�������]s��v�ͥ�L� �ݥ���"�햟{�[q?�t���ou:|��wV�=�v��=*[����M}�d���ʴ���~�n�l�X�3cX�,ݠ���ͪ��bQ���ִ*�5MD���R��>ڧJ�nǛsTY+1��nZ�pq��ʓz��1OS�	�|����}�!$Y^�6��*�Å��_�N^���Y��P�\���M�/�T�*�h�f�����G:[�:&����F��wX4�^�UJJYQ����̦����$v@Y�'9/؂�ʿq>r�Hm��	@�� s���H�V	( L�M����r�$������P<Y�0ĀD����/6 ¸�ܸ%r���*`B�"�8$�xh�J�@�@p Y YP�&QO��%�a�@vEP��X���HY $��9��
�r�p0�9p�B7�I��.�۸nH��P2�v�݊�t�*I!��w���AY��#l&���Z�r��Y|(w8��RX).�q�Y	%	�pX�� Q"À �P 2 .0.��.@/@C .� ؎D� ��0|�{	\��V �E��b�'��# #S2�/�FwDv/ ��7N@��� 0e�^�
��)@�+����X2�(��IWS�[�{5�{6�Q80��0�w�/��,�9�U鷃ϭ��OI���P�4�����_s3k���;�^�M�N���5{�f�$λ� 9�=�I��;��h���Sؕ��}M=��;ѫMxh��̖��WU��}�r:_'���զ��ԏv��OV�Oྱ���PǱjs+0��Yӝ�p�%{�ōjbX�a�Q#�s���9�6�����Ϊ�u~�j��dîN.ΝM�]�6DȮ��(���y#�AOa�bnYr�3 n{�Q��<���{�X�� ���D��N�7>D�ϓK�ݿ��=�m��d�<���f�{����� ᩂRkZ�Jmc����,r&���!#�� �HEQ�;��L����!���}����J TE�\H1d'�,����\�IH
q�@*�4�d�=ˈ$K*L�`�b&�D�د%Y�h�p\��>J-�"J�U��{W�MS�L���'s��D�,R�"��"�\v A$�0@� �( L�`��H� B�
y���G�$��ɀ?9��-N��k� 5�s���$���.�V���� >����B���'���X�� \S����?��7_���;�'����z�ܟGd�E~O�n^�"�����#ǀ2ݎu+K:;#�r�(��[�d`�FA��"9�p����Ă�n�i�%Q��h���Kx��9��Ɣ�5���Yl���^H:��7o�&���߱��k��O�:����c:����O�|]g�+�2�k_Q��Tq�F��$�b04��*����#-� �E2��׹�J�gT��`�R�i569iUcm��5&3�U��BG�g����<����jj#��]����Yji''�����a�Uk�NT���O/�Ǟ�
W$) Q�F�P� �  �@I@�  � �   G�ŀ���� LH��!x��#�4, ���N
� ,�?PE	 �/ � X ���@+ � ��K 8��;\�܎�<����~�䢐�� ���HJ��pX O&~�e' q
 `A�P$87*%�]"��� �26#�/2 ���di��N�:�+#��9:��U�����A��jle����r�e�O6�3v�e;2�Ø�WY"J�r��64�ɗ.Ȯ�y�|bJ��e`a��%\6����i��3v�U��؁�(���eءs.KK�����Im2$��+H	u�	���i�wH��6_%�j��#�����$� U|E�yFo��q iD�6"_�8S�Y��`e����w,����[�@��X6�̩�0,�m������e�yL{�����R�"�����^ŕ���-_@V���ȭ�mr
�2ɜ8�"J�7�C���������iBP�GO�3wg�J!C��7M����SJ��U��p�mZ<盛�x�����'�mͮiL�p䭷J�%��gp��	�ؔ9}7�-MԲ��f���������x-�
Sk䫜^�1���u�Z������t���	*��
Z���J��y9y;�P��}+P���Jy3��M�ɹMt��݊���Sw>C�E�$R�[�	/,�UW��թ��Q�<��`pi6�'�u��g��|�����`����U��:\̢6�eX�t�'4�J�L/�+{����L�dV����L�b���%o��e�&���Kw��P��b�ر+-��Ռ��`�m?������1�{Ŏ�����VaT�U)8L�I�3.�S%F\t�i�pt��f���I�>
,� ��� �0Gll"��e��S�,�!�@��@Gr����2�$ �  #� �BaL��3b�8(L|��Č�C\��{����C�hp I
�ň&�@�X̲����K�J�b�@%q �aH�v@�Y0+H�%���$�v����d �2x�
^ X�X�����Ē�p=�8��V��� ^��V��/�-� %2FݐY ���#,"���v
̀� R"�H Ob�K�p����D� �"I�O�I�`X4X�L���_f/i�P���X���	��	 NE�=�{���@p8%�!�#}��r �/�� ��� M���B�$� T� P ��H �d �  �
�E`# 6Eq����:�n�[�*��Q�F��h�w�Z|Mַ�P�����Zt6ϋ��Uu�3�z~����UKn���f��+�{3o��UT�H�W%��t�'��MI��ƺOsS��|T�u��I�4g��|��a�h�utc�Z>���KR�~��p���Z|�q���M5)��M�|==ζ���y=�;�[J��q���Uň��i�Q]3KNCN$���u�z*M#ϯ�.ē+�URblZ�s�7V�^GT���&+n���>=V	�y�U�q��Y�����Y�3�T��o����pr���r+�Wf�\��,���VL�kܲ�sl���g�*��Y��C��J1�?�29k+#��5TS��G'��r��>�7�gg!�/ rEVȭ���J��@�	���qbL�a7����A��-���l�Kk� ���bC�j�*a�����P�e�vT����0����Rrզ��x�2�R�� ���p��-����0^@���H��J��rT��b���b�S j�U؉�m0��p�Bg�D�,U���\G %     R@	 � �a �� O>����y=J����� �V����F}��]Z5��ۯi���z��'�ת���<_�TW��{=���!?_���S��{/��t|��}M��)���������� &�D�1��詷����x82�O89֮X9�a��g6�i)/�x�yp^` ��o��2p��"Uk���K=��d�*��~�*�v�� ���g{d���ڎ;w���αh3��F�������]��T�~����슩��i��^��s�J�E� �^�#,�L��L���
�"��D\� :iV���sƝ���	�4t�L�pDiK^
���
O��+۱�tj+�����V��g�S髩3�~��uR�цk����s�}�]��   /�a�?���       �9 � ��0 � ��+�K�H ��0/r� �E���*0  �8�}�̎D����\� �� �{���$r��ਟ I 5 D��BB`@D�  ��� �"p�� ������\X�.`�� ��[�rd�+�F~LՋ��Y9��8V��k�u&�q��AfM6�rd�pe�o���J`G����D�c݀x�%���s<	�\5l��%8p��ye��
F�|�/J)�R��V�@��
��pث�FU�"�	ň+������)l?��"�� �DwV�Ԧe5��� �k8����n %ཛ�ஞ �8+N��+2L�v�$�HMN0��#w�jx�����Ġ6�,�d�w�nQW�ĀN,��g��b�c 3�q6�-� W�dN�7�2_�}�������.�|�m,��q<�Z2U	1��8�=+3�Ue)�*Q���jRINRLʪ��TY2u5�9�\�̥���'��R��U�[�r�-�`2��?0���#B9w�����ȏ��2��)���Uþx
J�T�O�v�SQ ��x�Ɇ��f�N�Ǒ��r�nр�]1vMpٔ�p��գ(!Km^.{v����EK��п
�i�x7h���9H�W��#Řm �NVJ��U��bE��i��b.f��n皪��G��U����K��/y����5~�J>^���� �"��%�
�������cش�[�6.�E)KN5�ygЪ�<��ґ��y���H�cQ� �y���Q��Y�1�ԭc-Z�ڇ-�`�J�(���ѧ=�J]I��b�iS)w:}6��顦�d�ҥ�a�T}�r�**�9g��iO�KD���k��ĭV�M��بO<��N�4Fa���H�l�K;� �P�b`qr(�ؓ
�
#^�}���� ��/@���p L;�mt� =�r�nY��l0 /ab`� �gɒ�c��I��  y'�W��L	pg�2"+ �@2���
��1�DXG ��Bjl�%�YSI\�"�M�2�ݒx �� �X b5,��	+ρ͉3�+c+ _��YY���R.�U�.H�K 	�G|��E�^[%V
]@%ദ9	ô�y	�� �)9 ,\sb6H�X(a|��� I� �  ' 
�c����0I�~ �$�R' 9,� ����d\���F"FK����D�<�nV0���,vj�i�(#�x"-� I(�VIA��#�!�P ���L�İ'��\Q9!X�+���<u�m��T��jd��VDFM]��i���-����q��kK�NOm�ԩ�vs��+u�������[6҃`-r���T6�tI��{6�v�n9u^Jt�\3_��F��$��Z*��3��_2Tmfw���J�0y�UP�ѩuem��ϫ��V�2&�r'���;��t�NJ�|�h���sC�cݡ�VKR�<�j�*�QdK�k�ѫEt�KL�P����~��j�*i��Rԥƥ-��,�^�]�zO��T�#�in�����:U�Mj�k8�uY��A���J�[��<z�J��e�Q��,&ĩ:]�&J�H1%�����}2�8˜��5�U\���^I���kܳs�T�����ꪔ2��sm�S:�<1��s9pi;�
�� 7�>�K�>fگ�TR�Rc�� A|��k~C�u�c��)���r��ݲG�����m��� b%(E�P���m؀jSd����'��RE��� CWq4�E�@�N�3"�z�51'�>���T`��֚�s�ipl�$����q=��&y�(�`rX�`L��P�X,\x,@e Lc$y/ U��C*�Mv��Uʮ�R�e]�=:3�#ͥ��X �C$F�(d�)
 J    Y  `   r�� ��z�o�Y�S�~�\�O���7i�x>=?�ox�:,��}��?[�E}�� �Q�������?�)_Y�ǣ����wd�?_��/�'��:~��'��� 3���O��ۗf���$�̓�-�`#�'*��t��1TU[&!�j��r�i*� "�AS��Z|����Y���56+��V����L��m���8��ܰw�ssϺ��O������]�m���x賿&���)�`�.�3�,��i�X�Q�ܯ7�D�).^.PY,�;)����N*`ڴ35^��*��Sy#+��O����}M׫KYI�κ5*jM��?�����6��tR����}�^������ۛ���9�A!��d  0(��� ��	 
@ 0   ;���� ` `/�9 	�Y��@k�_���y6)� �C�P`L�?�Q�;{  �> ` �  2 ���G��	� �  ;�Dd�㒀"���_�p%ǰg!�� �p-HW�' GɊ��o9��:�m�������3��G#�Q��+rF��4�6��W'����"� ���o�r�%�J��9L	�����`F��)ĕ߂(~H�9ew��p$A!������$R���?�rU"1�s<��0X�@��ȝ�\���$J� T��\�]�*�K��Fp�˲*��&;� U� �GK�]Y���ʻ,¸m4 �H�[��bǀd����� ����vP�d��2���U��M�`a�Q��� ��q+>@��"ET�����D��sv�O� D���M/����$3uR�e�dvy.��*���ڨ���y^ �VapN"��J���e����"݂�qSsb6�����`Z~۴j��ԛs��Zi��n$$��Sv}����#m�dT��[y#M4�MK��)n�ΖȔSw)��O Z\�8g�۾�Q��5.����
��a4�*��I��F����&g�X��@��� b^�*TA*�� q��W9�{����#
UK���wʮ+�Q��[�E�R��x)Ͱ]��zS��t���:�m�EgU�7<Z���g�V��g��.�.�9f��C1t�4�s*�j_{�3-2�[ς8�Ѧ�I�_�i�+��'�&���S�,�Y��N	C�IUVcJ������r�vVXG�J��(S��Ò�욫�D�8׹J��V��Z�0{R�;�0��ݷ��uUO<�1_����$6m��#�"� ���`�!Y�r0 ��@H9c�l��Eg TA�~�TF8�x��� G�/J�.@��`�rl�ČX'��� ��T�,��H��7bL�1�VXp�0���� 	+$H�� O2T�9�]�(H+0��ؤ@]�&�����*�`�Y1�'�H
H�� ��V@Y������K'%�@���%��Q�`����� $+�  ^����	  W,)h :�p�́E�&l��/"��"J/ F	Xܑ#C��#� +PG$m���.F�$�g��,������ "?  G!����N
 H�ID�;J��� 	.JD�H-���� H�G!`2 '!�)�j�-T�=ڏ�<:���ʶ��Y�7z��W{��Q�t��FO��sW�� ?ǓhٔX�Mه��L�Ss2t���}.��cY����[���ӡ(r]*"�ۡ����괱b�.����	ҟ��[oF��)��J�(x>V�cU7ҿ��骆�J��N�ƦޝER��;� �+᪼���k�3ЏZU�j�7,�΄���LL2���J*���/V�2:T�R�"`}�����N�� WMƧܻ���T�1,�����j�4�fw�jK�>��g����o^z���1y� �^_[k����g����B���=[R�Գ}/��USZNUɶ1c��wMI�����juS�������SD4ju*c�uH5��V�P�L��N94��e�f:�D�b�uvEUbls��'��b볪�UZ��j��L5�R�V�G9�UTd�+ѵ��u*��w�O��� ��m �ҹ�Q2�z��rG}U�<�.��r�	��}��;9(��3S����U�$Ϲo�Pj�
�#��J�b˼�;�Ғ���!d����H��y wҩ����HCN�W:3����g!�y�zpy���$��r��u�;�I�M>H�+�u�P�~{L�)*��Ҁ�b�
��g&K�2�4�ezt_sаy�sҀҲ,�*I � ��d�H �
�� �A$��   MG�Cg�w��z�������N��j�U;��q>��ݿ𝏈�<y>��/�S���~{�%~��� U�:~ _�R���UΞ�|$Ο�%m�~BO���� ͌3����I�'^���}}��Ix8v�˫d�-��\�]��9H���`f���]���G:�X9Ԡ�k�Fri*GdUovG�^��K��j5M��U�1�F��ӎ '�k��k	O�  hx*��T,;��'6Ӷ�W���ݝ���G{U��\��qՆ�ګ(G-kS-�����"�+qU�86�F�r�vP��`��܂��pDk,����9"�A��Ch�V"�C�t�IʗDFj̳K0j�TWe/&�|d�%Rܠ�e}Mܺ5iO�5:�L�.�N��N�z^�V���q�\־~vk�29:<`+!P�B�B�pP�  (�  �     �%@0  4P"�p#�D�	�g �@'��0PE9!H  � "�,�	�%�/` 0 �vD(.K��A�W�$\4� `��� �8"��B����F@� E�CJ ��Wrg28�����`<��G F�9 ȥ�)�!r-؎.QZ2Y$�~:��V��k�`p��6�t�fNn�?��u��+�rw�0��aۂ?�p&T�;�xd
��\���e������]����/�Hh�p�����*�F\D�����"R�]r�Y�����E�r/��G3�>W�g#��Tq?�2�nɘ�ʀ�-#�����E�`��8����Sa��J��8��A3vU{�T�PiLŻ
f.k���0� P'z��ɪ�{|�����Y��n8�y	�P6�C�m��,%7�\�M��0��t�8#SlI�ۏ�4�˞�W��Ɲ�1i��p��n���۱� ���"��f	R�	g�V�L���V�E�쬀�O�<�;�3�s��*�*9�o��O1�Dt�ȪŦ�y� sq,��

�J/c)�:(����K�?�xBqҜy ����x^` �p�Tv�@�� �\x5-<����ve�w`u���|rz��\+�x�ա�ꪗ����{ZM�����O�N�O�3t�������ԛ�r���S����]LK�G�Ks�3��M,��▻��.0�+������#����o�ź��|A�ҥ:�1���N�ܚt��Uvҧ2�UI.�L�
!�u�q[�&�j��7�o�4�&�e.NU�%7�[Sb��oc.�@T���c59͋i3W�b1e0�u^{������ԿS�1�Y���r���pԩM�F��:��k�K�Z�t���b�	Aʪ�0�j�J���UP��WYƫ݈�]MȦ�̑)w�ښa���	�nJ��b�'y/�.]�`�C��$'�!;�`^I��21�}ȕ�$�p9�x�	�<�
���  48 #,�By)� D� e� �� l��N�x���Lc _%X".@�wr\�����x r-# ���.@���E�D�aKV. �69%�{ؿ��K�B��.@*H��
9�"6��+� ,A�V 	�͸��` /�BC�@ �E% �� �' \�8eb�� ��\��`9`^� �	�t�!p+i��k�� ��`H����8A������$� d��&h��*� ,�ʰE���� �� � a��Y�9#4@1Z�Y��uӣC�٣���9���VݭM^�_�Nc�f�u���^mG�[o��E=�u����ɇ&��$�$������rq�:�}���t�iP�;}(��M8�3��u�M=(����sH�1���N_���j'����kMI%'\�,�W�Ei��ڦ�U����;�oO>OzZ�UET4~��jZ�4֡�F�Ue~};���~���N��zZ�m�����:���+�0��jT�W����ɕ~M&��'&ui��_��K�g��T&��i��B��uR�g����u�ӆ3c?S�_U	��O��g���Z�k����N6c�=u�Ѩ�����zm.�6t���#�N�5ҝ�����j�t4�t��MZ4�(�*�����:�tٛ��L|�R_(�n=?SI~W�U�T4�#^d��s�Ipo���v��{U���V֤���߈����� �P����g�7pT�jΪ�?'�w=uކ�--�'?��dL62wq�D!_,"ň��i�-%`! q8"� �
9'�i�ĕ���
�_��X�^M,�Cf颩@z�#���F�PwVA��q���y���'%�I$q*��{4�⥩=�8k���W��E4�:�U#
�y[�N@�����5{�Q�b@ՠ�����J<�. �:�����5J4�F@�Mș@�(`  (   @, �@  ,��HW��]^�bO�[����޴px(����~~�pޯ�o��k�s|� �y>%7���G*�w�?�����^ޏ��� �������>EI�����XO�������� 3���W:is��ۇYn����I��v5;`�J|��,vf��5�B�r��MȎٷ�"+UL�tZ��#|V��Rk��o�*�RRB�Y�T��U���6��]�f���U����n�,0=u	�Ϯ����?-L�k�Q^䟩\�8�?/j���M�y/2�6B�f�%��M��n~�%�X%�"���,$j�Ϊ%f��'�|�	�J��S��WF��<E�K�䬪��Y���0��='s��U����'�CU�֭f��o�q��:��M<>���t���:��w�\B�+(  B�   
@&�    B� B�K�\I`8D� �0F� ԣ2� ��@V� 	��`=�d�(Oऀe    XrR0� I.,U� `9# �@I,� �[ �@%ė� �%D���c�@�G��y�) L��"�W���<1����`�I����<!�{�$�ʧ��'"�D�53�WPuw�ʢ��sy�7ZIɖ�D�!�]XY"G6��,2�RG�N<�l�X�� �x
�E�{���"%x$4Ȉ� 7���YheX�Z2�&�!�gܮ���5xl4�ļ����w�H�W����_$y���*����"_�wP�[?�Sb4�;�rT����9.@HNŧ2�/<$�0'�~̿���݀��(dW8�b8��g��� a�����b:{�v��5�\`U�e�0�;]��Ig2Ob��6��q�C�1��� 6�d������J1<�Ii$��9�K��K��Y>ڜ�3np�H(���X�ə���9Ud�,�ZJ�q�O1r��i�)S�e�*Q*\�Uf�]�ز�8�Hx�i�F��c+�o��`� _�w����Qb��l�p�5y\ ���`ղ����� �vC��y�Aa7,����e��ԩ~��SQ����XB[d�M���Ϊ�.&̋U����W�,�}�ZԏG�na�U��]{�*�N�w�:���nz��#�ZξY�tR�{��C�rʖ._&�O�W�:�M�c.�f;�H֥j��Uۖi֪Û���-�9Z�"���H݇��܉&̴��C._2i����ۏq�n����m3�N���k:���qu+��U��Jm'i1���`�i4���#�?j4���h�n�%Q��$5��aN
�$���4�ҭcO��	G��"���FV��A�r^l�!�᠕Ԁ<�*�BH������`��l��u<�*��[E�����r'7r���p#��"�0� 
�A@�O�/�X�d	q�.�d1W�A�@�	, !�@� N��'�m �Ⱥd,�y/��  "��`H���N ��Oй X�{�@�#Ȍ��	 c�  �/��B��	^ !�H�	�e�DrY�F�b�	2� �����Id�r��ې�pI�q�L|]�k  H�PD�[@ ��� '������v ��*@H`��#��dGp)	=ʘ����O>��	G%�A� $,���X  �   0Y32��!�.0X !�� �( e��� p�@\Ac��q��t�U2k���š������������=Ƴ�eN3�0s��}/����-*�͍�J2��mv�n��t����'���TP�\�w�zJ)����S�F*�_p���"E૰�����o����4R�+T#�饷�T���1z�W�k�W=]K��ݸ��n�K,�H����`��Ur�I�s�F���Gt/];s����Ϸ�����it�s�})��ZTՔjt��2�q8:*�y��n}:��}l�/Wm��W�MMwX5�V�N���Xk;3:M��]ƛ+��uMfk���-ثKw�*oJ���7�uU�צR֏W��m9�-�p��ম�cץ�tҡ�54�r�w����4w4�	��&�2|=GMW>���	�1�t�U8��s���N����;ѩ�諔�T~[w��5:Y��z�5U��V��Iu���g�����4m�CnR���I�9y?+EQ�C\T��i��|�~f�_ 55��"G����"R�;|.#mB#�
������'�8w�
 ^�E�Њ}�q���p� �,���\�'�+��@bХ��hn��h�N��v������
iH�؜��>��G��_����3�U�����Sĳ{t]�]+_i��WO����-u#���,�`��IsMC&�����#Rg�,��8gZ���*���ފ�E.O59=:U�JD ��4)   �
�rT���@ 9 B�N@�gV��&�A��WѢ����T��w��F��Δ�5��=Z�m?]��O��� %�K����w�}�#�п�5���.�k��x3���P���"���w9�"e�_ğ���7�Ws����h�������?"�>Gn]g�$6�B�؍�+\T�H��E2�<z��R�`n5z�Q�Ni��Ȕ��O��P����F�e��֊TP�Wո�6��W]�Bv���il:�Sl�+m���������R����f<F�T"=9�:�U*�܎��G�O�fs�֫��Qt4��L��]�
ҙ+������I�M���I�dF��Y��� 1�գI�sɸmj@�YjO>�X�=���5�b�OrrtEl����Qo�I]�rT����-Sl�IpH��qs6�%���A2ót�K�o"�E��Ƒ҆�s'j�uW���_�QBE���d��s�N:�����tԓ�g騫������]:ɶ������t)o&������p,��)�Dd�   �@�ܜ� ��{�� � ' =� ��`p��x��<�@ 0���$�H#ؤ��#��w��r6 {�	 ,2@p=� �.H sa���>@�f�2�#)9 �8(��la�\� �K�6�K6�d5`�� @0N {� rR �Xg�1R��[���8U��59w3���fj��J��`eē0��bbB�DB$M��).�@Q� ��e���S�|�N/��`���#��D���Tm�"'���/h�ZQ3�	m� �waH�\\>�
˸��y�Q*v��.M?$�@'�>���K��1ܪb��*qpԥZd
���:p.�t��$�E�ܰ��M����-���VWc6�����X�̒�ʒ�X����Bp��1
I%r��"�`
���_��M�l�����ɚ�N��0��I8��g����jQt�e�? H��a8���Y��*������I���J�"mI�)I�f�L�m�*⬜*YS�����Ƶ(��]Jc�&�ɶ���T,R.��?�V�D������$��T�L��&�["�Q	-ث(�Na��n�vS������<�_��za+�#Nm`��Io��8I��H�T�~���20ѕSUL�� ڋ`��`LT���C
�[r�a��4��m�Aʷ�h�$�� ��QS2�Ҟ�^nv��I�Pۃ�5%f�ɸ��^�MJ/''S��7�:�x�I�_�-Ց~J��Ȣ1�����K�lW�<��I�,a��q�Ֆ�#�U$�Ƨ{�����]���;\�݌��0i��&�E�)�HI���Ufb�e��0�\��M}�rY:��)��i�r����7<�c�I�%�4���9q$A|"^B*��V Oa6� ��E�� T��r��|�N
@�DB`Ua�F��{���$f�0�#�56 A � >#{ `��U��M�
�	0��2�X"��-��
����Q  }� <0`$���� �`y8W Y�,X�  C%�8�V<�vV"(�` I�[��&@�� ��p  
NF@"�^K��< Ve�(�8	C(���* ��,wp^ �I%Hc�y-��W� ��`!\����+w� "	%d��PV�� �H���r�B"(�$��83��� �؁X�$l�($ �.X� e��!( � ,��p$��X�L	eȈ2�#" ��# 7#wH	=*Y�� W�թ���j��^��Z.�_�U��j�uT�m�c������ۜ��y�����9��Uu8F��A�m������q�m���Ou�1��kD�u���5y	�J�`ʮ
� % i>晆��g��u%�#6���v�:���u�!7�5*t�<Z�ٷd�S��[��0�c�o=V��_OC����~��K��'l�]�Y�d�4�D�C����2����$�7EW���B�CH�K�J�M.�X�{�i�_ᤤ�{������^�E��7K�ח����/&����JiJ[pb���d����k�����W#����GkJ}�uQ9=��D������=y�]9�¹箉GӯE�6��T�MW���6����k�iI�����f���jn����?6=ή��|��kh���>v�k��,YT��J����_�ԡ����mUJ��'sGҩS2u�f����s�z7�4�?"���'�� �c3\5��>�ME��W�n2��M/���v�\�OƦH�
s���J9"G#���X���l���`<)"�S�	�v$hT����x$�J��=x��M��Ў��HF�,K��+��׽9=��'��ː�طsݣ�xR��=���<-�Oc<���#�\��pD�
���^G�'�x�*h��̚V�
��2Y�u�����[�*=�U(�y4�sҟ`6Y�2Y� �h�Q"@0d��  E �n�uL�������ٳ�z�s��p�}��:f���x�:s�6��L������3-���^�ϛE���uQl�=-��T�ec��3��|��t/���N�i�����z��n!R셰���u�շ���9<�m�u���a^=��s1��l4���V����U'<m�R�9���.d�W���ǓGO��.����rU�D'U��D�Я_^�*��?a����4)��_��v|OB��kU��iU�ʛ>�5'̜��P�N��|}�Z��_��K�N��>έJ����u�J�N�?5Vν$��uƛ�R}����&�O���UZ�8;s���wZ��J�->��W2����'��4�p�x��"U�֝��%��г+��3�:��ͼ�I�O��.����N�dŢGU���V�� ��Mo����+m��jK�l�+-��>��tz��ܳ�G���kə:D8"$���0��t�A���蔘4�f�t]�+��
 Ԥ��J�!D��PD��L��or4TI�0���"�t����MR�#��+r�������Y'!0:Q[G��M��r~}U��5^��rП�D����i}T��m��^�-v='X�u2�L� ` {�   ,  �"BL ݆� @)$`��  {���{�D L�29 �)	�=�#�� ��2���XP ��/!�H O�I� FCP@ �  ����$,����
)
�A'� �T0�p- ,D_a���I�!y� ��Č�# =��$�p�Qtt�x8Ԯ䣕wfZ�ɬ���~�<��R-rsܰr��Y]�Z`�h,��Wk����˲�mX�Jm����m%p�ؑ4��0��EM�$���r��#~
�rx�)�kX��7ff%�RM��������%w�%��=���i$�wZ�^[w'O�h�U���6.&.�6�����4F��SY��Hm�\_�%X���ZJ�f��rA/��,wP�[��/*p*V�*��+U"�re+��V��Ėm��Qu,+�2����Lv�`l6e$�R�T���>�;�sM&��6�@�Ym�i�?R6��i8��r�<�M>
�j"ʪm;7
��Q��M�˞Z��N�.��>@�U��*���2n�5e�m�)^����v1�nGMȪ��%aJ�4�IJ��k�$M6���m��xɔ� O %�Ȯ���g�4����%�<jVL+�ݠ&.l�7��j�+�Z�bC������K�ηmM��̩�V-4��-���ݮ���q��Ew���?!Rӹ�p�R�	I�W|+6��~��*��kT�깗\�#ԩS$�ըۻ5]NZ99|B:����n������	��Tn]�{����T�&j���LjT�-rm3!X+�GZi�}��!J��ȬV�5&�H�K����	>�6A�LIS�$�i`��#�
�&�!�.� C#��� �͇6,� N�n� ���@�,�ś@�<��X���ld� I��i@V� �`J�� �AbÀ)
-N^D ��.�rP\w�����,C>x4��D(cxqq��X8�x,7� �eE�K#w� )Hq%��E�� #���'2�����`�Q"��P�Xp�v��@�V,U�"�G"G L��|A$�H��.�H�BI��� � ��� `Al�b �N���2���$� �$�"�p-�X7`&���5آ	2�V �'PWrQ[�'��#En�(V@�a"慑=��j���@9$�(#�D�Iw �� )�Ȑ$܍�r�M�J@� �D ��V�]N �SIK�����ԯ�Qt�g����ÿܽγ��Sc��sa<�&\��_JL�;��T9�S��m��r�]*�j���Ѣ)J��х-��v�*&.bן���jP˸�/\�y�[�@E�@� ��]J���}}*�AZ����OR�pt��mO�q��ƣ��r�}ϑ�[�����w�����<��U�՚��1-|oJ�S���(ӣ��?C�l��i�F�
�4�BM۬�����x�� H��?`2ԣͫ���雞�i�$�v��h�z���-W�F��.�r��==Ӟǧ�*|#�����i}�q�׋_R���d��\垍z�ǉ����zoӮ�B���:T����)[�:t(�#� s��[*v�Os�������j�ժ����y��j�]����z�<t/�����麺lp�fGj6�fj�VY>��I4��M�/I�{}���>����}.�)R�������=m��}J_s�VΔ��o���|�4���y1S�m��ֵ5zhe�a#�ai��ZZ�ƥh���PTz*T�7S�H���W�^��$����zZ?J����v>��'���b�+���f��h�T�~A�~�a� OL+A��k�y� �'�gy���岙=R�Y��N� ��������,����a ��r��`߀��ܱ݈*QvP��0�v+�^欌����o�F�'����M�lWO�|%��?��G�i��.F�
�9�j�jS�����n��j�=�U�#�Ğ���������tҦ��*!�qjY�_���N:���>^��4�_b�Ւ�Ne����j�Yg�Kw�Z��q�=�H�*�q�h4�WA���'6=u4�O&�k��G,,��R���M\^K73Թ
�ek��ɕr�K6��|D^J�p)L�i�;����)��5E�=��)�N�;"�9Ie�/R���������j%[�$�4�px���R�QʯT��ۓb�} |��˃��\�z���vYa�Ot|
�KQ�Nuo�������+�/R�����:K�����qva�j;�'����y��8��|5c��-��dϪט����o��>V������6�I|�z�d�U�U+�º�_uNCsɖ���U_i+�NL�U�Ӯ�ii8G6��,:��w��`���5Qɸw%T}���,�.SdTq1��{��Sѷ�J�J~�IM���֝���4�KKWO�:T�S�T�2�j���oo�����SD�}�\�m6[���K�_��Z}M���+r�g�u�W[�Ԯ��y������y}}��jiW^��U�W�쏭��[z���C�R?$���ப�fE�����k����ա:�3µ+J$�N�Yx,��kҙ��V�I`��eVI�MXf�bǕ�#���ҌI��亘��eZ���Z��2��;��E;�jI3��|�f�*Ϋ�Q�B���u:�nO��+���ujJ�<b�z�ywN���^U��Z��;�ךZ#ruz5ps��NM�.8$��pKĴ�F��EU]ӌ�I�8*�u�7�f��R�kɊf~J�ve����Ffr15[��Sem#2i5]єĒnf,Ry
��m���)|�v�(_�I��	ɢ"��t��t�����K�`�c����4W��p~{��Mі~���?�_�(r  )2P!@  �企  . �   
@ 	  �d%a��H����    �h  h�#�� ,� 8!x#`P� ^ �
O`l.�ܼ ��Y �d  &À `  H@���L��/$�22� ,�N�� ��^ H�p$\A`5d�s�m���<����N�d�;+�1�D�.d��33Q��� Xrk�|2Ч�q r�?��Dk��8x?(��%j�y�N]�[�n;[�s�Mb�+��Ď_ F�෩;A�x� ���7ek���U� ��ɘ��k�{G��r�p�+G�
L�	�L�H�.�)���O���� 5)d���e͙ԁZ���B��$�� �	�z�b]��DI��=��bؖ[Me����m�ڕb(]��,��<�[���Hڪv+�3cT��ܣ2ߒ�?ª$f��������+���nR�4�|���|4*����2�ÿ��ױ��84ۇ���I'����W*�])�i�s-�����P2�f�����3�jl���]̤ڗ�u��U �/%�K�ʇ�X�%Q�FW�J������X���v�Y$�K�#�-$w����5R�����$��uLI�a noȩY��e'!T�-��(�X�m'7F*����ML��9E�/{�N]7W9�H�&Zl�[�Fb�v�&*��r���ql�Rq����'�ݲ9MX�ywaR��x%U>L����%�Z�UT��Uv#S�a�.��[dL��2�j$���FU��T�0��FZN
�c9S&�Ek��j檗�ά����ޚM���tӥ|�t������8���f�p��Q���>K"}��@�X
��*�~�D����E�'��R ��ʘr � �͂_�9�c W$� �\� 28�@��e �  ��X+�pF���I`.9��*�d"+pŤ1� �@�&��K#�l@0V�> 2 /زZ{��03����<���Ó.�v#�7*���0��2�[�E��9
�(ȓ�� (pD9�Y�`/ Gy.	�K�Y�|�g�T�@�@XRI�O. rX�"�x$�l� �0���AG0!�#�ev�  .� "( 2 X+� �R"!@�X�%��"¦#�.i+\PB��7/ I���,�#�H@�( @	#rXT��^G f$��!�pA *Kb)$��
2���� "$7{�v�.���Y6���š��K������V멹��y��s�UO��+u�~/��Np
F�DuJ�H��UԪ�r�=ZҋSCESJK>	k�}:�P��S�њ)��Nb�{B�@�� ��m��u",����RK���Ҵ4�vc��R�E=+�ǩ�.�޶���gݙ��K�G"���є��2�������b'tWff
٭�����X��4��J��.�r�pu�kN�E=�xu�+��9�֤y}C]�贲σ��/��=���ԩ�|�֢�yg~yzx��qԯ��������_��vxt�V�h�7UN?W��O�쩢��*F��#�}5�ա������Δ�f�y��DԎu��c��JY���Mry��]M3���Y$y>N��7���SL��~��R���f��ϯ?NW�~�k����}j(өuE8mGw������g��Cr�΄�Jɿ�mj}G���6:+\ʱ~R*w�5u(�ҫSQ�)~��]υ�����4��C�Y�yږ�ɸ׫q�V�_�� C��Y/=8�u7R���MBV�T���ٺ?_����NsҎ7��f�2��ǝѻG�溨���e��/�>OƮ0�"�f��=��pr��q6�B̃d����n5~�����Jf"���q��թ٥�~�宕�\W�7��i�hr�~{SQ6��gz�ۍG.���w~jr��<�̪�mȦ�MR��O�j��=�ڟBI}��^�<WOD��.��1���4ԟ7g��m�=�1{��[U��L�S��9�7+B�q=��<��ﴶ�s[�c�o�_q���6���ŭ����UU�df�w/���j����f1~OOKmSM-�����G���t��uOc7�jG��zv�]&�t.��Z~�])u7(��SJ����g+�V��4�}:r�B�tS٭Jo��'�y���D��U���\2;;!�cNM*�-��Ƨ�z���Q>Pz��|���Ǳ��T�K5-L����&�'���NI�ے�L�����w�=*�bx>�t��4�u�I��=1y}ߩBS�����?_R?0��7z���>q�t�(���⪪��e�K��j�ұ�9�>Ssi*O���|>��N�\���ڍX���ŷ�6���U�z�Z�*��U����JVF�^�Uު�����T�\�M\un��=������2���J�u :*�*��6Q��n�F�c�sW_ku��ľ�U8'T[�(���>L�
�$o��Q�)�urQ[���$`Z����&j
�?��Q��c��@mG��
̲+1�#�,&���2����#�XV�k�&�(�rN
��\�� ^l�-�"�Z2�mW4�i%Lt��E��aX����K�έ+JW=	��Q�a�ྒ��t�d5��J���E2�g���R�����7�Ӻe����j�UN�%����4ݦ��m�W>�UU�UZ�AG���t�I���ꄏ�N���v���Ԣ=��m=#V���]�z������(~O���QBn�E���׭�i�e�3VWʪRb���B�\C8U�S�	��	��Z�EWb��$�'��*Bd��QVd�MR�r����A��%X�sɤ������3UQ�2p��dM~���3����U�П��+�էU=���+ҙ��W@B��H  U����    ,=� 	� � 8 ` d�Q@ 7 �  #��"x 
!�   K�@L��@
��q�2D[�" �y 	�9 �0B�� �$�#��(����e&JA n����(�## ��@�,�1� � �C(��y �w��x=5.��䣃%N�f�q{�pW��K�S�t��g ZW��.s,�^4�v9ֻX�K�%T�X;NpLput��I./�F�Go����0�JjJ�H���'9�i.IT,������XP�Eg�C�Q��$<4�3O���²E��=�� )-� 57*J܄���a�����w�H���;��`^m�h%fwJre�̱�^n@q\D��bl_�r��F �� �f	) ��,̦K@��p��@���SXm69���=�Aqu�����జ;+HN-hUc58v���X���������O�,�p�n"�?�M��p3��~��D���VUwg�W��J�d�R��U�[�2�h���MȚ�x(�V/	����+�!��oe`�=���̿95R�t��~�<���}���F�We�E���Ȉvw �.�˩_ɧe$n8�FSK��y:L�K��P�0J��ɪZJ�d��m�fr���T�0�<`�qM����i�o̓�n�N��X��[�9�G�䎫\��|�����Z�G:�4꼳��4����M
�&�Qʩo'6�Aҷٜ����)L�v�H�Fms�>E�[��?S�q��RQݖ��'���^N^�w�)�	H��'��4ڻ8�[b�,�E<�lu���G����ZlK�"�'=�~ pʕ� H^XL�� Đ����j̈qrx�D����;��;��ď ^�r sX W��&y(V@}�(`M�@���	!����	�p�~H rX [%�IRH��[%�b'�_%K�WEY��D�X���F���� �pH ��	3d`G!�(d�*>ʹH����M�`)#�� E�,��$;�RL1~�yD���$0i��(�HX ?��bH�IV&  � K�n �� G$�/�\�nJ�"AF@Ix��p@m؄�/��!X�>q0j�K2�eK`2XPTHNM@��HB�@���B6 �]W(�$�� �e���0�dp&�@A �$����r<�+��::�p���T�U��t�j�{}g}=:�σ�7s�U��>,� �Q��#�\��K���89���MUR�������C=\z6�4�Kg�ME��JITa����֗~H��J*�4��-K��:hi�MD�VB�N�A�Q�[Re����iҨ����r��� ��5?�������d�a�o�
 8��� �e��J� �j���4)�CJ]�<��]j˹�Z��d�r��nG=Z�o���ޡ�U7�MX�����i5?s?=�Zr깾9v��߶5��'��uO'Mj��'c�����wJ�N�.j=������=�:t=ƪ�z�u����M��z�饡����(���~�ך�(�Ov�IJ�Lh�JK��m����|��o��m4��bǹ}�J��F�K�j���`�ϩ����Kw5UKN�UX-�?��J���҅Oۏ����J�(�xGš4���]Z��j�G�x6��o��hUu��&�SR�*�5SJ6���{��t:hq]v^��˓{��{�î�<.��z���r��^K?�����5�����M?�������=/�
���u���<������n4�ί	���Y�k�ňܑ�T`�55�v��^X"�;HTU�Ӫf	�|+�Q�C噩�D���F��*�V	0�a�A��Y�kGNf�_���Rqz���c�?��=�R��ԧ�꺜\�n"����wh=D��<r�YT�F��=Y�*�J�%,SKl�Lt���|�����,�fꥧ��v|�S��:q����m�Cn��a5�C�v�w���Ѧ��-Ȓ>��z\%��/�������%d�Z$�޶��>���]U8G���k��(�v}]7���� �ӟ!�tҵ"�u7[�oEs���Cs]n5t�>&O�����]G�׭�979�ν��R^���K~�p�z���u$�fO5�cѫ)������UӦ�}���R�W&���4��tҝYr9��~w_S���&���R9o)T�*H�m�Uߎ�KrkW��,�wzJ5S�.d��Z���� U���u�*�Tkq�R��շ��UQ��k�{J�i��០��Vƺ���4닽4���_e^��=^���Yƺ4�;���:��^�Z�Q�E�U=J�l^m� F���6���4����ز�j���^J��<��LrQ���
�f�tO����'�+�,�{���,��3ȋ�i;@��Od<�i>{&9�S}�Բ,߂0��T��fH�#]��O�6#���Y���h�PX"���3UR[_� T�U����v� �ç�-X#�Ј�26�e?,D�SԬJ�E�C^K�<��0E/�J���`2�#�,@s����]��0�� pZ}´�UM�UaI�J�f��H-7ɤ�`�{A�I��K��O87J���:&�o��b9.�8=
_�chE���Ut^����1�^�K��i���SU�uhP٩�7�͏��ҳ=�mg1V�q���S��IJpN���<r4�zuݺ�U#��g�L:5j)55�c�Sꢤ�=~�\�O���_krmW�Fh}o������NQ]0���
wk��i��tOa�O�GC���4��7yg��='o��KU{3ǯ�����+�*k�͐��M���X����%�EH�ՠ��t����8'Z[����2s� ���g*��0���Q7��\r~�a#�~�--�֫5�}��u9(!Q@ @R  �
 � �   @X  � e`8�2 p ��)J �d�*�^ ���0% ��%d� ���Wry ZdH�$s% Ng�  �$\Ar��)<��a�`��FBᔄ  ^�!� D��  ���) ׁ�$�
e�y$y �lb����B�=j1��^Mt� ��0���(��Rp&j%37��_��3��Nd�+���r��;�N-�W~@�2���f�I^C� y�N,f/��U79�8(�jlI�j#"Pl�:ZS�i)op�;AI�*�%K���n��%��Yp���g�+>;*�A��k�Nɦ&�E|�<��g#�� �^n��.�ٖ>�*e��x�b�37� �U�2���a_6E�<\)��É�5+۰���
����̑/2T��$T�I+a�6�E��LT���0G�<�iC���ح�dˎU��R�(Q<�U���� bU�����T(^�l 1Sn鈗xE��e[ T�p� R6\�y	&�lp�pHI���?�x1Zq)#n����ii��]�d�SxlU~l�J�i�MŦɖi��m��.�Y��,M� �s�0ۗ�V-��`Ch5<؎%)5��"m�ڪ`(m")��I*��������r۸A�����2q��`�c�s)$�
��_�<\��R���gH�c4����^.1X~Yv���]���LV���d�G>��u8�୮ҩ����Ad5+�v�c�s���f�j�,�QF�%o
W:�]��٪��8o��b���G[�s�%ɷ�Fkn �S�GJ�sfqn��ge'
�;SjE�9U�s�G-G{"\3��-��C����m&)�&Pm$2�T&�a�d� H<���HP9#�� X(��X,@E�,8�Ӿ�@	�L�`���c W�;r$ �X��U�U� �Hʀ�^,��|< #�n $, C�L��$�����5
 [�eԤنȽ�#�C &x.��`.��j"�5���#��5e�7�	 �*P0��D�+�W �� ��.�µ�n �>��\6\rI.�
�,���*H���HLq�ڀ���Mx%��j#�,d(�%/�.�Ws!UY`� E�IP $0K������
#�pe���<���d$r/�PE�� B	����+v[��wG`\ ��@X�$����e�@��   #(^G� ��d@	>Â���RV�
��A I��!��������Վ�k%Cm��ש�^��I���z���ǫ�뮪�wn�ՂP�#9��ௌ�e$��+n�y"Z��ר�ϧ�B��cϵ�I&����Q-y��Z�B6���ʼsj�d�  ��
���'�Ц�k�g��W��+pu׮o��r���R8�V� S��+���8��3"T��M��ȕ �|��I���'���5~2}��������jGMJ�-:xG�q����S�:�V���N���.(Y�N&�s�׏y���*u�m�x7� j��^�Jp��⪩r�z9�G�Ji�SUQE3UN?Y�����%���V|� Aب{�Z\� k}�n�U�j�J�i�1�_���Z�v�-�z��Ǔ���cۥ�uLd���$��m&��zp��҅�R��<�]o�%o��D�Ɇ�Ux6���V���fD�k�;e���-�Z��5�O��4��K�+K�|����� k7�4�S��|2��U����z�oC�(ϖ}/Sݭ�������� '�究��� �s�� �7���>Ơ�9��$���Q�~��/��� Џ�<��ޔ�e�� �����zjrI�J�<�WUx:�t)ԡ�W��O��}j��ӥ$�|�R�z��TS�t.ĥrδұ!T%�	��M+���E=U44x�(�X��R����{�SkoKirx{�Ժ]+��9f�j��Z�Ί����uM� �$KB��/����Ÿ
���r�H��)�5����W ����*�>GT6}�R���e��fv�� �ӫ��?��>��j4�Z��?$���֖�A,}5���^^�U�{�^�!<��S�ɼ�t�q�=�Z��(�+�3�S�t���ߥC�t����uOTR�����g���뭷-O%����9��Ц�m]
�N���U^KOK4��F�q�T�S��Q뚿Iӫ��9�QMX<��UՋ1e�]4kj��v|3٥�M4�NO�ӣ�����,덍��~��KW�ϩ�nhk�Q�V��EI�fq�X��W��'7[M��P��s�q+KV,t�U?��]丏RvL�'��Z����;�IQ��S�'
5�ZҚ�O jnTŢP���C�1�$�b7=ȥ�\��UPw&D�4���+̘V nexhl���j�3�S+��@���*hY�L<��V�$��`+r����J� ��́�%%$m�C�������'6�+Mc J�	y+'�2�lH��U�M>B���BlL��{�F�L�V�YJ,�����[���K�Q�����L$��y/���Nd�����T���EC}ͤ҃z��������ab*Nnm&f������7J�S0�e(7J� Z{�K� �J5tT���S�j��l�RpQ";t'L�a��G*�io�����*Ǧ�jt��շjb�>�T�I`�Zi𤾏/-ӓ������R�.r{f�i�R�:�N�Rt��n�L��_���;N����:��Գa��^��۷���s�����q��S]��F��U0w[�=U�T9��y�����mER� �I�ѱ�î����Si��K�s�<��z���e��:ޏ��S��U>3ǩ蚋���ivg�����{��q�M�i��D�W�u��5��T��%�⚪��UF���ҡ�dT~q�$�30�X���F���g�S�ݝ&�_O���U��\X�
r�����{-�������-���Ӧ��T���s��P  � 
 ���B&@��	0^CJ
� %��� #�e�� �@!I`@ w w rP�@�( !�`	�@����a@� ���3�2��d�&@qr� 5�	^
��P`��HpYIX�/`^ �r$r sr2���`b��,�#�#-�Q2i�� ��EDlu�8�w;T�G� �EN�.d�f!ߓ\%��w�p$G"$O�!�ZQc.��ѫ��WI��[L�57���cQ.�/d5��7e(�ޤ�ʤ��D�>|	�| �ɔ�{n�3�b�d�r��ٙ��U7��3- ����&ђ���I0,_"BRVi� ��6��|��~䩮J���# ��a�J-N8����+���L~`��]_�/�7l�/3!���q0k�S7�z&_�k�p���P��K�{�
?@�x&Qf%���	n�m�����n�����Z�?�+���3R�2�J/�Ӗ�v�q[�Ĺl����]�`Z��O*�]X����n���D�d|3��dtj.�<� r}�&k���3S��B�sb��P���J�� ��KȾZl�2�6^l�|S-��@�s��m5+ɹ���0�e;܏�U
������}�H�Ѧ�Lɚ��a��p���vvw8jۏ�۲1�-��S�$qn�1�vL�Q�T��v�0�J�I�&:���߸ux.�Z���9Jw/T�a�78duZ�`fp�N�2G���[_����%�bĺ��U�r��[ۓ�V�˱��n�W���U'˱���1S(�.nuX��
3c�v� �8Y87s��I��J^�s�N ���K�f�[	&�VT��$(�(�K��#MX	x	`�x��2O`�����>I�! x,(��a��	�)i�����DD�	��|o+�������&0[le�`DW��	��9(�$� ~J��x ��ݬFٗ Y"]�o!v ഩ�I��ՐY�U D�5�Np��%��B@{ j�xR@K�����n��<�pXiHB��9*�g0> <�Ia6�\L��U�j��`,� �Œ�X�	i[�NI� -�H�p�<���U݋"f�3�x�}��`�^0 @* L��qp`$ �=�¸�!�� ��  {�[$ ��vDJ�h�
 e0 �m��@�* �H,� `�@ q`<�0IY�����q�TΥjbNM��W�9U��93df��B,p��4�Sw>#o�}��O�<Sk��^� �g(Լ�4��W�e�R��,֌ר�U����(�0J�]=�t�(�K�(�A�paª���vF�rDY�p;v�Λ}�_s�M�J���}5��/,�W-miШ���=]GUV�뭩��<�'&$*���Dd�ܲ|�Y��$\�2A`�!���N�]j��-��e����V]���˞�Zj�~O����SxG��#��;��C�?���ԭ���SѼ�z���8G��jpzy�#��9��NN����y�����z��U]j�T��$~����znëQ'�W�k��Ͼ�7:�CIhi���<���]N���oB������qwЦWQ�v�S��CO���Q�^�� $uң�&�*�!]J�'�����VY�����n�`�o��ª�'�WQii�����RݽZޕ���?WY���jխ�5;,"%T_{Y�*��:*��	)e��>7�of�鴟ڿ;_��9�Y��|������U�p�dy�}�)S�|A�#��$iv
�4��D�t�T�&���#��� !��~b�,~��%l��.N7�Us�I����a`�:��NտpM7y�T{�:���hrA�)�Y燹�/#��Z�4b�voc��B��,�2�ѱѡ/�I�m��_��uW3��Mpt�����S.)��E�d}z�_���Y=�c���Ȫ�+�5/>�{Y�y�6�^83~6�o$2�n�&�1t�^ln]J���Q�e��^d�M`�5G�z��r`ϨW:~O��g��7R��v���5*��M������~*��� %�������F�<��4'�����qR�<����Ԛ]�Z�N�:�Ko��:��l��֕W��j4�OSB����ů���4�y�9�Y�Y�e��5e��
����S]J�m���K��>�{��w�]U�e��K9W��JjU<��O�G��*H�p����X9=���m$���W�]�zLסk3�KVD��t�G�M0��Uh5�[��:ӹvU%Q��<�I�̺_NV�j��J�ʥ4C�.��ͭW��^�\Iƪ���F�-{��5�jd��R�e�Q�t� ��z��Iޝ�d�هl���צ���ERo����j�vF�[�`C��]���s���8�g��X�/,�2H\!�^�[;�DŌ�V��JGbs�:�����ၗ/����4���s��>	���xɻG�)W��3U.���gZ��FF^܎�Ƴx6���U�!���Z�!J\��N����T�$�g�R'��84��e3pઔje���f��J.�R�ڎ�3J�2�؈�4����9ɥ�`	3���ZM�[$ơ��i�n��v,EK��ؗ5� ��K�FV\�+��ر�&^ƣ� �-*y	�3оQ�y7ȿ�Qƭ����'4�勇L�S%^��GZ7u���ШM�b�Zi���n�֕v繧������oJV�����z�B;�l��^NOk]�Ak�Q�o'm=�-}��L�<�KJɥ�Ӻ�_�ӭq�u�����N��N�Gx�I#�V�%(��k��ss�o/�F�p��n(j$�U��F�i\���望�Տ�F娖�E����ֳ��� �ѽ�� ��N⊹�"�5fY�4��x 0��M�^ �#��B	�` #)
. �܂@ �  @���  �@IH !pK��,9  .8 H�2����p��P'� ��P	   �VW �D@2,�� ���	#| 1ȿ$�� �B�D��I� y!BĨ���T�-ˎ��N.a�I���(����7(��r�CQ�9-���M��'x������@�Ff����\�J�m6$��M]d�h9�Mݎ�����G��c䙻;ԭ����m%�7$�n^%a�%�����AK~�Ғ���%�Qv�;���~�=݋��f�+@D�,�*�܄���n�φ�O�&]��p��$��݊�J�q�"�f�*		�mpX�H��Ƣ �
�_��iL��6Ҏ@^-ɫB�e6�Y��0��JO.q�"!K�c3�Z@���_ɫ�6'�Bm��Ҧ̏���i��ɫ$��q��&�O��y�s+���`"P����/�\X��X
�.�� �ٕ��pF��6�G*� ��Wg&��������v(«	(*��S$�JriK� ��f[�qy��� *�M��D�6V��&]�p�3ɗ<�(�y
R�õ-����$�ͺgeߜ`��6������9Sg f�{;v2�o�������@>�~5i�\���nIR��k�T�p�#��禲e馬���K�e�{^�7��b��R|<I�M�a�ZP�\[��m��GE�5��+�i
�o��{e�s�a����Y����)4U)Ω�èޫ�q���]�rt�Zw�ҧ�Y�P�Ԛ��T�b��Q����=�囘�bU�3��f[PP��f�Za�iw��ǒU]�'�+
�2G7��7l��@^ � +�/!|�K` ��p���P�	����V�D�W�9��@A[%�[�(Cw �~�;�L���� X��-� ����(��$-I�`�r��dبr8� Qrp�NP� �J��y.m)2��L� ���O���7 WܙrT$H �$�0��A�Z��l,&�0����! 2��$E��A��X�r 	6� � {�@d��=����
��Xa�JA$H�#av���A�l� Ǹ/ I,��`L�@ �(AdH�49d�L�\ $�T �)F � Nx" � I#bH��T($�$��B7��ԯ0κ�E�%N[�rܰ��2��@�Y+p�q/�5~W!c��?̕��OsռӼ3˕{��o�5y.�Ҧ�H.���U�^�LB<�ഷMY%��}*Dyt�xn禚��9َv4�f]=���>�+��:eI�Z��?d�ݽZTW5ԏMzʵ3n�������gѡ�JW3f���T�$��#�^� ��}�9�企B`L��۷�Z:}ud�����?ʎ�զ��Q˾���cR��g��M̧��������r��?9�]U�UU7�_?����qի�d�US��Mj��'�{�[�uG������:�K���T��W
�O�{�:�WW�����]:jt4�Z��p���nզ��7(壧�����e��}5#���E�u
�*X��������_��� �u�\� m'E	K�B�b����u��Н�$��O� ǃ��Δ�9�>*M���5����z��	B=�>f1h���6������.���m�I��������U]�}}��_V�Y#�V��z�9�9u��C5M�S�b�.n��9*`�(�����j���RRo��U2��U�?K�/�KO¹��I��#��M~_�N?^�D�����fH��uV��K��7͙�RnJ�Z��GJk�O'U�_����7���R��:m�4�<[��78S�T9UI���F��ޝY]χ��M+���ܯ�܉_F���9S_R�uX�ߟ����t�Jm��F���6�ט=�{�1u�6�.�ƽ7M0���U����ns���������>����TZ�𡣕�N�Ż�t�	5�g����i�NSG���3贩['��2�zW��c������g��c��k���X�M��VL4ptyw:��Y����>�J�����Q�Q禶��}Iٜ�� �֦�OS�'�Wd����U�6�c%�X͑�kӪ���������CI�M]
]Վ��b�� h�t�sѧ�Qvyjѩ�Aќ}zuik��QM5+�J�=4o1">��*��kپ��'�}--΍Vk�[b���m�O
�+Nr~�hhk���cW�UK�BT��5S%�R���>Ʒ�֞$�jl�
��(�-ڿ�ɩ�Բp�3BpEҭ�N���ףR~OE:��~V�ҝd� :M���Rk�������~O>�Ҥ�Eח���;��ɚ誇Iͫ`��ѻx��N��Q�<S�ɜW�U(��>]�S���=4n�}ɦ2�\f"rcO^��(73�y ��`	v�?x	r�1� ��-bT�H�C�.i��d�&�7
B��A��c_" �t�ɖ���df.A#�9��t�ɐ#�UT"�lH��Q��&��x�D�s G|<J��)��L"+.�DAy+�Be��ŲEK�GdmC�"�'sI+����N�VGE��B��K����Mఱ7���4��$jʶri]��b7U�6�(o�D�B�K���V ���&[v\�����b�
�"ĎQP��Web�E�k(��* �t^{�=��zf���*Ӟ�'�K���;�G�������[�<��᎕�5e�i��w�^������F*ۤ�J�]CQs�����R�ڥvZ��ӂ�c��2��	��g7:�JY�Kn�\�N�T�}/���jt͍ӹj��ڍ�]��:-c=/.K�/���O�(;Q�EX���M+6Δ��7*y}�Ro%�|�5����S�j��g�3�N�gc�ԥ�܂J��M=U8@��QFZ<�Qw�G��^��ne��������p�Ѹӫ����Z�4�jD���ߡM<���T�*Q9�=:[ڹS�Z�⾚+<4����jw�j��j%��F��wI�e] D/@@� EI
�  ��  ؀�v,8   B��#�	�x
�p@���|����&�$$ f�@8�64@ ���{X9` ��� ����,8$Z�W�D��d�pFR9�`9�rn_��Q��M9T�%�&iE�p,������lV$[3 Gf,�nW�Z�
��ͲɃS9.s-ǹ���Jp*��ф�^M+dSc�\x:�GL�`p�Eј���;�j����bT���
� g�����+�Y� �`4���O�xGJd��� %���,ܭ,ȈWrH��%k>DK����Go ��Y����+\+!t�	R_��MY9�����Y�̕�@%~h]�ڟc��/W���|��Ԝ۱�k��k�/(�i�R.�]�9|�FLû��N%��vV���3/�6�&[�W�m|�g+'خ_m���9-M9��쀎��2�?&���1/�KMD��>�kR��>:dj�(�� tw�f�o�������W6k�JN9�j�2&��*�Lvo�?ʠ�qF��T�$�� �W��K�TA��͠�*\������n���d鿔T�EJ�(O��a�(�I�f�Ҫ�3���V�\��i:T�V2ۅ�ç��RVwgJ���ZLDr�:S�ziY#�3����8�:x"ӹ��F\�݀������iy=-A*I��^jia�:���Υ)�c�ZS�s��u�m��L�:i���t��C�Ҧ��W*���m�-\�馠۱Ɨ����:H�U����ɺ�Ԝ��+�L�9Q(���ߩr��'!��Y��`$$U�	nƕ�G�(��	' 9����e�$�b��L!,6�rN9 6�+	�`>��-�5h�O�eS�	�9+W�CV�	�`�	�S`M�B�IT�=6���Q ��{ ��$�@���(+��t,k�$�	�h$� ^GB ^H��  \�C*�� YP'�%� ��%݁PX� �n�`��7%$r��!g�@�^ ��BŃ�@�% ,R�_ОV��]�S%�#W�w, ��3vX� W��p3� �  �� 9,�"K ��p
  � I)8 
�B&@I
 � $X{� ��bI ���b̐*OrU\"�p�k��R�g���2����GB��!؀y�=jy>f�����U�.�J����t�����jy�Rb�s.�2e�K��`�ms}-Z�k�8�ܢb��f���zz�J��KU��^��8��N�����W^�/�K5fY1Y=�Ć���-�\r � G�rL��ۂD? ^
���� ��p$
�����+T�Ȳ{��--/�^^�r,��F�����˩U�doV��|�Qܭ:~�wy9Nm��mǃ�w?S]���s��+�miɽZ�)��Z���W��c�SL�g�3B��Ϯ��������W�N���O��n����M+�±��� ~��*uWS��v���5$b�v�١FG�F$v��m�OCNI{�6�vǱ�y:�]?��:g-:[���#���G��v���Ꟍk�}-R˲?3�;��[�7�����SK�sjQ��wm����x� k6�M).Ƣ��\���S{}�nz)�'�V���g��Y�bZ�])���Uε^��0���:T`��(��$�g��$�EF"�0*O?�����9�)>פ� ��=�|w��=!� �� �l��~7��ի��1,ާ�9�gQB9�=L�հr���%m�'Mh�Hζ�.��Rfx7":�j�Գ�UN���X�³q+�׻�=z�x��j�i7���媥��i]�?+���;���q&��/:�J�<3I�O���Z[�=�{ɢY�ֹ^l{[�4�SV��ՍjcQr��L�Dt'�ƽ	����{eN�`�˶�R~�՗��y��?�����Ӕ�Z����_����XG���GJ0�G�ۇJ��c,�Q"O3�8�P��A*]ʏ��Dd�R�{uhW���P�t��8Us�u���S�MĬ�UY�)��q�jfY����M�νu?61WMK�<�k5dZh�n95��:||���i5��sub�c�n�)�(�jҿ1���
�=�>�V��h�[o[�Z�+���ecd���-U�$RΕQ��\��Z�9pz���]'.E��#�Z��Mj(��_��M��cm�	8��������b���e��-{X�j�H�4Ԧ������NN:�
�*�j��]~z���*�NQ�E�s�m�M��|���ښ�4�F����F����i��+�f}=]�I��MMM7zm�������U�6g��V����US��T��SV��H5��]���ҫg�Zj��������O@��[����;��)��T�M�UoW���R�Ui;�ZjQK>D�{���{�&��i�����EݏU;�*Lي���b�Z����5�vA.���V���)1$o)�2��8�b	gbLۂ�_�Հ�r�Y2+9#\��E��\E���5&�/��VK��ӛ���BnT��!EM��02��k�-nZK��$@_�R�\A��@%l")%*W�V�@EL+ID�&�6�N%]��j��TSN.
5NnX��J�t�ȋ`.��YnB�ۀ���x�d��,B�QQHU �O$� ��'��;�`и�83�ŀ�����j�����`cU�LS�3]4�D#���K��-D�X��Muj&�t��O�ljZ�JU�WTCEԿO�W���}:�A���>��hn�����n���~��5bQQ�j��~�5B<�:�,�N��72˩c�T���*�җT��I���k�T����<���:-\�'w�פ��N�Z8�7:��jqJ'e�X9w���<8���v:�f/���a�	F�Zn�uBJ��Jc��%�U�Y<:���t��91���j�4�i�>�O7��F-m��T�pe�ks^|2&��-=�2��w���j���J��ܦ~��}OK��]��j�����իKqF������J͚����i���i�r���i��TVN�@� . 6 ��   $��� 2q`)�=�Hܜ������	�wF�
F��^�H����
�
��  �`  �r�d`�`��� �a���pJ�aZ��!K� ρ�ړ-� ��NC�qvr�GZ����O�Q�r���'6*�@�X`c���'r{�^��� �Hr��d5%��� a��)Vw5R�;3. �y,��Y�ԁ_���Pt�.���Rf*N�	���Y,��Ȯ~I?�D��Pf�`�q Y�A��^XS.d������� ��	��ϱ�#^�e�do�ߛ��)�3g),�R�ei%��r�|�	ݱt�s%��G�`#m�`�k՚�����ʜڙ2�n��'��d��_��J�@�-9�m�^d�mU�V��*���������
 9ws�OdSʒ��R��p�EU�i�ʀ2�����D�xV �蜷O��¸\��(�Il�x&m�a;�*�]�
� �E�`��q�N��Ӕ7�����M6ڙ�T�3�I�~�G�`ZjJso��dYrg�����H��B~L���2�T��&3ɚ�Rpܙ���A�	M�:��s.�g&*��#U;�x2�|�Ժ�#�4���	8�3T� b%�'L��jm����)<A�������+�Q�tg9�W�jC��tͥ=��M���ā��ʪU8;�O|�u1V<���Vm��y�8�wb�ru��i~��h˞
�1p4���gM�r�9�ѿ�}��no�.�EQUΊrqY�׫�)���A�{��L�pg	�i��� �M&�\�����"-p��`!pW�*���+Bǁ� ^Z඀'�����
��?R�d��`����'��Ne�ܬ����Q [d�  �(*�d� ���'th�怅�J#}�lI���X� ��9�� C���DjD�/ D_ v�b{��_!� C*��_q�2@@,���%  @.VR 	�
��W�@��@��
8�����E����L vv$���d��I$)�]�X0�$^P�xD  D`\�I@eIx�� �
�� �9
@�
D��L�(  ̕��pĒ@��2�58AY���R�vf�+w<����2-��`$��'��` �
���f�<���exu�SO��j�ji�G�t�+�]�۫���ߞ�?�	Υ���,�Z�>
�+���o��Rk�XR�j�\�.d�K�W]�T��=�Z��s'��jg��Z��/&/,u��,X���F�3�-4b�5�4*R��-���'&�)�i���U��L�~ăzTU\Z@�������=թ�XF�Z:J���檨����]#���ӡ�W�?=��z���=^��믢��'^����z>>rk��r��������˻�57UI,����m^��_R�&���}=z�Kk��o�g��#Ɨ�j��+�R��oN���\Ң������WV8���(>��J'��|�m8���j��r�J����M�۩�W"���OJIw��KO�;�s�]J�U;#�~���_Q�O9/��ꖼ���[Zg�X	!�s�&9��qb�Jd���=Z�Ȳj1U}UI��#^��+�u������o���Ƒ�7$�f�ݕ���\�12��rOp��'(��}oF�?���]����=�N?�����?�^���\�5:1<Ω��kU4�zx�.�+�]]J8�,��,s|H�5].��Q�>:[X���5Z�j�Z��mw7�"�tVgG}=wKG�Gs�'��iW
$���F�٬��wU(���{��w�է�U5,Kc7�~�Ov�*��V��υF�!�:Ѹt�nnv�����>O���M}���4�c^��z����?S�Z�2~���S�<X�����9%��ī�}-7��}Տ�U�'�-G�h�8|���:Ւrn�f������v+�X5�6�ǯ���{�M�ywMt䯝��8W��u'n�<��s�b���:��R�Ԝu5��S0��0������9�X+��V��f��L�)��Tyu����Q�S��gY�N�=~���5�O-�Y�ŬW�գMժ�0�8*��/^�6�Կ�A�-
������	�T��t�����(Ĉ@���z�t5J������Mq����eUWK�,�����ѩ�����zS�~3K}]�'�����UO�/&��Ц����M�k47�V�l�Q�EK&qu�-�<��]6G�"���:�z5�k�OJѤ�Wr��gWb��<Z�J��r~+�ץEn�t�GM�-}�O���K�F�8�f���j�뢬88�jN���C�r�q��ҩ}�5�M]|X�%N�=��4���J�*�h�:�9�;Ѽ��G��R$4ˑu�����;��x��:��ɺ5]1-��f���;�;*7/����R��͕]l6)���ۢ�yFU9!R��8�n.q�7 ���i'�5aYE^Ko�Љ�I���.�	�VD���/�iG�|���Zc��"��ɤ�Ax���5f�%st�Y3ղ
�J�K�����Fc�IC(�rn%��4�T.�ʜ�@O%".p��$�NJ`ԭ ��* @�^�,l� D0*��!< �9k�!�^,����L�L����F]t/�R.
����%MSKi�Aƭ֍6u5=OF���=�jWZJ��t����*�~6��L�d���v>ꢚ^H�
����jzƭJ�z����:�x���UZ�I~e�V�B��g垾�Wu3��k��595�Z�[J�ʧ����ʇM	σ��f��V���+�hn��'��]�j_k��u5^����OM�UV�M�#��ݏ�a_ ���U�N��v�$y��W>�J]�gLZi�y=cs����M��Q����Z��W�SJ����}�:�μ�峿�5ϻ�ð���R��s8����^��8�<�r�*�n��z{z�M��R��<}m��K��S���g��(ԡ�=Zz��l������tԧ򵆏v���Ol� ��=Jө���n���T�Io6k�Zo��X���}=���o�0{ �]J�����@ �p2$�
�@L�r����Y �� ',X��8$�/$`\��	�D� d�
K��p�b���H#���! ��@x��ğ�\ 㙑�؁�@`��yD�D�\A��$����+�e�4�9�7���nj"y(ں��,> Y�۱,��D�X���� r)e��̀�7���7ӄfg P����; ��+Srs�����9�ob]+��LdSe��938m��s�N�v�y���#��J�=5+D\�R�5�5)6�r$����g���!6�а��#�v^c��p�~�-cP�@2�)l͛O�k�9$ ��9,ʱ�U���=DmK�,����odD���g�	�&fD`U��9M7.l�����F
�ї*�UԖn��m?���:�L˪�� V�䖉���[I��W������{077x�Q�ĤҒ�f�Q!�Y�/U�('k&I�q��٘uJ��F�d�����������T��Z�$j݊$(���f�-c��R��W��qgvg/�,�0�5cU9p���(D�h˖��Y�tE)8���#���iR�ݗWQ�U������n�`�V�؊�LEG�vf���zu5qq�*xg���:��w�I��Mp��u��z���W��1�u%c�T���<tj��v�U���h�j�ƭXK�Use�.��\���#�@V�s��J�U5߃siy5Jypb����U>�Z	��p���vr�L�:�S�MԺ��^=KU
NU/����1�ᨙG4�+>G�������d|$S&��0��&M��~�ZR�c�/�+� �p9DE��%�X���+��?`'0;AC^B,w�'�<���G�R�� .ȑ�lo00��6 �r��l
�N�WE��k��L^�pB�p@�{V ���� =��G 	ɤB�XpI�",l��"���>���RVBn"";�8�w0Y"(� @��� 	XC`�@.X� *c �
B�h0$ �g 2� =��b?��h� �
�<y%�W�T�`�ʹ ,
��0���7��HEn%K�J �E�0���
�&�[�"@,��
 
$ ��I�  8 ���w1 G؞
H qի�Ҫ�W<�ڲ�?�1]Sɉ2�p'�U3!�a������p�G�dmR`�^nO1~�V㋑��K�ɛ��[EUL5)�/s�zsU3ڔ��jSMJ ��u��n�z4�O���N�f�_m�চ�uf�!�ӧ��ҥS�Y�[UOM+��ˮ�p)v���k���r,	�k'�Kp�y�<����3Y�_[KZ�Վ�������n��mT�5��z�:�RT��UJ��:%Z �R�Su5�z�����ЫUB}'��S�S�+"��}��S�>�n�}~g�cZ�������O�����UV'<;�|o۞���o�SS���7�\����F���:2����۫��=�� ���ګ�*��}}ު���O夽4�kCNͬ�zT9g.�זݭҏN�9i��R��%�;�"����Q
NZ4(7�[���3��[gQ�]N��Y�u�A�*ziG=ֺ��w����/Tx�Sw��M<#�ҝ�N��;n���p�?����{�><�;Z���"J����T�p��bLkniuE.ر��*�Nc��c5����V��D�ɤV��=�U�hO&[�ʋ�K|�;��ñE�x#jT���@Vԑ��\(e�*~O��nv�.Ul�5O��wѭ(��s�?����QT���u]���%'��s�.��P�SҬx�B�M�r���S7�s���G���*~EO'i�/EUӛ�V��'EO� ^��jDj�jZ�ʭYetB��Ol������`����6!�j�n�e��V�vӡ�s�:r��BPs�5#z�R���uՃ���t���N��M4y�Z�R�IgIyM�UQ���BM���W4�<IM�Mʘ�J��=7V�=;I7x?5RGm=�TҒ����s�j}?QV��a�I�4�BZ�V�=tnhԎ��7\��,z��9��y�������X�Uj�������pn�G�p���ΜĮ5SyF*�4�'Wlh��}Ri#Q�nHw5*c���x:Ŏne�e�ĩ�.0s�ݕ��Q����J��wC�:��t]=G��3{�͏��ۺjӫJ��y?7��*�=�g���tX��,v���ReT�uy���Y���s�V�8.������x��\I���d�^���1RsK%:�gcj�U���doOs�C����z�t�n� ��l�J��ob�c���MVv=�{�+�4���*��fztwښu&�#�t�'��5�&|��D'�}�wU��k�\p�&��4拞�5�I9W:*�������o��T4}�M5~d���Wg����Y��«N����V��.�s�j�n������CR�5|�]�aD�j��R}�L(���Z4�����oJ�.N�J���۬Bg�[f��Q�kW_2�u#ѫ���)3�Ӫ�tZZ�c��˧-3��i%g�M}7UT;{�%;�'˦���:Ά��b𲾔|�Z��y�����5Sę�i�܉��K����Ģ+1�BdB �  �\q��y��Ȏ�i3+��X�%K� ���U��V�Qe�K�摔���B�O�KU�S7ҺV72i\
��b��*/$����"��� �����`�CI6DCI�t�G���jL�P��2���Wh�5{�
�G�W�th�6Eʚ�]%�ݟWו�Mm_]��)pjqS�~��R�F*�ҧ5#�5���g��׽שާ���?cV�F�Ԏ���Jq�*�Ԯ&�b_-�S�Oo�����˩��}����ݻ�V ��꾮��kWu2�6�� q]_��Y�����Z��jw�����S2��\MW�D�G�*��ԙWl%|�SK�%N
��SRf:���X�o5�$r�jUE瓶��_v�ZZ5�M.H�U/OU�U����ќ�o~�B�����kJ�����YލG8�ä��Er��ӪO����=Z{�E��G/-8� �:hZ����u<���=g��Sne�����:����&�k�q��:�����+�y�M(����ct�����:SRh��'�t�R��?6-������א��W�σ2�"�N�u��Ԟ�s�J� OU�C���&��E;�����O�υ0M<�����v��]OoWmL~�����֧�CV�Z�3��j�:�}�t�tV��Ԫ����L��N�!�-��Q��:�n4�������z���4>����54��נ2���  
� $� �x$�a��@�� U��`pIl"���ǒyl*�dB�@�Op( A�"J��K����2 A1r�' > l��&l=��� ���,��Gr�������i��뎩��6LV�"�sbHS��
���`��9E�^"K�rU݀�w����Kr��,����wĕ��+�@��"ᴩ��t�e��qxd�V}�����T���9�V���1cI�`i��U��I�dh(�99��W�z��*�?m�e��Zf���H�I�� HI�y��ԥ��n 4��q��`$rIs�e�5��[������E��BW�i9�3S}�
�	M�i���#�3���;{���0ۘi� ��R��۴J�o�	�8I �#%x��e@	���E�@O*9�(� 8���qT��n�RJ�$nq%Vo�' �G�A��҈Qd�*�.
�J��o�N*�DGYSl!L��5]��*��6
�w�aV-���e�9�V��6�*���%W�JW�	U_-�W&ZPZڎ��E_�*���&y�Z�uZ�%Z�S-��+j�d��u�Y ζ�s<*��7&��S�ͷ�R
ܼ����a���7Q%UO��dR�Ma��7�깕�?�4���U�����N%��Q�����T�8�j��ت�뛣εI��A�u�rs�y�j/�t�԰�MT��ҩ�s���'-;HC���8sܮ�-D{NrA���tJ=I��q3*�*��;UJ�N��B��,7��PEKS+ rb�&����O%	#}ѥO,:nA̫>
��FQ���H>�R9!`�q�y,.v������@�`��aH0���� �d�#�Uv ����D�qf?� K�l��^@�#�5��0ǀ�r'�
� �`,Z�n��d�Hd�(&��d	�Y	 �d*o� ��/�兘Ȱb {������	K�Y���� 2��,TL�`������ �dIp䜂��-�@ 
A? 
�&� <� ^d�������`���* >I"9نAB�E�\a]��� �d(~,�{�� ��  �Dd����@ e2P(d��vȂ@� � � G�$(���ݏ>�V�:��0�y]�V�J��
���d'�#w�N@�n]��E���d��x�7 ��$��j��<��$ \K�h{�ƥJ�Mb.��5��H������^k�j���SE��U�>�zJ�dx7G��+���U(��u�\U��5M�t�[#��G�TU�nf<;���զ�(�i�Q�J���(�5EmU*��^X���XM�p�q��M<\ϖ��^�.��>�֣CNjw���[��z��>#��_��ߴ�kի�5;p���m�]MF�殩R����H��p~�Ѷ��6�u���ռ#�z.����k�:ߖ}}֧U_J��O��������SQ���T�t�uhSU�{t���6��롧ex>�����p��iL�;#��[q�Lu�*(�d�ԫ�T���k?�_ӧ���R�U�� Zm%-���M�ծ�US?��=Wt���)w??��Snnz�/�&��Zo��	Y���0%c��:� J�E6o(��jS���*��z��j�:�rٮf��ʭ�eɥ��nyfj������_,�Դ�>��z�,b�����\Z7ԕ��� =R����uSY/Wp:6&n�]S��`:6�L�c)��S�;[���z�ϐϭ�_�Uܙ��� �_C_�E��_�Ğx�.�ݮ�|��'�p��,��R�5i��a��Qh9��:zgJ���*�G�В�r�MF:K�p�G6�mz}�ƽ;�:J͏?#��/RkPId�E)��u���X�B�vT�ʋ�eҗ*�)�xe��i)F�ѕc�r�:�;$^��ź�)�>{����^��������J�7�X͏����v��Tq��U.�sz�n�t���fL�{׫Ot���ޝ�o'ϋd��%�����UJ�`�g��X�Ӫ��<��M�#sl�S�I"lI�E�6������*1S9W��RO:�j%q� �J^N�Sk���F\�E�%j�,i|�q�H�3�5���v����4��Xa\��>*�<��d��y��:��C�M��k�Z�'Gfx֫Gm=�dʮ�U�4��ٸ1Mt����'tĿ���v��U-u]A��}N��M���ӥ��u�F�~�OsMj���L�n��WO����V멌G�ӎKZ���$ϝ��Ӯ�'��eR���M���%3ɩ����MϦ��%M36.�ѩ8�4f�:�3�QM_���.��N�t��b��ע��km�b��K��6���X&.�&���L�գR�~�7
R�<��S����ꢪKx���6�+'
��񂮼xùUuM�W��qɚ����u�5Z���t��6�Yy%�.��Ԧ�f���-0���i�;Q�t⯃������Q�m�S=�M?z��b�TY4��"������I�z��}7�O�R�c�TzO��lz��%L����-7�M����cIC>��m�ۮ��]K�>kIT�D�9�y�-u*P�/�N�S��e̐t��*]�k����n|ث&R�J��6��&��+2j�Y*�l�(Gs=TS���3�V������T�x��M�?���p���(�*W��S_V',�G'����qM-�}_Xիnqjz��M3vb�֍��'��=GZ�=U#��թ˭��� *����z��)���6�����Z?1UuT���C嚟7��5=v��S<������R~��m%c^"z�f��n*v����V�_RS�>e�]*Ԯ��[f\���"�\D��V@PP�� ALI[e�F��T�I�z��2�
Ȑ5(J0�NpA�M��c��4꽙e�c�KN���b��US�:Q��jZgj6U;��M��0�*m;euT�����Q&���i�vUT�w�� ����4�a�>������-� '��UZU5˪��I~���H�L4��)�:���wV]ͩ�ʗ�&�+ZzN�1�e����+i?s�ɭZ��uL�s2<�~�ش� ��+7,��6����Vf&���:����N�y��{�I�x<t�8��S��+�"U��>�y6������?c
�ܲ��i�G]��[a��s�x�ˊ�fp�*wa_��n���jwiy\���𞟿��������궦�/����nt��zu�*�*_���ز�� 0E     @��20��p�g�/� Or9��B�7'���O��%��rϰJ̀nL��c�!H� d���y7eݒd��#�� ���\I�g��*����s�v� �U�)�EVd��Ġ���� ���O �CK�$`T�`�
��+%�N�!o�J��W�����!̀��o�U)XdC\��r&����N91���`�6p�s��k��t��d��R��ɚ�ed���G����D�Ȼ��pF��8�Y��,�U�;�
��G����#sh4��0�S�.-`�XA�G��ÔF���v�M9�#N�9���Q��fb0��0��I+~�i����3���&j���~ߠ�A��]�m[�6�i���1̀�Gq0�̸s�&��9�6�fy�Eu]�L�uY����3�aN���D�,��G����ۅdjR�6��M�i/�������YI�J�����<
���8=D�i����:�%��:�vl��:�Tu�F�ξ�R����m�=zˮ]'��5r���A*��i�.0b��ɤ"�2���)�B#�&Dܱ$
>b&`�՝��ʬU����Y��Wc> �[�u}�ET�0���S����qU>����Z���/��*�����L�Z���.���H�^d�W��~KK�t��f�S��L��QI;+FC��U�!��?II�5�:o�8�g�5Q��J��_`<�/�aʼ��A*�MX�\��C�,���+�)@�#�p��=�R��x -��Y\�@�`D2�g�m�`���;��x.@l
� 3�|K0Y�$d}�9,��H@ 	�$���7(�`�P)� �$�����2�B DP�]�ȝ�2�C�;��M���D؝<�y��$�p(O�b` �>	�5�$�J�� ���pP@���
� � ���%ܩ	����� ]�W�d�	r�� �@.��( �� ����H�V�2��� ��   �  �6A�+bL�@�$���9&�uw#f+iJ�J`�jV٭J�� �s?��&[����blI� ;�6D���ÕL���|�(��'��2��2� "rW�Op+wwe@���"�;�ܖ��TJ4�Զa���m����<�צ�y��j�U��*�Q(����ʦ����m
���1���;��WN.X��h%kR�Xx,+���gZ7�J�5q�p�Ԧ�'�R���֧����^�J��0y+ԋ.L��}�(��m	ˮ����o�^�Z�*n��9?G�:v�w�օUJ���G>�Ǫ�F�gF���E�%4�ycSQ��=G�#��=NǞם�6���Ӝ#��*#�߷�b�y�N�9�F��V����gdJ����7]n��#���~�E=4����֧GI���ʥ:�p��=Sv뫢�������:��nuj�Ֆ�'4�]�<�$y5J���'=κ��t�RU����m^�_�O�x�<�Z��S���V;�21Q~�j��ؕU��ަ�F�V��ufN
��XE�XTe�I��9R��b��%NeI�ZWf�v"�%/4�fNt�N��.@�w���J�}������ �^�?�� ���}-|������O4u<#Ϩ���Яc����j%JT�A�Rv��Dt��8�BiAέ5�ǩ��UBx,��V����]�k�����I���f�I��Z��и�8�G��&<�.d����d�:\`�-����)V�4����]5˄u��<T��;i֧&,]z���$��R���6 ����Q9f��Fj�U,}M�����=H�@|}]�t˥��-TU�2��t��WB�D�K�5:G���Us���}+��>9<z�z�ꊕ��9�l��->�5��iT��W�ͩ�"�J��n�I����7s�53�iM���c��Rtish3�Q�n��r8�G*�&zN�)��<�S�&pui��%��(3��4H��1��v6��.�0�pi�$h�pj.8�ڀ�I�r����n'�i�}鬝�T�ɞ���:��ɛ��]{�]5S����ލjj���\�ӯ�D\���N�a:��'�����u�~�m��u��8g�GwEi5R����ӛ��W�R�L~�j�ɩG����&}=P�ԏ�&���ZTT�Үb�UR�F�h�.�W����8~O&�ε3M���*��b��um�Y\ᩣ����QZ����ڧ�_�K_
�����ϫ�\#�jmkj���_SmU*nq�s���m�Iʱ��ڥ�_"������ۄ��)>���kR����*)��H�]5#�izz�K��i�Tʩ|`���Z������1c��s��.�:5}730~��?i���}BV�}���xh�?N�t'rϦz�}�Z�l�b�]������ծ^�+)#5.9-��yjN��cT�w�j�Z^�s��P��\����@v��I$�Q�j8l�nw5�2Y5�_W�P�LU�ҥ9k�>���_��r��� �N��b���z��VI���t��G�m�I�y5>9�}]OW����z���m#�+��^#>��^�U����=Z�՚�Lm���YQ0o{M4T��V�,�Hmr���.��si��	���YL��X7��ؗ,�$H�M\u	�Q��r��Ē`�ȓ�䭘����Io�5��T���)'�mu�Y�v��B'�eyd�zwT6��ڍ���=���*_֝ub�ϳN�N�*R�t�P� ��_/�����u��jT����,��u��=���G�)���N�z~�7j}�D��o؞�����RqJ�:*i_rF*}J����C�j��W��xY �}7�9�۪ptT�U�KF�_q�������_CQ��3{��U\�D� q�����]����:U�������$�l��?_&�����#�A�Q,t��˓��t�'5[U[=�i����ߧ��vS,]`��ն��3<�@�2K/�ܭ�I"�VH)�$��i>9�L� Lpjoɛ��u#��G�Ҝ�U5NMd�B��.�`�STY��K�_K�u�5�W��� u��ۺt�{�������F�}
�Zu�>����'ժ���۫o����y?i��F�ץR�����1b��,�pR �D(0  �� @��p'� q�������"�pĈ�W��X/8�$y c�	 2���U��A0��Am��p*xYjT�'��K&X��GNu�8��ZU���5M�R�ZK�� J�p�n_ur9 �<�x$H�����_��	��
,�ň��'n���eY�y�<$�y ����(w�["o%i�L,��P�GJ��o3��T��<`�h
�S�2���qݜ��M߷&j���
��5i�z*�_c�t��95�ӥ���@,Ƚ�-*���x�1-�:Z3<�4�� �$�R�-�'�1��0y�F�+d�ŀώDÆ*t2;?pe�ϼ����InсˎJ�ŀq���]+��T���
���up̶�(Uvf�
�J�R�Ն�|D㜋^L�(vhq��l��ְO�m>B�����S�.�p�M����*i\�5�4�S i�i�8�Wɪ�T�6�8�o��m�,�M�%9#���WU�nE�r$����
de-��KR�?J[Qp�9�	М2}[��h����pz������6��SM+\�>}zq���դ�F�H֘��b;�թ��.0s�B�F�;��2J�u�R�}b,TD��to��Z���K��p���#)��!$�ˀ���Ob�r8NK`&<�O�,��t��R�s�ҩS`��^����/&�v��1�U/�җ�P^�� �V�ʒj[9u_��.�Dƪ��I�i�ت��Si��I�¹QC&
y��� ��v�-�9��.@C�{�dA9�$`�`{ ���00�����)�Vl*x!�x�y"�Y�;	�/ 9);��(�"�+�b� �(��@�/W��Y�ST�8*�p:��4�K��4�̶$Gp"�L�,  �`"�H�b�2��D�����Qp� c �r̀��x�x ���)�� �D�^@��  #,w@��`HUVg��8/���
� 9�2�r[�&�  ��M�� �X@��`D^@1 R@�� �1�		���`$�����8����uĞ]J����S�̿n9�-�Wde�Vd���:�e�Q%����x3�YN�UrG�ə�Dn�$»3t�nJ��"vl�� Ӹ�̣I�f������nԤ0��*}Ĩ��ӼY$�Й�l�������*��wG�s����**>�JL�|\��+�9ӯ��t�IK=���ZsI��t54������׮��N�Ɋ�u.`ᩦ�y�s��Z��G��Z����N&�N��ߧ52m&�T�����6U�5��E��㯥lV����_e<Sy��Q�:!�On�שm�~���g����˫�u��O'�o����}P�O���4��;�����Ssߡ��-<#ӫ_���W���%���z�uԴ�v_��*,�cN�J��we�էGJ���Y����<���Zt:z����ۭ�U���֫_Q���Npz�?��r��J������|�M��^�j>ƕ�gX�,����i�z�ޢ����6���}t����Jy���?IT�B��������¢��2tԩ��R�2����|}�G���L`����h_'-9�.�y���s��Ϸ9�d�ٟ���F�Z*��}L�i�V�N[�6c��E����:��������46�'��AB�V��N���){��� 7�� �Ջ��7FڬM������UT�������t���.8/ӱ�N��t��z_.*�}C��˲G� �z:� W�'wy$�}�Q�/���ұ���4�i8��$����_y�V�6K�-��RĬf;�:no�4�rt/�.�gI��wGs�tw=-|���ܣ�V�R�ʪ!BR{*��&j�Q���t��鮟9�Lep���Q�UQc+
�鴝��M>�76��C_B�E�(ڭrx�K7;S�)��	��F��6;SR��~�y3=ʿ`,'����F��ܤ� x�v4CT��km+�s�}�м9���ک��T�����U+�w�<Z�'B�e�غ��Ҍ���UOe�F��2���JE�NLD���4sjґ�y= �).���7dt����$fc�.��Op�3�x%K�t����`�<Q��ki��A#�u1����wjTi�K*c��L���2�q0kS��u�fj���9�F�0e��*cN�7�Ts��Z�.D��{��Q��ܧLU��5��S�^b�}�k��f�U���&�WM��{�����Ŗ=������V�?c����c�.��rm����oS�M�r}=U�R���U�,UM�s��q��74�d�u�S�����uh������K���?MMi���+CCWg�KqMn�`�B3^�q��F��p�l��j�ԭK�#��RJO3r�9|�8�s�T��2�:D�\�3��:�T:�DW%�>�:�4�I�q���(�,�ssr3j�SfS��ՐJ�D���� �MI��|�����
aӄJ��ŕ�U��I���K�>t��!;�����OR��p�|�֥-�=N����MZ���k��;�Y��ҵǈ=2��l���X�p�Sye�:h�=*kT楔b<��$��}�U�-�
,؍��]�n�eT�esON�� +1=�6��g�U3��N��uQv�=E��d�t�jI]��;:nԳ7��_"i*Ѯ��[>�m*WWJ�t��Mr���/�F�Y�-B;Q麕\�� k�J�^��J'�\�>�J�]_�O�謦z]W�EmJp�z��(�i�4�7�E</�*��M�WD�%UJ��*Z�6�o��i�:�L�UL$L��ܨVDI�iA���z�0�o��L;[Ԣ�M0��z;�M}EM7lߊ���H���:�4�ۭ�����ת�|���S������m��6�)X'y���m)�L��N�Mv:uX��E*</�ѣV��t��8M�Z �ǿ�ȡ�V#'�=cW�n����6�_�T�����κ��z�/8�J/�)�U�l��9n�m7.�5��N�ӄܩ��uro{��$�R�2E�S:S��0���h�E,�p4�}���it�<�N�����::�V#� ����2�;�`uT�YH����(�֌�Y|�\��:ը�0f^Y?��U[ t���&O�~���Ե���� U�N���Y}�U�Oos��:4m�i�ҥ*iP��Ucd �A["e�    �$� ` �" �bA G�� Ia "E G�Bπ�9%��x �8�1�I�%����c�	�D�!��?���95$�+#�C$e�؍�>�*�t���X�J���/67M�`V�����	v�m"�"�G�n��bd[��sf�dT�p���A��˜��� �s��P�ȲB!�6'��d���PH��%����h58�95yC�(�M�7g|��YMFY�4j[�`+ęjnn^;��+�L5
2wt�d��R>�ۀ�ӂ�x0�qfY�ī�O��w�*Jo���v��7s-t�@
d�vo���"/���'�<�wܳy�g�v���M�S}P�����Y^I�^$b"�Sđ�7#lM���	�R�smOn��r�n��ˌ�my0��U]�n	�]Y���˨;�ਭ5�o��6|��m���9U2�mDy;}(R�Re�{&���,p���5zjIA+��)��*aY�V�4�5�
k�mR�q�j���u;���o0�M�p�m�B��ኛ��D�V��F\��U��J,a�6+],�9���J�'$o��6��)o�2�ra;_�a�S
�����wr�駸�Yw�8L�m�/�0��|z)�ҹ��H�o]w����^��#�ᬏ���ףWi9�:�}Z�X9�%U1�_I������:c'�Z�D�r�A���|���q0O��WzT�T�+�S�N� ��m�3�#�$'7f���V�\����|"�ط�Bl��2�̝9�[��^EGZ*x��X��r��M����_�[Ewd��y� �x#<|�WȺ�G$�VI�^$	�Z��p�;�}��������` /&�H5�"?�y
��#��N�D۰t-�Q� PN@��� [܂F[ RJ����@�+2.�
Q`�2�',�	�R�6I`�%r���-���y2��B&���C
�8	D��DX!�6A�0 ���E�� 0  �-�V  #����q�8��� Z/�"DHT�E� �a��%��x�@a�`1�F��q�@�/
�İ-�$M�d  y$&[@ B�`�$�&K$ 0&�n��\�������V�x�G~��9U�f�qm�sTA��-�^L�Vى��*��lb|�-W$��v%N8"���x�/6-���v�0��qRę+dJ}���0��$�PL9*�B�s�y#�6�+���2�re��Ζ�&�}�]p��N������%{��t��"��s,9�U-�����T��Z�R�uN<���nv���W\�s��^�ק=�5{zj����MJ��t��=��������н����7�T��Օ)���7C�U.���3��Z44����z���G�������ֺ���r�6���a���^�MA�6�С��EN'�륹t5'>���5����=)��T��uo�wm�u5s��n:�S�y:��:��O-�շ�Rt��O�c���tt~�5}�#��j�w}�|_�S����&�2�/&�I�sY��nNnQ�E�_Ŏ��#*ҍk�5l�84B:�Nz���Sk��צv�$��s��l~v�ujj|#�֪�Q����	�T�Ǵ��qM3�{gㅿo��[z4�{�sѥS��������ꟉM)�7��>L�ɻJc���W>��9��C7*9:os�t��Ǔ�w�t�,qt�=���v�������5� _S]}�2�����-"��s�EY:G(�Z�C\�u�}�KϘ�H��V��ـ�j�k�8(��F�ۻ�3RM\n���t�GM�#�T�t�:ET��P�<�P�r������1ҞG�c)\�UD3�`M��-��� S1{�jJ;i�3ʼ�T��5S��譬���Iy��Y����Rԝh�E�LWU�*��L��\Y��H9�hQ\ʓǫ��(��Y���^�T��i�|n�)i�mm�.��)�\�����]<89�Z����J���v�4���h����E�UK�c�a�ຘ�%��zi�#�²f�Lp�n��Ѩx2��2������Xq<t�ZId����U-��]-`�լGO�jtc�Uy0�=-X��f�L��U2g���0�jVlrj=�Վ�I���8Ō���X��c�D#�DU5��O^�/'8$(�~��mR�;Ӭ��Gɺ��ktᙼj�}�X�<�|�=�T��-�-�F|����MUS���F��/,�Jkvh�T��eK����R�T�SGy������U��v:�jWMi&���؞_��Rl�h{m��%՘;&yz�]dƛ�3%FT��5>��/�QҘSS�>~�qM5U]U{"ɩk��,B<��M5�j=^�Sq�'�Q�!%�J���z��V��<I����r�o���Oo�V��*d�V�J�<��թ]Y���b���O�=>�{�ir����p�>� ��3��n*Ԅ��4jT>��q�L�f'����S�<ں���1�f�݉ć�*r���ٶ�if��KÓ�UV�s�G�jT�ʞ	n,�xx�>Ə���V�v�#��7ET�Y���iT�5N�uZ�[~���hi�R���Jp�{��_���q45��J}?WG��e,��RuK'��^
}5*f���a�)g��u�;"��\��c�:zP�)�}4B�eK�uTL>�U�RYI��mY��L��A��ӽ�W2k����I7u���sz�T�Ԏ_���0�sG���ą2xu}A;#�޷�|Q��e�٪�h���p|w��!K9�j�9/�_]��7cZ����KR�%U6�_���S6�c��ϛMM#���a�׽j�ɪ*�I�Z��ҝD��^��{���4���5�.�����	��_���g��?���5)�!e��?�������NR}�ǫQӶ��(>��������]J&��??���8�����T�S[�G�#J���4쪹UI��3z�_�B�e5��O�g���:ir�O�(X�y�z�n��������O����7M)�2�����1�qʹ�#��A$�:yc�7G-M7S;��K3�)F��mq[kݛ[zli�%�VM2�N��t��N����B;�\"u�z�#s���Q�I����U�u�*y`-���{�5��e��@��#��E����U��e��l֍=z�R��0��7����^֊t��4$�ID[����F�u�  E
@ � !`��$ H 
� � -$�,��'sL�v%�  D
E��;�]�F$l�"�g R�@�(����ف�H����A-0N"J�dOp#8��fv�8T�<�p�	i�T��<���{	 ��c���̩$�3b؂5+�a���� ���+d�f�r�1�`L��@J~䋻Q%L�����������2ߦ9 �.<")��,	�$�`�#L�S���3=��J,�8F��̵���9+�х5N ԙ��Y\�>��v�iM�Υ8=5S��*����#����5Y��x�32����^@�N�Yg�	���ZXDx���LR�tiĘ�WZ����_�Ȟd�^WsV�p�P��U~�~�GU��u�A�U�U��ԥ<2h�r����J}��]��su7S��5�ӣ�,�2�'��su�ϓ�ɬzz)��vͭd���j�� �������Jñ���[�<Ξ����*��8���Z�M�vy�5[m~�w�L595)�U[y1���ՠ���i�^M5Jŏ/���ݡ��5�NT
�b�����]�X�T�$��wI��� ��i����T��Ҏ��T�o s����*�����n��J�Y��]�5J��}y3i�������	)�dt�l*'C:5*���R�'E*e�)�ǉ#i6g7M���%\)�к��֔\#��2&��� UWK��7���2��䢴��GL���[��"��9�V�r�N��cj/��t̵r�M;�9��V���뛚U���k�j���QfD�e�#�	��]"�wFy��Mo��Z�9�Vջ]�6�:�J��u/(�:��3����)9�U� �E�`f��v�E�q��p�ʳ��-���"fm����_��	��dA���(��S��+�ԋ��x&f���c�rK��/����1�a؜	 �Yr��_&P�
  �^���g�	����^@sD��Y"��(�NCw��FI , |��{T&�H`$VW(°S�l\�"G"c 9 ������Iy	4 +�� ���) ��� ��p.���%
�3�U��X�d�C�� 8��   ���`@	�*�C�
� ���	�  ��
��G`,�2g�,��k��:�*�#�Z���m�A��u��$�i�2%�� V��]H�T��n@�tD���$��L���k�+�@�`�i+��ʫa�NV�-X�C���]o�2����R#Խ��a��*k�[���3UK�k�V[��Z97���.&��v�6��}���������YIK;��9��GWM��jK&���U��iW������Е�A�k��G,u�S�frj���-bSM�Ry���t'5Aں��}�$c��՝�������l�;�m�U7O)���;�=f�ө�&�MZjt�g��4wjҠkmt����L�����YI�����W�ۡ7J�pI�~2m���W\a���IA㮮���$M�_��Ts��}=�n}�a+�F�M6�}}����n(J[>��Mݶ}-o��i�X�G.�t�7�[p��b*�������Љ��u8��1e['m��[���Z���`oCI���Q�(�F����m�T�m]��}Cm�����Zo�7-�dN:��b��I4��;���*]��LܩD�+S��Ш����U�T���ϨR�G+������\�Ǔ�nz4�-jN?Ců����3��Ź�O��v���.\\�v�>�Х�Rg���ע~3���j���U�s3c�VO~�N$�t�b�sxv99���ʦu��Ӌ`���wQv��V$����oQ�}�����kZ�wcӸ_i���c����s�����5�Wj�^N4;w7=��M�{XLx	J(5o$h���@)y%X�2��$[�*�78dp�F^)�N�(��@si$a��s�OVHՊ8ԯ��Wg��1]6�Q�t�.���uQ�v�O�d���a�`a~Ŧ��K�-�2���8gZu;�<��*���u:�Pδ�xi��J+�r^G�U,�<��өl��Mi�gN
�*�Y<���3yxU)�9�h�W�c�y�"��jm��(�V�T��Q�Ɋ���`.�liG�WB�i�UU.��
��E��E9����dYGJvH�����՝#G��yJ5�Bf��ShF]*$�=;4�st�]G7	D6#�a���]�:a�% rtw1Uz/&]*e�Ly�����t�t�������2鼞���X��S�o.G#��tZ�nVlq#Rut�e�Y�"�n	��KNJ5N�t�3�F���ObY_^��5CL�m�(�R��g�UQ�=[=�KZ�,��MΟ��Q;�괳�h��Г=Za6y,�W��̝�c�Mk��F�s�j�=$�S򞣺�S]��L�{�g�UQd��k�լ������������s��ӎ:���]�y���ԇ�y]wMMʜV�sJ����3�3]V���a�˹[��7� Yxd��^%2HB��^.E	��N��.~������v>m�`�^͢^eju��� ���E�֖�w�>-������WM�~�r��� �N� ���UNL'���x����[�:W?��uqJ�E4}����h���>ǟS՛QB�S�k�R����5�R�t��n�+�f��OO�N����#:ޡ�E�sݟ��ڐԷ&T��,���z}�����98�z�mBV�|���|�p��W�z�Z���z�9��P���{̉�=J�nd�|��͍u<�D����@���\Y\��k
J���LL�[�97���.\2��m?84�l���ԗtU�I�^��ܸ�N��,�/O7O���>�:�VVR�ɺk�xh^u�X����ԡ���<�}^�	O��Kfjֽ�ό���[���b�����^��=W�׈���պ���5n+�M��x��o�:�ɹ�7��W���dz��n+��,�5�z�1�|�Crˈ�V�x#ԩ�1!�wdEM��ܐ�ІQB#p�b �$�5>�$���ϱpYf��J��X�� �%X�ː5c
��!w��i}���q���m�}���6��i� �tg=���bɵ�B�*�  
F�@Iy 
@P!
�$ ��f 9/'n�A @x Ș(���J�jn �� $X<�0B� �`��tXb�Q�g�Ex0�Ěw2� |�s܏��f���Q��Z8Uo$��`�f���J��H*��|��qq2� "���CJHȴ����`9����;�
 e�=��`C�}���$^ �^�X����}�V��PN���(����6�F���{2��E��t�:T��Z)��x��`��U/��À,��I�� i���M��c��9�8Wrj]��t�s��Z� 96��j;�ن�2����NL���0ܹ� �Z���UWeff����r��[1UO���v~�u�[�"�ӅN|���b�fT �N��C�cT��˫����W����*$��T�'Mz����R�/�ͬ��qogěY�lX9�U	�i+]JR���1��,$����U��)Ҋ&d�9y�e���t��� %Zi�%nJ�^J���>��i�Ξ��*�x^��w�A�K>�p�XJ�IeY6��z:o��1����Zy[�d��?CUiŚ��eR�x
�����MV�c� ��2�UY4T��<�S�j�[>�v���/68�N��,�f�iZPp��,$�D����3��§��sM���wnX'#6EMa�i������ET�V�^ ���1��$���m&�I4�,���mG��*�G:��F����s���U%p;�/�N���T���^�f�mK�����-t.��ۋv'�Uf�+��KL�7h�ף��q�ф�\���5cn��z_cL��Yd�,4,�-���U���2����K�],{�/$i�f�`�����ŲX��X/ ^D��@�<8���"�Ȅ���@�$mr ^;����g�,�����|�D`T�~�U����ਖ਼˰EY�FV�0Wa��Ǹ}��Ո�	*@��a@��I��9bQ�m7$�a�J �d� ["d;�+K�'�� ��pK�
 �_ G��, �|�	%) !)� �%�5b,p)9�,rb
(�APBp3�ň�����>@�B�\��`"�X^B��h�;�e���	��HX �`/ �$ �(  -�� ���(nY"P#�I$�JG:�i�ysru���V�f�u6��(9W�S�v9�G�*���'�K����[$���92�.Bp��z����*|���c��ki��ܲ@V~ �+�l�]V#o���v+��o��BP�\��:�e���2�����/�.�:"4��j��:�s�Tɇ@W
�;���ғ.0Η<\���
��9-6lڤt�3�I2tT'n��R��IlӢ�Q�S�
��7�R�F�^^	.�3c�:͸9Vsu%�7�Vu�U����x��a�:W��J�k�<�qc���松�O�ο��UU-�q�V�������\X�b�|����cS�*R���[������(qF�I?��{��:t��z�
��9f�Ǭ���u+A��l�ԥ���zo�ףk�UMe���i�P�5&�Ϯo-�ԯ���z��jm].�~����[oKN?䓦������ͭ&�'���S�dJvꚧRԢ�Lr�i}7�R����U��n{�_Y�We�#�r�EtP��*}ٕ�n����F�Ӛ��t��YFh��簫R��g=��7�Q���U��99�)��w<5��<�k�W��kR���T��B�ƕ�|�mWS}l�V�n���?��~���+�/�ʿU�Х�<#󮺜�g7��7>��S֨�"��͸�ꫧ�J�O���L�2j|\Ľש�U���y8-�z���L�]K/���%-�g�����T�������tU���QZ�t���G��u��j�T�^�mNjG*�[mB�[}�qi��t���]P�&��k����VG�j���'�S�{ki$p��369}Z߱�����%��=>�S{����ϓ����y���������3�ǃկ�4X�3���;�u�!��+<�tUx9�i�j��95�n��qd&�/�rҌ�f�wS��C͉H� =���I@��Wr<��,G|�wVF^;e�%WF�y�V0���i0ԕ\Z�5k�m�J�z��Ĉ_�uk�9�F'�'�M_���TES\A�k��ú�'p=R0�������8����N���<G'�V�����O�0zڱ�py֤��5�Ƀ�nM#�k�s�A��\A�FXw�Д|/�R��s|� ��Gª���F�W��Û��S���r��E����i��ΧqU*&OV��5sb��=�JkU\�vdT(O���d�IT�j�\���<�P�f".�Ob^GGRk��4N �=;�����sZ�-X�%�t��b�k�̵�ti�9�mtc����#��e��
��sz}�KF65:KgE�UAꪛ����jt���t3��X2蹹�����֪!��u1�%�:4���'M��E&`�_��_�?E��ӧ���(k�YO����j.t�U�D�3ɽ;֓"1�Z�;W���r��o�*��T������}8|���O~�'���f�^	0��*���lET97�*O:w%U��1u�U�(کw<+Q��KY�5��p��x֫�����G��G����CtVEʹ��LAz���j�:s6,��
Y]��Q�L �؃�^��r�G�=��2�x:zr��V�����p�)���'K�S���K�S"�������K�ln�'fޒ���$Uvu��!%#ӝۓJ��I�:��bz.�T��]m�\ON�){�R8u�ɗS��OOC�fC�H�����Yrf�fܧ�e�5���&]m�7��3|� �F��R~�@�pG���E�$<�`�3~��yň� �B�b;|�	�W� �"H��  ��~`W�I&[ h�&X��W0'�� ��*3����]���iS޴rs'��)�P�J� �!G�����K��l�*4��M���\ p@ �  `!$�ܢ&���pD� H� �#Ő/7C�0��W�c��,~� H�b `D�
�Gp@p� p.����7`�S�qؘ,���x�9�[�#�Fj��8U3��y8V��)Jx4��?ɵe 12D�����y��> 5ْ�lQ�'��K	���'�"}��J� <49�̓�m�Arf�6���W��+2,w,� ���|qa���%Y��N,D�Ų�3�e��*���J�`sv°�ɥɪ��sw��ڪ)HK���ܲ�2�s���n1'�q�
@ƣ��z��+u>n�7*���NR%Ns��E����� �w���+�^��̷�n����wA˫!�ԡ�],m]%c]MR�E�)����ͬ�7�%Trr�i<��\���"N1+��P��
�Sv�t�?���}��:Je`��YX4܏+��I�D&�OK�Jf��V���*'B�X=��#�y�q��2�i���-4�	���� ���Eٻ�:%
�!��_�Q���`�Qdt��8�����{�t/7=4�M����9�<�Ir�b�	m��*~�ݑQw1n�G��4��U5]a�F�t�G�Ӿ�ɇwy70Әg���jT��N��Eщ������L='�2��U6�%Wn�u`uwPp�n�*�c�f,9LY�U�d�ȭ��s9�/RK��:s��o��M'�\�꼤��F0��y+��Ռ��J,c��/S��˥~j��S�&����b��%7��?i��l�K��^S$KM%%w\ t�N��<O%S��\��+�+чcؔ�2B�\j</Fy������J�iО.�z1�Z.i��oӘ\�}%zZ�%N{��\��������k�3]r�r]©|�vU&�u'ɥ[\��Vrj{z��XU]ʙ���q�m�"I�=ː+a�M���jx� &���?�Iܨ�ùp��Î�����$�|Z�H�����'%�e����r�S���� ���$"B��*�H8Pn��B�Ud@��3a�p�Y �`�g�`.K���\��@"��*W D�� p� 9���Hx�N��$߰*S� e��P�[�K�E���%�$r��$��2A P�$� �@F�j ��.2xl%y�����  � 0Q��Tn#� �Iw�=��$�K1U](��R�ƭe0�Uj:���7^�9�7d�fL�~
+�N,V��cU}W�έV����q�5�S�7.d�`���7`����SGS��ɛ�t䐀�XI�D�9� X�IA)F�~���I�Z����nI1g V�w�[� �R�0����\09%�]��i��] pT�ܰvt�L��`9��dۦ����<d�-(��@e(F������ ���p�Y�*R���_'^�pb��S�=Jz�}]�����ji:|���֓w9�Q�=�^Z�<���8�F��^=Z��4�j����G^���s�zsu:��!�p�;H��=[]���QU�Rk�_'�{�l,��e��6>����D�_43�j�~OZ�:�U4��Wo�z�t�ԓ]�<�|_N�������4�m�3WS�'�8U�{���KN�`�����^`��7*FV�)~`�EهJH�6R1u륮���\�8�U� ��Ml���(s����=���LE��RݍEp��vg&� qWfe����&j*k,�_�Ddx�}�N�e��`ԩ;�(��P���^�{�Z�]W�y�^9,�����-F���~�VQ�ks�3��	�7K�:���.�3cR�	�J��I��3b��Q��_� H�YP��+��FQ���1��S�����k�O^�� �{WVy8n���FN���s���5ɴ���*Q���8�n�be`��&�F��.�a�4������+�$��F�K+�?p����+�p@=�7*R�e��*�����p�&[��Z�f���4���A\��jc�ɚ���$�I5��NLԔ"�8h������Ø��b�DAj��i�U���(�j.Iq�=4�5��j'J�x��2j���>�5�:��{�:�[��ju	��7ȥ���&�]�1���|'���>��Κ����,�$�t�n3sV�8��OV��=n&�sR�%�k�өM\�mv>]�MS0�n��t�X�Ř���'����SR��$͊���>M��_��n�Ly�ZR�'*��N)=W�i���]G��7E�� �jS����ZuE�J857�Bhӡ��ԗF6#_�.�M�ڄe�>�WuEG�&*��;�H�|,y���Q�D�H��;��O���6<Θ�F~��=�&zmצ|��RoiO��=��B��ډ�Q�m�L}�!Ј�LS=*��s�]�7�����s��o���=f�1��Q��j��m���Ӊ=�L�/��ٓ�y�L/8I����Ups&*�(�Qσ5U,�"�d����:�s���a7�Ϫę"�u�j5i8�y{�֩���JO7Qf�{����PxJ��a��	�Z�͜;��Mu�5���/��C�|ߨ��W��^襹��f �kݝUu:d�k�E�pru6f^X��WU<�:��9� a��RT#=f=�015�[c���π�(��g�6��vvp*�ZO$W YJ��	����0�U�/ ���g��7�,HN�\,�&�� &��W&.&�V3��
@E�.�L1O�M���UI%]s�Hv\
�~̄���|�('�$	��ø�������e9	�[��L��H���� @����R���>��M>�S��K_��� -IX�F�&�Vg� ��^ `HE Đ\ȋ@H0�B��؎� I,[� �F� �C�#��`���'�*��&��' ^	%d�~IZ��X�$�X�Ae��Tf�w<��S�:��`��b+J��&iQ,�h��0��$."0Ii؀��| �ʽ�8��9�W�"�'�q�d�|�͖CPHBo'V�9� #6�?..�70c%V�m��R�m�`�7 ڑopչ
� 3�ʕ�Y��F��
�<�aZ�mC��+��3�WJF~ ���=��+��ի�@gSZS�y����Uw�s��.Nm�ȕ�fjaW~�����je���6(:���L�$��x%���o�:mstiʕ(iϼ��E-��=z4�{�֝5Jd�<�8�?&j�Q��UE��yꥶ�s5����r��cP�$^T،Nf��j��a˟$M�tȏv�M+���h>u:���N��MJԯz}M"guӆn���4ֺ��8�J<��D�9�N�G�V^��(�Q*8GJT)lUM�`�-TK�Υ�����xu5�\	jQ.��M<��Ry�F��\��+����<v��h�(�Y�R�����Ks����u5�tQЗ&#̛U'�EJ��.��<`�5G7Mw�
�V�D3����Ҡ�7*� IT��,W��Y�2p�J�5)Yб�s/N���.P�ª.��ݩ��
5Zn%X#�:�OR/Ԟd㨜L32�� r������L(�����R�k���yJ�Z�t�^^Y[�(wL�s=�S��+r��܌7=��
��y4�,d�֓��>��b��o�����PZ��;�VPk�,�Z�r��ԪR���O-��Eؔj�-�EI�)�A)�bsg$
�l��B�ԯJ2�T�܏7R��}+��",��6�m�eS����D���e9B���]UV4��,��$�rUBw�a��%\�LҪ�m�c-�� k �V�*ve
��k��� ry � ���X��A����Ly#�����$����i5���.�X#�!��w�F�Z�L;��aZP��n�f ��ؖ@Q�B� !%�\!t�	�< /x!V@2͉�G�/�^e+�4�$��Q��&?ܤ� ��#}���f����6�T X�$�@		 NAR�dH�U���Y 
@��� ��n  $� O�h Ob	��+�VGj�pJ�a���W��m�U])�����mN�.O���B�|����R>��S(��[�J�M�������M~��SW(�����w�[��������Sk�؍d���uU���t^�[Jԡ���V�	�ǂ�P�u�t� �Q?t)&�t�"W8� ]�t[�'��F�U_KW0���V�~�����1V���0��mC��Vnn���G�"o�K&i��蓌n���6"�W�
�I4a+)4��ea 'M�ܕ$i��e�L��t���b��~�b!ܩIaɥlR,e��6�e&���I+��bt��9��e�*���Q���c'H����A�m�ܑ{���i(�J���E̹���
�rwnNR6�rtidʥ\2&�N���ζ�R�B�no���?=���=Ͻ�ԥiU���ӪDJu*L��27o$n`�-ܓ�E���_��,A�jt���˦ͨ>}]�O�3��:��t�hԦY��E
j�$|M-wB�^�U�lr���ףZ�GÓ�o¢�M�P�����*�2^1gz�m��U�i�U^N������z�ݖ�Mj����kid+��i*h<5��O�N�יV1��N����q��di�{uv�.��g�UѭZK]��-��3�z�<���բ��G�e�c��/�4����3H$1�wVq"��j����MJj���ڧ�f��nltNpq�4�����1Z��8P{}!�Sw0�]����� �4�3������S�yVV��g�;GF}��c�Г��p��o�ԯ:_��^	N¼���U��d�R�_%EN�C��6��%�{8 �ܼ��Ɇ��|��� �Z�rf,G�'�;���M5qp�	����4V�V2�`'�/vdj�pQ:S2Ս��ˉ�
�JL<J6���m>t��R�-8(����R::o�a��Q�(+Rj�(���Q8�����W:S[��gɤ��.��kO��U/&�Ԅ�#��Rt���6��j��+���O@�U�'!������rY�+\#���3�Ã�� %�Uj5�����z�fg_��f��+�wo�Zz��j�ٞũMIC��S���k������ß���T���w>V���궪t��KO_OUM'�q����_ơ����f����v,&���U e���Um��'ie����bmtE�nǭ�I�����-;�����S��k��,��U7$8��R���Vv4�G��L�i�p���F:$á`��bt�u1ª-|Цu&�t��֍�=�J�.9-6�I�g��?��e&0ɫ����n�;�~�|_S�U�L�(��[���s�=�����jc��,�Y$e������X�J9�3.��u�ґ�[Zt�欒�1�zjd錟B�:c�G7�n��cя��7���f �� K,I ��L� ������:��p7%�9�]I���5�$���-5�G�|�t���v&I,LY�I2�{y���� ;�� x#�
Ұ�Ep�*s��e[�PlA&f
�Yw%�2���&H�1��~H9N'� n�̙�3��$$\(�$\�y,��0,�p��I\����A,�H�ː($�
��qi$��<C@5ŰRO�r��s�IwUt~��f���ڍp���3�߃�zvj<�[��������d��d��=����a�M�`��!�a� X$ )X0!P'� @K�p�d ��]�������#݀`�.� ����@�E�GS@&lɅb��w��30��vV e�5̙��Ǳ��gZ�9u����QiS,��0�r�rE���9��K��� |rKv�m�M���P"o�e`|\�A$��w"Vp���qu��SM�;�qaͮ���(�+� ��"�_%��ۀy$��*�"]��ț�L-%�,?��]x��q8���py5jJֱ�R���<z�U]V@a�۱͹Q�%����+�	U� �qM���b��Ħ�6��Cn�J,TE=P�-�p�� :�Q�W��F������$���Ql�Y]4�,�m2��OU�T�ȂGڌU��p�;Suit�|���~��}
��V� c����g�y!X�gj��~䯉8ԝڪ|A���Ȕq3��y��ȉ-U3�[U$��5�I����.�ڝz��ݎ�k�����t_���:Y��N���ҝe)U��*���L�WS�����t�n*�OWS��۹��v�&j�78�^��Zt��'���IS�䦞�ԿS�5t��Y}5:tn%p�mK��2J[v��ј7U	%ՒQR�Z�xH��/%�M����0"m'Du�٨;4��szj���5:�Ș�c�дKG{ylb�Q8L��z�O=-�}8��K����ي���q&�e�bUKO��r�E4�Ju��+��M�y1��~lMM�J&N�4�\F��Na��Jt�D��k���Cʲ=ժb"Ǟ�e4Q�V�X4�/����c�+n��î��r��J����;��Z��e���
��ԗ)�V��Y"�ve>�wh�U�&�M0ׯOZ,��t��ݜ��(թ/�f��Ц�I�jU>Ǌ�F����J�>Y�k]�JrKϹ���y7EJ�,��&��*I)Ug��t�ʢ �g���F&�m��ȼ ��rT�����"e	����MSk3>B�7J��U)�1l��%ߩ<�I���O%�x�ͬT����\|��`:������� ���"��R ��nHT��!�@P�FԆ���6�$��@_���D��5* q,������OC����	���#�V	� �ŉ�YL����� ^;������E��G8]D$X�� &�/tT�� H�
�"�� ���Tʈ& �R ���| ���y�P�	 jH�j,QU� *$�1�� H+'��'7(��
ȲF f�� ����fK&2�x�;��0$�\ #e$H!؏�d s�vf����I9�y��Q�87UR��V�)�%�]|�½�59�k��{��N�XE��u�5���zbs�G���*b�?�Z=M�|>���.%{�y*��i�g?�5R�s'�^��U�F��hT�T1�*��[�s��ҭ]��}mպZ�؍e�]1�:j�LE}M���գ��G7��yǁ�>+ꌹ"u%2��Ɗ�+i� ᩿��y>Wթ8ꨫs���q��镬5*�;S�ԃ����:�P�/��a�~��F�oi\��� ��R�Ry;ѿ�p��iЩ7����N�T�B�ѣ{*�Os��Sig��~H�d�}U��k��6�|uMY�zj_�Q1_aki��:r�>BU��n�J�Yd��ԕ�i>o׭%ɵ���ǹ+�I%��� R�k��e�ʢ{!U4Ğ?��ʑ�j�Ǫ����'�n���;�:�����qs�ס��LGR,�^$�K���b�j��7�4��(�̳9v6��P��"`>���sjT#8��V��ǃw�ӡUu�J��Y8W���[������N��R�x<���Wo��&�ާ�S/��<z��]O'���^�r��5���שK�r��Tδ�^	��P�������������a@M�8���R��89�в���.�:z�i5]�~��HG�O�Z[�x1��:��ND�ϛ��t��|��=jkQL6s���WU��U�߂Lqs4�LσKGN�|�UPtU�ɋ�^�/cE#�F��GB�1e����Fey8ףQ�u(�d�5Ъo�+X��Evo�X�};�N�Mg�^�y|��n�Ѻv˛�Ai��i���b��g1���.>�� i�](�B'���}K��Y��=5�cʜ;���� ̨��5T:os�����7�����k���A�[_��~���6�>6���z�iR%ĳ��ɮg�Wv)�A�D3�lH쇟�T�|'ء�eX�p����T;��wB�bg8O��D�������Q]���ľ'�fT�;� �N�� 4�b{d����x��39�v�U�eq�I\��&�ɘ� ˼I��	`0լb�eiJn�b��v(����������r�M�Sɶ�sR0����h�H��	3�{@�������Q*�FmA�֠�U�����͈ꤊ�>	��)3i�e&�g��yJN�6�R"����wg�U��c���8��H�R���e���s�i�u��U�T�SL�DhY*Kc�m�^�aj�]��v��k���?%;�Q��Zg���o���i�LGc�T�Ӆ[��>���hꤺ������X�;��i�,��^2n9��L��]�V�C��h9զ�]����^����'�gj�T�����yX2�}Z
�y��i3Z��Y
�pIi���]R�i�4�=��Uؾ�M��DW<^��t}�=�X1����f��Y����Z�Ԃ�[�>�K��=��俪A�J�$�9��ƛ�f��jP�OҚ��_���.�*���w���U���ӫOY%��M��3�A�������4��JFsWs��su�z�TK7Mԣ*��0�=���N)mB�?'�Ukk}=4�W~�t� -��T���7>��M��7�ʨ�0TX���^	% _p$���"(H�@U��s�t�pI�le�d�w ���-�d��2�؍��d�c��L�P�I$�YM���2�� �ؓ$D�ER����� ^�mnI�"I0��rE� ( -�lg���2/ �D�`0���d[�&�^@��0��+�� �(�`~I��,I��,\��i��x���@��~���GSl�k���S������������]
�5���,Տ��Hq��}*u�)���ʹH�$$/29�H� $ `@dr=�] K�G$ �E�#��U�#G��o�0�|�m��XV@L� �3�D�`�y#k�	5�a��|W�ȹ2�+ Hd^K�{`��F�ĐZ�k��J��o�N�Wb$j@�}�'!��r;���+)�E�Y C� ��rXO�5��|���M�c�
�NZ�Z���
��d���<�R�0�v�{��
�>��oR�e��9�HP�˸������nڧ���]��S��^������.&7{�if�*�}א#�C9��iK6��9���w�6��5�T����#i/(��4Gn ����qQ?@=�j�c,�P�H�:Z�.0{���&��\O+䗛�R�5�n���|�V���a֒�?2I�N�f�1�ꝜbL����zK��<��C��p{Ҕ�Jir���%�����\A�t�o(������S���χ�Z5/�*�s�ϩ��o�P�R��x|���Z�t+N�J���h�n.mi����<>:��� N�p��g�Sl
��ʤ�O��Ϫr�KR� ��+N��.>�/(�O���'�m�R�qiQ�RF�6j�|Jv�6��Z��>�ѧ�~���7W.S��-�M�D{Z�Ó��6�ZJ.$�>�CNөS�ӎ���4�>��(.S�J�)GM�T�zjo�>��T����wC=�WӲ<��:������/��	p���N��:ӣ��<Ui$���� |ڴ�FUi8�7>���'�\)�ki>�1Fٺ��~��-_�-:ҕ��D�%�*�Z�iWO'߫B�x���ҖG�{Z�\{7�ey>��У2e��S(�殃�t�M�4h:�.������Ӓӱ�%	[�4���h��J��[K�u6�ڤ�<�Ӧ��,����5M�Lkm�	I��(����&����N�.p_P��t����_���ԣ���u��Ie���N����mJ����U��p�!��ZTTv�NoI����ɩ�jqjs�QS�$Zm䋭*�v��]�f��Y]�W�7Կ�B95Ҳ)���}�ֿ�\H��x4,7�����0���%��� X|x��i���?�D+�(� =��&
݀�_#� m4�S����lH�J��Qn:��7H#ҪE�8&��mU$$�����XJ� y�NJ&y %��Y��G�+
�#�753s"d"B)��|���c
�8"�<�L�n\2_�Ot���xHJ��ذ�_r�Q�F�}�'k�,@J�Ó@��$b@��3%��
d�q \`O�C,�� ���0,�rOl ��(
�܈~�:�����d�Y �0� ^	��GH��b� �C � ��A%��X�2 p���ƣ�>~ṹ��p����U9(��g�w2�EMr|� P��Ӝ�,T�l�T7�?[}[�m�7��j2�
��ԩ�<�z�=Jfݎ� �7i_t]��\ɟ�����WIӕo E[X��z�O���>�t��N�R�T����Us(��K�����^����t^�Rq�zs��MS }Z}Nץ~�J}OM�j��|1+�k�ӼҮa��ͽƃWh��ԚH�U'�0��U[w�J��4��K�?8�k�pinuU�jF�С������p���ou�mM?Z}CV/[M�}_�m�5m��xi�:���G�T�ꠟk�CЋ�oTY^�Kr��>���fI���z/����z�҄�Pn�mE=H/����!��='��	ӧT���2�g���:}6`׃���ˢ��>�Z�a�Z.���U.��U�\ݸ�z� �nm&բ���F�din��7V֤����y�`���h�4�A�U�OA�9�
�!�m;�U��S�KS0|�4*����i҉L}�K]�����7�+y�t鮝;�s���o��,�k�o�_R��ӅI�575�ܶ�=N�=��3j�ܓܗ��5�;R�0�Zhm�Co�η5J�}}��CI'ҟ�kS��{=j��.KV��?MUztS��??��U���u��)H7+& >�&�"���D	��ch6d�XN� i>J���p��Mi�U��Ӓr&]�bˏ�����O'���[��+9NF��Ws�\:���}J��M5sϧ�N�UI�y\����u���ҍWN��WRUT�ɚ־��W��.ǙjF'��F��x�s��:0j�Bwf�T���Ge+����4���2�0�Y�;r��b���*R��<������\L��٪i���c�����-XQ�]I�y9�*�\6rV��I�&YaI%@y���-�5$x4�ərh���:S�G W�9�	�y3S�Q�>L�����d��x�+_"e�L��#�W	0�&ŲWɚ��(��'�n�@7n�m���.��,|��� ,�F�j��j�|��bT���da�iyu��X���b9X(��f^-��P� �s�*3����i�xEA����N=��,���Q��s�{�����o�w͍T�s�X���Z�ΫQ5'�����Ru��f��u�I_Χ]�'}M�?J��b��ߨΫ�l�+��]MgR�s�u�9�Zfd�$�`�����j��k�H��oP�ш�Wf}]����mI����*n����N���?e��ӭM4up�Q��Φ�N��>����L-j%wG�����~~Y_w�vy���d�+_'���\�l���R;"��4���r��'�A�̣�ZT���������v�����6?�O��M`�"�^�ŏ��"M�-a��b����*��Ob�k�[�޷���PMku�������/ �H�F�E�ȭ���f��ե\�M\����AF�֚]J����Q���*�������B���L]�}W��W�:��]:T�N�K��}��]�����Z�jk.�V�����)�<��Ǭ׶Ҋ+���fd���s1��k���Cj�]�����v��57:�jj��u9m����c�
�����n��#,ާ�f%��P 
	�@Y)
�F��s��pA�afIfL�`n��sN�VЛ��#�
��l�� ��$aG2�� �R8%� ,�$�@K&@D�D�B�%�D؎�,Ap(�	,{�f�!5� �p�;��(
F���� II0�����H�{�nX��p%I�Oi��u�S�=Z^���4���"�mxf�O����}R�u(>���m�iԺ�ܘ�$k��婢��J�[~�����֡-*�M����z}
:hѢ�0���V��
��zx�CF�h\#M��� q`  �� 2Ǹ N�H��8I
� `���r�$�M� , ��`!/���)^ ��'�@�Y�21$�@�e�W��^Mqt<c3y��H���6�F�_)`�I�ʼ;�����C�@����~���dr�g���a~�pL bn{�܀���`�����H����	��$E�G�@��'0���V��Dd�����n�Ż;ds.����;���6�@�Ō����`��-w�b莬 J�S�N��6���MJ�nv9�fS�I���I,\ĩ~�~S�c���T'o&_�  ZZ3�24����ܯ�J0�s㒡�)��\E�6����+�2�]�#��,�3�ֲm�px��r�m���:Q�껱��U��5�V�D�l굺����Tԝ)�p����Օ�KRq��Ԅ��v��&U�U������1c�����B=��R��*�Fd�J�F���}
uiO#�Ҫ���R1!�֥���S��f�mj����Z���\�Z�7`}~��]3�|��]��G�Td��L�e�Jҙ��ymɕ�\��~�}�]3��4�tό�u���U3��}�������G�[��{�Ԯ��*>�Z�_����mJ�[�?��U8n���2ij(�G�[����L� �+��&��u��ˮ�������r][�/�S_ꦣ�
�x>
�t�R�M� �~�7�M}δ�\�Rnoa� ��vk��e�J�>-����� M�k�*�,�Jm��-���B6�A+����U
�G����I������v��cr��<���V��3�=?ҼXĞ�)Ŋ�������;4_�GdrZ��j�KM��jҥ��L}
b�\��Q%Uupz��N��NoeGO�]�oU7K�"��Q���T٪N��EVX�>�I#%����ƫ��X�����P���h�2駔Fq�56:�&c��I��D6�E��RO��[>�̦H��.�$��miy�q�kMN�� �y��^�j:S�r�J�>Φ�Ct���d���}�깵��t�w�e����Z.K�t3�����\2e{�ˀK�D�V��'|�C]�7k@���$���*��R�fI�H������3RY*v�6�ro��9�ܩ��:�RGJ[|�t��5@�+|:ͪ�r#�8�P�sU@�A%<�Jڒp#�>�y"(��
��-�<!���D��̀��I1��nLmd
��
�&���2Tӵ��ew(�i���Op6����u#]K���p�>Nuj)�ɗ�B���,�瞭��G��JI|��̞�Ѧ�K�3� �Vu�����l|�����x%^��O���VSE��~������S�K�%�^dzփ�j;ɷ�;t�ͥ����A���K�v�֤��m����_����r���S�{t�jQ����DjQ����<�w��+F� ��p�J{v�d浨qtk���0jn�MY�>P͠ʭ7+��X3��x��2�`j�̗�%Lë�Lr93�l�@�����M(�6�H''5��@��NU��O����ň7$�����pf|	�5,��ܝJl��dm&25!�s����py�h]7(����i}�j�o���G��ʋ�%~W]}��ǜA����N��pm���r�IEUUJ�
���̸؃�֯�������#x����̫y��K^O4J#�����rmo�|؟�p>��QS7�f�]��'T]�v�ΛYC�i�?r>��d��]]��}t;M���'ƧZ��ҝ�}H�����V�� �m.����>��t7UJ{V�T�S�b��N�h9W�گ���}OB��:ӽЫ��E|��:�KF�S��ik�U�SN�S>Zu�v�a}D��~��tiԮ��I���U��ԙ�֥欟i�4�T���e�S���[�TӚ��^����{���r��*�:��`r��+�\��N])#������ï���S���Uz��k�t[�X�W,b�~�o4��5N��jUH��ԩ(L}z��&/��I�Ѧ���ղM�k�Zi�r<��kw���L������P��������5*n��<��g)zj�N�2�{�#%`n�m��WY�J�v�Iֺ�~�g���B���+R<;oGp�Ԥ�:{Z4�DA�{�Z����ѫ�]&G���	g��IĴ:t��^T�.Tv�����^�S��M4kBw5�=<)͇$���9��������ǰa;9țȂ
��<X�� 1����D���Fӂ����b+�:�M�?'�Cu5G�x����K̭α���TXK��i�+���K]T�,�x�Iֽ]|2�TNO)�I��i馾�:Ө�O'S�-5�f��=��g�r��M���g;ˤ�z�N��i�nA�kGW,�܍�1�\5N�O���8�_'Zf	G���YƖ�蝌b�r��6:��$��U#d�q�5����x8'%�B+��K`f���Ҁ嬚�d���_dX�Gݨ`e��sಗ(�2Y�,If�s5�Z�YY2�T:���8�&�+�*��;�5.^ʰ�\"�vOj��9�8��ׂ��8�x� ;�9�4��ā�rg�Z$��Q��e�j�$��O��NN�.L4�(��cGJ�s5(P&e�6�̼�FZ����S:ԧؓ6��鹇L����HԬ��Z;::`Ԭ��r�k��4�!� D$de�@��	Eh0a7��07F���m3�m�[WJz�ϘD�&z�_֧v?U��MeQS��C��J��׶�]*������� �����~�wW��ޯ���:�c���F��*��t�sg��V��_q�-������:'�\]ܓy`c龆��MY���r�����m��~fo���_Q��R>����SV�]GUO,#�&G��֙�2�f���/�d�I��5!r��봮�U᳜�z��:U���SR�W5���BŃ4�ʈ��K�h�5KM~z�gR������D<X� $���X!y ) DY���M�0�6$�ArS( Y�pg� R���l
� ���F���`�������  \;�b@`pq`*`���p[��"<��Ib� _r<8�,��TijjZ�~����֣�T��l���Y��cG�5����>~���*W�����'1����T�7N����i��#�>���)���=TmthV�X�����������Ʀh��=�>�[}Q�~�QE)5J�b�.���������T��?'�O���~]4����S�7�Z����ӥC�G���jD���_uq�K�I�	��B���9��j�s�,�1�sRY��;�r<	J%Ӊ5�y��N�5+3J��|��ՙҍz��Q����p;�CW;ѯMJ��5�Vo5ղ&©5�R��$;�r��䑐���I M %�Y�($� ����2���� E��_� � 9�!�����dM��2p�r;��	��!�e��G I�J�+��5�T���Z���\G���.K�@%�TI�����i�1��M�	7��J�`�+�ɟ6`'�}�P,��v�b1n� ,��� 5�[�RM�H�9,.�́��E1$�K ~��{�:���܍�L"Bj�$��;��b䜲�&#6������o��YJ�ϭK�Wh���&j��Һf^U9 �qfa������x��"pFҷ%��f*X�F*U���R�jpa��#�Pv|�jj� �j��J�%R� )C�x#�n����m���i�;�T��G�|^��:�Stzi��x�~�J*�3���t���w71�8SSQ{�N䝖:�qRI��0��͹*�;����+ǖ��M`�R�YS���^�D�_�/JvH�9t� �-ؑō�\�N�O sT��¡[����M�n2D>��t]u]m�qbSw=��ҥM��J^M�)����T�ϡe����^KW��GN򤣅[k��j���}*t���QX�c�=����[;���}%���1|����j��+F�7c�W����|{o�M�����U���wM�}����b�^�-�2_�[�L�U���}��YK&^�]��K�|��"�Q�UIe��U������8/�e|����J�k����{+�lI�D2}�^E�ZsC����N�'�m]-����uL�%�>�{��b������_�kj���۷\9�M��{]�Yҝ���o�L�-I��>ͯ~���N���vn�PO��s�-'1{��Zmt���j�����+����*�>UM0�ju)R�����T�~��|)�Je��5)WD����5S2��N%I���7N��<�5_eT�e����o>�_��w���k���� R�n���O���S�pu�t���
�Bx#�3zw.^M�k���}b��7�K:*��%32�s�*V� a6&.p�����DM��^��,�.o%I�r)]��,c�+��FʚH����/b<��"b������L�䂷����,���ɺj}�Vઢ��Ή� �l�Z����%N�qU��:+\�S���
�qԧ i�Tsz����QM�J}�=$m`�׾Ӣ�WLxg�S��)n+��>�u,3�����*�ABvM��G�<�+�n�����Q���_�뺟S����U-OR�f^�)Ĩ�~3S׵�N88?V֭ê"��_���'�{�%S���J�S^��ԩ����S&����U^�����Jzԟ�{�gd��2�z���~����8u�������	����R�ש���gW���W��u?h/ʪk�?�r�M��%�_����t�^Y����W�\�����q"k���[��M광ίV�T��F|��P#�15�*�j�s�����7z�~珙y�\5�{�H��#w[� ��ur��mK��^��SQ-{��<꩹e�0�e�TY�����g
�`:�f��k�r������R؂-WNM�N�`z�N�*��ݪ��yUM��r��ުp�*�N������\���H5�תn�P��:S����o���I�b��i����4׃ѧ��YU�S� c�a��q����Q���\U�n�zt� �T���N��&.�uO��_���V����?-j�?������]v�ݼ�5��ޕx�>,o꧃�ޞ�_N��թG��O��P��,����>�+�G���:��?�gqU��b�Uש̓ɯ۽֚�J�:����i�O�U��j:�9�mV���Ըk�_�=	k�S����]�/��Z���Z����3.���8�����;jf5i~�?���8�P~%jU�u�,�������~dO����_S�*����^����Ō��y�?���6�_���a��?�+�{�� ��̶~6� ����k�������ݼ'Փ�j��%����0���m�������R�?���U\�d�����4�SF-Zg�u/sk_V�62��;�*���O����V�����uV5*�F���*�rj�}�Z?G�k�S���e���ˆ�C�ա6����֫ө,3�U��噫z�Z��������빩���i�)����F�S &�X3xD܉�]��̕ܗ��v�'�,�2�{���8dO n��rF�i���qJG�%S���j}�-�{KVym�&���Ux�ҥ�+UTZ��N�����:b��t�uiI*�{�o�鞚���P�e��k�O���R��z�VM;<B�5�W�^��>�K�Y>2W�����Uiw��~��M.�8>.��h���5�e)�GÛ����)�
�4N�-�aQ�P�I+���{�>��ɺ�!BrZ�����꺰s�����;�9#d�7M5T�w�J�z��U��n�����:��z�Wp��u%fU�Z��U��Bik v��Q;��k}�m�|�MI5q��+��rϟ���*�,���q�9Cc'q��"��ObO h�D��M��O��o�� 9$�`+�0����L��pA�p�ey-�pi8f$��m\��t�ba8hb��h���z�Ԧ�&$��Qݣ�\k|���cS�KqKJY��LA�󎒺͍Q_'$�*�A���U�2+]JN
���N������-rI��衬�N>�q�D���\�O�t���ja+�N/h9S�m�����9ri�Vra/���F��F��G1܎̱�2��Ay��U?l��%�Lc�>�k�4���S�"r�*��WypnT͛#��i/qSV(õ''��ptnI��K&�%�.f?`	��H�,�.�\�&y�������^I* ,��͈�sb��ݭ�8J�2����M�R��,�MTX����e�ܭ�ɇ��G�0�㱦�!QΩ0�ͷɆQΫ�,��d�ː�͘� G�e���QQ�2����H�2Ϳk�����Df�c,�$A�-�Q9#F�4H�Q
�+���;6$���zn�oY$����OW�� ��}:|v���j�J:�Z��?�wh���^ǫ�3�:���j"(�!rP�՚}G٧��V[}�:|_�9���M)4��Q�L�<kl�"`0��D,��DJXB�&����(�PT��2�JiJ�@����T겲F_����25X�5��T��� ����8.( HE R F�v1�H��0� �{�  ��# T� U��r12�2;�9
   �HY �VŅ� ��y����ii��5q�v�mSW:ӳ�߂z�漹��c�Q�T�?�K�7�O��jҭ�;�Ce�����Z|��ҧ�(����4�%	������G��=_�T߱���=���E���]\�Nw��q#�-8Ge�Jj$���Z�ݗ[w#��h���%XLSy'�	Y�� �P܌\�7l���Lܳܙe~�oubG���I��+����>�}�%E�䄮F�ș�>�eZ���Ņ��Q�iN�{���������}U�K��T�]I��mr�Ӯ�qss�/�����N◓Z���u)�Yɩ+"
B�d# 
N  <�H8�y B�����Re��`/���H#,���	�� ����	�< �&Yf� �P�f�����S�)\Un��{�������[��K�j������� �$s�d�� �NFtH��H����2��@MI+ydnlg����� E��!B,��y-��X3<�_潈��� �8�	B��%��~ 7܌JDr�x#�	d;(�G�����I��&�'b4�Ә��Ԧ��Ըppԥ�G����i9�%I�U\�S�+�pbl�6��pߐ�?c<>�-��� �r���>��7ܒ� ��=��V*%�$vy*�=̫��
�F����i�*Y�Wz9�ڋgs�SL��p��5��w:�ҕe�o�Pr�cM��Ui��d�#��51�5�mUdyۅu)s�Y�'�����j�v��:��ƺ�J�7>D���U-$T�±㢸���Ռ;�jw/b����I�ƝY�&ֲ�<���N�&�3�R�J�9Pmj*���G*���H�J�t�U��7�=Q�ᨁ<�V����vfĴ,����`��.:d��n��"��9�MÙ
Rq�:ʿ$Q��m��n�ԬX;�����@ڡG��V�*�\���]	eH��gU)ɮd�/F��LU��������G��m�?B���g&SK(�8=�)\���Տ���cة��R��{iH�D{��Vh�c��i��+kJ�H�Np������=�V�'�O}����|��_c��eW>�+���&��>=[
��q� ��V�P�}�B���j{�1�?��D���ETJ�.��z*/s���U����]U�eMS�T��Ыl����R�9�vż	6�(�y,���8�(X�lL%��S���B˒6��ȞdL��À4��&�#��|�nĀyQ�wPQ�N�@�!)v$٨��i��9˼�� T�N��{8)�$
��uD�˩S�jk��wR��ƻw<Z����ٞoZ�Y'>&��\;��$���u�gQږ�MOQ�V��SE�_���4h�K��j��)�m��
��*w���6�˩�,M~�W�0�U��ū���ږ���Ȳ^MHk��z��mJ���<���z�-F�$���Qb�k�����ɚ��Z[�9u��K�,��#Rږ����G7S
��A�\���ϩ�&�s�Q�Q$���Ӫ��o)�_u�>�ua85�%O)؃����x��c����2�9c������>����;ªJ[�L|�jsE��}z}.������7MY�1�im�K�[vM���ӴR�i�h�0���c�_GR�5�>�z\3���i�jSgE�M-E(z<�2����^0n�L֪�ԟ��әt�k�V����S�:�v�ֿ43�t��O�4����k\�/�&��}�v-�1�Բ�{��Es��ֲq,�Z�"鏆�����.�T*��V�B���7�t�^��l�c�?Eի���Y.�~��J�^LW�Em/�������R���l��z��n���z�	>�51�k��ЖN/N�mR=����	c��z��<�].`*`�|QF_ۄL�6��7���d�,2$�z�iU:-:uU��ʤ�ͨ͠�N��~V��h��4���jڷ��UjR�Ϋs��*�MR��U�U-8f�����t[�*_q���M���EI�A:(jTO`�.�j]���a��QӒt��-d*�@EMupo���eK�u��G����Ju1hj����"�Ԇ�-����6z�k�{�{i��־�i�X���Z���� B�+�8���[�JT{X?Lۻ�"{L~SZ���T�3�/���0�#n񤆘�_K�m�?kW��ڽ	vH�_���V�[�1��� /ڎm�7?cW��'/��j��z����i��T�Y#m,wW����?��������nhvĬ�L|�&Mi�������o���ztUK��E���'�S���ڌg%��p?t,G!	� ��g���R[�кW �%2���&��g�8��	�n[;!��*I�B�4����Of�]8ݕ�קJ�r���*+��v�U�m�*���W]��/R����Z�(�J��>�K�� SN.N���/J� T��h5��4�B���u���	p{6j_W��R�v��Z-�<�>w�jΤM��N��G��ߓ���1���4��M81U]�u$�m��IP#i��9��T� �p"�BW���"C~ uUܫQ�'�G�:-gI��~� �tUw���*�NNK��0ؐ�fT؃O�����#	܀[�����H, <����	�È;�̀9,�F ��n���2��6�,��]�a]n��v��T�U��Upk73f�+�ѭMiC�:.��T�U=Z[�&�r�u�k�6��ꈃ�ԞM'��N��_��T�<ɮ$��K�R�VDC��Uδj&�s��ӭ.pmY���Q��b��җܬ�qg����MA;v$�1%���X
yFx̕8*+~l�2Y�K+"��"&�7� �	˃*S��%���o%��i�)Dm���e� �it�ܼܗ�a�&�(*��ʱj]�E���J�F�G63>�ie�{��P��٣? ��+��& �X���》'%�ĶPuu]��n�T�2킸�$�eF_�sO����e�^M�TL\��V�,H�Q
���i��L�I�sf��i�5*J�#��* �d�!�$IS�|�c(pi�AS���rh�zo�A�g���o��� �� ��]*Qf>IM�C��^֑S��V~JA�q�Ԣ�&�c{M�ԵT�`�i�t(Ҧ�ɗ�.���ԟ3yC����z�V�.�����Y������4����9L�#ҥ+%':��U=T�w�68߉�� ���z}�\xg���zVG^~Iӟ_�$5}��V0ș��%
YQ�-�$e���&���<���&�C� �@@�.7AP�� 8
�^�m �=�^�	  $�C`�  ��D (�%��1� B���!b�g�i��\�%�Mr��Z�N�*mcj�V���>7ϣeS��Z6k����e�����m��$n�4�sd3�C��$�R���ri,�5S%Y��.��U��̟�ڤ�n~wF��Jo?G�?N�z#Qb��$�Ɇ�O��!H���ݮ"����r&ev�
%�����,~�$L ��X�O��P��0U��=�pg��l��i27]�lur�݈������w �4������K?��U`�^�GM}�c�����~ܾ�#�,�Z���>%^�SMSU�j�������5�_���OI^���������=����UN[g��:���n�7#���Se+�0I4��I �"� ��8 �O�GpNn�x#P��!T|��`��L�lI� �@;2�Ď@/!���K��w���!>��(3��Iη,۱�P��Y�D��I��%b$�$�^�5y	[2:���e!)\��3�n�^g���'��L�N�"7r�bL9`Gub�5��?� ��mS�%� � �rH�v�h�ܦ�%����pg�G%VX��V��_��^�Z�V�.�I������^ed(��q�&i����4�V �5��u���ܶ��M��k(\\�W�׭GR���T`�9]#6�:7��w0����	�T�R�7���f���r�nw���\Ŋی��G�+rrW *���H�LS�d�:��5M� =zt�P�i�]�z6�{����y��v����i������Mv��ZcR�Qɚ)�%�z��F�"��-�߂�9�,)��L��+�}2�W��S�ٰ�D�i�w6�يk�b�[��%�C�A)�햔��m'�p�Q�0j�X��f��(״�jw-8���U��i<�$f��5;�=�^m&޺��3P�6s�n|��}�hL���|���A�U0��5�!��z�Mő�]��ɥ��|��L{:�'�I̞_�	N-zze��1ާ�t�SU�V�|��5I��Rͥ��^<!���F�EŹF:��f�����6�9�Y+� �ZP����Y���۰uZ�I�)���V��T�KS�Q׭I[�t�7*s`�'`٘}���
�7�1>��/l �I��2i^� k�D��x��9���$6�':��Gw��� {�Q��c"�u@*S�>"E��M6�pFԀFZ�A�<�[D2B��Ϲ1��݃�DW�p� ?%qU�T���%���pe���;IT$�'
�tP�N��j����f�������b�Ji��|ǫ�j�oR��Æ\M~�S�����_�QK}.���֭�u3����&�����j~8G�S�[�ry\��RY.&�U]U���b�*w���)N
���ez�˪�~N]UA�MN���i9ɗZw��np�)�}MCr]r�GU�J�E�&���H<3W��Em`��
l�Zti�8���*�GJv��\F�i��M.�������E�Yg��p���ēLy��S�Қ��H��k����Pӕ�v�KM�I(9u�AҝEԻ]��J�,�֖�/�ގ�����ק]%u$5�����Џ�p��M44�F�Q	|�I�n�����}L��ђ+��������b�iL
�5N�Y�ӭ���L��H�?S�n����Я�T���e��iW	U|3�֢}����^	���=}*)��I�5=CoL�Z���I��J�����6� �V\�?q����S�r�!��V�̞M_Q�N��įy�S�psz�w�bk�W��Tʧ���ou+�z�����#�ש9�'�C}V����fS�5�k�
�����Su�Z�͞yL���ԩ�u82�n�'8�z�.�'�:Q�ԪK�,{4}+V��~����/�������>�]t��z=��/�j��kJ�d�ڍ��wT��~�E9�}��l�%t�\~j�Oի�N�^�\��i�J4)����	;"Zc���E6Yg��I����G��S-�D�ǅl�����4�:N�_��J;F���zVڹoIO����:���S���?���v�{MOI�P����V�a�� �F?	V�_N�i��8�]<4~���U��M{5}?B�N�~���Z�e�Z������/���C<:��:TQ����1���:��n��n�v�����l��O�n;�ߑ�#�ӈd��ʰF�Y�Ou����J���npW�M}-/X����/����I����u/�ԞCw �V��z&+���-CK��ը�Nyv?�f&��C_�h�]�������F�F���P� ��5�R�\���Kw��R�6��0�����4�m&�4�?G�n��L�=�5�QSu�����;�ӥ��?5������q�N��"�k�0z��j!��>����SMN��׮Ӫ��x�� OQ�t��<��z,�OK����}e[py+W4�a��8�K�(�A6ݬ���GQ!π,^�~� NBY,���4�7�r��b�u�GV�j_�z�}+u�鴻�c�6[�l����թ'[���Z�6��UUL���oEO�t���Ҷ���ZI��}[�tt�z�Ҳ�w�Jc�Q�ӌ���3i����J�'&��� �Xl��'��d�}����Y��UU�s�u�UUS�����	YW>j���;Q��W
�:n.��9�7]T�)v�x�ש�L�^�n	�ut����0�ydh��0FŀL�r؎��1�!�L_$�� �����b��V�I� �� ��f��σt��Gk0�0Ad��jK3��$~��	���@I�6n��fR	 ��&8) D�, 䩙� ��$�O���C�9�f�"�ѧ�U��[�+�5Gtn�����.���j��/S�ŧ�¨�QZ���'Z�4�qi8�ؽ\��׮�F�;Ѩ�Of�rb�N�E]X��<�kD4��USR���󎒨VeJ2��)��N�;ࢷq��|	#���W`$ܸ���+S�D��d5) �L��ڈə]��\��pN��(��Ȑݬ��3̖![�pM� �.lҙ�$�l�-	2� ����p*� D����|`�$�Y�e� �ra�M��f�*$�0��jH�g&[���P�����6�`��k��b�L�o63��r�eب����9(��囪&L�������<��Vd��2�F����,G�P  ��>�H2Ѿ�F`�a�1��,*c,�zu��y�O��ޫ1��|~���	�	M	���VpT��� ��4�ED.ױy�v�"6ė�lG X�^����l��Km���)mvgO����>����i�k���'�p�ۃ�N�4Ձ�T�5M}�9�;27$u���V3�$B(2UP%H��L#1bCgI�༛p-�q!M��2o��%�, H$y-�2�(�u^!�C�   �����'��x  ��R�xf��Hc&�-}M�%���0vU�V�M�_J��WLD ��ܒm��I�p1!y*�lj�:n��V=ޞҡ��'�d��j�3��\~��ę�R�5�s��-�I�dF�$]�8*N,�8�AVb^lT����j��
��M��K�S)�g�%�~j�Z����?�g��U|��ئUd���H%�ȟ"�R�J��UTi����'���ҟp&R)���='\�P�ϙV�ET�qr�����f�m:��QT�XIX���<�.������@k�2�8��_��e��L�I|�4�EL)g�S�4h�\M_V�b!��T��m�L�U�ԏ���z�U-Ϲ�s�^k~K槧߯y�D�Z<�ީE4����SP�nI��9f�����u+mM�}�1�y�|�ڎ������r���Y.&�g�a!�WG�?R������V?I�j��=M����Uh!^	`@!2�   6``e @�`F �y/�FY�>�f� ��0�`8\���\����$q"ma0���*,'���2^ ���.�߱�Lp��4���nŧ�DW�Ǐ%��`�b|\��$��*���P<%G�ݏ F�O�.&���r-�6߀�$P���%v����%Q��eܔ��4��'I/�װ�@�ٓ-��D �$����Y�<�"n���G6��i��FU=��6�|ۗ;x �;37�9<A~92�)N�63+��\6��vʓ٪�l-V��AQɴ݌U-�ӳf[�e�9�K���rA���U	r�M�ܓk��e�y2�n�C�C K�l�� +M�E��&�t�<{�ZT�&����y�J����s�\kr��n����<�z�%���ӥ5��R�I֥i�l2)M.M�fEt�9�2�u�	�2r뚎�$�rZUN,5��*\Tf�3c�4��GJQq���Үn������NNr�W����ժxG���;��f�f��f�n�ʗN{���bO���iNY��9<�UUN�˱Җ�g��㿙F�=�t^�����$LtI'|�%���Ws�ZJR�6��CD��\������S�t����94����1����iԮI�QP�z�/�M]]Z�&s�ei*�k�&:-�q���M�<�/�����L{)�S~�Ӹ\3©�	�Ѯ�mL3S�<��^��I��Y<5TK�Y|����V�dU]3�纚y/[T�nY�<��Z��T��>z�����}�����V���7g�USV��:�&��^���_���ik<���<ף�~�[�j����/���^���	u��=v�����^�q)e��� ����РH��;���<� �O�}t��/��ǥNy+p�o���˩%����NL}d��U�Gq8;�+++�T��" �R��Jv�bZ`m�f{���vfST7�WD����h�e��r�y�G�&��xV�a��p|�_Tҥ4��_X�� N��d5�ޭ4�.��:f��o�����-]G�G�SqUn[s�ˉ��n=e$�7o����OV�j߹򺛥�NG�,Mzk��W3U�q�����9��:�n��j�`˭�-?u��������o��Q����c��t�Y�:J���zm	&���k�K�ǥ�����V��KӪ��X�}]:hӵ�t�:	�<:^���U6w~���%~$�͕��=O������b�zp� �j����(��5q�e��a�~��&��]�&��R�X&�2��Os5uShh����(誇b��d�-�712�۫���a��ԐL��s��5dg�+H����C��N+QFNu�O6.W\8o=��]��o���Z�g���������?MC��ץ�ZUZ�J|3��U$��7a��e� ЏΧ�����~SOQ�2w���r�k�?�Z-Ҝ��OMR�>
mrĪy
�o���U)���yQ��I]���\A�U?����Z]Nvpu+�J����V����<�궭U���xL��&�}G0�#t�gs�p�2��2LreU(���8�R�T��f���f��qJ=�{MD���=>��Z���L�8?Q��������E�è�{_E�W�g}�hT��Hڧ�2��h�4�\��B��#��ɵH�aP���M�Xڜd�!��6ʭp9���G`��}`��i���ع�����O��N���^OG�X2��pj|������K�2�
�0,�ݙ&m i�ts�J��P��E��.��m�����H���ڶ�>���I��]L|o@J>�Rx�}^������"f��c�Z��������ip�|��4��5�t�QU4��������u��~�SҶ�&��?����WU5Wd]L~[�'tk�kS��s��_�����SJO�q����I�3�W�nT� ��j���T:*��c��$c�Uhj/�K�0�qQRq����
W�ie\��j�H�E]����i�P�����V�K�`�kw�g�O{�����}��@�|��Wfg����U�М+�pu��V~�q�z<��t�ޣ�)n_cѧ躺����x%4��'��� S� �7?�����J�tu{�4����׊*�^��nu����^O���44�Q�J���)�ҕ�����~թ']j�'����J����]R�"Wt�};�:[�;*(��J�$Q�4iԢ��U7dD�~��
,�W�|�_�Z{j��0}URT��?n���UVV,�_�ꭸ��ic$�ɶ�p^�4��	<�:M.��#o�WI#�p��{�2�S-�e�s9%�@�09  ��A�/�"�N ^DJqr�`.�r1�� N�/0F�r�p� ��#T���&��ૹ�� TĹ#w P�I*=� {�' =�	 \���H �a8���,�
I�l�KH�,�N �p��{��\3j��IȨ+�g]=gMWry�&�,Y^�5UPvP��i���O]¦��\:Ξ�h�<3�5�V��I�u��������g�Qf�.�����|��ڕ��&�ګ'�K]я���?���T�	0�kOV�E�Tu���MA9�!��
�v��� J�H��e���*��F�f_�Y�q�j��%���� ,�*�"D�8%�1��Ee��� !�$J��ID��V�K �n�ض��!E��*��#��y"��ʰ��#��u%6����Lr�L#Qc/�F?ܐm��ɚ�����Z�Q�; �5
��ř����0��X5s0bo$�i� ���2��r:[�,e��d�W�G0�:le0!��R��p  x!r��P�
��B,^��O��sc�Ѫ*��:����W�UJ\��O���Ԧ��]�������xg���ǧ��z�	��5���Ы63h4��bK6�3�[I89�[��s�����s�iӟc���_ft�� X����RN:�smk_s9�{c�Ӏ��rrY�t�'10�J�*�H�S�ҭ`�t�:y��Ou]+&,������a���3� ��Փo�'��֫���]9�t���uW����uzf���~�݄'��� �[�1���֥^��C�ZZ������kQG�m�K����o���KrT��m*^��sz*pz'q��c�#��������K�'��!;�֭�}*���f���*j�9a	�u�N�vrR��_[�51�WYSOM0y�n�
���Nά��_5����N�L��m(��{��z�����E\��}*i�#5R��'���=7͇D#�]�ʷ<��¤�;j6���fت���1��NG���J��9-Ct�n8
TƦ�T*)�ϓ��QSRc,�_���{�:;J�i�t� ��[�N���CCB��:*��~o��GV���������M��=}-���P�RP�����~gs���>�i�y���lky�z���\'Sn%z��qR��uJ�7&B���!X����?����|]*��Jp}�ޒo'������ɤ���Dq0st[',�;�fS�ُ�܉�*_�EX.qD��.�`:�� σ�оԏ��S��}̥3�×�k�!�k�f�����"CM(@x�:���MM.ǳ���6ut�UT����X�MT�GO�ה\4�]]m�_�z���WӪ��۹�mE��w|����mۯN����o�Kr�Ms����F�R��UJ>ߧjkj躵�.��>��o��T�c�^���ӧK�j�������81^�KMޤ~sS�5k̜*�թݶg�OO�jz��*O���ڦ��ww$I3S���j���ni<�+�Ԯ�G%.Q�5�6���r금�F�G�TD�[�ic�����	��JB_�(�ؓ��f���^A@�[\d�եr�V��Ô%��fY�=��}I��5]�.��6�m=��:zk=�ͮ�9D E�������H�`0X����O��y��68`�Lض�����ల0��A8� �X<���!F@;����bT�
$X�&����9V�����@9�r��'�i� � ��(5/��̕��:��x��&���"�^@�w-�X#���¸�,[~�D��k�,�۹E�Q�p<�_!FV
���~�o�^�2�� n`D",ౄ�e���SX���Y#wl����ɴP��E��6��&Pm��I��ߐ#����j��Gt*p�#�Wo�WTpr��6 Σq���j�6:US�퓋rk���/ҡ�w�;߀3i2�+Xӈ��s E���ؼò%VAY�i�5d��ǒ�k�#����deÐ�K8$Ţ@f\��IQҰ�< =i��O>�gu�%�˸w��4�4��v���LKM6�]d�q).>���t�w륩���NN��%-`����;}T�k��P�x��N.�w�Z�P���x��N�)��WL�i�J�@�e����V�U78�]/?��j��B���ֵ�r�G��_M(�Mu+`��2Kt�Sj���=J�S{I�{����$sҡYd�b ����j���M��e��-7j<��Vv,��L,�*�pGzeRڼ��ө�[UR��M%
�ϭ.�ۃ�k8��l맨���弝4��෕��R��#Q7�y*�����_�Lɬ:�d�O�ԗ��qx�wҥ�ܯ%���ы�t�f.p�R&]�5�̘c������:��*c''��XeLz��j�E�N��,u���+"&^�pWE���k����rMj�PY�\�X���vk*�}*Z��|�I�+�4*�-eX�V��bv�Lt�)#��-[�y'�2�˕�/Z��H�:u:�k��֪���f~��L�B�9=u1ܫU7
`i����-r(i�U�m0r�:l�������mLb%+���k��#L}uSV	�ύ��z18�Z;�mO�I��1h>�ϯ�ʥ��x�f�}:eu%i�򺞵�Sqe��׽ԩ˫�p�����Хԯ�}_VС��g�j׭� s��������c_����_j��&��j5��O�2����׾���w����WUS7<�L�S�S]j�u7��e�L[o!9��9��+U5dn�(Ъ��Z�� �)��W7��S�J������t��zt�P�5q���K�=:$�G��j\$uZ]I8%�c�ztqc�)R��u�m+��K?�5\�U6WLFQ�ʨ�h5xh#	MW:SOb*-`�I��º�SQ%��_&�0u��T"�O,�Z�8:�<��M8� �V�U^�*�l��%Zm9mHn�2�	���W�婵�)-[�=>&
�AU	Y�Dsգ�̜iM������<�jL�X�O�Q(��Ss��a�����5���G5����z�GS�S]ެ�c5j&�r��]̸��j��d�]^�Q�$��2���X@u��=t֩Jpxiq�^�{+�\zϜU]�Iw=�M��=Z�2�ƪ��7�V#qɛ%�+)nd��SsI���$� Y�ɖ��� I,����}��Om^�](+���EUY)g�����M��Om�)T�2i������k�>����]I�����;JhQ;�BN)L���.�h�iV=��4���A����)���]��A'�+r���(�Yf$&��|�ne\@F<�"Ia�pg��I֐t߈'B2�z��ОQ��J�Q��rƈ��d��{[o�Ǧ	M�)��E���£�;���p8��X�� s�"�L242��J�n �1����0�Ѹ�;������zu+Һ���<x���UgJ��}OI��3J��� �[%��+�M����[�(�6���H��]CL~J�H�������㥟�[d��t�GN�B��1��=sT�2���/��������BXJ
�,!�����v�?�ԙ>����4���w��u\;ؖ�3N��?����&�GbqbI��`�O�+��݉�a#��,'��$�倖�D��o	��ݬ\�c�+K`y�O^��ʧ?w����U7�}� �[����v\�y�t�ZD\rYY$ܡt��,��5�f��	�Ԗ!�����t�$�L�#J��T��`%���$B��9�2�E��Ň�z[a���
e�+π�8 E��/ȕ��~	2����7�/ i��r���D�M�[�M����j�g�!O# YP�b�}��G���Xg ��%��!&�qr@�$����G�X$� Y�� �'�L���9rT��+���zt���}�&�ӹ�η:}5R�J��8<ZZ�6���D�W�u�]���c�w�+nlc^�u*�{47Q	�]��S�l�SSW�7�jW٥ѫL����T5�����\��=��R^lnT����U=T�G�i܊��W�O�oܞ�8�dU3�M;��HrF��F�~��a�R��Zu|��� E�IPI��j��O1b�=̻/ #�6�o9��<��Q1$k�c����'���,X��<�Vf>H��x��,<��C����t��*J
����I�?�����#R��fQG7K��o��T����ҥ*QͮJ��H����/%F]�ڕ��(�����M��\FC2�%N�~V$�9*'c.�E�DTH$ZM<ؑb���I���
O PYx)> H�\Ӧ�U��uԹ7U/��r�����[�M;*��>���QZJ��~O����`�_�N�~��Jj�6�����zmt�n�t=EUJï��n~I_O�2����Tk*�r�:,I��t�f��"ų(�8w�>o�/�{��m���A��*>�� �&�?����ë�NU\﨔���R��N��Fn���#�@$ � D�8g�="^���'��?C���'8|� ���?��W�.c'G*��i��=Ӎ��VRcUM0^R�>SRN����UU7q��L�zp��_�G~��0UJ�/�:Ai(;�cm�	���h#Ч�;%���}Sޕ���ѡ)J�X�,vS#�BK�5����$X4���8�mˉ3Zk����M;���Wu��it����Z���VkŨ��g]Jaٜ�:G*�y!�CEe�}:J�r�rJ�vz�h�@�Ó��o��S���Ɇ�%2�%.8)Z����hM�ҕܟwItБ��������>�����]�9�,�n�	�{�����L	"�T�Y�ec)FC�\�U��\2'/U�=[	���}��r|}����:��x�3V:%̚h��:t)uI�S�4�]ɋ�e�ڲϑ���K����-Z�jK��߫R�3Q�S�M?�X��{�VԶa�]Iݚ���ܯթ���]_Vԩ5N�r�w/6,�5�Sw�]I�5:�+�5;���ظ�%�"/�q3�PJnG�*��3,0�K%b<�����.
,�mq�G��W~2g��e�,"�k�����V��3j�_5=G�Ԗ^L�ZR��E[w'Syf�,ޞ����z�-��f�ĽV��o��W%X�3���n�S�X�s�?'�F���qi���+Q )�d �+ yp@-��p[�#�dD�`�/��w$_!�] pe��&[�D�bD�	�;� �p/����[�ĲGp#��gj���P�ni~�U�m< ͣ,��MuXb.�d�`+O�^n2���;��o��Ì9�d�weO���Ӻ���y�aǸ�Z� �$O,H	�L\�ˑd|ỉs�x�+�W�I)��E|Rʜ��x���nr��ʪQ*����_�f��ż�� X���Gtjev1]P��p�}N�
�ru����ƪ�-8,~ʫ/'J�ݎu9�b�m�lb���I���LA{X�S��|�2f���F�(�Y���ϛ]��c0��x0� J��p���,��&^G9ʂ�j��	�֭LG�q���/D3��=u�KI��M�SҠ��m颋���ӕd�>mo�3L�N��5�r}�#t�κ{�NY�h8X3y�_GKwW�U�ק���/ݟT�7N�d���+s��h�QZ�GE�Kq+�??Nᤔ��Q���8�������U<�vK'Χ|��Iv:��9u���=�]NIRJ�2s�^�����Ef2��uP���uB�s�1��f���ָ-.��OJ�V,z�O?�+������S�b�
ǩ´Jf:9�c��U5De���O�뮎�ŧE��[�:�����T6�=Z�4�?M�Z����ףE��c_�YA�)T��j���LK��q���.��R�}:i���[����6�|+Ӟ87�~K����_�Yv��D���V�Uʥ�����]����[��Wg�M}��%ti+�R�w|�q�ux0���+�r�IT�z7N��O6�m���n>��IZ�7U��4����4�~Lj�����jOו7Vnv�*�@�M��n�k��u����i*mh�g_VR�iWl��T�쥜�e��R�0�M��G,�4ݶ\\wZ�(�4ҩ�9�pU5vU�q�Ǻ���XX��N��c��,�b�X�c.�	������/�E\�.��T֢�b��oU�Q2Gn	Â�jj� ����	T�Zt�y��#P��o_'}-�uT�W9m�i�Ӄ�Q�T~粟O�K~	�q�~��3'}-�u�+�m�u4��<IҍJ�1���NQ���$�q'բ��5��*ĵq�iM�|�VޕI��_ڍ]>F��ѧ�/��o����{w7
#��N�7b�':UR� bO������Nsc5Е�r�i'��[�t��n1��ӥL���,v4�\6|��B�U���P|>K��ۊnٗ�ҥ���~{S�U�M�'
�58�\M}�oRI�>�W�����ȫU���M�Xk��o�u��={���m��˽�u2�k�Z��`ˮ�>ہ����L��r��b����&g�a���9�DR_a)y$���`�W�/��{��� [��^߸UO���Ħ���$� iK��,��e���Z,��}M�"3���*�9�u$�OV������V�ѩ��}�z�
��غԹW>֎ڊR�n�������ZZl��oN��T��}4���ҋ���4P�);SJ�-4����T�Yb�K�M3s�[�:oԣ�b.S��Gn�� #�~��J��I���a*,|���ۍDΚ~����zH>��/�<�o�5�],���xi�Ӓ��Uk%��z�����5s���F�ṇ��T��pN�Xi�^�V'�9���+_Q����M�H�X6�xɥr���e!�W���b������	v'��  (� �y) H���YH�0 :�Ԡ�N��u>@Ӊ2�$�w��jH��6/ 2䜐; A�%,]�1�K�ܑ(��	� <ؒ^"p����JE����`̏�� �����2p&F�r 9�1�Z�B��4�t�vG��M£N)��_��u�n*wr�%[z����MU7'*�)��ta�zU%�:jYG��/*�)�<�%f���'��ŮT�� +�rIp�	 [�\�� y�&]�jC�6D�w�b{�j�Y7���M�"E�8/U���K�]J;m��}�3,�,ҥ<��P9��X�PuH�4�����m��$X,Z@�� 2\#<	`iIa1=�� �@5d<� �ؑ`܀��d��0���G! r���@"0@�R�6.	�^ K*��g ����S�ٜ��Q,jW��y���U���8;Q��Iˮ?���h�N�5%ps�IZM�j��r�s|�I��hn�!���=�Z�z˥ټ	8v�t��Mk�3yY��jh�� �ºZ3���%�S��TQ��Ҫ^`�e�˯gmM7Cv�����5Rr���~
'w#�صb`��28xy7.�n�+S�.[��b�rVDD�7�,�7rIv(���`�< v�y+$[�pE��l^L�ٚr��1,�783S�P�Q�������W�F^$���� húfzN�X�Z�ԡ���DB���3.����*1����d�ˎL�y�irH�FY�4G0TF��,��"�H�\�A9(�94O�Xq!�$Xd�p0 ��Q��H��e`�J��Z�Zf^����PcZ��U�rzmG�?*��`�����%��=5i��i��J�y���W��Kh�oS�Z��|�����\N���~�GqF�*O��'��*Ӫim{Go�]1��s�8w���۟�_��٧�]�<��M_F�<��L���U֪VG�շ�=*���e��Vc�j�S<����{���c�V���c�Ճf[$�.tr��� �2���ގ��h^$���?M��6��c�� �� ����o܍��ă���*�k��^I]��į45aR��������j�Ɲ1��Q��1�����#�=���n�+aL��"�䮙�snE\j�����Q�v2�ߒ�5���W��%�j#��ʴv�B1��+ɩE��U0�ut��ԣ��5��	�Fر�܁�pVT2��RD���"��#:�R�����4Q7vHWT��*}NOv�gԖ���.����՗0��)}���}g�u��X�aBH�&��q���$�5	rET�����|����U��_&z���k2u)��m�ٗ[u$��m_o������%{�J�)�<��r%

kuj�V��c���hC/��̰E�ؠT��T�
>K�SU�GWk�5ǹ�e+��������<5�~L�GZYh��K,���i�Qy���0�jf����:���z����`�e�ϧ���':�_s��5�'��U>lbI"F&���"��&-�ql$��k�z�������ؽ}��ک���ϰ9�M5B�����?O��==W^���i9j3�O�����P�׳���J�-���ɵ�%��o���v����t�i<Y|�H���?�j� �'��G�� 	Жʗ���Y���q Q��l 6 G �  w��6 '��Ifě �� w*�I� nH����<Z��@5bpG~� BV
�Q�x��-�*�=me\�R�p�������� *������I縋�-���w�%� \;�O&T����lj�
�ImYkrm��a�9�g�łK���!¹�+�v%�}�,ٔF��[Sb+(�IM��=<du�I��M&�b�'���Kk�q�۸C��=_!��]��2NFQJ� �T�v�(�_���AμYµf�'�X����0������
��I���J�Wk��7�F���7�fa�`G	�b%��*.bb�̵0e���m`_t�fn�im- �]���ex��	2D�"m��i�
�����>KE��z,�Sj���g��mb�W��L�����j��{������Z���玪c�k�Ǒ�ɨ�q)��n�쑊�qt��6ӌ�B@eY�c��q+�*��(�tC��n	�,�e{L�Ѿ��Q�&�p�_�U��ڣ}2��OyKwj�>S�j�GJ�˯�V���צmtvU(��G���V���;Q��e��� �����]�Y����P�;�3����� ���/����[�<�nPίU'�s�XקG��3җ��Z]YI�5�*�*�<�����x��	y��Q�ӦU���K�øj��T���DD��҈��Zk�i�U�ێK��>�jZ�gX��i�uU۱�ѥSDC�3F�UM'ETeC%�R�e��1K��J�ܒ�TX�<��J�=
��=��/0M:?CS���tWWfI3���8Ԧ_�DZ�Q6^�uW4�=I���ъ����dkM��W|�=q*"�Q���[��s���p�[�<�T��F�������iV��[�mG':��_ld����n[\�z�h})d�m���*RI%�=t�U��"Lg�w�	�l�0���u+~���͏�Nڦ�ԭ�g]=�`�>�||մ��OF���E1��%g
M�KT4�/�q�[
i���:-�$�U6w_��UJ����Nʎ��t[uJI$�B��b5<~�V:)J^{��k|��8#�>��٪j�"�r�י�ZhI� �Ԩfzv:i���4�۩�<���tt�m� %��)�h�^�F�ۨ`�Ҧ�#j��;[�i���kz�U;;}�U
����ZT��^O�������<�^��US�15��}SMJJ^&��T�"�>EZ��g���_)�~����w��^�nny��©�,�Muz���5U���	ur�5��GQRU��I��'��/��dʙ0����DŠ��2%g� '�?�/`)�6%9*�G�n�h��o 
�v+�@+��q�;����UQ�5f�@#�\�j�i@H\�裩+�����o(�Q������mvN��}m��4��Ʈ?;� ��_m����7T��>�ӣ�҇��k.�&�:�i*4҃б-*��4Y֧��}_VҡBRȯ�e��4�W�O�~s_�w��ӧ��UV�Z]n���������*M�g�W����m�>bڷ��ҍ�4�m07_��5��*��#��u�W�[;�&�Y���#� �kk�r�����Q��n�n�=6X8פ��g�=���sM��_[M���W��K�w:Mn����ɚ��i0�����kq���>���KY(���3�5m�X�u�������k��d�,��m��צ�:�Ws�m�GGZ5$㐯wE����X�>�~���=�qa�X& �q� (�vk>C(�p�/$u�2�W j>��s�Թ��������c��:ܑ��d%�-�M���x3��1����&}�f	7��s��ܢ�$~$�����3��؉ 'y�&�a(<�6I��2�y3Utҥ��z4+ԧܨ��(|��ھ���W�S�W<:߈(I�R�p��nR3�M2�j�]_^ׯ���x�=Sq��V�c~½��ԗ'�W�6�߭7���z����㱉���)���~ �o�����7^������. �%<�D�G]M��ٙ����-����PdM�=�,pK���<	F^C�I����h;<���$l��2��2'��#l>H�!�[$�2Hc�2Eq���1pé��G|�c��$W䥥[�Re�HP	�� �/& ��q��QZ-
jF�4�D�.��$�V(�ܓ#" 9~E� �A� ��vș�0&@d��Y�  
H Qd��2K�8�
�
I R�F@�lҩ���^�+k�����y<��Uw1yֹ�IU/&��Ѭ�OU�ҕ�W�u�k�x0�-�i�Upv���EI���(�,�jˏ�����J�u�T����פ��t|*j��m��I��|�Ν��i�2��SKsO����t���O+�t_�6Ӧ�ps�G��m�#��*�ʸ`eo�F�IA�ȵ+X��~	�آ���<d���rM�@�+E� � �$5��\ˎՓ5+H����o0�N2Q���y5%Q0���Ųu���xEj���}��7�؍~��ɚ��ɖo���kS����%F`�Id��*2��ܰF�ܗNJ�� ���O�.l�3��*�*"v5AVMЮe`�,�j4�{W4�6`Y�"*:LW�KWGF ��X�ע��q�N��U�ss����t�3l{+�Sc�Zp�ε��S���?N�Kvg*�������a�S���XM�1c�7ʉ�Hf�,P�Ԯ��zU���#�(�G�'�5��� �� ���?^����#g��tJ�.
��S��X����K!�k)+��L��T���������&�T�^�5��C�=����e��,�djx	���FpO|�O�	���	U)�$t���Fj�nv��J�u1âS���6=L᪯3R�y#� ���GM�����R!j!�:�H$9��D�� T�4�I\�pe��uʅ��(L���J�o'���r�>�F�2t������s�Ӫ�"���j��(�Cj�Eԓ����h��JZ�5qL~�F��m9�E<�x��� (�#� 5�*��Y��`W<�-��	�Q[M�Q�؉�s��"P�̽J�a�ҰjsR�fl!�s���޵SK⧨���q&*�J��:���&��ޏ�
0�_v�M��&�1���ٖ�&K6*jʂsa9SUu*hM��/7��I���^�UP���8hmu�5�=*�+쓰��|A��z?���֦�ڷDK���S�x���d��V��T)���V��]uЪ��z[����}�����r~��7۝=V�{��szP����u�>��������a��i���{�}��GqR����w�w���v:�m%k�&oX�����>��Ոn�~ƶ+�z�5SKqK���vm���US�M;o���r{6ۿI�V�
t�j��*"Q=�l)��Q��Z�5�2�h�������(���+��k�[�[k��u�u�MO��^��?�w{�������貭$�x��kW^�]U�ߓ<��z��[�M�f�#�M��te���tt�4��'ڨ���OG��b���7s��n' X�S���*� 6I�R dp���1�>���<�L�}����}�e�@�X��~�����X�ܝ�
�H�����8e���n0@v2�^H�Ծ�8U'j�~���r���\%���A��f[�@�ح���.�	�(��b|����/�9�=��ZDρ�	srʘA8bo+��� �H���fl&�\�呻��q{2����1�˒Hԧ�\d�ܭ�MDċe�8�ؖ�Q�w��&\���1�D�7|��x���N3$K+-6�`�M�!L��Qv��jY9�ů��GJ�NYʫ�H�N��M�64�#j��@�N�6�iAͿ��#x|��i�Q������]ra�F�dfdU���D���.;�R��6�`�� *��81t҇U��S�TX�V[:�\��[�Ҋ�\�>ޔ�'��M�K�rQ�֡�J.�ߪ��͚;��N��������'�WF�Md�s����4|��j�t��P�Wg]m��]'*�篥M�<U���t�\�W���bV�#�a��yD���"��%$ò����))9�t?���v��SN�k�S�#�F�9�驫�<�s�zt�t�Y;inݹ>W�wѩ/������o�F��Y�M���<�V��r�Q�N?����Zҝ٪w);��J����;��ZX�K^�~�sKV���]��#�ڢ��ۏ���j4)�U+��{�nOU��� �V/�M�Ӏ�S�|���7/��;���/�~���}v��eP|��]p��~�W�q2s�Q}GgT������݉⮹�_%W�Pt��ET�c�5���n�s�T˲��;_����J ,��LdC�i��� �b~R���U��#�T�y(^G�h��I�{d�M�)��.�z� � ��6�b����D)�C7�f����MO~��]ϧ�u��)�H�i�G��˟�t�&�9UGi��WB�\�kJ�P�.�jT٣�z�T�ԓGOQT�MJ�O�R�eДKH�Zޯn����j�dˉk��j���z�g���)���
��M�n���N��&�ޯ�Y��&��j�)�>eU�eU�j����p׷Wy]Y���ʽv�uK<����~I���R��s�.�Ռ�QP}���`
�dqfe9/� �I%��6e�2�I��t�Ȼո�|���}���ؘQy��T9����%3t����0����9rF��Y'���08�6*��7	Ř�y$��r��}�K�30�Bq�7UJRE�&"n�uӏ�h�S=4h`餩J���Ҹ����m�v�Ҧ��>�1Rt�R��?#�-ޖ�9V9��j��� ��ӷ�éĝ)��M����ꚵ~W�����UuZ�:UN�ż���d�02���J����n��MBV������n�;UЗڌ�G��T���������h̷=N��o����۹ae�SVJ�J%S�Qk2�q�WT{�{��/��f2/P�8�gSQ74�{@��ltRѫ��o�G7����E6n��O�ܹE4���(k>���SWJԦ;�'�5R���~�Gu��*��N����QV��N�KG�C��:p�u���b�?o���6���N��׀�aj'�u�:%`��OT�Z����e֑���$�]���V�Rrc�e�h7䋘�"҅���G��{��)�_ؾ�����`�2@|	�7�+�W$���H�@��W>CT��/R��Ԅw����jo�(wԥ{�ū�{z*�j�]�p}d���㔏��� n���.���5&j�"k��k����Ry�}Ko��Ut���u7z�����9�]M]�_����+���k���}4$�𔼲��^�OS��w��z��+uM��q��H�K%�Lr!CvA`�˶
�[ؘ�To�x2T���,�����ydv��M��̓�l�!]ɟ�V�a�e�,� ��L�����+�pBL*pT�@n��� H�$ �O�����*\�5kN���$�����f�ܢ�*dLHE��`ps���7EP*�����9rX� �d����X!�� 9�I y��N@� �r`��3pH�� Q�b��@p8@�0�ě� �� h&̀:�T�i���̜3]d��^�-g0��MR|�Y�OUӇ'>�t緻���d᧭MJ��I��st��J�Ʉ䩑]�ת�M�����Ҿ��O�|�~K��f���Vt����SסR}�<Z�5Q[�P����UCN��x>���4����S�E��;͍����d�O���ꨧ���t��H�:PȮu_x*���+����O��|	�X�?��/��݄G�!L�+$�$v�x�	�c7�դ�!R#�7�\�$r���V$�/6d}ʌ�a|�s
	t����K�5U̻<f>H�`�-�F9��\��EiE��i�pԗG&��ѩ3��ʎYdh��ii7�˾
��,�[���5k�S�RH�m�����G�mҠ4��ш��6O"�2iY+�i�����4i�q����T�S5�#k��ɤ��e��Q&V$�̑Z'���� &l�^�:d�T'���*X�U��z}�꼜�w�r�yy��p�4��+�95I\�sh�GF���sR�cH6�H+8��� c1s�>�������_r?Q���)�ǟ� G� .����H�+��'��U=�J�rUdX��Y��n˒]{�c�|dq���h(y���CY&A ����V�&\���@���A�9#PĹ��,TL�<�2�-SsjY4�El"�5�窭���3\�WM�5k�����fǗSI�`��h�Fl�Z���Θ��r���z�ۤ�q�oV��f�\dҢ�� *���Ҫ�Sd{hѣN��܄����5*e�t���M:����I����m��+��=4��~E4�)J�bu����?�T��!S�O�?C�����ɟ�ҰP�/s3�+x�U\q,��n^nG1���8%U(������U烛բop�59�z�������f�i�9U�ۓS�oocեR�s�׎$�:�䎯&��ޗ�n��Z��x59�ޫ�U�bSd�di�&D�,�Cv�7c��g���6�z:���K��K~Ư��tl[����Jg�}��m�/Wq�t읪ꊼ.D}��w��ӵЯU����gq����-ƕTUNUH�������ZZj�=:��~3���z�N�8�?�Ə�ա��_�}7��7�e�Z�T�g��I���w;�M�S�RK鬿�y�_�4�OOCm�T��iA�Ӯ�J���Rp���~�KsN��r�*���t��S�W�jօ+�R�DW��OY��5����u~j+���mg���I����U��WUU��%[M�Y{�]%��P�j%}O�4*�gI�-���4���������֦��I���-���ԏ�K=�n��zֆ�54��U{<���������t��V�|�7V�뭷UW>֧���V��4�$��z�z^����z������ qY�� �>�����ύ���f�ݨ���}Gִ��Zt}ڝ�G����m���W�Ȝ���tv~���a�R���I�����c��[J�ү�˩����y�]t��]5ӊ�p� S۽ν�u����U�kMƯ�׮�m7bi�J�c
�M�uk��TI�];=4��c�����mJ|#�vr������< �#�%���HrR0�26�5`�9�x�{��DR�e@�����$V�n�g��3b?|� 5ay�+v 2\��P_`#�#h5r01VN5)p�:j9]�=��WdfK2����� 1p��"���+�f9D�}�6I��P��up�'�>�s-����31O�&�3i+j.sn�i�E��k�7�˩<`˭)p���f:�jT�>�suZ� �ST��n�J�梨Y:� tN��-�d�?�Na9�`�����o�7,��V�tfTܝ\�a��<8'>݈��Z�O�p����tmt�r��� ��ݜ�xI��tԫ���v,Fj����ܦ�druKs��L�x��L�M��
��$�E�&c�7����$9e��x+I2w*$��k�r�)^��T��]V5KI����*w��Rt4�jne��*q���]+zu&�'�O��$|�[����4��"��jT�ùϮ�K�����T̞�uaO����K��k]U&�<���Y=�8��J&�M��1oR��5�I��X�n��+d�=]i$�����Wv}З*=>���V¤���ٮ�iXS���˹}���g��'��bg(��J�UT�ŸڥKhJ�>]��(�ѶuTzt�3�M�#ˡ������{UB�Q�4tU��7uY�5q�+]5d��R��n.Jhu8*%-�SUV>��a�M����e��}�2c�ӗ���(8֢�s8r[\{)�%K�c��I��$�'�^����*�L��G�J�SmI�S�M�7cR3zע�A�UOLI�U�ۭFN���֣�I��T��U_bL�kQ҇�+���Κ�Y��[{��ޞ��9�ܯ�i�ZZ�p���4B�%鋠�i��u����R�L������b$��G�2&���a�k�8p�}�V��'�k)$���E�r_0���*R:7<���å;&J��y6�T୤�,y��2��QT�sk�5SN���V����Z���鯹��T�jJ�����-͔ٟ��]�&�=Z�Y�`����J�O�Y�57�՗�z��91UUUy.Fu���WS���V�˗'	h�W�&��Y:�&'�g�B6�ʡ���(�&�7rZ��G���dD��[$x�'�J�XR��%����HX�R�py<��W	}�Au`�@?p�`@�
b�G%p�ۛ�L�#��,�0��I<��o�U^,E�=��M����x-1-�#�/%y�R>t�N�* ����EJ�*�e��:R�8���"�R���pw�Ъ�X鵢��4{���O���W}�/�+�N�
*ܒ��4�a�*�ɪ�Z�edg��Ƚ�b~�K�����J�J��:U� q,���Y�
��MPae��ymߟ�)���T�� �݃IBD^\���4:l�v�
� Uu�J����;���؆��&�sJ���*aɩ���ѭ���v�gS�2��4����Fʕ�M]4�$�������ڍ�v�UϪ���#]6>}����v�g�k���t�h��4h��vK����A1��WD��f�#�-$M����\��ǐ�9'��n@Ӻ�f&��ؖ$v'��n�m	��� &�	md�	ip;ܭ��R�r�½�7�@�\�L�'_���[N�<;��'p���_���݌=ƍ+��R~C[���m%��jn�k����K95�_U��5�&x5� QJI7ٟ�����abK�5���{q]}IǱ���ƣo�9��4^��cV�j���˗̕)�\6Q�,w�.��ȳ� 	�a�$a�EU�{�v@�o$lq�4ɋO`�6lOVD�I���3>��l�M�!"@prK��@i�'�@�Q� q�&S'��   ��ς��R�� &�@`��L� �+� 8�0j0�He�W`H%�À:��tzj���ܝ����������E2���=� =���4A��.2� �� �%�"ev&
 ���|;݁]�.wJ�h��( L`d n?� ��.Q%��#% �=ŀĎ�� P=�!� L��30I�+�Cg�OZ2�
w:*����:}-:�V/'��XJ���U<ߓ��gN��N"+�X)��7f��t~k�O�&.�������:�ǚ*�gӢ����?���������gJ5ڳ�LX����;Z��:a�WMI`�m}R�i�{�~��~Q�m�����J�t�yG<jW˛D��Ӯ��M3�P�I�$�N6�]�m�[�������M����� G��J�u/��P���;-�����h�)�Rɦ��P9l��(J_':��Ք+NI>>MJjx3�Dw�P�J��D�Q�MD�줮�E��I�95(5i�2���T�VDIM�F�9�n�*i�s!��F��0�`ݸ_$t�J0Չ+��x��ut��'O(���,�G^��
���j8�mbG��~�t���c����J�+�It�L��Ѧ�#.��Q��fӦ�g��^㧔k�\�x4�,N
��
�x*"�0���`���V�9"���N��Z&_�D~���nH�gə*K�9U�O�γQ����Ҙ6ݬe���α	�H�O��e�2t��Ya1��#��\t�1��ħ��F�>�IB��4�������(�W�'��N�u�?�?{�	Wt�[���+���S�a\ʳ��9���k��7+ب�!�,�m6n�[m]��6ڹP��K���J�{_�o�����pa��U[~�[�Q�$�ɕ|�AA�&Q8$�%����)��˥�E����5r�2�w*�Ya@iupUJm��L	XVA�J$�D����uA��e� ��f��#W����]))fz�CWL��^��sn�VP_5-��w54Ҳx�����OR�ɩ�7��խBY��[��$y�Ȫ�s���ޭv�cR��R�.dg�m�Л\İ�Y՛�NX�b���� +d�@�P!@���?�h�z5;�BZ��o�?�O^�4wpJݥ���:iQM4$�C4~k���j��:�i��W9;�	ѫ[u����It�����\�uf������u��]}R½����͖�Z������ ����F�����]5�t~��'�z�η�j)s�%f���׭��5*uV��dgV�ݤ~�{����h��S��B�O�v��Q� �����:zUR��*:'S���kuӺ�t�J��z���M{�O��1R禧���-���Kب��zΚ�{m�T:�������rf�{�c�O�7�l�5+�U5R������UL%���R�0��]�����������;�BӪ�])B�ͩ��k.���������~�=�:�F���� c����m�ަ�N�)K���m��T �P��]-T���'��a@A�������t� ܏;�w����ZK̅Eڨ��:G����M�S(� X���� I��9v �@/��r>�W؎{�<����ܒ�� ^,.��l��-�Z��;(+�n|3- �����I6��pL�.f����1T�@�YƦn�-��|�S����=ʜ��A��7{�\�U^@ӫ�)���9��}����b:�J1Ԧ[��d�{��:�Ӷp%;�k�$�U³����q����F��QH����$uzt�r��]V�:�W[��)����܎�@tU%3�����=ͪ���&��8SZ|�ꔮI���f���4&��4����$U*��&G�N��35U�/+�UWp��a��U��[�`�_��LD��xH�Wtrm%)�b��G���4���Ҝ�G�#ʖV�Ȣ1W���pf��M\�l�l�J� K6IB�؉X�W��FTY�(	ϱe%�ԟ&�ʕ�Gufj�mN z��t��:�%U	A�ғ��IO63�����j`�WET���(��ǇWo��eG�V���h驡���w4'RnY����v<N��j:\�#�W�����P�>W�n�g�Cq��˂X���R�w;haZO���Kj�F�^��1^�Im�՛j��M󓊪��F�.-�kSL'%�Oc��r�0����:����q'j5��K���um� �ښ���6��S�J5^�T�&v�ut&�l�������֟3WaE)���SM�*iG�}��S�O�����V��isl�TKPy�M�������~^0x=IY��3���\˵�pۈ=4�jj�B_'�C�r��cv��
��A��}�M�R�P�>n����\J�3:ѣV�����eSw_%����m[��Q����*�5R���Z5��w�	\�w'��Tv۩ե.��6K�^��i?/���K�����I<���$��Z����fi9�V��`;+X�+%K�8�� i��5w�?8�0��
�6D�IM9
����83)��ե��T�`*Q�Ȝ;���~9�TDت�����]��(K3��!�05�	yB�Y��`��E�@�"ȓ�+�� 	~J�sp�y$ �H���K�m@D�䟀�K�؊9�W1l���,۳�p��,I^�d��XVPK7�!Ǳq|����w�Y1p�B��a�H4���rF��U�і�!/�V��bB���֝'Y�Vv*��,���pMZO� c_H�}�+��R�%����0��jh�Sx+��J,O]:{�9���5:n�}���?MT��Ԉ���m�����cMe���-�nLG(*����8��û-���T�^_����#��W��>;
���~����H�dV�8��mL���6Ҭ�T�c��� vs�t�ɥ��M�֍�m%q��R��T�(g������m4ӘFG˦�������uE�}:4�a�
�G�Oc/�v=mh����̵�%:tӞ��q7*vv����:�&Hpt�~�*`��pJ�C��P����5$��Im�7`0%��a�O ^d9���_���X��˷�J*O�����L��R������^�OJS�7�˯��m?�� ��h�K.��� K���<޹�R��Qd5���S7<������RO�����_R�V�ƭJ���6\5�}]Ҧ�]�ǯj��[��>l]/�׷[Ե�]�g��jW����x��Y����R����*���a/�`���l���6�'r��S�m{	dd�S�&XX�M���&2g�I�������M\��!"�( ݚ�v8瑌��L��2�Ap��X� ��!�7��� / -��� �H�. {�q!� @ �G�^ a�n����k�� ;�` �� m]B0�����(�uU�����fC��*u1n(��8.�����PN�A�)P���������!G��� V�$L�V���`
� �`��� B�]� 9!}��*d �bH�ȶWD�Y ����Mv<���w%��v��%��jUa�2��:ѩY1yt���S�}=t󓵜9���t�]%�"I"H��U.U�'�m��J������e�/�X�,�����7)Q�J��5	���i.���;��>:��>~�Ե��eu�� �=�����u�������?W�tSi�>�[OP������Q��ЯmS��]-���� ������m��ޞ�Y}6�,��;e����)?�Z�|j�e]��V�QKJ�C+�������^����G�I,+J�ɯG�h���J�jd�̴��~��/�&�XD��R��k�Ô�$�Ly,Ap��)*ńq f{��o��X#����I�Te�&�p0���b[���R�LY��1F��t�c a��A�nMU�C��F��k�::m&9�uk���p�d�C.�U+���J�쌵.��"�J�J�@��|pc0_�ZWp����$�e��@�8'�j!x"����`�B0@��,�)7�r�B ��';�s��L�Y�j1Y���/�F����'���X,V���H�K
�J�g趵��W��R�>�٥��'��:|og6Qʚݤ�Rg����J҇Eڗ�
��m2e�f�� �������r�3ę�Z�pjL��έI��SX���e�Fb;�Z��y/S��2�`�~(���F ���8.U����/�B��ܨ�����	u�F D�!.���),���Q3q�����S2��0֢y#X9W����^�)�S�z[�pO�JY<Uj�ՙ�[��^���qJ_nN5���X걩�b�]�׮������f����:�"SFf\5d��K�	�e�	 ^�$
$�?}M��o�����U:z�h�����e��u�{��ױu����z�/�ҥ���l&,ϱ_�T��-��Me�K�����CЯG��R���n)ӧ�v4~rD���;:����F�����?#U=5�]��Pa��Eө�Z|��6kK�}�F�:���~��t.�'���_}�Z����*�5���K��� �6��]+WJ��Ӽ{�/I�=I�S��S����c��?�7{Z�uv�I�T����wyn�G_�}}�tn+T������'�]���O���9<�d�������Tj*�۱u��5�ԭ��z����[����U���.���cm�/wR���OEv��b��f�cztW�R�J����J�~�o�k���U��֩����O�}:���G�o�&�?!��=ꛘt�j�>uO�}���Ȋ����N�� s[���)Z:U?.���~#�k��i��9t~�K�}���N���U���E�J]:6�Q�M]ξ�oWR���s˻c�7��+Mm�t�C�� ����β�Ю�MT�R����g�Ӿ��<=E��~��N�CWqV��*��jk��k-������m��������	�p��BO��v��QS�>[���t� \���؋��S���4�/Mt�B��h��%�.؀�  �L��;��&[��tfR�i.@���ɗ�J�Q���4��&�9p�}j;��J%�S���`���8%۹Y�p7=���Ș�@�I���#|+�o��4ٗWn�J2��@�˖b�>�T�ru�S�r�r�]S�sK�(�b�x�Ηk�y ꅓ�;]��VH7Ԛ�g�w�ͷ���֤du�8���N�\���Sw��n�F��VɄ���md7�I�ɖڴ��*J0'ܓ6y@k�E�2�F�d����}�|W3�cs�.��	@s8�5�Ʈ4������H�;�t�U ǱT�&���Κ�ӱ��^H��N���Լ�y]w�^݋*c��,��9��������Itǵ�WRrԵ)ß���IC1^��z�]LZ��η�����-�U��Lt�鳃���n�o܎�
��U����CɊ�2��bBj�b8D��6ч��L���3c���Ffdt���i�%�B��d�Q�7�F�[e�2V�Z����K�ǏFɞ�*��*�;����$�ԝ�qx �^�<#ͩ�˱�xM"�䲣��mj�����C��W��SU2p��S]J��Y�c�L�Q��M��J��6�ڪV�%��5zN/I��+�m4\_KqMygd����{�j:pv��V�6�Lj(�����WCMR��y�޸���z��I�t*֮�>��aN�VO�R�W}M=�1��U�ΥBIB��CyS�i������ �x�6���f�55*������Ua��M��Rgo�Ӭ�J&�����]	D\��6�Z�x�=���Kuu�Ҳ�|��Ύ�J�f>N���-6ڲV��u��p�x��թD)���{�4�fy4t���J�cV��g���)I4�j�D{��:(�E(����M:W�iT�	a%�񷻽Jjt��LM��zuJI(3UU͏����U��M$�c/~�ږ�c�nv��j�oo_U4�=�o4S�������ꧥKV3<��]E^;��޲�l�z��$�>��}S6�~o�����&��R��K�<`K�H�e��L+Pi8�X0���f�[n\��w�"e�"@ک��N�X��fؘwN@ӪЂn�s-�����j�)pm����No�iU|��KW�r��NK�l��w�7�&~ �tK�J�#L�T�M�va�w&���H���W�	P��>��ҩ����	z��|�����q�u��W�L�~��SB]����N��3���j����0�v�ISUI9<.�76�M��_�8W76X*I�&��R�q2�@	��)���]�/�N	����HJ��Q��$�+���#i�
dy �Zx����\&��%Y��2T������"��3|A.߹BrHN��"�Ug��U�jY���D�Rj�4��R��tyŋ�KFi��t�}�R�mA�OrT���(T��k��u.����J�uԛ�;"L��r�M7ߵI��Vz��\�x6iYa��M��/�{w"���.��*��&RF��u8���7#R��֍�K
�'����'�,O��橣��'�[$���N�mt�QRS������Ss�;*�J>�4SM�A�I���F�%)9�w[Z)K���;�Xa>YV��T��3deG�r��F�Ywe�@g�CW�W���Z�4�|�����O�{[K�B�s��s
�M+�����L -�#�����wcù]��������
�q��ϭ���Y��'�W�4)M)o�q^1��M<��޿UN(��<:�����������׼Ѣz�V�xu}ooK��6K��J���u�ߖs�[��15�^}_��?[��������*]�T�j�z���� S�U;u6fo�d����:"�mB	�EP�8�Y�v�	��� `-�2�.�cF�ve�����*q�� W�2H���s!��3đ�(�͉,̴�L<�i9�#�	)`��,˰�P�e{�> ��K5���	��>y �?��#�-� J�.I�@8�خ�	�K��� �^�~�,$\���ϰ�/ ?���^	�RM���] �$�_��%��`!
��`2)F���>D�K��F@6>Cd�a2`z64S^�=x���P��Տ��r� ��{����зl����%N�^�`���KY���М� �=��p&P@JE����6
��p�.B� (�qq�2 `� x� ��n ��H�Ip��'%�p.@ yc�;$� &�";���<D �!��0	ɮ &j��1�;��.�OY�	��&mVՌ�Z�c��Z���c�S�	4�F���r�Y���U�IEJ�W�q�N2%���i�\�]���.��\�s�m}YU��w�-]<*�G�J�U�K��ή�A���ki�]��գ�<��פ�M5����o��F�����_��ϯ����ңwJ��­a��-��1+V����~���R������Ǳs䩕�%��H�y����K��s03�>H���^lC�U��x�E�=�%<���+��59�]�#�(˥�%�DX�"N	VW��p�X�R��FZ4��T�(�լ"y��(T�@�NGJe� q0��Fzx2���^ĩC���T�Ί�����%�k�����D��x3�����^Ƣ��!�]�T�hB�EJ�����V],��؉`L��ej���odT�&@U���&�Z#\���$s�&Z�ię5�Ube\۶	T�����o(G���Y��p2�)�*B;\�)�%�#ZK�\KJ:o�J����i��8���>���M�֢���_?-�zUqvs��Y*c�Uu7f�|�����o$����w7�&3�r�*�8*$�"�"K#����t˰�b���7>G7j��7��F��5tSI�aR�������C9խE��ĵ��q�sG����6�Y59�=G���0�Y�x��mݙu���ύ���V�)\Ʀ��	��=F���wz�T��:�u�&�&�㹖�	vT^��Id,�  �$�r�@�  f`�5Jo�3�^D�ގ��⾍����� ���g�_�7�]���_o]:Z������7�t���N����S?�jS�_�=*�N�t՟��q_��;�z��UkUU:zi7�ilz�����s���V���o��_�ݭ;j55)��R���7�ԯ��t�&}�f�нKg��__m�U�s������k�������UF���>��z�ڵ��F�5���1'���WF���E1-�9����Ξ����oz��Y�� cٰ��ijk�P�*�xpt�Q����.�:�himwI�%&��-�oOQ��o����G���t麖\p�̯X��������H���w��� �=]~��׳,�����ki�+iSm����V�Yx>���޷��� §I<Öϗ�Q�oKOW^��:�*�E-�_g�_�7IT�iХ���*>,����߂�����*�����~�ң���i��}K��.ɣ�;}��wTm������l}���R֊����?�U,��������ӧWS\QI��_�5���)y��>��������n55��_j=��E��:zZmsS�~'u�;����4���:���U6��`����v�Ni�N��d|}���ޫkF�B����*^�ǩow-�]z��6<�jsS*�XIFl�ʯ��� �����{=��SЦ�3�7�}/��uz��)�������k������*�
�UQ����^n�B�����U�Z���-r�;���HW��~���JZ�]ϭ����q�~:���7�+����~��j*J�x7d�F���i�Z���?Z�iZ�Ws8?D��M����,���U5]<�P�b��H7q�J�.pJڡMM%�Ʀ�ӡ��/'�}W�u5���N��N\�M{y�/���k���}cWQ���ޣj��Is,��}��50���.~O��uM�a������� �tz�t�9~O���6'�k�S꺔������	5ԗ��~�ij��y5�=���R�Jyg������>��s'��z�L*��{������7nN�5t�t4׃��2E��&jh�@ө���N��k�/�mm{t��+է�`�ׅ���n�u���A޽d݂ԾS�~2J3p=jO�s�)���G�U{��R�(�&�
� ,�zu17����8T��U]�dr��p�x��)�04���.��'��\�N�.��[��O�"v%M��D���2��x36p-3`,��W܉6�%b�\&��9���V��kX��V.�b�I�j�/�9T��d���ܢ+Ŭ���S�w��ZW9S�����,3�ZjÉ5N�S|!��Ӟ�*�(n;��nɜk�usp6�|3T�wfe%B�t����vi�2��7|��*EW2�rQ�[�k��mY�x*--��mU�ſ$���W��G�M&�}6�kx��r啺�٘i�[��>L��\�R��&*�L�*HqbCw�Vf��J��5��R�P��Mu\�N*m�M1֝D�fik��8T��>~��N��ΏY*\�Ȭ�:�q?Lz������՞��$Z�$��P���-F��mWJI��6�Eu���z�Iʋ릚���N?Q7f*�S4��c��T�fykТ���V��f����F<u�C�>��=�xKřgI��T����{^�N"�ZK�=\i��$�F��1�U����/�Z�맸�R�������NgD�/�5q�mF�s�� 1I�*bZ
��B.>�:��r|��Uj>�soY�e��׫��h��s�w��ԫ��j �n�z���E0ܯ&��u��J�M��U�Z��Wc��&�|��b�_��2�O��Л�=�^��5�Ҥ�WD�T|]:���:��II���ӭ�����Ң��Zb�tꦔ����r�E����J�Y/��z�]��b��o*OR��y�R:빩�������J������G���/�>�I4�#4��R»�̺�AUS=�)2�A��Ww0�,��I>�+�:L����o	O�+q[�e�mVq�R�J��YF���&g�:��\�驦j��Ӓ��fEu���J�9u�yL-D��E~kCo��SM-%�>���Oܜ��m�Th�3=�x=4P��A���ZZTQB�MCY=Zz�}���B�eB�5��z
*pc��jע������z��m��׭��ץ����<��ԥ��j%q��jT���ա�U�մ�n��CE}GU4���5+6>k�Dn|�xɗ�6����x�F��S˸��A��]�:S���q6h#����X%�����}����!a �"�̸{�<�2璧�؍>0�Ӗ샥��"p�=��:���Z6����Y4ǝ'���ϣ��ڎ�D�O]�By�OK���m�������:���c��h�X�LyW�T���N��j�t����)�G�̙�jI�B|�&)�A��I�cV���EZr�QQoa��N������e�x֛��֍&ڱ��J�Q���'�����8�tj�^.�[Ѫ ��hҩ��ލ:eJV1�>e;z�]4�z4�]qԾOz��e��j\��e����i��q���7x/K���ʔk
	�NB���r����(�ϱ[����F�
� D+%��U� �Q|"suI��]���g���OaO3��nL�{�u��Ia�4�Ƴ� m灑)�&5uiѦ[(ۄ��>��KF�T��>/�z�t�o�]����kk��ԩ���_��z��P�s�n=[s�-jT��*�K��Z�����Sf&��PJ�r�l�8  ҹ�ri�C(����$�/�*�ؒʜ;'�&y����y� ��Q�M��$M�#�7�j��&[$�I���a{��݌�+_�&${r�Ih{�`���$�9l.��V��W| �" ����NJ���#��� �	q H+��q�ʀ��d�x&��'�� I0���v���q<���%j�+�/�������#%��̸
�I E�G�h�@"��J��~�*�@,�*AS7�J@LY�K�,��ӫuOJ�?[M+�E*e��)u�SWX?Kn��_����]F�s��}_[�-v�Y�il�b�B��� �^@� =�(	�,�(�
0��v   d B��=ǁ��� ��� ~�
A7 �09�RH=�@�& �"D�T�"�ZGM$���:UU/W���+W������H�'������3�K Y�	�| �d� �i��n���pT�.��z��i=4j�Ҍ�6���Ek)�1xnv�9�*i�<�z��ކ����u�k�a?$���4��U�Us�"�����~���J�5����{֖�G^٪59���4朝��5'-T�ы�R�����骗K9��m�J���{�Ut� �eu�*�>�ѭZ;,��X޾e�Q�N��hñ (���b�Y�f�Vp���˳*��0%Y	Jc��JS��9���^�x+Ǹv��&�ć~ ��X�S��4I���y�j/&\�PwF]&�+� �%K��s��J�P��(�N��r�p� b��X˓� j"DK,H��J2����f,fD�N STc$���,��Fx-��\pZ��3gf���j�v�jk�Mn)��G}�½͓����5[m:^�5SMJ͟���6ztץ]�ߨz��:*���WSV�8������v�1ҌյԻTϔzu��=j���Mj_`��T���6��V���~�7gົ��[d�N�+.N<��MO	��6��.vZ<��;e��K�1�V�T��{�С)���x�Ѯ��Yh���D$�I��%�J�Қ)�W��UB���I�܃X�/6�0P�`�� C���"DJ㐭y(��d�1�Is����y�S��baۀ�n�R^�R��H�V��ÖYi͟�p��(�8չ�,nqk7���L��V��<UjUQ��j|l_��u�9չo,������3�}Z�&[�L:�&��jPl�Y`�&�*��#�(�	�>@�.�y �A& �
�̅.������U�ES����N�=MT��t�#���߃�uU�f��8T$���<EN�_M]+5E���O��c�zto5)��;����G�}>�j��i�Q�5*&,�އ�� 	�V����qE�SOE3x}����ԪԪ��
j�<���;]--�{��4�ӧQ�E8�t֦���֩u�������/�[͕z�Ʈ��
%�S�G�4?ឍ�CtUR��RYm�m��Z:Z�ڮ�4�z7��Q��5���S��=]1�?U�� ]�]4�QDU�OݪۯSM���?�Ӭ��}V���ass�5~(ۭw���.��R:Xk��Ih�=5h��7m��Φ�u�N�:���ꉾ�n?n��5kN*�t�� j>Mzښ�*uju%�'�_��-=��h%GF�Uԝ꿹��K����R�eQFj\��wm$��#ߵ�R�G��k4� ���f�������5�Օ�E�)�_V�>��m7/�?I����J���OE����gk�KҶ�V��^����>���UZ�*iUV�IK>����nRtlꢗΣT��z���� �N�F?�|������
j��i���Mqսݪ��_�ϥ���61]z_V�έS�`����f�ZV��i�q��n��ۍJ�:����_]���=uiSZt�#y�Ɩ�Т��wc���YU*�k�n�o�ƣ�]�>v����S��UM�f!�eS{���^�6/Ň U�,�H2p���D���_��=^�S�Cgƞ���-J�����d�5ƕ+��|��?�+���P d	�DA�g�j���7(��!^���TX�`ʯ�5'�9�i׭4��Co��i*��|�.x\�ͧ���Z���>��kR��O�u��什֡Z�I�]~��)v8׹JRv?5��Z��̞�7��O��Ɋ���F٤�����b���}�V�*�t���?<��J7�g���f㒽x���~��z~����Ws� 5�Z����Q�*�?U�iTӻ<�Ѫj|2+�ֹ-:��	�z�M��t��z�Щ)}/����uhQy?N����z>��ZS����+����9jj*TɊ��i<Z��T�ɖ���m��z��3�?nA[��el3-�#v�U>U�ڕ�R���F�*B7wɆ��M��ETZ -F�a2&WWjr�pe��
Po�Ĳ7�O�����Y���pK{�� T��I..Ol^ �rXs���P��;<��b�n�UeTr��	�<�)�-)BD��+������a��:��6�;��v��O�xu�����+���LӖi:m|��SL(3S(�ܘ6�f�ب�M�/R�ɯ�U�S[��n�pS�Utn.i�X�Rj�Vj@�`�ص8pJZu^T�sN�L�%vΩ'J"�ꋝ(�n�RJƟM��_EG��~���nR��JNa���*J�RñI��rիd����R��-b���W3��q�;=4�E����V���+V��%��]�:����ԫ��2�Mv��3&z�͎m�))N��G�SR��R���m��*ҳ��炵hJ �]�T�m9-�Z���f&H�(������K�	3+�g� 5J�V���f�	����V�3�=���k�B�s�nƕv�7�ш9��KDmO���K��j�MuD��=�aC3�6H�O%���ћ2�'��wj|�e��.�&�1�S���Jk��5�Jl�J�v�K�=���h�,\��N���A���s��{V�.lg註��V�j��TǓR�Sf�����IN��]�ǧӔr��a�n��(�'���QKr�1n�=r�a�� a3η�fin�i�C�R��*bY��hn��j�zl�E1�D�ja�����+������:$��ئҟ'?���QuJ`t�q�5�FI+�Ww`,�UkCT��GU)J<���lAֽl�=�5n���׃�s_T�3ҟ�Xz)�E��N�]D��x*��LロQ�gM~�6���	ʹ�U��f�U3�>f�J�INSo,�u��Ū\�R�%�L7R�z֚��K߱�U)7���GOB��+��^��Ju:�^O�����UM7<�����N_'���9gI���f�<Ɛ�P�� !��9��M�9(%/#���Y�f$�k
Z��$��$����S�A0��yP�UJ���ׁ�!#tiW]]*���%vX=�;mJ��fOf�����d|�tٵ�Ԫ�����QB�I���Q��S�����~��ZN#����L�|r}�t�iw�mR�Zq�����f��}�=m襤���z�);��;`TҕN�b�a���R���U6ň<����|�Ɗk�(>�t<+��J��hh����霪�M�>���YH�ե��nnV_>�<ɇE�{����ʽ.p�� ��u��Zm;\���o��ЪO��Zj�t�@z�q�}W�fp���:(}��jT��͆�QTW���RL��^�~�OV�Jf�,�MՏ���5�����mw4�Bm���[K�)5d��nj&�f�>�.nj{��I�
�*y���o�/���b����\L�nYb��t� ����P#��N�VX���۹a�D���#�t�����6�����p:'�e���y8�w����� ����J��������kn�sT�Q�W��m�Ұ�>MHͥ�܁���R,X܀������Ղ�$L�"�� %3�V��wd�$�X�xd�#̀դ7h11�@m?�ObM�#2VA;���3�I� L'b4Ld�El*܎b�Y�`W9d�U~lH��I#�D��5h+�H��`
܏"�q�Ep�D�E��� c�2d�r��
��<����4��T��}Ǳ�P3�S$K��a�Z�2X �	w�O��q�6i ��\E����#�'!;�	/�I��"d	�> �Xr�r�#�?R�Ip-�L����պuRG�h��w?5�zM��9������n?3�� ������N�ʃ��'EM�FVT0.Y �TB�  �"~_p� H}��0"r}�U�Y]�@�+� pp��, �r.�/ �r B�� 2�R���D N�V&��O��]x��NN��M����qV�0ON���rs�A֥ӓ���9\�WbD0VT� � Ba ,�� @�I�e�:���:�EJO%�*��%�ԯ����vNpϛE}����t�������AWs
�Z��^�;5fI�p�h����Ͷ�SF��*�/��iĬ�ŕ�7m�KY--n*Xg��SJ��>=�R���;OQ�ҥSW��x���yƧNu&��F�S�}�򞭭k��:����ЯN��t����\x#x��M8��L�k��͉0�^�9�J��Q^,-$���1b���� �DR_b;z�c1ܯ�rex$(4��x)?�ՠ���8��E��F��ς5cC�0�e�vGG9H�K�Q�^I�ઙ1�3W�t��&a�d��52�J1�c\`�@�E��R�Y)�쑦��N���$Wi�z;7�_ЗM��پ�K���ƿ�U]iE5��~}��,}4�rI!juu�]t��Rݩ���mң�ފ/�Z���k/%vo��;�Ą4ai��i*VB�j�5<	,N8��6j-7�%QO�M^ơ%!D�B|�,ܵ[��H��UP�J���j찻�2�&M,�=�f�f���Rg:�4S���M��Z&�<u��#n+k&���{�TR�l���\�<��ي��N��f��e{�p�r�sUI��mo�y�^�z�<�FfLL�6\g[n	�g�6Tk���@�2A%$0I R� @�#��_ �(֖������Ӫ���b��6�}]��OSQa������{�*���V��������QS� �y�{ק�U���i����)�Zz��SM-�ݒR�?c��S�CUe��>ᨣ�ioO��>�R�3����������W��ǣ��	z��ԯZ�*4�I�M��}��KN�Mj�(�P�yi�h�kjSJUWT�����{o�ޓ�Q��*J� V辡�ޙ��%V�N�JQV��h�j��54�vJZ��i�[Q݉ի���Zuա�U)�4�O�n��_ON��U'<���{���iQ��.8>F�ִk�Ҵ�]ue�ˈ��i����Zi�����B�E�N�T�V?���sUz�h7�T��v9k~$�M}����UO�*a��y5���Gg��WF��i��\X��z����Wa�F�o�=ZN�kٟ��WV���U^jrkCk���o���� 졳Y~��� ѻ�T�����应#�nw���*�+��6>���n!դ�i|�?�>���F��n���$����t��շ������m���*���O����W��u/��r� q��E�Jziզ�P��~_i�;����==�?�9g��~�iE[�}Mf���G�w��]m�[�S>&��'��[_W���*�?s���oJ�t��t��w��-��݆�ӥը�e�������m�f3�1_��~3׮~��4.�����ߨn��֪�ڛ#�Ů����]u9��ߒB�"�d�X��!p�	7m���o� qb@ Y (c�/�,J�n�?G�b�����$~{�6~����5�z�>_�U�:�����=��\�{��W]���9�w!�{6����=��{u��˸�#*�P
�9"*@�"QS���u*rK�@ywU7�x\M����n���j��Q*p��T	�A�� R�{ၩ�W[0[���+��|x��}-4�]�Z���j�s�ӻ�+v�2ێ�<h���� 쩮 9�������H�@Z��N�byl�NX�һ'362�E�M��'%2���F�5u^82���́��#��?݃J,ܜ�#wߘ �	���X�wȭM�"w
�"��EYQ������6"�WV�!����r*��Q
	X�"�Ek�[ ��Lj����k��
�-7��>f�fLP��޿�	��F�_ws-��$�DXO #�#�J�bD��3�G��jR(��ד)F
�p˹1���rD�詨7N��A�R�a��tz��E�ӷ&��m��-Z�Ͱ:�Y3�	'Se�s"c�r����M���C+IJl¼�X�U��s0��6��a;�P�RT�o����ęi~�WVv3�,yP�y�k���`V��ڑd�/�ڴ�
&�J�Wen�+ ��� ۙ��+�k2��X
��3s)q���Ҳ��Js"�y"�û��n��o�O�?�:�d�ŲX\e��X�;�l��ͻ���D�^B,�T!���J�m12��C���2��,°�4���^|�����T��9��jW���1��W�sVF�ܪ�MNT�#�T����R���'�DwU��I��UI($�(�U%�j��s��������5	g��u%�w8���r*��d��ҡ�Wݞ~��z��
��Өۆ�,z��&]��ESP�$�c��]VP��]O�N]n�2��i�WRj#W��0ꊥ^M&�4�51���M��n0j�6��?F�3c�Z�~RT�_l�m}�47��U�SUSM�N:��4(m������ ��7<:��J�٩-�K^�RԮRq��US��T��K'�/�nLf�T��	0�S䨳l�&��7v�%haY�; ���� `&@p�-nlj�+sk �`�;Q�Ԯb�z�}7V�5R5q����[�h��>���m���F�F�R�����jUwC=Z���U.�R��~�OF�t앹:*I�Q�я���tR���];���L�}3�M\pZtЭ�c�B�YU2ʨ��H�QGKv��:�����Ϣ�T:%�J*K�9�IzWsjn� b���
9:R#�t�}��{d�<�Rs�I6�=n���G��+O������I_��έ%�r鏍��S�ϩ������z<�88k�R�p]1�ޚu>UP��u6�:���^ڪ]����̫FӃ���>�tt���S�ZV��/#�\�U��7]a���GJk�j��yک;�������k*�t|�u_��jS	+�}��� �)h�:�jYT���������n���M��F1�_�J]�����(�uM�G��WL�P�.RZJA���DYr@�K�!�D�4�gy,ؓ�AE��Vx��D�`Z]�-\�U�S|�?�.�W �.し�4�Jܚ����jpn����"��	��#�ޱ�zڿM6��w>Ǭ�~���U�5c�u���Mr��&���EJ����%�E�E؂D�a�݊��qb�?#%j�X�F�� NBW̕��e�D�O�x#`&ļ��N �Z�be�E� m�Q����0�w`d�9��\6Eb�F}�FE��I����t&�&��@@1��K�1`L8,� �.�# Y�p�9�"ċ�rϸ�%��B� �6��	��D�^F.`"CD�, n�V��	0,��rY_����-�L��p ��^@M�9��[p��ZX���il ����av#��n9)�6'���K���iw+�=�����ʪ���-$}�H�=��� r��%�BI`�88߷D�ӧZ��&��>�鮖�J�����u�:��\J�Ei�T0z7�=g�?V  �/�� A��
8��9
   0_   q> d�H� d�� L��X �p0&� �bJ� ��j��~��ҕ)�t�ד4+A�#�}&AJ6��5��H�ˎ����'�QJ<u(f��7��3�Τ3��Ʒ)�P��� ��"	�
���.	 ���Q��Jkj�)���OV0�z��	�vg�L�N��fo:��X��h�xt��0�Q���Z��z��:�V2��D�
VL������Y(륯U*�N��(�oQ�Z����T��+����UuS��ŕ�u�T��M
���px����m��ҩ}*��xgѣSo���ۆp��ܯ�ҏ&a_����զ�jǛ����2�X���$<�>������K�
��>��� V��e5kp#��#�_b�ӛ���a�Y��S��������e���~@�"�X��3W�N<q���G�q0g�%��Ȕ�s��IepQ��GA�m��͊�4'�a���bC��Ws4�q2k�l�)wb�����%��\$"]�RV�i����ɦ���j��Jg�	|"7x�J*V�@�9	K-:UU�XI�@�P���k/�*��Bs_�z�S��9׹��ݏ5-��CdJ2�yk�:��G'�]Wrn|u��{�բ�v�OsO	G3w�M(��ٿ#�V�� i���S����K�j�djq�Z�S��l��g'S�#����]z�2��sr=ʚ�NrNI伀�8C�ŉ͋  �Y ��J���;���wN�oA>����ɞ�ƫ��~��lu=2���l�umMW���*i��kN�B�].ɖ�'���/L�'���V��iP|�����e=�Oo���TR����I�����Ǳ��?Þ���z��V��SN�i?�������v����P����5_��>����;].���{����[�z��]�F�S�zf�o��.�+�R��w���Ή�X�&oF>n��ʽ��c���ԣ=wO� ��=*�O��N���j��[�O� U���U������u�v�Sc�EQf�䞪��������Q�Ү��M�}��� ôQ� �.��_j�џ����t�*�tj$۫�~CӽB�����4}F��q&�?I��]��F�=����#��CON���o�S��:4'g�� ��?�t۽	��R��J���:����V�M9UQj�Q�~�GMl��w���g��z֎�g�M-J�)i�?3���kQѭ�Ԯ��9<�uE*[�%$�k�n=oV��:n�9��]ǩ��S�E5UMX�fY�g��7m}=�tR� �S�G����p���i\�5?�.H?+�����V�u�]Yd�үV��*+ԫ�4�D���m��I�T��V���zk��_���$�������?���;o�K��W�O����V�{ni�_��^���M5����>&��~�Q��E4'�R>��6���$�ѧR�Σ�����W��ҵ4t���U� D;�z��t� �׮�'�^���&�m��k��[}���u���u�QZҥ�J� s�*{��d��m]��^��u����6p�Y�#PT!ؤ� � E��`,R�TFD�A�R?p"O��[A�{�  X��N �J�k�2�!
A%HI}� <\e������������Yi��ب�|�f���u*�u5��:�_��K�� O,@�J���hZ��Ҿ�}%�c~	n�]�$�O��]�J�6�ශ6��\wR��8ץ2�NЧ$\��ۼ��z]-���0�y�*��^5�R�̫2�T�sM7�6��2�#�&���Z�7N�V��F��xG���RX��C��n�v��P��$�dvVØ�mGɗ�a��H�x$��Y�آ�%�uDܕB�2�
�j����P�H��l~�[�P�o�,�]��w�)C��nҰYs(
�y�%m�ǒ����R�[�o�1.e��dѩ�.Kd�a��]�w̑Z�2��j��Q�X"�}��i^�������>�Jp�;���j2.��0�Vsq���� �1f��!���%cS���r�j�D�,����(�t�(v9�d��_ɚ��e�X���E���X�"�58��Ob2���紁)R���\�� $�.E� !��%L �{j슘�� G|�"np���H���ũ�`� ��IU݊��x��-��r1�\)�,�n�eB��
��\��w��X���l�M	�W��qY�i%�(b����p�H���m�I�W��7�]K�,v�n�X�2�xP���l�`e{��$�x���y�ˀ	��+q$�$�q���2F�X�X�G�²�rݾ 	��rL8�EI'��[�W	Kd���ʈu(%n��0i�U@~��9�T,܉����%va�]���̅��R�$x�x%0۸WCb}��GjW,����i�x#sgj�� ����]i<�J��Img�Q�9���u\�S��QT�̻.	�{���6���岼J�:�]�����ސ�������Ej>V�Z�J��h��-87#��[?�r!�,B4$FrD��j/i�H��-3~BN��G�[L�J��M'����JZ�@y\a�����}&��v=�~�BI�M\~~�
�k�=^��[���iE5&�I��(Nؔg���h�C��3�ۥ�R��s��JN
�Wj�jiV�g_��6u�bKE3u���:R�Udv�o�����h5��pmS*U���$�@������v �V�iL�Gt� g�e�IB��tQ�'esP� EM��I�����J�k����)����S,bR ��93U;5$��*�E�5i���몖�:xDW��Ѫ-�^�� �}O�KwG7�ӈ��>={k��So|{SK��y�4S}����])�*Ӟ�^�2������*K���U8��)�}mJ}�%ZNn���[�U:[P����2զ
*����:��\�� L9
����<[i�p���ͪ�zt:�Ry1�R�_F�5�y��v����5����M��twt��Ezo�%�R�2�"b͕8��?��ؑ؈M�\L���������]ȝ���O_c-��� Oݖa%�2�� �ؚ��{}'^�iU�P��ޫ��S[����ɩk>��[�wU-�����tͱ�J��'�J ���O�,�9�K|���g�'� F���Ĕ�"T���&��@��| '�E�V��~@��"qb��(�rC*a���� qxp`˞ ���-�aۀ"��\F��+�ȲX�p"B�%T�F���Ac�37��	� #�� D.�� �8*�����ź@:��/��wDYr�!�@/�d.	>H������� .����
��	 F�P=�n���$
'ț ��*@@� rd.L�I�� uT���K�ZZ)����nڭmT����Ҧ�JXFz�F���#Sq&��-wPf;س=�>�mU58�����%LLr~sUEmeb��Q�T ��"p�!H �2"�H���@Ȃr#���	�� �#��Ag� K�� ��  d��(  �Qj��]d�O׮��b�)���_C���7MI(0��&�2F��z��lxu\8=n����i�\���l�[l�gW���Hi` [�8-����{�� ��X�9=��� 	�� �:Q�Ӕ�>
�3f�����I�o'�T���UnǣKY�jY���;{ڀ�姬�� ��Ř�(�?A�0\&EHi�(թT�g<��>���k��u���r{*���S�6�]�~z��ocӣ�zu�/��G;�� ƧO^��TTӥ������;����<V�ܚ��ףW]�,��_?,Aj�i�ň�!��P�c5a�V�XG`�r�Y`	H^c�U�����6���������bI͋Ԓ%U�@��pb�Kpfg߱q5�i\�hL���;�[uF��H�&�a�5��j�Z�L+c%q�4�$Y�Q0P��M����	aL0�J�$9����.O�9�R\~��nF���L�|��`�$��êڂ��đ�[�:&n�ʭ�)����OQ�mGے6�5#�^��qz����|l^�Z�֖��T���u.S<�6�ܑ:iQɹ��o�^����+�U7�r���/W�������,>��L����f_sXλը�Ɋ�\ŘF�m�Iw	�W%
�J�4R��%,
�_g��R�������ꡣ�T��A�9;lvzޡ��m����n�w�q��?Y��*����z�mYQM��� ��f��jtkWMI�����'SÎ�*j�������P�z�4�jwL��{�߅��KOw��ѷ���E*���Ӹ��T�%�[U����L+�]�G�5(�GZ�=ER��c�N����_E��?�}-?G�OKN����O�:*諫����="��Ὢ�����_� ��W��U*}KZ�T��$~��Ν~�Z�қ�� '�}MϨ���~��+Z_���	6�ݒ�����?���_OCW�J��}�z��~� 	���*t��M��=KW��j����� [���7����ԡ��Y�p}/JЧ{��}U�*Ў�^/'��=J�릪zRS��oY�l���vU(���R�j�G�w��y���ZzzU� ��	eW��:;}��Z��]<;6|��gKC��n��5*�O��n��kj�[�m��ڻ���:޹�FƝ'5753½KsF�����Ѫ��TԞ8
�]J�)uUS��[.HkӺ��7��;�MEٻ~��L��zG�J�z�m7�*^�~�Mz7������uMH�~k�ާ�k�l�Z�Z�_�>���V��{�Ζ��M��7_�v2��*ԏ� wM����e��V�F�Sî�mcm�KҶ�U�^��K=UB��r���L�4��hGhL���}Cu={���K�x*���UM��b���]�ҕ����l|]���r��T�<�s�PH����Ϩn��������-����'J�Wd �����,8�*��R��R4��k���N@���O�5�鵑��An ׹Pa� �P��P��A}�{�|āM+/s����J��Zu6K[���+�驼�=�jtRI,��c���k^*�k����\�=���Ҧ�$g�:���'.���q(�t���t��t� ��c��4��.ޖ�+AwM��ki&Ӧ�����--:2��^�����4���	��[��>M����w$p�55��b������B}$�%��"�	"�1�g�l��D���V.H��� �%@��& Gtf�)��5>�G�Sl�nqz-3�f�j�P����x/Ӫ0}��ʝ_��d7;jt��d4���}���R�=_I'(詌0�SI���KU4E}7�J�R:u��Oɺu:b&,����'�j��6�/{��o&Q��TX�Su�U�ʃ+�N}��.�
��S��V;�.,�+���1r;���� બ�NI6��.s
��\~�i9�9͉lR���*�)� �Vrc� �ڥ�E7��x%+௿$ֆ�\)�Y�JH�Bn.��W`*w$�C�
��exa���W�^KI�`s
�T�Į0)�ZIS�k8g)]����<��Y]���j�I_�Q1��w(���<lA�U���[��� ���/�D~�E�d���G%����W�&��N����H�va>n?P'LyH�6�L�4�M4g`���D�r��fa)�B�j`�X�iL�X[2)�v��$���qK��v�,e�r" x�"-��U�7���O%�M;bv�%y�:��r� R9n���j�w����^g�4�FF���3y�E���� ��CȻWeUZc� Լ���홦/"m�,˸T�Ki��P�6�?�/L�"��S�2���KKćL�R��^�{�t�� �1ě�>K���t��g9���Vl5*�sjf�j�V�R�6K��:[�C@e/�%2�:5�!Q{�ͺ\,A[��)��Z�킈ᄕ�:m.�
��&Ri
]��r�9pf:��	9�N;�0�;���e��(�rJY�s��Y���Ep�"������X6���zZpx�	}�����D��B�l�HN�S��F���t�F�L'(�pa�`�=�^��]�W��]���^��k�*�����h���K��~�K���)Wg�OkM�I=.?=����+���K�~iu]i$�#uSؚ�<Z{>�t����T٪_�ۥ��
i����)p�:T$�o�p��f�ɣ�N!R�iQ> �һ�� ���D��:*ni)��D85Mr�T�b@GNB��Pi)W�������������W4��\558+�J���Ą�0���r�Dhd�`F�,�%IrXY@aI��.�)#S��Z?���&đ�����gX�bt%p<���V�)K�'mZ�Q�S�غ9�$�ԏ=j��u�NLU�n+˩E-��{uSqL�{k��A�)�����1�56﵏-Z-7��
�xj�Sl�M�R�����I�c.��'���:j��5t�d_I�>�O�Y%���GON�����Ч���ԟWm������E�#J������78.�uSSVg���.���q�g:�tiU�>��Q�-u�Jy��j$�Һ�fL�;�f.�7����vO�`ے�X��@b�f6���+�qՂ�̞=�����vo�9z��-5]��֭�S���[�]ΧV�G���nLb�WL�8��+�`2�����:��,I�M��bJ��P�[ \Y��[�\ �e$܍ϸ�ğp݄��OBdM�	2�N�9 ����d!ف�8��V@��������7Q �Xs T�,؊��� ^��L�%R��6\�����"�Sn�r�C�p�#��%@4T��0�w�2 ������|�f�T�!�x'�� ��Ğ�܋^$�@��L�e����� �b7{b�{[ReG&JLX
�$O�� G�17(b,��<�0G�\ލj�ҖK��V�����ڭ%5]�Ց��h-��M_2{�~NTyGZc��TUn敦1�y��Ly$�ōɖ�*��?5���L��M1(�>��魵�5�5��6	�v�5sl����� '��T�r�(�B
Y�c����ܪ�Q�Մ���"l�P �P���/!�`<^I !��Z.d���� ;�9�:��Q�Ҫ2zT�3��g��Ã��Y�ru_�c��6<ڭNMש��ݶk��|���x$yDT�/ D���+�� K��< � ' ��R
� n8 �3T���'$�u#={������:�[H��[�c�Q��R���#�Q���K]T�.��y���vm��a��p�e�j�H,��8�Vӌ�ݵ�נ��o�����s7Xd�W_��[k�Qm-n��k�k�p�~�ʧY�_���S���TT�הr��7:J�t�5<����#���ՙ��h��d�&�O������q��N�t7va��Z�a����]T�8��c�e��o�O0s�Q�d�������5WS��O&n\5g�6�Ȋ���g$o�W0G-�djʛ�7긫.A�F���;�$�(�x4��)�uhEI4S��ݢ�jH�&6��*b{j��L��V�Б�ũz����]I]�
�z�Y8G:�ԩݳs�_�=�sBnZ9W�Q����-�i���g�Wz�Z�Y۱�Uu]��Z����ٹ�b�]b]���Y<� Q�F�y.&�=T�����\�Mk�6�ܑop��33r�k�i�3$l��~���4���ii֥(��#�I��m�'Ӵ�e^�� S�?��>��Z~��Thj:����O�h�~��{�R����:��N�Ow�Gն�/UiS�J��nZ�?m��]/L��)���iS� s>��z���I�,�����:��Ut�Ә�D�7����[Z���]U��Ǆ|��>�B�}J)JuR�w����Z~�SY�]1�mw�j��5���j������E��k�^�:t�����u-�9���f�ֹ�d�_�Rl�&����~��N�_�kj�J?S��W>��n=GeN��a��4�Q�*lJ?k�>�����{-�ү�f�������}j���Zԧ.�3�~����7��MJ��Ѣ���3���7�n���tL�nDW��>��:u�U�i��j��M(J�Q����4��;�j�T(q�Lz��m4�V��_R�u���{v��_��u7z��ig�=I��G]�u�>ޟ����m��uSJ�j�������]q
��H�)Y��.��6�^������M5�L�~m�Ȫ��k��E׭j�+�������im� ���V������=�oI��_Ci�Rx��_�ĳ9b��\������5W�E_���<����T��;w��� �K�� �2 A�d\�dm`��G�?N��ҫ�7
Zn�$��~U���Mv�����$߹(�^�����Z5/�+�� B� ��:����ujjUS��n���R�ܷVL$����y;�EE	O$L�`!S*i�� �P�N��V r9�4�rA��GQF�F]F�K���%M��� $;�`��a2H#=}�z˩8H$����ӱū�i���)Kn?G��,�6κ��t��[X~Y��-iĶ� Y�GZ���ڴ]/[SV)Ӆr��p����ҟ�]t�돹e��A��l��#���#�z����E]]}4�#����Z~��u��-�pg��k姈6e/���Ў�C���T�<48=z�Rr���,�jV�%�P]77��]����<����++�#K��:[�K)��j��S���=�k��)��:��|�K"���jn����>�#��\AEe��{ӵ��]P{�%���Y"Gb�E,.	|0���V
�W=���+ �M����x� ��ȂB`W�٧Q�6�b���᷃ϼ�����#˼}����"��;�;B�y#��_p.V��6���b'	�:�86�Tt��Od1^�kE�d�O:�U}�0v�eR��V���O?V�NI0�rۆKE��9�'�rR��b�`8F�}3�1�j�L�"+)�W�`�)�MSL<W
R:(Vi�]��2��Ņ��}�G)`³B��Y8,$+����Ho9�T�x�e&��ң�"*�E
��&T�*R�$��Ų	:��ק6<������+QT���	�����E�DI�E(!����]E��k�"ZDs��F��̠2�,Օ̹n>� ��L|F`cI:�������,s$I��/R��E�%�Wvi�X�5���g$m*MR����_<a䮞��XP>@�)����b���&C̰$!����Y�	+�Y&
�Dr-�eh��20x0�DS���4��e|��D}��"�ʉ���$I�E��)�������{�3)�sr��j�X����2�]T��D�>	���:S��y-.x+��^bl-�4�">�\a��k����#�8�M��U[��	>Y.ZkS"������5�Ղ�,��%7WW����٦�Vg�`K�0:٥��iS*��Ⓚ��Rn �U����N ����o�D���*�B�N@ӧ�$BV'Zw5�>P�U�2t^�u(��꧗ J���7ʓJ�]٤�J�5Qt:bR;:�t�U��bZ��]����o�:RJ��]�K6����}*��
{���̥	�� }�?L�үC����=�{]*]�S=*�j����%��b�̬�,��+I'��Q��ɤ�M�i�6��DѕM��eQ\��i.�a�� 3��^ME��-b��i����5Of���6�	^��iv��n��Ȳ�}E����W�Q� �.&�O�\�R��2���%@	��P��X�̆��"Ơ��\�$E���� %p�`9+���3`'vek$Vw �<��M�#Q&jqK`|��J��r��M5���5�UT��|�=z��b������.��URR��j�(��TU]k���预�gᙪ�K�z*t,����N��0꩹����	]
�h<���w��_k�Q0��y��'x��J�<.ū��Q*��S	��5B0���5[���"�owTm�ۙ�,�������uu8=~������?'ͥKv�Әů����u��^S?K��Q��U+�����մ�׷�4�o:J��19*�>n��t�	U*{E:k��is���3�H�
,�gr2ˉP/{˜��ܒR��?+���R��ZO�ni����}A��W�yf���n��F�4����	."GU��c�(�ͤ<�� �Cba@t��	1���$�s����@2�^;a�+�"9�%�
��ü20+ y�$"�o~��	3%��/D��̍��XS G�X�< �c��. �,�#�+v�%�r`�&�*�b%p,�'8h
��&e��Y�Mς�c/%�8r�fdM�n��y$�Üd^lK+0��YD�%����Q=� K��`���	�$p%' � �6�G�� % 0�J��	/#�H������Ɩ�Ua3��Һ�/�h�ҧ	���z�x=�[%L7���Ҧ�/s6��[m�:k���i��qc�
&5�JQ֔JW�I��is$�K�����D�A�i5et���|�����'�t�yw:sC���_�գ���0z�Zq����6�7q7hd��52��%K�¤+�E� ,,8���X/8�@�W�B17+�`y���r� �%w&@H`� &�p�,8Ȑ AD� ��֊�Gؕ�z�z�"�s�m��j����d�m�pV-�j��B%������P!q����`<�i��d  ��@��rI��=����	�R (�'%����(��N-.W���I^禍eZ>Z��:�[Q�;ä����pp��'j��N�G;1�]�K�?Uj0f��݌;<������֪�le��᱆�����ͪ�\�t��7ͮbƥt^�O(�sT�� �"e�N�ƪ~H�����j=��"�]�B!y�J�D*Q�&��n����Y���X#�`���;dD���9�M����V�U����[�F�6��G�$�5�M+(��n5+�s��Y���/���ӡݦs�}J_m6<MS�����s㑛�Wz�Z��8G7]mݳ��sz����b�k�\6GU4��U�y3�Xλ�Ec/U�I����u�3��
���(��
�0%H�* �8>���6��k�3N�?�����\ҿmi��]EU�S}�Kqc~��[Ӷ�.�
5j�Z�^��Kҷ[z������M5��|�O���΅mm4�c���O����Eh��֪���k���2�?1������Ht&�?��um�/MR�F�I|�w�꾱����P�)����J�=$�*J�[G�}c��_j����zK5Å��������wh�.���SJ����m��k����Zqj�g�7~����M��ѡQ�]�X����^�\X�_�V�^�� Z���QǧU8<?�4�;]V�uj6dq��� ���� Rg��� F�'�}yN���:�T�Z��R~�SG����U*]J�0>/�*��}�2|��:˧��G�6�J}/j�M6ܷݟ��[�Z��B�b�ԃ���
���:2�v������ۊ֮�����t��t|�ES���~)�j�Ү�S�զ���Q�վ���tڕ���垍����K���i�p0rz�.4*��r�:�թ_]m�ݟg�;����=
_�����{O�[-��n+�}��lW��_,���7�k�l��O��F��z?��է��C���S������m�T���h����o�kC׫OB�/��ck�3�����u�)>�� �ǽ�e2��-���{�������	�E��G�t�ދ�h�С����g�u��Ӷ�(��}�?�׫�[�멷�f>K��[�ƛ�S���4�z�S>��ĕz���� S�ӫV�[��i�Z�5��|�}o�ͯ�V��i�t������(�nj�ۨ�n��W�~��S����Ԓ?M�F��9#�(�S׭E/���ޤ�wڍ#��Ҟ���J�����Q���f�:w����/�ʻ�D'�X��<��T��u�M�&��@��f=�<�\*��]���I`@ d�Uv O�kN�� �m6k�w	1�4�n�s�?N�ӣ)��[IQTE�������jjW�J>�����Uu;���:z_Q�7��V�o���VG���ZU%�ޝ�:T�RVW�>�\j�����7���=J��aI��Q��]�G�Gz�����~�:���UM�*� �%Y3ɥ{ ��U��h�F�LW���B��O]/�G'̦x����I��o��}}�W�q{�{z�WN	��ۗ�Ԓ���R��N��$�z�Lyc��^��������J��i�t���=N�5���ï��ɫm[SU��&;���T�,��y:G��U� �HpW7]�+��SWO���p½vM�MM��Β�"�7�nnHȞ,�;a��	<�(G�	)���p� S>a�GĀ�T|[������Fqi���.�.ɔ}�
cEU<ۊ�w��P�r����uV�nl�)��N�Y��KO����d��b�?�&s�2��ux����99:��tu�R�<�j��uUNPV�)�%I���%ɾ��Z��A]z��Q�)���w%V�I��5���|����pe�*`*~얔�IXͪ%tm�&Qo$U�J���l����ڿ��fY�l�Y�ې/M��Gr������HK�%���� � �v�P�߸r:P��D��QhC�;\%�l���d3%0�W-O��<U��ѩ(���K��X�;�+O$PדH�y��<�*T��]�SY#]�A�X������5`C��e����m��&-�5������v���8-�o&���ʞQ8�Xv�	uy��k��@���K�'�
��/L�����%��r����"%@w��@%��D���$v����+$P���bĎ{�Vn�w39��B�B�!.{���D��|<2ҡ������U�];r�o�	͉*���\2�S��
���9���!��H�q�"-����}�R�����Zl6��m,�o<���L���i�n,W��� )��,�)�����K�x�̴� P/���I��g9�+��h+�NsT�� ,��t7M�KKs,^��",nWk�+���<�/�m.	�����4��+kf�T�ʳ*_�y��d+U5f�:c���,��#R������6/_VQ=ՄE��ү�Ws1o�3xQ��U5\�%�mX���ʅ�1��W��O� ���Я.dt]�\ck޽{W�� �����H�GܞO�НQ�&��]��_Qz�m͕17���KN�'ƪ�Y�������k��~�EMM�e��U�TϹ��[��R���y5�J7:Ub�Δ�K�vG��WIJ��Gꛤ���'0O&�l�������}���-����E����k�Q�P~i~$M�U/��O�:&#�]}��^��~!�QԚf5?h��>�,�l���>���]M$}/U���U�Ї7ei�c��v����?&��E�' v������JM�йQ���%O���"jn��mA<�Y� ����%�vrV��R�i.���W�٫+1�:TIT,\C2rj,D��o�e����*��x,1Z�\���TSUQ�O��i�'��-%�\��J��4��[���$��4����*�zu��R���֪v�%X�N��s	��RP�գғVhƴ�W��������O��ꛨ��!�ۙ���g_��uE\�\��4�����jWJ���]m˸�_e�)N�}-j\4��~�f�oOp�ECɯ�Q~nu�.��<-�Z��}U.�B�>������ϓM-U2~��6�Y�*Y����X�,�X��-��LU���}J��
Q�AT�Y��yy4�5tk��mA���ƦY�*�t?U-CR��i���n(�_i�m3'�6��mK��������K1u�[��L`她�����pgT��~�NQ�J�H�����;d���i��?{�ժ�KM���wKԪ��k�k��yA�S�NͲ��Sr��@���T�Es�D���b6h�����ĥܮ�ߠ�� jY#���pRo� A�M��da2%p.܀.w$8�,ȎP��/$0|�d{��X303v��Ob^!���I�'%���>�R��H^2�eN��W�
��2�EmY�Ymq �Ia x| 8,�$��L��8Hqi~W Ջ� XO�J ��Ka3��\�T�`pmi���֍�o�<�x*��h�N���L|�t�oJv�T����h%��N��^F�>Z�Y;��=�^}�b����bj��Nצ�u�M%jnwZr�mQ*�FLb���c��U�T����0m+b{���b��i_(eH
��o�%lV
��9O��wPr֡�m6=�˥�~oԴZ�b�R�~�w����>&�a^��nVlx<���zuQ�a�]D�,�D�J��檃t�
� �I;�.g�� "��� 11�〽�aذLH��@@��5l�`��J#�'�" \� +d�P#� �x"�H� F���+�K�(� �@@ ^ F. �!x 8�	�{HY�I�*�; �#����� �U��e�;SZyG}=Z�}�<I��'EV���S�}M=jkVg[5c�S]��}�V���V{��.��z~I]�ZkU"V�s8�Ճ�$M����V7e2sҶN��9����`'"�v��eU`ҿUPUU���#�]RF��1��#��W�ҥ6�����T��Z���mp��n���^�R�kI��S�l���7䏡^�N�S��q�v������I���;�WO�*�1UU��R�+���4��c^c>��v�����sc7l�3��z��UŎd�*k]n2f[� 8�	���%�7���"�7�J��� 3�ڒy7�_[�p�`V�y!@�f����� m���}B������ٟ����ļ�������J�T��SMQo��X����o�Bz[�*�x������oV��J�Z*]��5~��ҧO�O����:U��;OO_R�ꦛ��¿�>���է�Uj:��B�&�O׶[Z�S]hՈ}Q��>��ki�z{��T��R�r~�a����t���t�4�É_���v�z~��u窺�R�ě�v��g�h�;g�w�M�������Y�J�Ct���ǒH��;z�=KaMJ����L�I�R�O�:tꄥݟ������U;=�Zt�wNW�k{�~����[qWK�J$�G_�
7[ꖛ�ZO_��-�zf���P�4ڞ���OΧ�M���kWӣ�^�O
�&�~���7Zn�-�ӕ�T�����R�^�n���m?z����F�ΥQ�oi��R{����@����Gi��8��������m�^����}:�\�}��:����l���(��	��[O�~��IեN�/��� D}���}��{��<R�Q�y��CM5�Eu��G��~+��J��B�r����+��)}=)_�W�� VMϯznҖ���k�Y��q���� Z��O3m��Ƀ����zI5�ө�����~(�{S������qܸ/�k���q�s��]^�/W%V�*R*V	�V�@VL�Y�
)��� k�g�r}�����r���*`}��-/N�� �~)`���� "� �)�bAoU�'7(��˫���s�O��z���� �l�G���Wگ� [O�~��q�ܾ�A���Qw,�)�+�H20=�#�
G< l�� �B�=�P��K"�۲�����������}4�JIn,���u"Zi�&�����I,����_�=������֧������m)A7U:4Qocu�;e9��W1�β�w>����R���SV��|���i=j�i����gA����kU׮��n��:N����5k.D+�V��Zt�pg�m4�:��_�ӗv�k7V�^�`�������uՖr�tԪjv��s�s�)W�QE� W#�%D ����ɵ�,m^��1NҊy���i͋B}Y7M.���'�Kf�)���e��<��/�ѣ�u�{�i��$u�I��FoNZ[Zh��:Z��W
&�;)��o�%-�?�p����ƫ�VId������b�ɨ��O\�����@� focNy2�\
�}Δ�4�q�/2{h�M�pwUR�O��f��t�]}ly��	���O�+m>��cztu;�s�y5\L.D��D����$��c�\�������n��NnstK��W�UI%�:;�BwpQκZ�f�F�N�9G�z4���m�G:0�_ j[�,܋��]�U�x�ʩs �JM�R�kT��v�Δ�'s���U40��Z��_�ȫ}����1u���=zܟ6��G��_kpg��z&U�h���kN�L������j�,�Qm#Q�H��{����O佥�R�H�rY�R� ��ܸ�<,+���K��/q�<x*�" ��w
�&!/<��ȋ!e��c��� �<40�p,B��~K\�3�T���]�w=iX㸦R,>�/�Kɪ�,re)��d����e��:Z}I��hm�X��
҆��f[F����0��ɥ��c1
@K����y��G0�c�����ܭ2SLd���,G9���J�J$�*�H���U��ųX�FZG�|X�R�M���3RbxjH���¾X���,�M'Nng�\a�蔴���!UnI��%Xr@�o��P�Y���Eͤ+sb�gVͰ!LpL`��JEk�7���Ş��/��8� �(]�C�ߡ��0-O텒_!̶~���8�ܲT�s`� Y����K��n�#M���f�W���\��sv�V a��3�I|d
ڑ?%x̙J^ ��������E����	i� ��kY".Y�_~㜯,�K�B��R�ᚪ�S� � _�	� I�b��݋	Ĳ^[�v,Z�f#��.;@�E��I2�F;�Y��T��w��T�;Y��Qv	8~CNb�!�0	c�P���.N �$�SLt%n�U��:�קú9�z^����eĴV�����J�}�OI���&���Ҫs���]3u��}N�X�O��vQ��W�jSL��������&ݏ���qjZg������ B�5����y��w=:�U8pyޕM�\�+��K��C^�n-FRh��H�ݬD�PA���H���+�5 ��Z�Yrsz�y/Kjx�ӹ�Q�8F��Y�+R��qI?p��C^����{m�&שnh_n��OR���_B�W�*�����E������$�T�Wl�W_a~!���{�� ��r��Q�\rs��P�~��ĵ%�sӧ��JU�~I�ԔT�L&O��i�G���g�;S��J�+IO'�Si]�>�cɯ�/Xٵ+^��iz����%�~V�jlZu��cɯ߯P�5mZc�����o�ԥ�?�-z�pU��Nյ�L5�n�\���C�i� �%�~n���S�N�}���<��v�p��%����U���[_&��p��k_$�_���1�)ģ��{����%��M����y5��C��5WK���k�]Z_�v���gV���C}�P�*�m�+R�Էz�KV�����s�Ltt������7�3�ӭ���V�� 驥<ŕ�M+�G�����i�L'�>}[�MG2�<ڽz�uK'���ժ�����*Y���x�oE5^e���n�1T�8=�oL�<��}@F%����WR�(��u����:�2~wI�Ԝ�COV�͹9���:�,��y���?c�V���O��k�4�Y�9�ә�^�]�1-��^��s���ɗ��Y˗];W���?r+{3�L�n�<_J+����_�[���i�j����ǃ�G���5_����2���l����i�],;,�u�j�f;��m�WRjq5��zƾ���>�Uu���r��т{2ɉ�<��k�i���.�`�V`��E���./�ۀ"l���!l�5�嘖�T�V�s��ٙ��m+�Y�3�N��8{yf�n`Jj�^�Y|��>D� �($NdLm%�F&�n@�#�J@����X�``�_�(O  ��x����T�d��{��0�.�9/ �{P���+�L�/o���F@r /#�^��  ����[��B>ȰU1�"�b�4�}��'� qe�s�Nճ�;h�*CL|���:Q���J��)]i�IKV�ϥ�Σg.;ӳT�{�9���V�i�-:	#�Qx;�J�j	���Ӣ��v5�sT[�&,m�OJr4�>��,^�:*c��O*�A�qsJ{���Ȋ�KwF�jpK�
�s]&���G�-
�q�k�SL��I:MD�0���24���=I��WN����|����kl��p�G��M�n?C�4�5P�b�c�U�]�p{y>�T.T�}M9�ƴ��[(���FQ�+��(�U?iu1�zQ<��3�U�㩦���t��f
2
גpZ�#��HR�b.X NA\p �Q�9��%'  
�08) p> �(��@X��  ^"@n${�_r `|=�#;��c9�B������@F@)"e"���0 �Gb58 =�� ��� �0 �X�� iUh:S\(8c�$����t]?�z��?��N2t������ޱ=�_�"�}�tz�i��~��58������(����[ާjb~moԏZV�GZJ����7�y��UW%�K�G���w����%���V�2�?�ݝ'��#�W�UUV3����6y�RiV����z���'RG.��p�_m�w���E.�*�9:�f���^��̶�߸Y	�SWK�n��w*�}�D�)[��(��Kě�������YcV�U]4a��6�➪�e��*�/&d�����dH#pR:�G ��*y,!*,<H ) S-�d`	�c������ѳ�Jtut�S]N)��?'�,X�ɩ���G]Z�WLe4~o�m(��=*�Uv����_khQEz�E�UO���򮛍�{�z�5���b���s��]/����~�]�:6�QO��}'���֩'�ݪ{�)� sI��jj��� �]u�rM:+ԫ�J����R���6���'mjSV�_���_��z����E4�i%�$KG��_��Wv�[g�O}W����������� �M��w��Z)�)�~�7��Z��(���,}���~�}�:�i��Σ�թ����:��K��w���������ŏZ��6멶<�����-$֊�U�V>&���VV�4i��Y���Ap{w���?�w:��px�R��Soȟ ��{�� L���� ��w A2�#�x>��>����W���~��U?�e�Wm'��=�*_�R��~N�c�� �_����[?2�HU��&�nx(�z=^��_����J�v;��_�)��ݷ�����~(izv��Ԍ���l���f����\��G$�/�   ��A�
���6��h�h_v@����4��5:�w*�ƵN�B_uG��4�iuL��W���o�J�������So��{Χ�3���J)�т� ��N���������*��J)X7F�Z���9��V$���O��V\��MWDii�ccJZu6t�oS�Z��э�ۤ�����'�UUp����u5+�<��kQE1h匸�뮮�z��}���%���!OQ�J��Rϙ����UNe�Uן^�EqK���r�ua�L���	�r"�ɬ���m;@X�(�B�NT.Of�MjT�i��u���=;MJ�O���UYJ�\,��ekuU�l')�J��t��&5+�Y�Z���������O�z�O�j�z�M�`����Z�r���kmu�o6>_����p���uu�Y%�H�M0������J�c%��D�@0�J�.� C5Mm<�(�5ڳ;ѯ+'���/�1u�t��\��T?Zkh�k�Zܓ�9ը�f]m��zQ�T���}D��,�ȈTG���V$\z������c
��iv�_��]����85O���D�i�IV�ʺ�����W��U:�̪|��B,��iE��`�.�E�t�Ԡ��m?�w���J5>��� K�s�p�%��܍K�is1'7AG��t�rG6Y-=� E�R�'/�,6�vY*p���ٸ#P��ʁM�䩶�,� H�iň�XIB��A,2��-M��r�� ������-�R6�$I9���7f0�d��M;��7k�vm�κS~��>�v��ǝ)Rz�'���M2g<����'K��Ol�;F�yfn��S �qO$�1��.a�8�ʔ��˴�za���rg�x5ң���ld)����Ƣ}��� �f����	��:�Et��EJ*��G�!��+|	�}�%�-�4�ܭ���NKO���q�	���$vqa�e���k�U���r���f�P�Y�;SAzS�" �F��ܭ*�!rJ��"7
�W�]\�3s��bc�U�s=�UR����"P�m�@��,A;5�U
���R��R��K����u4��(�T��aD0�H
�Hp�M�������~QyWCVB`;&�J������S�e��ˀ�c+�+���"�f�ݕ�t��'9��EM$����QS�]]��dj��0�%o"!���h�>@���Sӂ�	� �3�4ա	�*��D�*�����	d�rʒ���+�5ܩ'���M��nv�e��U�"�WB��jL�������$�J���/U��V$\���Y	B�R�Ѧ��T{m'o�����u�(�����~�_�W�q���*����y���V#�M�#L~S�4�I+�moAJ�'�zP���wVc��zi�|z�sO� �+�?s��M��#ѥ�Iu1�� S�7��mIέ��..����Vi������5�1����xT��W�ZI4�����UwJ�c�~��S}4�S��55Ԉ�����ߣi�9�C�s��4�:Li���x��e^��j����4����c�O_�����/�/�SSKI���*j�*�����ӎ�e���=Y�*��CL|1r]�r�E�n��οG׷��]1�!�J��ϥW�n��Wv����.�U)�h�*�*�g�� ��]ޛ����j\='b���	����I�fc�T��:�~��u�аi8g��O�Y����k\J��9*��f�Q-�zme?bU�S�!�:-U�L+Aʚ*�J9��������h��)�E-J*�mY��ZGER�T��*�p�j5�X�5B�%T����GZ�s�W�A�:jk}=d�N���d�<O�O>����v�>�����
�W��7�t�h�58ʷ�V�[��u1�ӡL�К�]���JS���꜆�ӛ���<��ĳ轼��O&�F�r�����$�k��q�2��)0e7��ȥ���i��!&�,�W�v'�0A�f��a��������-�o"����vFX�H�d��]�O�n"�������-���%$i�ma�hKOsrO�dE�f@)ed~��̼(�e�ȝ�E�̣0P�2���q��l��܁�݈1�2��KfȺL�{�`����bB��"K$��xJC*�� D{!���E� H�Y J�n����X}�Mw]=�|Xi�C�Rt�F���}:
�`�N��D�v�� ��N�uY�t�x:tI5�y(Цe�;Ѣ�����GENe"h�(x�:}5�:*~��O��9�:��/M�)GH�+#] ���-45����2�����Kj��M�b�/�C���t����Jƕ1sJ�ɮ�DHVR�^��J�ٴ�j�j",o��Z�t!Oc�_��z.:J��\"��ts#>�0k�n��Z0UM�iS<���'�6������K�ɶ�����T��W�N�� ���LUOk��.	�#�����͏]T��+�V!�|���k*���}霣ϩF`���c�K���Q��]� �#�^��y�ӌ��U>���X�ʏP��ښq�rj	
e����d$�I�@@�" @���Gp (��`
9+��`~�� �/� �y%�� �8 L�`\�@䌤� \ � ����Dn �Â ("M�n/�6P ,����   ��` p�D��&dHi��Lըݓ0�nF�꜑���#�#�$�/!���B�k�mT��c�0۩��M��;�ҤA���
��ݲ7p��\� �h��Z�&��B��jSMGM�e�9iB�{K�7LR��WS��������5Udf�We��y� �XD��PGw _�b;`��,�'�m��n���m��<�m��gk�7Ե��ק�O2�~vB�������:P�:���vVG���z7��������U���`���oQ�_o��t� ���~���������(�]�RϿ��O�d�S��(R|}��V�m�Z���6��6߄}+oW�Z���c�ҽ/Ө�(��K�G�7?��Gs3�U+�6>f����]U�S}ۑ��&��_��7M*��|]��=Z�[}4��~J���^��}M��P�6��T��l|���u�]U?,�$䠼� ���}�)#e�$
��eY(E���D`	�ٓ $�س��̙uXlI�o�S� 7�������x?S�%ֿ�i_�� Ԟ�������⺯�����D�h����}��4ϯix����� ����~kH���)���W�t�g��YW���f��R�Ve3\Dy$��"�#`���Y+"+~ ֖�Z�(=t�Ҧk��o�F�7W3���Q��"���N�;�m�gm�=Zԯ%gF���U;�.۫Q�S��^�եQK��&��i��W���xw�P�P��T�v������]�٪w�Mf_b�COJ��jUQ��j�R��}���XJԞz��75#6����5�aǩ��ti�>]U���ˆ��*j��>�B��"���۹g]����i�;�l^�=U����]D��=]*jֿ�sUiD�`|���unjf�$d����R6�Ԡ�'J	Z��Қ]U*R��IQGJ���h~i==i)�s�c��2Gl�կ��]��Z�թj��Rs�z����Zu��.���Z�jK���4̖�61�=��=.��.���|oP�wNO�����4��'�޹�U9����qq�NJ�� �����c�z��D �*h��I�@+�S0D� 7NNԥ��J�tD�+1	� ���D}�w*~�q�H�8�#���WpEI�D��Y	�H*�	�F^SA��a��^L�������Kx��t[��e�Usд!^�BJ�4i���:|���`��}7^�4R�ݙ�-?F�Q����|�D�U�i�G�4�� K���R�'����o�����'�kѢ�$����F�uuQ4�c�7�ά+�|��[�Kա�]K��J�*��#Z�-%u] �'��w�+�X��r̕����+��ٕðDy�-Ȕ���')��"�*� %�,��2�L&��p섬NF\; m�OP}�*i�"�*�2�WEJ=�f�b�
֛����8G�����+Y['��gh4���7�L^2�(R9�T�;�T���͢	S�%NU���Wfq䯆��%�ʹ\̼��\;�.���ڳ��|���&RT�����]�dj����2�.ʊݭɕr�Y"_����[(h	g�.E����v�JQ�Dv����t�I�=�K��zoviw-]��Td�ϲ����]����w�aD�74���.[�!�T���/�%L@s _�\}���`�#R�������r|Z=�t� hi��	%Ov�L�E�S�rs� %^J���T X��_������wn�T�̊��{,�g
դ��+��g iD^d5*i%)�^�F�`��{�����*I�k�)w*v�����W-�
q�e6i)���6�p�E߸�6d�& �&�RN;���!>*m�)n�B�.08�\��/�!�\�r���
�K��mܩ��-�--)�C��"��I�(Y2�u���]�*9�	�H����IH�%d̲� �ct�k����i���������¥Rk��Ɋ�L¡��;�nLR�C-)�SpB�>��d�X�.�%��cR��ҋr�>�ޚ�����J-�8N����7;�`���UGK����L��V$��� i^�*�O���A:|(,R��Ɩ $z{$W�CJR4�"�E����S�J�hm8S�if�j.�G
��o�Q���-�M�M}�����|A�>�R�S)D��jm��R���Q�'y���5JO�O��_Z���l�*����^�]mС'%GR�G�ҩ�u���IAj<�4҂�ԛX:�eK~��jY29��v�D+�o�:�hիZT�J)n����m=�u��J˓���ʊRpj�RO�+��\|�v��#��J����s��4� �NxD��^��-4��W7S�Sc-7�u�O����R���xG�i����IN$��j�K���!�C=��&�����D��JT�Ѫ��T�>OU4]��iP҆�+�j�Z�}�&|�oN���mw?OК�f�-<�T�����B��h��W��6��j�����i��(ԩc�UԊ���״���<��:_�me�D����i�Di�DS��+���D�%�2�����ń�ȅ g�/5�O���ryF�bL�rJ��wo��@�=�^�Xr�� ̠�tW���	��Z�U�"�O��d䰛'%�[!�@=�2��܁FI6	��f��L�)0��*#�	�� �.K�ȋH���,�2 ]����'"���0ȳr���L;`��Rv�l^�T�+����l�Nݷ��抑V��2{�ۮSgZv�{=hT������F�N-(����Fڞ��s�ҳ�_�QLB4���$��4|B7��H��/J�h+M'����ץ7(t��Ϡ�G���r��DT��o0���M*o�#-َ����=�\��OT��ӧ�*�}0Ѯ�ӵ�ҥ�4�aXtC*��N�7/L�`aSk0�mY\��86�p.�ɥJ�:X*o�'L�:aL!�\�DA��C*PZ�UL�����L2�d�RH�$v'&�� ��tkȋ��j]�#�K�����U�]:j��0|/[�ΗT`�+ű�MJ��:�ݏ�i��J���O���l���v�N��ĕ�PIrI�|���kW�LWCͰv�a�`<�Rq��w�쪛D����ԣ�ª�Yﮛk�5|�x*�������U�j��*<��k}]7�{꧹ʪ{Q��/�F�V���G���F1�b�(RB����#Bl&�l�Xp ( O�� D�� ] � �����'�b��2�Gl�d�`eȰ^n��  { �� `9*�]�?ض�	�>@� a���
b�>@f@� Xx-�2 �D�cf���@ 
���@�%�A$�M�!u7�ܕV�~�hF�U) � 8!{ �F�@)�@ D�p6����j���}��z���Ҵ�:�j�LX8~�m?�*��uF�����{o�>���:���K�[� �MW��m�J������E-�[i�Wշ1UZ4��������}Sҽ:��j��K�h_쏓��g�L���U�v&����BOy�����,��������m���Կ�~Ku���*���/�*� ��5�z��:���� ��-W�=��/L�Sҵhq�t�����Ы޷o��~y\_u��Է	����|P��z��ڵ:�5+����2KD�SQR)
*B�*r��r�~���`$Xr_t 2pXB{�E���.属�6#��������%�۫�W2P	�r�	AXJ �/ V�~��R� z��?�~O��� �i� ���]�K�%7�g�F���g�R}�ŕ'��K���� �`׹��?C�)���]�_�G�ڿ�K�g?�T� �nk�i��?��I�A��j�E�*!\�2 ��d
� >
�)+�ri���ił��u�}5�̩��>��
��%'�Su^�������a>���G��0�/�:h��ժ)*9���>���QN�V���[n��������,�١��.��H��4��H��J�j�#�-Y?Wf��&����=��RI3;JR�4v�oJ���纪t��-�V����L��It'��>}:�M���몽G-���/�&�-�2�n� ��@v@H��xH> ��E��\�.+|~���pZ�nx0�������V�i�Ԧ��>������P�c����\����#U:p�M�&%�G]�t���K�.|ש�w.�ujT�yf))5�W�T�H���j�J:+��_��]������Z�N溼���}=��=�����jT�Fi"ᦰ\䬳࠴��]2�c�����D����y]-0�rv}�Tԕ�ł`�DH�*w�*���ڔ�<�ثR����])Dԗc��*�GSd�]!�G.�d�0��W�p�Ck��Y����~.Hl��Vv-4����E�EB^ň�����ZI����$%J���MZ�-����L�)���E�:��}����y?aG�H�����t��Ӻ?J��Ϧ�Y "�*:$᫳��_u7=�+��_q�9�����h��g���N��L�,Y_����n���}O��m�J��7q�Uiˣ�]�������u�B�5zZ9��ǸR�<���ǸX"�� �RS��Y�E�D���+4�Jb.�vm���J�7AC�Æ�O3� �E����VK� fd�JH��
�nn�6xZ���G^���Gϭ4���W�a�$�Ղ��O|
T؁RQ��\4�Q�*��z|�����L�ݦ��'�m�؍�7*�EV��
9��§{`�a.ւ���x0�g>�=��O���JW!S�ӆ��!L $���/ׂ߫�#����b�ʙ�FH�% f!�¶�JOe�w^���X����8��ʖ�^I0��4�a����r����ݚm���M����o,�F�� ص%
X�f��so$|��� �,�\5��s^-����ݓ��g s�*���<$m���X�"�zR�&s� ��H廕t�ԋ5u�	7��uȼ�	B���%[�[��We*�I�'!g74�ǐ#}8Y3wx��+K(	
o�g� �l�N ��$��SX�����0E��Ci�i;�d	wvO��UY.@�����'�gM��4��̻O ��?�.~�$pv�z��C^2HIF �N3.a�Zd�fӰN=�U��^���_2K2'x%�gmqT6i8W��A���1	�:�U�g���ISM(8ɉc�xs�*�L7�Z�,��M-ةX�V�Iz�L���V�~ ��T��O
�i�j�Q��g {m�VW[X���/!AfDH	���4���y5���`��u(�F�Xn%�i<���v��|���JܘSQ�t�$�N�ؽW:���3
D$k�PU7�����Ԕ}]��8�Q鄮s�Z�?3G���US�|j�U���\��oP���S<۽ml���FaS��ډv�%�3z�~��^,cWsM�R~�����2�=ʄ�y<���>�[�U�T�d�Г�h���j}Ѫ(�/���V�mE>]Z��)Lh�j�i�����[�Q���N���%S˃�m�CB�����|���j뾺�T�{Cm��Oڠ�%M�Ҡ�M�'�\�k�<X�\$�;U��~�y�N�/��N��X�g st�4�ӧ��i��1*�^u�𒱵���i�:SB��:ҕE��wT��*;�r�J�E����M�5�G��N��;t�bt�rtK%tK���iKdj�(�U�
� �ºm'��'7���S x*��JV.��K|^�(���Q�l51��v�1��w��'G����e�N�7*c�5mum#�Z5�����iGM�S�%�OI��4ӹ����6*&>=[�����>m�M��U�k2�8�Z�;�1ɢA���Z"����n���&��Nrst4��y����L~�[���S2V���#��dr�e���V�bp ��0-�$7�"�� �`1h �a�dB���@�����XQ� 
�,��R9�q�$\Azf�T01���T4�'Zt���G��M��t_U���S0M1�JY�h5	�{i�M`괬5q�Z�vu�G�'�iQ4�J���:*�IB�vt����B���}�&�%+��]������4�:h�ٵI�LtO.�UΚUѾ��t���2�L���r��~���jf�8�`2��UK���x4��I'b�do���[�`$�V�����5�����Sx*�rzt�%)6�i�<��棵�Wѥi�6��m������7�.��� &�/ ���I$"K H�^���&x� F�U�xAa�� ��b,$�$�e�\,�ˮ�r�5���������z^��9�|3�z��m��])����Y�����������0���WV���e�[�tk��SP����#�4E��R�T֕0�o�.�si�#/�Ϊ�2�QҪc���V�#�:��jS9jQ���8y�T��+��3�T�R���%IE�:.碪a����G��%fN�c۩D`��QcR�t5&"f��y���]F��r;�BL�A�H_� � RrP#�#�	��� @܋�@*Q  ����+��p@;��� � '#�� {��6_�	�`�`_���$
� =�@  %|���
  ��{�	=�%ɖ�$���\�!@�!�i�%O���ȍ䎥����$�E�
�+ؓp����.�m��q�};}MG� m r�L{i�G�5��SF�|�������	�i�V�q^�]�p����O^��7��}��s�B?�h�w��}=Th�S�U� vr�~#�ݪj�Jjk�.5_��~�jC�ki���g��~�ͼ=w^�Y�p�C�o?Tӧk�jg��z� �nT=f��M��G�U^��Eo��B<���	Z=Z�~���M���^F��� ��Zti��,�ۯV����k�R�0�EE�/S�b/�`�*&l-0TG� A�6F��v������&@�A+�@ Ѩ�e��)	s!֌u��`�S� n���3��e�&C�/�$��6Y@�8:�muumJ`rlp}M?G��u*�cͺ�}�Lp�Я^���������OM�������^	���Ш�]��,����QY�?�
=qW}O�G�*��oª?�>���D��~'s�4����,K�O�� �5��A����+���� ���[Tנ�������j����������WjL���cDH����3+#���d� ���k���/�ѽTi�i�'��U��ҙg:���-�P�:�#<��3U4��6�/�T�0�}
vzQ
��:�}-/�	�[lΫŭ��x=�Z)�K���˪�Z���(z*�T����[��wj�sܵ�-����I��|�ꪪ��$��t4ڪ�J�#4�i�u�Q�V��Ź�u��M��d�6�,ᬧS��t�-��M#KQOE	I��L��i�Uo���}ϫ���y/�g&��Һ1�ϧ���CU�Mo��Nj�n�Ck��U:uV�d~�k�oGO^���N�4å��G�ңJ�Z�iR��i�q�ǵ��7;�Ҥ�:n�R�?'��M����ZZNRWr|s�GD�Ix"��YVIwɶ�Pg}*KY+	��	��
�,H���G�[uխJ|�f�����ﴗz��@�?��Fݥ���P�|�������{�O��]��*��1�±Ye�&^M�^��D'�tʹ�IĐy�4��Ud��̺'%�|�Iy�z��I;wfTe��  x ^1p%�K���aX����� X�4��J����\E�Ғw,��ғ�4��*m$Jrk#�{����&_���rj�*� K)�����h�v�Wn�'�o�:�U���pc�SMNʗ'}=��Q��?��[F��i��R=�z:t~JU�ޖG�6���S�_�_k�:-:����h�Z�GN�*R�#��a)�HY!�@$�h"Vlix"�$	�J�<��Sm����+����U��'�#I�~_[��t����^�t����UB�CH�kl4��Q�jt���� %*g�>��ҡM����MJ*��b�xE��Ci��|�W��Q�f�_�`4F�Y|��|�S� ���}�-�����V�O�0�>��O f��6<Z�CH�֓G�]$��#�Ԇ���}1	��P��D%�i/�HӞ�9NŖ��SQ��R ���KOvn���[WS�UiY�F�U�$�h�n?Q4�$ʳ�U���$��2��J��.U�0V��m01�y#����H��04�x�*S{��Lԝ��*0�|\��HR�v#�h*2�:�R��IZ�u!5�@S{���*�Mw����L_�r]e�m*�I��i(�ByYUg�i��L�Y�}2�Ba\B��4��)r�#��d����Y� �ɠ��_�	M���#�^UR�����C�C��T�J@˲��JN���vq�D<c�%k���]�q������G�\��1�Ԁ�v+q���Ҁ"�	�ԱM߀�o n��a�f�J�+q�x�� <J@-��yaNJۨ�<8eM��maLa�"R�'&���+1 P�����.䋀wJ��T� �Ii�@Թ3����F���.\ j*�-L�y�����6��U�p'�$����U��'�^��������W*ĥ�B#���S�|$H��2�e����V���̍=��U�B���G�T��ۈKO{�]KiJ�g�Q�V���������|���*_uu9y4���W v��}é����>��_RgQ���Oҵ�mt�'�K��t���>/Ԯ�fm��4���*]L�&������S>�Km���M4����/w[���ٟsm�ZT.���=���/�M�U+�\є��2ڌ���-����Q���unQ�Te�z�w�>��,U��&�t��JF�JdT�6�ctҔ��"dp;�}�u�i�/���5G���xu�N�G�Wg�Wy�].����hiZ���y5=I�K�v\6|�5$�,Z�1�������8����T�T�uw}&�딓9չ�MMWg���*�S2�-Z���.Qq-}_R��=m�z��<Ν:/UW����KT�~�&����u_�+�Ҧg�px�׮���r�G���ME6H���>�10�Δj:d���2�g�T�>��Ӷ�)7����
���v��<4�����~���Ԥ��o��4}SOQ�S��p{?�����4g�ױϩ�fé:SNª-)�n^I
�5�(E��*TD�(�(�Ri.��� ��4�һ�i��Sjt�����S{��������ܱ,ݒ�H�
�A��'[A��a\�#�/WJ��X"8�/t͎�,��W���\�Z��B8�5g�)�wiLOb��=*{\�Z\B��錑S.@���r�B�R{ꥒ�T��>^�֗6���Wb�H������&�1��]�i����F�_�~��)mE����*��"�L|'LJ9:g�Oq�t�4��֢�b���Ub�k���j�F!�#ɦ�s-\�R���$��m�8����\����ȮŦ�"��+d�L'%��;��y�vt8���@-l/ع�	���scJ�~Ʃ��rD��QsT�؃�RiR�������4�X<�t�z��N�t�J�x���ZM�;S�k����m��M�\y�ҧ��:1t��v:SD�ഡ���k��	d�)|�:-(�4�77o&�iO��T�I�#M.~��*�Q�i&�F�_ aRiR�b����f/i*��n�ұp�A�L9j�&�u(+^@��tT�rʩO(j���m)��M��������:*W?�zR�4b}�g�j�4V����z4��G:)m�=	��\�90뤿V�7��0g�S�Z�(:e��u�1Zm�X���;\�?^�h�i+rr��N���0�7��}j�(p4z�	G����2N�VP4z���3�L�dx���m�T��V�z�\{jաqέ֚S(�F�G�]_��O�v��m��4�*��4)nU�*��Kg��tb���UQ�O�(���;S��LU���b�=�p�D�]�<O������4�jԜ�Y�եS�mh�����W�}��ϝ���U�ѽAν�RY����-�;�g�N�J���B�[m#�
Ƶ�f���n\X�gE�� 5yA]K`a�+H���߹���7��s� b�l�JŎ�O�-^B8�J�tœ;t�"�`TT�r����UB�ʵ�#�����~��jS�>~�Y�Rj#�P�,�����T�:SR+*�v*��ȋ �(��xr=��
 ���$G`TF�r&� �1 � 2H+� nE�� p p)�!��2�!(�p��@��t�)=�r>J@'  � �X���#�О�9!g��7 )�e 2[�9  A @,� <��.r'����?�n���u|��{?�{�D��kQ��݃�P��ZtW�TQMU��*O�O¾��]Z��T��v=�q��O��>�p�L��?��;�۶�W�K��G��6��0���� �M����0�i�:ը� D|m����������,�j�.�����uh�[_ݨ���^�����]:R��� ��Ϫo�Nu��OG�j��w?i��gB��Ҫ�58G��~'�yTj�4� ҏ�܈� ����뾭]]J���0�%� � �	$
G�	,� ��\J �$)� �g��u��q4�Fz�d +��@ H��@ ؐ2I*��d�IG�C�u���3ѩ�OIK�%�q��ٺt뮮��g�h�^.}]��QB�iLя������:�E��դ���Qn�z��)�3�����k#�i�SUJ������o�1�xvZ}Z˓ݽN���Orڒ.��Z��a3�k���Z	m��WVO���z����Ҽ�ͻ�HΌ�j�䈩�R?o�n���t� �]G�*p��zt�О[�(���4�[R1c�̳��N}WV8px�pQR%P'�5r������ �;���%�#�~*��.ԟo���v��� d|/��uz�� ����S�l����+$��4��d

�(+r�Ń�r��QEuSj[=�j->���+�{66զ��.O+�U����:�	GԪu�(T���:4����jt}�'غ�S��i㦗]i.Os�hQo��>ΕV��F��֮D�zN�y<��V�G�]�t���EJ�D۹!^�t�)�4���]N�w4Һ��g�_w�*���Ү���O��F�5R�_�p|��̣�]2k��n��
�.2|�}e]��8:��̹���\�0D��r�JWs���������.�O_�<��Ww=:;�]�jWC}�����T�z~��EU�ң����ksN��j�v�Gʪ�MKU[~�w39��UN��L�����L'sH�@� ��/�Gr����0G%Iԡd�{C���OE�����R?S��3�����U֨x��ս`��SA=�t� r���h�sN`�z=3�Z	�J�TҺ\�K��^������F��r��.O�z�_B���~y'�Gu%�J�7�z���7���E-q�90ÿ��D��N� ֩t8�'mFێQ��F�bIǐ!U�*+�:P��R=oSWPn�
i��ZimB7F�O�ҩK��+"h�F�K�����y�U)R,ph:A� ��څ'Jtu*k����<e�`�hzN�ZDWo�}Y����Ց��Eu���o�C�5�a�5�O��zn���U'��)��ҡx'���zw�l��J���y]�|�w&��th��JT�����WW@�0r�VA�	 4��pe"��T^Hk 0����#���Ob͉�� �nP,!�4i�4�u��3_�4�n�?������w�����3UH�.�#�����K9T�c���m=E��|�ǥ*��:���Y_�p��z�v:�Y��wG��:�ԾL�g�V��Uľ�
�(L��f�Jm�� u����I���z�;}T�k�ᮔ���bWc�T5S\��E�"M�	Ҡ�Ix��x�A"��U�E-v+p���^ )�C�J��%� 1R|�Z�7)��G2jP�	0�w7�@�r�ݛ1h��((�T�*ǃI��b
�)̑�\��W���<��B��Ss`0�*L���t��ݐVo�����>Ҍ!��7�2��A�f�/�K��sē��6%^@�� �_~����}�W!Oo�7h�B�n�2ʪ|�G�~��/��!˸�0��Y�i��2�	�$�� �!;`���y ژen�i�dF��
�����l'��"W�9/7"n'�Z��,��.��|�n�	S�lLE�)v�� Yi����R�L�L�����D��(�&��m`�J.�pd��a6\�0�Pw�-�LK�쮀U1�Y����&�ᓗh�i����+ix"��n9;���{�'M�%�]߁1�)IT@�n����R����lm	xr�/J�<�rZl�X�&_�;�EQ��{��wt�2�4.ޝ2��T���}wE/����=4�y�Û�l��%��37�>�^��y3��\�G:��3.� ��GRG
�o骤�OQM����\�-*s2o�R�%EU;�6��H��K��)/!Y��r�HSQ�_u����H����.4���>���3V<�ޣ�����>N�����ҎJ���^���Ԛ�B��J�m��+�(˶XJ�B5UJ����ծ�M�<�nS�Yb=�qJ�<���s<�k�ە��^�4�5U2Q�w^��i��5:�I�W��o.�-�*֮�v�q5�^�%Sw'M�UZ��SoKcuU[�`�A�`���95��`�rN,^ň"�I"�ph�*�)MU'���V��jWv<ٱh�ᑨ���Z�N|�OC}N���O��KnQ�ҥ�f���hԦ��0m>���^�R��Of����y}�cJ�8�ku,�쮑���^�M+�idڳ2��:һ�R�E�*V�*J��#�A����Yj�ɘ@F�x$X�L�=�wɨ�X(�,��4])�^�&6��:��0�8�� �삹8�\�Jpvv���@qk�9�L��)dԺ�Q�Fnԣ����U
���m^6��5����?'��5CY8Ԛr}=��f|�K�lW;��3����r�}��ElrVz�R��oB�)�9i�բ�+��%���䷂�7@e[��o�U��:Nppf�Y�Z0�$��I�\i�*�k��Ӈtz֛ja"�5�&�<�ō�;�G�i��Ҍ c�N��n�3;�b���<���6��D�Z��*�Yr0:R^Q�W��u�G��G^�/OL6�<� V�I:�e�k��E*[#֥%��>�no��S^�����nZ�pu6Ѥ�\�Mt��>�m7'*\K^xk�:�(��OZ��O3Ņ?k��/++髩NN��'�o�x=����r�cP�wF��"����a�S��%ةEٺi�T�o�x6�6�P+�`Ҧ�iZ1䪕�T��UL��i/dj�o=���繮�'K^D.�t�zc��L5>�$��*uX�zU%v*�:&99��M��Ъ������3S�
�*�j"�Z)��s�N�	%�j��G���:}(�ݫ�u��P����Ŏ@�]0r��w��R���8Qs�iO~ƺj\�I�/ cOn�rv�T�s����L�8BS&j������ƽ���*�P�u�\��`s��$��tV�k�嫺�E�\��z�E�M�5�֓yd�E`���V�C������ 3.&��Ң�s?SJ�z�����nkrb�������[�?�Gs�~��O*���5k����:���"k�z���?5�uT� ,#�*�R�ލk��p�ާ_�&�N�����Ի�Ws*�6*���{1NQB���L�QM5e\�[nV;��j퓯�OF��O
��ʪ���^�1ГO%��|��'/Wf௼�mR��*��f��u+��E� �WE��R��쮜�':��éO����Y�}J�X��פ�\W�|J]58=��>�u���:F,��5J5<���m>7��,?`�k��.� H���4 pD(#*�j�y`�� B��I� M�+v$ C#�� 1��, ��D��]�H!^  5r�   =� ATD  8���y+�r(�{�P%�
�ɖ �5���  ����8$r�)m�
���=�zzT�+�R�:t�R��F}'��zʝm�_N�uG/������m	�4i��JY�}[��uhmj�� ����55���u�T�o-�5_��~+��Zӯ��)G���1׮V�IR��s��NX����Z����V��8G����T߹D��> ?r ,�C�#>�\���݂ H �H.UpI�.� �=þ �!x�YR�"�B�� � �������~�n��R�IU����k�R���+�M�[�>�*�����n�G�EUD%��U|�[n����֚ͦ�N0gZ�>���T!o�!V�:�%r�� ���-�zhz����t�j�::yFU�R����RY���_U>O�C�V�����ҩj:��s�� ]j��Sc��i��F�6�|��T��Ȕ�l�Y�_�ޫ�Iujݳ��P�u���-�k�S�f߲=:�}m'SP�G��GS>�➝�);���Q���+΀��B�B�`+�?}�	�û4��_�?���eLzʕo�2Q�U�������^�_P}^������`��x4����~]?��]�l���>�����B�/�:+����/[s����3�;$ri*pL"�d+�Xo�H��^QO^�4��3�:�.�}Z544�!5������(IRx����)�ϯ�t�:��'�m���W�bQ�(�uW�*p��u�MN:��Rt�c�V���b�ӧ���Ǧ�ꦏ���/P��}˃�V�u�UU7,�V������2��U��S9���~�m�+�����y��g�Ge����*>����֦�ޤ\��wdu�o��4��z>���k�]:TZ��1~\�jp��[M*:�,r�����mB�c�Jl�lf�Hy��mDA�G܈�B #�>� ��G�o����}GM5t��/����6����it:úfm���z'�n4~�;z�#/� ��~���^�J�u�\{Cy���ҡ������e5;A/K��������:]�R{R������$g{����UWZn�g��X��:*���K���ںzk���z����߽F={�s�Z�}UU)9I���z�4*���N����+[y��[�WU*��\I�¥-�'��2��j�=46|k�}���ζ�Q�P���J�ަς���^��i�;��<�AA)rn�:Sd����*�
��e�MG� E�Q ykf����w7N��$��:uO'Zv�ĳ���A�*�1N�{��.��'!D�2hS�	,4�w�-	��[}]WQS`a+I��4=s�b�Q�6���L}H����c�thשj)o��m�q������Z;%j��t�$��ή>��h�NY��=?CIC�����#r�f��SJp�^Ʀ�+;�H�x	\@fƓ��`�"^ @F��VA� j	�Zp`�3s@0l  ����H� 9 2R �Af�i1�&@�Zj�u'�[c��KIA�L�.X�_q�U$�~��׶ԡ�\�s��K9jhѩOMT'�KW����X�������Zm(�>n���Bm)K�,jW�GO�����d�U�U)Bg�T���|�ӥ�f%L5'}k�0pi�͢��؍7o�{X���N"�t�H���eB�۰]Qr59b_ T�"��S���H�����I0%Ipa�����$��b˻}��ȈV��� T�-6�Z�rr�\�R���L������<���=�i��� ���t���0*��*G8������D�rf����B$���9r�o�NAP_���R����<��ڒ>��n���q GRj�#,Kp�O��ڴ-�O	�w,NؿtUl,�R���8v��k��]��$� �	IU2�.˒Kn&�j����!�#߀�IS�6���J��l�ɥl3-�P�+�e���&eG V�S�͑[���� ���&1�7Q���s�ؓ���cہ��_�	,(��0��f���E������@;^r���)&��D��v7|w��PS��RH�nc X�6�G�&������JỠ�9�{�ԝ�� �;��}٫t�#�#Q��7]�����?�T�w�ŧ��=X��Y�Z==t��i�4��U$u#�cT��R��u^]r�f+��WZ�XFz�AP۹�R��K�����pγ��LDpl�r��])��y�}OoBiT����Y3^����L_ի��6L�j��QU�>��մ��s�|�}����t��Slv*�S���uV毻�ޚ�sS~Q�jB�|���Rl#��R�νF��|�w��V8GJ�/ ע�d��s��v������ʪO&���p\M{�5�w<��i��U�]u}��T��D��SqUo�6���S�fM�
���t���%�K�'��
Z
���&��$����XRF�1`j!�[�Ӛ�5-`�L�o�AU��]%Us'5��R�L����tҎ������D'����U}�܍c�ҩ������Ju:���ɵWS�*�F�Zu}������TK�δ��|//�MI�Δ��>N�w])S_�}=-E�L��Y�B�3':.�tI �IX���E��I���b$�U/ث e�,,�X�J�v!���� FOdi�ܠbX7�ԣ->�`�M��8$j �y2�:?l��ͣL�99X3��i���G�6�C��3KK'��\���ͻ�{#��t]5�X���j�-�^������y,�c��X�0��V=��]ET�c�zU(�f�8�=[zme�:{Z�R���Ѫ��
HSL�-ɥD��F�=.M-8�&��Z
���jZ��=��MDTD�F��=���'�ԫ��=K�3����+�Ti�d��[�raR���ы_���e��s"�����ON��鹪�H���\Mi)�B+�J���J�K��geh3���f��#v�|���U(�֚��e�~���u9��I�!�'�Ap�;1���v#��MT����I+Y*���0J��5�മ��J�����0j���I+ɅRt�J���ذ�YJ�&,�A�I�W�>��}K���T��OV�U*���\�+�t�MѪi����m�Ҙ�_���:	w*R슩���H��*���+�J��S,��sIHS67!r�㒥ɥLرe+,i�i�����*�5E�M*U���`�>�XM���+�M�R��DaT:�A�e�� ei�ӧ��X��MD����B����͹��]P����T�N���Sm�ۥ#�t�@��eK�iK-J
>^�����X����M�3'��R�o6>N�S�X����&�e����؜�P�団���4���N%+�ґ�Q_���+� �׋���CDjW�>��U:�>���>޾�D}�'զ��&ê�V~�Ez�5&�CW>}]p�}T�J#�?sϫ��=Q�˦H>s���>�zv8գR�x�Y�f��SxiغT*��GM:e/�;#��Ȑ�qjU�US���*�}��UM���Q5D������N��}R��X�¡�=ޤ���Q�:O�kSyH���uR��MS�i]��j��k�~�L��	�(�� ��~�M�rWO d�1�=�`�ł ^	JK�C�9,���=�^ $��88� ^
������)8 ��b�� P�$� ~ @Q �9 ̚x�� 8 E������� ������ ^�-�ףJ�l(��?�hU��o4��>��ތ��7�_��U:�[7�b�h�($��EĖ`�9��S$�F ��� ���� 9 
 �Y B�y�I�ŀrh̚Mr
��҈5ENIxZ�����>�,�zK���}OIҲՌ��w��XI�����)���Ҧ�um�n*�,sm��U'��V���j˹�hN�N�'Ӯ4tZ�/H�N���香�>~���m�fw�S�]U<#����W�SUO=[�)��F=9�C�՞_ңQ��k�����uU�|��ըߓ߼�QE+KM�>n���Z"W��Ԩ�T��:4t���r|e���g�嫻Ԯ��l�M{�;������X���N�&^�9�۹�1-9Dɤ$�ɥ�?�i��H���J���v�2?��� ���zU�t��f���qWV�Q��2O���dJY�Q����f@���.��{T��ݟ��W>��?�?o�J�B�R���/�?	�s����0r��Xi(B��2�m̩ *V�y
�]QM�����x=���U|u���GJ�&�u��C�܌� \",��F�[U�T��? ������Gm蔪�Ի|��ך��4�W�M��M�j��=��h�n��3Ч�XӉ����~o�����C��W�>���h�RKM6�s��&��:�8%�ּ�M-�}5SP��U�W���T,bǭ�ѧ��c����59nT�4�ꨩ�cH>O�b&�e0}�Xna�|������ǿ�W&
�}�FO!�%�@������ΝF���MN����h���u�Sۯ��Ϲ�ʽO^��;m:����꙼�3��u��J�o����iU^����?9��ۊ4�޺���m��<��5��ow��뭨VK��U��+(�I�L�8�x���;���?<�?M�uG�kT��	V>o��:ԧ�>e2��=s��,X��Z)�J�(%%�T��U�u�B*m{�Y+q�� ��Ob;�� �y)H2�3I(
 %v�@����)��������E:u{�1�A�����])�����m�GJ���S�M�?1����SE�Co�z��7��'���i�Е%#��J����_C��I�R�������P��N�y��(�|	
b Ip,G�dE����B�*�$�
�b��"�x�L�" Gt9�U�$�X ����Ip�rR ��e ���$<\p E�w`v�$�@ 8���.��ɗBgL"yuv�V�L�Ϧ��C�a�e�jx%�u����V��G��\�?y��MT�&��ҴuԺa��]~?�ħ-�>���u��"�W���W���׆0p��Nnm�Ә�-6����;�a��IR�H���A[��"OV��R���:X;�P�̷%k�Cm�"汗$��5R������$iǸ�,�Y���WțKj��k���4�N܁�i�$s�3!]X���s~j_qiL�]	?<�����+�*9D��[
Y��M00�]�T�J峷(�ݤN$�}�sJ�4K��Ta&�b;��G�%�2��]��g(�E>䏸�6���j��%b�J�ȓ� �8�g`�6AC�LY��6����A�������V��b4�&��k(	ʔ(��@�o�ZpF��E���[~�gjܽ0��)��/�*Q���H�5h7t���O�K�A�������%���ܭ�2I9�#0�ܲ�S���
�hFe�&Ղ����b[�d;�W�
����5�>ęWI�D�`���AEʗa�R��r�L
�vh��+i�s3f�@�$�E��&ں��~�i����WOf��Gm��ӥ.��{���=�4�J<��t�+$�k����nN�M� q���n�49�OJ���bɕ-؀�+���Z��%�T��%���>f��h���Rx5���+�������Ѧj�~��_�&����*�����ɟ�[�.&�Z��z�;��:uW2��]M�eo�i§�g5J^�kV���КIj�lf�?v�U2�J���*��^�ZXS��^�*3�j��n�º���n�D����t�\��n��w�݌ewdj)�J�T�Yw$3XX$�E���--��VN�A.ԇ�rT� WP�TEؓ���02�F����(6��؊�Ӛ�}��Ԩ�7��5^U�ٗ�����\*P��]x�[��Ǯ�/����W(�J�CU\�J�Һf�jP�7�	��bS�7dnF��cI�$DʕM�d7�թ+���kR��x%;h�ϱǹV�\UOU<>�G*S;ѩ±zf��=[Mw���G���^fy^�p��_���U�<��sc��=�Znjos�m�:����uîq�6�H���\���B;���g��0"���`�Q?R�,�$	�3��Q1-���x"�K0!���G�-�G	`�$���`Ɋ�N��&Ge`9<���V6�f�f���G*���������í�����l�nW�}*����ZWRk�?�SJ��E��s��S�>��V�Jbp2њt�\�U����ヅ{ʜEO�|Tק�xF*t���{����]n׃S�OOeU�U��ʽy����K�~�n���s�uڭk�_���|s#��,��꩷|�g
�I�G�C5�6Ӗ!��
�a}����_&�-)Dmg�����NL�r�Ե�N���	���)9���SV&�\]�I��:��s��S��U8������%N�ܠ�j��h�9n���RI/�
��s4��6�k�Q�Tخ�����Δ��6� �*rHR�V��87D�(�����y�Q����GK�g��k��>F�YSU����MT���t�Û`�����94�&UO�MD��X�A��@D�V	%����T�F� �)/�i#�F(I#��]�G�2�H�R	\� ^	!�p�.L��u�ه���o�M��i����WI���3R`Ts�i؍�fs���&:����Yɢ�6�u;�xw4�K͏�U	��<���p�Wů���K��U'T@�%tk�Q��>�Wv�t��Aƴ����c��-����3�Ύ��m�QZg��T� ������U*���G����B�jU58O�h�{6�M'�BGM
�j�g��)k�}}h� �M٧D�t5i����N��^]m6�C���ߩL��J�G8�鱸\�˰Vn7��" �U<4�U�Ţǥ���Զ�������� ���EWCG緛Z����RjVz���\��ԡ�.s�m�+����~�+�ed#��\n�ST��
�*��I���p�����IʰC�+ �` 0�n�&� �D�x����l0�$��  �@��� &��NFy� ���P��� L(�PA�ex2� �9 
�����k�� ��� �l��'� %]Z���G� �U� �=_�Z�)E���W�i��f�v4� �#`d �P$�،���$0	ZYQQl����ҍ���N���Y�R��lG-�W�}w�;:�;n����Lݳ�W�^�vk-H�o$M��#��j>��Zm�ę�D#)H�@�( ��A67xY=Z{J�SU�>�}I��{���)�T��T�kE9�L�*�7���Q�l��1���:{~�g>��������)������x���ܥt�￪(��v��N�n��5WUuU�c�i��1�N����N�.��ө�K�Uo�Y��}]MM-�������6�ݞ]�Z�uUS9U�䳔���[��J���7���rˉ���T�ɇ�ܜ巂�jxEBY&�Z4*ԩ*S>���t�U���&��W�5��?M�$��|Mf��%ȗK1�o��Y:�p�D�hS�O��N�OKMO����z����G4TJQ�� kIN�*9?������S��v�v�N�܏���B��N�?�T�ԫݚ�ݙm���M-�����DT���T���;4����~p�u���3�柧��S�:K�?�W�uo�$Z�dw�FX�+ �<��,��T�%Y��ƴ*�OS���&$+�W�T��Ty<ښ�j?��c
��qM,���v�Y����&�}��*x���?U�լ��/K����b��58������QM��z��J��Ӣ�je��*)���i6�w��#���o�Jz���k����T#�5k��J7������~��d���)��IuUw��s��q�+ִ^����u[Z(�Z���]T.�wگON&�Fu�u�Uj4���bl٤��fe��a�����}
�R����S�BK'}�uR�5?�cu��>QM�=ǩi�KT� �Yͫ�<>�WV�r������w��uT�J磙�ǫ���9بb�\�(�A!ث��H"]��H������x�Ӕ��z->��~j�~cN��u)��.�	#���/L�(���v3�j?5�ڝ{����ʬ��SR���)��D��"�G> $�ҕc(�-%xB��Dv/Cn�Oc�է��p¼���m�s���jW��������ҳ�J�����4�{�v�4����m=V�z�G�?M������T{1�����oG��I�~O~�����hFᶤ�-��K�%��E����GK��{��r����XD2���rk7	H��HG� e$�\9X AB( "� D�.@� P��)�� <�	�	䤴�VD�d 
�Y$���k�� ��IE��l�+\�8 @" pI/��(#�J��4j�+���͹��=zZ�_��>�JFk�������mI�蟵��{��U�W(�*��V����.��$қ���*�
y;7�TE��veI�S�{2ߌ�Jy�*�UqU��%d�#���k�G��rI�0G��� �jy2鵊���d5k������M8O�ivFt��K�")RN`�RiO<DK�
�Wi�u2u4��p���J/6-QJ]9�M��B0�����1f��Q��qW�V��S� �ʴ��g`q����Q�ױ����j�Y"�K�BL�Wh���Hn-tXi�&���J�Y�R�!�v�\.+�X��3r��<,�O,Ӌ6���N��ݚX��7A��\�	����vRV��G=9SR�%����q�@�ܫ��&\�
4��:Z���_�iي� -�$�p�����s3 \ӛl�>���g��dSw-�� ;�Zv�7�a��r����:�x�Is�
�i��0�p�!er�Nm�q*2%� i����f�H�]9��h�U.�������a��t��'!�i���*g����Q�4��T�iG�K�f�?�J��p��|^��K���S��f��5�*�_K�K��IUTқmB<[�S��QL�� �?/�������ani�����k�kz��O�S���׮�O����-�5.��^K���QMIAp�Xo�v-7�9S��e���zi��V�^��=�u�6^犭�3G�S|���^副�V�1�9ժ��������9W�]K!5�qNR�ƭ☥B<���:R�&�jk�V�ݎR�W/L+d%h�r^�ɨ���-��Y�Z��(�N!���Wr�58FI���V@�~M$��/�Gw�΅,�QJ�dX�4��:�t��8L��u+�N�8]H%iW7M/�J"����暋ru�d��ze�q�i2U���鮌Z?�tZ��z)�#�����>��..g�*�֣�WM�s*���54c�ץh#�=<�K�:S��1��PMv��i��N��p�f��)�3�kxtU�Ʃ����ؿk�".	_�n�PER�aZW�)���*)s��}3r��WU�s��4��\w\>���F��e�S�:샺�^JAb�B�%ܪ	��$��a0���	D�o�W���E��b�[c�T�m%Y��2k��r��B�"[<�otT����k��e���j�������kz�6�t�>N*k�Rs�R�ڪ�����ڿ��J~5{��P�rjp������R� :�ǫ�ZT����]O�;�i��NS����Z��N�<�{��m�y�7#p��59KZ�^���rJz���C�m���\Mf/`藃Iw�1J���m)'L���)N��M�ȭ�w@fT)i�!�]}5J2�*�#���[F]T�3����˫
:�Fg��0e4��;�I�����b�L6���N0�9�X
�a2&��L]	p�\&����4���/*x	�r��k��b6�S#�KN��,z��T$�6Q�c�Je��d�]j�p:.�=H�V���½w�~�Ud���J�z�O7[W�7V �}e�j�d���s���K�j͞m�͞�T���(r���ֿK���3ѡWEJ�:���SUS+�Mҡrp��*�^�=���uZM�E��@�\@�`�v�
$�*�K;ZU�6�pZsp:(��5��r"�8�\
�IR�X� �M�L�pT�U�J�LU����i��g�ݑ:��ޥ=��H�K���G�샮VI6��@b���i2s�P�Nl�Ȕ�ͧ>ǟ^�R� C���q��&��X>�EmAΎǧsB�')T�QR�����ɥ�%��ѷ٪�u\�մӌ|�m=�Ӧ2g[�*t��� ��(�u�<�f2tԪ�G56a++{�ݰ}5]ĞXE��:u|~�N����u����YW�JJY�]8]IA��U���=i�O� ��m�(��������g�M�NN�.�(���R�a�6}�ҞO������{]T�P�G��i��VN���G<Or!�%�sp�"K��8�+�����P}<I��N�`��n�:[��xk��o6�T�y>�A�-#r�c�E���s>�e��95�]���G:\H��N��nD�(,2� e� ʀ$�j�Z*`	���d
K������a�M�@$��H� B�J �R|�� ��2^	t����Ȑ %` `E��C�{�"����4�e�  �`�<�� ��k}�g��3� 	N:�7�� Ij�6w�Qj�f���F�E�r�D`	�d��  "�T�� ����K,$Ie�* rD����uFB�G����W��է�M'UK����{N���E���[�c�������鞠���uiԺjk)>O�W�^�������ꩩ�UM_��>��im�k�GJ�*]m�hP�����R��A����Z����U:����{�Z�j�z�QKW�;W�v��z���c�v�M�yc��y+' 83�k�,%T��/M#�i���J�Yj�W�ޮ�EWf}m?Pzj�gǥ�uX�j��[�Q�YBm#�V�h�BF��eA�[
���Gi��\%b���*�ϵ���SթR�8�m)��13�q�V�L��}.�g5�G]���URՏ��_��qJ���9/L��Ҳ�x5�V���'��MZoR������ަI��ݘ7�ש�*(p�w�E;yy�Jv��=J��7�SZ����O��� �ߓ�z��R�vJ ��ާ9/)Xwr�J@F�0j�85N�����+�ZW�~����i��V���H����E� �����o�[p�$f�~���)ɦi����Ji��^M�WV�J�����@�7թ�� c��_�����CS� �5���D�Yb���T��~�y D_pX��GB�j�4�cm��R�^���[��}�G���u痛G��t�*Q�����h�T���;N���[����:���.ݎV�x��\�	��	�z����8����=������7���k}%)K�hm��Ss��o�87F�U����o5֦��lϤ� ^^\�7d�]�*�2�$���5i�z����-V�o�G��sZ�������Bɹͱ�����r�u��������}GZ��<νJ��繮~����u=^�[�S�y*�j��g���n�B�MI����g�z5�Q5T���<��J�R�v��8�4i��J��@.^J-��({��D�ad�q�&.��*M�r-1�v���ۨ�;j�]ݑ�6��b���4ҳE��ʤ�K����M����J��Wd~��/G��z���5.jr� s���W�Bt�����bj�l�K�h��Y��R���zߨ� U����J���>��w{��Z���U�<J��$� ���i("�^]��r�r��iP��hӮ��Ko��c����iN9p~�g�z:'ҥw&�?/��ۍv�4�����}����r��ѧF��I��Ϧ�������"�u:t(����(pKT��"Ƣ�A2�R��Jy	 $v4����p1�ϰVX��@�%�a�� �P�$ �@1�K��䂀�a݀)pX�@��P!G�B�P (BB�,ʸ �#(�n���d��pU	�X{H����%�)��#�:I+�����n�R�6�H ��d�@j���wUF�� ~C��]���Tĺ�w�T�75K�������� ����e�m�(�],�߀��W�<�,$����݇�o��W�����?P�fT�,lf>
����b�9�+R�)�$��L�`�7��V��4g������k��/��$9����4��\�uD�MO��m�N�4�r)�SW�o�"'�j!�?� a]��F���)o��*$��+؉E�u�6�s-Z;��ۙ�5R�R�T)�l��q�%��dQ�I�Xi�w�j��p1Ң�n��$�L'�|�
?���S/7K�'۔��F�a� V��xc��	%!ғ�Z�'剄�a�I6��W�O,a[%�xRI��D�B���'�]Ԡ"��%)A�U�������^,��rݾ
��EJ�PI"K3�)M;� m�3�U^gVP+��bD�GM�ޫ"� wdJfa��JR�Si/������P���)wI�B�_�O:Ѧ�Si$�ri�a���.f��5�9�f����]��ٻN�pCQ�)�5Eu]��~�4����Z��	�(fZm�v(�T�%҄Uq�j9\�Q2@ͣs�Ԏ�|��P؋���P�1h,pmiت��9�ڎSJnM�qɪ+ąrt�
��I/�����%����áp�GB�aQ�Z��x�Og��w\���e=��D�	T�zV�W��ӥ]d4tߓ�*rt����i�U�SJ��t��m��N�,��k~�UΚZ��ě����Ҋ_<���¹UBW�}%�M�E���nM�mi����
�&�1<���:SX��wt�B�u^*���Y8W�UI���1�f�>�!��Օ�+҄��c�Ud�O���V'�<ڻj�I��q�΢�������1�~C���GS�cqJ��T�\���6:4�2F�N�Ff��Δ���T�q/R9�9g���%��-�8<�]�R�y�p}���M5���z�h�#���cN�R�`�YH���M؋x��X�e!M�qa�bU� +�2e�SO'��;֧�r�������}+�˭�IG�R�F�	����sZ�r�~kSյ*�iuR�3�^�_Q��2Y�z~�Sy�KsU2�.����s��Zڕu��۩ݳ�=>Y�)�����]V�ܟ=��f��%�&�o�Z��R���g�Uo�5���EuW.�'JiT��&���S�-,�bCk��������vk���X3��Q���k�\1*��s�ZҿcR3xS^�R����'[��Ӧ��1Z�L&t�ׁ�W a�9�iQTUs뤦��½��F#�z�T�νkwS��I�Q��jwM��d��U��T"φs\�#��+��#�P����*QK��;"&�Q���c K�7ɮܻ� T�Z쉩�NiK�'K̕�q��n*[d7���LwHE� *S��C��+פ�+\�R�E��>
�UB��ԭ����OR�s�AT�A�W��Vڤ�"=�Qt9�'{�5czU.,�x"IUr�U�:j�º��R��Ӫbᢊ��Jv�5R��E�mv�t��'9�J��v�e_Km�By>��m�'�譪�K���{�U1�'.�r���F�:SE�N-4�i�܋����b�$�PD�k�d	��4�0���U7 �6D�9����X��eu,��Z��g���ר�0���Z��g,Զ��V��멹l��Cn�Ym�^�TX�LR��7(�6*���2���A�LpG8V�&�t�*� Þ���Na��@��I<`Ҧ96�� 䩗��WNh=аj�i�i���m�Lg�>�� E���Ζ�}�#�ǃ<�\�����`b��娎��ƿ rt������/ܨ�CN�֖N���J���麔���Z�i>/��T�gަ�U>�kO��E����i�¥<��G9�bM�9�u��d�i��Vƥ0�ʺR^�u*�Ri|�۩�B��w���iB�i���X2�G�nBM�Ave
��\�K�xC�f�ҪXL����5R�}4��5Qk�#�;�������L`�n�l�N�[WEO��r�c��C^MjiUK��&������G���:�ZQG�8gJj�a�d��c�	�
7i$��}�
��$	�y�8� @ \%p���+ �!X {�!PY �DrH � ~���y�J3�!H���  O�,`�� B����r���{����o�� P�B�e�#��� 􆧊߉� "�8�� ��� �v�O�Z� �f��󈷒Rh�#'�ȳ i>�%���ʺ*%�QEU��[�s���VF�Ҫ�1�j�/��?�w����]�Ǖm�*x�W���K�i��Q�A:m���֤�z��I)W1{z�?��~��UK���
O��ۧKi~��i��gNz׃��o�V��˥pj{����d��� <\	���� ��`�	�`TE`L,���ڭu.U=�<K��YN�������QN��I�L���+uUɜ~N�u��ҡ�ϵ��P�U���?C�5��	w:�l>�o���qGWE*��9o"�&�}����ӥ5G'�������p|�խB���n�it!�gOZ�z�)��6�Å�Ӷ����]J$������Mؓ�k���ꪧ���N�mD����b��U�e��׸Zo��ԟ��-��P���5��\�Ou�WUyh��t�j�ݗ��6��t���;���z���^�N�����i�V����v&�/����U�.}��U���'Z:�3|�Xp>
��!�|�f�@}A]~������.~��5];M���� �z�o��3�~(�-����/��m87c4��8���K���6��O�p���:z�gj��b`~���m5�j�S��_�j���_���ZDU���Q���A���bؑ���k�n������_+���������ߓ�ETқg͢�D\���nd�ON�}M�<ښ���L����νZ(��\�o{Hi͏&��h�)��_���F��j^��Ji�&;�}]��u&��|]�wu3�����u�� X�����7�)�ū��՟��y��IČ^�Jꮧ5T�:|�md�V4ȥ	#��N@��ɔ�%I&EJ�U`��]�Dy�H{"���^B�ˎN�$��J͑R=oO��ꍾ�u��[�>���IU��ZK�*�ͤ�{6���ݵ�t5*O����K��N]U�UK��*����6�mC�m�]J�J�4ǋi�F�U��*W�hW�O�F�ѽ-u==5R�����n� ����i��G����֩�Z��d��~)��SӶN��S��~"�k�������]<�b�-z���ꮪ�o�� �
"��\�c�-ҹa�L���=ޕ��y���WگS쀻OM��o�G��>����4��v߄Ϸ��F�J�(�YO,Ǧ��m���Qt$vn]�~J�$ʪ_� +;2�{�85�$�R*P�W� 5 ���%� 8� �.���E�vû��  h�\����R� L��
�H V*,�, �\�� ȸ��pXd�rY XN �l@� ���D�*& ���HE�Yd�6H��4��F��J���R��.�E� D�f�� �]�� B{`
@Ǔ�*��g�����j����ݷV�]Q�A���7��j�f�f��(͌��i��jg�]I�߹yBl���ȉ��R�Eq L�$�m� ��M�x�IE��nJ���Y���.�,}���� 7
&
ܲ{�y����,��,�K���p�D��
ݗag�V���T�<*�>C�0&�q2U&�*�b�W`t�<��'4�h�Q��6Bo�M8䖌�S�:\I�� �sdb#�s�2bUc�|��/�:��L�(�x,r�҈�)�ܨ�K���U)�w���T醞CO+���C�@a6԰��Y/Ob�� F�s"Ο%MNH���	ҞI
�nM���W	D��>L��������>�LS�!�݇�Û�x�?nL������$k�%���E)C�͊�A���fO�<�U��;H_�,
�d��94�de%�X�59X��*pf�Rw
^xvx-)G�*eX�B�!�Ӧ%��i�1cm������[m�b�O<Ah��|�ima��g��i��%�OM����yU!Rz��|������^uKUYIVnn.e��,V�-xy$N,n
���D���V]9-)g��t��H����J��8;�%�B����p8�a���i;����^���tMuE�F�/;�4�v�J]�4s�q|��p���+LT��F�j�b�Q5_jhi��_�])ǂ�8rΊ�Y��T�p�n��,����k+�����Zq2F�}1c�48}V���r��N��n�9^�UF#'Ji�1�P�'N����J�hҦqbj��:�9���T,��R�d���L�TKMpuTM-$T�YT�viR��cN���y��<�H�B�|�:*ZW4�Ve��K̕i��6��P����N�v;t����z*���V�W���}�*�>��u6T�l��ï�(>��]R�zr�_���>�ORo��.`�Ҧm�z����R�����&��{��3v��q=8ѡ	B=TSc��ӥ>���&j��QwR5汯ZN&|��_IJ��y��m���0�%�S�����3V��-$�����MmE2��u�UW����Y�z~�����Y<�z��+�)MY��5�]r��s*a����-}�O[w���˫���YU��H�s���k�_�j�T��>�8-�nm�'
���X�*_S��&���JSsW��uҰ�+USe�5ѨnlE1�rrz�8�9�ͱ��!�K��$����.֩�c�wv5��]U��f~�j*H�G��S��Mz~�jל`�u]ح¹G_���هUY�=M��:���rG*�3�F���P�C�"�$����G��Kg�F�B�z_��6�)|R���Uӕ`�:��1^W�qs?�Z箭D��j�^o��&>�jS��.!Aq:�+�W9�WC��}؝	ݐ|�Ԝ�]]NbeZs'�a6�<X�p��r��2��So��N-%RT��۪�Lf:���Vh�C���5M��z\s��%�|V�UZ0n�F�K�z_.ҹ"Y�{Ϊ��)�Բɫ�	8%�����n�ק�cO⦷9�mT���U��4ӱ��CL��� :�&��J��W���3�E�����O
�YS�=��T��3i����J������H�I�=t�(��k�Z}Vh�N��J�v�����.���$�$q&���T;\��v�5���� ��f�S�S�<5&��J�PKW鴪P�ۃ�l��)y>�i���Hҳ4��Wf�72�d�*�K���T�W
��]����v��/��O0ii���qU힊6�\ߌ������B�����´�団I���55MO�%z}>� �T��[��I�ei�@�]^�X�L,�W7�y:D�J��M��=
�*� 8S*�7�T� ��,�	(F(V:^<�e�ċ���x(���W�ס�Snӓ����S|���d����i��MX��J��	F�w�ʬ_'_�*�g*� P8���(Tec!���LUe��J3U�
=�F�����4ğ����Ϲ���ݙ��J]H��Y���P��z雵�EgI^�MD�LQ�����J�?Q^<������V���UM4�=:� ��'D�yj�X;��Ԝ��O�5�a9�ɤ�b"؉���p�	?$s>�$r����S]H+�MR��574,_�⪯~�zn)��C����B�u���M=N������j�A���uU���K�m����ӎecsD�<U&���բ��'m*]�GI\{�J��7KMC%t���2�WG0p������Q��LT���k�0�\�F��3b��"���8c P݉e��\eX L!t L�x ǀ qa% �x7 ����|��� !Y8�rr^@L��9�! �`p��@�C�9   C,��L���  8 *Gu }��K�wU� ��u�Mm4�����G��[� A�ī�:}�f����l���DdY 4RH@�%!���N�U2�t��nb��_�}8i��ߢ������L#�4�pq�}�� ���֗x56�L���0��E�3iR�����`�����Ih�-���IWCO���Z�'ձ�sL���ex���3�u�HZ�['9=1�z�P��N
����. A � ��(��9���@a�a�m�B�m�O���ӵ\ZO���i���
+Z�*0��Mr�miu뺝ྣ�/�5c�:t��1=ϙ�QSn���Z�o�QB�������������u7
�{��S8�[�G��ޭ���Տ�ד��F�'������R�+�m(��:�X8���ܧ�:�=5D�J�7Z:��&���T&�px)�5�cWtꮧ�<��}��M}�7ZMuj6�fx���)�����5�Y9��/�Ӿ��tĞj�섶
��2<����3<J�}��K��4�jj��� ?�<���ϫ��M������JT� ��� G��51"�|��}/�Tuz��v������>��Zg״?���
����������U����OTl�}�H���dA~HѨ#EDv2�Cl���]��������Rҥ��>�KZ	�R�K�v>�{�4i�e��_p�ɏ���:}*���SUH�j��NiRp��R��Srt[Z)�̳����u�TS4�ƩΥO��i�tRߘ9j�4�[�Y<�}k��K��"�u'SiR�7�f��Z�֞���5WF�USNjJ�h6�C=M?���A�o�Ԯ����y~���� ��3C��+ի�U�����׫�KN��|$zw~������khU���W��?i��m�U�S47i�����R�vujj4�k�A�1���K�:��[{�]���$r�Є�8`[�������4tu5?����v_�w��U��Ч������}��sZ�CGSQ� �L�����/eJ�uWթsU��ϯ�nƟ��t�℆����'��J�ƥ:+�K>և��V�u�/�R˭��{��[�V�У�p�������u�s����lvI��**�*t�#�o?���A-$��>ET�&魹�׫�[V��峗L�$2��X�d���Wr����D�����ɵE1p96�"��g't��#j� r�B��G��cF�l�_}jY��+B�M�+�W'���;#jȷ��
�Re�(#]1p��rX��*@f;(,yq�ī��@5k��J��0�"�9�pr ��� �����An � � $\��;EBD��� pP!U�rp%� xB��� � X!Dr��V@9� (���-6��̩.�uT*Q`t�.N�),�$bH �� 
0PLr"�X1͈��E�ܕ�$����I�}���󞿩�Ǜ?7S��fb]��m��쥧�-%ԦO��|yPE^rG������l2�~�X���
Y���H/�B^�v�)W�O�8~b����|��Û+��	ǒA��i@O�����(�ȩ.2�ɌaL
�������\��๴�t�b|���i���!9� a(]ɓ}*,�b�DNr�M���8.]��R�j�jI�L/�Kj8uGe&2�p�N�&�])�i�HӋ4Yo1샄�%���M����<�8ny�J�(X�IT�T:VR�%?�u7$y��y���j�E�iS
\��b6��
�G�
�i���K�Ki�D�*	���ό��V�/��#wX���3��xC��}�M�3i�CxM��,	��u\�[�	��Ĩ�3�O��D�r��`�+�MʔiM�'TDKPZ�,�*5�\��C��)Jr� ��҃�4D34P��vI�l.�M��
� �b�x6��n�%z�7c��HZQ�ҩ�%	ώY]3S�@y"m�X�J���髩7�;-�Sa��|��ɦ��&�<ծ��������[rf�*����+Q��pwҥM����Wx���F�_��[�*Q�M囦���>��U���8n���E<P��MJq0V�������.�F!���J��^N�,a�MRA�(~��}Jm<�aM��0�H1:S�DQ�N��b�w9�Sq��Tt����T)N ӥ�sT�ʔ��N���T�x�V)O�����rk��ܛ����j3��1k�j�O�ڡ;�S��iS,��LaP���P�W7�x�
�I8Hݓ�a&mSKR�U-�]��T��� EM��D�<���2�dT�~MҒp�i�����ɟ�E6��c��sTsi��CM�N��>�T�L+.O6��U	%sS���j:rO��J�RG�u=KZ�����{�j㪷~� 4��{�
%��8��4?�Ox>]NS�f-ݲώ'����z��)������)��xzTHq�S���^��D����_l��
��`�����N�λ��bؓ45���*�.�<��T'q�x�8�d��b��j�9Mz�ICq�f���<OY���/^��s��k��)Vn׭G<O3>�q���]*l��un-i�pl��*:լ��S1�>�5M�n�I	�W��H�H�N�x���&��v���H.*�QI�;�x,�7dy�~�F�.�j.�]N`)n�fne����j\�A֗dͺ���5cS�ԣ]U7�ۥ̳��L�Q����%:�'va�V#�&�ʶ�:Q����
�M�ڪ����ǎ�F�=44�0J�����Bt͍)�0�܊��i����T�{5)mYL�[MJ��Z���ad��o�Q�t�l�Q�����ڜZ��hT�����{*��e���YSnKV���L�ݹ�:�5;�����mB˄z)��Y,����u91���� �2�Ӧ�h�T���^�
Q�E��7����ʽZl����d�פ���5,�u�.�R�y%Z�!3	Uɮ����ֿ�?�>�Xx4�*n:�*��}m��SE*�T����J�~y|�--}U�S���6:����>�T�OJIu�J]o�zyz�%��\孧F���OV��OM��Ko���5:����o�-�J:��M,�U�ҟJN89���RJ�>�~.]%,\��+������;�>��Ɗh�s�jt���s?��5'���ҪoJ���k�����t<��X�Ί����zO�]Y���чc��eݩ*�]����!������=Hr�������ZmS6>��Z��JW�N]���%sraaG�PX�*Y�U�p��R�F�P���US n�WGUE+Sh5�(SȀ� ��7$b �� 26e�� jӂX����DXmreD�+F �T��_��*pr��٪�\�u<2j�[f��Y�$�
�J�T�-NV�IT�yG�I�UY�>�O�6h�UK�>��K�Y��t��j%y��e���ں{��-^�ͣ�;B��t� ��i��ǃT������`�N�J�y�)�4���!_��U)6垪��|� M���̟N�k�5^gK�Q����v8�3�i`xu�ژӥ5,��}̻{���:ޞ��z��ե�3'��ʣS�q�}Q�bm85������ax9i��puX2�O2k�*�+�lG�Ӧ�:�l���w�mt���X���W��ꮧW�>��i��Qx?5��Exɬ�%������T��<�h�WM�-���KZ�p��V���v�/5��V�uu���.��Q�E���u(l�[&�c���<�u'vv�]�<�\�ݙ�z+��U(�b�%ꃭ�\�U�5C�GJ�M*�M.y3�L��悦Z��?�Mr�YH���(i�d_brl 3�� "�زE��	�~�*�<`�1�-7<���J��% O�  �!�����ع A
@ȅ�~ X�r�$��E$H$+PF����
NK�h� ����5_���u�L�J�s�#� U�� ��� q�3?�:�W��;�3�,�����r=:/���*L���*�	���}O��c�ϓh͚M���_J6�b�&<_�7+t���0��v՞�\�K5����S����2�H��|���o4:[�v�Q�9<M\���|�2zؒB�$�o1� �0R0�V(X v+4Ӣ�Z�i��v��:ښ��ԧF�U��ޯS���"�n�46�qn��6��u5u5[u���"����>��+� ����ii�i���jS�m���^�׭��}~�����u�cź�����ԣo���g��ף�R���[^�N��4���Ti&�$�������m�u�걬M}���hv��jnxG��NSm�뫃R%�M[�����_U�Nm�#R1u�W#w'�eݖ�K�{M}kQ�S�>���k��Ԅ��H�Z�͎�z:��*)l�&��hi�zz�����P�T%�W��S����jiꮘG�����J�n����>����u1���� �Z�v��5������v���2��wur�G�5�J��2�4�N�!��_�)���_�t�gū'���Ե_m'��z?����Q���?���\���� pG��a!��t�ry4WrG`�3��x�E�J���z���J�M,�MER�v[��D�b����t��3ͩ�TJN}��+խ�zu�T��6��z��
�-(�x�׮��I�6߅7��g�^�4U����z?�m��4n7T�W��jI���s�����;�-�WTJ=~���{�N�O�u9/��i���z�Ͳ��ڟ�t��Q����~��~�Co����:(��+����G}N�W�T�馥�Jw�gq��ӿ���z����t�o��zn�=�*�'	E���ңZ������e&~Cs���:4� ˧�[�>~��_V��R�����z~�G[o^�5��wg�� z�ש���-:l��|���� WE�vV�j�T)>���no�t�S��~}M�~N�}��⮝-MJ��Q�}���Kإ^�OR�����5�w�vTth�C�(������=��ݯUy�>����l��^u�\��|����ƣt���wy>.��w����ׯ�;�]Ǯzn�O�E馿��|=���ƣ�m�T'��~r����� w�o�[�կ�U]�<�Nrj��,(C�b�i,V�nc�X�^��ݰ��V��&.^0I�l�K�#J�Iօ����;�S�ZO�G�=FUUT�e���<~�����(�'����j3�]������QZ���r�AR�9`��Xr�7.@F%�K���$L � ��K�@�@�r�Ax��),`�����0
F���"��G 49����� 8'( 0 ��T��DckM�)�+@i���#��K'EK��I,!$�   8�0V���`� �ď#$��D�  �Y�?��Z��9?M���D�~;ի��j��5d|9��nx-*i���W�V_��&��5��[�+�F�g����A�"�rDWn`�JiO��5�{��J���#S��/%�'7����U���|�8��]8-IBm�)na���u$vRIu0����\`	g���.��<
W|@Vw`^�q�p�JS�L�D��,�������X���B^���hL*���x��/S�ȩ�R�n��53	����~��rDҦ�SR��
��tJ�S��^n�CMD`L��#J��dI���擭�#���.[L���12�WTɚ�J"L�Ֆ#n�W����+��R(�w�$��԰�g5C���*�Dp�w|`
���F���^����N��Y�2O�}�W<��UHs(���#)���ò"jXp�`Vp�/�7ev�\0-[��R���m��Zvp�3$Q
���� ���$��;��nƱ��~�Jn_��W�Q��h���m*�Ie�b4�V"�j���::�T�UMUtjo�6���џ�a�g��eϱ:i�C6Ǘ�[f�s-�����?N�aU*!"���uEN`��<�֢�T_�")��_�֛��t���z��!]/Эc�IY+����ק����d5R�MSO��۔�subiKjSAR��mS�_�5���\wP���L����ΚSO!R��+�M��RT�4�N�v��I:my �Sj������K���01ETϱօj�J���g sTu9�F��>�d���0i(@Ji��*Sk���b��i8�*��kT��t����E��\�Q&�~�8�z)�H��v���k��Δ$��'ίԩ�Z��}OQ��g����ɚuhW����57��~?R���[��	��+����T�NUz�)ut��� mN��6�_枞��KZ��~�?'
�CV�*��<ʤ�~V��J=��]�7�S.�'*u��6�<���W�t*h_�ߖuתЊ�u.�I��<�5�Z�K�<�Z��ɟ���b�eU$�����z��UGs�ԯ�S^ꫦ�7�޵4�)<���fg����L�� ��%�{�lm%GW���V#�ud�9M44t�\��K��Yk����M��'�%NQ�&4i;�̋�^8 5(+Gb��e]_2��:��,���w��et�$ǱWh�p2��W�,��;�y�"@���y*R:@���N�.���E� 1l�"��52}0��kD�f\6� T�S+mReR�خ��*�Ip��`*^�Tǒ;Y�it�ET�~�u��j����ѡ���r�m�թ8��t�}*�B3zjr�QEm8���[V��d{��0�:�� �M��{w��0���Ċ�K�í�esT���� c����O�j��zR"�����F�/Q�i�bNv�Nd�y4��6�<�=--4�p�%BW�e�����]:�QҰs����*�^ �j���"���yf]q�T�z��S������#�����M<��t�����'�y~���V���H��52�U7�Fo�\t���ET]`�U����#�]���eb������k-��_sl�J��N�q�Q�E�Q��kG��|��m4(Ꚓ��ѧOJ�����>�#K�)��[o�'�GB�[�>R�J�
�/�+���zsZj��3OSN�mqU�qFޙ�r9�����lMm�qs�JJ�5�,��N�|�5S������I��Ϙ�r��+j�q0y�t]J�gO����ڏ�K���J����E-<I��s����,~��������I�o�����[t����8,N�$���BH�P�gX!r������,H���\X%����#6 f�1�f9��B	K�UAF:[w:*aI�H:�J��m�Z��9��u��.�K��$�+8�Γ��Q��
��&|��.�Զ���T�g����i:�����*iyP*Ӧ-�a0ۋ�r���2խ����ʢ�G%GvS)3�QL�_�U�j��B�pf/b��麑����ʫ~gcUKY$�?EC��֕Ҧ�j�lX�i)"�ۊz���F4��#��К4��dֶ�.��/��~�����o���L�~WR������5��V�IҜ��V��;ӵ]ZI�O�BM�v2���9U��C���t���,B	p�s��O��틦�~��:��-��UK�YR����͎]0�}���Kg��ҋ�\����T�8�Zb��Gv�qԢU���ɦ�`���3�T&���Q�A�0Y#��;R�W83T�r��S*NSuU�T���A�*5U-(�f�s5$@���DrH�d) r8 &8	_�i%��؈ �K�S$�}���vp&  a_   $�b@%d�Ť�̀"�9e��=��d �$ذ �EC0ð G0e�&��/ &��(� ��1�d7`?A�B�[� I��qr~� ����_���S���W�V
J]��" �Y T�
��\��s�����K�ju����C�m.�
�T��`�y}/��2��T�u,#U��w��4�	�i\n�݄�_,_��;խ&���dJ�����j�ڙd��f��X˪M8w�E�tҏN[���ss�ә��ߪx��8���˒0+�8 T=�9��5�k�8w4݀�͍EO���k���{j�*�QI�km�%��F���u��9ը۹�%�`����fJ*@�����G�R߰�����f�Z�R��>����M�kU�b�"�m~q'UQJ�zt��j����~�K�6��I�iS�t����� ���]Nuk�c�l�B�����g�i+�7F��O/v��G�����iSO�+���N���{!����~�Z�y*�+����
�L+��t�5���O�g�Y�'��=_���~�}=��_�|� ��u����~];ާz�c��#o��i�*�>]*�,(�Ga��"���� 3������~�4���ҐW��=W�^Y�G��L� ��_�� ���8&8 D���,A@f%���Y"�Vq��c��ڭǩW]T�S�D����Ѫ�	����+�V��Jk�t}4�iNOw�z};�� F�MQ�Ss8G����[k�ݭ��D���#����Z���G���P�ݵ[�-}%��+=�'�C{��t��iѨ�ud�>��Z:��Ѫ���P�)��_uP��V� �.ϟ�;�-��ԥJ���;� �:��GF��?����;�m�j�J�IB\"�JƻZ��ԛr�L�WMI��NSG]���]:��?��'����k��Q�O�5��U��jV��Ԫ��-�����+�-MG� j���o�~�����֭���:kzߦ�v��Ѧ�ӊh_�&����)�׊�m���Ϸ��9�{$��U��_�ߡ�7����v�B�Q�7���9�թ�ď��]Z��M��F�5�J���[��n��
�xm���*_���a�F���U�.�m>$���w,&�(�r5J	9@Ne�����z�����ڽ��uUH$�$kY:N��9auF�ʄL�K���g�K�H�D�"JMZn)S��!O�"��R��y	�]�ILA�=7F�muM8Y<����U_R���JG��)�ҥX�2�M
��؋��*V)+PP$���+{p�,w  d,^�   ��9�\`D !HY W� ) TNB
�dy��,,w��BȀ2��_(dY�B����Ko��t�%ʱ�t�w;SBK���kMM��C �@ )�@{��� ��l\�${� ��h�|�x$nļf�duK�UL�D0�,@��$7--6~;�� Ω�~�y�\���޹ԩ��GϪ���o�-N:��%�"M�� SxP�����*��s����xNP��5\y�O`,���|���H+ͽ�MH�_���N�)j�"{�?�fW�N�%-�)>�#�XEۄ�!�k��%Wp���>
�rGg�:�8Չ*�%�	��+U��Q�r����j@`_�'"KÐ��y/Rn8�f�tW�x@^�S�wfZ�����(�ID�N�M��8R��#S�SVle�
��˱pע��jpEU���=P�F�+�a��R�	Us���7���N�r����V2��r�$�T�n�d ��0E%fypPM��/�7�O33�
����Ya��*�D0�ڄ��S����e��;�X�Z�;`S7�V� �M��)ϐӈl	RV�y2�i5nhM���pk�X&rm��lҪ��s.�]�4�Q��	]WRW� �$����ۄ���)��b�ɺ[�`�$�E�ЪM�,蜫��Z�9�KU��:bJ�%]���u�)�S�[�����R� 4w*�nܓ��F�	<q�����I�G.��T�wG^��$tB��}=��ر�P�73�����H�Y���+8�
q`9t'���s�I8�$v^��-١�T�:��UL��Q��o�ӡ�ī�L^����M)��]-�ఓ���9yE��>�����U�#!$��3<\�WE*]�r��Ol"Ĺl����9��[��	O%���3,��$�U��\3��U5=S%�k�u�ժPf�ƞ����+ժ�=�۩]����}BMd㩿��|� i8��g	�M[���4����U.[<�-��6��79ĵҭv����U\��)���+�;P����<�[P��i,\�U�&57	~Wb�D��8�v<� �8�����i�a�ש�JJ�؝]2x�׻\�z����H��}JW��W�����u���?{��O�XN�jԧ��	�N�Z=lj}Q�joR�SGzt:j�l�U�3>�N����6�����T�ı2=�UD^r�=��_D�)�)�nlF�����w�wI�m�e>_�V�))�Je�¤�I�\_�"��3��u/!�q����V3�6�K-������/�]�!`R�D�͖�j��VW";S�I8�6��XP�K+� 3	��	+�ر�t�V*��㥈i�4X�l�X��%T�с�4���1�6�+�M�	���"�<��jT�Z���JR�t�#W�@�I:l��'wKT���0]GL��C���M�	]5<)�57J�Z�ҜI���*S�:Ӵ���2�cLyi���IK>����گUB����}?OE*���z��\Rr릧)N�ISM)@��IxD���]�J��������~_u�SW��-��Kj�>ꜞE����wRҥ���>9'��Nފ)���E6<� �:���OR�oU�O5ҭJ�V3j"^x<�qwЌ}F���ĳǫE4�8պ�n?��)��nkn�M�N���>M%�f)\���R��KJ��)�+9�6��M)Sɦ�]�	XHMH���$��uHM[b�:�`�����4i7lŠ���u�)�����P}m���<[-�Z�-J�#�U]:t%b3F������$n�GU�P�t���d�k����\��q���IB�ӟ�������)��x��E3M������T���"J�z�m�":_�q>�u�^������Jrj���̝4U4�5(T�#�Ӷ�Z[tꋯ��n������Z��/ʔi�ۗ*�1]�N��xIrrmSK�]�s�K�B�G�6��>����''�B��U����_�WD�u��^��x,��MSo$E�ȲC�@Y�r Y �N�j�X�$E#p ˩O������.}�;��k�	3pA΢,���[,
�J�,�U�cSW�pu:��:W��}n�pUO`"o��Qҝ9w:B�@.�`�>�$3-I�Mt8�{-��br��i˛���i�>޾�k��ui�,��/��MU{���*m�TpT�e�J��������~�|t���i��%�=�j뻔s�ڽ:fnTy��pe�|��m0�(��4��H�g��s�ڸ�f��Z�l�3V>�4E2̫�eU�M�2���3�JT���w�j�T��5)�K?-�]ͥ��ʪ�'���Z}T�(��x}[�TO6>���Z��6:�Ku|v?M��zjz�}�����c�RKM�
Jᣚ��Ui�Ց_Y9_�p�n�OMn�����TO���X��ڪ���w[V�p~��Wk��nvʺ_IeJ����H�WI���қh�Z�5`ܬ�t�6:�W�k�i��G�m:��IEs����-tA�nz�3�zv���xZj;P�������T&p��~�Ԫ�"8�uPш(��L�VH7��D�{	t���*�n�~���p��/q�r%7c.K�A<$8�-k��H�@<	��#�LIy��j���/L��@!!�`���T�-�\����sv��b�ǰex�`/Z)�` �T�P�#����Y� �_�����O�/�c[� H�M�-ɟ�_`#F�Ȑ* U��
���*&$OsTt�w�ߪR<�L��uTSf���W�D���$R��p��L��ɥ��*���iJ�� ����S�Cl�	p[I���+T�oc�<���t������V���̮�6�Z�A^H^ā��H�8 P����4tj�qNOv����]NǗCYhi�˹k�WU=4�+ѻ�OKMSKW>w,W]U����"Ȟ	�t��ڮ4�n|9H��}]C׭���v~��?r������:������=�oG�k]�Ҽ�����o��/�L��R�*R�r�7�jp����t�OY�}��A}�A�j�O���%��dw�Т�z�F����/�*x=Zz4��$�_Ǎi�[���8���U4i��[m�Y��R�%���j]��c��.�O^��:j�7TJ��UM4D�m�┡]�� � _:���������"[I/'<i�f��K�O�5��������͸>Cy����G���� ��z.�_��� ���� �/������+��g�~��_�����V	K����#X�g�����~Q� �o�Jz}u_��#�A_+�%I�O�N2}/�7���>d8����߀�%H�r$��G'��/T��w�V�7^�j+K1�7�&�j��U���~���j�릪����r~[_��i�ӧS��U-�>f������N����*O���+��խz8��>>��D����Y46�����iW�WjT�����͢Un[֩e����}g�}6����Q�hD��ݏ�?P�EZ�:��g��~���Un֩���>V��n���m��|���}Kw����T>�?i���K��>����������[������wh��6��҉�Ѹ�-�����v�<��&��h�APm%�� "Y|���掠�Ԇ�w>��ѵ+�u$����|);h�uuj首~�o�:J�U�Of���ʥO�5q�=���TO���^���U[�ر�s�6�9S�E?�����]Ί�X�[���Kt(����]M��n~έ:j�����ѩK��Tp�R���i�\� ��7��U/�Iu/��Z�}M:��Z�5,e�.�"��%+3!8.E�*�(V;\%{\(�������Z�VL�g�T�4��)?g�����VT���oO�q�MUR�	埰ӡQBXFz�F�ͬ #
��Vf�\�G��  � ��#�@�@�#��_%�8@!%�'�,y $w/���r� 
�{��+�
p /!HY��
�&��3(���u�BrͪU6@qZmٝ)�F� B����G HXy���'�� q` �H�Id��Ɇ��t��WZvE�AS(*y) ��!S���8�߃�ۺz�l�'�W���s..fֹx5N5+�L����S�����W/80�N2�RJ�d�@D}єۓm��^@7� ���x�L�	�W]V����E
Ȯbr��ߑ�/U�`��K-?�	Z�T��ng>	n�P��_��7%V���ֽó#v���~gq���'�1�D]��t˹�]�ƕn����]+�B��k��Vv#��A���I�X+Y�*���9D�S�!�݈�O6h�Ut��Tn��+�M�UZj�4�����9bb�8^	v�kɜ�N;�-��L@?���Ģ�J��.��*�J|I��=�3+�4�w/3SIe�[��Zd����֤�����|����UB�:�+�Sa^���N���Zu"��Ҋ��ɺkiXa�[���9��Y��:J��0�&|sد͊��"���js�;�(�x�a�Ř���4�N�����~���#�1�n@�W��/)�/U�s�XI~�D�M��wO�L�Uj�5BW��?���j#
���T���)K��ҡr&U���9MX(x5	IC(��I,���ƕ.[�k���b�I��I�a�QϦ푯�M�j��YQ�0aҤ�:U�u�e�2��T���{R��'�j"���8joX�������#���ԙ�檩��'%�T8���&��ԥ+�0��]Ϟ�a��z����=�7	�rڷ'��kȩ�a��5��j,U�s�t�w�[�Φݱ��������Hζ�s5?ԥ-�3M�G��+�t�w�kmMR�BҒm�Nn�i����V�*�KkХKx�?�*��w�NU71^�RIY��k��!+�ut�x�ũ��p��=J��.&��W��.e�S'��8�"��z�ܿ�KI��]Y8$�ېݯ�GW]O����r̫D�Dv`j��*��R�"���'p+��'+�,��M��"IԕNBp�ژk$�b�ǻn�iX����Cl�J��J�E-��O9E�_��\��_��h�ORȪ��
�n$D>�H�z��輧>f��r�aKw,$J\X%*[�MD�Jב�$�K�\�k0٨vl�X������9e�jQ�c��/���=�avʓHhOa~Kt��ƌ��-�87���-*�\҉��J˃m'�q���d<�|
T����b�t�QV��2Z����%���Cu{�EN��ԯe�E�Tu>nn�%]�X�_�t�d�ҩW�*9̸��/D�+&�S�*���EMy"ӛ���D�c��7.Ӧf$�Ӣe�{�RI��*��zU4���}-:TV�x=?O�T�RXGЫ�Z<�Q���J)����u7k��IRr���W[u5,����j/�;�o*�-}nd����Iq	9A��it�����oWڥ߃t�lHF(��c����[Ц�n�b��镀��KgӍ*ґ�T��_L;�$�r�<X�J;'8�j�I֞�OUA�iR�&ҫ�y����ᣆ���i��|�z}BJ쮤�(��n��ݣ���n%�<���z�L*��-M6�2�|ZV�o�����������Q��]�OO��Ӫ��/J�Ɨ�ji�[W��
(U*bY>�1���եF;���:R���JЎ:��tO]i�5d���ut�"**�Z�mM�0��'�S[WZ���#�?��n��KIE7g�Ss��d�i8���enҰG~~>yGE4ݹf"j�m�Զrz��vY��s�����x����L3����E6]ͭ=-�=M�Q�����k:�:��wT�E��_uV���:Rk��۞\-f�bܛu*T�:���y�uz���.������u�*8;�ӔJ?E點�4�R�$�ZuM)����R��y���=_�B�î]%{R�7N�-
̝�(Q�����*�bB}�����O��2Ĩ9�S�ԩܣ��7:���?!.�VN�tE��E�vT�����p�%I�uILŎډYd��i��,�.Yލ6�����֊s�Qd*w;�n`�S��P�C� �ծ��ZɵOSM-�6�Nx5
���J���mJZ>^��\/���i[�<��m�%��Zu58���J\IU]u>������y�k�Iڷf�<�MN��z��L6q�kiҡ5'���\ۃ�n��%A����I���4c�&�(�*U4��kO�&�1�N9k���ɕ}��MrtI�m�]T�x=Q%V��kSA�%��A�ý���~��J&ƒ��=&�i�M�GqiPϹ��U�����v�f�m�����ز����ڪ��&�sN��������V�M4�r�����n�Z�v=ސ-�b�#����@v˭��N���l��Yp}��I�[IUM�ಣ��-T�MM78?K���қp�V�z�rnT|�g�U\�Ss�۪)M;���w#�rj��-M>�95��*���n��(�5F�Ԛ��4�;ޤ�Ƶvu��rԤ��{+��s�4��{��0�V�D�Ap�
FL�k�V2Uea �@H �ˉ� [�� $T�伄�"^C�|��
��pQ7&2�Բ�#-�g�� "�L�P�,�"@��x ���@A� %�B�2��� ����Zs�g�$�����Juw��?�]�^L� ��H�i�R�t�ҋ���j�!`ލ2ٗ��(�'EE�i(�)��eP��IOr�Xj�EZ\9,ݑ�m�,���g�#jT����Ǩ�U�=�����7_���J�e�rROt�r� ���!	!@`h�v����[r��an,�3aR�O����=F����;�)9ߒF�5����]}�8�}=���J���G�v�*4���1ᣦ�t������mnqO�t4��O��i�i�ښ�=M�f�*�L���䐡'T.YKN�g�N��W�Z��ծ)��^���M�F��:kɝ��7��5�j���&]�i�P�x�zUEW>���4ϓK�s٥����sq��T�<��޾�Ԫ[�9U]	MU$�E�'Ҽ�S�}���h�̜?_��&���sS]��\%���o��N��3����mL�˶R��������ӯ�k�}���nw��Y�˭TZ���S�|���W:�噫�j��y6�����~����~_�~�����zz�� �����j��SY� �H<�v-��1t���U����?���ꭿ��mk�?m�{��9L�S%#����J�� jG��{=m� ����� h���0���OSV�F�.��)�K>���ǩn�ui�
{�;�|I}�iij�j*4h����?k��)�����z�c�U�=�����V�F�ҥ�(Rţ�/�ޥ���M:�k�����+��D���կW�/���74�4��G��z��t� �֩'�6���������UG�ҏ���_�Skk���˹��M�vT��`��}W{���]z��6<�uN[�*��(��Dmb@�J��Q��[�)n|Co�:թ�Q��S�v��jj�J[>����i��]]�mT4�I%���>��jU�cK��6�����u)��Y�X+M�uqΝ:(]4Ҿ�q��J�̐F��K��sܩw
��%.�' GKEIf%%jl!2�X�),[ g�3���KU5U*Y�T�X���F�tM,�������s�}66�"Ω��jlu���F�R�ۡ��~��'d��b���W�����1�n��veӢ��?k� ��&W�m��"�1�ޖٵ�Z�����J}3n��L�F�F���F?��ۍli��>���Sj�k�?CMҡR������Ɔ�����MDpvFd҃*ҹHj/��`���(��".PR[b�G�#�r  AX�d�e��p(@ �]���A�{�{ ���4:�Ӥ�@�~-:�;���l��Ҧ��m[*��� 	C 8� L Â6Ad�r  ��F�d������]�0�Ux*�m��D��H�$d�� ����ȩ���u��\�U���>ǩ֪mA�+P��Ϧ�ɭKsg�i�2�}��5N���K�-�쑇4�,�:�f��u4L�^:���S�J����ed�]0ᦟp1?��2X��;8��eU�F����0�����<�Hx�̯�A[U�c)�g�u^8���vA\^	nY|�����	�	ܜ̉���#��C�X�a; ��}2���7~�A6��P�g71�&�ؘ���j��R��N��8�3���%77��8g����,Eu����n�$J��F���w"�������_S�r�	��:�[���쌫5[��9�E..j�k�T5�� P2�Jl�-Y�&����X��*~ٓ��T�5d�Z���DW:��v�κ�*Կs
�5#6�-�Zg<`�2�Tz�2�b�4�����:�&*Wl���&L<�I%�4�r��7Mp�b�\+�N�m���U�%-ҭ�UO�0ף�M��R�C�NT��M:�dL]j���M�)k/!Ԟ,��Y
���^R�����N�''��7�Æi5��\�5KM��
�r����d��� �*<�Z��a���SI�&��}jRr�S��t����< ?b�~B���Դi��4�q̜j�Z��~ԸGO,��UJ�֥y9իBq)�s�׻Ԫ�u5&k��y�NM�O�^�M���8U��6|�S�b>��V8OO}[�-R�*��T�Ǜ�/���/��J�uLM�=t�i8<� I��&֚WN漳���)���p�nnD�M��Z�QU�|���tX%�q�qJ�W<��_�M.���J�s$u*,��<�Y��z��y5�맥>NoZ���y:��3.nɆ��]:a���֛'s�[��˙eޯ�9u7���ص\:��Q��D�ON.����˚��,+��]�jNƫ�B��'6�j{,�[*�"[(����4�Jy�li8����e�S�3t��5B�$�S�R��i˦�"���R�]�K�rV�%� +ԏ��҄�|�3ݵsB���zq~��M���{�YSxlԾ��fc,���>n�I��&���b��i�\�A]..���i'��;�	K��3,�Y�6��"QyĚJ� ��Q(�R�����ѪtӦ�JT@J=�E���e�`)��D�&�n�*���l\ҺV/M^?�t����W6�~ƕ)5ܸ�];��fuIbJ�YQ=�+����7Juw:,]��R�����SD]�T��F=E	�*��_�>K����s)��fy��9=J�����R��Fj�Jܞ*�2�|�^ǯ�����p��t����jO,�O-���]���$�3�	���(ޅ=Z�y&��^����uy:�7�qc˱���jR��{�MY��t�Z)��N���O��L?��K����^n���]�j��=�Q��ʭ&��c��_,��J��Jm�lӚ�M5tZ.n�����䩦�����ܻR�R9:�����CR�W'�\B�=z~������W�{4=?N�Ժ��>�^y|�4uu�t��=�OM��js��Tm�+�vT�B�5>�?�����K�t�f��OHӪ��y=uno��SF��l�p|��l�u��t�i����O�N֚Rl�N�c����^�j�����zn�M.����\��pI|X�c4��Q�:~�w)*HW�M	��A���-:g�6KZ��~:�E��5n44��u]ޮ��T'�9�'3�r=<�2O��Ww��ң�G�Л�ꖍK�0�{���y�n��"T�i`�C��_�d���'�Ңf��D��u"�~�<���S�3s������]M�*�j�CN��*M�����ԭ�I#�u>�������{57��iv<��UnkrEJɦ��8b�$�%z�ҚH�Uv��.��汝]MN��a����5	(����*��t���S�j�Qo�}�J��?�S��"�� �t��MH�SVW���U�X��>?��5U-[Yj���f:J�Oy,���i�Z\Wv�Që�T� tu�2s�I�4����K^�vE���F����(6�(E��)[I U	I�SUR��W�UN�뫬��y��㸦�����T�� cGA+��P�W3j~ ��fd��"s/���Z�r|@�X��"�Jim��4�ygO g�����[����GfZ��Px��M�쪆i�u}���U�u�9;�>�gϯRjiL�.�ܬy�4[s��\�&�Q)�tt��w���ҥ���J�i;M�#��/3J6���PҘS[V�TjUKɈ��ZN�m5j��p��l�:�b;w>���h��/N��c��~�[T�%W�T�V�DI�4�M����ʼ�(���I¹+M;� �z��kh�S�O�l���[�hG�w)}'(����ԝ�ԩ^�-�ziVk�54�d��2�K'F�Qܚ����Nޤ�W�z���R��Ͼ�iӧUu�U��`�����+��?G��Yӏ���sǯ�:ڟm)��a�?Bꦗz�8jov�jj��I���Z�����G[Yږ�g?������*S�T��_�5kb�r���z�U*�ݳ�O�$����">n��WU�UK1M���>�����I�hi�b����Kg�[�hk��OK��s��3Ҹ3]N;�i��z��7в|�k����>�\Bgĥ]��GuT����86�(�Q�G
�i��Ɋ�<�w�U0cATv����K���epp��GJ+LT�Dh#Ud���%L���i\*�p��B$d\#$*| #�y/"|@!bhd���x*P�2��M�(��(a~�E1q͋a���HV"�B�pø�� �l xǸ~B,�?�x.P,��� @R0+��",L�Dj���W��� �Q��n�}���7�Q��#��I��_`�Y��I*$v*�T��#(��V��tS�դ�߃�Nnzi�1^�U2���iiNd�*�4�R��d�� ��LT��~Y$�=�O�VU��U:U�8�jR�*���S�R9��-u&��Cd�܏7WZ�M$����=m��ѥ:�bp���;���o�����jj9������_�}}-�4��4�J'�k�W�V����ݥ_4�c��}e�۵FޝJ�%�Z�c׷z+CoTuը�^=_����Ei�]3�A��UzwU;}%�J�8�޾�z��WU�f84T#+D�Hb �� Uv���LҢ�
b�i�Z֏��)��+����t�=3'm�+�:��s�J�M�I��W�WV�JR�8�.^N�%h5[J��ˡQM�>����wry��\�>OV��4+~�M_�'�_MnS�9n�S�Iᦦ�jkSBn���z�1�i\�S�<Z���B�_Q���b��馑g��r�M=:~��yu}KF�g�|���j����Jj�m���� X�#�k��R�?Sy�]��ygK �8��գn���3�$�4�����_R9�ROɞ����z]�<��%�REV�%I[�/sR�痢O�����?�1W�k��������]��-~t��z��M�+�Ü%�e����n=��z�����+���������޶�z�գ�א�>�K� �V�MUK��<T�UU%B���JO蚵����}MM*��E_%{�G��#O�����v_�=Gx��?F��j[�>�����E����Y� ����*i�iO������������_�~ν���EKN�څ��oJt�4߽G�۪��S!S�0{�~��ݷ�u���x/U�5��(�AD�l䭚�N��R��׶��mo̝)���+�Zz:��(�����}N�z������ii&�){"ZH�����Ҽ�Oo�T^�����T�XmI5�r����QM�����U��܃??����eJ�$���
�r�. �݄�&�%V)$��i1J�JKQت��3���sMee����b��䰞 �L9e�,X����X�4Wr�J�`Ո"Ej0�P�)�#�E�{<f膻@�H��ML�+��ɨ3ؠ2�03a�p��{��0��3`XrFP � ��0y E (X�AV@R{�*l	�éX�N�WgEJA\)ҩ����T�l�)`�	�@pd   �� 	!� �d
@ؐ{�~��3$nĆ��i#�������PiR�(�N��I#D� @|���1���p��2�Iy$�^<���4q��='qiԫ����I7]ƣ��u7i9U+6ڡ��u�u#���zhr�X���(��]n]Tu)g�M����_N���u����}py�(�L��WCW2�n|CSE*S�Ǌ��U���+����D���{�9�]�M��WP�M$"��J� 5J��m~�dR�VL��$����?NH���@��6�8��wq7(��ɖ��Q%��X2���U8re֕��:��n�$���U7�Uprwh��c]]]Y�+���1Lŝ�u6��M4�����߃�M<�'��tҢ &���%K���iP!rT�b�ws*��^�5�����V�N�+���U?v�
硢�j�R��Ui����E�s6>n��U��I���p����u��ɕ-���MtU�8�̔	��{ �/�E���%�əsr�y]���<T�
���]�|�rT��v^@���ɓQ��&i/�¶KM^`.���Kk���&�$��ܕ7v�LZ�5l�T�sR��&\�j��tM5|��~93J\�i��c�{�Ңlk3�37�/��OdUu	`u5�ŋ�J�9UU*�[��Z�P�C���]]J�`�VYG����*��u8w.���j!G'7ZUd�=g�5UQwb�k���YRs�q�嫞ETLɚ���G��[�`�Z��Ǜ��6:��Q�꾩���Z�y�a9^K�I��ϰ��I��A��5
	S�W~
ҧ�,��ᓪ�"��&����F��i{���
��)��]��5� o��Y�@�E�okς��ri�j��(��+N-ܢ,^�D1rev��4�d�n���l���;�O�FVe��S6�l�e'p17�7Q��*!�\�Ho7g�l����T����
~�ȯ�LF~H�c2���R(�������b['Ry��Y�+�˹W��'�]E��͹����t��"�T�w�]&阃]0��J���W4�� ����4��cL��Z��qĕ(�QOU�9��d$��~��iVᡊ�M/�*/��uJ���\G5M��ZS���MA���7LSĖ9���#���}Yk�*2s�q�V��2u�ʚ�}h3�E-8g��or����<���O��w�.�GN����k���wx&�u^L�_(�ObhY�w#��Q9�
072U{~��<�U�T�B�rʒ��7�1֝�M8KW�J����*�+�W=���UL3�QW�z)����e}�U5ᢺZS����֪��������֥3��yt�뗆�DO2J7Z:�CI�+T��ԎV:��1U2�":�+��M���v�=����V��J�'���~�������
):S��Xd���u_S�*��$tZt�K��2��q'W��!��+u���ME�
4���V<uo���^�Z�"ee�hС9�RtV�����&�������i�t-h��{�9f+��UKR0}�M]-553����5�緩]�,�X��d]]mmj���ǡ'w�n)��3��������� �~4�WJKE��={�*\%'�S�,�)]�jp�����>�*�J�����}GZ�V\#�^��ym����>֦� B�}�����:�����[��M:m�t����Mj�l�pJh�`�Af�79�޵��w+�NQ.d�Z����]]XqO:�n���7��S�?��$nə��N��re�	ّ]S��7���\�SuD�=T(�%���cR��"�;]GN����NTg��4�U.��Ъad��jWӣVeU.�MJ�5(�cz�*��Z]�q��m6e^�j��=�4��6�GDΔ8�)��/\``�*��/Z������[��U��ʽV�9�FXo���%Y)j��ӄ�:Zj�-jv+�ʶ�������)W���@�K��S6**H5Pӱk'f:m b`���k':� b�c2�+�whJ�=Qcn�V��j�kW\'J��=5�g$=�`��S�L�Wr�C>f�9y43ER�;7'�A5S������H
�I�Q)���S���{��q��� �ѳ������j)y�=��qc�I9�:t��G�ISUg�P�Y֟�G=���tWY8����p��{����Ԣ"���S�>��jY��ԡV��p�ڽ����?�&��(��"Ǉ_�4饪�'��Q��u!����F��ұ�Z�N���ֺ�q���T�tSi���Mu�%c��Q����<�:��h�1��귔ѥS���i�uRr�y���E_�k��Q�������أ��=3E��ѳ�ɧ�TQJ�_d{jm\�UM�.�Q����	����/ˆI�"h�5	B�VD��B����f���P����:���&uz�屭*�=J������鈱�u��}��n��{�4ѮjX�^
����si��e�[5MW�q/ ui?��tv:�T��Հ�pw��'IQ�k�� <�� @Q�4���|�_9q��FA@[�@J��pNJ�-�܋�m`b6�^ @ˀ�r��'! |��ˀ)v
�w��0
�\�Y�ý��L0ӂ��I\���i�ran�� ��L�.X2��	�mǲ8~"k����~� ��dy� ~j/�?�*�`3H
rB��:i��:S������P�������ճ��6��ɗRU&�&6�:k�������jkj��N�n��J�n�u}COJ����c�r:o+�N��LY\��V���^�Z�6��u7&�,_���Aʪ��̶/�Ԏ=w��;X�v+������jէ��է�5j[=���zZ�g�SB�c�~=��L�2���=[���[���n\������M�Sk���F}�9(�";�5��@ "�T�N ޟ�������B�c��_�S�~�h�IJ�8���:�s�����?*o���صRI_��Z���t��㩺��W�?fk*kө]US� �2�|�ORs�>�
�;��uT�Qg�j^�}z����SG�[�t���>���M��!�vu���7�}-oUԩE��WU��3�P�T��9���F��
��vDuB.!�cQp��d�-7=�����P�KO�J���6��t4ګ{�U��dMW�MԒR{�މ�[�z[v�_괟���6�XЯl�:t��ӎO��u>���IҲKя��:��i�QU5�f�0����?�u���a}F�~V�ܣLxDl �7�ҫq��ҡMUԩFi��J�R꩸I)l��z7�6���I=�K��� $W��5i�zb�MM:p��.���Ϲ��}׫�=5�_��<Z� ��7�-�2KkP��e+]Q�E�"J#\;�&�R�N�����=�<�**��+��{oD���~����m����������}T�t�s�hz5
�r�^�Q��ZǛCk���(^d�J�DR���E�"xE�*J�X�Vz{͋�j�����*lX�sP��RJy	6�`�K�r-)(ʗd�"ҿSIL�R�a?b�y ʧ��pi.5�Y�b�.L	�IEʗ&����\{�+�e����T�B,cK"݀�,����@�&�.��\�"ʘ"�2���������؋&����"(H�e�EH���@@I��,�܎� 8-� �G`� D !n�؉�f�ө�)�K q�Δ�7��)a 3N�F�p�w�� rG��;�� vp$$�`_2� $�.��2�H�N��iN�V�K�/J4�����QH���(~H�� B�̇ I �K@.H$An��ѧ����VY�rܪT��55*�`v�sE6�������
��Ӫ)m����W��?���ys|�R����*VZ�Q�ܬ�*�d�T��E].Ȱ�r��=E?4�SW7Uݚɦ�lb�gF�Wf�t����ꮥ�>v�J��OY�������*��b8K+o��.�@�� ���Y[���@i+x%N ��;فn�rs�_� ��0Nŷ&Z��D�z�k���i�zU���[����ɇ[e�Zng2e�Ҍ�mēܬ�.,��LweR��!n.e{/�!Ԓ�*�����J��5M=P���Fn��-*b/�}D�B3V�NZ3e+�u���9T����3�vy��)Sd}��5*j��i��ǭ����yz5ޞ�)G�q����#���Z�&�8;�#v�u��pbm��&Z�m�RD��YD\4 ��	��Ld�k�XPF�{�]B��%%N�F��������H`�,���+;��b9"nn��MX�%�@UU��4�F���,f�n@�5��g?b�T�U+�;Qs�.�ZSdiڞ����D��L�\蒘fU�fnU,X�������*� ��wn	v��|��nZ��m�k�M�e�������+����j�qs+�o���2L\<H���I͊�9k��?��f.� ]����H���$v�b�=���"�l^<�$�%�4�$�
��I�_�M5�
����IVn:��q�S�[���$5~�d��R� ��^e�R�nN����J�"��o�5���1ҢP��n-|I���]3x4�J��LS!S�偕J�r*rm� �2�c�B�@jM];��	��G]�Tp�3JUe^��O�����(�M;\�:R�֚0�U�N��#��� ��WR��Z�]32t�R�35P�����n�-7�m�X�U320�(��:*)^�����U�K�/�[�YA­yvr�V���5�n�l"*�ꎬZ����a��8M{�	����qc��]����z���9=Z��h�nO�
ꫫ!�}�W�*��ƅ5[�S��.���-<|����!E�UE0���jmT�p�%!X�o�]��J�\�� �J#�a6o�{��@�̳Q��5^�b$�N�3i^j�2j���*a��',. 䩱Unt�Q䪛�˥Os}1� �M)�Ӵ\��T3��n1�UQUQh5F�m}֤j;����f��SJ�qV�殲����s��-Nq�*���t�3�u���z�>Z;��S��E>�ͩ7�ڼ��Οc�-Bs�����]~����%X������~�S�;�����[V�����i�1�VdxOO�-�չ���x'��w3RG甼���ǃ��?�m�[�S8�O��ԩR��t��Њ����W�:i���8� ��Ҽ-���Isbό��WꚜB��~�_J�8�x굸'N��%���uq���n��SUR��pX]�_)��S���uG)Zl�SEIc�s�S�o�X�蚥]��ٜ�M�H�m�V^I�ڻ�2�:��{�ɠ�Hȣ�ᵁJD�6�(7���2��X'�#d^�qrQWME�, =zZ��wIv<ZM,��w��zv�:*���+��҇Z�lY_�ۺ+�P�o�������⦽������p�c�y��'btԬ��T��t#<*Qe��ZT�*�E��<Ψp)UT�v�n�j�c�:
���4$��IazpGC�:�3M�_��;�J�BW:zJ�noؾL�� :�쑝E������j��m�GJe�R�Ί���Ax4�H�$Y+pX����v�Q��;d���Zi��w�IP�y�ӊS8Ո=:�7M�U:pA~�?��T�j�u5�4]�6��^��O��Jiҗ��kK��xk�L+x[�O���S��o.j:SJQJ.�KE&�M*c��Cs����R��2Hn�n�*]�t��tR��iv@J���vR�۟7s���XӦs���uҢ��rw�s�⯵�N��蚵'��⪽F�Kwk��eKm}==_�J>�;�j�(F����Z�[����Q�z*��k�=U���md�cT�m�-	�;�t�}62��宦��%q��n�w=t�<4Y�o�M7B��P.�KB��SJJw��YG*S��7țȦ�sT��	t���m.8B-0��^�InU1p�t��HjT3�J��J�<�uU��U�V��_Ѫ��G7L\���}3��۴�����U8<��5\����c��S����ٺ5ίE��Ԭ���QR��ۃI�u��cR��i���`y0e��WB��T4ʎ|+P� e�T�Zt��z��P�G�Sh��_c���:Zx"���>IU'n��#��y�n�/dc����22Y�#^E��`�Q� =�b� �h.� #��X ��,I._�/a���� ���� ���#�� �ؼ� Ԁ~H�2 �Y�,	�E 
B�����@��'�u��O�Z��=?�3��#�����TBF�|ea' �2ʼ�ɥ�)��\�l��ˎ��	X�Z�����b:����1֭^��ԓ%J���]uFlf����S`��	A� E���*�L� �������' d��bd���A�c����RM:�/'�v�*t�o��:mSZ|��w:�ԩM˲1���~�Ww����/�<��+�����x1��_I�G�O'��-:i�R^�#W����:��I�vN&����(�T/�����~j�K�p����J�ݘ�'U^:jnt4��N`�n7]T�Q	#X�,%]���z��#M	�Sp�R١��I�w�l7�M:u7[z��ʦ���7᭶����u]U�鞌"j?,�k��O��ש���.��������o�ԣhۥ7g��~�����]9�S�����>�^�z��UQ��zӳ~�k��W�zUm��T�WC����ѣյ�u+��J��/'��5���mn�Ҫ�Ss5q�iE/M�Ң�R�Bo���5V�58U?��ֿ�S���ۤ�j�Tx7^���ܪ鎊T$� ���[�i~���SR��~��[J�:����*r~g����}f�*�&O�V��}j�������}��>_��j�n>�:h_�<�eK���SS�JO�l�В��7� ٧e��R�}��(Ҧ���S�~��� �ob�=E�mKwg�3J��}�u����5��a�O۶�m���n� z��5�]	�IG��OF�oN�=*�9��?9�߉^��OcKT�=J����^���]Z��[�D�a�]��Su7v٨�2|.�`0�<�ԝ�v���*(m>`��nd��Eԭ��;�KC�44����p��v��Щ��ϣ��j�U��}�:(�ڕ<��m��.<z��Һ�� �릊)QL#b<�\���&UHT�I[$�}/�B�@�F�j�ipXS�0��5�AŊ$Ob�Z
�R�^R��(�K�A1�>��5T�d�j��X��ɦ��	E��pk�%�*���
�) ���I@o%N�J.˂�`�[ G��H�JJ\���+�x�8	sr�Ix�,b/b͠��
����$�D�@���d����Y����O�� (��P� q�9 r�� a��skMՋ��j��N�Y�:Ypte�ꨢ�PT��� 8!r�@�G�AF���� .B" $d�w��L�4T���XEw@  %���!|�` 	܀ �� vy�g���i�G���R�RAݴ��r���E����]g�U3]�U���TR��m��E�d�^��0r�J�M�^
� ��� �����J�G�O�n�T��'�7�j��f�Q�%��k���T�`�#S���p����GM:�&�+��q�؏8*WO�-�"=N\x8��kq5Lx5�n5O
��Zm����Q�ŏ+T��5�K�	K�=��/No�E�m6��%{��lX��\�e��I�[�e�DJ�'
IStԔ����b��*�`4�U89�9vv������kV�O�G��*Ffe�bBR�ςゥv�&y���ɗP�o4���Rӳ#�Űs�W���
�UU�EW�,��Z���EQ�UV%�\̕9�A-�A��iRЦ�:���G:��iꪪ�!�d+L_!v52�*�i*Y�+��AJB�V�Ȣ�Q�Di	l�TA]qc3F]��PwV	w� �ܤ�Șțp'����,�ћ`E�@g�N,�
�\L�6�[����.i5@���s����+�X�EmZ��gUS�]$�2�=��nn��tO�;�
�/Ֆ����j��fn��+�� pn����I�w���n�}A�8�$�r�,CDQ ,�j���3SK�0Kw|�ҋ��3.f$u>���J�8'&�@�b�;r��K�e�U0T��d	+����v^��i����ӥ���\hʇ������RT�7�l�j��b4�h��}�T�m�0��`:c�t���F�T�{A8Y�R�cjm�1`1N�̲���Q�RϹJ�(��X4酃j��u1$I5{�TZ!ҥt�I<���l>��
�#�TO���nKM.,��h�J�@�7ϹiI7
EI� �T��ې:�J��'U�2��:����5<)�&[���JxW9�T��տ����]ps����82�M>P5uxg%��V�vəM�W&[I�2�BV���O�/�A_%�}�%4����*P�&.�j�+���CR��Y<���#��#Q��sQ�%/S��,��+O�
2y�UK5	&�c�v&��`����TR�fo�iO��
�K:C]������9/ӌd�J\��sTt�N�DdӦ}ʔ١�
������U<�����ct�)R��[�T����5N����6Q�W�Ҕ�b3��2k�(V%Z��)�9�U3b��7_ij]+��{��I�޵M� �k�k��+��U���J<ι˹�_r䆽Zlb�g�pm�f�N�N����j��Ǖ�9*��^����֗�i��&��$�H�7/].��:�GS��5�i_�ֻ�pu��a���urU������Vcݸ�N���N�
Xu60m�ʵ����� 7��[�M�be���2��
Sha���Nd�(( ���o�,���GSe�4XSk�Wd�n�|w� �!!�%�� �J�Ky�k�ɢ+=7V
���R�:x �A�~���J��3��N�#Ω��]8V,�[੿fr���^`Q�B�����ޟ�z�i�t~Y���>��TV�n�}MnW��|��G*��:�+�IrDO���*3�d�Q$�\	�D��5UbS�ѪT��f�%�2� aҞN5���0�<�|���l�T��G����b�EJ�se�+O�Y=UWedii,�P��^�Zi��:վ�V:�%�ǯW�� W='
Է'U]��`<[��*�F�l�h����ޘNb�����`���d�)�nT��+Ji�n�iP�:�O-�i�����KMb�M]P���KJy>f���r��Jf�M�iU�莮�/�u+��X�h�U[��VܟkF��.��~���}���.����zZT���M�[j���էϹ�U�Ԣ�[�Nz��sҪ���<��MR鉋2ʏ���w=�w]*��:�iR����鮅�Eњ*}0����&�^���*�Drr��p��Л1�����`��'�%�������ҕ:��=�U2���'�`�jP����Sq�2Z$�L��W���(N%�n��a�>�ELD��R�L.Ƣ.|)4��X|H��'K��j!�6HiJ�����t���N,����J��i���P���l�S���7[OG�!��z�	�-	R��5t*�����[��a+�#_n�o�Z�<����F]�e��윒�81K�m]�U�'(=m&�r�������ME�#W-.�J'�t)��::�!��SJ%W'E��NOL(�$���'*���BL˥M��UKDg��%�8WKO��f#���  W ��U��@��B�'�S� �ŀ1hf���Xg$�bFKiB�#�y(���O	� �)0�������/(ܷ�?�?���{
_Op�O��V����W�S �b"���40
���� ��nPG�v�W� ��Ȑ� �@Q�"@�I&���K�,2�`�y4"Xb,i�$��C��&@�s���B֦�윞j"N�8�G٣qޥӘ8׼J���'̫V��������DW���M���^溦Y��� �-��A��������=�{o��{����*p����N�F��:��Gѫ��F���סU4%6�K��=l��Z��څ��6�'ڪ�NַSo���K���OὍ{:7[����bbg�zv�iN��R�詪\Cm��N�J��;a��m�z�V��C}554Ի�G�[����E����i�^�[S��}*�U4�a%c�z׮�����UU<R�������Ztj:hJ\�A��U:�z���O��kWӶZ�JUS�T�3�D��Gg辥�������U�G�s��u��ՙXt�����J���+K	�������i]{��� ӧe��V���z=����s�@��l}�w�}-M/��,����M/��m�N߹�{��oBt�4���d~y���n5z��?aF��zB�V�ҳU�󷟋��&��N��vG�k�SQ�uUS|�=9�0}}��=������� M'ˮ�MG5��o�����K��{D� �!��OSU�)���r&ێ����me�.�s���#J����B��i�jjZ�js��oF��S_ؽ�������tՎ��v�-\|����i)qS��m:tP��RF�RfuQ8��*����TI/q���#,ҥI�X�@�����\Ӕ�ӂĲ�`x#_q���f/�+B?P#H�/�K�+_nM%`�(��\�Uwt"� �-�-p٪qq̐"� bMp_؎�)]��a 3�
X��D]� �^`Gw%���~ /ऌw(�rV��O�)�+H ) P��P�
ZI��ت�+G�, 	�R| �MS�U^��R�੩�Jt[�;*RQ eiҽ�`r !Ȃ6��(C`P `
A( � %ą��� $6��@��,w,��#C�I  !̆X�!��N��2� �m�6��� �'-M֝2�z��u_ؚD����˹�uUN(W{V��z(Ӧ����ijV��u�B�nuVA]�<$^H�A�q,@6!o�M�]:n��+j��]��z��6۲G�?6�+QU���fc�*M]g��J�f��G�+)��Ұ��Y��<��Y���j��M.WZ�9�Zl�G�V�������=��'*��֭�h��H}Q�}<ͻ��y��>J��q/$S k�����!���U�ՉW�;��9=4����0��H���[�9���zj���s�E��XX�6�������I�ˡ��]e���S��t8�4��Lq�r��Ӏ���L��K�5��M�F]����mef��Cbߡb��%A���pK��T�fjr��Nr�f��k��3M.lF�@i�r�d�GbI�wˀ�:y���,`�,�-�i��f@��r�$vvB�r{��� r�d����)���Is�/��Y,��`!pT�ǒŦJd����T�E���H����$�m
z�S��F�MJ�z:aj��#H��$���z�����w�<��S6��Eu�VZ�3�aU7pZ� �%\��B� ��8�-d�zo�ҭq	� ,��̫)X����j�K�b��H\$�PELՖT�����%���:x�+�m�dZ���T䪐1J���<��N�WD8h:[X�*�b�EK���@stܵR�5�����T] 1M-���k*J�IhN|e��lUL�#�Y%����O��xT��j**v��P�Qb�Y%��4�Sr��3�-)�6�jj�݃���J$<`	7��������C�� �6��� C�w
�2P��J�X�3p#�3�Lɪ�y�P�.@\��f�v�UJ�Qg|iV��5�ڏ9-	'��s� ���kM'tQK��U�s5')�@�ҩqi�/�%|���S�-�Scʔ+��e����'L�ŋ�r�XK9�~Z���C��x6�sl�Uy����Ӣ\а!�y^4�E]�J2��š#]�0���	S	MFڽ���2���M�����'btr3J��Pn�c*Kwf�t0E�(Fj�x�:SGK��(�$�9$�cP�L��_���� \�n��$�Ʊw�j���/6F�t�D3�Ԡ�V��d0סS%�ĩ��RқO����M2�c�TU�>Lծ���<u6Բ&�2���uSkZٚ�R�<���&\�.#3.�%�5ȔGg܀��=�㑠��#Sh%J�p�`�In��ԗ��v*`?$�Ѕ�;_S	<��b��(��\E�e������g�8�b�/�$���qITڰt����Y�@_	P�ȳB�dU{ITF��E��	�X���&:m"%�$�W*EvP\Đe�p�n�a�5t��SOr+))�õ��N\�iS fx��sv���:-䉹͎�'�#J"n�J�>OM7���^O]���m�r�Sӫ�pfR��ܫ`ʿE������O�J�MJ��-WF�X���iNN=�I^��e"����ə��(I���E��N�N��#���(��ER�A�F�E\ �/!�GZ �ẻ�.�(�]�s�p=�۬í���T�-�q���=0ӽ�U4���sL):iG&w�U�Ɲ}j���^�)E+��f�`�T�X��
;62����i�\��T�gWr�$���Խ�<:�-�x>�W�&�ֽG�G���Z���4��b8<��>���w:t[�f��:����WKkB�RNyG��N���m7���(��j�g^ڴ�̤y7:�^�����۸���Oi��uUM�ϡ�U}GK���R�=5��ot�MT����T��ec����
�������m&�$J5���SM���0��BnwB��IN$��}�w-F�d}��V�-x4���UD9G��X:/^~��i�{����S rT�7��6ҋ-Z�J97�rd�*nV�Ň��If$E�3Z��q�����`�JT��95��f髒z�=^����r�<aߓi�Q�-���V!Z:]��n���1f|]�ͬ#R�c��R��v��t���F��x��(䙵P���L����y��C]��wG��I���Mt�NM5k\��Z�����զ�fd�A!u8�Ӌ\jS�κ%Aݮ�\�⮈pc��NV.y���EG0W�"�^ y��`9/� L�P x(�	�� {�A �` �I����%xZ � !�&�����W �B�� %x5��@��Ki����枵1��~� 'q��(֤��K ��4TcN0j;�{�$�@��� ���駥��_N���e��=#s��
�S�g�}7ж�)kk/��ʬG���iԨ�;ŏ�鞁��5^��ZmJo,����ѣN�m�����D��i骚�W�M\|-��m*6ν���J/WZ�?5�K��Kʱ��Xu�zF�*�S?��ש�nK��&�H(ȿ w,�dq��5�
�H �Z(z���Nji &����]:uWWjT�Z�mm
��ui�ԥR�@��4�#eB�۽J�N������}��}Mj���]U�QI�1��mZ�KJ��� J�ձ�j�t�t�J�3<A���:[=N���j瞽�>�����[�*t�[.��l
l��Ky�V�mqdp��3��Xn���Jho4��[}J�R���Q���[m�un5=O���L꾒�vξ�0yt�z{7ң�Q�M���:v���U���[�[�n4���uiг�h�ޛ�[-�������R����}C�.�CAѧ:Ϋ>��½GS��UO����z/�o�zz�/��-�u���Z��j��QS��'�[u����_R�J������
m*���� �O� ,�{?D�%Ѣ�_�[M����/�o_�;Z��Z�G��~�[��.i�� ���~.��'N֟��{��}�MS[���ذ~�����E=}:J��չg�y��k��kC�����M]MZ����o��Ű0}���]��MkN��'����թթ]U7�fm>�Sl�$��X@f�ŋ7	T�$��O�C���*(6>���%V���M1����&�����ƪ��J�����tR颙�;�+"i����jU�j��������QM(�2���3Z�J�M�R,6��m�N��j�zgܨ�6�TDT��f�R�k�!/ڿb���p�6ҕa`D�"_��ɨ
�%�Y�� �I�%���w,8ȶJ��$X�X�(/����k@��R�A�r�@;d���{�@x+W	Yq���w
l\�`',�|��R�3g��UIp ��L�~��p��� X�% Y�r9-�� ���4 �	��H�N�U\Iz*��N�4��H4��ꨦ���,؈ � !���@/x � �  
I�`	=�$�Je���9 E���*�#��d�� Ob��� L��A*Ԣ�����*�j�Wj��]nj�����T)8����#�F�4�'����)}�gji��"�("�eN}�   �&�� �5�Z��_Q�jL�J{�_�_{��tҟkqU-$� �����#V�/8"�R�EJ�U&�S���d����ծ�����%�O6�
m��x��n��é�'�R�$'t]��TT���SܩBLh����V]������̗R����igJ�X��هs�]uUf�HŪ�ӷ�j)g�8��k��XJ�zU���[$����M'���jUS���c��8d�N{\�	�� buCV29}+��E5-�/��瑦8�$ܬz���}��%�:��T��xI����J�zO/Ѵ��M����PO����}'�ΫM��'D5?����y0���פ��.�Uux=�Ӯ���9�zf�^8y�q7=�ʈ9נ�N0]���I1SGg�ڲ�ޅL��N�d��t�n�|��@e��b/�ݼ�,�E�H��X��N$+���	MGj鱇LLf	t�y,JW���0�L��0��lvb�b�x	�
���J
���ry �D�J�H L����
�Oq���9*\�c7q.�d)�+q�#K���n����r�F�Jc��M9��&����J�'Im��2Ӌ���E��m�TH�vn��˖k����+e�$����Ѓp��=n,�#�cq�dG92�!,�F�P����3�e�M%M�Mt���M+�l+����Ts��i��'6�/	!ܸ�]3�:O�r�a�2*o|�T�4վ@�*%�wK�s]?m�R���c����%k2EM�
U���vh�m������
���� �0^d	6����+�d"D���t�Ep��@���s�(Tܠ+��]̬��K��=< S�|���b�aSX	��_�^���8/��Lb�)�呹��9qi4��M����%t��J�¹;;3j��U�KW�.�S���5D�pJ�)N92��}-|���S�����Rؓ-��]RT?��G�TrT��Zt����ja�Ԕ>@�k�i�g��K�ٯLR��檛���V �)GviR� �)� ��y*W�X��M�Ҧ뱮���Zhv� EK��P�Aڝ6���(��u[��T7Jj�i*f�y-��q��k�ɷvf].$	M=ѵL�,�T�vG�J�e���|�+K<���]pa뺩�q�R��~�J�?�џ��7����g:�ry�M��,��V����wra�Zb`h��X����Sb;�X�/�|�e�*p���#�%�,V�\M�D����8�Ss|/�5Ԅý��Ui*O%�1LݑF��F�w�蠣����T���;�j��-.9�-7�+�1���&�s�9�;Se�$7(����DK
#��WWe����Bo�8V�dT&�'&m�]7 _%�i��y�p)�K�p�)�b���4�`�l�j�$j\`�$�+�"�t�I]�AU-�I)'T�,��`T��/3�9�YQ<�R����Z�g%K�"J�EY୷n	g��UX��\B��<Z������e�@�.j$� ���poN�J�j�?(d�j�t�Py��Ўʸd�u�T�Ss��v�h����۾F�]�Չ\�5+�]�j>�l�t�|��	B��ѥ]O,�-��5�tT� �������UB(����!~d�K�4a�A�Vױ�u/vWDR����{�E7Sr���u`t��6릅9;Ͱ�9�A�,M+,�Vh�^��Z�����"���R��ʪ���m�
�4�쌽e��O,�L�ujI���WrO��6�KJ�F���,n���o<ҽ��l���Ɇ�8:#�W�˩ć��f��H�42�T�J����n�3]-�@�j����w=:��'��B8�>��7�KQ$��窟W��kWV��Ҍ�����U�鯩v��m�P�i��|�+����ۧO����hm4����6o�&+��Z��SW�|]O���fϥO^���cͼ��y���]j�]-��(r��j�N���m���S�رޚg%Iv6����J�W(�=P��rf�{��V�AR��P�ҋ7��Z�L�$�8� ����/ ^�33q�<�[�\pU��B`M���9�OV�� C��&*M��4�j�H��Q��t&x��ʴ�K��2�����e�'���iJG�u�vp|�����5:K�t�݈�V=��z�sy*��ZNTd�X�0�SP
�P�N��D�#��[�j�WE^WM�s��>���T�Y�W�����v=�;�QQ*�uS��zlUZ�L�_�ͩL��Z��%zv��P{]3�p�N*��j8�R-�]��P{��	w'�m#��_,��#�G��� � E��U���br.�;�m\���=��ߒ� `�N`�Xa�4���iH,�?G�]Ɔ��x}{���=߆#�n��_Z��E|��j"�d"Kb{�}I��OQ�ԟN�.>�ὗ�tQ�]:�OVW�&��i�^�����N�.O���g~�>�4��zSR}J��-���᾽EeSX7������
���]
����W+��'O[CWSqET�QS�����~��Aj�J���Os������h�ou���i��}��;��ⅷ���T�6�������Y?\�:v4�SR�'�����-��::�+������Y*���Х����}OKo�Ӣ�����uc�z���7u�G�B�r|�]Z��z��ˉ���~$����k�t�*�y?7U]u��di2�Y9�IE��"
E�AfK�^ GcW�i�gM�:��t֗�����0�kCR�j5�� =*��
������]:���c��&}/U��:t5�t��WU2��|���M�[t�����xI�߃��Ǯ׿�� M�б9&+��;���WKs�U9pϓ���n�{QөC]6J��W�'���zv�sl����mOʗ��������z;J��gSR���M}mWի�Uu>��N���Z*�=ۏ��������� D�z:��O�v���^���{}�]?����?�u�վ������ ��o?l�S[d�k�����oPܶ���R�����z{OD�:�4S� UWl��?����kK���?����_^��UT�nY��32��~%���MJ����:����N�uT��%(ʦ�k�Y���]��UX*�H�;�m�5-�����]I�U������OF��_U�E���hh�4���F�4ޔ�h3�q�=«R�^����4����]D�Z%��JM� W	G�aRd`�\`���K�e�wv6�U7��3&����8*$x��X��*� �OcQ��c��dXr"2�%r�)v*Ri+��"[�p!c$�95���#I�#�� ��	a G%��24��	p��J�5�D��؂�)]����H��� ^`�xv�R�n8�(�D̄�"�  ��8(�M�`b��� �� @�i' w*V/ N�� C,�0�o��t]Y;ѡM9Ψu3���/t�X eQJVF� 0  �V@ ��  r �1�w,G�H� �^%k�	�"r\ $$W��2"��C�� ���� ��b� (� ��9< ��NZG
�Sr�
�=Mzi���-ML�(�K�]���jW�	����fz!+$ �j�#Qb� ��I��(�pH�[��� @-���̓]��5���qTi����m�Hnǆ�y�����i)]���MϹ,��)��K5u,�ڄ��x�x3.i��IjR��:����NS���-���j)r�s�N�Yu7����Y� ��Е��U%�*;��*��������=��<;��r��m�̷0k,���9TI�,�'�GM:ҪO~�����lv���81�:ԯ�Mr���������O^�r�Nv:Jڙ������R��2"�0GL9�j:U��2�ߐ2�N���.j]I>��{�|�����UYM�lH���p᎐3Ji��T����)�>׀$LB�s-}����B�� ���9�qK�j�mO��2�R�X���KP�̽�i� '|�$ҋO1�n��9���C����Zb!����#�ն�9H�ѫ���+K��L�Ni�)�}'��ZUa��ա�Qi�*��#�U~We��<>F��j9�*I����=.Ty<ڛy���y|�KWl���멥��s���3܏�|� DWp�F�"p.��������J�e�+�+�S`2�XF����v*]UXۣ�'gӧLS�¶�2]�#��9ɮ Sj�z4���J���j�����]�Zͼ������/�*�T��s2i�c����
��Ĥ,�6��&\���Z��P���5n`��c�-s�Jnۃr�*�R���ͣ��\�6�֔x6�ۇ%J�_"���ɵJ�����ȚP�GJm�iD��@R�n&Ee�}.�*IU0hO�f\8oح�2�ONyV5u7[�^Y%|� �&�*�J.:�Q~cUTա�Mr��HM�]Q/�p� #-u/!�h�_�s =�+WO��:����+�%W-<6��O�iI�DKlـ�����B�Դ��ڂ+�M�K�+R���"S-ܯ�d�U�i�&c�S�-�u�(�'�����^/O�sz�7�0zp� 4"U�g��^MD;�:U��3.�鹕C��6�\�:�jfM-�JR�:]1ct֔J,3��I~Wo'%SrN�����\��]�Zt��h]7ϫ[mJ9��ړ����'J�CI��y��YN�օ]��M0�H�M�y5Ɲ��ץ$�������3�̩I#m8�����;���a7�k�wd�6<�k7SSc.���^ʵ(J�9ժ��Z���g���z*֧�y2��^Q&j�����ɇUS�8�ڗ�&�:��ȉO�>�:�4��^J�������DwV3�}�#�J>=-B��K*�ӂL݅g�"��u`ʙ6�9#��kC�/UݬKa��k&��� �է������%��o�T��Q�tי	$���JW�b' gܑ,��
�!a{��6�i����L�L��]�}�N��,�\�ipA�c���i+ɥL$��&�U.bNz�;4�rb��� Z���0Թ.��D���+]�"NJ�\������^a���j��5)��2�f#� �(�D�ت��Ba��eJ-�~?r�*���-��$��J,C�|�q?����T�'b�N�PnT�
0&�2�t����LX�B�>�yD��!/؃JH�]���<�a��VnLaܳ9%�%F*��GJ�.a�� �v���禮��`�P撍��'U�0��l�wv%�{�w
�U-�Z���=GF�Iۓ��mE]	�~㤯J�4ٟl/'6�.lE���p݇� �O�4|�B�]8��mY���)�kp��KR�hV�Z��8馒B��$�R��3-��a�%ͰD�͐[���UGr��a|��H�x�Kn��o��X�V�W���]WN�sT.���J��u�ub�ү��jթ���U����Bt���I�f��+�ͳ��ޚ�E��ms�ӱ:g%G>�^|���zv�
�W��=J*UYX���R8j��8�;�aK�8�R⪝����S\z+��9�i��o���ͭ]� �v;7�T��M7�����r{5wq��>���4��7�T/���J�>]:u�V��}+�}=�ƍT�5�E*���7:}.���a!�7)�_������RF�үVZM�y���ѭ[ݕ��Ԧ�SM9;BQ���N�K��T�ԭZv��g���.�E	���,�@�Y9��`Dv�F��	� �&X�����y,8a+��I1�B�e�$�,<�i�$��L��YI�T�O�9�`�`ª�6���(��WIT�gT��d#��i��'���a���n�����rچ�:L~R�>�|�I���n�n��|�j:\E��͎I�UI�rT���IUg��T~�D�;��R�����:��Gm~����t�|���v��z|ؖ+��dƞ��d��c*�H�T�:�i3R���9g���֬r�M2�c�x6�i�x�M	�}��	d<��l$yC*� n8'�2X��2V�� H,B��,{�!� C5x5�e�p'�����e4�F����}Ϻ<>��m'���:��S[���+�+d���
��;#Q��\�/�t�}!t�uTz=Sy���J�U���Tg������Ѣ����w���{��S�ǃ8����W��lރէ�17m��]-]Ʈ����� ��
�M]t�R��5���օ��UIp��_Az�����)jg�'������[��S��K�ĕ��E�kWWSV�]m�3�J��D��HN_�$@�"�@�,
Ն}�  @X�8 T�%'�i����Q�ЯS�B���l��u{��t� ����m��}5ujS�UK��\�W�v~��޿�]�u��G��~ש����h��t�����~(�m'Oo����c�o�u�/𗁣��>�螗J��4�K������V�l�;j~�X��F��_qWV��U?,撑���?����ѥ� ���������u*��[2���+�:o%V*E�"$(*A��X)��5N�u�R�=�H�j%UQB`|�4�����e,��HѢ��j�w>���KN���������}]K�>���OC�t4Ե/��TM�y&�9ѥ�B�)v7�H�M���fd��&��~1���Ql����1���eT�T��Z�R55�v��T�X�TرH՛�Q����P#$���ةwt�T�ґ ��qr@.X�Ap��0j݄< �.P&\�8F�/��(R�]��ϸH	/��A�J!0'�W��Ut�"�Y���E���Q&=�|��sr�E�%t��x�Yb��Z�	J��G����a\.E�3]ұ�Oo]Wx�s�gM=*�wG��
(^N�X�N�ru�t��� H����#"�	�_`#�{ !A���p  7�X��`]�#eK�,�lҥ+���XJ� 7L�/�� `8$\���r� ��`2O"�y���Z��l���5,�"���J�­z�qJ5N�5)�, �?F���δ��M�۞ B�` ����H\�d",�(������
�?��-��d�pS���%�nB�EȊ�7o�E����
�M�����J�W=�)�-nk�L�M���~��/�1�%i�͈�~,mC�E�/6`Z��\j�pi�m���y5���n�2�'�����,J�V���}��ȔrTt�}����Z�#�M��x�Q&�J�T��ԡُ�����a�J��L���N���@�T8�ݾ�J�|��;�7Ō�ԯ�E}Xw:Swo�Š��뢣����)�	TE��s0țnr*�#�eҒ�#k�%7��,I5�� ,6�QU�ē�<�w����]��;["SX̹-�%O�3��_����q�p�%M,ᚘPg�|��J�������)Jotp�x��2��7h� �4�w�T�]��ҡ/�S�`&�m(��%��R�/��T'd�Ye���U�x��-	]�mM�b��ᩘ1R���c7�|Z����W�����u>�����I�u�^q��5��!�+(�Ga,��P%���`GS�W*phnm�)w6�J�2�/ �`<��N��w4�r;��Nj��ܝ���r���Ej��vQ���'U�iZ��R�e�*�X9�u�4�n��Tf`�K���	?p�	�+;�Xr�I)�w	_��Α�$z�I9�y�*�2nRmXCR�8.xJ;��r�|��%� �R��ÉI'�eJ��݋=Q��§�in���4�2��V�|���[w�i<���l����~"W��ɚl�i?�2�mܩe=ʕӆ���-�L�rUD T�\��`���m3y!)�'���J�y+].S�`�.j�«/p4�6,,��j%g&^�-����e),�*����+(1V�M�����D;6c���4��J�R�� cI0��Z���I79#���rW���rm�2�����W�:�Bt˱4pT���SD�0v�MD���]Mv(�П���4)�RW�Qƚ*i��O���feS(&����;���LҪ\2T�N�T�a1-4҈1֧���JU-R䣥��ы�I\�=t��=j����m/��uSn��*�m[�9�US�S^�����/����ʼ��ڽZ����۱����b�����N��d�U���hL+��Wy����N��_��ZbnH}��в ��c�Tj�s3k��s6#��(�K�V�.@�T�lnrE{2GSI�;�������v���R͇J�H	i�*K(%i����~�I&i���m!NI�r��r�T��p��5�D��7*̓|����hu^�7Ji4�3E/��(W�5'0�Ejb�T%�08�9s֑�R��Bm!��ї,ҥS��*�\4c�6�Ha��C�f����Sr�������J2��vLճ�p�&���9�@�6�Q��碹i���'O�8k��lT���XÌ�%�0�FiУ"M�Þ
k��
3ɮ�n��#6j9����r�HL�X�Y/J�E9� �7��ʕ���(���TCĕR�`�&�v��0�Zi�ʿ�|ri�f�L��-	�x�W��N@�S�A�ե|��Wς�ap���ފm-�R�b�h������\º�J�f@�S_�����˩*I$|+scӷ�tԺlc��J�m�jO�[�i��H����[EpE�.H*sb2� �ɫG�)rz�ɖ��p8S�E��Q�iҞ.j�����N�r��T�^B3`�B��`"0�d�Izc�]2��R�;�X��V�<�MA�$�+��D��F���/BF��2�K(T�CMpG�9�cS|Z�J������W�y^�Swv��R��cϩ�	��M#��MJ�ӑ�����s�]q��]-������=T�4��N�:i�~���k%Юp�tu�[�VM�5n��ziӤ�咎�zӣ	b�ͮ��\�l��>�����5��&�V�]4��@|�ףR���}]��RRԟ6�k��IFK����q#���0�v������U=4�X#MG�u$���� WP��bP��%M�`q�JD`��ł��@6Ie���Hl�2%!����%��&��,��<p��ur��I�@2�jK&���94�bԬa�����f�qK㱍Z:Ѿ��G�q�U&ڱ��{&�ӎ��I��km�I����mv����;��ۈg��Ъ�nV1�Y4��:_f�����`�A<�IS�0ɅRHa��t���*�t�jO��������Ԣ	��2#��*�؍(:����:���U��k����E�8��u�N�낌�J��"��� �܈rG�#����X�A��Iy, 2���3m��Uઋ e�+�.Y��J��f�RJ���1�n2|� ]� ��0��?[i�]������_9/(e_�y*`˼3DU�UiS0�RCܠH*�X�6y.G O��T��N���"�D "EFfN�;}]z�t�ꮯ�P�$I�v������T������z�lWV�S�Կ����Y���k�j��Ү��ke�Ww�q]:4�2ϩ���Ξ���.1�ۯě�iZ_��(Kj��:���
z�ҭ�uw��?gK��Ъ�%N�k���]J��g4�.&����f�ZV�Zt�\������V��U7̜T`�@b&�K�R��A�W$��Ev؉7U�������Zm݅y}�QMUa6}�ER��~��:;5�ЬM1�6����秥y>��ѩ�����L%	D�3j�㥴��K��(쨥_'&�Q�L��cIpi�ڱ��kĚ�}�Ji�,%{��_ f��-�%8$v(AR����"2�`��IrX��aI[��J
�%���X��"��#�"E�,^��1��6,��.X�YZ�	p"V29%�ňp�xG�`� Eb�I�l�K�;��eM�W#�,8G�R*V��X�Ћ�b �V	G�`�f�F���h!~@��%o�� @��eB ���k@~K@�"u���6K�+��-�U~w��(�@�ѡUQ��N�%vw�0%4SO����@(�@r�8 ��	$���R0�B�`H 	 ^&B]����I J� 	�`
�p@�  ����0N>�x ���R�2�ٚ��s��u8�?r}:�uV׸�g�ML�iӦ�A�����F�WgD�V�"�Zp�$ �~C�=������\�rX� � ;�XIx*�/�0���&�`; G��]EM-��X����r�d��U7�ţ�H������ti�Wa^�bY�;�+�Qi��,��_m���l�f�U}���b]�Tt�j&��Ź����A��p�'�^��R;���������7M��uTZ2z)lẇ�r��vWɗ3J��G~N�l�TH�f���3(��9�T��/>�R��I����U)%j>���袨� �h9�=1�2�s����n��xVli�NjɥT<�-7����K�G]?�R_�J�,A���\�S3yV���WZ���1R����Jk>K�S�s5j%L���k�����wb��`�cd�Ԙ�ܪ��OF�n��'LX*�W
�'c�~l�5OB�؎��EU9$&�Q��	#P^�i��D��J����v���4��\�v)^a255B*v���jm�i,2Ծ�$�KP��ƥ�Py�4�	�'�����i>eK7SJ�<�S�Ԣ��<��L�'L^^'K���EZmX�U��6_`��0�FJ�p��Tb�=[=J��O,��w�իZ�QB�w>��ҨI$��Y5�]]�Ӫ�8��}oS�j���|��nK*�h;��'�iC*W��E�piJ����:��`�NfMR��֣�-u]�*�Drq����ZVle\k�NN��;�%JR����J���3j�mIDy���,��2��li$�qRM#���3�u.��h$��!$��R�)4�˩4�{����Y���t���6��/��f�`�ޔ.J-*r�a��≥�p�L9t���sI�P��wJRRT��u)�XN�acV������jS��O,���#P��2�+9G:�)�.��g�����Pݑ��T߂�mUS��]4�nO"��{�e�����D<��m�/��e`�:mā>�K�몧.N�Nj��iQ��&�p��N����_��C�j$h�芕�L�M
z��)q&�/�j�]2�-4R�0t�]>݅6�,L%r�DL���Z�ܠ�O9f�DrD�M�a�$����rҺjo���Qfs�_��0ש5�#5:)�<O]����M�a�cա.�s��I[��m͝�o�v_�z^�2s�Q����9S�*��F�\��2c�	���:��I����tb{�qxyR�}�{d�ϐ���S�REw�ҾI)���	�"̹j"�AR'�I��-�T�j.�˱i�dq��F�o�
,�M;D��0��
�Y`����b�J�i��S	� � ��~��arD��Y��)ܙ]�0z3���E��^#���Q�������Z é��R�W.Q��-N�[���]�*-�9�8��kȧN�iSp9צ�L�;�BQ������5�-�����4ٗ���7h-0�H�F�lZ*m�@�D���[i�E�o'=J^P9թ7��U\܉^��e\�c�K��=4hҝ��)����zu&�$�w��J�`$�1i�j�U�-�m<p�xABO�I�W��e���НV=5~c��/<�8��a`��sm?�S��11�IrXmpiQқ�(�L˥�Tʳ-4��iva�T'˱��p��BN܆�6�J{���FzS��:\]�Ta�o�&%CNƺ%�:��e��洚r^�-�����U
-��t�NFxT�2�έU���o3~^���V���`�uK���esȵ\̏�WW#z�^I�Z�y3�jN�a�cD�M�'իk�8�&.�t�rN �-ik��Օ�k�LHT��1F����͉`�9Ņ.]�i�[I�N⚺n��؊�ޓ�R���i�4����U�Ԣ�?G��*�w�p�I^�M7|�i�i98��-� b�pZ��������$�a�Ȯ�@I�`�cJ��J�9�)GE�{�����Ҡ�ҠC3�t��#}��K D���l���@�r�+3��� H��ѥ؎���>^
����#ǫ��n��Jt��եDAG���$���;5G[���i�=e�ܤ���Ԫ���VP�}}M�mi��/ʉ� Ӣ�^�u;brλ:t覭mKR��]��W�7ҧ�Fh�n�4���h���7-A�ߧV�V�w<����OE*|�Se��j���M}O'�h����O���6�WkAH�
��)��+i<܊�p�e������(Xp��~�!�>
����H(�π$�+ܟ�Uo`�x$�����������8� ����VC�D`�|]�1R�5�b�<��>�3j��S{Mp���IV`�,�!�F�><�)b���U��W>f�h�vR�m�9ji*���wz�n⪗'�w[4ӫ�����Mޖ��Y��*�pt��t��r�&�YbF#^^ΘS��I��G����Ҽ��vJ��$j�$�E쌴�镌���v�jtð:Tw1U>CG7k��8�OW�y�(K��<��9*<MC�g(�j�A��b��Y���D'�cI�藐�W��+��8�� E<r�Zd
�2[�`Gus��?V���8.VE�g�;��_ ~���-��|������;�u���W���x��z��J�<*ȁY\I�,@���E�������@q��p^.� �j�jԯ�N�UO���!-�_i�w���ZT���cm�oc������� ��"�i�j�Wӥ�UU>)R}}����OR4W���Wꞙ�Ժ4(�G�Q��u�t>����� �^Ε^�W�Գ5[�:��ߦ��jh�:Q����q���J�8$��>���6�Q��Sߓ�ko7�:��3�JEW����ɥJW, ��eX�A&0�T;T��Iz����ں������Tة:�g��z=u9�p����}%�e�&��;-}u��n���SI���F�4��K�R��j�ˡ��J�h�R�J)�G�]���#6�
�Ѥ�Ŵ�N�R?�Ғ�܂)N�����b����J�4��齠�$�'�2V�H	$`D�V���������6�K̀,G)4����eL����� H���n^ŀ%%� �C�䯳..���ؼ"� ,	.lV��*e��-�~R@:Qc#�` �pDX�D䗒�
�DH�%�%���[L��b��>��( </�6|I�MT�#��֦���k)7F�u<A�B�87=6H{ZU��SM8El�Y$ܤ��      �!S I  �'��P2�D %�c� =���  r�H  p &nQp@/�q$��pJ��+��^�ٴ�c�z�Qd�cR���F�+ a�jj?�Z.f�'d��/$���i�`� `�"�    �T�L\ ��p��
rB�d(�
�A}Ȉ�"��1���G�?u��zTƜ6��߯�F���?7��-J�I��[�]v��y���Z�_�E��'O`���� Ck����E/�y
�&������
T�������J�c�R�w9�)�Pi*�R���j�'>�`�k�-�2p��܌�v��.��s�Sm�<���pk�Ԯ/8#��wc6��,V�T�FU�.ƢБ�)�Rp1�K�(9��GY�v������K=�����J��f��Uc��݋�l<�k��E}ԙ���jNQ~��d5���H�+�T�8E��p��*_sv7��^�Py�\S~�oJIB�%Y�U+&^[�t�ڹ��J��6�6�WSU��]ҺZ=OEM�&����ee��c���ݏzu�s���������
�.Ӭ��#�X�/ճwW��}E.�6����Ӯ�)7��s������Q+3J���ϖ�۽_��wW�ǅ��T�v%�˙<�\�.�ʈ�<��ֳ�ȴ�<��)� R�7N�1��ܞW]����kA������Q�̮p7���tJ�'��m4��r�mJ�ji<54�>�ә�+��R�c��C\�9=�P�ړ�ƭ���%cO	6ϡ�٩U�Dvg*4�'TI���L.YV�ƞ�j��yw^��CT8mD���.�5+��Ⳬ�V�uT�|��M/Wcl���Uȑ�IGr��WV2�y6��5O�N&��7F��њ�iE7��CJ���Q烥7��W-iy8Uwc��<�/��Fnf��m��(�,!�MG�/��I��bKʪӈ ��5z��Z�� P�c95
�� fou���  ���m4� �l���R�� b�Zp߱���� z�;�z�5C �Jg��"�2� T]ZP�� �Q�U)�����t�Ѐ �M5"�K��� 
UJ��N���z��p�0�U8r��������V�?���U���V��� 3�-�:� �LU/� �h�<`(���˻ S����d�%�R�GÕp5�nE,� �-���.�`�0� i�Ť*V@��Q c�r"@��T��T�
@j&�+��2 c��� 
�MNG� Ҽl�a� �M'/�]�4/J�9�)�7�� -U��i�:�� kQ���o���i��p�u3tR��@�aXT�S�SM/�P� 	Utӗ����4�4�Z9�WUJl���X
��J\� ��5wW-��L�(�V,e��SkA�� Q��Wq����VɪSut����v,M� #V��� Q�U&*ռ�G*��vJ�:�*�� �*&L˼ ����	0�^��Rn&XU3 �y�URX@j��~���u�S����`5V8�þ 25��>���z�����ڏ�iV��F�y@k���r 2%x��m�j\�t� 4�M*R �I#]1�
�@�w�R Tm � �  �@ �( � �L� �J�I�֡$��j��+�G��Mp����V�Jzg����tQ��z��$��;y����%E5*8]�Tl�kj�hK� ʹn��ӦO6����6�7�#�m���o'|� e��Eo� %ܮ� b?p ��.���Y� �E� H��` �>��@S���
�@ ;�t� �t� ��� �X�N�L;�-��jR� +��v$�\��U-��^X�nd�iթTSv�}-��V�Uju;~� U��58�Zt�vGC��:v :9��Tg� a���� #�I6�G���b8:Zx0�p
��� ��� \�� !� #ዀfy ��� x* 
�� ?K�o��Y��G�|�Y���
̓� �h� q��� �� T ��{Kg�[����tR� �� K�>����E*��������}��K�GN����v�u����)ת�d�_�#��=Kw�o�j7< iF��NJ�E�* V` ���}]f�7'���mJ��5H����+o��OS\��4������3V4ա�(� �*nٮ% J|w5� V��\�=� �Q�H ���
� ��  "K �f� .�G rL Q� ,F@  
��X J�R y 	�� v` ,r8 
 b\ * H��� .I� , @X�D\ /"�aX $�e� :Q�]g}=�K�r ���U��� �@    H  	r�   � �  �� �Up�>K1�� ��  =�         +� �Z����Uk��E YTW[��:S�JJPF��^@ r {  � � n ��� d@ $�x'�Evd )��\ 9j�4���RG���½:\8 �Y3[u��T�[�G
�UK�Ҹfg< o��/�	�
M/�@
��S�H 6�k��� ՞awˀ8n�]�:�n��|�D�$p�IՀĮQfZ��i�b]�O�� I$���@*� b� ��R� �u8
�X *�����4'SSv{�t��g�N^�Oږ�I?����|��$�@��^�[�I��І��o��Q��i��k ��~@uD	� V���{����]��Հ��k8��J5��� 3djWE�����F�t˿pز���|��f�T���J�fܠ ��윜��]���.��0f��7�`l��K���`�ªw0�\dH�M;�@����p6�M�3Z������ U�M���O�y����
```

### frontend/src/components/Auth/Login.js
Last modified: 2025-03-06T16:10:58.681Z
Size: 2.27 KB

```javascript
// frontend/src/components/Auth/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/api/v1/auth/login', { email, password });
      const token = response.data.token;
      if (!token) {
        setError('Nie udało się pobrać tokena, spróbuj ponownie.');
        return;
      }
      // Zapis tokena do localStorage
      localStorage.setItem('token', token);
      console.log('Zalogowano, token zapisany:', token);
      // Jeśli użytkownik to admin, przekieruj do panelu administratora
      if (email.toLowerCase() === 'admin@example.com') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Błąd logowania:', err);
      setError('Nieprawidłowy email lub hasło.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Logowanie</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Hasło:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            required 
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default Login;

```

### frontend/src/components/Auth/Register.js
Last modified: 2025-03-04T16:42:38.140Z
Size: 2.00 KB

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Logika rejestracji, np. wywołanie API
      navigate('/login');
    } catch (err) {
      setError('Błąd rejestracji');
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow max-w-md mx-auto">
      <h2 className="text-2xl font-heading font-bold mb-4">Rejestracja</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Imię:</label>
          <input 
            type="text" 
            name="name" 
            value={userData.name} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Hasło:</label>
          <input 
            type="password" 
            name="password" 
            value={userData.password} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-brand-blue text-white px-4 py-2 rounded-full hover:bg-blue-400 transition">
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};

export default Register;

```

### frontend/src/components/Button.js
Last modified: 2025-03-04T16:42:38.140Z
Size: 0.79 KB

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition";
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-400",
    secondary: "bg-brand-purple text-white hover:bg-purple-400",
    outline: "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
};

export default Button;

```

### frontend/src/components/Card.js
Last modified: 2025-03-04T16:42:38.140Z
Size: 0.43 KB

```javascript
// src/components/Card.js
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      {title && <h2 className="text-2xl font-heading font-bold mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;

```

### frontend/src/components/ContactFrom.js
Last modified: 2025-03-04T16:42:38.140Z
Size: 1.71 KB

```javascript
// src/components/ContactForm.js
import React, { useState } from 'react';
import { sendContactMessage } from '../api/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactMessage(formData);
      setSuccess('Wiadomość została wysłana!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSuccess('Wystąpił błąd, spróbuj ponownie.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Imię:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="border p-2 w-full" 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="border p-2 w-full" 
          required 
        />
      </div>
      <div>
        <label>Wiadomość:</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className="border p-2 w-full" 
          required 
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Wyślij
      </button>
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
};

export default ContactForm;

```

### frontend/src/components/Footer.js
Last modified: 2025-03-04T16:42:38.141Z
Size: 0.24 KB

```javascript
import React from 'react';

const Footer = () => (
  <footer className="bg-brand-dark text-white py-4 text-center">
    <p>&copy; {new Date().getFullYear()} Twoja Firma. Wszelkie prawa zastrzeżone.</p>
  </footer>
);

export default Footer;

```

### frontend/src/components/Hero.js
Last modified: 2025-03-04T16:42:38.141Z
Size: 2.18 KB

```javascript
// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroVideo from '../assets/video/hero-movie.mp4';

const Hero = () => {
  const typedElement = useRef(null);
  // Usunięto pasek stanu – nie potrzebujemy już scroll progress bar

  useEffect(() => {
    const options = {
      strings: [
        "Naprawiamy Twoje urządzenia!",
        "Telefony, tablety, dyski, pendrive'y, karty pamięci – wszystko!",
        "Twoje dane to nasza misja!"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Tło wideo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
      {/* Gradientowy overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      {/* Treść sekcji hero */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fadeInUp">
          <span ref={typedElement}></span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8 animate-fadeInUp delay-200">
          Profesjonalna naprawa urządzeń mobilnych i nośników danych – szybko, skutecznie i profesjonalnie!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="tel:666349210"
            className="bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition transform hover:scale-105"
          >
            Zadzwoń do nas
          </a>
          <a
            href="/contact"
            className="bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition transform hover:scale-105"
          >
            Formularz kontaktowy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

```

### frontend/src/components/HomeSections.js
Last modified: 2025-03-06T15:40:32.383Z
Size: 0.77 KB

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeSections = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/homepage/sections')
      .then(response => {
        setSections(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania sekcji:', error);
      });
  }, []);

  return (
    <div>
      {sections.map(section => (
        <section key={section.id} className="py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomeSections;

```

### frontend/src/components/MediaGallery.js
Last modified: 2025-03-04T16:42:38.141Z
Size: 0.88 KB

```javascript
// src/components/MediaGallery.js
import React, { useEffect, useState } from 'react';
import { fetchMedia } from '../api/api';

const MediaGallery = () => {
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const data = await fetchMedia();
        // Jeśli data nie jest tablicą, ustaw pustą tablicę lub odpowiednią wartość
        setMediaItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Błąd pobierania mediów', error);
      }
    };

    loadMedia();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {mediaItems.map((item) => (
        <div key={item.id} className="border p-2">
          <img src={item.url} alt={item.alt || 'Media'} className="w-full" />
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;

```

### frontend/src/components/Navbar.js
Last modified: 2025-03-04T16:42:38.142Z
Size: 3.89 KB

```javascript
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';  // Import obrazka

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = { root: null, threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [location]);

  // Funkcja renderująca link z podkreśleniem
  const renderLink = (to, label, isSection = false) => {
    const isActive = isSection
      ? activeSection === to.substring(2) // np. href="/#home" -> id="home"
      : location.pathname === to;
    return (
      <li className="relative">
        {isSection ? (
          <a href={to} className="text-white hover:text-gray-300 transition block py-2">
            {label}
            {isActive && (
              <span className="absolute left-0 right-0 -bottom-2 h-1 bg-brand-blue"></span>
            )}
          </a>
        ) : (
          <Link to={to} className="text-white hover:text-gray-300 transition block py-2">
            {label}
            {isActive && (
              <span className="absolute left-0 right-0 -bottom-2 h-1 bg-brand-blue"></span>
            )}
          </Link>
        )}
      </li>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-brand-dark shadow z-50">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-[4rem]" /> {/* Użycie importowanego obrazka */}
            </Link>
          </div>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            {renderLink("/#home", "Strona główna", true)}
            {renderLink("/#about", "O nas", true)}
            {renderLink("/#services", "Usługi", true)}
            {renderLink("/contact", "Kontakt")}
            {renderLink("/login", "Zaloguj")}
          </ul>
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white focus:outline-none">
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            {isMobileMenuOpen && (
              <div className="bg-brand-dark">
                <ul className="flex flex-col space-y-2 px-4 pb-4">
                  {renderLink("/#home", "Strona główna", true)}
                  {renderLink("/#about", "O nas", true)}
                  {renderLink("/#services", "Usługi", true)}
                  {renderLink("/contact", "Kontakt")}
                  {renderLink("/login", "Zaloguj")}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

```

### frontend/src/components/PostsList.js
Last modified: 2025-03-04T16:42:38.142Z
Size: 0.75 KB

```javascript
// src/components/PostsList.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/api';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Błąd pobierania postów', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;

```

### frontend/src/components/ProtectedRoute.js
Last modified: 2025-03-04T16:42:38.142Z
Size: 0.40 KB

```javascript
// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Możesz zmienić logikę uwierzytelniania według potrzeb
  const isAuthenticated = localStorage.getItem('authToken');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;

```

### frontend/src/components/ResponsiveBox.js
Last modified: 2025-03-04T16:42:38.142Z
Size: 0.32 KB

```javascript
// src/components/ResponsiveBox.js
import styled from 'styled-components';

const ResponsiveBox = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #f6f6f6;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export default ResponsiveBox;

```

### frontend/src/components/Services.js
Last modified: 2025-03-04T16:42:38.143Z
Size: 2.39 KB

```javascript
// src/components/Services.js
import React from 'react';

const servicesData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/198/198476.png", // Ikona dysku HDD/SSD
    title: "Odzyskiwanie danych z dysków HDD i SSD",
    description: "Szybka i skuteczna pomoc przy utracie danych z dysków.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1256/1256653.png", // Ikona kart pamięci
    title: "Odzyskiwanie danych z kart pamięci",
    description: "Przywracamy utracone zdjęcia i pliki z uszkodzonych lub sformatowanych kart.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/179/179405.png", // Ikona pendrive
    title: "Odzyskiwanie danych z pendrive",
    description: "Naprawa uszkodzonych pamięci USB i odzyskiwanie ważnych plików.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3642/3642489.png", // Ikona macierzy RAID
    title: "Odzyskiwanie danych z macierzy RAID",
    description: "Rozwiązania dla awarii w macierzach RAID 0,1,5 i innych.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2413/2413721.png", // Ikona telefonu – narzędzia naprawcze
    title: "Naprawa telefonów",
    description: "Usuwanie blokad, wymiana podzespołów i przywracanie danych.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2815/2815425.png", // Ikona tabletu – z narzędziami
    title: "Naprawa tabletów",
    description: "Diagnostyka i odzyskiwanie plików z uszkodzonych tabletów.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Usługi</h2>
        <p className="text-center max-w-3xl mx-auto text-lg mb-10">
          Odzyskujemy dane z dysków, kart pamięci, pendrive'ów, telefonów i tabletów. Naprawiamy również uszkodzone urządzenia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

```

### frontend/src/components/ServicesSection.js
Last modified: 2025-03-06T15:40:32.384Z
Size: 1.12 KB

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania usług:', error);
      });
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Oferowane Usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded shadow">
              {service.icon && (
                <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

```

### frontend/src/index.css
Last modified: 2025-03-04T16:42:38.143Z
Size: 0.35 KB

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Opcjonalnie: własne style globalne */
:root {
  --primary-color: #1fb6ff;
  --secondary-color: #7e5bef;
  --base-font: 'Roboto', sans-serif;
  --heading-font: 'Montserrat', sans-serif;
}

body {
  font-family: var(--base-font);
  background-color: var(--brand-gray);
  color: var(--brand-dark);
}

```

### frontend/src/index.js
Last modified: 2025-03-04T16:42:38.143Z
Size: 0.25 KB

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

### frontend/src/layouts/MainLayout.js
Last modified: 2025-03-04T16:42:38.144Z
Size: 0.41 KB

```javascript
// src/layouts/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

```

### frontend/src/pages/About.js
Last modified: 2025-03-04T16:42:38.144Z
Size: 2.33 KB

```javascript
// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white p-8 rounded shadow my-8">
      <div className="mx-auto px-4 py-8 w-3/5">
        <h2 className="text-3xl font-heading font-bold mb-6">O nas</h2>
        <p className="text-lg mb-4 leading-relaxed">
          W dzisiejszych czasach telefony komórkowe i smartfony stały się nieodłącznym elementem naszego życia.
          Zawierają one wiele cennych informacji, takich jak kontakty, zdjęcia, filmy czy dokumenty, które mogą być
          niezwykle ważne dla naszej pracy lub życia prywatnego. Niestety, zdarza się, że dane z telefonu mogą
          zostać utracone w wyniku awarii sprzętu, przypadkowego usunięcia, błędów systemowych lub ataków wirusowych.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          W takich sytuacjach warto skorzystać z usług profesjonalnej firmy zajmującej się odzyskiwaniem danych z telefonów.
          Nasza firma specjalizuje się w odzyskiwaniu danych z urządzeń mobilnych różnych marek i modeli.
          Dysponujemy najnowocześniejszym sprzętem i oprogramowaniem, dzięki czemu możemy odzyskać nawet te dane, 
          które uważano za utracone na zawsze.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Oferujemy kompleksowe usługi odzyskiwania danych, w tym:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 leading-relaxed">
          <li>Odzyskiwanie danych z telefonów uszkodzonych mechanicznie lub elektronicznie</li>
          <li>Odzyskiwanie danych z telefonów po zalaniu</li>
          <li>Odzyskiwanie danych po przypadkowym usunięciu lub formatowaniu pamięci telefonu</li>
          <li>Odzyskiwanie danych z telefonów z zablokowanym systemem operacyjnym lub hasłem</li>
        </ul>
        <p className="text-lg leading-relaxed">
          W naszej pracy stosujemy wyłącznie sprawdzone metody odzyskiwania danych oraz gwarantujemy pełną poufność i bezpieczeństwo
          przetwarzanych informacji. Oferujemy także konkurencyjne ceny oraz szybki czas realizacji usługi, co sprawia, że jesteśmy 
          idealnym wyborem dla osób, które potrzebują szybkiego i skutecznego odzyskania danych z telefonu.
        </p>
      </div>
    </section>
  );
};

export default About;

```

### frontend/src/pages/Contact.js
Last modified: 2025-03-04T16:42:38.144Z
Size: 0.34 KB

```javascript
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white p-8 rounded shadow">
      <h2 className="text-3xl font-heading font-bold mb-4">Kontakt</h2>
      <p className="text-lg">
        Formularz kontaktowy lub dane kontaktowe mogą się tu znaleźć.
      </p>
    </section>
  );
};

export default Contact;

```

### frontend/src/pages/Home.js
Last modified: 2025-03-06T15:40:32.385Z
Size: 0.91 KB

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServicesSection from '../components/ServicesSection';
import HomeSections from '../components/HomeSections';

const Home = () => {
  const [homepageData, setHomepageData] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/homepage')
      .then(response => {
        setHomepageData(response.data.homepage);
      })
      .catch(error => {
        console.error('Błąd pobierania strony głównej:', error);
      });
  }, []);

  return (
    <div>
      {homepageData && (
        <>
          <section className="hero">
            <h1 className="text-4xl font-bold">{homepageData.heroTitle}</h1>
            <p>{homepageData.heroSubtitle}</p>
            {/* Inne elementy sekcji hero */}
          </section>
          <ServicesSection />
          <HomeSections />
        </>
      )}
    </div>
  );
};

export default Home;

```

### frontend/src/reportWebVitals.js
Last modified: 2025-03-04T16:42:38.145Z
Size: 0.35 KB

```javascript
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

### frontend/src/setupTests.js
Last modified: 2025-03-04T16:42:38.145Z
Size: 0.24 KB

```javascript
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

### frontend/tailwind.config.js
Last modified: 2025-03-04T16:42:38.145Z
Size: 0.63 KB

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        'brand-dark': '#1a202c',
        'brand-blue': '#1fb6ff',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

```

### package.json
Last modified: 2025-03-04T19:11:11.255Z
Size: 0.31 KB

```json
{
    "scripts": {
        "start": "concurrently \"npm run start:backend\" \"npm run start:frontend\"",
        "start:backend": "cd backend && npm start",
        "start:frontend": "cd frontend && npm start"
    },
    "devDependencies": {
        "concurrently": "^9.1.2",
        "tailwindcss": "^3.3.3"
    }
}

```

### project-export.md
Last modified: 2025-03-06T15:53:05.589Z
Size: 738.80 KB

```markdown
# Project Export

## Project Structure

```
📁 .github
  📁 workflows
    📄 cicd.yml
📁 backend
  📁 config
    📁 env
      📄 development.js
      📄 production.js
      📄 test.js
    📄 cache.config.js
    📄 config.json
    📄 db.config.js
    📄 email.config.js
    📄 passport.config.js
    📄 stripe.config.js
    📄 swagger.js
    📄 swagger.yaml
  📁 controllers
    📄 authController.js
    📄 contactController.js
    📄 emailController.js
    📄 homePageController.js
    📄 homeSectionController.js
    📄 mediaController.js
    📄 menuController.js
    📄 pageController.js
    📄 paymentController.js
    📄 postController.js
    📄 seoController.js
    📄 serviceController.js
    📄 userController.js
  📁 middleware
    📄 authMiddleware.js
    📄 cacheMiddleware.js
    📄 errorHandler.js
    📄 validateMedia.js
    📄 validateMenu.js
    📄 validatePage.js
    📄 validatePost.js
    📄 validateRegister.js
    📄 validateSeo.js
  📁 migrations
    📄 20250206-create-pages.js
    📄 20250206231514-create-users-table.js
    📄 20250206231516-create-posts-table.js
    📄 20250206231517-create-seo-table.js
    📄 20250206231518-create-menus-table.js
    📄 20250301-create-services.js
    📄 20250302-create-home-sections.js
  📁 models
    📄 Contact.js
    📄 Homepage.js
    📄 HomeSection.js
    📄 index.js
    📄 Media.js
    📄 Menu.js
    📄 Page.js
    📄 Post.js
    📄 Seo.js
    📄 Service.js
    📄 User.js
  📁 routes
    📁 v1
      📄 adminRoutes.js
      📄 authRoutes.js
      📄 contactRoutes.js
      📄 emailRoutes.js
      📄 homepageRoutes.js
      📄 homeSectionRoutes.js
      📄 mediaRoutes.js
      📄 menuRoutes.js
      📄 pageRoutes.js
      📄 paymentRoutes.js
      📄 postsRoutes.js
      📄 protectedRoutes.js
      📄 seoRoutes.js
      📄 serviceRoutes.js
      📄 usersRoutes.js
    📄 index.js
  📁 scripts
    📄 backup.sh
    📄 restore.sh
  📁 seeders
  📁 tests
    📄 admin.test.js
    📄 auth.test.js
    📄 contact.test.js
    📄 email.test.js
    📄 homepage.test.js
    📄 media.delete.test.js
    📄 media.test.js
    📄 media.upload.test.js
    📄 menu.test.js
    📄 models.test.js
    📄 page.test.js
    📄 post.test.js
    📄 seo.test.js
    📄 user.test.js
  📄 .gitignore
  📄 index.js
  📄 jest.config.js
  📄 jest.global-setup.js
  📄 jest.global-teardown.js
  📄 package.json
  📄 redisClient.js
  📄 server.js
📁 frontend
  📁 public
    📄 index.html
    📄 manifest.json
    📄 robots.txt
  📁 src
    📁 admin
      📄 AdminFooter.js
      📄 AdminHeader.js
      📄 AdminLayout.js
      📄 AdminSidebar.js
      📄 Dashboard.js
      📄 EditContent.js
      📄 EditHomepage.js
      📄 ManageHomeSections.js
    📁 api
      📄 api.js
    📁 assets
      📁 images
        📁 about
          📄 img1
        📁 services
        📁 social
      📁 video
    📁 components
      📁 Auth
        📄 Login.js
        📄 Register.js
      📄 Button.js
      📄 Card.js
      📄 ContactFrom.js
      📄 Footer.js
      📄 Hero.js
      📄 HomeSections.js
      📄 MediaGallery.js
      📄 Navbar.js
      📄 PostsList.js
      📄 ProtectedRoute.js
      📄 ResponsiveBox.js
      📄 Services.js
      📄 ServicesSection.js
    📁 layouts
      📄 MainLayout.js
    📁 pages
      📄 About.js
      📄 Contact.js
      📄 Home.js
    📄 App.css
    📄 App.js
    📄 App.test.js
    📄 index.css
    📄 index.js
    📄 reportWebVitals.js
    📄 setupTests.js
  📄 .gitignore
  📄 package.json
  📄 postcss.config.js
  📄 README.md
  📄 tailwind.config.js
📄 .gitignore
📄 package.json
📄 README.md
```

## Files

### .github/workflows/cicd.yml
Last modified: 2025-03-04T16:42:38.099Z
Size: 1.10 KB

```yaml
name: CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      # Jeśli Twoja aplikacja wymaga kompilacji/budowania, np. transpile ES6, uruchom poniższy krok:
      - name: Build application
        run: npm run build

      - name: Deploy to Production
        run: echo "Deploying to production..."
        # Tutaj możesz dodać kroki wdrożeniowe, np. wysyłkę plików przez scp, użycie Heroku CLI, itp.

```

### .gitignore
Last modified: 2025-03-04T16:42:38.100Z
Size: 0.65 KB

```
# 📌 Ignorowanie folderów zależności i buildów
node_modules/
.env
.env.local
.env.development
.env.production
.env.test
npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json

# 📌 Ignorowanie logów i plików tymczasowych
logs/
*.log
logs/*.log
debug.log
nohup.out

# 📌 Ignorowanie plików edytora
.vscode/
.idea/
*.swp
*.swo
*.swn

# 📌 Ignorowanie danych sesji i cache
sessions/
cache/
tmp/

# 📌 Ignorowanie migracji lokalnych (jeśli używasz Sequelize)
migrations/
seeders/

# 📌 Ignorowanie plików multimedialnych (opcjonalnie)
uploads/
public/uploads/

# 📌 Ignorowanie plików Docker (jeśli używasz)
docker-compose.override.yml

```

### README.md
Last modified: 2025-03-06T15:45:51.936Z
Size: 0.00 KB

```markdown

```

### backend/.gitignore
Last modified: 2025-03-05T04:08:32.371Z
Size: 0.57 KB

```
# 📌 Ignorowanie folderów zależności i buildów
node_modules/
.env
.env.local
.env.development
.env.production
.env.test
npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json

# 📌 Ignorowanie logów i plików tymczasowych
logs/
*.log
logs/*.log
debug.log
nohup.out

# 📌 Ignorowanie plików edytora
.vscode/
.idea/
*.swp
*.swo
*.swn

# 📌 Ignorowanie danych sesji i cache
sessions/
cache/
tmp/

# 📌 Ignorowanie plików multimedialnych (opcjonalnie)
uploads/
public/uploads/

# 📌 Ignorowanie plików Docker (jeśli używasz)
docker-compose.override.yml

```

### backend/config/cache.config.js
Last modified: 2025-03-04T16:42:38.100Z
Size: 0.24 KB

```javascript
const redis = require('redis');

const client = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

client.on('error', (err) => console.error('Redis error:', err));

client.connect();

module.exports = client;

```

### backend/config/config.json
Last modified: 2025-03-04T16:42:38.100Z
Size: 0.53 KB

```json
{
    "development": {
      "username": "mratuj",
      "password": "MaksOla2020",
      "database": "ratujemy_dane_dev",
      "host": "localhost",
      "dialect": "postgres"
    },
    "test": {
      "username": "mratuj",
      "password": "MaksOla2020",
      "database": "ratujemy_dane_test",
      "host": "localhost",
      "dialect": "postgres"
    },
    "production": {
      "username": "mratuj",
      "password": "MaksOla2020",
      "database": "ratujemy_dane",
      "host": "localhost",
      "dialect": "postgres"
    }
  }
  
```

### backend/config/db.config.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 0.48 KB

```javascript
// backend/config/db.config.js
const { Sequelize } = require('sequelize');
const currentEnv = process.env.NODE_ENV || 'development';
const config = require(`./env/${currentEnv}`);

// Tworzymy instancję Sequelize na podstawie pliku env/ (development.js, production.js, test.js)
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: 'postgres',
  port: config.DB_PORT || 5432,
  logging: false,
});

module.exports = sequelize;

```

### backend/config/email.config.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 1.07 KB

```javascript
// backend/utils/sendEmail.js
const nodemailer = require('nodemailer');
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/env/${env}`);

if (env === 'test') {
  // W środowisku testowym zwracamy symulowaną odpowiedź, bez nawiązywania połączenia SMTP.
  module.exports = async function sendEmail(options) {
    console.log("Test environment: Symulacja wysyłki emaila", options);
    return Promise.resolve({ message: "Email wysłany" });
  };
} else {
  // W środowisku innym niż test tworzymy rzeczywisty transporter
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: true, // true dla portu 465, false dla innych
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASSWORD
    }
  });

  module.exports = async function sendEmail(options) {
    const mailOptions = {
      from: config.EMAIL_SENDER,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html
    };
    return transporter.sendMail(mailOptions);
  };
}

```

### backend/config/env/development.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 1.05 KB

```javascript
module.exports = {
    DB_NAME: 'ratujemy_dane_dev',
    DB_USER: 'mratuj',
    DB_PASSWORD: 'MaksOla2020', // Hasło bez znaków specjalnych, na próbę
    DB_HOST: 'localhost',
    DB_PORT: 5432,
    JWT_SECRET: 'd2be91e25c0866ac02c616f6d60bef14605441a12fc08ef55b6113364899cbf87314c955c27469d2bf2c3429b7237093e5d6ce9af7ca6d8173739b07a549dc92b4619b0d86b0510097c1bd755055961cc10bfb2d4eacf572d2287ee6f6f57e1c494e42c6ed5b60c24c2cbbe8b1b57056eeb5ac5fff6644137831959346993961f1da4b1ac2e0c32c35f200aa286a19621bfa61b964c1b63231e1df6dd9b79cff3681a9582d8724960906d76090f7a995bba702a04bf2f8614a44355e2c61a44c21a725e412e4b41a5b1e0ac01acc8eb27297b4fd0a4b4429c4fb5450b8af1b8f49a2faba15b6a7af195310f21bd20057b22c0f2d228476b636f403a82df30879',
    REDIS_URL: 'redis://localhost:6379',
    PORT: 4000,
    SMTP_HOST: 'ssl0.ovh.net',  // Jeśli OVH → zmień na 'ssl0.ovh.net'
    SMTP_PORT: 465,             // Można użyć 465 dla SSL
    SMTP_USER: 'biuro@ratujemydane.pl',
    SMTP_PASSWORD: 'Borch34ti@',
    EMAIL_SENDER: 'biuro@ratujemydane.pl'  // Twój e-mail firmowy
  };
  
```

### backend/config/env/production.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 0.28 KB

```javascript
module.exports = {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS_URL: process.env.REDIS_URL,
    PORT: process.env.PORT || 4000
  };
  
```

### backend/config/env/test.js
Last modified: 2025-03-04T16:42:38.101Z
Size: 0.72 KB

```javascript
module.exports = {
    DB_NAME: 'ratujemy_dane_test',
    DB_USER: 'mratuj',
    DB_PASSWORD: 'MaksOla2020',
    DB_HOST: 'localhost',
    JWT_SECRET: 'd2be91e25c0866ac02c616f6d60bef14605441a12fc08ef55b6113364899cbf87314c955c27469d2bf2c3429b7237093e5d6ce9af7ca6d8173739b07a549dc92b4619b0d86b0510097c1bd755055961cc10bfb2d4eacf572d2287ee6f6f57e1c494e42c6ed5b60c24c2cbbe8b1b57056eeb5ac5fff6644137831959346993961f1da4b1ac2e0c32c35f200aa286a19621bfa61b964c1b63231e1df6dd9b79cff3681a9582d8724960906d76090f7a995bba702a04bf2f8614a44355e2c61a44c21a725e412e4b41a5b1e0ac01acc8eb27297b4fd0a4b4429c4fb5450b8af1b8f49a2faba15b6a7af195310f21bd20057b22c0f2d228476b636f403a82df30879',
    REDIS_URL: 'redis://localhost:6379',
    PORT: 4001
  
  };
  
```

### backend/config/passport.config.js
Last modified: 2025-03-04T16:42:38.102Z
Size: 1.31 KB

```javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ where: { googleId: profile.id } });
      if (!user) {
        user = await User.create({
          googleId: profile.id,
          email: profile.emails[0].value,
        });
      }
      return done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/api/auth/facebook/callback',
      profileFields: ['id', 'emails', 'name'],
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ where: { facebookId: profile.id } });
      if (!user) {
        user = await User.create({
          facebookId: profile.id,
          email: profile.emails[0].value,
        });
      }
      return done(null, user);
    }
  )
);

module.exports = passport;

```

### backend/config/stripe.config.js
Last modified: 2025-03-04T16:42:38.102Z
Size: 0.12 KB

```javascript
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = stripe;

```

### backend/config/swagger.js
Last modified: 2025-03-04T16:42:38.102Z
Size: 0.69 KB

```javascript
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

```

### backend/config/swagger.yaml
Last modified: 2025-03-04T16:42:38.102Z
Size: 6.11 KB

```yaml
openapi: 3.0.0
info:
  title: API Dokumentacja - Ratujemy Dane
  version: '1.0.0'
  description: Dokumentacja API dla projektu Ratujemy Dane
servers:
  - url: http://localhost:4000/api/v1
    description: Środowisko deweloperskie
paths:
  /auth/register:
    post:
      summary: Rejestracja użytkownika
      description: Rejestruje nowego użytkownika.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - email
                - password
                - confirmPassword
              properties:
                email:
                  type: string
                  example: test@example.com
                password:
                  type: string
                  example: secret123
                confirmPassword:
                  type: string
                  example: secret123
      responses:
        '201':
          description: Użytkownik zarejestrowany.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Użytkownik zarejestrowany.
        '400':
          description: Błąd walidacji.
  /auth/login:
    post:
      summary: Logowanie użytkownika
      description: Umożliwia zalogowanie użytkownika i zwraca token JWT.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - email
                - password
              properties:
                email:
                  type: string
                  example: test@example.com
                password:
                  type: string
                  example: secret123
      responses:
        '200':
          description: Token JWT.
          content:
            application/json:
              schema:
                type: object
                properties:
                  token:
                    type: string
                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
        '401':
          description: Nieprawidłowe dane logowania.
  # Dodaj tutaj inne endpointy, np. /user/profile, /media, /menu, /seo, /page itd.
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
          example: 1
        email:
          type: string
          example: test@example.com
        role:
          type: string
          example: user
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
    Media:
      type: object
      properties:
        id:
          type: integer
          example: 1
        fileName:
          type: string
          example: uploaded.jpg
        originalName:
          type: string
          example: original_uploaded.jpg
        type:
          type: string
          example: image/jpeg
        size:
          type: integer
          example: 3000
        url:
          type: string
          example: /uploads/uploaded.jpg
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
    Menu:
      type: object
      properties:
        id:
          type: integer
          example: 1
        title:
          type: string
          example: Home
        slug:
          type: string
          example: home
        link:
          type: string
          example: /home
        label:
          type: string
          example: Start
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
    Seo:
      type: object
      properties:
        id:
          type: integer
          example: 1
        pageId:
          type: integer
          example: 1
        title:
          type: string
          example: SEO Title
        description:
          type: string
          example: SEO description for the page
        keywords:
          type: string
          example: seo, test
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
    Page:
      type: object
      properties:
        id:
          type: integer
          example: 1
        title:
          type: string
          example: About Us
        slug:
          type: string
          example: about-us
        content:
          type: string
          example: Treść strony About Us
        status:
          type: string
          enum: [draft, published]
          example: draft
        createdAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
        updatedAt:
          type: string
          format: date-time
          example: '2025-02-09T10:00:00Z'
components:
  schemas:
    Contact:
      type: object
      properties:
        id:
          type: integer
          example: 1
        firstName:
          type: string
          example: "Jan"
        lastName:
          type: string
          example: "Kowalski"
        phone:
          type: string
          example: "123456789"
        email:
          type: string
          example: "jan.kowalski@example.com"
        situationDescription:
          type: string
          example: "Mój telefon nie włącza się."
        deviceType:
          type: string
          enum: ["Pendrive/Karta Flash", "Dysk HDD/SSD", "Telefon", "Tablet"]
          example: "Telefon"
        createdAt:
          type: string
          format: date-time
          example: "2025-02-09T10:00:00Z"
        updatedAt:
          type: string
          format: date-time
          example: "2025-02-09T10:00:00Z"

```

### backend/controllers/authController.js
Last modified: 2025-03-04T16:42:38.103Z
Size: 2.65 KB

```javascript
// controllers/authController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/env/${env}`);
const validator = require('validator');

exports.register = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Niepoprawny adres e-mail' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Hasło musi mieć min. 6 znaków' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Hasła nie pasują do siebie' });
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Użytkownik już istnieje' });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ email, passwordHash });
    return res.status(201).json({ message: 'Użytkownik zarejestrowany.' });
  } catch (error) {
    console.error('Błąd rejestracji:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'E-mail i hasło są wymagane' });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Nieprawidłowe dane logowania' });
    }
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ error: 'Nieprawidłowe hasło' });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, config.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Błąd logowania:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // Zakładamy, że middleware authMiddleware ustawia req.user (z tokena)
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'Użytkownik nie istnieje' });
    }
    await user.destroy();
    return res.status(200).json({ message: 'Użytkownik usunięty.' });
  } catch (error) {
    console.error('Błąd usuwania użytkownika:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

```

### backend/controllers/contactController.js
Last modified: 2025-03-04T16:42:38.103Z
Size: 4.42 KB

```javascript
const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const config = require('../config/env/development');
const Contact = require('../models/Contact');

// Funkcja generująca PDF na podstawie danych formularza
function generatePdf(formData, outputPath) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const stream = fs.createWriteStream(outputPath);
      
      doc.pipe(stream);
      doc.fontSize(16).text('Formularz Kontaktowy', { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(`Imię: ${formData.firstName}`);
      doc.text(`Nazwisko: ${formData.lastName}`);
      doc.text(`Telefon: ${formData.phone}`);
      doc.text(`E-mail: ${formData.email || 'Brak'}`);
      doc.moveDown();
      doc.text(`Opis sytuacji:`);
      doc.text(formData.situationDescription, { indent: 20 });
      doc.moveDown();
      doc.text(`Typ urządzenia: ${formData.deviceType}`);
      
      doc.end();
      
      stream.on('finish', () => resolve(outputPath));
      stream.on('error', reject);
    } catch (error) {
      reject(error);
    }
  });
}

// Konfiguracja transportera nodemailer
// Zakładamy, że transporter został zainicjowany globalnie lub w podobny sposób – poniżej przykład konfiguracji,
// który w środowisku testowym (NODE_ENV === 'test') wykorzystuje Ethereal.
let transporterPromise;
if (process.env.NODE_ENV === 'test') {
  transporterPromise = nodemailer.createTestAccount().then(testAccount => {
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
    return transporter;
  }).catch(err => {
    console.error('Błąd przy tworzeniu konta testowego:', err);
    throw err;
  });
} else {
  transporterPromise = Promise.resolve(
    nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: true,
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD
      }
    })
  );
}

exports.submitContactForm = async (req, res, next) => {
  try {
    const { firstName, lastName, phone, email, situationDescription, deviceType } = req.body;
    
    if (!firstName || !lastName || !phone || !situationDescription || !deviceType) {
      return res.status(400).json({ error: 'Wszystkie pola oprócz e-maila są wymagane' });
    }
    
    // Zapisujemy dane formularza w bazie danych
    const contactRecord = await Contact.create({ firstName, lastName, phone, email, situationDescription, deviceType });
    
    // Ścieżka do tymczasowego pliku PDF – upewnij się, że folder "uploads" istnieje
    const pdfPath = path.join(__dirname, '..', 'uploads', `contact_${Date.now()}.pdf`);
    
    // Generujemy PDF z danymi formularza
    await generatePdf({ firstName, lastName, phone, email, situationDescription, deviceType }, pdfPath);
    
    const transporter = await transporterPromise;
    
    // Przygotowujemy wiadomość e-mail do administratora z załączonym PDF-em
    const adminMailOptions = {
      from: config.EMAIL_SENDER,
      to: 'pat2382@gmail.com',
      subject: 'Nowy formularz kontaktowy',
      text: 'W załączniku znajdziesz dane z formularza kontaktowego.',
      attachments: [
        {
          filename: path.basename(pdfPath),
          path: pdfPath
        }
      ]
    };
    await transporter.sendMail(adminMailOptions);
    
    // W środowisku testowym pomijamy wysyłkę potwierdzenia dla klienta, aby uniknąć błędów związanych z odbiorcą
    if (email && process.env.NODE_ENV !== 'test') {
      const confirmationMailOptions = {
        from: config.EMAIL_SENDER,
        to: email,
        subject: 'Potwierdzenie przyjęcia formularza kontaktowego',
        text: 'Dziękujemy za kontakt. Otrzymaliśmy Twoje zgłoszenie i wkrótce się odezwiemy.'
      };
      await transporter.sendMail(confirmationMailOptions);
    }
    
    // Opcjonalnie usuwamy tymczasowy plik PDF
    fs.unlink(pdfPath, (err) => {
      if (err) console.error('Błąd usuwania pliku PDF:', err);
    });
    
    return res.status(200).json({ message: 'Formularz wysłany, dziękujemy za kontakt.', contact: contactRecord });
  } catch (error) {
    console.error('Błąd obsługi formularza kontaktowego:', error);
    next(error);
  }
};

```

### backend/controllers/emailController.js
Last modified: 2025-03-04T16:42:38.103Z
Size: 2.00 KB

```javascript
const nodemailer = require('nodemailer');
const config = require('../config/env/development');

let transporterPromise;

if (process.env.NODE_ENV === 'test') {
  // W środowisku testowym używamy Ethereal
  transporterPromise = nodemailer.createTestAccount().then(testAccount => {
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
    // W środowisku testowym nie logujemy, aby nie wywoływać problemów
    return transporter;
  }).catch(err => {
    console.error('Błąd przy tworzeniu konta testowego:', err);
    throw err;
  });
} else {
  // W innych środowiskach korzystamy z konfiguracji z pliku config
  transporterPromise = Promise.resolve(
    nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: true, // np. dla portu 465
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD
      }
    })
  );
}

exports.sendTestEmail = async (req, res, next) => {
  try {
    const transporter = await transporterPromise;
    const payload = req.body; // Oczekujemy, że payload zawiera: to, subject, text

    const info = await transporter.sendMail({
      from: config.EMAIL_SENDER,
      to: payload.to,
      subject: payload.subject,
      text: payload.text
    });

    if (process.env.NODE_ENV === 'test') {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      // W środowisku testowym pomijamy console.log, aby nie logować po zakończeniu testów
      return res.status(200).json({ message: 'Email wysłany (testowy)', previewUrl });
    }

    // W środowisku produkcyjnym/deweloperskim możemy logować, jeśli to potrzebne:
    console.log('Email wysłany:', info);
    return res.status(200).json({ message: 'Email wysłany', info });
  } catch (error) {
    console.error('Błąd wysyłki emaila:', error);
    next(error);
  }
};

```

### backend/controllers/homePageController.js
Last modified: 2025-03-06T15:40:32.375Z
Size: 0.52 KB

```javascript
// backend/controllers/homepageController.js
const Homepage = require('../models/Homepage');

exports.getHomepage = async (req, res) => {
  try {
    const homepage = await Homepage.findOne();
    if (!homepage) {
      return res.status(404).json({ message: 'Strona główna nie została jeszcze skonfigurowana.' });
    }
    res.status(200).json({ homepage });
  } catch (error) {
    console.error('Błąd pobierania strony głównej:', error);
    res.status(500).json({ error: 'Błąd pobierania strony głównej' });
  }
};

```

### backend/controllers/homeSectionController.js
Last modified: 2025-03-06T15:40:32.375Z
Size: 2.12 KB

```javascript
const HomeSection = require('../models/HomeSection');

exports.getHomeSections = async (req, res) => {
  try {
    const sections = await HomeSection.findAll({ order: [['order', 'ASC']] });
    res.status(200).json(sections);
  } catch (error) {
    console.error('Błąd pobierania sekcji strony głównej:', error);
    res.status(500).json({ error: 'Błąd pobierania sekcji' });
  }
};

exports.createHomeSection = async (req, res) => {
  try {
    const { type, title, content, order } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Tytuł sekcji jest wymagany' });
    }
    const section = await HomeSection.create({ type, title, content, order });
    res.status(201).json({ message: 'Sekcja utworzona', section });
  } catch (error) {
    console.error('Błąd tworzenia sekcji:', error);
    res.status(500).json({ error: 'Błąd tworzenia sekcji' });
  }
};

exports.updateHomeSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, title, content, order } = req.body;
    const section = await HomeSection.findByPk(id);
    if (!section) {
      return res.status(404).json({ error: 'Sekcja nie znaleziona' });
    }
    section.type = type !== undefined ? type : section.type;
    section.title = title !== undefined ? title : section.title;
    section.content = content !== undefined ? content : section.content;
    section.order = order !== undefined ? order : section.order;
    await section.save();
    res.status(200).json({ message: 'Sekcja zaktualizowana', section });
  } catch (error) {
    console.error('Błąd aktualizacji sekcji:', error);
    res.status(500).json({ error: 'Błąd aktualizacji sekcji' });
  }
};

exports.deleteHomeSection = async (req, res) => {
  try {
    const { id } = req.params;
    const section = await HomeSection.findByPk(id);
    if (!section) {
      return res.status(404).json({ error: 'Sekcja nie znaleziona' });
    }
    await section.destroy();
    res.status(200).json({ message: 'Sekcja usunięta' });
  } catch (error) {
    console.error('Błąd usuwania sekcji:', error);
    res.status(500).json({ error: 'Błąd usuwania sekcji' });
  }
};

```

### backend/controllers/mediaController.js
Last modified: 2025-03-04T16:42:38.103Z
Size: 1.84 KB

```javascript
const Media = require('../models/Media');

exports.getAllFiles = async (req, res) => {
  try {
    const files = await Media.findAll();
    res.status(200).json({ total: files.length, files });
  } catch (error) {
    console.error('❌ Błąd pobierania plików:', error);
    res.status(500).json({ error: 'Błąd pobierania plików' });
  }
};

exports.uploadFile = async (req, res) => {
  try {
    let fileData;
    if (req.file) {
      // Jeśli plik został przesłany przez Multer (multipart/form-data)
      const { originalname, mimetype, size, filename } = req.file;
      fileData = {
        fileName: filename,
        originalName: originalname,
        type: mimetype,
        size: size,
        url: `/uploads/${filename}`
      };
    } else if (req.body && req.body.fileName) {
      // Jeśli dane są przesłane jako JSON
      const { fileName, originalName, type, size, url } = req.body;
      fileData = {
        fileName,
        originalName,
        type,
        size,
        url: url || `/uploads/${fileName}`
      };
    } else {
      return res.status(400).json({ error: 'Brak pliku w żądaniu' });
    }
    
    const file = await Media.create(fileData);
    return res.status(201).json({ message: '✅ Plik przesłany!', file });
  } catch (error) {
    console.error('❌ Błąd przesyłania pliku:', error);
    return res.status(500).json({ error: 'Błąd przesyłania pliku' });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await Media.findByPk(id);
    if (!file) return res.status(404).json({ error: 'Plik nie znaleziony' });
    await file.destroy();
    res.status(200).json({ message: `✅ Plik o ID ${id} został usunięty` });
  } catch (error) {
    console.error('❌ Błąd usuwania pliku:', error);
    res.status(500).json({ error: 'Błąd usuwania pliku' });
  }
};

```

### backend/controllers/menuController.js
Last modified: 2025-03-04T16:42:38.103Z
Size: 2.01 KB

```javascript
const Menu = require('../models/Menu');

exports.createMenu = async (req, res) => {
  try {
    const { title, slug, link, label } = req.body;
    if (!title || !slug || !link || !label) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    const menu = await Menu.create({ title, slug, link, label });
    return res.status(201).json({ message: 'Menu utworzone', menu });
  } catch (error) {
    console.error('Błąd tworzenia menu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.getMenu = async (req, res) => {
  try {
    const menus = await Menu.findAll();
    return res.status(200).json(menus);
  } catch (error) {
    console.error('Błąd pobierania menu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, link, label } = req.body;
    const menu = await Menu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ error: 'Menu nie znalezione' });
    }
    // Aktualizujemy pola, jeśli zostały przesłane w żądaniu
    if (title !== undefined) menu.title = title;
    if (slug !== undefined) menu.slug = slug;
    if (link !== undefined) menu.link = link;
    if (label !== undefined) menu.label = label;

    await menu.save();
    return res.status(200).json({ message: 'Menu zaktualizowane', menu });
  } catch (error) {
    console.error('Błąd aktualizacji menu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ error: 'Menu nie znalezione' });
    }
    await menu.destroy();
    return res.status(200).json({ message: `Menu o ID ${id} zostało usunięte` });
  } catch (error) {
    console.error('Błąd usuwania menu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

```

### backend/controllers/pageController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 2.76 KB

```javascript
// backend/controllers/pageController.js
const Page = require('../models/Page');
const redisClient = require('../redisClient');

exports.createPage = async (req, res) => {
  try {
    const { title, slug, content, status } = req.body;
    if (!title || !slug || !content) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane (title, slug, content)' });
    }
    const page = await Page.create({ title, slug, content, status });
    // Po utworzeniu rekordu usuwamy cache listy stron, aby następny odczyt pobrał aktualne dane
    await redisClient.del('pages_all');
    return res.status(201).json({ message: 'Strona utworzona', page });
  } catch (error) {
    console.error('Błąd tworzenia strony:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.getPages = async (req, res) => {
  try {
    const cacheKey = 'pages_all';
    // Sprawdzamy, czy wynik jest zapisany w Redis
    const cachedPages = await redisClient.get(cacheKey);
    if (cachedPages) {
      return res.status(200).json(JSON.parse(cachedPages));
    }
    // Jeśli nie, pobieramy dane z bazy
    const pages = await Page.findAll();
    // Zapisujemy wynik w Redis z TTL = 60 sekund
    await redisClient.setEx(cacheKey, 60, JSON.stringify(pages));
    return res.status(200).json(pages);
  } catch (error) {
    console.error('Błąd pobierania stron:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updatePage = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, content, status } = req.body;
    const page = await Page.findByPk(id);
    if (!page) {
      return res.status(404).json({ error: 'Strona nie znaleziona' });
    }
    if (title !== undefined) page.title = title;
    if (slug !== undefined) page.slug = slug;
    if (content !== undefined) page.content = content;
    if (status !== undefined) page.status = status;
    await page.save();
    // Po aktualizacji inwalidujemy cache
    await redisClient.del('pages_all');
    return res.status(200).json({ message: 'Strona zaktualizowana', page });
  } catch (error) {
    console.error('Błąd aktualizacji strony:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deletePage = async (req, res) => {
  try {
    const { id } = req.params;
    const page = await Page.findByPk(id);
    if (!page) {
      return res.status(404).json({ error: 'Strona nie znaleziona' });
    }
    await page.destroy();
    // Po usunięciu rekordu usuwamy cache
    await redisClient.del('pages_all');
    return res.status(200).json({ message: `Strona o ID ${id} została usunięta` });
  } catch (error) {
    console.error('Błąd usuwania strony:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

```

### backend/controllers/paymentController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 0.42 KB

```javascript
const stripe = require('../config/stripe.config');

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: 'Błąd przetwarzania płatności' });
  }
};

```

### backend/controllers/postController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 2.39 KB

```javascript
const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error('❌ Błąd pobierania postów:', error);
    res.status(500).json({ error: 'Błąd pobierania postów' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`🔍 Szukam posta o ID: ${id}`); // LOG DLA DEBUGOWANIA

    const post = await Post.findByPk(id);

    if (!post) {
      console.log(`❌ Post ID ${id} nie znaleziony!`); // LOG
      return res.status(404).json({ error: 'Post nie znaleziony' });
    }

    console.log(`✅ Post znaleziony:`, post); // LOG
    res.status(200).json(post);
  } catch (error) {
    console.error('❌ Błąd pobierania posta:', error);
    res.status(500).json({ error: 'Błąd pobierania posta', details: error.message });
  }
};

  
  exports.createPost = async (req, res) => {
    try {
      const { title, slug, content, status } = req.body;
  
      if (!title || !slug || !content) {
        return res.status(400).json({ error: "Wszystkie pola są wymagane" });
      }
  
      const newPost = await Post.create({ title, slug, content, status });
      return res.status(201).json(newPost);
    } catch (error) {
      console.error("❌ Błąd tworzenia posta:", error);
      return res.status(500).json({ error: "Błąd tworzenia posta", details: error.message });
    }
  };

  exports.deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);
      if (!post) return res.status(404).json({ error: 'Post nie znaleziony' });
  
      await post.destroy();
      res.status(200); // ❌ Nie zwraca wiadomości
    } catch (error) {
      console.error('❌ Błąd usuwania posta:', error);
      res.status(500).json({ error: 'Błąd usuwania posta' });
    }
  };

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, content, status } = req.body;

    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: 'Post nie znaleziony' });

    await post.update({ title, slug, content, status });
    res.status(200).json(post);
  } catch (error) {
    console.error('❌ Błąd aktualizacji posta:', error);
    res.status(500).json({ error: 'Błąd aktualizacji posta' });
  }
};
```

### backend/controllers/seoController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 2.03 KB

```javascript
// controllers/seoController.js
const Seo = require('../models/Seo');

exports.createSeo = async (req, res) => {
  try {
    const { pageId, title, description, keywords } = req.body;
    if (!pageId || !title || !description || !keywords) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    const seo = await Seo.create({ pageId, title, description, keywords });
    return res.status(201).json({ message: 'SEO utworzone', seo });
  } catch (error) {
    console.error('Błąd tworzenia SEO:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.getSeo = async (req, res) => {
  try {
    const seoList = await Seo.findAll();
    return res.status(200).json(seoList);
  } catch (error) {
    console.error('Błąd pobierania SEO:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updateSeo = async (req, res) => {
  try {
    const { id } = req.params;
    const { pageId, title, description, keywords } = req.body;
    const seo = await Seo.findByPk(id);
    if (!seo) {
      return res.status(404).json({ error: 'SEO nie znalezione' });
    }
    if (pageId !== undefined) seo.pageId = pageId;
    if (title !== undefined) seo.title = title;
    if (description !== undefined) seo.description = description;
    if (keywords !== undefined) seo.keywords = keywords;
    await seo.save();
    return res.status(200).json({ message: 'SEO zaktualizowane', seo });
  } catch (error) {
    console.error('Błąd aktualizacji SEO:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteSeo = async (req, res) => {
  try {
    const { id } = req.params;
    const seo = await Seo.findByPk(id);
    if (!seo) {
      return res.status(404).json({ error: 'SEO nie znalezione' });
    }
    await seo.destroy();
    return res.status(200).json({ message: `SEO o ID ${id} zostało usunięte` });
  } catch (error) {
    console.error('Błąd usuwania SEO:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

```

### backend/controllers/serviceController.js
Last modified: 2025-03-06T15:40:32.376Z
Size: 2.18 KB

```javascript
const Service = require('../models/Service');

exports.getServices = async (req, res) => {
  try {
    const services = await Service.findAll({ order: [['order', 'ASC']] });
    res.status(200).json(services);
  } catch (error) {
    console.error('Błąd pobierania usług:', error);
    res.status(500).json({ error: 'Błąd pobierania usług' });
  }
};

exports.createService = async (req, res) => {
  try {
    const { title, description, icon, image, order } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Tytuł jest wymagany' });
    }
    const service = await Service.create({ title, description, icon, image, order });
    res.status(201).json({ message: 'Usługa utworzona', service });
  } catch (error) {
    console.error('Błąd tworzenia usługi:', error);
    res.status(500).json({ error: 'Błąd tworzenia usługi' });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, icon, image, order } = req.body;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Usługa nie znaleziona' });
    }
    service.title = title !== undefined ? title : service.title;
    service.description = description !== undefined ? description : service.description;
    service.icon = icon !== undefined ? icon : service.icon;
    service.image = image !== undefined ? image : service.image;
    service.order = order !== undefined ? order : service.order;
    await service.save();
    res.status(200).json({ message: 'Usługa zaktualizowana', service });
  } catch (error) {
    console.error('Błąd aktualizacji usługi:', error);
    res.status(500).json({ error: 'Błąd aktualizacji usługi' });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Usługa nie znaleziona' });
    }
    await service.destroy();
    res.status(200).json({ message: 'Usługa usunięta' });
  } catch (error) {
    console.error('Błąd usuwania usługi:', error);
    res.status(500).json({ error: 'Błąd usuwania usługi' });
  }
};

```

### backend/controllers/userController.js
Last modified: 2025-03-04T16:42:38.104Z
Size: 1.71 KB

```javascript
// controllers/userController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, { attributes: ['id', 'email', 'role'] });
    if (!user) return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    return res.status(200).json(user);
  } catch (error) {
    console.error('Błąd pobierania profilu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;
    if (!newPassword || !confirmPassword) {
      return res.status(400).json({ error: 'Oba pola są wymagane' });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'Hasła nie pasują do siebie' });
    }
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    user.passwordHash = await bcrypt.hash(newPassword, 10);
    await user.save();
    return res.status(200).json({ message: 'Profil zaktualizowany.' });
  } catch (error) {
    console.error('Błąd aktualizacji profilu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ error: 'Użytkownik nie znaleziony' });
    await user.destroy();
    return res.status(200).json({ message: 'Użytkownik usunięty.' });
  } catch (error) {
    console.error('Błąd usuwania profilu:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

```

### backend/index.js
Last modified: 2025-03-06T15:40:32.377Z
Size: 2.45 KB

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const { createClient } = require('redis');
const config = require('./config/env/development');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const db = require('./models');
const path = require('path');

const app = express();
app.set('trust proxy', 1);

// Podstawowa konfiguracja
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfiguracja CORS – dozwolone domeny
const corsOptions = {
  origin: ['https://twoja-zaufana-domena.com', 'http://localhost:3000'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Konfiguracja klienta Redis
const redisClient = createClient({
  url: config.REDIS_URL || 'redis://localhost:6379'
});
redisClient.connect().catch(console.error);

// Rate limiting – stosujemy tylko w środowiskach innym niż testowe
if (process.env.NODE_ENV !== 'test') {
  const limiterAnon = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    store: new RedisStore({ sendCommand: (...args) => redisClient.sendCommand(...args) }),
    message: 'Za dużo żądań, spróbuj ponownie później'
  });

  const limiterAuth = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    store: new RedisStore({ sendCommand: (...args) => redisClient.sendCommand(...args) }),
    message: 'Za dużo żądań, spróbuj ponownie później'
  });

  // W zależności od obecności użytkownika wybieramy odpowiedni limiter
  app.use('/api/v1/', (req, res, next) => {
    if (req.user) {
      return limiterAuth(req, res, next);
    }
    return limiterAnon(req, res, next);
  });
}

app.set('models', db);

// Montujemy główny router (wszystkie endpointy API)
app.use('/api/v1', routes);

// Globalna obsługa błędów
app.use(errorHandler);

// Dokumentacja API za pomocą Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;

app.use(express.static(path.join(__dirname, 'public')));

// Dla SPA - przekierowanie wszystkich nieznalezionych tras do index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```

### backend/jest.config.js
Last modified: 2025-03-04T16:42:38.105Z
Size: 0.27 KB

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  globalSetup: './jest.global-setup.js',
  globalTeardown: './jest.global-teardown.js',
  testPathIgnorePatterns: ['/node_modules/', '/config/'],
  testTimeout: 20000 // Ustaw timeout na 10 sekund (10000 ms)
};


```

### backend/jest.global-setup.js
Last modified: 2025-03-04T16:42:38.105Z
Size: 0.27 KB

```javascript
// jest.global-setup.js
const { sequelize } = require('./models');

module.exports = async () => {
  // Synchronizujemy wszystkie modele, usuwając istniejące tabele
  await sequelize.sync({ force: true });
  console.log('Global Setup: Baza danych zsynchronizowana');
  
};
```

### backend/jest.global-teardown.js
Last modified: 2025-03-04T16:42:38.105Z
Size: 0.20 KB

```javascript
// jest.global-teardown.js
const { sequelize } = require('./models');

module.exports = async () => {
  await sequelize.close();
  console.log('Global Teardown: Połączenie z bazą zostało zamknięte');
};

```

### backend/middleware/authMiddleware.js
Last modified: 2025-03-06T15:40:32.378Z
Size: 0.70 KB

```javascript
// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(`../config/env/${env}`);

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Auth Header:", authHeader); // Debug: wypisuje otrzymany nagłówek
  if (!authHeader) {
    return res.status(401).json({ error: 'Brak tokena' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Błąd weryfikacji tokena:", error);
    return res.status(401).json({ error: 'Nieprawidłowy token' });
  }
};
```

### backend/middleware/cacheMiddleware.js
Last modified: 2025-03-04T16:42:38.106Z
Size: 0.92 KB

```javascript
// backend/middleware/cacheMiddleware.js
const redisClient = require('../redisClient');

const cacheMiddleware = (cacheKey, ttlSeconds = 60) => {
  return async (req, res, next) => {
    try {
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        // Jeśli dane są w cache, wysyłamy je jako odpowiedź
        return res.status(200).json(JSON.parse(cachedData));
      }
      // Nadpisujemy res.send, aby zapisać wynik w cache przed wysłaniem odpowiedzi
      const originalSend = res.send.bind(res);
      res.send = async (body) => {
        // Zapiszemy body (upewnij się, że jest typu string lub skonwertuj go)
        await redisClient.setEx(cacheKey, ttlSeconds, body);
        originalSend(body);
      };
      next();
    } catch (error) {
      // Jeśli wystąpi błąd podczas pobierania z cache, kontynuujemy bez cache
      next();
    }
  };
};

module.exports = cacheMiddleware;

```

### backend/middleware/errorHandler.js
Last modified: 2025-03-04T16:42:38.106Z
Size: 0.69 KB

```javascript
// backend/middleware/errorHandler.js

// Globalny middleware obsługujący błędy w Express
function errorHandler(err, req, res, next) {
    // Ustaw kod błędu – domyślnie 500
    const statusCode = err.status || 500;
  
    // Loguj błąd – tutaj możesz użyć np. Winston zamiast console.error
    console.error(err);
  
    // W środowisku deweloperskim możesz zwrócić stack trace, w produkcji nie
    const response = {
      message: err.message || 'Internal Server Error'
    };
  
    if (process.env.NODE_ENV === 'development' && err.stack) {
      response.stack = err.stack;
    }
  
    res.status(statusCode).json({ error: response });
  }
  
  module.exports = errorHandler;
  
```

### backend/middleware/validateMedia.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.22 KB

```javascript
module.exports = (req, res, next) => {
  const { fileName, url, type, size } = req.body;
  if (!fileName || !url || !type || !size) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
  }
  next();
};

```

### backend/middleware/validateMenu.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.19 KB

```javascript
module.exports = (req, res, next) => {
  const { title, link } = req.body;
  if (!title || !link) {
    return res.status(400).json({ error: 'Tytuł i link są wymagane' });
  }
  next();
};

```

### backend/middleware/validatePage.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.21 KB

```javascript
module.exports = (req, res, next) => {
  const { title, slug, content } = req.body;
  if (!title || !slug || !content) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
  }
  next();
};

```

### backend/middleware/validatePost.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.24 KB

```javascript
module.exports = (req, res, next) => {
    const { title, slug, content, author } = req.body;
    if (!title || !slug || !content || !author) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    next();
  };
  
```

### backend/middleware/validateRegister.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.63 KB

```javascript
const { body, validationResult } = require('express-validator');

const validateRegister = [
  body('email')
    .isEmail()
    .withMessage('Podaj poprawny adres e-mail'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Hasło musi mieć co najmniej 8 znaków'),
  body('confirmPassword')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Hasła nie pasują do siebie'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
  }
];

module.exports = validateRegister;

```

### backend/middleware/validateSeo.js
Last modified: 2025-03-04T16:42:38.107Z
Size: 0.25 KB

```javascript
module.exports = (req, res, next) => {
    const { pageId, metaTitle, metaDescription } = req.body;
    if (!pageId || !metaTitle || !metaDescription) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    next();
  };
  
```

### backend/migrations/20250206-create-pages.js
Last modified: 2025-03-05T04:22:04.968Z
Size: 0.86 KB

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pages', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Pages');
  }
};
```

### backend/migrations/20250206231514-create-users-table.js
Last modified: 2025-03-05T04:22:06.936Z
Size: 0.75 KB

```javascript
// migrations/20250206-create-users.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      passwordHash: { type: Sequelize.STRING, allowNull: false },
      role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'user' },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};
```

### backend/migrations/20250206231516-create-posts-table.js
Last modified: 2025-03-05T04:28:23.685Z
Size: 0.90 KB

```javascript

// migrations/20250206-create-posts.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: { type: Sequelize.STRING, allowNull: false },
      slug: { type: Sequelize.STRING, allowNull: false },
      content: { type: Sequelize.TEXT, allowNull: false },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Posts');
  }
};
```

### backend/migrations/20250206231517-create-seo-table.js
Last modified: 2025-03-05T04:21:21.399Z
Size: 0.89 KB

```javascript
// backend/migrations/XXXXXX-create-seo-table.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Seo', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pageId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      keywords: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Seo');
  }
};
```

### backend/migrations/20250206231518-create-menus-table.js
Last modified: 2025-03-05T04:20:50.596Z
Size: 0.64 KB

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Menus', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: { type: Sequelize.STRING, allowNull: false },
      link: { type: Sequelize.STRING, allowNull: false, unique: true },
      order: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Menus');
  }
};
```

### backend/migrations/20250301-create-services.js
Last modified: 2025-03-06T15:48:34.635Z
Size: 1.03 KB

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Services', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      icon: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Services');
  }
};

```

### backend/migrations/20250302-create-home-sections.js
Last modified: 2025-03-06T15:49:17.852Z
Size: 0.98 KB

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('HomeSections', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'about'
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('HomeSections');
  }
};

```

### backend/models/Contact.js
Last modified: 2025-03-04T16:42:38.108Z
Size: 0.82 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Contact = sequelize.define('Contact', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  firstName: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  lastName: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  phone: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  email: { 
    type: DataTypes.STRING, 
    allowNull: true  // opcjonalne, bo klient może nie podać
  },
  situationDescription: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  deviceType: { 
    type: DataTypes.ENUM('Pendrive/Karta Flash', 'Dysk HDD/SSD', 'Telefon', 'Tablet'),
    allowNull: false 
  }
}, {
  tableName: 'Contacts',
  timestamps: true
});

module.exports = Contact;

```

### backend/models/HomeSection.js
Last modified: 2025-03-06T15:40:32.378Z
Size: 0.69 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const HomeSection = sequelize.define('HomeSection', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // Typ sekcji – na przykład 'about' dla sekcji "O nas / misja i wartości"
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'about'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'HomeSections',
  timestamps: true
});

module.exports = HomeSection;

```

### backend/models/Homepage.js
Last modified: 2025-03-04T16:42:38.108Z
Size: 0.81 KB

```javascript
// models/HomepageVersion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const HomepageVersion = sequelize.define('HomepageVersion', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  homepageId: { type: DataTypes.INTEGER, allowNull: false },
  heroTitle: { type: DataTypes.STRING, allowNull: false },
  heroSubtitle: { type: DataTypes.TEXT, allowNull: true },
  heroBackground: { type: DataTypes.STRING, allowNull: true },
  mainContent: { type: DataTypes.TEXT, allowNull: true },
  fontFamily: { type: DataTypes.STRING, allowNull: true },
  fontSize: { type: DataTypes.STRING, allowNull: true },
  textColor: { type: DataTypes.STRING, allowNull: true }
}, {
  tableName: 'HomepageVersions',
  timestamps: true
});

module.exports = HomepageVersion;

```

### backend/models/Media.js
Last modified: 2025-03-04T16:42:38.108Z
Size: 0.47 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Media = sequelize.define('Media', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fileName: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  size: { type: DataTypes.INTEGER, allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: true });

module.exports = Media;

```

### backend/models/Menu.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.64 KB

```javascript
// models/menu.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Menu = sequelize.define('Menu', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Menus',  // Upewnij się, że nazwa tabeli jest spójna (np. "Menus")
  timestamps: true
});

module.exports = Menu;

```

### backend/models/Page.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.60 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Page = sequelize.define('Page', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  title: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  slug: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true 
  },
  content: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  status: { 
    type: DataTypes.ENUM('draft', 'published'), 
    defaultValue: 'draft' 
  }
}, { 
  tableName: 'Pages', 
  timestamps: true 
});

module.exports = Page;

```

### backend/models/Post.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.51 KB

```javascript
// models/post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Post = sequelize.define('Post', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  authorId: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'Posts',
  timestamps: true
});

module.exports = Post;

```

### backend/models/Seo.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.83 KB

```javascript
// backend/models/Seo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Seo = sequelize.define('Seo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pageId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT, // lub STRING – ważne, by w migracji było to samo
    allowNull: true
  },
  keywords: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'Seo',
  timestamps: true
});

module.exports = Seo;

```

### backend/models/Service.js
Last modified: 2025-03-06T15:40:32.379Z
Size: 0.64 KB

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Service = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'Services',
  timestamps: true
});

module.exports = Service;

```

### backend/models/User.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 0.54 KB

```javascript
// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  passwordHash: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' }
}, {
  tableName: 'Users', // Używamy tej samej nazwy, co w migracji
  timestamps: true
});

module.exports = User;

```

### backend/models/index.js
Last modified: 2025-03-04T16:42:38.109Z
Size: 1.50 KB

```javascript
// backend/models/index.js
const sequelize = require('../config/db.config');
const User = require('./User');
const Page = require('./Page');
const Post = require('./Post');
const Media = require('./Media');
const Menu = require('./Menu');
const Seo = require('./Seo');
const Contact = require('./Contact');


const db = { sequelize, User ,Page, Post, Media, Menu, Seo,  };

async function initDatabase() {
  // 1. Tworzy tabele zdefiniowane w modelach (dla dev/test).
  await sequelize.sync();

  // 2. Tylko jeśli nie jesteśmy w testach, tworzymy indeksy i logujemy
  if (process.env.NODE_ENV !== 'test') {
    console.log('📌 Baza danych zsynchronizowana.');

    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_pages_slug ON "Pages" (slug)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_posts_slug ON "Posts" (slug)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_media_url ON "Media" (url)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_menu_link ON "Menus" (link)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_seo_pageId ON "Seo" (pageId)');
    await sequelize.query('CREATE INDEX IF NOT EXISTS idx_users_email ON "Users" (email)');
  }
}

User.hasMany(Post, {
  as: 'posts',         // user.getPosts(), user.setPosts(), ...
  foreignKey: 'authorId',
});
Post.belongsTo(User, {
  as: 'user',          // post.getUser(), post.setUser(), ...
  foreignKey: 'authorId',
});

module.exports = {
  sequelize, User, Post, Media, Menu, Seo, Page, Contact,
  initDatabase
};

```

### backend/package.json
Last modified: 2025-03-04T16:42:38.110Z
Size: 1.62 KB

```json
{
    "name": "cms-backend",
    "version": "1.0.0",
    "description": "CMS Backend with Node.js, Express, Sequelize, PostgreSQL, Redis, Stripe, SendGrid, and Passport.js",
    "main": "index.js",
    "scripts": {
        "start": "node server.js",
        "dev": "kill-port 4000 && nodemon server.js",
        "migrate": "sequelize db:migrate",
        "seed": "sequelize db:seed:all",
        "test": "cross-env NODE_ENV=test jest --runInBand"
    },
    "dependencies": {
        "@sendgrid/mail": "^7.7.0",
        "bcrypt": "^5.1.1",
        "bcryptjs": "^2.4.3",
        "body-parser": "^1.20.3",
        "compression": "^1.7.4",
        "cors": "^2.8.5",
        "cross-env": "^7.0.3",
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "express-rate-limit": "^7.5.0",
        "express-validator": "^7.2.1",
        "helmet": "^7.2.0",
        "jsonwebtoken": "^9.0.0",
        "multer": "^1.4.5-lts.1",
        "nodemailer": "^6.10.0",
        "passport": "^0.6.0",
        "passport-facebook": "^3.0.0",
        "passport-google-oauth20": "^2.0.0",
        "pdfkit": "^0.16.0",
        "pg": "^8.13.1",
        "pg-hstore": "^2.3.4",
        "rate-limit-redis": "^1.7.0",
        "redis": "^4.7.0",
        "sequelize": "^6.37.5",
        "stripe": "^12.0.0",
        "swagger-jsdoc": "^6.2.8",
        "swagger-ui-express": "^5.0.1",
        "winston": "^3.17.0"
    },
    "devDependencies": {
        "jest": "^29.7.0",
        "kill-port": "^2.0.1",
        "nodemon": "^3.0.1",
        "sequelize-cli": "^6.6.2",
        "supertest": "^6.3.4"
    },
    "engines": {
        "node": ">=18.0.0"
    },
    "license": "MIT"
}

```

### backend/redisClient.js
Last modified: 2025-03-04T16:42:38.110Z
Size: 0.26 KB

```javascript
const { createClient } = require('redis');
const config = require('./config/env/development');

const redisClient = createClient({
  url: config.REDIS_URL || 'redis://localhost:6379'
});

redisClient.connect().catch(console.error);

module.exports = redisClient;

```

### backend/routes/index.js
Last modified: 2025-03-06T15:40:32.380Z
Size: 1.37 KB

```javascript
const express = require('express');
const router = express.Router();

const authRoutes = require('./v1/authRoutes');
const userRoutes = require('./v1/usersRoutes'); // Usuń lub zakomentuj, jeśli nie są potrzebne
const mediaRoutes = require('./v1/mediaRoutes');
const menuRoutes = require('./v1/menuRoutes');
const seoRoutes = require('./v1/seoRoutes');
const pageRoutes = require('./v1/pageRoutes');
const contactRoutes = require('./v1/contactRoutes');
const emailRoutes = require('./v1/emailRoutes');
const postRoutes = require('./v1/postsRoutes'); // Usuń lub zakomentuj, jeśli nie są potrzebne
const adminRoutes = require('./v1/adminRoutes'); 
const homepageRoutes = require('./v1/homepageRoutes'); 
const homeSectionRoutes = require('./v1/homeSectionRoutes');
const serviceRoutes = require('./v1/serviceRoutes');


router.use('/auth', authRoutes);
router.use('/user', userRoutes); // Usuń lub zakomentuj
router.use('/media', mediaRoutes);
router.use('/menu', menuRoutes);
router.use('/seo', seoRoutes);
router.use('/page', pageRoutes);
router.use('/contact', contactRoutes);
router.use('/email', emailRoutes);
router.use('/post', postRoutes);
router.use('/admin', adminRoutes);
router.use('/homepage', homepageRoutes); // Usuń lub zakomentuj, jeśli nie są potrzebne
router.use('/homepage/sections', homeSectionRoutes);
router.use('/services', serviceRoutes);

module.exports = router;

```

### backend/routes/v1/adminRoutes.js
Last modified: 2025-03-04T16:42:38.111Z
Size: 1.91 KB

```javascript
const express = require('express');
const router = express.Router();
const requireAdmin = require('../../middleware/requireAdmin');
const { body, validationResult } = require('express-validator');

/**
 * GET /api/admin/users
 * Endpoint dostępny tylko dla administratora – zwraca listę wszystkich użytkowników.
 */
router.get('/users', requireAdmin, async (req, res, next) => {
  try {
    // Zakładamy, że obiekt models jest ustawiony globalnie w aplikacji (np. przez app.set('models', models))
    const models = req.app.get('models');
    const users = await models.User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error('Błąd pobierania użytkowników:', error);
    return res.status(500).json({ message: 'Błąd podczas pobierania użytkowników.' });
  }
});

/**
 * POST /api/admin/homepage
 * Endpoint dostępny tylko dla administratora – aktualizuje ustawienia strony głównej.
 * Walidacja danych wejściowych przy użyciu express-validator.
 */
router.post(
  '/homepage',
  requireAdmin,
  [
    body('title').notEmpty().withMessage('Title jest wymagany'),
    body('content').notEmpty().withMessage('Content jest wymagany')
  ],
  async (req, res, next) => {
    // Walidacja danych wejściowych
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Przykładowa logika aktualizacji ustawień strony głównej.
      // Możesz zastąpić to odpowiednim zapytaniem do modelu, np.:
      // await models.Homepage.update(req.body, { where: { id: 1 } });
      return res.status(200).json({ message: 'Strona główna została zaktualizowana.' });
    } catch (error) {
      console.error('Błąd podczas aktualizacji strony głównej:', error);
      return res.status(500).json({ message: 'Błąd podczas aktualizacji strony głównej.' });
    }
  }
);

module.exports = router;

```

### backend/routes/v1/authRoutes.js
Last modified: 2025-03-04T16:42:38.111Z
Size: 0.47 KB

```javascript
// routes/v1/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, deleteUser } = require('../../controllers/authController');
const authMiddleware = require('../../middleware/authMiddleware');
const validateRegister = require('../../middleware/validateRegister');

router.post('/register', validateRegister, register);
router.post('/login', login);
router.delete('/delete', authMiddleware, deleteUser);

module.exports = router;

```

### backend/routes/v1/contactRoutes.js
Last modified: 2025-03-04T16:42:38.112Z
Size: 2.01 KB

```javascript
const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../../controllers/contactController');

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Wysłanie formularza kontaktowego
 *     description: Przyjmuje dane formularza, generuje PDF, zapisuje dane w bazie oraz wysyła e-mail do administracji i potwierdzenie dla klienta.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - phone
 *               - situationDescription
 *               - deviceType
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Jan"
 *               lastName:
 *                 type: string
 *                 example: "Kowalski"
 *               phone:
 *                 type: string
 *                 example: "123456789"
 *               email:
 *                 type: string
 *                 example: "jan.kowalski@example.com"
 *               situationDescription:
 *                 type: string
 *                 example: "Mój telefon nie włącza się."
 *               deviceType:
 *                 type: string
 *                 enum: ["Pendrive/Karta Flash", "Dysk HDD/SSD", "Telefon", "Tablet"]
 *                 example: "Telefon"
 *     responses:
 *       200:
 *         description: Formularz wysłany, dane zapisane, potwierdzenie wysłane.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Formularz wysłany, dziękujemy za kontakt."
 *                 contact:
 *                   $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Błąd walidacji lub przetwarzania.
 */
router.post('/', submitContactForm);

module.exports = router;

```

### backend/routes/v1/emailRoutes.js
Last modified: 2025-03-04T16:42:38.112Z
Size: 1.01 KB

```javascript
const express = require('express');
const router = express.Router();
const { sendTestEmail } = require('../../controllers/emailController');

/**
 * @swagger
 * /email/send:
 *   post:
 *     summary: Wysyłka testowego e-maila
 *     description: Wysyła e-mail testowy. W środowisku testowym używa Ethereal.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - to
 *               - subject
 *               - text
 *             properties:
 *               to:
 *                 type: string
 *                 example: "jan.kowalski@example.com"
 *               subject:
 *                 type: string
 *                 example: "Testowy e-mail"
 *               text:
 *                 type: string
 *                 example: "To jest testowy e-mail."
 *     responses:
 *       200:
 *         description: Email wysłany.
 */
router.post('/send', sendTestEmail);

module.exports = router;

```

### backend/routes/v1/homeSectionRoutes.js
Last modified: 2025-03-06T15:40:32.380Z
Size: 0.49 KB

```javascript
const express = require('express');
const router = express.Router();
const {
  getHomeSections,
  createHomeSection,
  updateHomeSection,
  deleteHomeSection
} = require('../../controllers/homeSectionController');
const requireAdmin = require('../../middleware/requireAdmin');

router.get('/', getHomeSections);
router.post('/', requireAdmin, createHomeSection);
router.put('/:id', requireAdmin, updateHomeSection);
router.delete('/:id', requireAdmin, deleteHomeSection);

module.exports = router;

```

### backend/routes/v1/homepageRoutes.js
Last modified: 2025-03-04T16:42:38.112Z
Size: 4.05 KB

```javascript
// routes/homepage.js
const express = require('express');
const router = express.Router();
const Homepage = require('../../models/Homepage');
const requireAdmin = require('../../middleware/requireAdmin');

// GET - Pobiera bieżącą zawartość strony głównej
router.get('/', async (req, res) => {
  try {
    const homepage = await Homepage.findOne({ where: { id: 1 } });
    if (!homepage) {
      return res.status(404).json({ message: 'Strona główna nie została jeszcze skonfigurowana.' });
    }
    res.json(homepage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd serwera podczas pobierania strony głównej.' });
  }
});

// POST - Aktualizacja (lub utworzenie) strony głównej
router.post('/', requireAdmin, async (req, res) => {
  try {
    const { heroTitle, heroSubtitle, heroBackground, mainContent, fontFamily, fontSize, textColor } = req.body;
    let homepage = await Homepage.findOne({ where: { id: 1 } });
    
    if (homepage) {
      // Zapisujemy obecną wersję przed aktualizacją
      await HomepageVersion.create({
        homepageId: homepage.id,
        heroTitle: homepage.heroTitle,
        heroSubtitle: homepage.heroSubtitle,
        heroBackground: homepage.heroBackground,
        mainContent: homepage.mainContent,
        fontFamily: homepage.fontFamily,
        fontSize: homepage.fontSize,
        textColor: homepage.textColor
      });
      // Aktualizujemy rekord
      homepage.heroTitle = heroTitle;
      homepage.heroSubtitle = heroSubtitle;
      homepage.heroBackground = heroBackground;
      homepage.mainContent = mainContent;
      homepage.fontFamily = fontFamily;
      homepage.fontSize = fontSize;
      homepage.textColor = textColor;
      await homepage.save();
    } else {
      // Jeśli rekord nie istnieje, tworzymy nowy
      homepage = await Homepage.create({
        heroTitle,
        heroSubtitle,
        heroBackground,
        mainContent,
        fontFamily,
        fontSize,
        textColor
      });
    }
    res.json({ message: 'Strona główna została zaktualizowana.', homepage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd podczas aktualizacji strony głównej.' });
  }
});

// GET - Pobranie historii wersji strony głównej
router.get('/versions', requireAdmin, async (req, res) => {
  try {
    const versions = await HomepageVersion.findAll({
      where: { homepageId: 1 },
      order: [['createdAt', 'DESC']]
    });
    res.json(versions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd podczas pobierania wersji strony głównej.' });
  }
});

// POST - Przywrócenie wybranej wersji strony głównej
router.post('/versions/:id/revert', requireAdmin, async (req, res) => {
  try {
    const versionId = req.params.id;
    const version = await HomepageVersion.findByPk(versionId);
    if (!version) {
      return res.status(404).json({ message: 'Wybrana wersja nie została znaleziona.' });
    }
    // Przywracamy wersję
    let homepage = await Homepage.findOne({ where: { id: 1 } });
    if (!homepage) {
      homepage = await Homepage.create({
        heroTitle: version.heroTitle,
        heroSubtitle: version.heroSubtitle,
        heroBackground: version.heroBackground,
        mainContent: version.mainContent,
        fontFamily: version.fontFamily,
        fontSize: version.fontSize,
        textColor: version.textColor
      });
    } else {
      homepage.heroTitle = version.heroTitle;
      homepage.heroSubtitle = version.heroSubtitle;
      homepage.heroBackground = version.heroBackground;
      homepage.mainContent = version.mainContent;
      homepage.fontFamily = version.fontFamily;
      homepage.fontSize = version.fontSize;
      homepage.textColor = version.textColor;
      await homepage.save();
    }
    res.json({ message: 'Strona główna została przywrócona do wybranej wersji.', homepage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd podczas przywracania wersji strony głównej.' });
  }
});

module.exports = router;

```

### backend/routes/v1/mediaRoutes.js
Last modified: 2025-03-04T16:42:38.112Z
Size: 0.71 KB

```javascript
// routes/v1/mediaRoutes.js
const express = require('express');
const multer = require('multer');
const { uploadFile, getAllFiles, deleteFile } = require('../../controllers/mediaController');

const router = express.Router();

// Konfiguracja Multer – zapis do folderu "uploads/"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Ustawiamy trasę POST na '/' zamiast '/upload'
router.post('/', upload.single('file'), uploadFile);

// Pozostałe trasy:
router.get('/', getAllFiles);
router.delete('/:id', deleteFile);

module.exports = router;

```

### backend/routes/v1/menuRoutes.js
Last modified: 2025-03-04T16:42:38.113Z
Size: 0.31 KB

```javascript
const express = require('express');
const router = express.Router();
const { createMenu, getMenu, updateMenu, deleteMenu } = require('../../controllers/menuController');

router.get('/', getMenu);
router.post('/', createMenu);
router.put('/:id', updateMenu);
router.delete('/:id', deleteMenu);

module.exports = router;

```

### backend/routes/v1/pageRoutes.js
Last modified: 2025-03-04T16:42:38.113Z
Size: 0.42 KB

```javascript
const express = require('express');
const router = express.Router();
const { createPage, getPages, updatePage, deletePage } = require('../../controllers/pageController');
const cacheMiddleware = require('../../middleware/cacheMiddleware');

router.post('/', createPage);
router.get('/', cacheMiddleware('pages_all', 60), getPages);
router.put('/:id', updatePage);
router.delete('/:id', deletePage);

module.exports = router;

```

### backend/routes/v1/paymentRoutes.js
Last modified: 2025-03-04T16:42:38.113Z
Size: 0.22 KB

```javascript
const express = require('express');
const { createPaymentIntent } = require('../../controllers/paymentController');
const router = express.Router();

router.post('/intent', createPaymentIntent);

module.exports = router;

```

### backend/routes/v1/postsRoutes.js
Last modified: 2025-03-04T16:42:38.114Z
Size: 0.48 KB

```javascript
const express = require('express');
const { getAllPosts, getPostById, createPost, deletePost, updatePost} = require('../../controllers/postController');

const router = express.Router();

router.get('/', getAllPosts); // 📌 Pobieranie listy postów
router.get('/:id', getPostById); // 📌 Pobieranie posta po ID
router.post('/', createPost); // 📌 Tworzenie nowego posta
router.delete('/:id', deletePost); // 📌 Usuwanie posta
router.put('/:id', updatePost);


module.exports = router;

```

### backend/routes/v1/protectedRoutes.js
Last modified: 2025-03-04T16:42:38.114Z
Size: 0.78 KB

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config/env/development');

const router = express.Router();

// Middleware do weryfikacji tokena
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Brak tokena, autoryzacja odmówiona' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Nieprawidłowy token' });
  }
};

// Endpoint chroniony - wymaga tokena
router.get('/protected-route', authenticate, (req, res) => {
  res.json({ message: 'Dostęp do zasobu chronionego', user: req.user });
});

module.exports = router;

```

### backend/routes/v1/seoRoutes.js
Last modified: 2025-03-04T16:42:38.114Z
Size: 0.33 KB

```javascript
// routes/v1/seoRoutes.js
const express = require('express');
const router = express.Router();
const { createSeo, getSeo, updateSeo, deleteSeo } = require('../../controllers/seoController');

router.post('/', createSeo);
router.get('/', getSeo);
router.put('/:id', updateSeo);
router.delete('/:id', deleteSeo);

module.exports = router;

```

### backend/routes/v1/serviceRoutes.js
Last modified: 2025-03-06T15:40:32.381Z
Size: 0.45 KB

```javascript
const express = require('express');
const router = express.Router();
const {
  getServices,
  createService,
  updateService,
  deleteService
} = require('../../controllers/serviceController');
const requireAdmin = require('../../middleware/requireAdmin');

router.get('/', getServices);
router.post('/', requireAdmin, createService);
router.put('/:id', requireAdmin, updateService);
router.delete('/:id', requireAdmin, deleteService);

module.exports = router;

```

### backend/routes/v1/usersRoutes.js
Last modified: 2025-03-04T16:42:38.115Z
Size: 0.44 KB

```javascript
// routes/v1/userRoutes.js
const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, deleteProfile } = require('../../controllers/userController');
const authMiddleware = require('../../middleware/authMiddleware');

router.get('/profile', authMiddleware, getProfile);
router.patch('/profile', authMiddleware, updateProfile);
router.delete('/profile', authMiddleware, deleteProfile);

module.exports = router;

```

### backend/scripts/backup.sh
Last modified: 2025-03-04T16:42:38.115Z
Size: 0.67 KB

```shell
#!/bin/bash
# backup.sh – skrypt tworzący kopię zapasową całej bazy danych

# Ustaw zmienne środowiskowe
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="mratuj"
DB_NAME="ratujemy_dane_dev"
BACKUP_DIR="./backups"
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/${DB_NAME}_full_backup_${DATE}.sql"

# Upewnij się, że katalog backup istnieje
mkdir -p "${BACKUP_DIR}"

# Wykonaj backup całej bazy danych przy użyciu pg_dump
pg_dump -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" "${DB_NAME}" > "${BACKUP_FILE}"

if [ $? -eq 0 ]; then
  echo "Backup bazy danych został utworzony: ${BACKUP_FILE}"
else
  echo "Błąd podczas tworzenia backupu bazy danych" >&2
  exit 1
fi

```

### backend/scripts/restore.sh
Last modified: 2025-03-04T16:42:38.116Z
Size: 0.65 KB

```shell
#!/bin/bash
# restore.sh – skrypt przywracający całą bazę danych z backupu

# Ustaw zmienne środowiskowe
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="mratuj"
DB_NAME="ratujemy_dane_dev"

# Ścieżka do pliku backupu przekazywana jako pierwszy argument
BACKUP_FILE="$1"

if [ -z "$BACKUP_FILE" ]; then
  echo "Usage: $0 /sciezka/do/backup_file.sql"
  exit 1
fi

# Przywróć bazę danych z backupu przy użyciu psql
psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" "${DB_NAME}" < "${BACKUP_FILE}"

if [ $? -eq 0 ]; then
  echo "Baza danych została przywrócona z backupu: ${BACKUP_FILE}"
else
  echo "Błąd podczas przywracania bazy danych" >&2
  exit 1
fi

```

### backend/server.js
Last modified: 2025-03-04T16:42:38.116Z
Size: 0.79 KB

```javascript
const app = require('./index');
const { sequelize } = require('./models');
const env = process.env.NODE_ENV || 'development';
const config = require(`./config/env/${env}`);
const PORT = process.env.PORT || 4000;

sequelize.sync()
  .then(() => {
    if (require.main === module) {
      app.listen(PORT, () => {
        console.log(`Serwer działa na porcie ${PORT}`);
        console.log("🔑 JWT_SECRET:", config.JWT_SECRET || "⛔ Nie znaleziono JWT_SECRET!");
      }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.error(`Port ${PORT} jest już zajęty. Spróbuj użyć innego portu.`);
        } else {
          console.error('Błąd uruchomienia serwera:', err);
        }
      });
    }
  })
  .catch(err => console.error('Błąd synchronizacji bazy:', err));

```

### backend/tests/admin.test.js
Last modified: 2025-03-04T16:42:38.116Z
Size: 2.07 KB

```javascript
const request = require('supertest');
const http = require('http');
const jwt = require('jsonwebtoken');
const app = require('../index'); // Upewnij się, że index.js eksportuje Twoją aplikację Express
const server = http.createServer(app);
const { sequelize, User } = require('../models');
const config = require('../config/env/development');

// Generujemy token dla administratora przy użyciu JWT_SECRET
const adminToken = jwt.sign(
  { id: 1, email: 'admin@example.com', role: 'admin' },
  config.JWT_SECRET,
  { expiresIn: '1h' }
);

describe('Admin API', () => {
  beforeAll(async () => {
    // Resetujemy model User – czysta baza dla testów
    await User.sync({ force: true });
    // Tworzymy przykładowych użytkowników (nie-admin)
    await User.create({
      email: 'user1@example.com',
      passwordHash: 'hashedpassword',
      role: 'user'
    });
    await User.create({
      email: 'user2@example.com',
      passwordHash: 'hashedpassword',
      role: 'user'
    });
  });

  describe('GET /api/v1/admin/users', () => {
    it('✅ Powinno zwrócić listę użytkowników dla admina', async () => {
      const res = await request(server)
        .get('/api/v1/admin/users')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);
      
      // Sprawdzamy, czy odpowiedź jest tablicą
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('POST /api/v1/admin/homepage', () => {
    it('✅ Powinno zaktualizować ustawienia strony głównej dla admina', async () => {
      const payload = {
        title: 'Nowy tytuł strony głównej',
        content: 'Nowa treść strony głównej'
      };

      const res = await request(server)
        .post('/api/v1/admin/homepage')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(payload)
        .expect(200);
      
      expect(res.body).toHaveProperty('message', 'Strona główna została zaktualizowana.');
    });
  });

  // Opcjonalnie: nie zamykamy połączenia, aby nie wpływać na kolejne testy
  // afterAll(async () => {
  //   await sequelize.close();
  // });
});

```

### backend/tests/auth.test.js
Last modified: 2025-03-04T16:42:38.117Z
Size: 3.56 KB

```javascript
/**
 * tests/auth.test.js
 * Testy autoryzacji: rejestracja, logowanie, usuwanie użytkownika.
 */
const request = require('supertest');
const { sequelize, User } = require('../models');
const app = require('../index');

describe('🔐 Testy autoryzacji', () => {
  beforeAll(async () => {
    // Aby uniknąć błędów związanych z relacjami (np. w tabeli Posts)
    // synchronizujemy tylko model User, który jest potrzebny w testach auth.
    await User.sync({ force: true });
  });

  describe('POST /api/v1/auth/register', () => {
    it('✅ Powinno zarejestrować użytkownika przy poprawnych danych', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'secret123',
        confirmPassword: 'secret123'
      };

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send(payload)
        .expect(201);

      expect(res.body).toHaveProperty('message', 'Użytkownik zarejestrowany.');
      const user = await User.findOne({ where: { email: 'test@example.com' } });
      expect(user).not.toBeNull();
    });

    it('❌ Powinno zwrócić błąd 400, gdy e-mail już istnieje', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'secret123',
        confirmPassword: 'secret123'
      };

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send(payload)
        .expect(400);

      expect(res.body.error).toMatch(/Użytkownik już istnieje/i);
    });

    it('❌ Powinno zwrócić błąd 400, gdy hasła nie pasują do siebie', async () => {
      const payload = {
        email: 'newuser@example.com',
        password: 'secret123',      // poprawna długość
        confirmPassword: 'secret124'  // różnią się od siebie
      };

      const res = await request(app)
        .post('/api/v1/auth/register')
        .send(payload)
        .expect(400);

      expect(res.body.error).toMatch(/Hasła nie pasują do siebie/i);
    });
  });

  describe('POST /api/v1/auth/login', () => {
    it('✅ Powinno zalogować użytkownika i zwrócić token', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'secret123'
      };

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send(payload)
        .expect(200);

      expect(res.body).toHaveProperty('token');
    });

    it('❌ Powinno zwrócić 401, gdy podane jest nieprawidłowe hasło', async () => {
      const payload = {
        email: 'test@example.com',
        password: 'wrongpassword'
      };

      const res = await request(app)
        .post('/api/v1/auth/login')
        .send(payload)
        .expect(401);

      expect(res.body.error).toMatch(/Nieprawidłowe hasło/i);
    });
  });

  describe('DELETE /api/v1/auth/delete', () => {
    let token;
    beforeAll(async () => {
      // Logujemy się, by uzyskać token
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'test@example.com', password: 'secret123' });
      token = res.body.token;
    });

    it('✅ Powinno usunąć użytkownika przy ważnym tokenie', async () => {
      const res = await request(app)
        .delete('/api/v1/auth/delete')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(res.body.message).toBe('Użytkownik usunięty.');
      const user = await User.findOne({ where: { email: 'test@example.com' } });
      expect(user).toBeNull();
    });
  });

  afterAll(async () => {
    // Jeśli korzystasz z global setup/teardown, nie zamykaj połączenia tutaj.
  });
});

```

### backend/tests/contact.test.js
Last modified: 2025-03-04T16:42:38.117Z
Size: 1.63 KB

```javascript
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

```

### backend/tests/email.test.js
Last modified: 2025-03-04T16:42:38.117Z
Size: 0.66 KB

```javascript
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

```

### backend/tests/homepage.test.js
Last modified: 2025-03-04T16:42:38.117Z
Size: 1.38 KB

```javascript
const request = require('supertest');
const http = require('http');
const jwt = require('jsonwebtoken');
const app = require('../index');
const server = http.createServer(app);
const { sequelize, User } = require('../models');
const config = require('../config/env/development');

// Generujemy token dla administratora
const adminToken = jwt.sign(
  { id: 1, email: 'admin@example.com', role: 'admin' },
  config.JWT_SECRET,
  { expiresIn: '1h' }
);

describe('Homepage API', () => {
  beforeAll(async () => {
    // Resetujemy model User – czysta baza dla testów
    await User.sync({ force: true });
    // Tworzymy przykładowego admina, aby middleware requireAdmin akceptował token
    await User.create({
      email: 'admin@example.com',
      passwordHash: 'hashedpassword',
      role: 'admin'
    });
  });

  describe('POST /api/v1/admin/homepage', () => {
    it('should update homepage settings with valid data', async () => {
      const payload = {
        title: 'New Homepage Title',
        content: 'New homepage content'
      };

      const res = await request(server)
        .post('/api/v1/admin/homepage')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(payload)
        .expect(200);

      expect(res.body).toHaveProperty('message', 'Strona główna została zaktualizowana.');
    });
  });

  afterAll(async () => {
    await sequelize.close();
  });
});

```

### backend/tests/media.delete.test.js
Last modified: 2025-03-04T16:42:38.118Z
Size: 0.86 KB

```javascript
const request = require('supertest');
const { sequelize, Media } = require('../models');
const app = require('../index');

describe('📷 Test usuwania Media', () => {
  let mediaRecord;

  beforeAll(async () => {
    await sequelize.sync({ force: true });
    // Utwórz rekord Media do usunięcia
    mediaRecord = await Media.create({
      fileName: 'toDelete.jpg',
      originalName: 'original_toDelete.jpg',
      type: 'image/jpeg',
      size: 1500,
      url: '/uploads/toDelete.jpg'
    });
  });

  it('✅ Powinno usunąć plik o danym ID', async () => {
    const res = await request(app)
      .delete(`/api/v1/media/${mediaRecord.id}`)
      .expect(200);
    expect(res.body.message).toMatch(new RegExp(`Plik o ID ${mediaRecord.id} został usunięty`, 'i'));

    const deleted = await Media.findByPk(mediaRecord.id);
    expect(deleted).toBeNull();
  });

 
});

```

### backend/tests/media.test.js
Last modified: 2025-03-04T16:42:38.118Z
Size: 1.05 KB

```javascript
const request = require('supertest');
const { sequelize, Media } = require('../models');
const app = require('../index');

describe('📷 Testy Media', () => {
  beforeAll(async () => {
    // Upewnij się, że baza jest czysta; synchronizujemy model Media
    await sequelize.sync({ force: true });
    // Opcjonalnie możesz utworzyć kilka rekordów:
    await Media.bulkCreate([
      { fileName: 'image1.jpg', originalName: 'original1.jpg', type: 'image/jpeg', size: 2048, url: '/uploads/image1.jpg' },
      { fileName: 'image2.jpg', originalName: 'original2.jpg', type: 'image/jpeg', size: 1024, url: '/uploads/image2.jpg' }
    ]);
  });

  it('✅ Powinno zwrócić listę plików', async () => {
    const res = await request(app)
      .get('/api/v1/media')
      .expect(200);

    // Oczekujemy, że odpowiedź zawiera obiekt z kluczami total i files
    expect(res.body).toHaveProperty('total');
    expect(res.body).toHaveProperty('files');
    expect(Array.isArray(res.body.files)).toBe(true);
    expect(res.body.total).toBe(res.body.files.length);
  });


});

```

### backend/tests/media.upload.test.js
Last modified: 2025-03-04T16:42:38.118Z
Size: 0.80 KB

```javascript
const request = require('supertest');
const { sequelize, Media } = require('../models');
const app = require('../index');

describe('📷 Test uploadu Media (JSON payload)', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('✅ Powinno przesłać dane JSON i utworzyć rekord Media', async () => {
    const payload = {
      fileName: 'uploaded.jpg',
      originalName: 'original_uploaded.jpg',
      type: 'image/jpeg',
      size: 3000,
      url: '/uploads/uploaded.jpg'
    };

    const res = await request(app)
      .post('/api/v1/media')
      .send(payload)
      .expect(201);

    expect(res.body).toHaveProperty('message', '✅ Plik przesłany!');
    expect(res.body.file).toHaveProperty('id');
    expect(res.body.file.fileName).toBe('uploaded.jpg');
  });


});

```

### backend/tests/menu.test.js
Last modified: 2025-03-04T16:42:38.118Z
Size: 1.07 KB

```javascript
// tests/menu.test.js
const request = require('supertest');
const { sequelize, Menu } = require('../models');
const app = require('../index');

describe('🍔 Testy Menu', () => {
  beforeAll(async () => {
    // Synchronizujemy bazę, aby utworzyć tabele. Jeśli chcesz testować tylko Menu, możesz synchronizować tylko ten model:
    await sequelize.sync({ force: true });
  });

  it('✅ Powinno utworzyć rekord Menu', async () => {
    const payload = {
      title: 'Home',
      slug: 'home',
      link: '/home',
      label: 'Start'
    };

    const res = await request(app)
      .post('/api/v1/menu')
      .send(payload)
      .expect(201);

    expect(res.body).toHaveProperty('message', 'Menu utworzone');
    expect(res.body.menu).toHaveProperty('id');
    expect(res.body.menu.title).toBe(payload.title);
  });

  it('✅ Powinno zwrócić listę rekordów Menu', async () => {
    const res = await request(app)
      .get('/api/v1/menu')
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  
});

```

### backend/tests/models.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 4.01 KB

```javascript
// tests/models.test.js
const { sequelize, User, Seo, Menu, Media, Page, Post } = require('../models');

describe('🛠️ Testy modeli', () => {
  beforeAll(async () => {
    // Resetujemy bazę na potrzeby testów
    // w środowisku NODE_ENV=test łączy się do testowej bazy
    await sequelize.sync({ force: true });
  });

  // -------------------------------------------------------
  // 1. Test modelu User
  // -------------------------------------------------------
  test('✅ Model User - sprawdzamy utworzenie', async () => {
    // Tworzymy encję użytkownika z wymaganymi polami
    const user = await User.create({
      email: 'john.doe@example.com',
      passwordHash: 'hashed_password_sample'
      // np. jeśli masz w modelu pole "role" z defaultValue: 'user',
      // nie musisz go podawać
    });
    expect(user).toBeDefined();
    expect(user.id).toBeTruthy();
    expect(user.email).toBe('john.doe@example.com');
  });

  // -------------------------------------------------------
  // 2. Test modelu Seo
  // -------------------------------------------------------
  test('✅ Model Seo - sprawdzamy utworzenie', async () => {
    const seo = await Seo.create({
      pageId: 123,
      title: 'SEO Title Test',
      description: 'SEO description test',
      keywords: 'keyword1, keyword2'
    });
    expect(seo).toBeDefined();
    expect(seo.id).toBeTruthy();
    expect(seo.pageId).toBe(123);
  });

  // -------------------------------------------------------
  // 3. Test modelu Menu
  // -------------------------------------------------------
  test('✅ Model Menu - sprawdzamy utworzenie', async () => {
    // Załóżmy, że w modelu Menu są pola: title, slug, link, label itp.
    const menu = await Menu.create({
      title: 'Home Menu',
      slug: 'home-menu',
      link: '/home',
      label: 'Start'
    });
    expect(menu).toBeDefined();
    expect(menu.id).toBeTruthy();
    expect(menu.title).toBe('Home Menu');
    // ...
  });

  // -------------------------------------------------------
  // 4. Test modelu Media
  // -------------------------------------------------------
  test('✅ Model Media - sprawdzamy utworzenie', async () => {
    // Załóżmy, że Media ma: fileName, size, url, type
    const media = await Media.create({
      fileName: 'image.jpg',
      size: 12345, // np. rozmiar w bajtach
      url: 'https://example.com/image.jpg',
      type: 'image'
    });
    expect(media).toBeDefined();
    expect(media.id).toBeTruthy();
    expect(media.fileName).toBe('image.jpg');
    // ...
  });
  // -------------------------------------------------------
  // 5. Test modelu Page
  // -------------------------------------------------------
  test('✅ Model Page - sprawdzamy utworzenie', async () => {
    // Załóżmy, że w modelu Page są pola title, slug, content
    const page = await Page.create({
      title: 'Example Page',
      slug: 'example-page',
      content: 'Lorem ipsum...'
    });
    expect(page).toBeDefined();
    expect(page.id).toBeTruthy();
    expect(page.title).toBe('Example Page');
  });

  // -------------------------------------------------------
  // 6. Test modelu Post (z relacją do User)
  // -------------------------------------------------------
  test('✅ Model Post - relacja z User', async () => {
    // 1. Tworzymy użytkownika
    const user = await User.create({
      email: 'author@example.com',
      passwordHash: 'super_secret'
    });

    // 2. Tworzymy post (wymaga: title, slug, content, authorId)
    const post = await Post.create({
      title: 'Pierwszy post',
      slug: 'pierwszy-post',
      content: 'Treść posta testowego',
      authorId: user.id
    });

    // 3. Sprawdzamy klucz obcy
    expect(post.authorId).toBe(user.id);

    // 4. Dzięki relacji (index.js) mamy post.getUser()
    const relatedUser = await post.getUser();
    expect(relatedUser.email).toBe('author@example.com');
  });

  // -------------------------------------------------------
  // Koniec testów
  // -------------------------------------------------------
 
});

```

### backend/tests/page.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 2.37 KB

```javascript
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

```

### backend/tests/post.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 1.44 KB

```javascript
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

```

### backend/tests/seo.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 1.63 KB

```javascript
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

```

### backend/tests/user.test.js
Last modified: 2025-03-04T16:42:38.119Z
Size: 3.05 KB

```javascript
/**
 * tests/user.test.js
 * Testy operacji na profilu użytkownika: pobieranie, aktualizacja, usuwanie.
 */
const request = require('supertest');
const { sequelize, User } = require('../models');
const app = require('../index');

describe('🔐 Testy operacji na profilu użytkownika', () => {
  let token;

  beforeAll(async () => {
    // Synchronizujemy model User
    await User.sync({ force: true });
    // Rejestrujemy użytkownika, aby mieć konto do testów
    await request(app)
      .post('/api/v1/auth/register')
      .send({
        email: 'test@example.com',
        password: 'secret123',
        confirmPassword: 'secret123'
      })
      .expect(201);
    // Logujemy się, by uzyskać token
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'test@example.com', password: 'secret123' })
      .expect(200);
    token = res.body.token;
  });

  describe('GET /api/v1/user/profile', () => {
    it('✅ Powinno zwrócić dane użytkownika przy ważnym tokenie', async () => {
      const res = await request(app)
        .get('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      expect(res.body.email).toBe('test@example.com');
    });

    it('❌ Powinno zwrócić 401, gdy brak tokena', async () => {
      const res = await request(app)
        .get('/api/v1/user/profile')
        .expect(401);
      expect(res.body.error).toMatch(/token/i);
    });
  });

  describe('PATCH /api/v1/user/profile', () => {
    it('✅ Powinno zaktualizować hasło użytkownika', async () => {
      const res = await request(app)
        .patch('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          newPassword: 'newSecret999',
          confirmPassword: 'newSecret999'
        })
        .expect(200);
      expect(res.body.message).toBe('Profil zaktualizowany.');
    });

    it('❌ Powinno zwrócić 400, gdy brak confirmPassword', async () => {
      const res = await request(app)
        .patch('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          newPassword: 'xxxyyy'
        })
        .expect(400);
      // Zmieniamy oczekiwaną wiadomość na "Oba pola są wymagane"
      expect(res.body.error).toMatch(/oba pola są wymagane/i);
    });
    
  });

  describe('DELETE /api/v1/user/profile', () => {
    it('✅ Powinno usunąć konto przy ważnym tokenie', async () => {
      const res = await request(app)
        .delete('/api/v1/user/profile')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      expect(res.body.message).toBe('Użytkownik usunięty.');
      const user = await User.findOne({ where: { email: 'test@example.com' } });
      expect(user).toBeNull();
    });

    it('❌ Powinno zwrócić 401, gdy token jest niepoprawny', async () => {
      const res = await request(app)
        .delete('/api/v1/user/profile')
        .set('Authorization', 'Bearer invalidTokenHere')
        .expect(401);
      expect(res.body.error).toMatch(/Nieprawidłowy token/i);
    });
  });

  
});

```

### frontend/.gitignore
Last modified: 2025-03-04T16:42:38.120Z
Size: 0.30 KB

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

### frontend/README.md
Last modified: 2025-03-04T16:42:38.120Z
Size: 3.28 KB

```markdown
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```

### frontend/package.json
Last modified: 2025-03-04T16:42:38.120Z
Size: 1.15 KB

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:4000",
  "dependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.4.0",
    "react-quill": "^2.0.0",
    "react-router-dom": "^7.1.5",
    "react-scripts": "5.0.1",
    "styled-components": "^6.1.15",
    "typed.js": "^2.1.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.2",
    "tailwindcss": "^3.3.3"
  }
}

```

### frontend/postcss.config.js
Last modified: 2025-03-04T16:42:38.120Z
Size: 0.11 KB

```javascript
module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  };
  
```

### frontend/public/index.html
Last modified: 2025-03-04T16:42:38.121Z
Size: 1.68 KB

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

### frontend/public/manifest.json
Last modified: 2025-03-04T16:42:38.122Z
Size: 0.48 KB

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

### frontend/public/robots.txt
Last modified: 2025-03-04T16:42:38.122Z
Size: 0.07 KB

```
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

### frontend/src/App.css
Last modified: 2025-03-04T16:42:38.122Z
Size: 0.00 KB

```css

```

### frontend/src/App.js
Last modified: 2025-03-04T16:42:38.122Z
Size: 1.42 KB

```javascript
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./admin/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./admin/Dashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Contact from "./pages/Contact";
import EditHomePage from "./admin/EditHomepage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Panel administratora */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/admin/edit-home" 
        element={
          <ProtectedRoute>
            <AdminLayout>
              <EditHomePage />
            </AdminLayout>
          </ProtectedRoute>
        } 
      />
    </Routes>
  </Router>
);

export default App;

```

### frontend/src/App.test.js
Last modified: 2025-03-04T16:42:38.123Z
Size: 0.24 KB

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

### frontend/src/admin/AdminFooter.js
Last modified: 2025-03-04T16:42:38.123Z
Size: 0.31 KB

```javascript
// src/admin/AdminFooter.js
import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="bg-white text-center py-4 border-t">
      <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default AdminFooter;

```

### frontend/src/admin/AdminHeader.js
Last modified: 2025-03-04T16:42:38.123Z
Size: 0.52 KB

```javascript
// src/admin/AdminHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-brand-dark">
        <Link to="/admin">Admin Dashboard</Link>
      </div>
      <div>
        <button className="text-brand-dark hover:text-brand-blue transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;

```

### frontend/src/admin/AdminLayout.js
Last modified: 2025-03-04T16:42:38.123Z
Size: 0.60 KB

```javascript
// src/admin/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex flex-col flex-grow">
        <header className="bg-white shadow px-4 py-3">
          <h1 className="text-2xl font-bold">Panel Admina</h1>
        </header>
        <main className="flex-grow p-6 bg-gray-100">
          {children ? children : <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

```

### frontend/src/admin/AdminSidebar.js
Last modified: 2025-03-04T16:42:38.124Z
Size: 0.94 KB

```javascript
// src/admin/AdminSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-brand-dark text-white p-4">
      <h2 className="text-xl font-bold mb-6">Panel Admina</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink 
              to="/admin" 
              className={({ isActive }) => isActive ? "font-bold text-brand-blue" : "hover:text-gray-300"}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admin/edit-home" 
              className={({ isActive }) => isActive ? "font-bold text-brand-blue" : "hover:text-gray-300"}
            >
              Edytuj stronę główną
            </NavLink>
          </li>
          {/* Dodaj inne linki według potrzeb */}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

```

### frontend/src/admin/Dashboard.js
Last modified: 2025-03-04T16:42:38.124Z
Size: 0.34 KB

```javascript
// src/admin/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">This is the admin dashboard. Here you can manage your content and settings.</p>
    </div>
  );
};

export default Dashboard;

```

### frontend/src/admin/EditContent.js
Last modified: 2025-03-05T04:02:21.345Z
Size: 1.51 KB

```javascript
// EditContent.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditContent = ({ initialContent, onChange }) => {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [content, setContent] = useState(initialContent || '');

  const handleToggleMode = () => setIsHtmlMode(prev => !prev);

  const handleContentChange = (value) => {
    setContent(value);
    onChange(value);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleToggleMode}
        className="mb-2 bg-gray-200 px-3 py-1 rounded"
      >
        Przełącz tryb: {isHtmlMode ? 'HTML' : 'WYSIWYG'}
      </button>
      {isHtmlMode ? (
        <textarea
          className="w-full border p-2 rounded h-40"
          value={content}
          onChange={(e) => handleContentChange(e.target.value)}
        />
      ) : (
        <ReactQuill 
          value={content} 
          onChange={handleContentChange} 
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['link', 'image', 'video'],
              ['clean']
            ]
          }}
          formats={[
            'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'link', 'image', 'video'
          ]}
        />
      )}
    </div>
  );
};

export default EditContent;

```

### frontend/src/admin/EditHomepage.js
Last modified: 2025-03-06T15:50:12.702Z
Size: 3.79 KB

```javascript
// frontend/src/admin/EditHomepage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditHomepage = () => {
  const [homepageData, setHomepageData] = useState({
    heroTitle: '',
    heroSubtitle: '',
    heroBackground: '',
    mainContent: '',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    textColor: '#000000'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Pobieranie danych strony głównej z API
  useEffect(() => {
    axios.get('/api/v1/homepage')
      .then(response => {
        if (response.data && response.data.homepage) {
          setHomepageData(response.data.homepage);
        }
      })
      .catch(err => {
        console.error('Błąd pobierania strony głównej:', err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHomepageData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Pobranie tokena z localStorage
    const token = localStorage.getItem('token');
    console.log("Token:", token); // Debugowanie – sprawdź czy token jest prawidłowy

    if (!token) {
      setError('Brak tokena. Upewnij się, że jesteś zalogowany.');
      setLoading(false);
      return;
    }

    axios.post('/api/v1/homepage', homepageData, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then(response => {
      console.log('Strona główna została zaktualizowana:', response.data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Błąd podczas aktualizacji strony głównej:', err);
      setError('Błąd podczas aktualizacji strony głównej.');
      setLoading(false);
    });
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Edytuj stronę główną</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Tytuł sekcji hero:</label>
          <input
            type="text"
            name="heroTitle"
            value={homepageData.heroTitle}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Podtytuł sekcji hero:</label>
          <textarea
            name="heroSubtitle"
            value={homepageData.heroSubtitle}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Link do tła sekcji hero:</label>
          <input
            type="text"
            name="heroBackground"
            value={homepageData.heroBackground}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Główna treść strony:</label>
          <textarea
            name="mainContent"
            value={homepageData.mainContent}
            onChange={handleInputChange}
            className="w-full border p-2 rounded h-40"
          />
        </div>
        {/* Dodatkowe pola, np. fontFamily, fontSize, textColor, można dodać według potrzeb */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition"
          disabled={loading}
        >
          {loading ? 'Zapisywanie...' : 'Zapisz zmiany'}
        </button>
      </form>
    </div>
  );
};

export default EditHomepage;

```

### frontend/src/admin/ManageHomeSections.js
Last modified: 2025-03-06T15:40:32.382Z
Size: 2.47 KB

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageHomeSections = () => {
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({
    type: 'about',
    title: '',
    content: '',
    order: 0
  });

  const fetchSections = () => {
    axios.get('/api/v1/homepage/sections')
      .then(response => {
        setSections(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania sekcji:', error);
      });
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const handleInputChange = (e) => {
    setNewSection({ ...newSection, [e.target.name]: e.target.value });
  };

  const addSection = (e) => {
    e.preventDefault();
    axios.post('/api/v1/homepage/sections', newSection)
      .then(response => {
        fetchSections();
        setNewSection({ type: 'about', title: '', content: '', order: 0 });
      })
      .catch(error => {
        console.error('Błąd dodawania sekcji:', error);
      });
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Zarządzanie Sekcjami Strony Głównej</h2>
      <form onSubmit={addSection} className="mb-6">
        <input 
          type="text" 
          name="title" 
          placeholder="Tytuł sekcji" 
          value={newSection.title} 
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <textarea 
          name="content" 
          placeholder="Treść sekcji" 
          value={newSection.content} 
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input 
          type="number" 
          name="order" 
          placeholder="Kolejność" 
          value={newSection.order} 
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Dodaj sekcję
        </button>
      </form>
      <div>
        {sections.map(section => (
          <div key={section.id} className="border-b py-2">
            <h3 className="font-semibold">{section.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
            <p>Kolejność: {section.order}</p>
            {/* Opcjonalnie przyciski edycji/usuwania */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageHomeSections;

```

### frontend/src/api/api.js
Last modified: 2025-03-04T16:42:38.124Z
Size: 1.16 KB

```javascript
// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Upewnij się, że adres odpowiada Twojemu backendowi
});

// Przykładowe metody – rozszerzaj zgodnie z endpointami backendu
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const sendContactMessage = async (formData) => {
  const response = await api.post('/contact', formData);
  return response.data;
};

export const fetchPosts = async () => {
  const response = await api.get('/post');
  return response.data;
};

export const fetchMedia = async () => {
  const response = await api.get('/media');
  return response.data;
};

// Dodane funkcje dla strony głównej
export const fetchHomepage = async () => {
  const response = await api.get('/homepage');
  return response.data;
};

export const updateHomepage = async (data) => {
  const response = await api.post('/homepage', data);
  return response.data;
};

export default api;

```

### frontend/src/assets/images/about/img1
Last modified: 2025-03-04T16:42:38.128Z
Size: 315.51 KB

```
���� Exif  MM *         ��(ICC_PROFILE         mntrRGB XYZ             acsp                             ��     �-                                                   	desc   �   trXYZ  d   gXYZ  x   bXYZ  �   rTRC  �   (gTRC  �   (bTRC  �   (wtpt  �   cprt  �   <mluc          enUS   X    s R G B                                                                                XYZ       o�  8�  �XYZ       b�  ��  �XYZ       $�  �  ��para        ff  �  Y  �  
[        XYZ       ��     �-mluc          enUS        G o o g l e   I n c .   2 0 1 6�� C 	


 ' .)10.)-,3:J>36F7,-@WAFLNRSR2>ZaZP`JQRO�� C&&O5-5OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO�� �" ��           �� E   !1AQaq�"2���B#3R�$4b�r���C%5c�SsD&T����            �� #   !1AQ2"a��   ? �3'6E��[G)���̨ �y� Y$�J�m8������XH�p@ !H�b.���`{� �ȕ$�PvC�Y����"��|�h��CId�,1��@�����Y�_p�E�  ��`<]ɒ��(Y �8%�e�@B� H�]���
@"�D  s`!��|x,���K�	�bX}���b��wp/Ȑ,�G X&!�m��
��xp^ �C^JL�$(������ 6&���.@��
 {� $"Ů0����, Ar, �r"͉=�@�� ��K��=��\ +}�%��<���{ �� 8����r)�m�  x���k�` 0 �,��?�&rnh��p �e�8�M� �x < &�Ȁ)9`8!H xyE"a�y��#� ������0���-�Q����{k��_����N".F��N
լ �3�/$#<�_��cR�V8��s�j.�1j�/�0=[MK�=�&�������ڝj�����}�9��҈	E���>�h��0!~Ā$�Q�Z�ȋ�?��C��6,PG�E�=�d<AF<.�ڟbE���2�Q�p�4��T�H5T��n�0}�U�>���:��������OEt���SXG�<��Oa�0��r+K R7.�EM�v�&������)�uO>v��|��-:�6�+'�^EUWP��6��s����j�c5�F���}��Q�6��R}Zc��:t�ڊ�X�BN=^�q�)��!_��3���Z�~���I��Fνn���'���������S� �ʽ�g�?ק�~瞼I��r��nJ<����j� �i��mӅ'���q�5��j�fu7��L�']��G[5���{����A�[L�V�I6t�J�������Z���+�]��*�:���\��T��և]Ur�,�ϧ:�'��}��m	�e��j�]?k�����Z����?��v�s��z-*�۹����_�x;�Eq���F��:��'gq��j��T�G����D�Lpv�$S��I�w,^�ß v�܀�����j )2���c(�[���Z�B��Zsdh�����c1,����-�U�W$��k����rb�s�5˨ކ�ҭ5�?C���Z%|������jҭC��G8u��Y�<�}�:�&�N�uqjI!�N���Ň N��8'� @S3)y������7+a`
��0!W�I`	��� O&�,0�� rR �� � ��� | �vD��� 0�@b!�`f
$0(�lA��) ��B��� �� ��Q��,�N !�y���� dx����2@8\(��
�`.�	%�<�D��)rF�� ��1�=�� ���@��F !�H�d�=������
�%bx �G�� D+8��`$<�h6��w{���g� O�Y�E-ب5ܜܯ$�n@j`�`;�$<dr.�@q$`"��O~�"B�!�[@8#���ݎ�9gz���!ۼI��cM^Y�I����/#��vEn>I������n���K��'�y��xʒZ$�y�X�jR̵�-bF ��k�֥y�È�4��%���Ne�7/�`�Z�V~Ym�>��B�4��6�ʎ�E���W����^Cj��~J�KO�TH �3{�`���@9j�kD� �6K��L���_"��^J�Bi(�۱jN;����	��/$j�@���#�S6",�w������	� ���Y,���i~��w%���q`J���9*Q�v^n�v����Q��n�1�6���aJ �b�8	º���*w��	�{��pYN ���L�و�IBf�%݆��r	h�����#��e�~9����	^c� Gv�ӊQ���[�r���-�3�Y�dE�_ʹ�$O�KT�s�0-UYtą��)s� ��`*N���K�I�G���-ػ�J~#�+��J^;�)$�X;߰X������p�skW�M�<s,��$4��[��E�YJ.f�P��ep�OaR�3�;�/�՜˿b;�{��4Iv`~�4��`c�[�+����(b�^@��^nL ����l�@�!W�@��7�'7�JrO#��$�w*�����
Ǹ� � �}�2� O% \�N@�%���Y]��^��$Ix %��( �M��$"I�@HY�2#�>� >B#�dC ��$�EH�yO<��܏�E�#�y�8� �Af2 �{��PlE� 
��FP/�O�7x�u�T���8`�����t8($��2��d	~���"l d䋀)"Db�� �� �!����A$��{�p R1p �ZH>@>� �/�
��C�
���_�a��$��/�y�+ P@��,�Q�$I�@�Ky	 ^H� �D�� B@ ,�&Y@A=�#��    X�X���8����*5�,����_����_��� ța�\E�@,69A�|%�Q[�jS�r�jF������Z"�3�w���8���Vi�T}�+UЂ���j�#�y�s$[ث��� O�# �!.�)+�,a��
�� �2�J����C�5p2���ė�p�߰����؏85��8笿�g緮kie3�Z�}:�l~yM�~N��>~�O�#�rκׄ�uZ�=FNJȊ��I��LX�el6�̠:6�Jjʓ)�E+��Coթ��J���x�t�k��춚�[V�J�VWd|��j�z�p��򬗂,`��b��s���PG�i�}Z\�|���Ss�Q�QϧN�j2w������j_�KX����=��?�zU_���U� �(�=� �u��/:����J���Q�&�S2�:��B�۟�p�� ��� ���iҠ�� ��G%��?_��_ᣤ)�4��o�����[���T�O���t�b�=z�U���m-����I7^#W��<#�~Э��ӥ�����E���Z���Ce������GSK�nw�?m�����tkSeZVg�ލ=l�'�Ʀ�w��o^�K��͑�� Q�;��ҫq���K4S3#áJ�M.�_����Ԉ�Q���=s]��6�!v�ȈG*�@���Ef,D�bńC+d,�� �!+�h�;�R�j.�X�V��s�&��d�j-%�}�UL"?�e\T���.	��-2ѕ�L�r�&��tg�CS��T�ʥs8r���S'&���=8��߰ݽ*�����z��S\��U:j��c�w�-QS�G=8u��Xpf��JK&��*")P�p�@ �H� 6 p$c�����
�@�P"� W�<� &�d�Hp �D��'�xp �n�C,�� $� ��_�H`(,� bd2� dL9 ��0H( y 9'%�=��  9� &0P����;"���X	�$>${ '-�@�JDE%��?pdH@B��ddE"*RK�� \d"K��&nA;� )
����pX�N@M��`�	���FT�+Ÿ&Cl��X�N� �{�P�($�H�q�)�"��P�a��]Ռ�7
7"�a� �����/a�dM���bş܃%|<�x."�q�0i��9��qj�;j?�x87���q$j�&B���|�*ː�`�w`m(gJe;�1J��lU-�6�V��9��m_@#X��7.,H�{�t����R��R��G	9:UJ�s|���d�d�<RK�HRyENQ�l0�E�8�'�/�+8�U�Լ\�� %�%��$wa�6�����U3�i�W �߰v�*-Wv�D�C�8L�.	���ay"w �(spڒD�r
��4�~�K� T��ԑƬ������ܖ����KI9H��U�V�P����$MD7(G�*T�X�n��'~@�{�ּ�)+�B�d^I�VK� v�橆gٕ`����p&뒩V(�.WEVY�����Ng��L�TV��a*r�x����0!��K/�<@��E�R]V#Q-��:e���
�h��0�T��!F~��w&i��&� m�lrI� I� .��n�>Z��bl^0�g�#�  g��*��G7K��O Kt�]q���I}�L�ɥr'B`,#�C�rG
� Wԧ�*sO�IiM9�}�RL;�`*�T&`�5�#����x,�!��$���o���Ev N6 NC��g $�ت
��^B�+V�*P��Xf�%�g,
�V��=�Y�J����H�E�/ 9�B�"�rnXD�������d�*ț�v��9�����O�b�H\���n�$�ܷ���#}��}��r e� �0�y��d�-#8  ��#�[��FE� Bؖ � ��e @�pO�\ �Yo������"İȟ
�l�I=����ߒ�W�� Ȁ 	�ObJy��Kp��J,0��(�F!P`9�w �� �  B��,� >�� �-�� p���@ $^W#�Op$��Ù� ,\$&��.�'%��Ŋ��;�=�+@   ���lP ^@�	�E��!/# G� �R� 
�2i2��i}IY<g��5���Ԝ��w��Z!]�a���dDHb�{���I�%�_�WL��U'�]3��1�@�2�bÛ�{z�6>���t+Y�������I�#���TD��V�����=��9&@���y�K#�d���
G�2rP~I�^H��y#Ey&@����#�$�ї�\	��%F�I�p1Z]Oc���ԏ���������ο��>}n�-���7�8���5S2���TU{�"x#��g�7�r��zMS�MMI�y5�`��?Qz{w�B��̏�������)�;��˛}�+GY�J�*�J���>���ZYEN2b�_����F��)>��#k�}Zg���o�}4u�>�^N:nZ����S�
�7��� �4.z[��ߌ�� �W/U��}5���Y?U;8�����?$��l�Z��)��=ov���3z�i1�q����g���zf�ߥB���ڄ}=8T�����ЩӴ�NТ�;+��8oZ=UY�I�AV�_���V���z6PJi���ґ�u��Ò��Z�ux1	' ~3�To,�7<1>����S�Ϙ�����EK������8gz_ڤ��Lw��)��������b+H�!B�$r#���V'76�ȑ�-S&�cQ&kMR���2�J�j�ȫY�W�a�j��1^H�%��C.p9�?A�KveDb��G*Db�kܜ\ܸ�k�%��KM7&��/8g~zp�>��>�T����QU'�5^�i�C>��t�iR��ߛ�s�zɜ�QcL!`B/@�� F^A �  
ba`�Hw`6   ��� y�	�� �\��` !^� ��  2��`y(	� ܾA9 �Ȅ@e����L   $�'�<��@�y 8� ��#���6+d�	�s� 2X���"? ^�"��_ \d{9-�1!�NK�y �#ȸ�O�H<�y2���᠀@>�. ���_��x(�����^�|��q�E��K�\YH�Þ@��1�q�,�K�+��p,Hk�H�\�n@$=ʾI��2��<�(�nC^@�"a��$��e�r�0=N¤���_7<�JA��K�j�� �QZ{�m��&�hZ@aw�<>�o�/����7Kᜑ֘�r�=� Rs�~b���8�ܢ���"����X_q�*��o�2��$�E���Y���Aʥ�x3R���[81\IU��ʿ�\pN��@@i�M��BaŜ�p'*[b�7/=B�A�����	�8��+d�K�2�j己�؂�A�DR�?b^<̢�V$��WrM��RV変-�5o`^B�o�ň4�|ؐ�]��M�ҜܱhV~IOg�6hM��_H� |9ș�`�����i2T�ҲXw�@���䪤�i����udq�-�"�KM��bz�$Gn	x���(L]c䉾��w.l�P\���������5��J��m�Wf��$��u~Ľ�X$ڞ�f��d���t"\8*�0M�0�Ns�E��.�X	�[L�%��q�0�)��$���c�f�����sTv"��l�w� �c��M����B���D�%L\(K����kX�ȝJ�'+�KdL�>Ū��䒦ː�=P�O�Hw#�����ߘ#JapMO6�"��Y�H�K� ��k�u7Ć��~�
�e�/���-�P�M��oq���%�g��,�Y�TL<`+dy�B�y+@e��M��B�E�< �dO ,ܜܰUG�A` y����+��.�w Մ!��`<�B�J��X,�<R�E7�K���Dx�5��e	i &��@�I;��&�ༀ �P�F� ��o?��b<�; �h ��#|���6%��#�Ko�#���� �9D��6KA>E���r0�	�|�=�h � Y���`Ve��2_ EfY
\�x�"W5�$r�Ŋ���Hp"yh~�O�\�� `Ad �G�p pI�&m i���x܌Hܲ�ah���n��jn�0� ��� d /� _a��	�ht�� {(�,ؐVHU�� 1r�$C�}��  pR�  �(�x�. W䃑� @ ��) � `CT�RA�}U}����^���|�]�q�1p���0�r^l\�@s pBY,Z��
\6l�2T����`<ڊ�z+�Q��	��:�&��(��:�t��������E]J9ب�8ew�H4A�r�""^C����1�����> ����\���}��+��.[rј�Ǹw�Dn,a�f\��j�ҫ���>���}�E:m\���M����c����j�%�Q�N��stp���=q�K2��q&fJ����$�{�Yg Na6#� ���xA?%}0����vyMO���*n������������J�����]kL!	+0��4��G�T�����w�?���?��m�K���t���t��K���?��ϣ�ާHW�}���k'�D�� �c��m����o������ �� b��Z̍_�Tܚ��ï��l��^N����N[��_�~�_��)�x7�l89��<���m�=��N&�~�iT&�[/]�l�Ίk�\<��{dӴ�=m7�ޕ���9���Z�vO��-M7�(������o�����]����k���	LL�Ҹc���G�54��K<{��O����|�~Ks��mu*�բ�j��A�髅�*��Z��M֫���m���4ܛM�.����N]|�:��ۯQ['�	(��-%����Ǯ�מq>	�j�#}��^�3,X�s��^ł���U�T��(�3sTĢ$��%,�i���cSb)���K"�>��nErvf*�jy#��ʳ���j��QQnY�28�"9C�b��a���/!!��5�y�h�=c=Mp��`�m5����[�����-9G���:���wkP�O'��������򼟡��UR���.�u1Ձ6#�VT6,
����`'�?�ǀ,;��8  * ���9*�b~�8hV�� b�! E�1
`�% �� ��	�_r[���[E�D�0�"d�B ��,�����Ȝ����Pd(G  (��� ��h��$Bٓ� �r1  �!����9�̮�d��A� ��@T8p2E_ !�0� � N�9�	_#����@�^ �����' ��	�r0���[,� d0�1��	 0 }�0��	�G�@/,9$�"�I�����K��.E�u�^7 �e����d̲����X-�!��k��5I�RNUc%V{�*�37 5wSib�Cm/`YJ�-�|k��g4˗�B�R��#i,�w�������.ė��#�U�*>����:�S�̥s�ʟ�*����b�7����z�Y\��)N0sv���v$�`3TI1,�"��$$�UjpN8�#w�fc�eo��<��sܶJR'{XȎ��0�˷aeb�����L���X�C ����-JT�L�d�%�bӟ�X���	�:}�Kb%4La��>5�IL;��U՗�i�����̿k�,_�H�6 בx�;��J曷��ʢ9%���0�7�4��b˲ ������XS6$_6`���:o�]���58K�V�2��+W��ifE/3�����ɧi�f nl[����e5��+y��W��?��j����f��sI� �.�_�%:n�7k��U�UV,٧�Z��Ҥe�U�*���e�E���:eف�k�$M6�^�ȥF@�Zp���	��� i�4D�\�|X��X�T���"��+�S��2�~�K0ʢ���<�5�8�b�7J�JZ�v%Y��J��nX����.����'��A!�Wx	BEj��O��%�X%�x��#�+d��	. ����@P�H`/�
��� H���^@�ಋhX�R�Oq ,-���Y�x@@W�Ps v 9#(<�FK����
�DV��|��p{��a Q��X�"W+@/>e �V'#]�0B�� ��ߑ V��`�	�$�8ʰ�6!?����lL�+��� R�&f�S i�a�E�7ؐ���� *�Fl��^yrP���$�G��<� M��3�@&VI�qrp09�h)"�r�$*� ݉/��0����@�"�}��ʸ$���8�#��< � p,$ #�� )��!7�FGU�������|� Y�d\ I/�
����,�����(Ȋ���L�%��l2  \] �d�J  $H �0 @   0G-�J��4�A�=U^{�*ܳ����>M�]��q����Y69r� !����r��X*��. �ŐN��Py�)i�ՙ+�Up<�E�+���j�G��j���Q������JG�隤��Ҫh����P��#]� �p�b�#5p�dGp���X��@�1\�-����!�p� �K�F�,Ȼ����G�F09UO�ρ�sSG諏�R�~{x�kg_���� V�ly�jm�l��T��Uf"MY�~
�\���Ij��p��<�AG�����:��V�������u��WЩ�iB<�����d��ɣ*椢'x%h��į,�[V���P|��]H���'>�]9tҺG��5S�}��i� ���oB���.a��Ŵuz}:��O@� ���� ����6��� �R�����©�Y�G�����,�zz��
95��gӟ��>�� ~�Y���V��Ҿ�f�Ǔ�^�o��R���� )�yl���RSc�����_ѩ'��|z�Ͻ�e�W�zc�]� j������Q+T���t���s�_�uu��UF�4�SQT�����ЇAѾ�v��&m����댡+ذ�x"�p_{�-`*rO�$͑F��
X�/&�Ŋ��j�Ek�4��)�Y�����K"����
�=��MM�A�e�y"�Y<����M�6bH� x�2E�(.�r"y��jNuS���T�9�ϮY����G����UtT�'�jnZ+tT�����/�QTҞM�#�w��?c�J��x�f4QB��K�
IHȜ�@�  �$H � q����	� �H����@�@X7Z��
�G�$ 0�Ñ�2R��� 
N�  )����0��!rD!| &�� ��N  � ��G� ���$ ��|��G�݅سhD�D� උ���B�=��b) H�`"(! N�h ,08$�
8 ��0� bI R,,G���i��;���� ����aw�� ���,K �y�&ݒ+�J/$��D~��x	K4� �G��b�O`�{2̨ �T�#�j�U?t���r�����,HO	������q��S/�3k���X�w&F@rHM�6)}���V�<`_��%"c�o�\%5)Ŋ����Ke�{�*�\ewi͐	o$S,�Q�#N&2\�720P�9�l�����vf���ڔ,���%�����"\�_��rIS!�4�w��8�r�s� �b V�%9v���*v���+��m�$x�~ ���T��꽀Jv�aY䯆e$��[����ɬ�$Z�	.C~�!���g�Z�k�y�*�� �y�܅Tq�	����^��W,<ى�Qrw]6�J�<[�(�ws�Bv���rj�#>2[7)〥�YT5&e��:���"�u~	���f�F�oҲX�K�༱0��,O!9>�D�P����`R�k��V@&\!�|�v%-4�p���.�����0�&� ��P�H�&9~ Sd� ��i�O�䲱 ��:rfZm9�jb/po{�pۉlҙ�Da��O�2Ei@)�K��C�y	� ���[�&N���f��@�`T��@)Dx*�'�� ��*M]�@��E�`8bU�ˈyE!o���1> ����+��@T�̈E��DO�_6ؒd'qn
���;��=�x/ 
�ĩ3�@�r��d�$�`X�X���X#e�� ��B���D�56�F$� �NJ�n�V�䶉@D*p��j@�*���y�
��� ��Đf��� �R ^P�Dv�
�$^	�BW�Kǐ4����d� d��\r����( �@p~�, ��#��	� r p\�M��`�a~ �����[r@{� S-���`��J�$�G &�"dI'����� ` � )���#I����\��@�� ��	( B� <����C��Ȁ8 ^H rh� 6��A�G��@� 
@����^HP F�/7/$W^USMύ��}QM�X9w����Hsl� {�~�@0��Y ^D,��`�#(��!��XM�pե����֦��5��IW���l����Q�JRg���}:ϭ���J�Nu��W�N���@�؏ Nn h+1r���>�Q	۸�2�j��(Բ<��8d���Z	 e��G�Dw�:f��~w�_��+��m��Gc��:��:��}�>]X�9��+N,rR��5Wn�4�F^<��0��*�/�lr,݀��
�iM��]����TI�U}�%`��NK���ӒUl��j���_�;kֽϬ���t�I�ѩ*����zt� 2~����S�|$� ����O��� ��� ���[�9�8=�� ���HG�ҾV��Tɩ�J>~�-�J��=��s��d�[�'�?ş����D��I��8�g���%X<z�u8=�J<U/��7��u��'��4�޻����_�k��-���T��O/7Og�5�����զ�S���� �37?a������sC�~>i
r�Z?�{s6��)�Ҥy:�z�)�Y�{��U�`��p��<����*@JpU<��D^FXy�R�Ȥ6i(�*DV�
��c�Rj,U�fT�%m���JդF7+�9#l��2��g dw*�2�E�#!�D����@ؾ�أ&Z�.Y�eG*�y1���U^:r���zo���;���W��Q��������ZZ��3��Nr�\ʳ)��n�O�OI��\�
�ʔ    ��0)@�d�H�����)b�
�����&D�P�7b<��T���	 ���9� �\rB�a  
�$( ��FP�  7����@�
�  � ��`��d��r���� ���'>@��L`/�h /���" 0�X ��G�%��B���G��@T<�	7� /	���	�-��x�FVFD$�a� �\0��� ����(���F�2 L� 4��	���"� ��ܻd��$AQf�0V�'�8�IC	�q�0�lb�����%p'73U��s�N\ʫJ9Tӎ�J� 4���p$s$|�^-��Xo��!����VPN�W`"ɆӸH:�U�%7+� g�X`8I���U剔.UF_�P��'��G�-�%y��	�,;�+EV�$k��4�tc.e�m�-�vR�D�"%(��������S$|GcN�2�Z���i�Rq0P��"�X�CYr�NT,���h����\Ao 9����JW�P{5}�Y�S �n�D��P$�f�y�*r�����!�5��J��Lߐ^[#M�e��Nr�p��I�/|���N`���S�DV�6�5LFMJ�RN��	�2��[a|�ia��	_(̦YI]r$�C�C�P��m��?~��	�v �$�cෳ�.�^@u	�x
^Qx���ʢ�qȫ7*P�	�,-0�����+�!VX�k��8��	
e�d�����̬�Yf���
ݼ� �
������8�e�SN 'yJdaN��/W	L�0�k<�*�!D *J,��1O��6-��ǃT��$�$�;��*�2,E%k�VJPS
_�_� 8�d�l�O��otU��f%	��@��$�p�X�p#�� 	�r�@�D���\"E�lp	� ���^J��Wh ^�_l�H.D䷘�|b�,ā}�� �� � nE��Y�k�����[/ N
�b ,�'��J* n��Ĉ	�+ ���L�6�?��, m0�� H {=��D�
x{ �Y�e"�^E��?�+�+�
X��\�$��$_�q ��	 W��.�`ܒP��/	a 
@�+{��-�@a	������~�Qň�X f���X���`ds+7 Q�F�y5ȑ7�	P  ��k��F�H# ���k�j� ��/ p �<�  #�'V�,�,\�J���Z@�376[���)0 8+!a� {�`�J� �e  `�{��	)}��x�< �l �B�p� E����H )r2���y2P�����������>�Ͽ�^?I+��ʹ�
��	a���U9��,�
�*"�J�� r���~÷ U��:�����3�Ԡ�PF�騯��,����UEN�Y�qM]5'�,��Ӛe�����zvgf��/,��|_�H+�T�<6@�[r
�1�� ��!��|�.&�'�%N�5���9�����j5���q�=�����USG_���� .�铃�s�w�})�f������8,�Pq؎�' 0����n�`���3.MKlE4��R�>�t��o����&��y�*|�]�hj�,Ʀlͧ*�v� �A���>F���O'تԜ��t��r��/Ο�G�y=�W�S�W�
?���=��)uzk_��I��� HP�G�'����h#��.��f�6oR�n�&5� |�Úe��--���sjO>�� �Q�?ş��h��k���џ��}�`T^��MV�{�CMg���7�=~0�/��7�](��U^��r����iu7KP����t��"���z�M�UD�nu��_zoU+��d����~Q� �[�r�;e����S���.�_�\�H�p�>�Zf��jx��"�ʖB����{��̄I��,�3K�H�� %�y"�W��%+��*��`�&u�(1W���ݎm��F�����vF� �d�Qk�r_�3��ܑ���dp_ NJܩ'k�g�ׁ�e��a�h�ч��jVls�3U�N�$�P����=r��w����c��R�Ӕ��OK�}_N�t��ݞ<��Ǯ_}��iU֎�trDY��
)I��s���rDPPl �%�B 
�.@���   �e� �H��	�*# 
  ���� #��!H@  =��$
B�FA2��B�&P�p$srr�'#��`�� �Y���� � ��>@�(r@(!n��x��"e"�`��&,�!�20'�=�� ,��C�W� v 2�2d{��p� $��y k�6��$y,�/�,v'���� [�-�$�%eA����	��P��
��flA��@.���z�rtn��+�ʬ�9�L�Y�cÀ�wɘ�r��� D��6-��� �&�y���^rb�&$JV9쀍���W/�� f�����!��T���{�r�2��_wd�(ݥ~��~�؂qr'r�{�6�D�9+R����)T�1�+I�,C`D�~'h#��v��?���J��W�����EQB0/A� ����mR�������8JD0��e� s+%�`f�O��)�J�+�"}��_�k�	f C�d%7$��%Ӱ�؎,��Ř� v�P�!�q�k��U���2��ƚ��.��)R��lU�r�9NfĎJ��(� f��*�Y� `��V����?
�,�Ò�l_ē-� T�.Ĕ݋����.T�؊���DUe,�e�|��H�+�&�yɪ�+i�o�6���S� ��B��I��M;IR�?�IX�*
������L�`S�lfK��T�"��2�Tۀ/R�x��O(�GU�8m_��R��AW{�n�6����vEP��r[.�����~��>m����ӌ")E�ے/�ܡ����L�,���{"W��M�&W�� ��<�(�P����b����A�\,�"��Orsa�9l�<��ObJ�"#�n!�X�9/�,� D�".���J#E�{
��1�E!�|	"��`%�(�	v���<�JP4��$A`dp��p �2���"� �,".C`X��D~�8EI����$��U�^@a�/ Wɒ��.���� X���!2�2����J&XeV�X��ŉp+ȷ� ,�Ev,������"*��2/"K�����
��#�%`RA�K�@
`BN �V��'6q��A��L���	/�+E� @�� ?�G� Pȃ� 8 �W�$�H�� �� � � �D�O �E��؀ � xP!I���#�f�`xc{�=�� c��@����  d	�� ��L��D��� xȕ���y�G���JM�{�?ɓ���_M+�Mt���2OcuJ�O''C%�!m�$�D��RI��# 
�h��T��9'(�+�]�5�&��eHQ��d�E�#:�e#��=�6<��&V�H�G�,B��W��Y��i�f|F������#E�H/�A�e���X��YH�@�>��{�C74Pc<��Y'�
#���e��T������ P��Jy?C9���Q�+��:��u������$��Ԝ�k��?j��1R���9�Gm���j]E+"�ǂ�
�GW�Ԧ�_V�-�#�:��Z�,��^_.�:�7G'���U������}�,��c�9pO�IB�ee��S�:�����N����`�_'QԪ�W.��+ı���T���<��\�v3^`�U�">�������ϫZ�ls��ӏ��p�e��K'�IMkܐ��z�v��K���KT�?������?��� @ߐ���'.:��NڙgL\�øk��d�yD��MzrM��K{K�[�ԟo��� ���I��Mt�<U�L�x5)���=��-��������O�L�_��է}�N�����8G��/L��U~�z�y�{� k}M������K�e5�۝C�� �*�m:5(q�=I~��K�ܴ������:C�rۿ��t���u��s�s�B,����+�?�K��(�>ųU�APFC��,5,���BD�4EEt�%�+�E�X�ȣ���ĩX�&u\R��S�a�m��e��E�/$_����%~P�#�R4�@L8'�Q(j ͤ;Hc���f6Ӄ.K �W6��n\f��F���Щf�~k�Q�=7w)QUW�Z��H�~��ӭ{ٟ��n֥
���w�8u�>�ax�   �(a��' � 57A�	�b� "� 	�P�X ��"$I��0����d�]�\� < �  � �����A� �  H�2�� ��0!P� ��pGp�I�x"� V@ �$�$x 
Œ V��|�G���ظܬ�2 E��E�]�`$��Kp!f�CWP� �9 ��r0�r ��%� 9�G�VD�(���
02  �0P~��)���e��%�!",ه��J�_�[�B�U��H�a��� �H��9;A�Q���Z� �[��s��7R������b�Np��7��A=���0i 5J��j�x��fɤʺo$vY:Ի`��e�b����G�,��^	xŀ'�yN�@D��'�fϹ���w|g!� �A�!��р"�K�6&!:�s�7����0�^�U�Q%k�oa)�[�G$D���n
��_#��S}P��p�O<%!�9 ��kH_�d�k]�c/�*S/��}��>�P�D�4��������@g�����W���������J]�`DU,���#�2�g Jo2T�\H�c7��&l�X�0��"��+�m;d�qvN!�R�P�%܉��.m�*}�I��^�p���!�%��9�p+R�	��o�'��>�,��	�gv�B��*�e�S�+�����"M�J�X�'�>ҝ�jn\K�`������B,�b '��n�0��3U�ԩ�$�7�4�s����wk �sy*����*�_��nfMZ����2�/�=Y#}-a�)�Mc� G�Y���V�IKS�	���#�H�P��+2�U�����ܑ˗�Cj\6���İ�R2^`	��!�&J�ha��Ia@�0��.DH�W�fS��fo`P$\�@�PFi E�e��"/�!�A�=� ��X1��$���O#�r�B���$�� B��E�,0F�c�3�)�| �%����,� >JG�?���]�� �	%"H\HAr�Xrg�7*�@D�,\��[���r�G�&�,�7.I�WV��#r?��Uٙ~�"Iʡ�nv
�w�π���9)�%�Y@ ��� L	��r���r�c�"m�^�I�e�vP ��q "�����7c7��f�v�+��	 P�.�0�&İ2����1�ơ �I!��R\��x�$O�	���	�R� q���X� � ��G��
B���� 
��~ 9�A��a0�9�2$M�6�א  @sr�8(A9]���Or��DB��@�?�� �T�#򫢚�Z���_�)���~?}MKQC���н��r��/��vggc�N��K�,{�T��<�n xA~�n.\�<H	�q�/�8�'aȸw��σ:�ʔ^`Һ��j�A2uա�c�W��������s�#ϱ*�֕]t�'F�xvZ�_k�{�X1f4ʒ�6Z����.H 0 	x�; ��[ A�Q�.V,@x�˷��N����
O���S��F�s������]ﱍ:��u�WJ�R��ƕ
^Ody��Ek�%���i褬�O��W�����NL��.��mK�Um���U�}�+SqM58��nv���I,+O&U�=9�jj��,x}_MQ�
0}K��-mWJW���3���L�j�5��=]���
,K�{���[g����v���m���}tR��{Q��*�Bjp9**%e%X�v����W��>N���}Z�"9����h�i=zUEi>�G'�K��I
�?����(�� �����k��������O_�+�_�����K���AֻO��U��WR����/Rd�������+��eB̘�}7+�nhRW�1�ۦ�:`�W�*����cg�,��븮�\3�㔮��~��I�U-�#��k��fpՏW/7O������_N��ӟ̳�~A�����\��[HU��Ne����)��m��^N�y8�o��珯׳��?��pW�aRK�P�"��%Ab�(4�$T��U�Tǐ��E*�Q1�Hs7.<0X�B�͌j�X�+�
��	��ra�e�x#f��$�b�G#�JNJ�h)�e�x/#���2偒\ӵ�t�T��,ӻ2�L9|��53�q��*�hT��5������ij&��؏w���V�qN�
��zg����oJ�wt~�CV�JI��.�u1�1䬈H��fQ@�ᑖJ!Y 
@��{����[�*�A͈. O�M�V @L!_�0QA=������r�@VW�  8&@ B�P(���X�d�\I�W��`N
D�Bp e# G�� �d 8�H M�v,9��
�M��c 0I�$�"�>Gd���  ����$��	 �&B
8�e�~��;��22��-�\@�Tp_!Q�C����v�$�)'�0K���F\Ob?,Չ+�,����6D�!��x��62����rHX@��O��r���:��5��瓛��;�E��Z������]*P��O|�R�n�[/r�i���J���O,��i.�k+�ç�(��Mţ�Y���7�5'7���ß���J�@�vv5��r/UF�\��- *	��\�D�L�̅3��C�V���'�ف<�`��JO !�%Y/R|����H�sp�a��q��\�� G����5ݕ`��H���\���_��!��M�	���"Л��Z$LA J̒�1��6��#��D(�;�/���)��Ŀb�؊���|�Gk�����eG IM]�--{H�,�	��[�3F��' ^sTI!{��.�BRG3�Y@w2J�L3�w�;�ݧ6��7�'ۀ50��E���#���ŋL���!1M�PŬGo����(͌��Z�E�M�����W�#5����5	;��sav�"�Uї��k;�u;Z��Gor���{�ڒ��[Md	*��8�
�3hh�8���B*�!$���4��c-��.��;v1|s
	-+���Vᄾ�' Y͙b"�a�GU���^��!o����~�rc��(Oo��pܩ��H }�c Y�
��$��<����H_ I�`W���C������`'��`.܋��`�PX#����!b@�NŘ�.�$��`�� #�H� =�W+�����nIp�,�&]�d;yR��H["�>@�ቸ�#�#��e"EJ��R?܊�0�,������6�"*r@,#�K��"���|�./�8�%A9)@,���,\<Hp���8�)	ܩ�<�FnR����^�rQ )�V+�#v ~B$O ' Y"�X� . H�	�{2;+�����	/W��r���P$Z*@"!�+ء`x 9�!� �&�'�ŎH�Z`D �7  Y(!Ȑ�"���y*�� ��x X#�H�bJ)2  �/��K��{�0 e�p ��Q��~@�  � &S� -❳?1��Z������w��{ګ�ժ	V	%��O�������*�V�Y���u��]�p��hJKn�-��9�#�ȎU�����t� U/!َ7��ya�,�{p�� E5���}
�i��J��..}JthZwFo����Ԝd�o����}� �BXGM�MN�Z*O}=��u����*L��Utб�U�����93�H*C��c$�+��/b���Rd�ς5?B[�^F �"�P�K�u;<��� �.���Oп��u�9:|�w����d�J��U$�y1Sꩾdy�*�K���;}n�!�5ܴ�WCȳI_cI�uN_�ێ�Mu���tn�K��o�/O&g%��h��B�jД+%��={Z�m^�OK��v<�[���몫$y7z�k�K�r3�V��h�pԲ��l�4mz�c���ժO�MM�颛(>N��jdEb82I��T[��W	X�$��G�Ԏ�>V�%�}]_ʚ����?�z_��i�<'���i~zD+�>�mޓ� ��z��?�y}۪*����O�A��}��㫈;��=�6�
<z�u(�-(�%?Eh*hJ����[�����UUqfv�����i�1����ON����:����_ס�#�k���r�|�kWT������o��-�mM�>�Wv>���G���MU.�)+��/O�iR��*�I�Y��*�����_�U���U覟T4�h�~R�U��ß��گ�F����5�[��^�E�=�4AH¸���DR
�O��X����(%kAo���"*��M��J��VC�
%ɝH��jfu1�����&�D�&Za�4�QM
2�d8w��!Q> i�� ���<���d��>�BR�G����qD2��fg&�F�a�*Sso&j��Ӟ��2�4���;w�����1Ė��-��=G�4�UҚvf�����V�Oٳ������89�$R y!@ 81��2Rp0 B+2	ERb�TNK�0 ���1�H�pP 䬀R<�`Z�� #�� d��H J�� @P o�' Pp�> ��@!Hx& �E�% �/, �@ ��	�c.��P�!P�j�=��/�   � rB��%�(�<���X�F	��=�����
L�iH�=��������$&&�SܢH� _r?0�� �Bw+��(������A�/g�	D��Q�c��ԥ�f1 r�M88ָG��k#�i5�)w���@��"�`�Y�R��!/X�M/p3�s�FQ&�~�,������:���M�`Fe�ʥi�ݱ'v�#R���(�R0��f̰��!� KI�P���X��t��Z���%8�2����e@�I-��x�
�Cc\��e��"!�|(%�!�J��r��rO��Kwy�%J���g"��,4�Wi`7G�\��w	9� \X+���D��Z��'$��s Y���p�+p'��_|,��S�"Q�~d�Z+k��^}� �/$JU�{�,�*N4��N����R�ݛ�8Pi�L�?A��@;52W������~�Ld�yL7<	�`#i�h��L�� �d��2P��I��g�J,�,厥�@���ZJ�[s�M�� �)V��:v�Vv"�K�"�u�)m��e��^���P�DU.E-{�L7�kȋK%Q���Se�V���n替ĦW��D��r�4Ny.iʐ%1��b�DJq�b�J�~@J��ZY�Y
�QI�e X�L��W������|�&ԳMv`*��Y��2�ӦXI)��?/��1f蹸v�^>�"S�\`�HY/ F��Y@d�B;@� ?��U0JA슥���� D -א��'� � �	�� @* [�V��� ";H�d{@1p��%��p���d��	�aP��@R{���##�� b� $�	 �1�p�$��ʂ#��s$_�<�<�@���2p�	"E�Ȑ�f���`U��$L��dM���Qr�x, �&K, w��B�@.NJ��h�� �f� �FX	�n�Ty�Ђ  � �� r���h"d/  , � 2����G�  p"@	@r,.��� ,@ N� ���� NC��&K �p+��2=���  �0 [�C9A� �A���p$ ��Q|!%E�@H ��E��@rDcq�MG�7*�Z��&�� ���q���ۧtSM�RI{�f<�B�vp'��w��qb �`��B�Deą�]y������|	AQ2�9����`�� t�� ��S^��;/o�}����?�c�y>�w|k�a&�E�#U��J�v���u]����].d������İ�"\iW�^ �ǹ��T�H�?ƲHG0e�d�be��Dd҂4#��z��m��Q���ͺ�Z�x�|ܩf��uht��!4}OP�� �)D:�*��G�����r��9�x;�'*�$�`ܮx�v:QD��˞���0ʎ������r��(˞��i�R�Fԩ`}='�������s�i�iѶ��7V���Xc�$�^ �w*$rJ��b��z6_��j~S���G��_d���u���I���u��<*���K����/�E�=^�� ���y=#�֥����X�v�!+�����՘=֟sϪ�X�x��iD�ǧS;��sZ֦�=~���SY�U=4����m~��zh��i$g��"����[����g��� ��&��g�ǝ6ڃ��Z�M����.��~����z��^�\�����UՅ?��*�����[����j�Ҫn)����V����������0s�[MN`��������K�`����C�#�I�Q5%j�+�El�R_�,�%�EI�"���
勐NM6��I�R%���pA��N�+��8�d�H�2�c*˹�fJ'�W�@��VɓL��ʈW��`�1��`BL���G�������L5�˟��h�2BNG��^.@������&��Tu��5˨ƞ�ӭC>��x�(J�̏�%����V�i�tw����Ӕ�/<�=_�����Ύ5C$�IB�%   B� @
H.# � b +� 8 o����, �l�G-!V�~�Ce�ŀ	� ��� 8 rR4 ,D o�Td d�G��@5q��=�"f�c������ ��+V K��@૱
 ��
 G 0$�A� > x�� ���x*� L���� ��;	 ��}� �$ �!��*&E�@T�2�  l�[�X����AB�݀�xe��$؅�.8(q�>�2�_s��Qc��Nz��I-���-*�B��, ���&�p��p�8���,�|�f�ڼ��@'kd�Ŀԗ$�����U6	ɮ �ъ���_���#�ŭ$���k!>I�aVR�F@�8�R%���r<p���@Hsu���^��	�Y縥,���@����B����~�1fDT�bCj�!�p�Z��%mr"�`˱^ma�{�4�Q2Wx����;d�k�B���k���`���_.�G3�	��
�e+��ژ���� Q�	K�N�X��!���/�
���(���y�
�!"JvE����t�i���XK�(W�ZXA�A����g�"�}Œ�
�/�Jy#��&��X�2�ݒ�O!/����,�� C��(DI�1�7 9�T�pe۾nT�@9ꁘsq~]������J��5�e���+���$���$S9�W����T�J�� ;U�waX:]/ Bk��T��e�p��5�a��n�aԛ�2���H��~�UK��� eu;~��*a\��|��� ~[�4��2fe��R�X�TۄL�4%KR�҈��!���B����2?�ŮO� Gwa|"�$Ð ���]�O#��ڃ<��N��M�}®2쇹
�� +���i����9'��J�s H�P槈'!;���K#�%d�B�^��d�qؓ��!)ej2�+M��y Wl> �H��y(D���N@��d�&�}��� �� �̠�O�. <� D[2^�
�;) �;�D\.@�Kŀ�`�$���@��� ñrH�%�L	�P�Y� �Op�p_p@x�C� ��O�=��|��^���@���H-� pG>�8�G� 9' �@ 
���� M���@A
��H�`? 0V� ��$X �#,�@�E{���1" Ce  �<` @���(�q!�8)&� �L D,��$E
����(��G6 L�6/� '`��NJ��� �a�
B؏!MO�߱���� ���N�^�n������ ���#�X9:��ZI�q� �UdG=�Q�>G� a@/����!Y�;+�x�Y�NJ��	w2�P���'[ZM�j���薏���u���� ��1Ҽ5Y���%܏8 Ƥ��vSNU�鱾IV=�w"IpV�F�i��+Y K��!"�����n�� �L���\��H�� 0�p_{�2��+.�s@��v��7TK>v�é����R��t]�X�>�)���e��|}�'�v3V�1�t��<���]���|X�Ѧ83V�1d_�O�Ǵw���[wJ�~���9ճO��-f���[z�;�ޛO�j�Q�<z�Jq��|����lt���q�t88�M��.�c�Cn��C��ӥn������ʪs��;I��Բ���}?}�~�iS��QW�V��z�T�K6�.G�GQ*���J]j�Mm+t�ꦤՄ�=?�z]ji�wI�Ե)����?��?P����x;�z��nt�:�+f�k[�D����֩t��N�Z��3�����pv��������OOGAQ���-�z7N�6^�]u�[�8�����Q��x��o�M2��]ņ|����K������7v�7�����i�c�������|,9�{��*����z�y�{�U��-}:�Mޤ��ȶ��q'�G_Gl��ܿ���g�Z���9�}]��6:�9mi_MFٮO�o?�j,B�d�G�o�{�ُ���Vt�$��Q�ɮ*��r^m���E��C����`XA�L����Ƣ�¸4f/&ٌ;�hm�dӆ��^0PV�l_��2T8Ē`� ����P^	R�3q7/pe̶i��Y,Fg�ς��d�2�%@�9��$����5�N�����5u�{�)-4�������J�]X�ܵY���z=N���}&|�F_�Դ}&�w��~��H��F��% � KH�# Hh��r��Â�� L� xd`    8 ��|*Ix  � f�`�� a�0(H!`�=� ��#$ld �-���0�� r �Y&P�`_�x?!b�(� NADX�s�%� 0�����X���R{�� 5q�	��G!) M�?�HeV$x�H�"���3a!� VZH��Z�	p'�X���b@rG!.X�%�qve`���
�$r@�P��;D��<\Eİ2ݎu�^5���"�(��S ���E��?� ��I��V,aw,�+ �%x$łs�w�Z�%E�f&R2Y�F�M��0I/ث?p��̶ұݤ�uR�%�RL�i�s.�n0M�M�$wV�p��R�_m�c�#���	�,�Z�Ћ�+��+`���j�=ȭi��#�t� V��]���NGxYnX���3���Cʹ��[�D���쒹�!6����%L!�O��5ps����E��	�g�a1~��rKY�m;�[�-J3�
�*��L_�	���+}�J�I� %�rjT(��b�k�3�7�V�~ĴbeL��nR&��'*��*Tr�I|+����f �j�c�S{}�n{c�����cO��!�g�	�.ě�
�^�%M�H�&WO)�1�	,\�I�y��r�p�0��S54���9�m0���0j}�U��)�˫� u7	w���p�tn��t��b{��&lk�����*_�.]���,M��'
@��-X�&ՙe˾E)���	Gb4۔��+M��]�a5��Sop$��&�M�D�'uu5L>@��	�"�����p$��V݄	�x�T��|�p��䭾�]�!�?�r�DB ,�()E^2�@rd�����V8�<��D��Ip/�tW&T�.Y=���@Ib�%��7/J�"eH����' g�7������@�E� RdD �%bIe��� ��`ݢA{���.8f_%�,Ihd�@� M�٘�T�c��ܨ5 E�O�Ňp�؎�^@`���� C��I� k�g�$�%p/>�^�/�'%y%Ǹ�	!`�{���%�2�{� ˒��,M�&Y�����!d�F �@Z 9� � B�@$`�6 ���� #� &�	 ^H�H. �l�e ���P�(@��@d�@P��N �` I!�^D�I����$�$��`
 �� ��!HP��!d '%�#	\Xp�g�k�v~�������_���Ӈ���4��uM/���^�j���T���Ѥ�ԩ���+P���q%t�&�eD�hP��༗9�ܾI�d�b`s`�%��U�hꛁ�SqE�=U_>ǃ�W��tR�v��6�ꔰk��>����$$�R3ɖ��ƥ/��ua�Oɧ�S�}J� �^�:W��5X��]�U�	R�\��Rqw8%j�OI�Z���X��[Ut���[�v8u�I��W��*ԛ<�du k�[F�n�p�\���.�/ULd}L�V�V	�B�Ez��:�I��5�z��Z��V��7<�ץ�(�}C�>Bˆ1u���e�sqܟ2S[�������t�78F[���A:ed��˺�A���@�NT�ut�^�.�3N-���?v,{�
m�*Ѧ��zyC����U៩{Z*nR~=��?C�?&F//��U�A��*}��C����N]����<�4:�KG�V��P���_訇�����O�>R��jQTڐ��.��?M��$�i�ѿ��u��K��pv�N��Y��\%ct�}ݖ|��u��]�5�>��������Вq��:����vq'�sR�Aа���R�o���Q��N;��g���SK�'-M�:�L���_��;lꪍU��q�]ᴪ��_�U�X��
����'x��Хhi*S�F��Px���+������Ө����\8g��*�k�;����sO�G�?WN��j\3�ӥR�Wҷ4lu���SK�}����y}��j��6���OBr苶~)��\�_�o=;w�}�SW�b̽ڌIoQ9澎�%�Kl��:mQJ]��Kٞ.�^��謻���j%���W���Ո9}T�-jR���M�pZ�����T�֪�Y'2L]tHՎKUwF��jlL]t�*G?��h-e<th�s���
�/�1u�5Ʌ�����M�5�L�,\=Jyg*�wc*ʕrs����,��s�g�]i�2î=��&�\5�#}��QrJบ1.'�4��e���p�D��[S`<��7(��	�I/�Pd��gfŀܹ#�+W�ɎM"0"T�J���J"��W�׹���O��g�w*��Ϸ�e��d)a���^�� N�E����R���<���S��e����� ��K����x�T ^A@H!}��� p�dЂL��
�r8
.���� /�^${ � 
A6	���]�#Cب0!}�` �� )8) H `{�$�"<����2PB(� @ ����ܡ� 	%��@�@���*$�yA �` p/�� ����� ���*��%�� 2�{��Q�=�?s%��rw� Rr0=�;2<�#�	('NpO d�/$��Y6f,��/:Ε8��]R�&嘹ɤ�r�}�!(�J��q`�x,|� ����)�����D� �(ɇ�t�����!c?�[�rH��@V�fְt�:��`���T��9b�~��&jPl�rX�	� ���e�I.n_�s䮙^�m����s_�s.�#��*s*=�3��E��8��mF���C��"?�!-��vcض��9�)r�� 6�R�%�?x@"�(d]R�>@5��(;(hG�}^�Z��?P2����~�VP9����3~@�)�D�%��e�7{��;��ICp�S �p��-3%Wr���5`����@e�+�,���1 e��n9-J]������W2�Q�K*%9�I����q/��$sSMɗ��\*��B�Gw�U��%X�׀"I;��ͥL<
TZ�+�CAc2�h�� �x��U��Ϙhi�nä.��qun@�Fȟ��x�@�V#m+1[��wk8N�����h�������J��À/�u/&o/��VY+��7���WM2�$Yh��� Y$��l����8�_��Q�2��y+Vi�D�$(X�݀.,0"pȘ�D`.H�ʙp,���a2 %\ �y|� ����	�ɜ��7�@��ā��V؎�h���H"����;�)@,��k����#/�,��/���#� \\5����pU�0,�#�c���0ŀe���O��.�c�sp'�x0� /��/"o�(�#�m�e�57$�R�,�C,qdU�\N@�>E��k�E�,��Kn0Hsq=�	�WDH��
�?�&���	�\�3�������	r��ܤH+���A,$D�� e @�*����c(�L�SD�@r##��A�s,[�U�  (`/�H�y�B`@� <�R��#�` ��"(P   ��$@!�	$U�� 0��H�A,8�
�H ��(	  �,� ��z��~���}�sFz�k�גns�����tH�L>�'W�Yզ�JV��~LoWUT%vԍ9MPݎ�}�'��5!�а�� Ok�j� /�!P(���e�b\���.4���-8&��P� �U[��J��ɭ�u�UGMڦ�������N��3���o�L5lƛ�n�q��/�O��u?��>Kiԏ�U���c�xC�*��܏���t�o���W��ξ�Wp�M���ԧ�Q�O�=��j�򏞯n���ls�&�t�WFY*|��Euv93]MҔS�T�b�\��$GU��H�׫�:�'�a0�>��&&�g�����u#��3�[i)duv9���� i�����b@�ùz�b��]O!T�#3 ja�ݕT�Ny�*v�U>��GT3/������v�:����Gܪҩ���R�<����9̼٩}]RN��Nr�j�� !뵌�83�G����~y^�nw]�blWP��]�S9�h$�:�P������W��>�$��ξL�K9�	�:��%U���2���瑆����&̉La��\����t:����,u�'ܖI��u�5�j��S#uZ�9l}g{�g�^�ɵ��4�_�jSp�-#]� ��2��L�8r&��z>�Y���7,�|��Z�2�s���v�0�]j�qv��\��؜H�z��U��w8p$d=Wo��R�2HȾ���d�l�ۂ&<��vU����7G+���q��]~�Ꮹ��<����U��r��rr��/�z��S#��sb�2<����KԾNsq*`y=6�/R��
��N���� ԏf�z_�F��i��${�B8c1-׆C�ՙ[�c�_KImiV��px�-Fڙ�{Y�~8_�E�"{�`����  �    `@dPd1�   ,� �  L�Ȼ0"�d<�`� a� lp8$���*-6 �(~ �� .B�� �d!��d ��|��(h� x  ) �� F��& y< �p �"O�*�'��� �<��   w1� ��l �X?`�� @�8 �#�W�!Y| ��n@䒤�܌ �d�{|��߂�	*$`;0��� �H�H��^I�2�pI�������w��J��*�¿s�X8Ԕ��$�FUݮ٩S��Ix���d"r�Y��ʀ
e�,�������Ϲ&E����W���f�0}�S� sm1r�m&]��x/�'<���*Nxf*V:|��q��C�x�a�9�����}�h�i03l%�^�#�����O2O�Za��wbB� 1i��rK�+N�n+�?�1� �L�/�Af�vr�Zy8�\(�V.i�D�[ܭC�%x��11�H�q`��DO�(��p3L,W��"�:es�
��!�%����B%��vj<�2c8
��Sky%��"��)uX�2��M��ՖX��Hp��w�5���� �NĪ�g"m��8�&x���%_� �|"T���R�Y� �W
��͚��_�77��H��*� !�+��'�tʼ��C��P)�
��`
-�v#��F�� g���cح'��/1 e^�O6�%7�S�	;��Ö�xD���ˋ~�T�M݉hD��"�.U�8�%K��Vr��� p��$˄���\�2��o�ʔ��M$���V��!`[�PxDX�\���q!{� ��E�W� �1���<������n ;%� S�I7/ ..�$�bʁ� <�{���2[ � K�,Yx��NG [�s#����(�;��C!�E��D\X�#���#�*�@��X�8�9(s���B�B� $ȋ\�.Yc� E#�Ph	r�  ��Fi%�����1n�d�`Y h�R]�"�B B��sǐ����lY+�	6@H�rL����# THh<XG�-�D��bdk����v�
�q�@h=�`����aAp,7/�nȰ	d�� �`*D��!7,{�p�I�X�aـ' �0�)f @�� W#��>@� 
���x �  !@�+����đ@ �`Hr���""��" h��ʀHd�H	�O�(�$��� �|?P_�>��}F~�ɞ����P�0J�+��-*e��j������F6���USc[���gM���h�Vy.�3�n�``,�"L�p2儇�ܪ0�ؿ G��1�½�
���Z{�Ԫ�����yw*�zzw���]��M�R������Ԫ��'If1���(�*F�����_��m���������}G�J^�x��ͳ8H�6��y\#"5ft�I�ۘ�IΩ��5~���S��.i��굩�rxI/,ަ���]u6�-;Z��g�Y���Y�N� ��fՋ� �� W����y�i+��N鞅�z�.I� ���OQíI>�����f�b?MՋ&���D�M�u%��zf�`���f��Ξ��Z2�M�=/�5{��uSΞ���.:�gg����2�;Y�4<S�ru[�z�L���j��/MՈ�О)�<�W�S�v� �ky/�;]� ��W�q�\�J�u� ��O�e{^��t�[�Y���u���?��� MC���a��H깿������c�=F&.ER��� I��K�=���➣xD�Svm��4��M��m:�A➇R�&��׻�|j�覧CN�����i%UI�[������x����"���7�TsR��SQR��Mz�/'���0�sB�Uǚk�����������C�5��<� �R�'�� �4ע�N\��[�{�=�=1�2��q�f�%����*u+��R��/�[�!����K�K�\��R�9Mt��GWs�ե)��E8�Fr��<�퓗�Q&^��/�k��
�rs���t���k�iy3]����H���_&�Mѧ�s^Iy���*�uoʹ��q������Pe?b`�"L^;�Z�.��L���Չ�ղ/�2��8#��F�Q�\��ֱ�`�c���
�9&�6s�Hu�0t�NLu�uB.K�e굇Sh�7*	͌�v\&\��32:���k���17���ݻ���MB^X�����:�ԋ�H4��u;�+|�c�uyL��3*lI�0uگ��/I�߻O'�iT��V�=�ۨL���6�V��"x�Oܹ7���}1��s���}��5>ǡ��DX!J, #͘`HC�  S��  �
���%��
 2�J@� @(�  r @��2��I8�8�O���� �&Â� ��V�d�0B͉� \ Y| a$�(���y`E0P2�$��`�Z@dQ+H��b�d=��@�e0�y(��"c� +� 	+�iw�c%��K��"; �l�#�q�� @D�À����fP<
�� ���DpY�n��L�c�+#k0�9�.� `�y F�Y,�x%�Xg's�x�ǂ��cIr��_�
��@��a<��v��XPͤX�"�-�[�e�8���J�@�M�@GfL�|JD~ G�9�y*�9Q&]2��'��� b (-WFq i@�Y���R5�δ�'[�"Xxd���Ѯ`�Jـ��r����$�� p'{����[��� L8�㔰%f�E���"��	
�W����"�pE��i�;0S���,�iaV!���%pc�
�7�� ���O�r�\qfN����ʜg���i������t�7 !�Ď.&�E�w�;(Y�gb% �ՄJ��CHk$�
�(n]��U�H��*0�#Q���<|�; 	M^J��%]��.�v�V�`��@�pҹ��Ӓ<�|�r�T���p��:e���N#��<���n�|�c)�*�XY�0�~T���j�@�ܑ[�A)��7k06��Oo�w੾a@�&�a�Dwv�;J��j�����`+r��I�$������,T�wF`S`/���p�ݡ_��)*�ˆR�sV#A ����9"@
� �`
O`��̒��/�#� X& �Nq��[� P��K�M��F0�ȟ 8���D@c  �J���. O`(���Y9��p-#�*$C*�H�;�Q.$�I p�'U��ȕ��sP�.�,ǰ�h$�R$�
.��	� C%�
��
����%D� ���d �G"o` M�@|<,�S H/�A=�B}���ض���.`��p /�)���F~ a��)&�,w$�&�
NK�s���XpX$X�9��b��X��$����Ap+� ��Ȉ��	�a%k���$��`ؓ%Ȅ��#Ay,��	ńZ�@��c�q��P!R  �Q2�M�9�t$r ���$Y%�,��#$@I�7��q��$
�B�BH�Ā+@4���6�>�>G�O\�&z�k�׉Y��ٙ�����_��0U2K��24û�Āv���G��h�Y �v��4$	ʿ�-�7&�RU(a%B�pEw|��9����H�U�s�/�)�i>[]ϧG�=7��*�S��5R��m��)&��l�ؚ6�po��o��J\�zt�jf������^�6�;H�#V�-��@�;v� �����Z]���,.�)� �`�� �S�]��.�t���]�M=��Od� :(��K� �S�����:;"�F*)쏅��g���ZT���#�OV�Z�G#~RiN�Ou֟�>����J�(�Z�f䉮u��?�����%JY���.Ck_�j��n5;�s/"mm�+� S/���p����Q���_�u���,����s�9d��Q���t�F�������z�4U�(�����ŨJ|Ͽ	[�)�g�u�x9غ�V�o].�M*O)��޻�}��^�ֺ��6�/�����[�zR��ؒ.�#^�]Q,��5�Z�ii)����5���+OF���:�]�r����ݥN�5Q�`�P�>�=.s�n�*�z�QTW����t*��8����~�g������{eMMO������ ������hꉎI16������ ��}������G�K#�'�7j� �C/�v/;zd�̀�mx��[L-� �mR��JG��v�z>ά�~�� �z� �R�Y�$���� �m��"?G�ͨ>���m|� �F�!Rs�жu�}6�K>���2_��/G�ٯ���Z_�w�Ϗ�4�����[S����o-�Ҹ��5VM-�u\�%�O���2�E�Z�R�OyT�&���/*�<�����tI�R��%����'�߷Iv����ٯ .8t�#��ԣ+�n�ĳ�H�VMA*����j��%�[��2>����O��U�ѮF��Z��Dy@U[䪷"X /[�u�\��j�S�C
��%IAa ;����_'�tө�'�a� T��=��t�_�y���%�e��-�D�sQ��n�F�1���[U�>�J�C�!� ��`�{ V�;�	  @^@ 
 @��I��D.C Gp'�dH�;�`
�� @�0 ��� ����*��/��(Ł   R � p\��@%r�`d p����P� +� ���I���!P6^	 B�pI�`@/ N +a�p&�H ~��$��#�b�a�0&J $�� (� ���� 
G��"�#��(Y� y Ȓ�ِr\y' �Y8%����� j�9&X$^20N`x&Xs�r�B3%n��V�Wg�MD�rj�U�I٢+X�N
,��6��.�+�0�I�����Z2#�`J�����4�f-kH#�� ��In�K�2�`��dg� ��P�H�H5v�9Ԭk���~ĥ/,��g%���,�@E�5+7�H��ŧ6�e�`�U1�a��aSu.̭���˄bD%F� W)���8��z��Յ�Y*ſ@%�$r���"���s%��9 �3ba�r�/�RL������ ��F|�-9	�x|���8h�p��l�6#ib��
�Sp*V��x��%�透�Ⱥ���X��S�dV��!B�=��Y@mFF~@�K'!˘�7 I\�]��$�-cQn�Q3��$ME�I��D��i).R���]�Ӫ�m/���'�M�f�w��)d�� ���G��8�X�9E�b�R�H������)������1f�]2I\+��D�r�ZU�Y�� %\ ��/�,
ܼD�&y�iĩ����8L;5b̻���.�j�I�| �S"���$ݤ�XZ�!Ŋ�a$��{�lx
�n^,�!I�d�7���3rĄ�� r�� %VyŸ \��q!0&`�d�c�K�#"; ��L�9pP$ñaπ�.� �l&I���N
H��{� ;�;p 0 x	@ �O����H�/$� T'�؉@BL�K����!}ʠ	��'p"�9�W`"W).X ���>�)]�����B��Ȅ������d�~�����B@�FG�2�8+�����[�T��װM��� #������dI8"�8
@a	��}ňЀ4�L�`H��#A	Y ;��$�	��H �-�� C����d<�34	"	�d
@ "�}�$ ��A�����j $�ਏ D�eEȬ��9$�#���C�&�g�'���U�u^é076'�uRh�� ��k�Z��f]RI]�؃=H���b�����]��N��u.�i��	K�5N�����U�|��N�3�\~�tU>ZKc��챂0I��+�͐a8`2������F���e�PO�m(L�
�E��S�[&8"RJ|��AV �X�����)�>eG��o�Zc��<���^_�f[�s"6gA���4s�� 9��?Y���iv��F$��Jy��^Հf��YВH��� U�D��dH	��D�
�I R�Q$+"`M��D��d��ν=zp�`~�(�ת�|Mec�߈��:���W5rn3^J�y�u¯��4�E��,����������Y��	)�Z\Z�~U�;� ��R���;�Џ��$V\>Y�$��~%J�R��E~U~x?M�ZV�CI�����?��G�W�����R���}%�Ԫ�J��w?�z���I�[��[]Ju��r�ZX?#ԩ�SSS,D~�`��Q?�G��}��5���2*���I�I�H�
 A=� VHU�>_���#�{�n���3��}SMQ�k�!c�ԩ��i.��P��~�F�c��B<�.�{�T��n5��C�K�Sc�J*9�?�Gk�yo�b<�7�Ԋ�J�*]���(��u��o����Q�\:82�#9�L����I��r[(� �AFKr*$�5��đ *��*EI k�ip�G����͏N��#��)�?fuݹh��8��/Z���7�}�	� ����v�4R:4cAF����p͈�� p 02 ��� y 8@ � ��2T�<.
=�;e��0� )  �0F�	 8 �<6
��*%� ��'l^ �&��` ]����\H@X��A�v�ĆAb���
�`���!@0@�e� n@��p���#^H��8 6�/�8�s`�e�`K�r�@R.�s?�#�e �& !�!����>�RH�@�Cw @8�"� �=�� L�NJ�`1�K���L �'2T�7�@\�f�2�2� r�v�;�Ƨ>�E��k���FW��K�^�#A�yhe�$��]���!��3䭸'=�x ��{H��7b%ٚ��@9�L{��P#�$}�K�`OA��:y�{�@�$E&��H���
\��Ẅ́�أG:�� GE�5 r�x0��3;�9�.�s�V�l���Uk�%|v	"_�߹*o	`���BH�\�S E�i_�e�LT�EO��Ji~�e�2�YՂ �b�ø�F �!��E8�[ID��
�R�*�c��Y��/`�|XD%l	��e���٦D�t��sT���}�Qu�i�X�B���fض	��.�\�^ M�x%�KI!�(6�ɨ�o�"W��sJ����ӹ�����P�Bi,.^I�\]y	؉����\	P� �%�&��E����BM� |�9�`^fK��L�ܓ.�� �g/,6�W+]�������Kq��ݩ*�' "���\�� "V-���m�MN?����rr���b�%^�'K�`?J�2���$���O�B�l�"���J.!�l����6TN@�ܡ�/ F&Ë� Y���c�X"yag`,��<�����䨀R͌���� B� [v$�G 4R���2_�̂�  �͐ � ��T���X��r�� p$ �/�'p�C2Y`8�	łP �Sآ@��H_p��L��#ȸ�
�*ؓv&H�O��� �%�H@F/�R�`"
픏�
��	� [�f�e� ���"�/������'�I7/6+I�	/���)
HQ�  ����B�	�� � g�nI6�'!��pG�^�0����� �H�&\X� (  �`[� 4	�� 0%��x O` F��V�gC�� ��sb=W:�H��[&]l�͘�}d�����Q�U���2���~���H~��G�s,�?��R��_'"� uz��}Vr�� t����0r��^@��ZQ���}���X�}�XU�WsǸ�����y�������L�Xqt&�d'�%ls9�//!UD	#W�T|� �	AjX�	6�Ek0a!.o���y��!@/ؠa��[�J}��R�}�� �D�ϫ��r�ޫ� ɓ"7c���f�����N��?Y��}7^��Ӄ�/��g��^�����d�J�G��T���G z>���|�����Z�<����ս�6�=?U�c�(�w�_��yp=W�Qw<��B��>�<��*��V��V�7S�����.O7S/S̃��:�;����=]h�h�*�j\��뀫G��SS��~#R�j��Q,��+Gs�:˦�o��.�������i��a� ��
4���P䜚X���p?I�6�������� �h� ��S����Bg��T�8�~���GeK��E~Z��?M�n��3�t~u�~���Io)�5G��ο�*P�yj���T�סĩ���������k��d�}Wܑ֧��$��t�A�<����J���"�!@1�@A
    �H��x?;��� ˸�~��_��~�-������jOmL����o���T��kQ��#�5�W|�ͩ��n?ŏ�m��y9��h��u}�5�w��q$kh�N2��ԥ!s��EvV9>N�ɤqw$�t�1��'�b�PU<�Y�7*R�H��A~CW	(TEcI��`�\W�J֭� �ow���gV�¤n�������}۽?sI�b��Q�o��k��K�F�&��k�[;�%��H (�� ���``� �`0� 
I�@��) �� A  � ��H�@ 2$ c��� �`
��_��$l� �䌸7#�c(g��, ���H�X ���"�*r��x�&� @�&[�!|H�&x� �"n\�$�H\c�0� �$`<(D�08+D!�����C�"��G7�Հ�p�  N�v/�L ���� �<y#�C�ȥ� Q��\Y�#����dM�TT	 89��$x�e�	 E�]�a���,ؕN �W�&R�j���"�b ���O%��dE���L<\5/�Iv��1q���B�q|�c�  U�!�����*�� K7����-&���q�k�?�vN �Z ��Vw"�We3 gݕ���UU�˖�fgD��6@eZ���~J��X��M�0����*����6tj_������F�m�4�l���sbE�.�~J���C��LY��4���� ��Gqpլ�}��x��D_�¸j��s(�6y8W5*;��{%����v,F_�!7r��Q�%� e>� ��	��Z�25uܡ���Yd�,ѪT&݉1e��p����K�ǰx�*��z{/`'�eM��N"��Y%k��_=��9�6��/)<�<�v�a�L��-���4H��
�k Jbą/%k�!`�TX'T��e%���`	�rs�jjk�����%	`��X��r?Bq$�5ݲ�H�n&�=�6��� ����]�&�M�'�9\���@��W���>
�����8m������M��6%FJ�c���#�VCeH��Q �a�@������""$$�a༑�H���Ey��9+��XHe��� 5�Eʑ ��,E�p��3  X��%� ��%�p�j$Y7<3y�`	����Dp��  �p &NK�9ib�Vn&�d���`����6%��H��|�qr��J
����D���b9 ����` ���[ m � r�B�8	B�ܖ*�B [v'%� �^`��
�f9���Eܳ
�%	� f�"�� ��B�-�ɮ#��ʃe�BH ҁ`�|9( H)9b<�ra�H� ��'�hB  �%��fRrh� ��y&P�_܌G�����J$`@�� �^@�+`�2��0@#9kLOs��s�^,���#�T���!S�y��	n@��6���NX�"e]���Y�
Ģsq�A2X�I�^ ���� �a>Y��^Z:���Vɞ����Q$�pKI�٫\�FV�@$��+�%�S�d�!rI�rAY2����s '��[CLD��qr� l;1����|>H�� J�{������>��ؔy��Q�ޫ}n�tdG?:?ι�ls_�#\���4E�8=Q�p[#)تy�w
�O"b�jD�*}���̕~�
�&D����"�P�b���2	sp(�B�eI��,ܲf$��G����#��p'�L���uhʹ�����=����U������TkU��J�|�I�r�ڊ�$��F�%�,��J
���Z�`d�.B�o�#G�*�|�?X��i�zj}�}�Nu�G��Ej�k�>�>�(�k�����O��?���Ҫ�S^O�SmK��=�V��-S�4���W��T�v�'䪥׬�p��z����W	�U/���3TC������'��Ou=����pE@[ 8!`
  �	#) rU�d��/���}b���>��8����Uk�;ܤ|*gP�{*'L��?�߹�/M��ҩ�+��j�>c_�#����Rv��V�֦3&Z���_�^0t�D���%l���濮謄e�Xx;,h���U9n�sl�Z�v�^�*�j#��
�~�j ��;V
d�{W �A�.B� ! �M\�D6�$���<�%��� {}6SԌ�r���Ӕ��no�g�G%�;l�4��.OG���Зs|����� -E
(H�U�d��9  /� ��$  �V  ��o�@� d���  q�P$�    '!���lO� ��$��L�� R`"� �@�!H����b� �o��� �����r$I��{����C X�����{,X� E�B` �� '%  <�{"�*��,Or�&�X'�Pؐ / ���]��@���*#��"�HFD�0�Er���2��� /o; �]�a '��H��rs`��`j�a����
�Y�c5`5d�2�Vno]�w2U|�xJ$ F�_$�+�8`L����~f�X%�e�}ՐW�bQ0��ٙ�������L`� ��e�.��%H�+���*�yU���!~�^H� &=����^�Ջ #3��:6�*L��3<�Nm�-y�����..��z�CV�J�b#�����δ���F�d¿��,e��~�G�k�$ۺ��/�<5�(ɧw{0	B��qد<�&8�\�j̓nJQ|�mtZe�@�p������.J�������n���J�&@�V"�v:m�g;?����D2�0��~
�6$� r�Mԧ�p��ָSW�������K"p����K��Y��h���p+^O��~�N,�^�!`KY��A)I+�y�BP��+P��9]�O��w���D�@��2H��HZ�+}S*���a�-_?��%+p%y� ���`�l�ExY�i@j��Kb<�.�H�gr�>@�x4����
�r�Q�8�6���)o��V�"��&��qKx
������*A@$(�	�!7"s���D��8�;,@D
� W` �v�1a�J�^` N��  L��L ����Rp�^JE� K�
�J��
�@�I�$.XUILRh
���.�Ż' Q���^G#�� �r\�{ �L��-E�����R<\ �
d
=��`NE��	1����p�dB �`��
���T�$\�E�s ��
F�
��d7+"E�	dʄwE�J���
��.,	)H* k��p ��dn��(N �;")��@�$�K�9 "]���v1q�l@�#}���" ���ʃ%I0) �  A�.x,I�U�y �� �[' �!�lH�p�� l��u��t���6ff��WɈ
��3�nGr����	R��y#v�0�e�X9�&1$�Y-��[�2�p	��$�# Yay9�r�K?�9�"6l8'i'%x����Y����sI�����˸e�'���#�P����`E�����9+��2U`#�9.X`P������� <{"/L�On�� ˴�&�f�>�^IGU��9��:n��r�ȍ��}tΘ]�Q�Ms���NR�ɚ0Uvz��Ye��o����%�ba��I�ԙ,C���Y.WlD�NC@XQ�c��`� �� �.� '�T���܃��)��
V�NE��NK͆ Ƶ=zR��}KI�F��<>O����=�]S�	q�Ԕqn���:T�Jk�c�kl!�MLx,U��PZt�SI�(g�m��שS�C������K��m����&�>rw+v7�Zq���QS۱�o�V����^O��ދ_���J���~�ҿhlڪ��R�6��_���Ӵ�}�s�YIB3�
�9>�%:p�>�>�%����� 3����;�x���z���>��(N�-G�������I7
��R��=X�?g�U���iuN!aw?SKZ������sc�<ޟkBX��E (2� (  � ��d���>���c�>��T^��}_�3�^���_'C�ϓ���ԯc^���S�O����� �����(�����ס����'����o�+��,��&~j���s5ӗ���1�n�����o��_�bpk��C�L����J�b��r���91U�#�S0e�x:4a�<���A@$�M(!W�'�h�U�}��� �`�`�U�.$�����{�?���'Ú��a}���Z��s�'�ҩ��,��{=N����g���W�D*_j%��!H�    H � 
��^@�   / &�$,T8@���$ �lRp@�� { �^ ? D�Or����r�4B�FEpk�%�؎�{��� � Ibl ��Uȡ
� �D  \�2����G�N@p?�F `0�� ?b�@p06H�x�� �P�Ў�"�݄�>^�$Z�Ȟ ���@L�,�R�������@��̈nK�	�n�\�(O`ܜ��#�ˑ���`�f�_���|v���;AG�rD�-(��"��/QY����-�͓% ����� ���HS�[� L"6�8|����H[��
l�˞@9Y-D����G"`b��w� �rF�� bC�p��V�b��@NMeA0XpS��k�9n,P+�%���M��f��6�X����?QR�&e� Y-JT���U�l8�a�ۓ�����\�X%K����.iK�vR��p����Հe�U�*^	��sh-�=������XK3h<^K`��D�&x�[Ŕ��� ���Ex#X7k�"��V���N�$��M�#�]I�A1�ZDZ�X���YȌrŘ���GJ��#��s(��bU������\�ۜ��Ȇ����@�$0��k���r��Fr��5�۹��!uC�m	�x'�_�	�:�z�7���M���E�F%���
���|����#�φ%;`$��Q NM&�����J��(3R��� �8y_���dp�6|V�1�
��˻��S�	�q��*\0��#��@ �̗ l,.&�퐲 "���a\?p��'%�	=� B�g`݋fP���_p'�$�*�6|�D�����%�@ L�p+PEb�H�=�ŉ�-���@f.\�`C�T3��\��c�!y[d�����<�n��@5r\��� �~ �$� �p- �����I9�,/"I�c8l��n�,B�$�Q�P#*Q�O"��WHdE��YV `�@�Y�&8�%�'�̒lT�
b@;�XP�p�1�n*���{��P (�� E���/�]�a �I 
B����N ���@0J ��)$B&�|鈔d�Bb.@?e|�,�p$ � �0F��
	r��R 1�oɝG���w0oV������b��@�oa	E���)+'�������&s���I�p��I*��i��[H���$� I�\�s����]�~�>�+���vN`+> eW,pH�Q]�B�~� 	�� ;0�q�@¶C��Qd�+�u�׳�?s��c�UK�(��kl哮�����>�9�����rv�M��+�G�R\��<���Q$�ܡ7-�L�ۀ/2,�� Fx'*�o`*��[�װd�̑w(�z�� Wb����/�I�ff�m�d�@�Q��S+`_ ��@YpU<�H���oT����u��m��Z�tb��5ZT����IgM5%��U�V��	�y4?K�%�<��?O��mM���t&�S�~o�R{�©3��� ��],�L��ֽ%-�O>���f�g�[MA�/���]k��?e���~�j˾O�2Q ���~"� %L��}����!Mi'L? ��/���Io4�S9??D�F����=ҷ�uRꌔ}OV��Ӷ��Z�WCWO����������&����If����5U)��ؤ��t�O�a� MGG��  ��
@P  
��@|X�m��+i��OW���ߩ�M���u{ҿ(�zv5��L�:������ e� J���ߩU������~��=�J��~i�]{��|������_so7g��\d�@q�ͨ:;&b���n`�W��X9�Q��g�#ܨ���R[A8�� |�,K �O���|�K�8�n`�� ��}���Y��� 1�ON�ѿ��.��G������o�O�����>����ug��g����Dej!��@ 9         ���  `�A���"�&ű ;H^ H Pܼ�������a�@��  E�~��� �FWp a�+2����$h��� � `��`(>@�d�@WbF�B �,�� @8Ā@�؀D��#��,���`{���\d	���@\��E'  ��@I]����vYk$r�v%���x.@��*i� �jk��	ܳ`���������J]��	%XJ_�H୙�J0U�O�Z}�W�ps��������(�K����LD����Y4H�b�D�HC|������&��_�ΐ"Wq਎|���	(bH"No��Y�s���Z��@��D�-��j��I�Eþ�V@rU|R��	�/Լd	ġ��D�� ���@���_��^@�- �R��-�\?!����V��iǃBPvw�����ũ�-6��TϹ� ��>�e�ċH���W�3S}����i5T���2P�a�_�1����Ax��B��V�(�9�,��m\	��e�Tʬi;�c���7wv��en�O"3?�Q0��ĈN��M�`$}��Pj>��{�	�a��e�@�>���U��n�'9"vw-2�vyܾ]����I���_�ZO�EJ҄ݢ���"�/���c����|��y"弚m)O��]T(2��S��E�X��Ȫ�wEI2]g�B%V	(+�� [۰W�2�L�PY��^l-�-M敀#����ʉ��|Vl*����̷`?Kn������Oع���0�����#�H�X��f���s���}�TH=��W|�]�dyb',�� � +0�ē��q Y��� �f8�H,\	��Z#�		 �|@`�@(�@X  y$���'���;�08�lA=����m�?�mrHy�	�M��qb^J� >&rJ���bH����Ye�
��� ��yد7GpӘm B,_�7`� �@��;Tā|� Gbf�Y�(�D�p��-���& 6�DY ����*@I�E�
� ��s �| (� B�	 0V��@.��/����! B� �H}�  ` � �%���� ݈�!H��R����Ǫ��\��:�d��H�_�.��	=�@��@J[(�9D���� �P�`� ���*ې&y�@��I!�ٍOʠي� )*�ן��{�/�M��%���`H���ܷ����TB���Y^H�6���dX �� R�sp�=�{\Gq�@�A���N��g��ӲqMK�%�/��������qJ�L��ʹ�J�W�g��I�R��8�#Rf��G�8UQ�D��J�� �EL�v �XI=��\�7d��(�(��@��!�$�
����eX{��� �b�0"�.^l$<�B$� XEw $M�()��V���Z�i?��{�I׻�&�3�U[r�<ڭԚ����;��TUK�F(�k�~�����N��Æݑ���W�4�5�.���j<>����ԧSAMt�[u��V��tշtj<���Z_�=OK�W�����Z� z����ҟb&�%]ukjM*[�v^���K�M��}������ѫM��p|�OQ�OM֫m���ԢΝJK�k�~�������u��d�^��}�I��k������G������S��K��UC�fU�+Pd,���v�'�G���gI����cR���������d��� 3���W�Ժ]�+�z�ѫm��}5���~.�����U'��n��իSN�Z�-�~)Z�U�P��;[zg��<�	����U�K @!b�   ��@ 
�솑����2~s���	�������������ނ��(?�l?�^���D�='Ix	_��J�Ե/{G��5;��~��+K�j������c�N_sB�Kئt�F�<��P'�\$@x9�.��d��(�Y�|�ud�[�Q$˳/&]�QbH��̻y��N�"@X)x"g X�rL@Q���S��Vl"�c,��]���� ��'�R��׶��_'�����ԥ^��Ju��g���-o�ӏ�:�~��+!�ȹH8 �    ��H��� 	 0B�� `A VH�^  " B؀R �  � ;�p!@�  F��� ��	 #��n����v �;�EbP�"�
$	�"F@d{�� �["<�}�bY< ���I B��bę+�68 ��l@O�2�9  \{ $� "V��0Ē�I<ؤ�a���0���!��h� �wc�,Hai"/pd����8dn^Bs�%�Y
�Oa����/���ďfo B?�����9��^,q�s�&��s&�X�W�r�%�$N�+�������[dE���*E���j�������wr���P)NI�r�F�AW�7r���p6$� ���Q}Ÿ'�a`7h"r����ܹvB�� ؎Qp�� ���#W��2@Àt�ɪG b�c�r��v��K�X�x'3�	ᙩt�#�K1w�#R&���L_&�3�f��7偛2�yc����l���a`�ҦLŋ8�s��u)�+j Yه̼"���xȼQ e(�*P�vW�i��H��2��B�88B#��DNsq���Yac�d��_,��2��8�a�v�%�^MT�`%i,��|�̟o9�<��	��a�V��"��[�_UK�r� #�ݍ8��3�*^H�njNm�UNR� ���`_+vۼA"�P��U��*[�&��^.`�
c�	7��$��������s+��$鼢ĸ�R�V��
m��#�r�l,#�
��1~B�� $��
�*�H���'�iH��U2L���Oܹ I� �v#S��T�J��"���P �J�`�H��
䁲@���$��/ܹ �Dق�NJ0��Rp[� ��($X��K�N@���7N�J�2V� \��G��h�.���b� ��"�ȋ{�p8���������6 �.G00@(r�"�VɀNY��ܮ&�#�J��d�2� .ŀ+�3�
�|1f�w��%ܼ�@�ňC�?p!lNlP$���7#c��ح���Vg� l�qp�@v�+v'i+H�"�� 
D0 �'�2 2D ��  *b� �+�"c�K +���/6 M��\9 =�) � �����־�&��8���r�/�U�e��2�� ���[#k� � L2�r`�`"�q��͉ \�E����M��$�/d7q�U��p�pJ��^į�y���?y$\�]�rRO���璉D�EX�6�Լ���?
��!+c�{�-��d�`,��w�� �	͋̀4z6y������rJ1�w8����^�2%Pד���:���K��?�^��j�gM}���d�r�
R��"C �7�K	X��y,���ؓ�"�K�E�t���
��8"��l�Zl8���W+���08�&H�[4�*"�M ,ܲg�(L܍˱S��x
&	��P����5M3~ŧO%��Y"3��U��֕eO�[S����� ����ݹo�>���"��j�s�h��k� I���ԩ�ѩ�g�V�d�9U�\E�k8���z���/� ��O�����~����=�T���J]�3��Zq���4�*�&-Y��+��)UUөKx���j2~��{N�U�Q�ߪfb��ԧ!G���gA˅>��w>G�K�mOJ@~K� ��?A�uN�>����?�%�'��=� [�8l�_g�����UkiR�M�]��T�:�ʛ�#��F��z��3���֧�x#��m�*fǡ�O������B�"A@  �@�/!� 	 rT�U����N��=N�����~wԜ+�]���#���$�+Mq���� ?'�IQ�zK��_��I/��/h���� P����"}^���L��_���]9}�&���S:Q���4ڃ�]�b�B�f5���(��λs�eDnQ�+0��ܡPv�Gr� m�'���b\�Wv�"��\Y�S�,J�����6 �:?����U�g��Z#��v���V���j{���d}�@_��f��s����9+!��HRH
   �  d    D (X��&@� �"@p� 
��p 0X 0����   "��� =������ �0� ���)=�d� ` e�C`"� R ���,� ��@a� r0	%�W@D$r�����b@pL\�"c�3���$ؘ��	̲�Do�!�#�$�g$���V	!;`��#p%�$	�T���Q㑂\	�����Ȃ�@���	 E���;�d�s��ƹ�J$G��bx�Tx�-� �/�N|���خ�� ����p�J�䉉���l��_��ܓ7.H%\@����+����`6�\������[ɛ�Y�M��G$Q�`2F��$��]y�1q����x�'	خ~ �\yeʹ0qk\�H�Y�>Yx���>857�&�Cʎ�k� a�[��8sl�m2�ՓS,��&j���%J�ri��7.� svJ�Z�yc�x6����|gl��+���C�Y�,K��&e�K�[͉��9J�8��k�V��˹��"<����$x���O6"�� �Fy�vV曑��o���CB%� E=�^ ��	KҌ���,%�w��'�,�C|X	�#̖2V�5a�C�8+P�HD�ǂ�-�UM��p\]�B�9��t��ӲNBK�k̀�weW����t2�*ei$"�aN%���F���% F����0�0�b^�O��.���Eaӎ�y����
԰��$2�W`���1` _q~B� T�G`#p.�x���6M�ȎD ",W���*8��j���� �w M�Ap�9W���> `&��"�	��`;� Q�^D ��|��{B�F�o./�@��C�$�8�'��A� �p �  �J@v$��ds$Y *o���+%M�#� 	|��
���_��	�H��� �U,�� �^ d��HҾd�%
X�#�"�P���VD��vC9.x'v�8�/�}�r9x`TF�o���XH�����5�	 K�p  ��Y�  �� �vyE�/% @-�X L/#ȋ���-���_�@�M�A`X���� Ȱ�  2@ 2H �@P#� �&L�uh�M2�_'����yڀ�ɗsUY D2?�&^@d_���<��!�����K	�ěd
�HxD��NP�&ś��PaGl02I�@��+�%X%*R�G��3�;�8�xd��r	�Ĉm
���/q���]�S ���eH��B���Á "# O'}����qj�:�m[�Q77��v�/�ZǞ� B�69����sj�5����_����'4A���W�,�;`���Ĳ;��}���W������"*nC�	����I��~V�M���s�Z]^L����Y�z��$)�UT����%�y���#�թM+���g��Z��&>�V/���t��,ɵ�����n�ש��O/���}X>_�-;������/��_q�n|�wt��z��<O/������%?�$����]P�����Z���z�nIV�N���<���/�3�����J��=OR���zZ��L2=������3��k�ZZ��ԮO���=��]:��g������CCg���B��E���uSUK�c�����(�A�_Oi��[_GI6�_��/V�� S�UI}�G���-E|{�u�}o��Y�_/��.�?Com�ꘪ�|�65���ϣ�F�-%6-�k��z�Tҗ'��n���z��&*���=_eo*��'�{�^�˳�<�t�O���jc�_���'��>�wzu5d�����}���F��i�د��ӳ��4Կ�k��������F��z��W��z{���S_�bG�?��ښO�Ӯ���{��i?�G���T�Sn�J�Sf�w�t�k�� _M�ɥ�K?9�ծ��m�޾檪�]J<��$_�_��]�Ԟ���Ζ�t{�ޞ��i� ��R� ��k�D�u�ac�i���_��MOѥ�5WZM+�,�Vo�A4�USL� �ih����_���Ó�>��]����C����I���N� �^���[�� :�̟Խ9Ǧi�L%~/��R�k��|� P�Ͽ�����g����ӗ��s��l�_�R�	�Ws��T�b�2�|�����4�H�S��`��Φ�S���i'���q3�Q����@�̲��8�X�L�`pEUH� W�I*�mE�S��S���N�l��[��9u3ڭ��?�c�?s$J�JG����v�>g��?�K�:������3%��W"J@�    < x� ��
@ 0$� (`� � f� �@0�#,�   A 0�y ��#  Q
� �$  �@A( 2|`H��f�NC �!�&ri$ܡ+  Z � �@� K�"��� � �e��H9 %[�)�pb��'��w�K��f� 7��{�!�8�|���$�-� /%Q�Lه�]�<�w+K-��d��wȎ�#l�x@i���8`VI�[\� %rGU�@x.�N�6:���
�dI��WdEE
���+��H�r&�Wk�<�� �� ��|��]�D;X#p����*7tH��fPx�|rH|�J0\؍� X|a����`�H��r�x��s�&]��[I< jX/`� �bU��<{"oa��&�ь�	G%��L�dIr�r�S
� L<��Y#��1�w��5�"'��^/ s�y%�ғ�K��s�xVG�,�
�f�{����+J����;~�*WO��psj�@M������B�)&�)��L��7�Q0�%���_���`�V̒eM�)��
����%�f@;�1p��4�6��(*���F�� J��v� sW冔��y}�j�.M7�);w
�xemǁ. 	��a��*Yi��fg�G	�M�F]�Y�A6� �\���_�U�B�`���eµ�Bl*T��Cm"C�b���b�ry�n����D/<��p��!["]�Y�r%̚D��C5KD�p�j;u	��Rj%����N{�H��
�"��-r�f��9��Zac%�{��v�l
�a	�b'�s�]��o�V�#��/�d�/6�q R@�U��Op�@(� ���Z�"��P�'�� ���q$���(qȄ�./0<���"�op�����X�؞��r����)�\f�G� s�XQv"y���`�B  �� �r� r -�  hD0&p �p�D�2bI�g%��	vUpY����!ǹI?���H�r��d�@`T����!�&\]d��T�	����<�w ������  X�!nA���5��
Ģ% �� 	>@������x�<0 p� ��G6 � HI$ț��_p�`��~l 	 d ,X
� ��M� ଀Op��F�����橞�x�yZW
�O�bƚI.�p���؃,�{ ]��]� �% y-��x�	9��#NJ�r6���2\� �I�2�p�F�X�5{���N�#�����QHe�T��J#����L���s���O{UǆE)(.=�,�>JA-�vٵ�*^>�]��'���&T�vܞ��O4�dX�Lj��=�z��o�K?Q�ѵ7F��[jY�$�G�������*,ع���Hr=�fK�H*��L(�<dq�)͹,�7d��(T��s,���+ũz�ryf�g�̘�<���~�V�i�1T�"�ģ.Q^rb�.PS%�$n�2�(��\˺������u4���5<���=2����*�N��t�C����*t��6}
��=[�HUS������6_dgW�t�	v4�0���ȃ�}�9���ɖ�i�T�q��z��N��Nug�e1���6�T�78�Q�cZ�����S�=��i�� 1Ӗ+I����ڈ<ypz�צ��e��� 8�� �Uuot�2����m[�������u��=>׮U��k�_G�qkn$�6�u��~�ֵu56�kQCj5����Me�ܩGl� �]�;)8m?�O'gg��׫�Ň$�IQ��̗�]���f���6s�M)����*�_U�J��7�/��T��U=����{�:���T��?X����g�~<����{�����>���q��j�(�7R�])�����WV*�{M]��ӯ��n��w��(�v�ӺG�������S����yu�V��jGON���?�zu	�f���_���o:*����~'�ղ�Gq����Gܭ����� ���DY���-�^�������Z�kꦪ���-P���f������j/��j�=E�2��MU%f�-J��ç��ꩱ���y��e����RL:�������5���é�w8�N&���p����N��5�W%�9*�&�K�1[�M�	��"�Y�a5����ɘ�T@UpYDB,J�Ե>�Nm$�	A�nވ� J<����J��xy$J�;`���� -1����~�Э���:�����꼐�$�us �    n �    �� @  � �  
@) e @�  N �| �  �!x � d��@��8 H�a9��� �H�@
K���G�5b��E$H'&��&}�� + � ��	�$� <d~ � %� '�}��!�	 �ćp#+V�R� �@5ko��� G�,���*�$o��?%�p� �Wwd��~�'�f�<���rHɮL����[2;w[䌵;X���y9;��rq�
�fJ�Qr�Z�I \2Na�[��8^�p�@]��m3ah�&r�Y�a��,s��4�#�pݔ��dc乺qq6�aC���pe�@D�"�~� 0��
�x_ E<�6�@xK�
�LK^�mŀ>�%%���`<%s$j��	�	�_c-������#��M� �[�a9/{i���I/��V^@å.lf_�sr�F���d���ˊ@�3Z�i6��p9:RD�:����W��^�r��K��	��a;�#M`S�,���mF
����q/�?�|�\\��r9�'�ҋ9X+|p�~e�v� #IXբ�&c�S�)�dK<����p_���nH�� Z�)�NV
ڲY1dU�"� a�Y����K�4ћM�o�%��*�ş���r�Y�X^sb],�`��C	G�F�.� '��+JI���6�R���(�e�fJ�%&�I��@E1�dq�x��EH�ܪ�����/sL��|�_�	���%b8�XW�~@�K��L�(�nY�"��X�+!����y� 0��PY��	bv +d@w R{�	� Z��/�$��Xsf��NAW�`!Bh@S؀�� ,��9  �&�.;����9�ț��"-���X� X ��92V,�|�� �I(@B�S��]�1b���PH*�G(q�W!g 8%�����p@	!xI0��� Q�I+ �䃀)9 \a��@	Y� V` .P�X	���8فq�@�p� RAWpāa7BlI�.�'`�@2�h
�&
���  ��=�0c
D "��H � ��H, ǐ$\7���Ĵ &�[�p<��O;�Ѯ�Y<��0nL�����v8x!Y�����,X��X��H���,��J��ی�� "W%��7N��{ ,��.G.�o���_�#���%WD^J��MC�e�˲�8Wh?b|��`�-r(��,�R��
�p<� �� �d�pGpb�e�H/��!^I�dGrc� #&���\���}e$�{�8<�{���s�A�-g�O�\\帏��%��q�z�P�zh�Z����j�=Q¾��⊬��=Ɵ#�MK�3Sp���/��k�'�|eUT���S�ZWl�2�o��{�����Ы����E�aQ  ��	��z{�M�y~V�G���_����A�[F��.�����5�0ٚ��sM\�S��-����烛����*�3S��A���� W+����+��GݧR�����*��������Q�+r�~���T^0<i
��C�K���J�H�a�gDb�`Ue�5�k�s��,�r������g<}J�R�:Fk���lx�i?s�W��$[=GB��&��b���{6�Br�p�J�]郛֫N�JWf�c[ժ��c�_��nhu/v~cCOWV����~����?R�UN������i>���~����U;ʖ��׏������z��_��WUܒ�?-���joWk��|�CB$z�}/J~���Ui~[��7�S�;�~���s�}A���Gq���Aݫ#����ȉ�$v@O&kIR�2id��t6X��-]D�˒j8�rGZ垾{w�2�Xdu&F�sL���$�2���*�df�.Ykv�&��J�:b��!>Q5Q,��/�����2���R�TE �8,H.J�
�@cU%CG�ԫ�wg��)�w�|z�u3qU4Νguch�E\����{���b��P�'99�|�L�5����h�Yy�2�x5=ª5h2�Q�U�4��.�JkI�}M[i���ݮ�O��]y(������X����Ll����9w��,�d:9/��
' �� v(
�  �e       ��(�/�$�ܠB  0' @ 8 	�  ' � � ��\��{�DXH`L�&G�Z�����@.�X�   r�r�g��$ܾ �#�p�
$MÀ#��@#�&@�&�6�&P�B,8���@��� \2M���J8r���"ےX�n�倈#e%�R�Q0P�X��0l�X��P����������n�X#p��9�ʸ`X�L���X
�=�d�����Vy+Ǒ0��27e}̷i�}��Z�0snX��
p�i\��g���Ò����B��@�������,UkAh؀$c�F�L	b�����(�?�!+�G0'�{��I ϰVa���6��^<2��/`���7�U�O�#�i� �>"�?m�K<G�+�d�1�`��Pw�ͦ�Y�-� 
���r�G
�o�'h	FI	`.����O�{��`�73�k,B�0�%�������Dt�!76�R����3�Z��Z@r�2�o��zzo&}�?p"��7�D୸��E�ݣ�2��Y@� nB�!|	�@BWbT�W�ٌXF1p���G�Xj���b�T �7"��I��Uw �2Gebԥ�`$õ����3w�v�x~����	��@E	�?���Ey`2���'�&��~�^�Uu䒱j�P�Y|�p�"�e^m�*yA���:��9���r\AC��N� ȘR��%�a)]��ĳ5T��������L��G*�_��	��dW�,c���� 2�^@�,��4@&	;�t,�&`�H��DeX�C(O b���@hA^@pÌ�;��;;I���(OԲ�a9,��\+�~��ܼK�NI�
�>	� �2Hy/F�/w	Xp Y�
D^.�ةH$��X'7����o T�y�`��>$}�
 ��d�PpxanB�xb2�brX���,� Y�|�̑[��`�rb,�*R�80[�JYD�� V��`
�A��"� ����;  � s%܎ 6K��2�A �xb@�T/��  $a� RG"J��Or�
F �e�k ��� @> ^@{��"� rd+��%�
@!���8k����sۮ�x�� �Ԯe����8`e������x�'(�CT�J'��B@�ܘ��(�$�`HA�}�8�0��B#��[�"LX��7���@ �Q�s����j���v�o����L��[�/V(TI�c�/ ��?����Հ��;�%���;�j� e�5���W3���Q�p�I�JO^��)I�B02�s֎�βs����5
�75X�$��rzc����
f����P����ZϦ�c�ٷ�S��nN�|�gf�Z	�X�Mr�$�~�K�Pf4�a�ʭAz�Q���RJ���@j�=h�UҮ4k�nb�)�'*��jޤ�J�vz)�<��%��뵌׿�������t�iQܒCk�^�Rw�j=�P��>V��N���O�{j\�l��bz��V�n��U�>��7�b�Q�yk�i�і�Uo�X9=�/���f�+'�����ܤ��<���^�M+B����5%*��v����+��~�RNǯ��s��
�r�t���6�����i��=ת��T�tR����}���S�!$���z�F���W�_���#��%sJ&���� ���r�������tH��J!�2~C�9���P����^j��� ���ԯO�p��)V�3����'7�Z��³�c����|Ԥ��kP�����W�s�u[n���q/����U�]_��/s��gc�]Zޥ��)���f��ϭ}7�F���Cg���׊�0�'�7�fz�9��4���S�9�l���6�o��Oؕ3�������A�o�ս5�w��+n���Z7���]'M5,����u�[_�Zj]����]*Z����b�c�����wtU�����y�(��;�Z��ڰ~� �6uѷ��k`�}�� ��N��.�-��n�� өY8>����(��UU���Z�:�������W�t�'�a��E�{��J3�U��L�ۥ���i9�Kc�=>]z�|Ɋ��,�}~�8'J���_���:+o�z*l��������k�K\R���ɩ�f���:����i�N�-\_���S�-&W�S�&�VG�k�9�B�8&�*�o#�r?���L�,i���?�۹�^G�����������D��^]mZ��<�M�}_�V&��Skx�!i���TWr}zvj[���Qa�!����my>�[jU�'^�F��i��/8�M^N��Z*�����[���;y6�s)[ɪU�*�K�$T�"�T`{��L=�3�i���J�+���Z��c�{w�}�,b�ğ��=?c�>��})F�O� J:�����
��@  �  *� L ʈ"`	 0  �$��'�P   	  � E�%�,rGp �	��� ��5�7�#�8�B� ��0/2Ap��p$c R`�D ð�  5`bH��>�9(�pB�	P'*c�&^��@!p@!��0� #A�����FV*$�d�d�x�a�ȧ�r���o���P=�q�{�d��dp&ğ 2E���LJAp.X�(c���������؂� �d�",8�9|,U�� <�� d�J߃,�x*�J0:��_sz�FK��N �7/3p*Ds���"�)�x��k��krN$e�������V~�"�nX���8�{\�bp?P,X���`�R�&.͕�	|?�H� B�@O��=� �Z�<@����b'`,��,� C��đ[�]�b~�Y�E���e�@ӆ�Ј��8n@(�BT�����&�� ���
"��l��_��^.2��%N� �9FZY5-�IO+ fD��+\vvNɓ��:�@�W$G���s?��&Z��n&��WP�Z
���(�ES�`mE��D퐜�04���.2F�ɥ�3ň�L�0�|e'e>DK�6����@�Kx-��[���?��خ���^�8����r�yk�I��rpNP�E�XD02��7k�[�j�'/V���M�["��~�8*v��y�p{6-�!� $_tX
� �-�����Z"@�H��ْ�~�\$�D�	�A�T����ɗ	�����`�F�VBG���$.�2����F�'>���d�C�	�%"̀��8�I9��|�Z|�-q��x ,i"BnG�*�I��� �͋a�̳��@�l@(�Z81�����RR 0 ,^FD � ��#	dL]�
�$o�o!ؾ�[w
,�d�3� !��R���{�͂�À���!@�Y���plA@�{*@=����V`�d�����bXi�J�a �����@I�R�	 ����<�䣙# �8���=ǰ2䃀9 �����A�bI@,��  
B� -�@q��s$e&@ 0 r<���I#�C�	%��

�r$��G @����Z3p9��\�V��=������+Os>��2�̑�
���$�G�������_��F[��,�aB%ݏ!�"�������@f
�B��&@0�3�=������[�B0՜��晙��v��E��*<���2,V��bAb;L��Z����/�a�tF� ���r���Ѷ�.H���� 6�Q���y���bǌȑu?.M3������k_R�5Н�瞭*�Ԛff���*m�2w�Ls�=x�=f܇���*���w/���ױ>���u[�r)�T��Og�
�z������KJ��|ճt�ʚ�V����Ъ�c�S��KS�zuW'�y{V�)���K<KU��:��y{��1�O�Gs��\�Gѫ���^ǯB�Aν�O;Ы���o���d��ˆ����L��;���n�S5��3ѭ�
�n���Xǵ��uM˵�U5����v�TU�4�)<L�s���S�1媚{见�nnsU�ަ:U���2�{
k:�ZV�<�hT�1��I��U�S"�����=*�1UO��M�zk�/�������ZuF�*]sN�]����ЩT}o��:y<�����Ғ]���J��9�һRg�޵��֦W��eI%6Pv�mU|$�K~C��� IWb��]���E�V���R��7��~�3�*�F���=�#�=�����S��m9E�S�|��mc/b�'�q�P��c�h�]��rP�)�P�/G�N��_�n)ե'���c��-����n��%K���>��ХU����ϱN�B�4j�׊���>��?Mt����G��Mٯ�D{Tλ^~�z������H�t���B�<� �m��?5�a��jW��6�<����ڧ���B��-�̫n�Z���;�}[н+s�ꦯ���Rl��j�5�>��3o�u�8S���h�4ꧦl��C�'Li�Ӭ�
 �Kj��T�c�4�]IŌ궪i_��;���SMBcܱ%�8ѩhv:*���S1{�Hߌ�Dh�n)�z[G����
�e��:�i�s%4�jP���B�������R�N枌؊���:׷k7��}++U7&��iZr�-�J�*��B�}�7N߉d�*�U��h�K&ތ+u����ڪ�8j}�&I�\����^�ʪ�#�yA(�0�;�i�s=g��/��[���:�LvSdz��JT�٢�:g�jM%�E\�X���#�"ñ��\�K�� QG�����qK�D{7V��E�z�V��&j1Q�(?_��6��H��������?����s������     X  d C� �TB�FX  	 O �p( �  �@  �@�  �'7+;�;؈� �#. �%��$�B W�!��D(  ��_`@� ����H�9�$�`X��y� y ؖy$	 ��`��0$`FD�
��
G�dY�1�)�W������H/����@|�Oy�
�>����pY^�~�~X|��F`bF
�`(��� ��,�^�#&bŇ���p3��}� C/����R{K���D�-�����
��"*��� �㱜�{���>B���b��d� N�X�a�<��]��?�n]�^�^J܈Q(	���>�I��	�T��=��/�i�,�q �Fځܹs�	� vK7�,3���?�ˈ��&_v[.1 �a�U^J� d+١u��l��ȷ,<[!%��'�8j�>��
�� �E��Ť\��e;��4w�]�����X3{�n�ʹ�����4�J�(�ȘV����o��W���1Rq)Eή�&Z���C��}�d�r���+��X�#�	d���[�v"VmX�LA��=���@��为2���l�i���H�����s70�����R�	�%G�[��]���J�<5�N�H�3%m��%��Q��b�`7�~�o),��*��!T� ݈�`ݣ�7)a�~�z��$�7UBY$��3-���Ŋ5-�v$O,�<A�W�+\^
��-�uy�*��W ӻ��j��Ĕ�J%ry�z�M7C
���~�d]�K��" H��Q>7��! &/%l� 	y  g #�p��`�|� �� �%q�q`r�q 
8"*��~��U�w#�ŀr���Gr�ـ+o��ś8���O�}���9��� 4_l ��`+� �2q<�\+0�'�A��&���3q6`&ÐH� }�iP�y4 ��0Řr ���[�2�!xK��� ��,NJ�2� 
'!� $�ܼd�F��������j��a�N��	�J1��@	 �P���`@���P8��3�,	�P�ʐJ�� �rr�<�,����		�[$%�W,�`Ho� �	�\A � ��� @$ �
� ���p[�>�s�VO^�Z�ʬ?*�<����x4݌�L�rs/�ǐ��	�K��+��R�$��P�)��' <���\[���X$���� =ʚ$�lc.�R�ӹ���]b������yh�&~�K�E;w��� E9�e�0�^�$� �'�~$O��a�9/@It��R����ԥ�dw
#ȿSլ�I��7�ʣ�+��Ɋ���Ft�S�:&�I����$��BYH�ob [+��䜈��8"�[�e %�2 H���ETA)
��=Ԗ�$�wѻ^*�����J��ǵ=U��L�W�޸�����U��{�_����{�9f�n�Y�e���p�?�I�kd��:Q���JIU��j#�JEY3��6�X+� �g�*H��)4w�x���)xI�8��z�j�i/ds�vB�d�*[���X�c�}mIt�WU+�K:�)��k'�5*�i�TF"ķ��4�u%Jrj�
ۖ~��4�)]KJ�S��JL�:�	D|�G�����骔{�t��jq$�"�T�Q���<�����{�Lp�-�J� ���r��L{6۝Β���=�M�	%_�|�[N�:�����>��]T�SSٜ� �U��Ī�Y�bZ�z���n�Z���U/�Jʗݗ���:��:��N��~�3�����Y
�ӣ��t�i�9��RM^�*�e���@ݓ�_��Cw�ꛧp�89��T���Jh�#o�6�1���v9��	�x �5+�}C�2F�
�GWT�\e�[#�π:�TՇ�m�����G�xE��9������n��j`�>$���m9%3�5�=mZ�V5&�����W�a�4�jW>֭��ԭ���׷������'��}U��q�UYaSf���kty=Zq�yW�t�ؽ��ة����Tr��u��*v0��H��M�d�r�`3[u;�Ĝ�:�/�DG�uzO"�=;��,��R��O��-��
m���m�D��G����}��9v�����@��    $  � (�  � ( �� � Ő�   ��G�(��<����� �`���� ��HQn@ ā �`I(�$�D� �D��a�� �,\,�@,�o`$.CȒ `�N.�AZ��";�	`(�`2 �@y DʀH�X�P$aā.N|�#"�d��>�,23`� 9ZD ^G� @䨏�w�,&X�96NdrW E#w�" 2�"�(�\�,v'%m �0Y+�Z$��G���Qy*�����&0Y�܌H�A]��T����#n,^}� I�ŉS!�Ń� ��HWW' Wy��e���d�m1�&X	S%��͊�~ /�F��r�Et��Cnց�D�n<�]�̩�Y`I�aN
���^ŘC��X���#��@�@1���NI%q��9����(sa@%)��p�'v�W-$.�Ei-������-M��Ip�-\�����~Õd� ���*&9E�XMV&��6*��K7vU�\�P*��3Jw�05K�\�S7,�j�j��b�ʻ��/qi�pT�"ɪg��h����R�|���Kq�0ӋX���Y�w.J���h�ف�dGM�6Ҏ�	�5E�(�ߡTC�Ȏ�i��Q��*ɪ>��y��6���-x�=N��-9<��SMQ$z�?`=58~�N��T�L;@Z��&X�i��H�^�P嶲b�d�T��W�M`�-7Y�d��ܲ6҅���V[q�V����n�+��!����J_<���� ��Φ�)t�� c����W�)�����*������Sp:��h+�T���uR�s���ڜ��w��L��1�4+�N�kq`�� %p8$���	�� =�9����  	%�p'%��r ��d��1~@;���7 k�>�w $ �8�N �	6���؜�����\�� *r$�C�/���Ï`�Hd�l<I�TF� � #�� @c%H%�lȞ�+�]�!�
T���67,�@����V�
�9+^Aܓa 
f��,��}�,� �<��	� �y!_q��Aa ���8D�=Ā�H$v��_�.2O���\�[# C.��������
D�d$��$p pR<��)  0'8(   ��G�"V	7��  )9 B���  &�8���-r��n�K����-��F�RT�,�&����J�'�|�uF�@�d&�{����$X��pI,N��@�
�� ��2F��S��M�T�y���J93ɺ����N��Y@��p�e���H������q	"9��"����#�@M���-#�L`c�Dd{�x����+�V��2�$��;�;
ͦܐz5�i��ዞ��m4�
3BL�+�8s�(ǃ�O(�MtҮѷ��K����:�RxQ�2�se�~ 4Hv�:��O`5�v-ҙD;�/b:�c5V��mSc]'�SyV�-��¯T�)zm@�M}�i�ss��T���� �b��L"/^�N�t7�-=G�v���?���?��i����z��� :T�M��� ؟ˤ���ެ���wQ��}��j�
�{3�W�oR��o���oq�R�87-�ʽܘ����槨�v*��<�YNN�j�<��z(����Ի&���R�F,�J�V+]��82ؔ���m'<`E�5.J�@�̈́����@V�J.���kJ�z���(���OQ�O�~OE���G��9�iSS�s��K����>ר��|-�QW�9W9��"r�1���O�,�'6���`5�S�&{!��wv2M�G`5/�upebRY��ݮ�*v�I��Nf}�J7/�O(��̐Y�"xVL92��|��r�#p���Q�IQ WS����w#��EY� ��33���V�W����\��7an�$�z�8tǑ�s>ÃU%'�K%��=�9�N��7>|��\���+�x����-�U�MĮI(	'&�"����d��b��!�`�[N��9ǃJmkN��2m^.q���SU��I�{����1u�����{3�'}��J�%�պi�X=����1WJ��'���=�-�t��� �?g�_��w�˶�
ts9         "�  � �� <E"�r ��, `.�� G�"�@)<� c� X)@  2`��#(�	v � �p9@$�C}���pɌ���pܩ�, �� ���=� 6�
;w \��X$ ��&P�
�A��!�pB� �@^M�	�H��Q�k�E��
�B́y$���/ Urx,�#�y���	6#�f�~�&J�Eoa�`��
�bZŋo�Y�	��س%�`9W1
�۞z��o�H4���tÈ'6.p�� ���@a�$8y@�K����!���x�e�'���,�!� L����y"��Dxb�� Z|�"��	ʺ�#�,��E�e��lI�| ���p�N��%�c؟ Xq"P�"�K%X��E-ܘW�
�� +s�Zn^=�.�%$�c��`�&����!��/�:�.ݑʻ �U�G�͉X`G�bE�j"���l9
��!�jW�iř
����X�f�\�&��ܲљj�K�8 �vFb!nX��H�d˧1cp�&���0�����(���p9�n��:T�O�6nX�BJ���5S e��#N;v5�b>gɖ�[��#���h�>v�t���8��>F�}UKX:�NI�B}��MF5ZZ�L�o��Y�}�Z���� =p�����y�>e��RM1ڭg-^<���8T�|�T+��:�o�V;k����>��+c�[��T�^)��9�k�͡)��r�b��;��&��	/	�G�����ly�2a��J=�]�&߹�KY�8h���iwl�[J~߹K�JE�qN��ԙ��n�m���kU-�b}����$����?;YW� I��ʬ9��B��� ^ ���c#�.II|�-�e�d^.NG�� �;�qI� �.9 =� ��0��.I%�E�,�� ^�FV� �9�pN.P ^�r�f� >�	^
�� .���F�h�N�d� s 20��[L���/x��
GHh��2%y%�|I2 $�,_��J�zm����%D~�"���,� $�I1vY��Y2@,��H �P#(���! �Cp <� AH2W�X?��,�v)!Hl �IX`� D0%�@\add^
� H��� A�\���И 8������&�@��|�� C���0 ��`6�� 1$y$����b�I��w=��ɩM�Ep2��0��2̷7Z� �jp �#�}�i  x�8%͊��0x����
�*l`��"̗�
���fl��I$��� �Wy2�;3U(3��}:�#�*����I�9����}��|IeN	�{�L|��y���rL�m,��N<JI�D���+�*\��+ �z�)?�z5�R�d�4�9=z��O#��eBL�J����z��T��mA���W��M.����u�5V<[n)q7=\I�ǫu����zI+�6�Iy/�M6� S����J��M8�q9���3��B�X�
d�w/�**dB���b5�����}�"l*�h�(���T��=O�`�*�M~[�z�1K������U1�=2�1,���ڋ���ў�H���~b���9L�V��/���J��RGM�M�n|�x~W�ָ#Mqs�U�(l�_�P�S�����i̳�W��+�WK����3�KV�sK^��:մ�qc�Z5��/і7N�Qr������:��U�V� �7N�;;\�1��Fo����Zʤ���E'�kL�&j�_U�w��:w�OS9�E��D�zo�Z�����n�A�K�����B�����:��6?*����ϳ��I�ҡQ��K�b�i���4}����n#���Y���ĺZ�==hs�����I��i�9���>�p�]�|Z�UM���k2k�V}��u&�RJ%I�⍨�'�M�ݏ�Oq�z�R�۹�j�*��Oɟ��v�_�Oq�ZK(�i⤏Ͻ�]�#�G��T���V�yD���������#�j;�ʞ��?Y'�/^��� ��� ���d{���� $���<�nt�'翨�|�=z�c�ߠ{�e�D����j���*e�g�����ɗ����u�/USv��=�����PO�(P��|wS���r� 8{�������Џ��rf����q=�ӫ~�� �G'�W�K꙱�=��[����OS��ϏCiٞ�æ�K�jt�^���EW��Ǐ�t���&r��5֒�������W���L���Z�N}nI��:�ٚ��Ckz��w9�j�V��l�ݮ]�� ���0}:)]7a���sR��їK�C:6���� r�{��S'V���\�,5�ɨ�o�tH��]ѥ�$��"��r��tk�2��+iv4�Ηci2�d�z{��]�g�6z�9F�� l#7�^���C;n��}�	3]v���K�G������T�t�T~�N�h�×j$1��X���� �  
A R7    �  � �H <� 
A�@�� d��  0� F �� ��(�� �� 8 0   NPo�(ԍ �����c>�B��	�RE�pL�"V� +p #��d) L�� /��&�BE�� &�3��8/7'r�X08ȸ Ub�i� "
E0_p'�����^I -��� ZI�<�8e��HŅ��-����Z/� Oci���<��N.nNu���dSqȞB���훑��=��x�2ǂ�l��aC+�!mLI�HB�$��̇�WP���Nq�8��r	<�QvO�a�6�L�HL]�/7L�34��V/s`/0�
d���nl�n�N߸��2&����v�+�������-���!Bx I��U{�|�;��^��"�����\{�6V�x�\/0iY4d�`|�Cv.@��+�'�nX[�L��5h3 UF�H�%]� I�Ax�;�Y*R��D%g$L^Y�K<��Vs f"�2F�Ѯ<���kp�L8mM�> ꪅ�P��vr�^�%S�ups�I��ӪTԖ�T�3=S�N�`�l������! +���4c���7UUxXU*�UW��n��s sש��l�ڊ*=ڭO-��Z�qr+�ܮ�9��-U%���U<#-s��VW94�pJ��^�Odʫ�M$� �K���~	o��v �x��m��&겓���n��2Z��1S�4�0g��0�^�k��j�T}U�0�`��=?�'�z��tQscǻ��q��T��:���g����5_��@��nHR;�� 0<��� �� ���y�l� -6@(�����'�@�FQ E�$H[`�Nm�(��"X�94G� L�ڔ%�G� ����@�!���H,Y@L2�,��@�S(�\E䫐'�pq`�� �($�G�G,0+d��ER.J�,E}���ܰ�mDv~I����J�'�\=�oȎŏ����|��@�^}���� ,؋�]�l��cL� ��- /D\�����_�;� WXL��.���	�@K�bp@)$G�$b�� 29�*R�#lA�/ ��/�  ��0!�����I!�($�(l�� �#B�&Źp&l&,W ��K��1�"�<�	��y)��>�F7�U�ǭ�g���˭���eD�2�6�9����5�����u|��nЈ��7��Y$bB�M��՗!��Ua�`�.�M�Y*�T� , �a���sK�6�{v�ϧ^S�s`�/6��c�a���"��H�AJ"��I=��o�G%x�$`q{!6�HI��%vV�=�G%ܜ�1f�d��r�<�L��H���J���%cɿ�??��Z�tx6.7�d�>��Q���5�2�=\�����tފ�::Lm��'���L5>�U8���ZMuJ>��&����J^Vt�P�j����3��������� J�t'69��r�uT�%�S���:ΝW!���Uk>��<�����ET��F�D�L�-2WW���\����&0g��-�Q.�+�+�N.�\�,����p9)��f�c�L�5R��y�KǱ�J�0��S'&��q�N�����S�L�T�F]�5*c�^ևVul�w��TH/��:����9ղiٟM�ˉ����4*4|���u�Pa�ɫ����t�9$9�^�˻Tu]�r��t6t6��:jxfj��$��"[*y�^�qMU���<ډ������Ay�+��r�3�R�rz��oɟ�Β�l�/Oq�z�ڪ��߱��+N�����i�{)����S�� ���)Z�H���l�a[w_#�_�K�c��^�^nj�N��&��+�J�����ڟ�����E�_*0^��/Mo�7O���C�|x��gڧӝN����D��|WħN��ڝ�U^����.$�;KD3?�|>Z-#?N��O��"|�:G�<>ӫ��U�gܧgGk�������Xx|/�Wf*ѯ	3�� MJ�2� MOdO�x~y���]�m5#���Bf�ӡG�?���(�W<�֝�\I������B�$��|�M;v��=�Uc�������Ouq�)�T��� F�ϩҗ�R�I��kf�rmm]8>�iad��Tǆ��MS�W2z��o�5\��f*�z�''��yE�rg7s�R�2��i�V �1�9,(�2�,�a1��\�X�� Bb�*��p�U�(�zr� ���\�zd��sh%��򿃓J��̮q��1+�驽������k����$��?����E�w�ǿ� aA$��8 8 �RG RP p9 
@�0  �� ��C ���*�� R � ��    �� + ��  ;���� R� A�p@�t��H{� ;�w#� �
�sŀ&q�8���@_#���!r  =�q 8!`q�	�� ��d��  {g" !r�knP��Lԓ�Z
��� �X��;0?@�q�BX=��_�"�� 	��;0p���'�<1� `�%����2�(8kFI6 Mв��D���#�r ��o'Z��S�*1�9AIV{���(����q�5���bր���v	�L9-���7)Ay�
�@��*���ࢤ�I7� �T$!�%?r4�w$ð&<�ȗ�S��y���tW{\ĮÈ' &,���l��w	6�q�G*_�J���9��.�%K�i�L� ���R��h�0���v\����v$@��2�@T�R|�_0!>ˀ,@�?Re�a����r0��$���"�/$O�);��0�ԤH��Iy �9��O�䝮P��8Ō��,������n��ƽG=�����'\|����'S�K���Rz� S�r�j���Rz�ɉ����1�z���s=I��c�m���*rW�͜�l�v�����T��s�P���<�Ԓ�\����jp�CF:�M\�QO��V#_m�EZ�ݜ��M�Z�sԦ�͋^�uJ$ۨ�bptT8�i�UIո�RTs�i�:�����^;�j�4�Y��.�6����h������^���tni�ʧ|���e��|#�S2��Һ��[��H�G&f�#M�驽D��m�� N{�IY;�4���u\�R3��xꭷs)9ͅW�b�x:2��r�0ʉd���*B��.�K�$^@��� HGa�, R9 �P �#�d>�y��  팇,�!�9�� w %�RQ�ߔ`�%  ���-�� c�H	 �p*�$� D�}ǈ; ��X�!����"|�H8��U��l��nN��1tC��%�����\{��'��/�6�^�a��6=��_pd$��% ���^ �"#��J$�a��H����� ������ ��%"����-���H)H������@@ai���܎� pF��� +�`{��
,��ft^�E� ���� E�@ ��H�� � ��  ���9����9 K�7 F�I�ۆi߀��yu��[v<��y�b8����²�O$n�&^b6U=� �H��@�#v/�F�dX
����"&V�#��ٰ���vAK�Ts>J�9����3V%�y7U��ݜ�u�H���r�sm"K���g���]ˀ^��f'�����A����`�G�PHk%��@3c,����\��W��Ֆ�k�%��\��*�� fiY�CB����r|ݣ^���O�� ;]�����/���� ��_����H��[?�S�u�e���}O��:��Y��a�|���w4���N��[t�Z��/����2~�[O��u��~ymj��o�T��\���*]��|3��VM~%}�.J�nVB:Wi'�E�έ>��iZ����^f�'�g��t��O+���i�+���m8<��:ӗ���uP�1Z�O�����}=l�ܽh]R<X���a����k��EK�8�n�LT�>�A��rQŧ$f���V@���"��f�v4� �Eb�
�+�Đ��	��rMJb94J�p;mv��V��Na�~��Wd��i����J���l�])���� ��F)�Ϯ�\~ws��ij:th�q����q�W���7�E]�MZ�T����Bh�CM+AӦ=�	�G%�B�%�N��GD��Ga�	R�E�]��
0U+��S�4H�T��Ja�ȗ� e.+��,<�y�y�I��
@��,�%y�&�F������@�Av6����Y9�u%H�K�"V��e]�"�|���^�Jr�T������P��L�0��P��5	�ءT*l�-S��Cv8U�3-��_�hbō33����X�U����
ʥ'sQ��'`"�V0��*��X�Y����F�Ǔ��Ӫ籞�M��G�ۗ��Љ^�HI�g��Q�_F_���J���Ï�S%]Ͱ���  H   $ *E 9  P H�a�I�  �   � ��� 9 x"�\ �l0)� p�xD�� ����8 ��X��Ñv ~��%�@X�.�B{01�(p�!@%��H �sDD��@p��Ź(;Z	l�� ���Mܞ 5b%r�p�,F�$���	�L�@[�$^ �Z̢�$Y�����6�?A*l&�]�s!��бp�+�K�p�[,��x�Gp��W��"򄀲�!��X	U���Q»�2��J)E��_�,ܶ�p���n� En�UtK0w,�3�^/�D�pU�, s��Jɇr�h��|��/�*Y��p3C��_�+�@U|�x�jQ��+_��fo��p����=��n@�I��w@��e9J�n��f�Y	�%r�~	=N&ğ U|�{!� Nn��R����&���{m�H�BO!�����*n 1NC�E��'08��D�d�ĕ��^6PHS,/!��b<���N�%�7*���+ i�Ff��Q��jґG=Z���z��:�D��[y��7Swf�wff�T�w�4��Eʚs#)K�V� p,�.�#j,��N���w�%�UQ��[�*&*]I�5�Gw���v����:��D�̀��*m(X%R҂;S��R���m��=.��1ҩ9VュBi�D#U��9��.�Zu�/�c}M+^��I��S��v�9Ү�4Լ��TI35�-�f�������I���5���\��r�9�'j��ȒN`ܩ`�,���4ۂD8e�J�Тk��k���kJ~�#�S�8sc���6g�W��	X���ܓ�^j�˦� �FM��}5J�՗��HB�0V#$� ��'# 	��``p0..�	y����EY ��@�^@r  ��0�dG� � ������AX�D��I [@Hp09�  ��Yl, Y��0FJ8
�@��"�. ���I@�d�Id��@�=�+\�ܗ�. �T�͆aزW�b�Y���r���a9	rQ�"�W b�6� Ww��Ȝ�����l,  �XYR�[� ��� /!a��$_<� %p � (�\{���, 6l@� ��G�� $����X� N�<�$������P�� NJ @Ke$G8�J$	@ ,������p'�G �dXH�� 2 ���.. ��2 XH�lNlx<��,�3ͬ��{��>L8���Ď�ٗ�K^�l9$9����R&@Ig���mρ=��,�Y)A�9
�ʄ�)�ǹb�� Oa�PWU�ͫ���r�Ӕ��,n�������}�=¬(�! 8�	����nEi rŉ�`���B�$\17�8JX��G�R�����y�qS]�%V[V�U�������t-�K�}��ޭ}X��4=�D��zx�H�����'բ���KN�*U*Р���;�{#;�4>�ѭR�cy����	Lr��;��n��x��^�Z[�oy?]��S���&z�i��֛���dץ�H��:���mbN��W��� ��ΘH�-Xө|�Z��1!�����\�&�*$�
�z�pk��+�S؊��I>��p5q��4)�����9��l}MWԸ��o4��o����������Og���p��-t��#�Ҧ��t���V��$���
�x���j��'��t��u�oC�G*��>�S2_����ᩲN���=[J��z��7�Ol5��ѭ+�5%}'�K�ή��5�E��.Ƕ�*n!�*ӷ��������T�L]e�B
R�'$�kj_����� =�����q�����5EIՃ����;�j>.��h·c��ҵꜜ[Mv3
@��T���*���s�D��[��H���O����גOb9AW$w��W1��{�$�^�������͌��~f�5�(J���צle��;��^�_���u����56:J�=�z>�B�ux:S�լ�<S�|��	���?�Y���^�<�O���}t�U�_�OQ�n��m%�㩨�x-5�)d�r�yഷ9GMGE��<U���V}>��%Ut�g]3�KV���q➞�S�/��~�=5Sg�KAԤyON-�GZ�X��*��`�骝^K��=2�2���sl� ���ew#Q�Psw1��F*W(�Dk�N�J�H�_��)�VB� #���D| ��ՠ5ؑ��{�5����}O� ��1�g��Mĺ�ͼ��� 0�#5��K�p��,#���[��~���?�=��r�9*��  ��  �        �    ܒVH � A �(  � 2O 8����`P� @_`��  L�� ���9"���1<�@ _ O�q�"� ����<��J!E �  U���rr 	 �B����
�@ ��@Hw=�%� r�ĉ��D���� IR 8C��\�	+��?a~�|���>��-x�8$�)�n�	B`�,�T��c����#�%�;�<�n`�o�I��,�f3�Ue��M��[��MM����FW�V��F�,J�C� `O��0��*��W�1�@��`$��`[�p1���Q<24��nT<$D����ْr�)�ʾB|`L� X�[�!d�V�`Gk�(ex��D9���w'2\M���Ą���n����pa��!���"����;�!> �
�,�j,`��Il�`�8�������؊,�W �:e�%�%����*��w,$�Z��%�O$�0�2��]��"/9#i���"o�,����p��p�X�u5h6rթ��5u%T.LT�
���.�y`j�^Ƨ�K��e��,1J��:P���e���!�9`t�����	T�nY�d�°��М�%XR���əsobĩ��t@mrb���T㟃)�o�
�y~���YM�c)�K��A�L���a�R�jj*U�Ԥ�k������V_�nL4{|�����_�Q;�v5RJĲPnஞ�]`��_�pb��r��'7~$@j�� C/����P��i0�2��ń�b4��Hu/��M*2y��n���׭���թ�}j�`���b�
��3����r�T���~N���Ҁ���	 0���"D� E�Af�l��+��|�l�7��$"�Xw 8��@@�9+ -#����W�@ �A< �܀U�~�p �ve����f����\rA%�"�RY�9� =�v� 8"*�Q��b> O��]� ��;@6��_��Z
�N�y�$��$> ���&d9/ H*baY�m�"�]�=�;E���G���Ƚ�|`rR�����pD�n@��(]��O����� 	'�%@<X�|Y\�V	p�d,�� L`J��� � 	e $IB� ����� �?b�� T��r�`+!\�  �ܤ 
I 0
�#��@7@����[E��` H � 
�8"+ H�GqpKI�nǟUB��g|@�ĥFrt��n�Y���M�3=� ��o�Āp�	�݉�l����/>	ى��ǐ�aߐ Q0��+J;�Q@L���	J9�bJT�U��ҷk�ģ�n�r8�� ��7C����� �E��u���XM��\
ۋ�b� M��Ҁ%���@�L<�"�A�͉ wO�4yj��E3П����U�!/�哘 �iU����kMZ���m����7-��f��k� tI�i�Ż�g�o��=�i��1����ȳ���m�*��SZ�g��o�{GJ��1�:jLkS]zp�������Q�'O��i�q�Z�/�4UZnb��L}ju�ևfx�����k9*=� ]�>����}��v�׸�r=x<5V����d`�=��˒}y�����$z�=�nQ?'�s\�f�Um,�}Z����%ҩ�����M�>#�h����-���zu5��j[$W��2=V�����凪�0z����G��g��GX����2>�ĞGSfUW�=�qx�/Y�<��̝@zޢ�:�yz��T��$� {�4ӣɊvҎ��pzt�N��jk��m�
LѶuE��V���;j���qyY��i��Z��w?C��J��f�=I]<��n4k��cè�*��>�f�z}m}ju5T�������Vfּ�`��}=��&�<t�E�赩o,N���*ƺc�צ��Ӯ�K/��Ш��%i׵���Y'uT$>���͙~�|�)�t)�]*ng����k]*-���s���Fu5zt�싆��k7��V��r�s�S֪�����;W�ݭ'�M�<������Mr�v�>���z�E4���z��{m*(zu)q<3��mjU�R�
��ѫ�R�jMx:*��Z7N�[��N� R��[	��J8n��zoɣ�*Jfc�����	�����=�C�W����)��Cw�kT�O�^�7#��N{��'��P�����]'�sUr��٢�=;zz��<�8G�c�l�����u58>֎Ίtո<�Jiŏ���0H���RЦ��d�*��?A�i^O�R~/ň���C(���r��&Y�T1x9�<��vɗ&����D�'65� 	��'r�%%���@+�6*"��,)C��=�m���G����߹��-_���N�H֪}f0X�}_���z��Ҽ��=}J��~�����_���B�� 
   8)
 0 y,�       (� #(v �  0`
@,�@��=�� �  �d���r9$��Z$X�!�̉�=�`R������� 29� fP��I2 Xd5 ��a�9 !�  y� @�w�  � X>IHǹ	9�������p�q�+�K�b_��"@���e���ˑp"YP���qa�@�p�9�a\�eg�M�U�� b�)�������(��1.B'�o��s�Q��.a�9X�/u�#�>Z&0V��!��e%˹!�d� !_#�� �a�����qb�����bRWf\s��X��_I��!LqdIsh,�		��. K��E�w| w�G���$��P��	�|�~ �"�HR�J�Ogr6�5�NrWF^}����ds�J���/!�R	�D�7ܕ>�
���� U{�`�rp��7��͂��7.��b���"%M��L�b�pJ���J�v� �Di񂎬����̧v��Io�;&�3-(���p�sA٣ϩ�̈́y�nmbE�M�s&f�Rg�6��L�>96�ys�k�n���<�T&��G����KuM�~L /W�$�p�ݜ4I\d�ܩh�b�˹q9����9E�F�5��jW����+�2������	��T��� �z�jk�橩'��oi5u/��^٫*ls��_?�a.�Soh�i�rz���k\�jniԒjKV�Q)I��Ԣ�S��&��T���S ���\Nl����\�UZ�j��36�MH�7
ܑ�ɕT��ɩ[�eU�5+���f�4�[ɪ*��y���諜X��֣�ny�Mٞ��k��S�s\�sJ2��
O;��z4�IX�#���	������,\�Y�b亐-�����;�d��� �$�� ��ra ���D����E�! B;�2 ]�,.��Ga���Q�����.\"+��k;���H�"��ȏ@Y�� �&�@@���!�^u�7��B �_�r +�; � ?ܶa 8^l�$8L{�
܈�¸�d�]�Y���v�Ү|�#��@.FY��_^!" �%H�V�����%G�3b����� �{�� ���C�#�^K�D�v(@�(N�X�Y�؀�rP� � '8\�IH�  ��(pX�
9�
�a]d,�^ ��O�BR �+`��$���B̡�� � |����#�) !X`A�RG F�k��]X�X㬗M��֥��M�g��Y��2F��f��8��j� ;22���7��@�^ Zł��~	�cV��IR q�]�܁�E>�3�J�g*��]�p��X%h�;^DϹ��c��Ć��/`V�ؘ��i'ā|��x������J��K�@��]�#
譤����SG��S�2Q���q�4/�{bǋo?Q��3�f��,@Bv�{0#H�*n��Ē�H�W�EyJUl���/c�Z�k�5:�7Sb�0��*�V��}��:i�]wS#����R�I��3�ޕ7�ʭ���ԧ<�"y|�ܝR�ϱ���U�>�y�=6���S��^�2ܣ���Z��[�p�N�r��u1��U�oG�Q͢)e��/Ш�K�o��a(���I�&��U�*��& �Q:����V79�^�K�m��UW���'5PN+���i�*~���nU)A�6h�+ۣ����EhR��>���J�8Ӹe�w��O���诺?U�H���Z�b5:����Z��U\�}���QsJ���Ua����ct괻�^��S�Q���d�ױ�u\��`��i�pmke���Չ*Ԃ����U�1��S�:S���ը�$��'D,J5/&��n�E��p���'��1K~��
������Ի���� 	������s=��F�J�)ҽmK�6<;v֜��מ���z��.b�ϓţR�BO��ꛦN��Ղu��]��7�y���`UTIº��\Y~����8:�G8V�,��Uw%.�iL+�TU�Q����}=�}ek/E5v}?Ok�##��*J��і����St���'��	�!�7K��SL�G�ު��z�_J�Y%��?�i�L���V�i7,�N�Ԏ^]u�h˱Ɲʕ(�]2��h�v�Z���K֫��v'2�=�v��h��L�_�˷٭�n���5�^�=IOf�l�f�Q�I1e���\@T*^��"�	^����!g��Y�njϹ����R|�d}-�?���73��k_R�G����%O&]��,e�D���U��� É���.��g����S�d �
 H      �(�       H` ��pY/ A����
r�8!Ipp   /�D��+l'ܸ =�U�@�c��S��G�C��D�İb�m $	i����`� �#e�2�	@8� @���a"���Ā2& r ��b|��rRy���p<�m��� &�{�l ��ت`�	x*v�.�<ܩ@MH�C��#�r\
9�l���	'� �.�q�*��̹�M��c���ɧ'J�q,��^&��U����pI�Z� q��Ew��!n0��]��$ρ* VS'SA��h �����|�_��~���@��U��$�Rݐ�H�ENU�ߙ �IXs2E@�?p�ļI�o�8 W&|�%�8��̒d��y^���J|X4ӰZ�&�ye�L���e�V��I���@,fH�Ùb���E)�duK��Yy��D��x �eĉu+�6�ؓ�"E�HL���9��<{ �$��Ia܍�Xf=�x˹C��L۹[QbO�$������y�n0A��WT�;W��<��kB�m;��muG,<�%�N���6Q�r��ĐY�?r6ة��$�IB[�n%S̴iF_`$D�
�O�m܁y��d��գ�"T���2���ҥ�i���J����KoW��$�t��>��	�M䃗҅h'������n���'�b����A�:�V%�71�Q��٤�Lv9׵I����>��*ny���Rg�Z���d�Ւ��i����զ�(���W]UT�oؕ�Z���|����bֹ���s*�S����M�۾ĭ7rӉL̥���4��s������i�Ǫ[:�K9�,�2�cH�Q�q��gJ�3�P�����EPy��u���`�?��1�
ʓ� ^2A`*I!$/0��ȼ�`X�I�'�6D������W��H� �̲��X �C؀WrO�b	�Q�m`�p p?�&H�����Y/!�0�dG�/ [��"�0=�{�d)������!���(ے5y+�@�(�X7`(�pd�C��dK�\
H.ŹDpM�d	�	� ��e��K���B;<�R x"W���yXx@Y����W 012*�H�.�vb�b,�̑D6�2�0P�p �V��b	"�{���VD��)����,rP%�  E���Du@O�)#�n�  7 0R\  }�Rx6.	`� � HWR 
8�e �, rN � ��� X8��G�v9j���᭦����v9�*;#3|�,�Y@e�o��e�.��T�G �Ȼ~�����W�dn^ \�^
8D�IA �D�&�d$pU FCX@f�rq���UԬk��}�p�*��x)���3yɥt!@!L�60K��4 ��#�$|�'�y�Af� ��l�>�����2<�7�9j^��3�r��%�đ3`��.���9=��#��R�R粝}>���u%�3*��g%�p&2^G�'�E�P�@��2|���<�;A�`De��5]ʬ�M-uv�u+Қ�wr�]G�We�ݔ=]�VMf�+�9T�����]�t�X�գ]-��c�u�K� ���җ/�����j���/��54Rm��ע�0nw��<�ȓui9�L:�L��dm�(�{	�d`�?r&;{�:�)�z׸W�ѫ�gf��f|-�&~�b�T�0�����R���۷�1����?�R}����OԿO����G�}j��������U��_Y�]��U�	d�
��fE��SXe��滚�aTbON�k^�=n˂I�US�}N�qZ�O�q~�=� ��65���g�.&���W\Ra��a���������v�;���~oV��s����juѫUU��J��V��T�T�J���P�J;���k�k�m=ƝIޚ��>v�N����c���AU��+��[9V����g>��kTP����m��W�QE;��V)�r����?N�z�껿��G����N�Z�=u^�Yvg���nv�Ӫ�����/�FW�ĉ_��z}[{�i��M��}-�㮧M*��Z��4���>�����Ti/c�Z覣���?��c�>'�W��~�S�Q��~���o~oyRu8�3�H������m�4�Zs�"jVF�\`t��jG��ږ�oZ��x"�t�%}5����-�Š��UQ���Z:��Zj�)�yj�ץ4�K��kc��qUU�MNm���j�	��:��[K'��SuT�I���MAe`�7M6�Lkm�B�s����"\�@�]��ap� �k�ϣ��v����V>��� ��ؔyj�������U����R�#/��qN�w�����1��3��3���_��2�T2 �!X � �@ $ ` P 	   $� B�   �  G����@; �Sؖ���?q�(2Id�܁>
��P�O�
@ 9�L +�D`9  �w-�8�d&�#r ��D  ����9d�x � �`�p��v!��� Gv��w'9 
@'%�@������dȶ�pא����0� �<�㛀Հ7|�B��,�7؜\bQ� .���F�`�y,�M���	�GsVfa��Aʬ���Ҿ�8��I̕>L�{��C��C�br؟��LsvV��O,<�@E��%�A��I�����L�\���'��� �+e�M�Y�QfpL�S��A`y����;b���"S.qǱ��������W�@p:��
q""�;s#������	l _T���If�	r^��fD�H��Nrq�9r&,򄸇�7���IE��f*��s��&p�:e R����Hx	~�V���[I���,������%�
����M?s-���#i#3/خ�� U�^��2�#���sͭWS�U���I��䪩w�F���M�eT�Q�؂���&�$�0�]NC�ɛ���y(���d�������~ޒY�T��b����G#Ѡ��O�ӥ�n�ij.}[�
���>%�؁�̲�$;)`UyP��p� /�j�.檤�0��W)۔�.�O�� ����mSΘ�Y��j����^d�7%@x��)a�R�i�ۅc-�Y�-b�:��#P�u}�
��dk-�ER�6ä�˟!c7#m�0���R�Y3R
�Ws�n��ugɨ��Q8Ds��� %G�!�%	�`2rYIr���&�������* �@L`��� 	��B�p����� ��G$iw$�
��h&9�B,_p r	BH #�� wb� �{��2Ș*��
O��C��C�Bl��գ��j���,������fL�^�E� ���K� 8�Y�ȺKp�À"R�M�	�S'�� v�ؾ� �rOdV�p�"�F�/��� �X$D.	���!��qÑp*K�D0+�AT��C��d ��B
  � < Ce�-�@�A� �"9+@�2� �&Yn@@�H Ƞ$P$�G��p�B�?�6�p$p d` <�n ���� �,� s`I��  �_�9$p�dsԘ:��?-���L���u����R��e��#m"�7.����n$�/�{�Ypr,k��L���k"s%@J�$���v(x/L�=kB�ih$����=�Ev5�px�/�/Cwr{V��}+ׂ�6�g
�d��讖|����Ú�!�\"g���CE' !���(=��� �\E����ȓ����'��l(�a�@��B�ܟې7B�Z��:�~L��rJ0բI0_r>�mj�O���R�N���}}jN"N?��ܵ�Ә�U��5+�O�o���tJG�oE:t*R��CQ`ߍcҽ8�0�s��C~NU:[x1xjt���n7��𾕀�����2Ap2LTd�/�0a���r3`��L�cmrF���ͩ;3�Qr��J>��=5�}L�`�˪��8ԿC�T��j�7ʨ���c�F
�UP�Ў��;�.���RN��_�$.��.��h�N��}'�b�,��܊�r������R�����n~oM���>ϧ�4��n�L~�ӵ��>ֵii��k��I�����T|bϷ��j5]_��U��_����RԅU��o�UT�Y$j>gE�Ѷ�KZN�c�S���i��T��	5�����5'"��CL]:�}ϷB��h���t:t:�p��x�j0�u��� MMt������߻<�Է�A��}=}��)�z�3{�F���:u4�� F���M��������W�R���>N愛�(O�ǒ�x=z��]]ĮNC�����&�}/J��:+T��}�N?��'�oE:T����&�M��GhI'��驳�J�"{\qJҰEvw�I�e��c�����|\����#���t�:'�B�8�sԪ$���:J��F����+�֦��I?���h�>�߫k�WEJ�s��R�W�n+ӣ�[�1�yׯq^��nT5�⢷]n���ŽM}_����z:zp���#��7�F��ۯ�4�>�'�?��|�s�=��ǫS��*�#��,?���J��3�=0§J^Y��+����u�iWl�ק��ҫ�c���ժ�գ��{�T�Oڲ�ĵ�� r�ަ�S��n� B�:֖�]4��</M9�D�Z4U�SԮ�г|����f�V�I&lP�!L3u7��@��X�x�T�ejV���f�kd�t%Nڅ���.O{q�LD�*�M}���I��U�~IZ|!~���� ��>�>W��gN.}W��ǟ��eHQH �$   ��A  	    r �  r � �   ����=�� ��d`" �x( 	x+%�@���2 ��0 �@ ���D�!HEP� `H =�r��1� r	 �r�+@N$6� �2L�lN.�~Cp.Bb`� � y	K����	����/%򐻸��'(q`k�Jc Qr��b�"ܠ�bFH���؂#-��s5>�q�σ+9F��r'��ŗ��ty�(L#-��56�2I�`<`��*���O��s?7&�`��33k��2Q���e�rL�(���Lį�.��]ªUَ��H���U]��rH�lu7�.PGb�H7R; ��������1|�&}������v��ȳ|��	1�/��&U�W7*�L�O����5(,]D��Q1�5d�����6�W�Ť^]Ǻ"wh��a{��o�����M�	j�/(�FW�<�C�c�e+,]��3!���m���ʐ�1UH�yG
�D���|.]{Iº�W9���G��O�p�ʳ���y0� P'�d��w%�]�UO��ES75K�pe�M"��@o7���No�6�QZxX'WO�	�<�����fPO���A*\r��Ҕ�J�ݶN���w����7�Ǜl�xg�T��o�;/&SS�lʂ7`�D���2��Pb��t�G�qTL+��ժ]G�q[�����Z���O⾚b	"�n����s�ɭJ���Nr+q�m��a�r�,aXw^;�:ʓ5c(�pn�a[��G:�cq���B164�eB�(3,6���(Զb!��iY�f�.Q*ęW#b�v��Q��(��Q
��lNdg!yC����nɂ���R��Zd�[�قC��`�H�@%FZ���ȸq��n� ��jC�d��&��"� �bĀ� \��H` /�!Hʀqa�E�9h�
�����y� �y �`?Գ���� $��p,A� Q�y���[H��I@U������#��(�y�[�&�y�%��<<"� "H���$��32����$���U��U�[��PfQ2��2/"� D"�'��>@�BHL��BlE� ���`����c @�  ^ @���<Z��B� ��$���l�/� � �� �,`�(� '�)$!20(�BL
=���  B�� /$�`��   p$�	 
fnX ��L�
N@��ƣ���&+@xu��絛���\ܼ�x���k��-\�� >C$�0-�uһ���m6�9��*0yj�MnVO5`A=�!����=Z;I�¹�ہ�,�%"� $��  ��) o�l�:ߙ��SY�1'��sT�tᔠ��������W�>�w 5bKJZ+j ���B�,H�r�<��c���)�Y���jG 	6�{��X��@V�q ]?��3���TZ��b����.��i�����T�n:�����]4��SVL�ɩ:0�WS��Fx��W�:�:��U��U����B�'Ϧ��z�����]ލ1c/A��Պg�_U�t5��M�J2�����v�����V�,��S1~:��<�� ���9�x1y���T��W;<��:��z�s�]���IG��R�µs�^\��^�sf�ló*2ݑ"�i�FXThɡ
.��T�/r�V(�Q����[O1�f��0;�o��j�m����>���F��nt�����g�K�#\���U[�j]>&��[���-��g�nQ�pǎ����}�=x��Lp��vF�νOs*dz���˰��ͷ�H��3в�q��N�9��p��^��dԦt=U��Vl}jt���BJb�-/K�kQV�LR�'I\�ϥ�V�+����1�����rΚ�z�p��Ξ�o��db�Y7M=U~g��p[��G;u�C����H4�{��<�#jy!���0F�&��S���gCO��:����U�V�V�*��M��|������Zڔ��)���#�V��� K��Y�_��sH�>��Uj=:o��3��Uyf�R]��p��ɤaU�9#ŉ�I@i`�7q0�G�ɘmf �\㹯�.����n&���jA���^�N�	�S?S�����6�N�����;/���u����B� s��z�ӧ�QU��tb�;����ip�po�q�M�/'h���kp���6'��ȫ=ʽ���YVaZ��"��<�f�g���`�|����5/�T�>0}[i�,f��-6�Z��CR��L+1��m�Z�t��\B�G�z��͢��g�kJ�O�駆t���;��G���|�?Y�V���� ����*Т���3�/����v�[M��֭/?f~b�����ٕ�t^�]U� �|�����]�k��z+�iڝz�w7�~�M����fk�g�W�|
=csB�]��� K=Z��Զ�_N���f�]G�����h�ӭUK��V,� H@���� HP   H2 @� =� @
'  ��),� '� 2 �ب��ap   �NK��� (	�p��2@�{ 1 ^	  � 	 R��� �r ��\���H�A�#� �@x!��  d �sr��;���, �9��8��ג�JYBL�^�$� ��+ �/���I�<1y �q͊KH,�#�1Q����s!�w'�rȹhL+_��|�o�Q���@���j��13vI�F���ET��[�X��:��9�ڂD]��Sj9'SO�_��� B7�������J0I��v%^��J3�.��$�W�e���٫w
"އ�ܩQn�7�GN��U����.�� ׸�{�� F��Mđԗ UvWTX�m)$�B���Ԗ�rE�D�X��]O���{��a^H���i
���+IZ$��6c�	�[�B�"Wl;���l��05�MY�"D?p#m��!=�ߐ
g�]L�:�)D}� �k��bĩ� L�������e�F@��%sͭT6�;�ۥ(_�U̷��#�n�ד=R�� ����W���m�3t��IO�%�@���X�a�2j\(��'��͡��4�\ayľL�]Nl��ͬK8O�	��$`m�Vj}�����8Y+x��u`﷢��Lbj�={Za��U{�����Z-y::�h>���=KT�$GԣwKMR�t�q)͙��:륻�7�Mxoئ�IN���U*�O�Ѻs�yg���UT^��͡LM�P����E7��n�e�������ԓ_��4۟�����Q�|^*��Xbeȧ3[�2��I����G���9V�1Z�s�s�St �R�me����MI�3Xm�'9|���i��0fyd�*�GE��9���-T�y�����V5R�c�,_�,�!yW���$C�J��6 _ �%���x	��a��K ,� G��p/`&0� ?#����#n�a p=�H�NlT�"�bG7 �A�-�D�Ď@R��R(@���%�BR�$�^	�{Y ����$Xp�8� B!}��|���n�.��o+Je�A'�B�$U�
��q��	��3���O����$ʰk"@4����S����%��`2Y"|���$�����! ��Xq�_��R\�
 `��M��+�;��*�'�����)�� @%	@ 2��Xd3�$�@
F� 	���& @�=��� adx 2! ���� �H(\��J��������a@�@��% @@(� ��a�&���@x������Y\�u!Q�ɷt�rY>M7rg$����	1�Zr#��b�uI�)8ט=6H�j~y�Dr&���zv�<�h;��p=��XM���e�������Y�+_s��[�������ۧ	�?{����%�n��2݋�j�()��K��`���"��'��x��	m"�*����r����W�$n�ZsΡt�Lj;#4s���Ng�W7���%]�꙱�X���9v��NK2tsX���$�	�����嚦�M�ex+���K��jRϗK�s�ҝWܣ��o����-vk��$�/�p��v���J���z�)��b�tҏ-i6�U��0��ǆ�9��-J&�'�-�(�</��ԡ�yk�G�zTՓ�{J[�<���[���>��ǔy���Sx&+�]ΕiT�'*���]�L����V#F�H0��v ��m�f�j<�����p��nj�>�K�/��� 1{�Q��c�r�e�7���23�1tt�籪RY�����0}2�:hS�]ݹ������j�@q���Uun)K-����G��U�>Ֆt�-�����[�zh� �o��wOCh�*hKק���eE�MMO�|/�������W'G?����Z�Ϊp�ng��n�Ó���Ǫ��,[dʬJ)�&��?�F,���p,����yg~ǟw.����p�z��N9�˔�w�݇��J��te����;}�UDX���{e��Tl�UQU�>Q�o�[��7/n��']sͯ֫s��Q�pv�89���i�&�S�v�pjy��Z�]���{c�)^ϸa�HݠU�C�
��������S�T���%y5�S��,�o�GGo��zMLE�?����z꛿��Vꮾ���4��1���<m儥��UV�e��W� ^�,�[7/� ��R#l�)acVX�I
|�k��l��乫�0E]K�٭zT�<iMJ-s٪���f�-9+B�y4��ʹ*R=�t?$\���9H/ Y��K !2:S���B��֢��S�zjO��T8�UחN�M
����G��}-���jZ{�z_��Znpf�9��3|�ad���ikQ�JtԚ|��O��wU�*�tsI��{�=�MJyGiԮ�V}ǳI��q$�@ �A  0A   B� @ �   )
@����@R �!E��$��r\\0X �`�� �ȋ�X�H�r� �H�PG��F�����0�����@ pO�
K ������B�D܍���e�&C��{ �C B،�����A|�&X��� IL�����D�
H+#�\,H��^	�A�9�ft�ο!j�Z�L x��+��� m��4� C���"�C� v� ˫)�ϐ/G��G$��""�d��芸�9�J���OIQ�d���<��/~�^D��ܑy
����ņ��Dk����Y���أ�}�'1':]�4����P���ͤ�]��m|��\�Jn�V8�V"�)���@�9H�ݳSl{��x@fntNNM���_r
�K�w%����msk�@+���ل�O,�� �pw,��3�����J݃Ǔ.`M���� �V��F�I�yuv	�ĤɅp���L9�>��-+dz�D�ǭ2�{��E��cɩ`Mʀ�9#i;�R��Q��m,X�߰ua"�I܏���ͭ�}�����E.�L�O�Ȗ�d������3��t�`�T�Jl�]J	��c�-�� �Q,�����zu}����b��犄�����0=�]=)��W�Z�^��u��{��N���#�Dx���SLz�9ʌ� ݅�ҝ�������CO��{]/�B��J�F�o�+5�J�<:�%��Z�8g��D�sv�2|�Ӛ�OZ��7c�k����ec���6��b���iOV,f�EY�i�� i�ldF��Q	W~�{qo7:;K1�<A��r���ҷv�9T����;���g6t��Qҕ[������Q/�ޯc�J
���;��|@q�� ds��2�����	7,|���%��)��I'�V.�x�y �R@ 7H ��"�c8
r;fB]��m ,�&�S��^K�$؂��J �!� ��	�k�	��&�+*C�-�p If���Ki�/���ȷ  �����NI2\��"P�q`1* ��K�� �6�nW��Y�VT\'� ��I�) �'�4�{�"���d���{�" A"�&�E����� �v �0Y�%�,rFāl
�L�%ܸy �@� ["H�R1|�	 S"݀�6G%J�$��`�� 6&�d�C~	$�� �d���`�w�X"G��'$H�`knP�#�,@�
 �� �� ��Pex�IV
G�.�Y�k,�n,�;rQ*������r*�y+i��~;�li˪�c�zU$���ny���~��'�Qː!M�y �R�'&�iԩx�>�����Z��5N�p=%�T�ɵ����F�=J`�Z�����qϮ��j�&y*�s��ӆ]�"�̒�ru��<��X�r))8L�N�o��L	���s+�e�f�� ���V	��L�`,�>�,���d%�kO,��&�]�Zղ�F0�y"�U�t��ncT�I���r�_�a��9:��@��q 8*3�Y� ���E��*V�Oa�{"�F��^�e��Y���J�Ȅ��_b؋�fU�$����)��&+�[jj�2p���jn,{��#s�y��>���.����i�Kr��%J�e�����-{~j�:��h÷����R�L�kl)�E*�:��|��\���n�*i�<��z��}I�&5�˘�;�`�^?si�ɆU���R��ө�v����e�}F��K��C�_�{�~ܲw��H�G1	ل��,Q��}o�[:5�OR��]S��\�-U�Z��ԫOR�4�:ĳ_�����Ue��M������cݫ��믧����]���M:Tt���7{�I�9*
-O�Ii�ɣ�x
�8�Q���e~>%�Q��Q K%0�\ |��"�5�b�M�������J��w������h4��Jᕵ?�a�#�k���]T��QU��g���V���g�R�0o�99ׯB2�4�\�=
��={�V9��y�\ɓ�����V�k��5p��x����<�wR�g�/��Gܝ��0{^�<��S�"ҭ��Ko\�2� ^��=��L-���� Kn��Z�U��w���&���'\�ʅV�8�S��E��8�%����`%.u�=����x�I�LZ�p��Ō�y�52�'b���b+�;�$�U��w�w�^*��?)�թj�ηRӖw��;�?s�hv�]T�O�Q�ԵөR�=z^��NkO�*N���K�Z�����U����3�c��(M?QЭ­{3�:�ԭɜV�Ҽ����q��� I��M#��EU�}��U5T-��{iSO?��=u���˺xg�5�Si9�6tn4Z�/��=�����nt�,�ǹ]������㿃�=�:�i�zy�\~_�>����� ^C R�Q  �    �   �!pI�!��N
$&��bl  `2�Ȁ0��@� ��� �E� `xT�p%��+d` �A2�{  ZD,� X���
��K�������e�"��p��5p$p�؀R�H� @�_�2��A@x#�\ߒq�X+  d�$V(K���ț�W���$��Y����ȥ� 9�� �pYdnP���뻓g-L؈�92��� �X�h6��a�x(�<��d�e�jh���YD¸���8�Ǹ����L'k�/������_nJ��F�b�$�!�NK�l�e��+b0*��2��"`��ݣ�����J(�.,�iW����4��@��o&[mD�p���@:��,���x
��p7�:���і����������R�g�N�S��"w�GzV4��ƚ��)r���Q�&��'8 �C�#	�LD��ǂJਜ��NlI�6�F� w'<��]\��g$��G�� Z�%{�Ӹ���{o�M�����-Z�=�Om�ۉ��ת%G0����� �&ϒJ��U��0ܾ�X#P�/�k���CS�I�� ���B�J��S�'Wk�K�(50��@��uB�o�l�S9�*��,U۟$Vn�FWSJ.m:S�7=ʇU
�B[N�KM>���y�Ӫ�����hT�l�0��~��ؘ��4V�H)�8�i���KU� <��h��Ԯ�L��N}��55�4y�57CS�:�_�>����Gɩ�N��Gfk��E.%|J9��ʆ]0����E)H�]�%\�2��x�[ɺ��ŞM�k�Xg�zjI#�\��g�馹�f��ڕ�"�D��uR۶ԡ_��5��9�wc�J���x S�@Y���#�e/`�bK �y� F�x ]�x 4I�I�D� �� 8��Dx�
1�aL��ŖD��V�Fr\h��p�>G� ��{�d �Dd��C$� ��OrE�k�e�b+1�!Ĉ� $ � P(�I�'�$�I��T��(�/ N.,>��(�	�4�2��"�VHذD��{���rC.�.r%�&�ܫ�"��%�a�D��O��ԓ������A]�8#E�"l�!`�J˂ K�c�B�-��  ` ��2P6 T��phr8�V�A F �\ �y	rX)� �1�P'�< B�v ����(�pF�\�&  �̕�a \m X$	��� Do�
,�!�� �I� 6F�Ѐ2G84G�+ɯ.Ǚ�A��V<��Q͒���3/Tq�3���� rY����b9��C�4��l�#��
�N@��2ӂ%%���6�!7dC���g�z�w�'%�be~���F*ri�Fg���)��ڋ��~.�[��]�qi"��C���vk�4��I��H� ҎX�f� Ԓ\����
ؓ3vT�����H����ٙ���37^$�z�c���J�b��\,B!=[4�R�ƥ�5D����vߒc�]r!�2ήcͰ_�Hp�"7�U�Ov
x�"s�@^6��dIE|X���R�P/"�#�r�dW�\`�!���b�%|�S�Kx�'e�d{N�! �h�5�� ��$��9*�D@�.L�橈]2�#�z��B�VO�M�����I,�Ϧ��|��K���suF�g�ї�:詮��k�����U~�:tt:���}����STK��uU҃��u6w��E3�[QI��jU)Q��b�.��5V�v1�Dd���4�Re�R���v0k��E�O^�tg��E�G��qR�yV���b���b�����&xjާɟ�jʧ쇊k�%�T�Y�ֶ�_�GU�T�����5���׫�KH�*k�UJ;���%�/G�mO� �i>�#�?��^��^�y���բ'�/_NOn��M�K�Mƍ��u��~�� 3|������>c�Q�?�Ҹ��Q�;I?�7���$zi����m��(4���x�(�9ռP~���~�C���W�g�O�}:�m����K>4��[�/�g���E�Ҷ4�]��{i����v_Jj��7ߥ"�����jjUt��V��ܟ���t�U�+� ��R����zz6;M��-������.�a���}=֍Zu~���jcu��4�k�%�u,�O�U��wf�4k֫��7��k�C�#���9���o3���M�L����H����o��Ớ[;J�{$��I�+�иA���c�ۓ/�.�g�J�$g���j�7sR�=*��n�w�N$�����X�iM�5~��/r+�d��rđ^ƈ*
�g�d�'�G$Ҿ��'�s��K��}�ۖ�~*��H����x���M��E|��1'��;o����g?�=�X�i��X**O�I���R�V4��s���mML�Qq��O�5�*n{�Cc���1�v>��������t�iUөC�s�����T�U7����6�0|���i�6���F��T�>���=j�8G�ףq�5U��c�lu���i��t�R}Iݽ6�۵L�y�M}OR�WG�󶻇����{5����O���j����ٕ����:�j��t>����ܥʓ��ד���R�2rP$p@@ � �
8`I)@0�� �@��H  � #�ȸ �p� E�  p ~ @��<�$���!Pc L�k�/ p�( 8#� Ggb�.Wr<�d) ��{�p$�&�آp�l ؀�8 ��}�#�2 �2 ���)�� w
@i!�Adr �Ad���r����y��Oԭw&H#�'*ܫX��r���y�v�j�~P1UٙL�P�s�$��*�J����8��ఛ̴Gy�Q�a.2\c!�g�2�p�o&��-���=��qb���ς'k+����D��k�#}�Ҧ�w��~.�X��RL�HE���MJ$O�\�<O��f!E�ʍD��Y�s*�� �V�wdny
�����7��$X��x �y%���$�[7��EĮW<�<?ܓl��?s*W��^σ�&�9Z�r��uD�b��7gj������IJ��ϩ��:���m%<����3�"�:�P��O9$ʙ3Ԧ*��)rGRM$�e��9�x$��(�KpѤ�ݜ�P�Z\����I�*��D�k�rcRaZ$�U_5*�!��o�§��V�9���]�r���C��r�|i� kʛ�j���Q�WSI 6�+��Vm����(Nň\�'�*p�e!����`��݀m��ZRI]�y���.��%U͚P�ڿQ��=[jRRϡBj����j��R�Y�"���m���+;�;a�ڔ�L��H:*�&5+瀱'W.�u�m9<��w����'7jJ�F��qS��?q���-�F�M8�3�\�Θ2�Q���0�әF��2�d�X*[�.]�"E��dˋɶ����,J��â���҂��GIX��$�J�bCh�6���]<���(�	�5{��ˇdm����u{!(�#B���$y`;݀) ���� y	Ja �߀/ �
� ��2���K�@�e '6/ I  �^	���r& >F8 �L �,x"L

�f�"ŲA݀��� /�=�K,[�#��$��߀�p������ ��G!dm<2�#9 "�r? #�>@X�E����_�qp&QiJ.% ܰ+��&&��o WT�7h�.C~ÃM^DX	��#��H
��])1b X*��� `l@��I Y�F��'�d��\�ܼZ���� �� �I�p� O`,܂@	���	� ��?�P�~@$����D��	=�0�1a�d�e�$e"�`%"��Fr��	(�I�
��A��n� JDa�f�X"���y*qs׬�Z��(���JŌ�� ���i�����
�;�Gx3ԧ�E�=�ݐk3q��Y�$5r�8��4����+LM�� Ģ��rM�@<��qb6��p^2b�c��J�F[�����%�q��M���s=P���7b7.�s��@}��é>��V�<L����2��Ir�$L�r�%��/	�m��l@�B7��fծ�q�� 6�����m�	�����V�Z5T�ҟ��r�\<��.�ual�œ�9���	$� �T\��8C�� <%�y$��%��Y]�q`�>C�i{p�3�� X���dYQp*db��g���Y,�	 V$�݀�H��K8 �gWEj�i4��P�i;���hׄ�<����-R}�Uwryk�~[Wa�E6����B�e4�ؽ4�*��Z���\��ߏ���Z�ͦw��]V����H�n���O�)�{����_n�����ྶ��ij?jY�i��ttӴ�t��3���P����6��\$k�Oo����V�m��� �cѧ�^�Z��E��G��(t��Na�G�R��j���� �v����m�ڃ�
���'�������V���ӧ�OgO��֯���1=Wħ�s��� �����2�l���gՐ�mxh�?�i��� Z=4m4(��Zkڔt��M��*)�K�餒R���Ņ�l�BH�GQ E�r �'��`��{�R���֒?+���~�귟�S��]E�+������� �}_�?���O��-F���}�M� Ie2����[��z|}#��TG��л�O�n^���fE�]`���r�]�v0ړMaw1Wۂ�U+3��̘s>摖�|@��/F����D�*��y"E�"��Sy,.��<H��h�b��4o��kv���?�2�I�s7�^t�m}&�c)�J��U2�����rF��I���Z*"/%EY4�$F
���j4S6���-��'%P��z����JO�=ZuJFlm�:iV�{��R�d鞣ϸ֥�o��S[H�R��c笯f�UѨ�����k�]$���T{�>��!�Ky7����s�~�(����&��g��� P@���    `  � �R@09  �G��� V �  >V+  �(�p*!@��TAo�� y�� 5 @_r\���r  !Y H� �����@E���(���/,�`��/ʰ�r �� ����sb`<�X�6 0 �w+�&ր&�2��
�t���܁���e���l�4�J ���Y��Ԥi�W*�"&���1���L����{q&�yd/�&�s�NJ��y��M[!�J���� �y"|���r������+3�X��$O��q�"wp�/උ��>x��;+2YFP�rE繤�$�6� Uت�.j���^�ܲ��vN���dmÂU1%�P� ��.��*$��ǀ`'fIDܘ� �q��᷎Ę`o���R�(����W�����BeZ�[�r��`/WD��6�0Is��ܔ���D�4���v����l�=+6gE�m�V\�ض"���%�js�a�VV���V��A�Z��G��fN�ޫ��s��l��d���ܲ��ո*��$E������\;d�����_�ы��sF�d�������]s��v�ͥ�L� �ݥ���"�햟{�[q?�t���ou:|��wV�=�v��=*[����M}�d���ʴ���~�n�l�X�3cX�,ݠ���ͪ��bQ���ִ*�5MD���R��>ڧJ�nǛsTY+1��nZ�pq��ʓz��1OS�	�|����}�!$Y^�6��*�Å��_�N^���Y��P�\���M�/�T�*�h�f�����G:[�:&����F��wX4�^�UJJYQ����̦����$v@Y�'9/؂�ʿq>r�Hm��	@�� s���H�V	( L�M����r�$������P<Y�0ĀD����/6 ¸�ܸ%r���*`B�"�8$�xh�J�@�@p Y YP�&QO��%�a�@vEP��X���HY $��9��
�r�p0�9p�B7�I��.�۸nH��P2�v�݊�t�*I!��w���AY��#l&���Z�r��Y|(w8��RX).�q�Y	%	�pX�� Q"À �P 2 .0.��.@/@C .� ؎D� ��0|�{	\��V �E��b�'��# #S2�/�FwDv/ ��7N@��� 0e�^�
��)@�+����X2�(��IWS�[�{5�{6�Q80��0�w�/��,�9�U鷃ϭ��OI���P�4�����_s3k���;�^�M�N���5{�f�$λ� 9�=�I��;��h���Sؕ��}M=��;ѫMxh��̖��WU��}�r:_'���զ��ԏv��OV�Oྱ���PǱjs+0��Yӝ�p�%{�ōjbX�a�Q#�s���9�6�����Ϊ�u~�j��dîN.ΝM�]�6DȮ��(���y#�AOa�bnYr�3 n{�Q��<���{�X�� ���D��N�7>D�ϓK�ݿ��=�m��d�<���f�{����� ᩂRkZ�Jmc����,r&���!#�� �HEQ�;��L����!���}����J TE�\H1d'�,����\�IH
q�@*�4�d�=ˈ$K*L�`�b&�D�د%Y�h�p\��>J-�"J�U��{W�MS�L���'s��D�,R�"��"�\v A$�0@� �( L�`��H� B�
y���G�$��ɀ?9��-N��k� 5�s���$���.�V���� >����B���'���X�� \S����?��7_���;�'����z�ܟGd�E~O�n^�"�����#ǀ2ݎu+K:;#�r�(��[�d`�FA��"9�p����Ă�n�i�%Q��h���Kx��9��Ɣ�5���Yl���^H:��7o�&���߱��k��O�:����c:����O�|]g�+�2�k_Q��Tq�F��$�b04��*����#-� �E2��׹�J�gT��`�R�i569iUcm��5&3�U��BG�g����<����jj#��]����Yji''�����a�Uk�NT���O/�Ǟ�
W$) Q�F�P� �  �@I@�  � �   G�ŀ���� LH��!x��#�4, ���N
� ,�?PE	 �/ � X ���@+ � ��K 8��;\�܎�<����~�䢐�� ���HJ��pX O&~�e' q
 `A�P$87*%�]"��� �26#�/2 ���di��N�:�+#��9:��U�����A��jle����r�e�O6�3v�e;2�Ø�WY"J�r��64�ɗ.Ȯ�y�|bJ��e`a��%\6����i��3v�U��؁�(���eءs.KK�����Im2$��+H	u�	���i�wH��6_%�j��#�����$� U|E�yFo��q iD�6"_�8S�Y��`e����w,����[�@��X6�̩�0,�m������e�yL{�����R�"�����^ŕ���-_@V���ȭ�mr
�2ɜ8�"J�7�C���������iBP�GO�3wg�J!C��7M����SJ��U��p�mZ<盛�x�����'�mͮiL�p䭷J�%��gp��	�ؔ9}7�-MԲ��f���������x-�
Sk䫜^�1���u�Z������t���	*��
Z���J��y9y;�P��}+P���Jy3��M�ɹMt��݊���Sw>C�E�$R�[�	/,�UW��թ��Q�<��`pi6�'�u��g��|�����`����U��:\̢6�eX�t�'4�J�L/�+{����L�dV����L�b���%o��e�&���Kw��P��b�ر+-��Ռ��`�m?������1�{Ŏ�����VaT�U)8L�I�3.�S%F\t�i�pt��f���I�>
,� ��� �0Gll"��e��S�,�!�@��@Gr����2�$ �  #� �BaL��3b�8(L|��Č�C\��{����C�hp I
�ň&�@�X̲����K�J�b�@%q �aH�v@�Y0+H�%���$�v����d �2x�
^ X�X�����Ē�p=�8��V��� ^��V��/�-� %2FݐY ���#,"���v
̀� R"�H Ob�K�p����D� �"I�O�I�`X4X�L���_f/i�P���X���	��	 NE�=�{���@p8%�!�#}��r �/�� ��� M���B�$� T� P ��H �d �  �
�E`# 6Eq����:�n�[�*��Q�F��h�w�Z|Mַ�P�����Zt6ϋ��Uu�3�z~����UKn���f��+�{3o��UT�H�W%��t�'��MI��ƺOsS��|T�u��I�4g��|��a�h�utc�Z>���KR�~��p���Z|�q���M5)��M�|==ζ���y=�;�[J��q���Uň��i�Q]3KNCN$���u�z*M#ϯ�.ē+�URblZ�s�7V�^GT���&+n���>=V	�y�U�q��Y�����Y�3�T��o����pr���r+�Wf�\��,���VL�kܲ�sl���g�*��Y��C��J1�?�29k+#��5TS��G'��r��>�7�gg!�/ rEVȭ���J��@�	���qbL�a7����A��-���l�Kk� ���bC�j�*a�����P�e�vT����0����Rrզ��x�2�R�� ���p��-����0^@���H��J��rT��b���b�S j�U؉�m0��p�Bg�D�,U���\G %     R@	 � �a �� O>����y=J����� �V����F}��]Z5��ۯi���z��'�ת���<_�TW��{=���!?_���S��{/��t|��}M��)���������� &�D�1��詷����x82�O89֮X9�a��g6�i)/�x�yp^` ��o��2p��"Uk���K=��d�*��~�*�v�� ���g{d���ڎ;w���αh3��F�������]��T�~����슩��i��^��s�J�E� �^�#,�L��L���
�"��D\� :iV���sƝ���	�4t�L�pDiK^
���
O��+۱�tj+�����V��g�S髩3�~��uR�цk����s�}�]��   /�a�?���       �9 � ��0 � ��+�K�H ��0/r� �E���*0  �8�}�̎D����\� �� �{���$r��ਟ I 5 D��BB`@D�  ��� �"p�� ������\X�.`�� ��[�rd�+�F~LՋ��Y9��8V��k�u&�q��AfM6�rd�pe�o���J`G����D�c݀x�%���s<	�\5l��%8p��ye��
F�|�/J)�R��V�@��
��pث�FU�"�	ň+������)l?��"�� �DwV�Ԧe5��� �k8����n %ཛ�ஞ �8+N��+2L�v�$�HMN0��#w�jx�����Ġ6�,�d�w�nQW�ĀN,��g��b�c 3�q6�-� W�dN�7�2_�}�������.�|�m,��q<�Z2U	1��8�=+3�Ue)�*Q���jRINRLʪ��TY2u5�9�\�̥���'��R��U�[�r�-�`2��?0���#B9w�����ȏ��2��)���Uþx
J�T�O�v�SQ ��x�Ɇ��f�N�Ǒ��r�nр�]1vMpٔ�p��գ(!Km^.{v����EK��п
�i�x7h���9H�W��#Řm �NVJ��U��bE��i��b.f��n皪��G��U����K��/y����5~�J>^���� �"��%�
�������cش�[�6.�E)KN5�ygЪ�<��ґ��y���H�cQ� �y���Q��Y�1�ԭc-Z�ڇ-�`�J�(���ѧ=�J]I��b�iS)w:}6��顦�d�ҥ�a�T}�r�**�9g��iO�KD���k��ĭV�M��بO<��N�4Fa���H�l�K;� �P�b`qr(�ؓ
�
#^�}���� ��/@���p L;�mt� =�r�nY��l0 /ab`� �gɒ�c��I��  y'�W��L	pg�2"+ �@2���
��1�DXG ��Bjl�%�YSI\�"�M�2�ݒx �� �X b5,��	+ρ͉3�+c+ _��YY���R.�U�.H�K 	�G|��E�^[%V
]@%ദ9	ô�y	�� �)9 ,\sb6H�X(a|��� I� �  ' 
�c����0I�~ �$�R' 9,� ����d\���F"FK����D�<�nV0���,vj�i�(#�x"-� I(�VIA��#�!�P ���L�İ'��\Q9!X�+���<u�m��T��jd��VDFM]��i���-����q��kK�NOm�ԩ�vs��+u�������[6҃`-r���T6�tI��{6�v�n9u^Jt�\3_��F��$��Z*��3��_2Tmfw���J�0y�UP�ѩuem��ϫ��V�2&�r'���;��t�NJ�|�h���sC�cݡ�VKR�<�j�*�QdK�k�ѫEt�KL�P����~��j�*i��Rԥƥ-��,�^�]�zO��T�#�in�����:U�Mj�k8�uY��A���J�[��<z�J��e�Q��,&ĩ:]�&J�H1%�����}2�8˜��5�U\���^I���kܳs�T�����ꪔ2��sm�S:�<1��s9pi;�
�� 7�>�K�>fگ�TR�Rc�� A|��k~C�u�c��)���r��ݲG�����m��� b%(E�P���m؀jSd����'��RE��� CWq4�E�@�N�3"�z�51'�>���T`��֚�s�ipl�$����q=��&y�(�`rX�`L��P�X,\x,@e Lc$y/ U��C*�Mv��Uʮ�R�e]�=:3�#ͥ��X �C$F�(d�)
 J    Y  `   r�� ��z�o�Y�S�~�\�O���7i�x>=?�ox�:,��}��?[�E}�� �Q�������?�)_Y�ǣ����wd�?_��/�'��:~��'��� 3���O��ۗf���$�̓�-�`#�'*��t��1TU[&!�j��r�i*� "�AS��Z|����Y���56+��V����L��m���8��ܰw�ssϺ��O������]�m���x賿&���)�`�.�3�,��i�X�Q�ܯ7�D�).^.PY,�;)����N*`ڴ35^��*��Sy#+��O����}M׫KYI�κ5*jM��?�����6��tR����}�^������ۛ���9�A!��d  0(��� ��	 
@ 0   ;���� ` `/�9 	�Y��@k�_���y6)� �C�P`L�?�Q�;{  �> ` �  2 ���G��	� �  ;�Dd�㒀"���_�p%ǰg!�� �p-HW�' GɊ��o9��:�m�������3��G#�Q��+rF��4�6��W'����"� ���o�r�%�J��9L	�����`F��)ĕ߂(~H�9ew��p$A!������$R���?�rU"1�s<��0X�@��ȝ�\���$J� T��\�]�*�K��Fp�˲*��&;� U� �GK�]Y���ʻ,¸m4 �H�[��bǀd����� ����vP�d��2���U��M�`a�Q��� ��q+>@��"ET�����D��sv�O� D���M/����$3uR�e�dvy.��*���ڨ���y^ �VapN"��J���e����"݂�qSsb6�����`Z~۴j��ԛs��Zi��n$$��Sv}����#m�dT��[y#M4�MK��)n�ΖȔSw)��O Z\�8g�۾�Q��5.����
��a4�*��I��F����&g�X��@��� b^�*TA*�� q��W9�{����#
UK���wʮ+�Q��[�E�R��x)Ͱ]��zS��t���:�m�EgU�7<Z���g�V��g��.�.�9f��C1t�4�s*�j_{�3-2�[ς8�Ѧ�I�_�i�+��'�&���S�,�Y��N	C�IUVcJ������r�vVXG�J��(S��Ò�욫�D�8׹J��V��Z�0{R�;�0��ݷ��uUO<�1_����$6m��#�"� ���`�!Y�r0 ��@H9c�l��Eg TA�~�TF8�x��� G�/J�.@��`�rl�ČX'��� ��T�,��H��7bL�1�VXp�0���� 	+$H�� O2T�9�]�(H+0��ؤ@]�&�����*�`�Y1�'�H
H�� ��V@Y������K'%�@���%��Q�`����� $+�  ^����	  W,)h :�p�́E�&l��/"��"J/ F	Xܑ#C��#� +PG$m���.F�$�g��,������ "?  G!����N
 H�ID�;J��� 	.JD�H-���� H�G!`2 '!�)�j�-T�=ڏ�<:���ʶ��Y�7z��W{��Q�t��FO��sW�� ?ǓhٔX�Mه��L�Ss2t���}.��cY����[���ӡ(r]*"�ۡ����괱b�.����	ҟ��[oF��)��J�(x>V�cU7ҿ��骆�J��N�ƦޝER��;� �+᪼���k�3ЏZU�j�7,�΄���LL2���J*���/V�2:T�R�"`}�����N�� WMƧܻ���T�1,�����j�4�fw�jK�>��g����o^z���1y� �^_[k����g����B���=[R�Գ}/��USZNUɶ1c��wMI�����juS�������SD4ju*c�uH5��V�P�L��N94��e�f:�D�b�uvEUbls��'��b볪�UZ��j��L5�R�V�G9�UTd�+ѵ��u*��w�O��� ��m �ҹ�Q2�z��rG}U�<�.��r�	��}��;9(��3S����U�$Ϲo�Pj�
�#��J�b˼�;�Ғ���!d����H��y wҩ����HCN�W:3����g!�y�zpy���$��r��u�;�I�M>H�+�u�P�~{L�)*��Ҁ�b�
��g&K�2�4�ezt_sаy�sҀҲ,�*I � ��d�H �
�� �A$��   MG�Cg�w��z�������N��j�U;��q>��ݿ𝏈�<y>��/�S���~{�%~��� U�:~ _�R���UΞ�|$Ο�%m�~BO���� ͌3����I�'^���}}��Ix8v�˫d�-��\�]��9H���`f���]���G:�X9Ԡ�k�Fri*GdUovG�^��K��j5M��U�1�F��ӎ '�k��k	O�  hx*��T,;��'6Ӷ�W���ݝ���G{U��\��qՆ�ګ(G-kS-�����"�+qU�86�F�r�vP��`��܂��pDk,����9"�A��Ch�V"�C�t�IʗDFj̳K0j�TWe/&�|d�%Rܠ�e}Mܺ5iO�5:�L�.�N��N�z^�V���q�\־~vk�29:<`+!P�B�B�pP�  (�  �     �%@0  4P"�p#�D�	�g �@'��0PE9!H  � "�,�	�%�/` 0 �vD(.K��A�W�$\4� `��� �8"��B����F@� E�CJ ��Wrg28�����`<��G F�9 ȥ�)�!r-؎.QZ2Y$�~:��V��k�`p��6�t�fNn�?��u��+�rw�0��aۂ?�p&T�;�xd
��\���e������]����/�Hh�p�����*�F\D�����"R�]r�Y�����E�r/��G3�>W�g#��Tq?�2�nɘ�ʀ�-#�����E�`��8����Sa��J��8��A3vU{�T�PiLŻ
f.k���0� P'z��ɪ�{|�����Y��n8�y	�P6�C�m��,%7�\�M��0��t�8#SlI�ۏ�4�˞�W��Ɲ�1i��p��n���۱� ���"��f	R�	g�V�L���V�E�쬀�O�<�;�3�s��*�*9�o��O1�Dt�ȪŦ�y� sq,��

�J/c)�:(����K�?�xBqҜy ����x^` �p�Tv�@�� �\x5-<����ve�w`u���|rz��\+�x�ա�ꪗ����{ZM�����O�N�O�3t�������ԛ�r���S����]LK�G�Ks�3��M,��▻��.0�+������#����o�ź��|A�ҥ:�1���N�ܚt��Uvҧ2�UI.�L�
!�u�q[�&�j��7�o�4�&�e.NU�%7�[Sb��oc.�@T���c59͋i3W�b1e0�u^{������ԿS�1�Y���r���pԩM�F��:��k�K�Z�t���b�	Aʪ�0�j�J���UP��WYƫ݈�]MȦ�̑)w�ښa���	�nJ��b�'y/�.]�`�C��$'�!;�`^I��21�}ȕ�$�p9�x�	�<�
���  48 #,�By)� D� e� �� l��N�x���Lc _%X".@�wr\�����x r-# ���.@���E�D�aKV. �69%�{ؿ��K�B��.@*H��
9�"6��+� ,A�V 	�͸��` /�BC�@ �E% �� �' \�8eb�� ��\��`9`^� �	�t�!p+i��k�� ��`H����8A������$� d��&h��*� ,�ʰE���� �� � a��Y�9#4@1Z�Y��uӣC�٣���9���VݭM^�_�Nc�f�u���^mG�[o��E=�u����ɇ&��$�$������rq�:�}���t�iP�;}(��M8�3��u�M=(����sH�1���N_���j'����kMI%'\�,�W�Ei��ڦ�U����;�oO>OzZ�UET4~��jZ�4֡�F�Ue~};���~���N��zZ�m�����:���+�0��jT�W����ɕ~M&��'&ui��_��K�g��T&��i��B��uR�g����u�ӆ3c?S�_U	��O��g���Z�k����N6c�=u�Ѩ�����zm.�6t���#�N�5ҝ�����j�t4�t��MZ4�(�*�����:�tٛ��L|�R_(�n=?SI~W�U�T4�#^d��s�Ipo���v��{U���V֤���߈����� �P����g�7pT�jΪ�?'�w=uކ�--�'?��dL62wq�D!_,"ň��i�-%`! q8"� �
9'�i�ĕ���
�_��X�^M,�Cf颩@z�#���F�PwVA��q���y���'%�I$q*��{4�⥩=�8k���W��E4�:�U#
�y[�N@�����5{�Q�b@ՠ�����J<�. �:�����5J4�F@�Mș@�(`  (   @, �@  ,��HW��]^�bO�[����޴px(����~~�pޯ�o��k�s|� �y>%7���G*�w�?�����^ޏ��� �������>EI�����XO�������� 3���W:is��ۇYn����I��v5;`�J|��,vf��5�B�r��MȎٷ�"+UL�tZ��#|V��Rk��o�*�RRB�Y�T��U���6��]�f���U����n�,0=u	�Ϯ����?-L�k�Q^䟩\�8�?/j���M�y/2�6B�f�%��M��n~�%�X%�"���,$j�Ϊ%f��'�|�	�J��S��WF��<E�K�䬪��Y���0��='s��U����'�CU�֭f��o�q��:��M<>���t���:��w�\B�+(  B�   
@&�    B� B�K�\I`8D� �0F� ԣ2� ��@V� 	��`=�d�(Oऀe    XrR0� I.,U� `9# �@I,� �[ �@%ė� �%D���c�@�G��y�) L��"�W���<1����`�I����<!�{�$�ʧ��'"�D�53�WPuw�ʢ��sy�7ZIɖ�D�!�]XY"G6��,2�RG�N<�l�X�� �x
�E�{���"%x$4Ȉ� 7���YheX�Z2�&�!�gܮ���5xl4�ļ����w�H�W����_$y���*����"_�wP�[?�Sb4�;�rT����9.@HNŧ2�/<$�0'�~̿���݀��(dW8�b8��g��� a�����b:{�v��5�\`U�e�0�;]��Ig2Ob��6��q�C�1��� 6�d������J1<�Ii$��9�K��K��Y>ڜ�3np�H(���X�ə���9Ud�,�ZJ�q�O1r��i�)S�e�*Q*\�Uf�]�ز�8�Hx�i�F��c+�o��`� _�w����Qb��l�p�5y\ ���`ղ����� �vC��y�Aa7,����e��ԩ~��SQ����XB[d�M���Ϊ�.&̋U����W�,�}�ZԏG�na�U��]{�*�N�w�:���nz��#�ZξY�tR�{��C�rʖ._&�O�W�:�M�c.�f;�H֥j��Uۖi֪Û���-�9Z�"���H݇��܉&̴��C._2i����ۏq�n����m3�N���k:���qu+��U��Jm'i1���`�i4���#�?j4���h�n�%Q��$5��aN
�$���4�ҭcO��	G��"���FV��A�r^l�!�᠕Ԁ<�*�BH������`��l��u<�*��[E�����r'7r���p#��"�0� 
�A@�O�/�X�d	q�.�d1W�A�@�	, !�@� N��'�m �Ⱥd,�y/��  "��`H���N ��Oй X�{�@�#Ȍ��	 c�  �/��B��	^ !�H�	�e�DrY�F�b�	2� �����Id�r��ې�pI�q�L|]�k  H�PD�[@ ��� '������v ��*@H`��#��dGp)	=ʘ����O>��	G%�A� $,���X  �   0Y32��!�.0X !�� �( e��� p�@\Ac��q��t�U2k���š������������=Ƴ�eN3�0s��}/����-*�͍�J2��mv�n��t����'���TP�\�w�zJ)����S�F*�_p���"E૰�����o����4R�+T#�饷�T���1z�W�k�W=]K��ݸ��n�K,�H����`��Ur�I�s�F���Gt/];s����Ϸ�����it�s�})��ZTՔjt��2�q8:*�y��n}:��}l�/Wm��W�MMwX5�V�N���Xk;3:M��]ƛ+��uMfk���-ثKw�*oJ���7�uU�צR֏W��m9�-�p��ম�cץ�tҡ�54�r�w����4w4�	��&�2|=GMW>���	�1�t�U8��s���N����;ѩ�諔�T~[w��5:Y��z�5U��V��Iu���g�����4m�CnR���I�9y?+EQ�C\T��i��|�~f�_ 55��"G����"R�;|.#mB#�
������'�8w�
 ^�E�Њ}�q���p� �,���\�'�+��@bХ��hn��h�N��v������
iH�؜��>��G��_����3�U�����Sĳ{t]�]+_i��WO����-u#���,�`��IsMC&�����#Rg�,��8gZ���*���ފ�E.O59=:U�JD ��4)   �
�rT���@ 9 B�N@�gV��&�A��WѢ����T��w��F��Δ�5��=Z�m?]��O��� %�K����w�}�#�п�5���.�k��x3���P���"���w9�"e�_ğ���7�Ws����h�������?"�>Gn]g�$6�B�؍�+\T�H��E2�<z��R�`n5z�Q�Ni��Ȕ��O��P����F�e��֊TP�Wո�6��W]�Bv���il:�Sl�+m���������R����f<F�T"=9�:�U*�܎��G�O�fs�֫��Qt4��L��]�
ҙ+������I�M���I�dF��Y��� 1�գI�sɸmj@�YjO>�X�=���5�b�OrrtEl����Qo�I]�rT����-Sl�IpH��qs6�%���A2ót�K�o"�E��Ƒ҆�s'j�uW���_�QBE���d��s�N:�����tԓ�g騫������]:ɶ������t)o&������p,��)�Dd�   �@�ܜ� ��{�� � ' =� ��`p��x��<�@ 0���$�H#ؤ��#��w��r6 {�	 ,2@p=� �.H sa���>@�f�2�#)9 �8(��la�\� �K�6�K6�d5`�� @0N {� rR �Xg�1R��[���8U��59w3���fj��J��`eē0��bbB�DB$M��).�@Q� ��e���S�|�N/��`���#��D���Tm�"'���/h�ZQ3�	m� �waH�\\>�
˸��y�Q*v��.M?$�@'�>���K��1ܪb��*qpԥZd
���:p.�t��$�E�ܰ��M����-���VWc6�����X�̒�ʒ�X����Bp��1
I%r��"�`
���_��M�l�����ɚ�N��0��I8��g����jQt�e�? H��a8���Y��*������I���J�"mI�)I�f�L�m�*⬜*YS�����Ƶ(��]Jc�&�ɶ���T,R.��?�V�D������$��T�L��&�["�Q	-ث(�Na��n�vS������<�_��za+�#Nm`��Io��8I��H�T�~���20ѕSUL�� ڋ`��`LT���C
�[r�a��4��m�Aʷ�h�$�� ��QS2�Ҟ�^nv��I�Pۃ�5%f�ɸ��^�MJ/''S��7�:�x�I�_�-Ց~J��Ȣ1�����K�lW�<��I�,a��q�Ֆ�#�U$�Ƨ{�����]���;\�݌��0i��&�E�)�HI���Ufb�e��0�\��M}�rY:��)��i�r����7<�c�I�%�4���9q$A|"^B*��V Oa6� ��E�� T��r��|�N
@�DB`Ua�F��{���$f�0�#�56 A � >#{ `��U��M�
�	0��2�X"��-��
����Q  }� <0`$���� �`y8W Y�,X�  C%�8�V<�vV"(�` I�[��&@�� ��p  
NF@"�^K��< Ve�(�8	C(���* ��,wp^ �I%Hc�y-��W� ��`!\����+w� "	%d��PV�� �H���r�B"(�$��83��� �؁X�$l�($ �.X� e��!( � ,��p$��X�L	eȈ2�#" ��# 7#wH	=*Y�� W�թ���j��^��Z.�_�U��j�uT�m�c������ۜ��y�����9��Uu8F��A�m������q�m���Ou�1��kD�u���5y	�J�`ʮ
� % i>晆��g��u%�#6���v�:���u�!7�5*t�<Z�ٷd�S��[��0�c�o=V��_OC����~��K��'l�]�Y�d�4�D�C����2����$�7EW���B�CH�K�J�M.�X�{�i�_ᤤ�{������^�E��7K�ח����/&����JiJ[pb���d����k�����W#����GkJ}�uQ9=��D������=y�]9�¹箉GӯE�6��T�MW���6����k�iI�����f���jn����?6=ή��|��kh���>v�k��,YT��J����_�ԡ����mUJ��'sGҩS2u�f����s�z7�4�?"���'�� �c3\5��>�ME��W�n2��M/���v�\�OƦH�
s���J9"G#���X���l���`<)"�S�	�v$hT����x$�J��=x��M��Ў��HF�,K��+��׽9=��'��ː�طsݣ�xR��=���<-�Oc<���#�\��pD�
���^G�'�x�*h��̚V�
��2Y�u�����[�*=�U(�y4�sҟ`6Y�2Y� �h�Q"@0d��  E �n�uL�������ٳ�z�s��p�}��:f���x�:s�6��L������3-���^�ϛE���uQl�=-��T�ec��3��|��t/���N�i�����z��n!R셰���u�շ���9<�m�u���a^=��s1��l4���V����U'<m�R�9���.d�W���ǓGO��.����rU�D'U��D�Я_^�*��?a����4)��_��v|OB��kU��iU�ʛ>�5'̜��P�N��|}�Z��_��K�N��>έJ����u�J�N�?5Vν$��uƛ�R}����&�O���UZ�8;s���wZ��J�->��W2����'��4�p�x��"U�֝��%��г+��3�:��ͼ�I�O��.����N�dŢGU���V�� ��Mo����+m��jK�l�+-��>��tz��ܳ�G���kə:D8"$���0��t�A���蔘4�f�t]�+��
 Ԥ��J�!D��PD��L��or4TI�0���"�t����MR�#��+r�������Y'!0:Q[G��M��r~}U��5^��rП�D����i}T��m��^�-v='X�u2�L� ` {�   ,  �"BL ݆� @)$`��  {���{�D L�29 �)	�=�#�� ��2���XP ��/!�H O�I� FCP@ �  ����$,����
)
�A'� �T0�p- ,D_a���I�!y� ��Č�# =��$�p�Qtt�x8Ԯ䣕wfZ�ɬ���~�<��R-rsܰr��Y]�Z`�h,��Wk����˲�mX�Jm����m%p�ؑ4��0��EM�$���r��#~
�rx�)�kX��7ff%�RM��������%w�%��=���i$�wZ�^[w'O�h�U���6.&.�6�����4F��SY��Hm�\_�%X���ZJ�f��rA/��,wP�[��/*p*V�*��+U"�re+��V��Ėm��Qu,+�2����Lv�`l6e$�R�T���>�;�sM&��6�@�Ym�i�?R6��i8��r�<�M>
�j"ʪm;7
��Q��M�˞Z��N�.��>@�U��*���2n�5e�m�)^����v1�nGMȪ��%aJ�4�IJ��k�$M6���m��xɔ� O %�Ȯ���g�4����%�<jVL+�ݠ&.l�7��j�+�Z�bC������K�ηmM��̩�V-4��-���ݮ���q��Ew���?!Rӹ�p�R�	I�W|+6��~��*��kT�깗\�#ԩS$�ըۻ5]NZ99|B:����n������	��Tn]�{����T�&j���LjT�-rm3!X+�GZi�}��!J��ȬV�5&�H�K����	>�6A�LIS�$�i`��#�
�&�!�.� C#��� �͇6,� N�n� ���@�,�ś@�<��X���ld� I��i@V� �`J�� �AbÀ)
-N^D ��.�rP\w�����,C>x4��D(cxqq��X8�x,7� �eE�K#w� )Hq%��E�� #���'2�����`�Q"��P�Xp�v��@�V,U�"�G"G L��|A$�H��.�H�BI��� � ��� `Al�b �N���2���$� �$�"�p-�X7`&���5آ	2�V �'PWrQ[�'��#En�(V@�a"慑=��j���@9$�(#�D�Iw �� )�Ȑ$܍�r�M�J@� �D ��V�]N �SIK�����ԯ�Qt�g����ÿܽγ��Sc��sa<�&\��_JL�;��T9�S��m��r�]*�j���Ѣ)J��х-��v�*&.bן���jP˸�/\�y�[�@E�@� ��]J���}}*�AZ����OR�pt��mO�q��ƣ��r�}ϑ�[�����w�����<��U�՚��1-|oJ�S���(ӣ��?C�l��i�F�
�4�BM۬�����x�� H��?`2ԣͫ���雞�i�$�v��h�z���-W�F��.�r��==Ӟǧ�*|#�����i}�q�׋_R���d��\垍z�ǉ����zoӮ�B���:T����)[�:t(�#� s��[*v�Os�������j�ժ����y��j�]����z�<t/�����麺lp�fGj6�fj�VY>��I4��M�/I�{}���>����}.�)R�������=m��}J_s�VΔ��o���|�4���y1S�m��ֵ5zhe�a#�ai��ZZ�ƥh���PTz*T�7S�H���W�^��$����zZ?J����v>��'���b�+���f��h�T�~A�~�a� OL+A��k�y� �'�gy���岙=R�Y��N� ��������,����a ��r��`߀��ܱ݈*QvP��0�v+�^欌����o�F�'����M�lWO�|%��?��G�i��.F�
�9�j�jS�����n��j�=�U�#�Ğ���������tҦ��*!�qjY�_���N:���>^��4�_b�Ւ�Ne����j�Yg�Kw�Z��q�=�H�*�q�h4�WA���'6=u4�O&�k��G,,��R���M\^K73Թ
�ek��ɕr�K6��|D^J�p)L�i�;����)��5E�=��)�N�;"�9Ie�/R���������j%[�$�4�px���R�QʯT��ۓb�} |��˃��\�z���vYa�Ot|
�KQ�Nuo�������+�/R�����:K�����qva�j;�'����y��8��|5c��-��dϪט����o��>V������6�I|�z�d�U�U+�º�_uNCsɖ���U_i+�NL�U�Ӯ�ii8G6��,:��w��`���5Qɸw%T}���,�.SdTq1��{��Sѷ�J�J~�IM���֝���4�KKWO�:T�S�T�2�j���oo�����SD�}�\�m6[���K�_��Z}M���+r�g�u�W[�Ԯ��y������y}}��jiW^��U�W�쏭��[z���C�R?$���ப�fE�����k����ա:�3µ+J$�N�Yx,��kҙ��V�I`��eVI�MXf�bǕ�#���ҌI��亘��eZ���Z��2��;��E;�jI3��|�f�*Ϋ�Q�B���u:�nO��+���ujJ�<b�z�ywN���^U��Z��;�ךZ#ruz5ps��NM�.8$��pKĴ�F��EU]ӌ�I�8*�u�7�f��R�kɊf~J�ve����Ffr15[��Sem#2i5]єĒnf,Ry
��m���)|�v�(_�I��	ɢ"��t��t�����K�`�c����4W��p~{��Mі~���?�_�(r  )2P!@  �企  . �   
@ 	  �d%a��H����    �h  h�#�� ,� 8!x#`P� ^ �
O`l.�ܼ ��Y �d  &À `  H@���L��/$�22� ,�N�� ��^ H�p$\A`5d�s�m���<����N�d�;+�1�D�.d��33Q��� Xrk�|2Ч�q r�?��Dk��8x?(��%j�y�N]�[�n;[�s�Mb�+��Ď_ F�෩;A�x� ���7ek���U� ��ɘ��k�{G��r�p�+G�
L�	�L�H�.�)���O���� 5)d���e͙ԁZ���B��$�� �	�z�b]��DI��=��bؖ[Me����m�ڕb(]��,��<�[���Hڪv+�3cT��ܣ2ߒ�?ª$f��������+���nR�4�|���|4*����2�ÿ��ױ��84ۇ���I'����W*�])�i�s-�����P2�f�����3�jl���]̤ڗ�u��U �/%�K�ʇ�X�%Q�FW�J������X���v�Y$�K�#�-$w����5R�����$��uLI�a noȩY��e'!T�-��(�X�m'7F*����ML��9E�/{�N]7W9�H�&Zl�[�Fb�v�&*��r���ql�Rq����'�ݲ9MX�ywaR��x%U>L����%�Z�UT��Uv#S�a�.��[dL��2�j$���FU��T�0��FZN
�c9S&�Ek��j檗�ά����ޚM���tӥ|�t������8���f�p��Q���>K"}��@�X
��*�~�D����E�'��R ��ʘr � �͂_�9�c W$� �\� 28�@��e �  ��X+�pF���I`.9��*�d"+pŤ1� �@�&��K#�l@0V�> 2 /زZ{��03����<���Ó.�v#�7*���0��2�[�E��9
�(ȓ�� (pD9�Y�`/ Gy.	�K�Y�|�g�T�@�@XRI�O. rX�"�x$�l� �0���AG0!�#�ev�  .� "( 2 X+� �R"!@�X�%��"¦#�.i+\PB��7/ I���,�#�H@�( @	#rXT��^G f$��!�pA *Kb)$��
2���� "$7{�v�.���Y6���š��K������V멹��y��s�UO��+u�~/��Np
F�DuJ�H��UԪ�r�=ZҋSCESJK>	k�}:�P��S�њ)��Nb�{B�@�� ��m��u",����RK���Ҵ4�vc��R�E=+�ǩ�.�޶���gݙ��K�G"���є��2�������b'tWff
٭�����X��4��J��.�r�pu�kN�E=�xu�+��9�֤y}C]�贲σ��/��=���ԩ�|�֢�yg~yzx��qԯ��������_��vxt�V�h�7UN?W��O�쩢��*F��#�}5�ա������Δ�f�y��DԎu��c��JY���Mry��]M3���Y$y>N��7���SL��~��R���f��ϯ?NW�~�k����}j(өuE8mGw������g��Cr�΄�Jɿ�mj}G���6:+\ʱ~R*w�5u(�ҫSQ�)~��]υ�����4��C�Y�yږ�ɸ׫q�V�_�� C��Y/=8�u7R���MBV�T���ٺ?_����NsҎ7��f�2��ǝѻG�溨���e��/�>OƮ0�"�f��=��pr��q6�B̃d����n5~�����Jf"���q��թ٥�~�宕�\W�7��i�hr�~{SQ6��gz�ۍG.���w~jr��<�̪�mȦ�MR��O�j��=�ڟBI}��^�<WOD��.��1���4ԟ7g��m�=�1{��[U��L�S��9�7+B�q=��<��ﴶ�s[�c�o�_q���6���ŭ����UU�df�w/���j����f1~OOKmSM-�����G���t��uOc7�jG��zv�]&�t.��Z~�])u7(��SJ����g+�V��4�}:r�B�tS٭Jo��'�y���D��U���\2;;!�cNM*�-��Ƨ�z���Q>Pz��|���Ǳ��T�K5-L����&�'���NI�ے�L�����w�=*�bx>�t��4�u�I��=1y}ߩBS�����?_R?0��7z���>q�t�(���⪪��e�K��j�ұ�9�>Ssi*O���|>��N�\���ڍX���ŷ�6���U�z�Z�*��U����JVF�^�Uު�����T�\�M\un��=������2���J�u :*�*��6Q��n�F�c�sW_ku��ľ�U8'T[�(���>L�
�$o��Q�)�urQ[���$`Z����&j
�?��Q��c��@mG��
̲+1�#�,&���2����#�XV�k�&�(�rN
��\�� ^l�-�"�Z2�mW4�i%Lt��E��aX����K�έ+JW=	��Q�a�ྒ��t�d5��J���E2�g���R�����7�Ӻe����j�UN�%����4ݦ��m�W>�UU�UZ�AG���t�I���ꄏ�N���v���Ԣ=��m=#V���]�z������(~O���QBn�E���׭�i�e�3VWʪRb���B�\C8U�S�	��	��Z�EWb��$�'��*Bd��QVd�MR�r����A��%X�sɤ������3UQ�2p��dM~���3����U�П��+�էU=���+ҙ��W@B��H  U����    ,=� 	� � 8 ` d�Q@ 7 �  #��"x 
!�   K�@L��@
��q�2D[�" �y 	�9 �0B�� �$�#��(����e&JA n����(�## ��@�,�1� � �C(��y �w��x=5.��䣃%N�f�q{�pW��K�S�t��g ZW��.s,�^4�v9ֻX�K�%T�X;NpLput��I./�F�Go����0�JjJ�H���'9�i.IT,������XP�Eg�C�Q��$<4�3O���²E��=�� )-� 57*J܄���a�����w�H���;��`^m�h%fwJre�̱�^n@q\D��bl_�r��F �� �f	) ��,̦K@��p��@���SXm69���=�Aqu�����జ;+HN-hUc58v���X���������O�,�p�n"�?�M��p3��~��D���VUwg�W��J�d�R��U�[�2�h���MȚ�x(�V/	����+�!��oe`�=���̿95R�t��~�<���}���F�We�E���Ȉvw �.�˩_ɧe$n8�FSK��y:L�K��P�0J��ɪZJ�d��m�fr���T�0�<`�qM����i�o̓�n�N��X��[�9�G�䎫\��|�����Z�G:�4꼳��4����M
�&�Qʩo'6�Aҷٜ����)L�v�H�Fms�>E�[��?S�q��RQݖ��'���^N^�w�)�	H��'��4ڻ8�[b�,�E<�lu���G����ZlK�"�'=�~ pʕ� H^XL�� Đ����j̈qrx�D����;��;��ď ^�r sX W��&y(V@}�(`M�@���	!����	�p�~H rX [%�IRH��[%�b'�_%K�WEY��D�X���F���� �pH ��	3d`G!�(d�*>ʹH����M�`)#�� E�,��$;�RL1~�yD���$0i��(�HX ?��bH�IV&  � K�n �� G$�/�\�nJ�"AF@Ix��p@m؄�/��!X�>q0j�K2�eK`2XPTHNM@��HB�@���B6 �]W(�$�� �e���0�dp&�@A �$����r<�+��::�p���T�U��t�j�{}g}=:�σ�7s�U��>,� �Q��#�\��K���89���MUR�������C=\z6�4�Kg�ME��JITa����֗~H��J*�4��-K��:hi�MD�VB�N�A�Q�[Re����iҨ����r��� ��5?�������d�a�o�
 8��� �e��J� �j���4)�CJ]�<��]j˹�Z��d�r��nG=Z�o���ޡ�U7�MX�����i5?s?=�Zr깾9v��߶5��'��uO'Mj��'c�����wJ�N�.j=������=�:t=ƪ�z�u����M��z�饡����(���~�ך�(�Ov�IJ�Lh�JK��m����|��o��m4��bǹ}�J��F�K�j���`�ϩ����Kw5UKN�UX-�?��J���҅Oۏ����J�(�xGš4���]Z��j�G�x6��o��hUu��&�SR�*�5SJ6���{��t:hq]v^��˓{��{�î�<.��z���r��^K?�����5�����M?�������=/�
���u���<������n4�ί	���Y�k�ňܑ�T`�55�v��^X"�;HTU�Ӫf	�|+�Q�C噩�D���F��*�V	0�a�A��Y�kGNf�_���Rqz���c�?��=�R��ԧ�꺜\�n"����wh=D��<r�YT�F��=Y�*�J�%,SKl�Lt���|�����,�fꥧ��v|�S��:q����m�Cn��a5�C�v�w���Ѧ��-Ȓ>��z\%��/�������%d�Z$�޶��>���]U8G���k��(�v}]7���� �ӟ!�tҵ"�u7[�oEs���Cs]n5t�>&O�����]G�׭�979�ν��R^���K~�p�z���u$�fO5�cѫ)������UӦ�}���R�W&���4��tҝYr9��~w_S���&���R9o)T�*H�m�Uߎ�KrkW��,�wzJ5S�.d��Z���� U���u�*�Tkq�R��շ��UQ��k�{J�i��០��Vƺ���4닽4���_e^��=^���Yƺ4�;���:��^�Z�Q�E�U=J�l^m� F���6���4����ز�j���^J��<��LrQ���
�f�tO����'�+�,�{���,��3ȋ�i;@��Od<�i>{&9�S}�Բ,߂0��T��fH�#]��O�6#���Y���h�PX"���3UR[_� T�U����v� �ç�-X#�Ј�26�e?,D�SԬJ�E�C^K�<��0E/�J���`2�#�,@s����]��0�� pZ}´�UM�UaI�J�f��H-7ɤ�`�{A�I��K��O87J���:&�o��b9.�8=
_�chE���Ut^����1�^�K��i���SU�uhP٩�7�͏��ҳ=�mg1V�q���S��IJpN���<r4�zuݺ�U#��g�L:5j)55�c�Sꢤ�=~�\�O���_krmW�Fh}o������NQ]0���
wk��i��tOa�O�GC���4��7yg��='o��KU{3ǯ�����+�*k�͐��M���X����%�EH�ՠ��t����8'Z[����2s� ���g*��0���Q7��\r~�a#�~�--�֫5�}��u9(!Q@ @R  �
 � �   @X  � e`8�2 p ��)J �d�*�^ ���0% ��%d� ���Wry ZdH�$s% Ng�  �$\Ar��)<��a�`��FBᔄ  ^�!� D��  ���) ׁ�$�
e�y$y �lb����B�=j1��^Mt� ��0���(��Rp&j%37��_��3��Nd�+���r��;�N-�W~@�2���f�I^C� y�N,f/��U79�8(�jlI�j#"Pl�:ZS�i)op�;AI�*�%K���n��%��Yp���g�+>;*�A��k�Nɦ&�E|�<��g#�� �^n��.�ٖ>�*e��x�b�37� �U�2���a_6E�<\)��É�5+۰���
����̑/2T��$T�I+a�6�E��LT���0G�<�iC���ح�dˎU��R�(Q<�U���� bU�����T(^�l 1Sn鈗xE��e[ T�p� R6\�y	&�lp�pHI���?�x1Zq)#n����ii��]�d�SxlU~l�J�i�MŦɖi��m��.�Y��,M� �s�0ۗ�V-��`Ch5<؎%)5��"m�ڪ`(m")��I*��������r۸A�����2q��`�c�s)$�
��_�<\��R���gH�c4����^.1X~Yv���]���LV���d�G>��u8�୮ҩ����Ad5+�v�c�s���f�j�,�QF�%o
W:�]��٪��8o��b���G[�s�%ɷ�Fkn �S�GJ�sfqn��ge'
�;SjE�9U�s�G-G{"\3��-��C����m&)�&Pm$2�T&�a�d� H<���HP9#�� X(��X,@E�,8�Ӿ�@	�L�`���c W�;r$ �X��U�U� �Hʀ�^,��|< #�n $, C�L��$�����5
 [�eԤنȽ�#�C &x.��`.��j"�5���#��5e�7�	 �*P0��D�+�W �� ��.�µ�n �>��\6\rI.�
�,���*H���HLq�ڀ���Mx%��j#�,d(�%/�.�Ws!UY`� E�IP $0K������
#�pe���<���d$r/�PE�� B	����+v[��wG`\ ��@X�$����e�@��   #(^G� ��d@	>Â���RV�
��A I��!��������Վ�k%Cm��ש�^��I���z���ǫ�뮪�wn�ՂP�#9��ௌ�e$��+n�y"Z��ר�ϧ�B��cϵ�I&����Q-y��Z�B6���ʼsj�d�  ��
���'�Ц�k�g��W��+pu׮o��r���R8�V� S��+���8��3"T��M��ȕ �|��I���'���5~2}��������jGMJ�-:xG�q����S�:�V���N���.(Y�N&�s�׏y���*u�m�x7� j��^�Jp��⪩r�z9�G�Ji�SUQE3UN?Y�����%���V|� Aب{�Z\� k}�n�U�j�J�i�1�_���Z�v�-�z��Ǔ���cۥ�uLd���$��m&��zp��҅�R��<�]o�%o��D�Ɇ�Ux6���V���fD�k�;e���-�Z��5�O��4��K�+K�|����� k7�4�S��|2��U����z�oC�(ϖ}/Sݭ�������� '�究��� �s�� �7���>Ơ�9��$���Q�~��/��� Џ�<��ޔ�e�� �����zjrI�J�<�WUx:�t)ԡ�W��O��}j��ӥ$�|�R�z��TS�t.ĥrδұ!T%�	��M+���E=U44x�(�X��R����{�SkoKirx{�Ժ]+��9f�j��Z�Ί����uM� �$KB��/����Ÿ
���r�H��)�5����W ����*�>GT6}�R���e��fv�� �ӫ��?��>��j4�Z��?$���֖�A,}5���^^�U�{�^�!<��S�ɼ�t�q�=�Z��(�+�3�S�t���ߥC�t����uOTR�����g���뭷-O%����9��Ц�m]
�N���U^KOK4��F�q�T�S��Q뚿Iӫ��9�QMX<��UՋ1e�]4kj��v|3٥�M4�NO�ӣ�����,덍��~��KW�ϩ�nhk�Q�V��EI�fq�X��W��'7[M��P��s�q+KV,t�U?��]丏RvL�'��Z����;�IQ��S�'
5�ZҚ�O jnTŢP���C�1�$�b7=ȥ�\��UPw&D�4���+̘V nexhl���j�3�S+��@���*hY�L<��V�$��`+r����J� ��́�%%$m�C�������'6�+Mc J�	y+'�2�lH��U�M>B���BlL��{�F�L�V�YJ,�����[���K�Q�����L$��y/���Nd�����T���EC}ͤ҃z��������ab*Nnm&f������7J�S0�e(7J� Z{�K� �J5tT���S�j��l�RpQ";t'L�a��G*�io�����*Ǧ�jt��շjb�>�T�I`�Zi𤾏/-ӓ������R�.r{f�i�R�:�N�Rt��n�L��_���;N����:��Գa��^��۷���s�����q��S]��F��U0w[�=U�T9��y�����mER� �I�ѱ�î����Si��K�s�<��z���e��:ޏ��S��U>3ǩ蚋���ivg�����{��q�M�i��D�W�u��5��T��%�⚪��UF���ҡ�dT~q�$�30�X���F���g�S�ݝ&�_O���U��\X�
r�����{-�������-���Ӧ��T���s��P  � 
 ���B&@��	0^CJ
� %��� #�e�� �@!I`@ w w rP�@�( !�`	�@����a@� ���3�2��d�&@qr� 5�	^
��P`��HpYIX�/`^ �r$r sr2���`b��,�#�#-�Q2i�� ��EDlu�8�w;T�G� �EN�.d�f!ߓ\%��w�p$G"$O�!�ZQc.��ѫ��WI��[L�57���cQ.�/d5��7e(�ޤ�ʤ��D�>|	�| �ɔ�{n�3�b�d�r��ٙ��U7��3- ����&ђ���I0,_"BRVi� ��6��|��~䩮J���# ��a�J-N8����+���L~`��]_�/�7l�/3!���q0k�S7�z&_�k�p���P��K�{�
?@�x&Qf%���	n�m�����n�����Z�?�+���3R�2�J/�Ӗ�v�q[�Ĺl����]�`Z��O*�]X����n���D�d|3��dtj.�<� r}�&k���3S��B�sb��P���J�� ��KȾZl�2�6^l�|S-��@�s��m5+ɹ���0�e;܏�U
������}�H�Ѧ�Lɚ��a��p���vvw8jۏ�۲1�-��S�$qn�1�vL�Q�T��v�0�J�I�&:���߸ux.�Z���9Jw/T�a�78duZ�`fp�N�2G���[_����%�bĺ��U�r��[ۓ�V�˱��n�W���U'˱���1S(�.nuX��
3c�v� �8Y87s��I��J^�s�N ���K�f�[	&�VT��$(�(�K��#MX	x	`�x��2O`�����>I�! x,(��a��	�)i�����DD�	��|o+�������&0[le�`DW��	��9(�$� ~J��x ��ݬFٗ Y"]�o!v ഩ�I��ՐY�U D�5�Np��%��B@{ j�xR@K�����n��<�pXiHB��9*�g0> <�Ia6�\L��U�j��`,� �Œ�X�	i[�NI� -�H�p�<���U݋"f�3�x�}��`�^0 @* L��qp`$ �=�¸�!�� ��  {�[$ ��vDJ�h�
 e0 �m��@�* �H,� `�@ q`<�0IY�����q�TΥjbNM��W�9U��93df��B,p��4�Sw>#o�}��O�<Sk��^� �g(Լ�4��W�e�R��,֌ר�U����(�0J�]=�t�(�K�(�A�paª���vF�rDY�p;v�Λ}�_s�M�J���}5��/,�W-miШ���=]GUV�뭩��<�'&$*���Dd�ܲ|�Y��$\�2A`�!���N�]j��-��e����V]���˞�Zj�~O����SxG��#��;��C�?���ԭ���SѼ�z���8G��jpzy�#��9��NN����y�����z��U]j�T��$~����znëQ'�W�k��Ͼ�7:�CIhi���<���]N���oB������qwЦWQ�v�S��CO���Q�^�� $uң�&�*�!]J�'�����VY�����n�`�o��ª�'�WQii�����RݽZޕ���?WY���jխ�5;,"%T_{Y�*��:*��	)e��>7�of�鴟ڿ;_��9�Y��|������U�p�dy�}�)S�|A�#��$iv
�4��D�t�T�&���#��� !��~b�,~��%l��.N7�Us�I����a`�:��NտpM7y�T{�:���hrA�)�Y燹�/#��Z�4b�voc��B��,�2�ѱѡ/�I�m��_��uW3��Mpt�����S.)��E�d}z�_���Y=�c���Ȫ�+�5/>�{Y�y�6�^83~6�o$2�n�&�1t�^ln]J���Q�e��^d�M`�5G�z��r`ϨW:~O��g��7R��v���5*��M������~*��� %�������F�<��4'�����qR�<����Ԛ]�Z�N�:�Ko��:��l��֕W��j4�OSB����ů���4�y�9�Y�Y�e��5e��
����S]J�m���K��>�{��w�]U�e��K9W��JjU<��O�G��*H�p����X9=���m$���W�]�zLסk3�KVD��t�G�M0��Uh5�[��:ӹvU%Q��<�I�̺_NV�j��J�ʥ4C�.��ͭW��^�\Iƪ���F�-{��5�jd��R�e�Q�t� ��z��Iޝ�d�هl���צ���ERo����j�vF�[�`C��]���s���8�g��X�/,�2H\!�^�[;�DŌ�V��JGbs�:�����ၗ/����4���s��>	���xɻG�)W��3U.���gZ��FF^܎�Ƴx6���U�!���Z�!J\��N����T�$�g�R'��84��e3pઔje���f��J.�R�ڎ�3J�2�؈�4����9ɥ�`	3���ZM�[$ơ��i�n��v,EK��ؗ5� ��K�FV\�+��ر�&^ƣ� �-*y	�3оQ�y7ȿ�Qƭ����'4�勇L�S%^��GZ7u���ШM�b�Zi���n�֕v繧������oJV�����z�B;�l��^NOk]�Ak�Q�o'm=�-}��L�<�KJɥ�Ӻ�_�ӭq�u�����N��N�Gx�I#�V�%(��k��ss�o/�F�p��n(j$�U��F�i\���望�Տ�F娖�E����ֳ��� �ѽ�� ��N⊹�"�5fY�4��x 0��M�^ �#��B	�` #)
. �܂@ �  @���  �@IH !pK��,9  .8 H�2����p��P'� ��P	   �VW �D@2,�� ���	#| 1ȿ$�� �B�D��I� y!BĨ���T�-ˎ��N.a�I���(����7(��r�CQ�9-���M��'x������@�Ff����\�J�m6$��M]d�h9�Mݎ�����G��c䙻;ԭ����m%�7$�n^%a�%�����AK~�Ғ���%�Qv�;���~�=݋��f�+@D�,�*�܄���n�φ�O�&]��p��$��݊�J�q�"�f�*		�mpX�H��Ƣ �
�_��iL��6Ҏ@^-ɫB�e6�Y��0��JO.q�"!K�c3�Z@���_ɫ�6'�Bm��Ҧ̏���i��ɫ$��q��&�O��y�s+���`"P����/�\X��X
�.�� �ٕ��pF��6�G*� ��Wg&��������v(«	(*��S$�JriK� ��f[�qy��� *�M��D�6V��&]�p�3ɗ<�(�y
R�õ-����$�ͺgeߜ`��6������9Sg f�{;v2�o�������@>�~5i�\���nIR��k�T�p�#��禲e馬���K�e�{^�7��b��R|<I�M�a�ZP�\[��m��GE�5��+�i
�o��{e�s�a����Y����)4U)Ω�èޫ�q���]�rt�Zw�ҧ�Y�P�Ԛ��T�b��Q����=�囘�bU�3��f[PP��f�Za�iw��ǒU]�'�+
�2G7��7l��@^ � +�/!|�K` ��p���P�	����V�D�W�9��@A[%�[�(Cw �~�;�L���� X��-� ����(��$-I�`�r��dبr8� Qrp�NP� �J��y.m)2��L� ���O���7 WܙrT$H �$�0��A�Z��l,&�0����! 2��$E��A��X�r 	6� � {�@d��=����
��Xa�JA$H�#av���A�l� Ǹ/ I,��`L�@ �(AdH�49d�L�\ $�T �)F � Nx" � I#bH��T($�$��B7��ԯ0κ�E�%N[�rܰ��2��@�Y+p�q/�5~W!c��?̕��OsռӼ3˕{��o�5y.�Ҧ�H.���U�^�LB<�ഷMY%��}*Dyt�xn禚��9َv4�f]=���>�+��:eI�Z��?d�ݽZTW5ԏMzʵ3n�������gѡ�JW3f���T�$��#�^� ��}�9�企B`L��۷�Z:}ud�����?ʎ�զ��Q˾���cR��g��M̧��������r��?9�]U�UU7�_?����qի�d�US��Mj��'�{�[�uG������:�K���T��W
�O�{�:�WW�����]:jt4�Z��p���nզ��7(壧�����e��}5#���E�u
�*X��������_��� �u�\� m'E	K�B�b����u��Н�$��O� ǃ��Δ�9�>*M���5����z��	B=�>f1h���6������.���m�I��������U]�}}��_V�Y#�V��z�9�9u��C5M�S�b�.n��9*`�(�����j���RRo��U2��U�?K�/�KO¹��I��#��M~_�N?^�D�����fH��uV��K��7͙�RnJ�Z��GJk�O'U�_����7���R��:m�4�<[��78S�T9UI���F��ޝY]χ��M+���ܯ�܉_F���9S_R�uX�ߟ����t�Jm��F���6�ט=�{�1u�6�.�ƽ7M0���U����ns���������>����TZ�𡣕�N�Ż�t�	5�g����i�NSG���3贩['��2�zW��c������g��c��k���X�M��VL4ptyw:��Y����>�J�����Q�Q禶��}Iٜ�� �֦�OS�'�Wd����U�6�c%�X͑�kӪ���������CI�M]
]Վ��b�� h�t�sѧ�Qvyjѩ�Aќ}zuik��QM5+�J�=4o1">��*��kپ��'�}--΍Vk�[b���m�O
�+Nr~�hhk���cW�UK�BT��5S%�R���>Ʒ�֞$�jl�
��(�-ڿ�ɩ�Բp�3BpEҭ�N���ףR~OE:��~V�ҝd� :M���Rk�������~O>�Ҥ�Eח���;��ɚ誇Iͫ`��ѻx��N��Q�<S�ɜW�U(��>]�S���=4n�}ɦ2�\f"rcO^��(73�y ��`	v�?x	r�1� ��-bT�H�C�.i��d�&�7
B��A��c_" �t�ɖ���df.A#�9��t�ɐ#�UT"�lH��Q��&��x�D�s G|<J��)��L"+.�DAy+�Be��ŲEK�GdmC�"�'sI+����N�VGE��B��K����Mఱ7���4��$jʶri]��b7U�6�(o�D�B�K���V ���&[v\�����b�
�"ĎQP��Web�E�k(��* �t^{�=��zf���*Ӟ�'�K���;�G�������[�<��᎕�5e�i��w�^������F*ۤ�J�]CQs�����R�ڥvZ��ӂ�c��2��	��g7:�JY�Kn�\�N�T�}/���jt͍ӹj��ڍ�]��:-c=/.K�/���O�(;Q�EX���M+6Δ��7*y}�Ro%�|�5����S�j��g�3�N�gc�ԥ�܂J��M=U8@��QFZ<�Qw�G��^��ne��������p�Ѹӫ����Z�4�jD���ߡM<���T�*Q9�=:[ڹS�Z�⾚+<4����jw�j��j%��F��wI�e] D/@@� EI
�  ��  ؀�v,8   B��#�	�x
�p@���|����&�$$ f�@8�64@ ���{X9` ��� ����,8$Z�W�D��d�pFR9�`9�rn_��Q��M9T�%�&iE�p,������lV$[3 Gf,�nW�Z�
��ͲɃS9.s-ǹ���Jp*��ф�^M+dSc�\x:�GL�`p�Eј���;�j����bT���
� g�����+�Y� �`4���O�xGJd��� %���,ܭ,ȈWrH��%k>DK����Go ��Y����+\+!t�	R_��MY9�����Y�̕�@%~h]�ڟc��/W���|��Ԝ۱�k��k�/(�i�R.�]�9|�FLû��N%��vV���3/�6�&[�W�m|�g+'خ_m���9-M9��쀎��2�?&���1/�KMD��>�kR��>:dj�(�� tw�f�o�������W6k�JN9�j�2&��*�Lvo�?ʠ�qF��T�$�� �W��K�TA��͠�*\������n���d鿔T�EJ�(O��a�(�I�f�Ҫ�3���V�\��i:T�V2ۅ�ç��RVwgJ���ZLDr�:S�ziY#�3����8�:x"ӹ��F\�݀������iy=-A*I��^jia�:���Υ)�c�ZS�s��u�m��L�:i���t��C�Ҧ��W*���m�-\�馠۱Ɨ����:H�U����ɺ�Ԝ��+�L�9Q(���ߩr��'!��Y��`$$U�	nƕ�G�(��	' 9����e�$�b��L!,6�rN9 6�+	�`>��-�5h�O�eS�	�9+W�CV�	�`�	�S`M�B�IT�=6���Q ��{ ��$�@���(+��t,k�$�	�h$� ^GB ^H��  \�C*�� YP'�%� ��%݁PX� �n�`��7%$r��!g�@�^ ��BŃ�@�% ,R�_ОV��]�S%�#W�w, ��3vX� W��p3� �  �� 9,�"K ��p
  � I)8 
�B&@I
 � $X{� ��bI ���b̐*OrU\"�p�k��R�g���2����GB��!؀y�=jy>f�����U�.�J����t�����jy�Rb�s.�2e�K��`�ms}-Z�k�8�ܢb��f���zz�J��KU��^��8��N�����W^�/�K5fY1Y=�Ć���-�\r � G�rL��ۂD? ^
���� ��p$
�����+T�Ȳ{��--/�^^�r,��F�����˩U�doV��|�Qܭ:~�wy9Nm��mǃ�w?S]���s��+�miɽZ�)��Z���W��c�SL�g�3B��Ϯ��������W�N���O��n����M+�±��� ~��*uWS��v���5$b�v�١FG�F$v��m�OCNI{�6�vǱ�y:�]?��:g-:[���#���G��v���Ꟍk�}-R˲?3�;��[�7�����SK�sjQ��wm����x� k6�M).Ƣ��\���S{}�nz)�'�V���g��Y�bZ�])���Uε^��0���:T`��(��$�g��$�EF"�0*O?�����9�)>פ� ��=�|w��=!� �� �l��~7��ի��1,ާ�9�gQB9�=L�հr���%m�'Mh�Hζ�.��Rfx7":�j�Գ�UN���X�³q+�׻�=z�x��j�i7���媥��i]�?+���;���q&��/:�J�<3I�O���Z[�=�{ɢY�ֹ^l{[�4�SV��ՍjcQr��L�Dt'�ƽ	����{eN�`�˶�R~�՗��y��?�����Ӕ�Z����_����XG���GJ0�G�ۇJ��c,�Q"O3�8�P��A*]ʏ��Dd�R�{uhW���P�t��8Us�u���S�MĬ�UY�)��q�jfY����M�νu?61WMK�<�k5dZh�n95��:||���i5��sub�c�n�)�(�jҿ1���
�=�>�V��h�[o[�Z�+���ecd���-U�$RΕQ��\��Z�9pz���]'.E��#�Z��Mj(��_��M��cm�	8��������b���e��-{X�j�H�4Ԧ������NN:�
�*�j��]~z���*�NQ�E�s�m�M��|���ښ�4�F����F����i��+�f}=]�I��MMM7zm�������U�6g��V����US��T��SV��H5��]���ҫg�Zj��������O@��[����;��)��T�M�UoW���R�Ui;�ZjQK>D�{���{�&��i�����EݏU;�*Lي���b�Z����5�vA.���V���)1$o)�2��8�b	gbLۂ�_�Հ�r�Y2+9#\��E��\E���5&�/��VK��ӛ���BnT��!EM��02��k�-nZK��$@_�R�\A��@%l")%*W�V�@EL+ID�&�6�N%]��j��TSN.
5NnX��J�t�ȋ`.��YnB�ۀ���x�d��,B�QQHU �O$� ��'��;�`и�83�ŀ�����j�����`cU�LS�3]4�D#���K��-D�X��Muj&�t��O�ljZ�JU�WTCEԿO�W���}:�A���>��hn�����n���~��5bQQ�j��~�5B<�:�,�N��72˩c�T���*�җT��I���k�T����<���:-\�'w�פ��N�Z8�7:��jqJ'e�X9w���<8���v:�f/���a�	F�Zn�uBJ��Jc��%�U�Y<:���t��91���j�4�i�>�O7��F-m��T�pe�ks^|2&��-=�2��w���j���J��ܦ~��}OK��]��j�����իKqF������J͚����i���i�r���i��TVN�@� . 6 ��   $��� 2q`)�=�Hܜ������	�wF�
F��^�H����
�
��  �`  �r�d`�`��� �a���pJ�aZ��!K� ρ�ړ-� ��NC�qvr�GZ����O�Q�r���'6*�@�X`c���'r{�^��� �Hr��d5%��� a��)Vw5R�;3. �y,��Y�ԁ_���Pt�.���Rf*N�	���Y,��Ȯ~I?�D��Pf�`�q Y�A��^XS.d������� ��	��ϱ�#^�e�do�ߛ��)�3g),�R�ei%��r�|�	ݱt�s%��G�`#m�`�k՚�����ʜڙ2�n��'��d��_��J�@�-9�m�^d�mU�V��*���������
 9ws�OdSʒ��R��p�EU�i�ʀ2�����D�xV �蜷O��¸\��(�Il�x&m�a;�*�]�
� �E�`��q�N��Ӕ7�����M6ڙ�T�3�I�~�G�`ZjJso��dYrg�����H��B~L���2�T��&3ɚ�Rpܙ���A�	M�:��s.�g&*��#U;�x2�|�Ժ�#�4���	8�3T� b%�'L��jm����)<A�������+�Q�tg9�W�jC��tͥ=��M���ā��ʪU8;�O|�u1V<���Vm��y�8�wb�ru��i~��h˞
�1p4���gM�r�9�ѿ�}��no�.�EQUΊrqY�׫�)���A�{��L�pg	�i��� �M&�\�����"-p��`!pW�*���+Bǁ� ^Z඀'�����
��?R�d��`����'��Ne�ܬ����Q [d�  �(*�d� ���'th�怅�J#}�lI���X� ��9�� C���DjD�/ D_ v�b{��_!� C*��_q�2@@,���%  @.VR 	�
��W�@��@��
8�����E����L vv$���d��I$)�]�X0�$^P�xD  D`\�I@eIx�� �
�� �9
@�
D��L�(  ̕��pĒ@��2�58AY���R�vf�+w<����2-��`$��'��` �
���f�<���exu�SO��j�ji�G�t�+�]�۫���ߞ�?�	Υ���,�Z�>
�+���o��Rk�XR�j�\�.d�K�W]�T��=�Z��s'��jg��Z��/&/,u��,X���F�3�-4b�5�4*R��-���'&�)�i���U��L�~ăzTU\Z@�������=թ�XF�Z:J���檨����]#���ӡ�W�?=��z���=^��믢��'^����z>>rk��r��������˻�57UI,����m^��_R�&���}=z�Kk��o�g��#Ɨ�j��+�R��oN���\Ң������WV8���(>��J'��|�m8���j��r�J����M�۩�W"���OJIw��KO�;�s�]J�U;#�~���_Q�O9/��ꖼ���[Zg�X	!�s�&9��qb�Jd���=Z�Ȳj1U}UI��#^��+�u������o���Ƒ�7$�f�ݕ���\�12��rOp��'(��}oF�?���]����=�N?�����?�^���\�5:1<Ω��kU4�zx�.�+�]]J8�,��,s|H�5].��Q�>:[X���5Z�j�Z��mw7�"�tVgG}=wKG�Gs�'��iW
$���F�٬��wU(���{��w�է�U5,Kc7�~�Ov�*��V��υF�!�:Ѹt�nnv�����>O���M}���4�c^��z����?S�Z�2~���S�<X�����9%��ī�}-7��}Տ�U�'�-G�h�8|���:Ւrn�f������v+�X5�6�ǯ���{�M�ywMt䯝��8W��u'n�<��s�b���:��R�Ԝu5��S0��0������9�X+��V��f��L�)��Tyu����Q�S��gY�N�=~���5�O-�Y�ŬW�գMժ�0�8*��/^�6�Կ�A�-
������	�T��t�����(Ĉ@���z�t5J������Mq����eUWK�,�����ѩ�����zS�~3K}]�'�����UO�/&��Ц����M�k47�V�l�Q�EK&qu�-�<��]6G�"���:�z5�k�OJѤ�Wr��gWb��<Z�J��r~+�ץEn�t�GM�-}�O���K�F�8�f���j�뢬88�jN���C�r�q��ҩ}�5�M]|X�%N�=��4���J�*�h�:�9�;Ѽ��G��R$4ˑu�����;��x��:��ɺ5]1-��f���;�;*7/����R��͕]l6)���ۢ�yFU9!R��8�n.q�7 ���i'�5aYE^Ko�Љ�I���.�	�VD���/�iG�|���Zc��"��ɤ�Ax���5f�%st�Y3ղ
�J�K�����Fc�IC(�rn%��4�T.�ʜ�@O%".p��$�NJ`ԭ ��* @�^�,l� D0*��!< �9k�!�^,����L�L����F]t/�R.
����%MSKi�Aƭ֍6u5=OF���=�jWZJ��t����*�~6��L�d���v>ꢚ^H�
����jzƭJ�z����:�x���UZ�I~e�V�B��g垾�Wu3��k��595�Z�[J�ʧ����ʇM	σ��f��V���+�hn��'��]�j_k��u5^����OM�UV�M�#��ݏ�a_ ���U�N��v�$y��W>�J]�gLZi�y=cs����M��Q����Z��W�SJ����}�:�μ�峿�5ϻ�ð���R��s8����^��8�<�r�*�n��z{z�M��R��<}m��K��S���g��(ԡ�=Zz��l������tԧ򵆏v���Ol� ��=Jө���n���T�Io6k�Zo��X���}=���o�0{ �]J�����@ �p2$�
�@L�r����Y �� ',X��8$�/$`\��	�D� d�
K��p�b���H#���! ��@x��ğ�\ 㙑�؁�@`��yD�D�\A��$����+�e�4�9�7���nj"y(ں��,> Y�۱,��D�X���� r)e��̀�7���7ӄfg P����; ��+Srs�����9�ob]+��LdSe��938m��s�N�v�y���#��J�=5+D\�R�5�5)6�r$����g���!6�а��#�v^c��p�~�-cP�@2�)l͛O�k�9$ ��9,ʱ�U���=DmK�,����odD���g�	�&fD`U��9M7.l�����F
�ї*�UԖn��m?���:�L˪�� V�䖉���[I��W������{077x�Q�ĤҒ�f�Q!�Y�/U�('k&I�q��٘uJ��F�d�����������T��Z�$j݊$(���f�-c��R��W��qgvg/�,�0�5cU9p���(D�h˖��Y�tE)8���#���iR�ݗWQ�U������n�`�V�؊�LEG�vf���zu5qq�*xg���:��w�I��Mp��u��z���W��1�u%c�T���<tj��v�U���h�j�ƭXK�Use�.��\���#�@V�s��J�U5߃siy5Jypb����U>�Z	��p���vr�L�:�S�MԺ��^=KU
NU/����1�ᨙG4�+>G�������d|$S&��0��&M��~�ZR�c�/�+� �p9DE��%�X���+��?`'0;AC^B,w�'�<���G�R�� .ȑ�lo00��6 �r��l
�N�WE��k��L^�pB�p@�{V ���� =��G 	ɤB�XpI�",l��"���>���RVBn"";�8�w0Y"(� @��� 	XC`�@.X� *c �
B�h0$ �g 2� =��b?��h� �
�<y%�W�T�`�ʹ ,
��0���7��HEn%K�J �E�0���
�&�[�"@,��
 
$ ��I�  8 ���w1 G؞
H qի�Ҫ�W<�ڲ�?�1]Sɉ2�p'�U3!�a������p�G�dmR`�^nO1~�V㋑��K�ɛ��[EUL5)�/s�zsU3ڔ��jSMJ ��u��n�z4�O���N�f�_m�চ�uf�!�ӧ��ҥS�Y�[UOM+��ˮ�p)v���k���r,	�k'�Kp�y�<����3Y�_[KZ�Վ�������n��mT�5��z�:�RT��UJ��:%Z �R�Su5�z�����ЫUB}'��S�S�+"��}��S�>�n�}~g�cZ�������O�����UV'<;�|o۞���o�SS���7�\����F���:2����۫��=�� ���ګ�*��}}ު���O夽4�kCNͬ�zT9g.�זݭҏN�9i��R��%�;�"����Q
NZ4(7�[���3��[gQ�]N��Y�u�A�*ziG=ֺ��w����/Tx�Sw��M<#�ҝ�N��;n���p�?����{�><�;Z���"J����T�p��bLkniuE.ر��*�Nc��c5����V��D�ɤV��=�U�hO&[�ʋ�K|�;��ñE�x#jT���@Vԑ��\(e�*~O��nv�.Ul�5O��wѭ(��s�?����QT���u]���%'��s�.��P�SҬx�B�M�r���S7�s���G���*~EO'i�/EUӛ�V��'EO� ^��jDj�jZ�ʭYetB��Ol������`����6!�j�n�e��V�vӡ�s�:r��BPs�5#z�R���uՃ���t���N��M4y�Z�R�IgIyM�UQ���BM���W4�<IM�Mʘ�J��=7V�=;I7x?5RGm=�TҒ����s�j}?QV��a�I�4�BZ�V�=tnhԎ��7\��,z��9��y�������X�Uj�������pn�G�p���ΜĮ5SyF*�4�'Wlh��}Ri#Q�nHw5*c���x:Ŏne�e�ĩ�.0s�ݕ��Q����J��wC�:��t]=G��3{�͏��ۺjӫJ��y?7��*�=�g���tX��,v���ReT�uy���Y���s�V�8.������x��\I���d�^���1RsK%:�gcj�U���doOs�C����z�t�n� ��l�J��ob�c���MVv=�{�+�4���*��fztwښu&�#�t�'��5�&|��D'�}�wU��k�\p�&��4拞�5�I9W:*�������o��T4}�M5~d���Wg����Y��«N����V��.�s�j�n������CR�5|�]�aD�j��R}�L(���Z4�����oJ�.N�J���۬Bg�[f��Q�kW_2�u#ѫ���)3�Ӫ�tZZ�c��˧-3��i%g�M}7UT;{�%;�'˦���:Ά��b𲾔|�Z��y�����5Sę�i�܉��K����Ģ+1�BdB �  �\q��y��Ȏ�i3+��X�%K� ���U��V�Qe�K�摔���B�O�KU�S7ҺV72i\
��b��*/$����"��� �����`�CI6DCI�t�G���jL�P��2���Wh�5{�
�G�W�th�6Eʚ�]%�ݟWו�Mm_]��)pjqS�~��R�F*�ҧ5#�5���g��׽שާ���?cV�F�Ԏ���Jq�*�Ԯ&�b_-�S�Oo�����˩��}����ݻ�V ��꾮��kWu2�6�� q]_��Y�����Z��jw�����S2��\MW�D�G�*��ԙWl%|�SK�%N
��SRf:���X�o5�$r�jUE瓶��_v�ZZ5�M.H�U/OU�U����ќ�o~�B�����kJ�����YލG8�ä��Er��ӪO����=Z{�E��G/-8� �:hZ����u<���=g��Sne�����:����&�k�q��:�����+�y�M(����ct�����:SRh��'�t�R��?6-������א��W�σ2�"�N�u��Ԟ�s�J� OU�C���&��E;�����O�υ0M<�����v��]OoWmL~�����֧�CV�Z�3��j�:�}�t�tV��Ԫ����L��N�!�-��Q��:�n4�������z���4>����54��נ2���  
� $� �x$�a��@�� U��`pIl"���ǒyl*�dB�@�Op( A�"J��K����2 A1r�' > l��&l=��� ���,��Gr�������i��뎩��6LV�"�sbHS��
���`��9E�^"K�rU݀�w����Kr��,����wĕ��+�@��"ᴩ��t�e��qxd�V}�����T���9�V���1cI�`i��U��I�dh(�99��W�z��*�?m�e��Zf���H�I�� HI�y��ԥ��n 4��q��`$rIs�e�5��[������E��BW�i9�3S}�
�	M�i���#�3���;{���0ۘi� ��R��۴J�o�	�8I �#%x��e@	���E�@O*9�(� 8���qT��n�RJ�$nq%Vo�' �G�A��҈Qd�*�.
�J��o�N*�DGYSl!L��5]��*��6
�w�aV-���e�9�V��6�*���%W�JW�	U_-�W&ZPZڎ��E_�*���&y�Z�uZ�%Z�S-��+j�d��u�Y ζ�s<*��7&��S�ͷ�R
ܼ����a���7Q%UO��dR�Ma��7�깕�?�4���U�����N%��Q�����T�8�j��ت�뛣εI��A�u�rs�y�j/�t�԰�MT��ҩ�s���'-;HC���8sܮ�-D{NrA���tJ=I��q3*�*��;UJ�N��B��,7��PEKS+ rb�&����O%	#}ѥO,:nA̫>
��FQ���H>�R9!`�q�y,.v������@�`��aH0���� �d�#�Uv ����D�qf?� K�l��^@�#�5��0ǀ�r'�
� �`,Z�n��d�Hd�(&��d	�Y	 �d*o� ��/�兘Ȱb {������	K�Y���� 2��,TL�`������ �dIp䜂��-�@ 
A? 
�&� <� ^d�������`���* >I"9نAB�E�\a]��� �d(~,�{�� ��  �Dd����@ e2P(d��vȂ@� � � G�$(���ݏ>�V�:��0�y]�V�J��
���d'�#w�N@�n]��E���d��x�7 ��$��j��<��$ \K�h{�ƥJ�Mb.��5��H������^k�j���SE��U�>�zJ�dx7G��+���U(��u�\U��5M�t�[#��G�TU�nf<;���զ�(�i�Q�J���(�5EmU*��^X���XM�p�q��M<\ϖ��^�.��>�֣CNjw���[��z��>#��_��ߴ�kի�5;p���m�]MF�殩R����H��p~�Ѷ��6�u���ռ#�z.����k�:ߖ}}֧U_J��O��������SQ���T�t�uhSU�{t���6��롧ex>�����p��iL�;#��[q�Lu�*(�d�ԫ�T���k?�_ӧ���R�U�� Zm%-���M�ծ�US?��=Wt���)w??��Snnz�/�&��Zo��	Y���0%c��:� J�E6o(��jS���*��z��j�:�rٮf��ʭ�eɥ��nyfj������_,�Դ�>��z�,b�����\Z7ԕ��� =R����uSY/Wp:6&n�]S��`:6�L�c)��S�;[���z�ϐϭ�_�Uܙ��� �_C_�E��_�Ğx�.�ݮ�|��'�p��,��R�5i��a��Qh9��:zgJ���*�G�В�r�MF:K�p�G6�mz}�ƽ;�:J͏?#��/RkPId�E)��u���X�B�vT�ʋ�eҗ*�)�xe��i)F�ѕc�r�:�;$^��ź�)�>{����^��������J�7�X͏����v��Tq��U.�sz�n�t���fL�{׫Ot���ޝ�o'ϋd��%�����UJ�`�g��X�Ӫ��<��M�#sl�S�I"lI�E�6������*1S9W��RO:�j%q� �J^N�Sk���F\�E�%j�,i|�q�H�3�5���v����4��Xa\��>*�<��d��y��:��C�M��k�Z�'Gfx֫Gm=�dʮ�U�4��ٸ1Mt����'tĿ���v��U-u]A��}N��M���ӥ��u�F�~�OsMj���L�n��WO����V멌G�ӎKZ���$ϝ��Ӯ�'��eR���M���%3ɩ����MϦ��%M36.�ѩ8�4f�:�3�QM_���.��N�t��b��ע��km�b��K��6���X&.�&���L�գR�~�7
R�<��S����ꢪKx���6�+'
��񂮼xùUuM�W��qɚ����u�5Z���t��6�Yy%�.��Ԧ�f���-0���i�;Q�t⯃������Q�m�S=�M?z��b�TY4��"������I�z��}7�O�R�c�TzO��lz��%L����-7�M����cIC>��m�ۮ��]K�>kIT�D�9�y�-u*P�/�N�S��e̐t��*]�k����n|ث&R�J��6��&��+2j�Y*�l�(Gs=TS���3�V������T�x��M�?���p���(�*W��S_V',�G'����qM-�}_Xիnqjz��M3vb�֍��'��=GZ�=U#��թ˭��� *����z��)���6�����Z?1UuT���C嚟7��5=v��S<������R~��m%c^"z�f��n*v����V�_RS�>e�]*Ԯ��[f\���"�\D��V@PP�� ALI[e�F��T�I�z��2�
Ȑ5(J0�NpA�M��c��4꽙e�c�KN���b��US�:Q��jZgj6U;��M��0�*m;euT�����Q&���i�vUT�w�� ����4�a�>������-� '��UZU5˪��I~���H�L4��)�:���wV]ͩ�ʗ�&�+ZzN�1�e����+i?s�ɭZ��uL�s2<�~�ش� ��+7,��6����Vf&���:����N�y��{�I�x<t�8��S��+�"U��>�y6������?c
�ܲ��i�G]��[a��s�x�ˊ�fp�*wa_��n���jwiy\���𞟿��������궦�/����nt��zu�*�*_���ز�� 0E     @��20��p�g�/� Or9��B�7'���O��%��rϰJ̀nL��c�!H� d���y7eݒd��#�� ���\I�g��*����s�v� �U�)�EVd��Ġ���� ���O �CK�$`T�`�
��+%�N�!o�J��W�����!̀��o�U)XdC\��r&����N91���`�6p�s��k��t��d��R��ɚ�ed���G����D�Ȼ��pF��8�Y��,�U�;�
��G����#sh4��0�S�.-`�XA�G��ÔF���v�M9�#N�9���Q��fb0��0��I+~�i����3���&j���~ߠ�A��]�m[�6�i���1̀�Gq0�̸s�&��9�6�fy�Eu]�L�uY����3�aN���D�,��G����ۅdjR�6��M�i/�������YI�J�����<
���8=D�i����:�%��:�vl��:�Tu�F�ξ�R����m�=zˮ]'��5r���A*��i�.0b��ɤ"�2���)�B#�&Dܱ$
>b&`�՝��ʬU����Y��Wc> �[�u}�ET�0���S����qU>����Z���/��*�����L�Z���.���H�^d�W��~KK�t��f�S��L��QI;+FC��U�!��?II�5�:o�8�g�5Q��J��_`<�/�aʼ��A*�MX�\��C�,���+�)@�#�p��=�R��x -��Y\�@�`D2�g�m�`���;��x.@l
� 3�|K0Y�$d}�9,��H@ 	�$���7(�`�P)� �$�����2�B DP�]�ȝ�2�C�;��M���D؝<�y��$�p(O�b` �>	�5�$�J�� ���pP@���
� � ���%ܩ	����� ]�W�d�	r�� �@.��( �� ����H�V�2��� ��   �  �6A�+bL�@�$���9&�uw#f+iJ�J`�jV٭J�� �s?��&[����blI� ;�6D���ÕL���|�(��'��2��2� "rW�Op+wwe@���"�;�ܖ��TJ4�Զa���m����<�צ�y��j�U��*�Q(����ʦ����m
���1���;��WN.X��h%kR�Xx,+���gZ7�J�5q�p�Ԧ�'�R���֧����^�J��0y+ԋ.L��}�(��m	ˮ����o�^�Z�*n��9?G�:v�w�օUJ���G>�Ǫ�F�gF���E�%4�ycSQ��=G�#��=NǞם�6���Ӝ#��*#�߷�b�y�N�9�F��V����gdJ����7]n��#���~�E=4����֧GI���ʥ:�p��=Sv뫢�������:��nuj�Ֆ�'4�]�<�$y5J���'=κ��t�RU����m^�_�O�x�<�Z��S���V;�21Q~�j��ؕU��ަ�F�V��ufN
��XE�XTe�I��9R��b��%NeI�ZWf�v"�%/4�fNt�N��.@�w���J�}������ �^�?�� ���}-|������O4u<#Ϩ���Яc����j%JT�A�Rv��Dt��8�BiAέ5�ǩ��UBx,��V����]�k�����I���f�I��Z��и�8�G��&<�.d����d�:\`�-����)V�4����]5˄u��<T��;i֧&,]z���$��R���6 ����Q9f��Fj�U,}M�����=H�@|}]�t˥��-TU�2��t��WB�D�K�5:G���Us���}+��>9<z�z�ꊕ��9�l��->�5��iT��W�ͩ�"�J��n�I����7s�53�iM���c��Rtish3�Q�n��r8�G*�&zN�)��<�S�&pui��%��(3��4H��1��v6��.�0�pi�$h�pj.8�ڀ�I�r����n'�i�}鬝�T�ɞ���:��ɛ��]{�]5S����ލjj���\�ӯ�D\���N�a:��'�����u�~�m��u��8g�GwEi5R����ӛ��W�R�L~�j�ɩG����&}=P�ԏ�&���ZTT�Үb�UR�F�h�.�W����8~O&�ε3M���*��b��um�Y\ᩣ����QZ����ڧ�_�K_
�����ϫ�\#�jmkj���_SmU*nq�s���m�Iʱ��ڥ�_"������ۄ��)>���kR����*)��H�]5#�izz�K��i�Tʩ|`���Z������1c��s��.�:5}730~��?i���}BV�}���xh�?N�t'rϦz�}�Z�l�b�]������ծ^�+)#5.9-��yjN��cT�w�j�Z^�s��P��\����@v��I$�Q�j8l�nw5�2Y5�_W�P�LU�ҥ9k�>���_��r��� �N��b���z��VI���t��G�m�I�y5>9�}]OW����z���m#�+��^#>��^�U����=Z�՚�Lm���YQ0o{M4T��V�,�Hmr���.��si��	���YL��X7��ؗ,�$H�M\u	�Q��r��Ē`�ȓ�䭘����Io�5��T���)'�mu�Y�v��B'�eyd�zwT6��ڍ���=���*_֝ub�ϳN�N�*R�t�P� ��_/�����u��jT����,��u��=���G�)���N�z~�7j}�D��o؞�����RqJ�:*i_rF*}J����C�j��W��xY �}7�9�۪ptT�U�KF�_q�������_CQ��3{��U\�D� q�����]����:U�������$�l��?_&�����#�A�Q,t��˓��t�'5[U[=�i����ߧ��vS,]`��ն��3<�@�2K/�ܭ�I"�VH)�$��i>9�L� Lpjoɛ��u#��G�Ҝ�U5NMd�B��.�`�STY��K�_K�u�5�W��� u��ۺt�{�������F�}
�Zu�>����'ժ���۫o����y?i��F�ץR�����1b��,�pR �D(0  �� @��p'� q�������"�pĈ�W��X/8�$y c�	 2���U��A0��Am��p*xYjT�'��K&X��GNu�8��ZU���5M�R�ZK�� J�p�n_ur9 �<�x$H�����_��	��
,�ň��'n���eY�y�<$�y ����(w�["o%i�L,��P�GJ��o3��T��<`�h
�S�2���qݜ��M߷&j���
��5i�z*�_c�t��95�ӥ���@,Ƚ�-*���x�1-�:Z3<�4�� �$�R�-�'�1��0y�F�+d�ŀώDÆ*t2;?pe�ϼ����InсˎJ�ŀq���]+��T���
���up̶�(Uvf�
�J�R�Ն�|D㜋^L�(vhq��l��ְO�m>B�����S�.�p�M����*i\�5�4�S i�i�8�Wɪ�T�6�8�o��m�,�M�%9#���WU�nE�r$����
de-��KR�?J[Qp�9�	М2}[��h����pz������6��SM+\�>}zq���դ�F�H֘��b;�թ��.0s�B�F�;��2J�u�R�}b,TD��to��Z���K��p���#)��!$�ˀ���Ob�r8NK`&<�O�,��t��R�s�ҩS`��^����/&�v��1�U/�җ�P^�� �V�ʒj[9u_��.�Dƪ��I�i�ت��Si��I�¹QC&
y��� ��v�-�9��.@C�{�dA9�$`�`{ ���00�����)�Vl*x!�x�y"�Y�;	�/ 9);��(�"�+�b� �(��@�/W��Y�ST�8*�p:��4�K��4�̶$Gp"�L�,  �`"�H�b�2��D�����Qp� c �r̀��x�x ���)�� �D�^@��  #,w@��`HUVg��8/���
� 9�2�r[�&�  ��M�� �X@��`D^@1 R@�� �1�		���`$�����8����uĞ]J����S�̿n9�-�Wde�Vd���:�e�Q%����x3�YN�UrG�ə�Dn�$»3t�nJ��"vl�� Ӹ�̣I�f������nԤ0��*}Ĩ��ӼY$�Й�l�������*��wG�s����**>�JL�|\��+�9ӯ��t�IK=���ZsI��t54������׮��N�Ɋ�u.`ᩦ�y�s��Z��G��Z����N&�N��ߧ52m&�T�����6U�5��E��㯥lV����_e<Sy��Q�:!�On�שm�~���g����˫�u��O'�o����}P�O���4��;�����Ssߡ��-<#ӫ_���W���%���z�uԴ�v_��*,�cN�J��we�էGJ���Y����<���Zt:z����ۭ�U���֫_Q���Npz�?��r��J������|�M��^�j>ƕ�gX�,����i�z�ޢ����6���}t����Jy���?IT�B��������¢��2tԩ��R�2����|}�G���L`����h_'-9�.�y���s��Ϸ9�d�ٟ���F�Z*��}L�i�V�N[�6c��E����:��������46�'��AB�V��N���){��� 7�� �Ջ��7FڬM������UT�������t���.8/ӱ�N��t��z_.*�}C��˲G� �z:� W�'wy$�}�Q�/���ұ���4�i8��$����_y�V�6K�-��RĬf;�:no�4�rt/�.�gI��wGs�tw=-|���ܣ�V�R�ʪ!BR{*��&j�Q���t��鮟9�Lep���Q�UQc+
�鴝��M>�76��C_B�E�(ڭrx�K7;S�)��	��F��6;SR��~�y3=ʿ`,'����F��ܤ� x�v4CT��km+�s�}�м9���ک��T�����U+�w�<Z�'B�e�غ��Ҍ���UOe�F��2���JE�NLD���4sjґ�y= �).���7dt����$fc�.��Op�3�x%K�t����`�<Q��ki��A#�u1����wjTi�K*c��L���2�q0kS��u�fj���9�F�0e��*cN�7�Ts��Z�.D��{��Q��ܧLU��5��S�^b�}�k��f�U���&�WM��{�����Ŗ=������V�?c����c�.��rm����oS�M�r}=U�R���U�,UM�s��q��74�d�u�S�����uh������K���?MMi���+CCWg�KqMn�`�B3^�q��F��p�l��j�ԭK�#��RJO3r�9|�8�s�T��2�:D�\�3��:�T:�DW%�>�:�4�I�q���(�,�ssr3j�SfS��ՐJ�D���� �MI��|�����
aӄJ��ŕ�U��I���K�>t��!;�����OR��p�|�֥-�=N����MZ���k��;�Y��ҵǈ=2��l���X�p�Sye�:h�=*kT楔b<��$��}�U�-�
,؍��]�n�eT�esON�� +1=�6��g�U3��N��uQv�=E��d�t�jI]��;:nԳ7��_"i*Ѯ��[>�m*WWJ�t��Mr���/�F�Y�-B;Q麕\�� k�J�^��J'�\�>�J�]_�O�謦z]W�EmJp�z��(�i�4�7�E</�*��M�WD�%UJ��*Z�6�o��i�:�L�UL$L��ܨVDI�iA���z�0�o��L;[Ԣ�M0��z;�M}EM7lߊ���H���:�4�ۭ�����ת�|���S������m��6�)X'y���m)�L��N�Mv:uX��E*</�ѣV��t��8M�Z �ǿ�ȡ�V#'�=cW�n����6�_�T�����κ��z�/8�J/�)�U�l��9n�m7.�5��N�ӄܩ��uro{��$�R�2E�S:S��0���h�E,�p4�}���it�<�N�����::�V#� ����2�;�`uT�YH����(�֌�Y|�\��:ը�0f^Y?��U[ t���&O�~���Ե���� U�N���Y}�U�Oos��:4m�i�ҥ*iP��Ucd �A["e�    �$� ` �" �bA G�� Ia "E G�Bπ�9%��x �8�1�I�%����c�	�D�!��?���95$�+#�C$e�؍�>�*�t���X�J���/67M�`V�����	v�m"�"�G�n��bd[��sf�dT�p���A��˜��� �s��P�ȲB!�6'��d���PH��%����h58�95yC�(�M�7g|��YMFY�4j[�`+ęjnn^;��+�L5
2wt�d��R>�ۀ�ӂ�x0�qfY�ī�O��w�*Jo���v��7s-t�@
d�vo���"/���'�<�wܳy�g�v���M�S}P�����Y^I�^$b"�Sđ�7#lM���	�R�smOn��r�n��ˌ�my0��U]�n	�]Y���˨;�ਭ5�o��6|��m���9U2�mDy;}(R�Re�{&���,p���5zjIA+��)��*aY�V�4�5�
k�mR�q�j���u;���o0�M�p�m�B��ኛ��D�V��F\��U��J,a�6+],�9���J�'$o��6��)o�2�ra;_�a�S
�����wr�駸�Yw�8L�m�/�0��|z)�ҹ��H�o]w����^��#�ᬏ���ףWi9�:�}Z�X9�%U1�_I������:c'�Z�D�r�A���|���q0O��WzT�T�+�S�N� ��m�3�#�$'7f���V�\����|"�ط�Bl��2�̝9�[��^EGZ*x��X��r��M����_�[Ewd��y� �x#<|�WȺ�G$�VI�^$	�Z��p�;�}��������` /&�H5�"?�y
��#��N�D۰t-�Q� PN@��� [܂F[ RJ����@�+2.�
Q`�2�',�	�R�6I`�%r���-���y2��B&���C
�8	D��DX!�6A�0 ���E�� 0  �-�V  #����q�8��� Z/�"DHT�E� �a��%��x�@a�`1�F��q�@�/
�İ-�$M�d  y$&[@ B�`�$�&K$ 0&�n��\�������V�x�G~��9U�f�qm�sTA��-�^L�Vى��*��lb|�-W$��v%N8"���x�/6-���v�0��qRę+dJ}���0��$�PL9*�B�s�y#�6�+���2�re��Ζ�&�}�]p��N������%{��t��"��s,9�U-�����T��Z�R�uN<���nv���W\�s��^�ק=�5{zj����MJ��t��=��������н����7�T��Օ)���7C�U.���3��Z44����z���G�������ֺ���r�6���a���^�MA�6�С��EN'�륹t5'>���5����=)��T��uo�wm�u5s��n:�S�y:��:��O-�շ�Rt��O�c���tt~�5}�#��j�w}�|_�S����&�2�/&�I�sY��nNnQ�E�_Ŏ��#*ҍk�5l�84B:�Nz���Sk��צv�$��s��l~v�ujj|#�֪�Q����	�T�Ǵ��qM3�{gㅿo��[z4�{�sѥS��������ꟉM)�7��>L�ɻJc���W>��9��C7*9:os�t��Ǔ�w�t�,qt�=���v�������5� _S]}�2�����-"��s�EY:G(�Z�C\�u�}�KϘ�H��V��ـ�j�k�8(��F�ۻ�3RM\n���t�GM�#�T�t�:ET��P�<�P�r������1ҞG�c)\�UD3�`M��-��� S1{�jJ;i�3ʼ�T��5S��譬���Iy��Y����Rԝh�E�LWU�*��L��\Y��H9�hQ\ʓǫ��(��Y���^�T��i�|n�)i�mm�.��)�\�����]<89�Z����J���v�4���h����E�UK�c�a�ຘ�%��zi�#�²f�Lp�n��Ѩx2��2������Xq<t�ZId����U-��]-`�լGO�jtc�Uy0�=-X��f�L��U2g���0�jVlrj=�Վ�I���8Ō���X��c�D#�DU5��O^�/'8$(�~��mR�;Ӭ��Gɺ��ktᙼj�}�X�<�|�=�T��-�-�F|����MUS���F��/,�Jkvh�T��eK����R�T�SGy������U��v:�jWMi&���؞_��Rl�h{m��%՘;&yz�]dƛ�3%FT��5>��/�QҘSS�>~�qM5U]U{"ɩk��,B<��M5�j=^�Sq�'�Q�!%�J���z��V��<I����r�o���Oo�V��*d�V�J�<��թ]Y���b���O�=>�{�ir����p�>� ��3��n*Ԅ��4jT>��q�L�f'����S�<ں���1�f�݉ć�*r���ٶ�if��KÓ�UV�s�G�jT�ʞ	n,�xx�>Ə���V�v�#��7ET�Y���iT�5N�uZ�[~���hi�R���Jp�{��_���q45��J}?WG��e,��RuK'��^
}5*f���a�)g��u�;"��\��c�:zP�)�}4B�eK�uTL>�U�RYI��mY��L��A��ӽ�W2k����I7u���sz�T�Ԏ_���0�sG���ą2xu}A;#�޷�|Q��e�٪�h���p|w��!K9�j�9/�_]��7cZ����KR�%U6�_���S6�c��ϛMM#���a�׽j�ɪ*�I�Z��ҝD��^��{���4���5�.�����	��_���g��?���5)�!e��?�������NR}�ǫQӶ��(>��������]J&��??���8�����T�S[�G�#J���4쪹UI��3z�_�B�e5��O�g���:ir�O�(X�y�z�n��������O����7M)�2�����1�qʹ�#��A$�:yc�7G-M7S;��K3�)F��mq[kݛ[zli�%�VM2�N��t��N����B;�\"u�z�#s���Q�I����U�u�*y`-���{�5��e��@��#��E����U��e��l֍=z�R��0��7����^֊t��4$�ID[����F�u�  E
@ � !`��$ H 
� � -$�,��'sL�v%�  D
E��;�]�F$l�"�g R�@�(����ف�H����A-0N"J�dOp#8��fv�8T�<�p�	i�T��<���{	 ��c���̩$�3b؂5+�a���� ���+d�f�r�1�`L��@J~䋻Q%L�����������2ߦ9 �.<")��,	�$�`�#L�S���3=��J,�8F��̵���9+�х5N ԙ��Y\�>��v�iM�Υ8=5S��*����#����5Y��x�32����^@�N�Yg�	���ZXDx���LR�tiĘ�WZ����_�Ȟd�^WsV�p�P��U~�~�GU��u�A�U�U��ԥ<2h�r����J}��]��su7S��5�ӣ�,�2�'��su�ϓ�ɬzz)��vͭd���j�� �������Jñ���[�<Ξ����*��8���Z�M�vy�5[m~�w�L595)�U[y1���ՠ���i�^M5Jŏ/���ݡ��5�NT
�b�����]�X�T�$��wI��� ��i����T��Ҏ��T�o s����*�����n��J�Y��]�5J��}y3i�������	)�dt�l*'C:5*���R�'E*e�)�ǉ#i6g7M���%\)�к��֔\#��2&��� UWK��7���2��䢴��GL���[��"��9�V�r�N��cj/��t̵r�M;�9��V���뛚U���k�j���QfD�e�#�	��]"�wFy��Mo��Z�9�Vջ]�6�:�J��u/(�:��3����)9�U� �E�`f��v�E�q��p�ʳ��-���"fm����_��	��dA���(��S��+�ԋ��x&f���c�rK��/����1�a؜	 �Yr��_&P�
  �^���g�	����^@sD��Y"��(�NCw��FI , |��{T&�H`$VW(°S�l\�"G"c 9 ������Iy	4 +�� ���) ��� ��p.���%
�3�U��X�d�C�� 8��   ���`@	�*�C�
� ���	�  ��
��G`,�2g�,��k��:�*�#�Z���m�A��u��$�i�2%�� V��]H�T��n@�tD���$��L���k�+�@�`�i+��ʫa�NV�-X�C���]o�2����R#Խ��a��*k�[���3UK�k�V[��Z97���.&��v�6��}���������YIK;��9��GWM��jK&���U��iW������Е�A�k��G,u�S�frj���-bSM�Ry���t'5Aں��}�$c��՝�������l�;�m�U7O)���;�=f�ө�&�MZjt�g��4wjҠkmt����L�����YI�����W�ۡ7J�pI�~2m���W\a���IA㮮���$M�_��Ts��}=�n}�a+�F�M6�}}����n(J[>��Mݶ}-o��i�X�G.�t�7�[p��b*�������Љ��u8��1e['m��[���Z���`oCI���Q�(�F����m�T�m]��}Cm�����Zo�7-�dN:��b��I4��;���*]��LܩD�+S��Ш����U�T���ϨR�G+������\�Ǔ�nz4�-jN?Ců����3��Ź�O��v���.\\�v�>�Х�Rg���ע~3���j���U�s3c�VO~�N$�t�b�sxv99���ʦu��Ӌ`���wQv��V$����oQ�}�����kZ�wcӸ_i���c����s�����5�Wj�^N4;w7=��M�{XLx	J(5o$h���@)y%X�2��$[�*�78dp�F^)�N�(��@si$a��s�OVHՊ8ԯ��Wg��1]6�Q�t�.���uQ�v�O�d���a�`a~Ŧ��K�-�2���8gZu;�<��*���u:�Pδ�xi��J+�r^G�U,�<��өl��Mi�gN
�*�Y<���3yxU)�9�h�W�c�y�"��jm��(�V�T��Q�Ɋ���`.�liG�WB�i�UU.��
��E��E9����dYGJvH�����՝#G��yJ5�Bf��ShF]*$�=;4�st�]G7	D6#�a���]�:a�% rtw1Uz/&]*e�Ly�����t�t�������2鼞���X��S�o.G#��tZ�nVlq#Rut�e�Y�"�n	��KNJ5N�t�3�F���ObY_^��5CL�m�(�R��g�UQ�=[=�KZ�,��MΟ��Q;�괳�h��Г=Za6y,�W��̝�c�Mk��F�s�j�=$�S򞣺�S]��L�{�g�UQd��k�լ������������s��ӎ:���]�y���ԇ�y]wMMʜV�sJ����3�3]V���a�˹[��7� Yxd��^%2HB��^.E	��N��.~������v>m�`�^͢^eju��� ���E�֖�w�>-������WM�~�r��� �N� ���UNL'���x����[�:W?��uqJ�E4}����h���>ǟS՛QB�S�k�R����5�R�t��n�+�f��OO�N����#:ޡ�E�sݟ��ڐԷ&T��,���z}�����98�z�mBV�|���|�p��W�z�Z���z�9��P���{̉�=J�nd�|��͍u<�D����@���\Y\��k
J���LL�[�97���.\2��m?84�l���ԗtU�I�^��ܸ�N��,�/O7O���>�:�VVR�ɺk�xh^u�X����ԡ���<�}^�	O��Kfjֽ�ό���[���b�����^��=W�׈���պ���5n+�M��x��o�:�ɹ�7��W���dz��n+��,�5�z�1�|�Crˈ�V�x#ԩ�1!�wdEM��ܐ�ІQB#p�b �$�5>�$���ϱpYf��J��X�� �%X�ː5c
��!w��i}���q���m�}���6��i� �tg=���bɵ�B�*�  
F�@Iy 
@P!
�$ ��f 9/'n�A @x Ș(���J�jn �� $X<�0B� �`��tXb�Q�g�Ex0�Ěw2� |�s܏��f���Q��Z8Uo$��`�f���J��H*��|��qq2� "���CJHȴ����`9����;�
 e�=��`C�}���$^ �^�X����}�V��PN���(����6�F���{2��E��t�:T��Z)��x��`��U/��À,��I�� i���M��c��9�8Wrj]��t�s��Z� 96��j;�ن�2����NL���0ܹ� �Z���UWeff����r��[1UO���v~�u�[�"�ӅN|���b�fT �N��C�cT��˫����W����*$��T�'Mz����R�/�ͬ��qogěY�lX9�U	�i+]JR���1��,$����U��)Ҋ&d�9y�e���t��� %Zi�%nJ�^J���>��i�Ξ��*�x^��w�A�K>�p�XJ�IeY6��z:o��1����Zy[�d��?CUiŚ��eR�x
�����MV�c� ��2�UY4T��<�S�j�[>�v���/68�N��,�f�iZPp��,$�D����3��§��sM���wnX'#6EMa�i������ET�V�^ ���1��$���m&�I4�,���mG��*�G:��F����s���U%p;�/�N���T���^�f�mK�����-t.��ۋv'�Uf�+��KL�7h�ף��q�ф�\���5cn��z_cL��Yd�,4,�-���U���2����K�],{�/$i�f�`�����ŲX��X/ ^D��@�<8���"�Ȅ���@�$mr ^;����g�,�����|�D`T�~�U����ਖ਼˰EY�FV�0Wa��Ǹ}��Ո�	*@��a@��I��9bQ�m7$�a�J �d� ["d;�+K�'�� ��pK�
 �_ G��, �|�	%) !)� �%�5b,p)9�,rb
(�APBp3�ň�����>@�B�\��`"�X^B��h�;�e���	��HX �`/ �$ �(  -�� ���(nY"P#�I$�JG:�i�ysru���V�f�u6��(9W�S�v9�G�*���'�K����[$���92�.Bp��z����*|���c��ki��ܲ@V~ �+�l�]V#o���v+��o��BP�\��:�e���2�����/�.�:"4��j��:�s�Tɇ@W
�;���ғ.0Η<\���
��9-6lڤt�3�I2tT'n��R��IlӢ�Q�S�
��7�R�F�^^	.�3c�:͸9Vsu%�7�Vu�U����x��a�:W��J�k�<�qc���松�O�ο��UU-�q�V�������\X�b�|����cS�*R���[������(qF�I?��{��:t��z�
��9f�Ǭ���u+A��l�ԥ���zo�ףk�UMe���i�P�5&�Ϯo-�ԯ���z��jm].�~����[oKN?䓦������ͭ&�'���S�dJvꚧRԢ�Lr�i}7�R����U��n{�_Y�We�#�r�EtP��*}ٕ�n����F�Ӛ��t��YFh��簫R��g=��7�Q���U��99�)��w<5��<�k�W��kR���T��B�ƕ�|�mWS}l�V�n���?��~���+�/�ʿU�Х�<#󮺜�g7��7>��S֨�"��͸�ꫧ�J�O���L�2j|\Ľש�U���y8-�z���L�]K/���%-�g�����T�������tU���QZ�t���G��u��j�T�^�mNjG*�[mB�[}�qi��t���]P�&��k����VG�j���'�S�{ki$p��369}Z߱�����%��=>�S{����ϓ����y���������3�ǃկ�4X�3���;�u�!��+<�tUx9�i�j��95�n��qd&�/�rҌ�f�wS��C͉H� =���I@��Wr<��,G|�wVF^;e�%WF�y�V0���i0ԕ\Z�5k�m�J�z��Ĉ_�uk�9�F'�'�M_���TES\A�k��ú�'p=R0�������8����N���<G'�V�����O�0zڱ�py֤��5�Ƀ�nM#�k�s�A��\A�FXw�Д|/�R��s|� ��Gª���F�W��Û��S���r��E����i��ΧqU*&OV��5sb��=�JkU\�vdT(O���d�IT�j�\���<�P�f".�Ob^GGRk��4N �=;�����sZ�-X�%�t��b�k�̵�ti�9�mtc����#��e��
��sz}�KF65:KgE�UAꪛ����jt���t3��X2蹹�����֪!��u1�%�:4���'M��E&`�_��_�?E��ӧ���(k�YO����j.t�U�D�3ɽ;֓"1�Z�;W���r��o�*��T������}8|���O~�'���f�^	0��*���lET97�*O:w%U��1u�U�(کw<+Q��KY�5��p��x֫�����G��G����CtVEʹ��LAz���j�:s6,��
Y]��Q�L �؃�^��r�G�=��2�x:zr��V�����p�)���'K�S���K�S"�������K�ln�'fޒ���$Uvu��!%#ӝۓJ��I�:��bz.�T��]m�\ON�){�R8u�ɗS��OOC�fC�H�����Yrf�fܧ�e�5���&]m�7��3|� �F��R~�@�pG���E�$<�`�3~��yň� �B�b;|�	�W� �"H��  ��~`W�I&[ h�&X��W0'�� ��*3����]���iS޴rs'��)�P�J� �!G�����K��l�*4��M���\ p@ �  `!$�ܢ&���pD� H� �#Ő/7C�0��W�c��,~� H�b `D�
�Gp@p� p.����7`�S�qؘ,���x�9�[�#�Fj��8U3��y8V��)Jx4��?ɵe 12D�����y��> 5ْ�lQ�'��K	���'�"}��J� <49�̓�m�Arf�6���W��+2,w,� ���|qa���%Y��N,D�Ų�3�e��*���J�`sv°�ɥɪ��sw��ڪ)HK���ܲ�2�s���n1'�q�
@ƣ��z��+u>n�7*���NR%Ns��E����� �w���+�^��̷�n����wA˫!�ԡ�],m]%c]MR�E�)����ͬ�7�%Trr�i<��\���"N1+��P��
�Sv�t�?���}��:Je`��YX4܏+��I�D&�OK�Jf��V���*'B�X=��#�y�q��2�i���-4�	���� ���Eٻ�:%
�!��_�Q���`�Qdt��8�����{�t/7=4�M����9�<�Ir�b�	m��*~�ݑQw1n�G��4��U5]a�F�t�G�Ӿ�ɇwy70Әg���jT��N��Eщ������L='�2��U6�%Wn�u`uwPp�n�*�c�f,9LY�U�d�ȭ��s9�/RK��:s��o��M'�\�꼤��F0��y+��Ռ��J,c��/S��˥~j��S�&����b��%7��?i��l�K��^S$KM%%w\ t�N��<O%S��\��+�+чcؔ�2B�\j</Fy������J�iО.�z1�Z.i��oӘ\�}%zZ�%N{��\��������k�3]r�r]©|�vU&�u'ɥ[\��Vrj{z��XU]ʙ���q�m�"I�=ː+a�M���jx� &���?�Iܨ�ùp��Î�����$�|Z�H�����'%�e����r�S���� ���$"B��*�H8Pn��B�Ud@��3a�p�Y �`�g�`.K���\��@"��*W D�� p� 9���Hx�N��$߰*S� e��P�[�K�E���%�$r��$��2A P�$� �@F�j ��.2xl%y�����  � 0Q��Tn#� �Iw�=��$�K1U](��R�ƭe0�Uj:���7^�9�7d�fL�~
+�N,V��cU}W�έV����q�5�S�7.d�`���7`����SGS��ɛ�t䐀�XI�D�9� X�IA)F�~���I�Z����nI1g V�w�[� �R�0����\09%�]��i��] pT�ܰvt�L��`9��dۦ����<d�-(��@e(F������ ���p�Y�*R���_'^�pb��S�=Jz�}]�����ji:|���֓w9�Q�=�^Z�<���8�F��^=Z��4�j����G^���s�zsu:��!�p�;H��=[]���QU�Rk�_'�{�l,��e��6>����D�_43�j�~OZ�:�U4��Wo�z�t�ԓ]�<�|_N�������4�m�3WS�'�8U�{���KN�`�����^`��7*FV�)~`�EهJH�6R1u륮���\�8�U� ��Ml���(s����=���LE��RݍEp��vg&� qWfe����&j*k,�_�Ddx�}�N�e��`ԩ;�(��P���^�{�Z�]W�y�^9,�����-F���~�VQ�ks�3��	�7K�:���.�3cR�	�J��I��3b��Q��_� H�YP��+��FQ���1��S�����k�O^�� �{WVy8n���FN���s���5ɴ���*Q���8�n�be`��&�F��.�a�4������+�$��F�K+�?p����+�p@=�7*R�e��*�����p�&[��Z�f���4���A\��jc�ɚ���$�I5��NLԔ"�8h������Ø��b�DAj��i�U���(�j.Iq�=4�5��j'J�x��2j���>�5�:��{�:�[��ju	��7ȥ���&�]�1���|'���>��Κ����,�$�t�n3sV�8��OV��=n&�sR�%�k�өM\�mv>]�MS0�n��t�X�Ř���'����SR��$͊���>M��_��n�Ly�ZR�'*��N)=W�i���]G��7E�� �jS����ZuE�J857�Bhӡ��ԗF6#_�.�M�ڄe�>�WuEG�&*��;�H�|,y���Q�D�H��;��O���6<Θ�F~��=�&zmצ|��RoiO��=��B��ډ�Q�m�L}�!Ј�LS=*��s�]�7�����s��o���=f�1��Q��j��m���Ӊ=�L�/��ٓ�y�L/8I����Ups&*�(�Qσ5U,�"�d����:�s���a7�Ϫę"�u�j5i8�y{�֩���JO7Qf�{����PxJ��a��	�Z�͜;��Mu�5���/��C�|ߨ��W��^襹��f �kݝUu:d�k�E�pru6f^X��WU<�:��9� a��RT#=f=�015�[c���π�(��g�6��vvp*�ZO$W YJ��	����0�U�/ ���g��7�,HN�\,�&�� &��W&.&�V3��
@E�.�L1O�M���UI%]s�Hv\
�~̄���|�('�$	��ø�������e9	�[��L��H���� @����R���>��M>�S��K_��� -IX�F�&�Vg� ��^ `HE Đ\ȋ@H0�B��؎� I,[� �F� �C�#��`���'�*��&��' ^	%d�~IZ��X�$�X�Ae��Tf�w<��S�:��`��b+J��&iQ,�h��0��$."0Ii؀��| �ʽ�8��9�W�"�'�q�d�|�͖CPHBo'V�9� #6�?..�70c%V�m��R�m�`�7 ڑopչ
� 3�ʕ�Y��F��
�<�aZ�mC��+��3�WJF~ ���=��+��ի�@gSZS�y����Uw�s��.Nm�ȕ�fjaW~�����je���6(:���L�$��x%���o�:mstiʕ(iϼ��E-��=z4�{�֝5Jd�<�8�?&j�Q��UE��yꥶ�s5����r��cP�$^T،Nf��j��a˟$M�tȏv�M+���h>u:���N��MJԯz}M"guӆn���4ֺ��8�J<��D�9�N�G�V^��(�Q*8GJT)lUM�`�-TK�Υ�����xu5�\	jQ.��M<��Ry�F��\��+����<v��h�(�Y�R�����Ks����u5�tQЗ&#̛U'�EJ��.��<`�5G7Mw�
�V�D3����Ҡ�7*� IT��,W��Y�2p�J�5)Yб�s/N���.P�ª.��ݩ��
5Zn%X#�:�OR/Ԟd㨜L32�� r������L(�����R�k���yJ�Z�t�^^Y[�(wL�s=�S��+r��܌7=��
��y4�,d�֓��>��b��o�����PZ��;�VPk�,�Z�r��ԪR���O-��Eؔj�-�EI�)�A)�bsg$
�l��B�ԯJ2�T�܏7R��}+��",��6�m�eS����D���e9B���]UV4��,��$�rUBw�a��%\�LҪ�m�c-�� k �V�*ve
��k��� ry � ���X��A����Ly#�����$����i5���.�X#�!��w�F�Z�L;��aZP��n�f ��ؖ@Q�B� !%�\!t�	�< /x!V@2͉�G�/�^e+�4�$��Q��&?ܤ� ��#}���f����6�T X�$�@		 NAR�dH�U���Y 
@��� ��n  $� O�h Ob	��+�VGj�pJ�a���W��m�U])�����mN�.O���B�|����R>��S(��[�J�M�������M~��SW(�����w�[��������Sk�؍d���uU���t^�[Jԡ���V�	�ǂ�P�u�t� �Q?t)&�t�"W8� ]�t[�'��F�U_KW0���V�~�����1V���0��mC��Vnn���G�"o�K&i��蓌n���6"�W�
�I4a+)4��ea 'M�ܕ$i��e�L��t���b��~�b!ܩIaɥlR,e��6�e&���I+��bt��9��e�*���Q���c'H����A�m�ܑ{���i(�J���E̹���
�rwnNR6�rtidʥ\2&�N���ζ�R�B�no���?=���=Ͻ�ԥiU���ӪDJu*L��27o$n`�-ܓ�E���_��,A�jt���˦ͨ>}]�O�3��:��t�hԦY��E
j�$|M-wB�^�U�lr���ףZ�GÓ�o¢�M�P�����*�2^1gz�m��U�i�U^N������z�ݖ�Mj����kid+��i*h<5��O�N�יV1��N����q��di�{uv�.��g�UѭZK]��-��3�z�<���բ��G�e�c��/�4����3H$1�wVq"��j����MJj���ڧ�f��nltNpq�4�����1Z��8P{}!�Sw0�]����� �4�3������S�yVV��g�;GF}��c�Г��p��o�ԯ:_��^	N¼���U��d�R�_%EN�C��6��%�{8 �ܼ��Ɇ��|��� �Z�rf,G�'�;���M5qp�	����4V�V2�`'�/vdj�pQ:S2Ս��ˉ�
�JL<J6���m>t��R�-8(����R::o�a��Q�(+Rj�(���Q8�����W:S[��gɤ��.��kO��U/&�Ԅ�#��Rt���6��j��+���O@�U�'!������rY�+\#���3�Ã�� %�Uj5�����z�fg_��f��+�wo�Zz��j�ٞũMIC��S���k������ß���T���w>V���궪t��KO_OUM'�q����_ơ����f����v,&���U e���Um��'ie����bmtE�nǭ�I�����-;�����S��k��,��U7$8��R���Vv4�G��L�i�p���F:$á`��bt�u1ª-|Цu&�t��֍�=�J�.9-6�I�g��?��e&0ɫ����n�;�~�|_S�U�L�(��[���s�=�����jc��,�Y$e������X�J9�3.��u�ґ�[Zt�欒�1�zjd錟B�:c�G7�n��cя��7���f �� K,I ��L� ������:��p7%�9�]I���5�$���-5�G�|�t���v&I,LY�I2�{y���� ;�� x#�
Ұ�Ep�*s��e[�PlA&f
�Yw%�2���&H�1��~H9N'� n�̙�3��$$\(�$\�y,��0,�p��I\����A,�H�ː($�
��qi$��<C@5ŰRO�r��s�IwUt~��f���ڍp���3�߃�zvj<�[��������d��d��=����a�M�`��!�a� X$ )X0!P'� @K�p�d ��]�������#݀`�.� ����@�E�GS@&lɅb��w��30��vV e�5̙��Ǳ��gZ�9u����QiS,��0�r�rE���9��K��� |rKv�m�M���P"o�e`|\�A$��w"Vp���qu��SM�;�qaͮ���(�+� ��"�_%��ۀy$��*�"]��ț�L-%�,?��]x��q8���py5jJֱ�R���<z�U]V@a�۱͹Q�%����+�	U� �qM���b��Ħ�6��Cn�J,TE=P�-�p�� :�Q�W��F������$���Ql�Y]4�,�m2��OU�T�ȂGڌU��p�;Suit�|���~��}
��V� c����g�y!X�gj��~䯉8ԝڪ|A���Ȕq3��y��ȉ-U3�[U$��5�I����.�ڝz��ݎ�k�����t_���:Y��N���ҝe)U��*���L�WS�����t�n*�OWS��۹��v�&j�78�^��Zt��'���IS�䦞�ԿS�5t��Y}5:tn%p�mK��2J[v��ј7U	%ՒQR�Z�xH��/%�M����0"m'Du�٨;4��szj���5:�Ș�c�дKG{ylb�Q8L��z�O=-�}8��K����ي���q&�e�bUKO��r�E4�Ju��+��M�y1��~lMM�J&N�4�\F��Na��Jt�D��k���Cʲ=ժb"Ǟ�e4Q�V�X4�/����c�+n��î��r��J����;��Z��e���
��ԗ)�V��Y"�ve>�wh�U�&�M0ׯOZ,��t��ݜ��(թ/�f��Ц�I�jU>Ǌ�F����J�>Y�k]�JrKϹ���y7EJ�,��&��*I)Ug��t�ʢ �g���F&�m��ȼ ��rT�����"e	����MSk3>B�7J��U)�1l��%ߩ<�I���O%�x�ͬT����\|��`:������� ���"��R ��nHT��!�@P�FԆ���6�$��@_���D��5* q,������OC����	���#�V	� �ŉ�YL����� ^;������E��G8]D$X�� &�/tT�� H�
�"�� ���Tʈ& �R ���| ���y�P�	 jH�j,QU� *$�1�� H+'��'7(��
ȲF f�� ����fK&2�x�;��0$�\ #e$H!؏�d s�vf����I9�y��Q�87UR��V�)�%�]|�½�59�k��{��N�XE��u�5���zbs�G���*b�?�Z=M�|>���.%{�y*��i�g?�5R�s'�^��U�F��hT�T1�*��[�s��ҭ]��}mպZ�؍e�]1�:j�LE}M���գ��G7��yǁ�>+ꌹ"u%2��Ɗ�+i� ᩿��y>Wթ8ꨫs���q��镬5*�;S�ԃ����:�P�/��a�~��F�oi\��� ��R�Ry;ѿ�p��iЩ7����N�T�B�ѣ{*�Os��Sig��~H�d�}U��k��6�|uMY�zj_�Q1_aki��:r�>BU��n�J�Yd��ԕ�i>o׭%ɵ���ǹ+�I%��� R�k��e�ʢ{!U4Ğ?��ʑ�j�Ǫ����'�n���;�:�����qs�ס��LGR,�^$�K���b�j��7�4��(�̳9v6��P��"`>���sjT#8��V��ǃw�ӡUu�J��Y8W���[������N��R�x<���Wo��&�ާ�S/��<z��]O'���^�r��5���שK�r��Tδ�^	��P�������������a@M�8���R��89�в���.�:z�i5]�~��HG�O�Z[�x1��:��ND�ϛ��t��|��=jkQL6s���WU��U�߂Lqs4�LσKGN�|�UPtU�ɋ�^�/cE#�F��GB�1e����Fey8ףQ�u(�d�5Ъo�+X��Evo�X�};�N�Mg�^�y|��n�Ѻv˛�Ai��i���b��g1���.>�� i�](�B'���}K��Y��=5�cʜ;���� ̨��5T:os�����7�����k���A�[_��~���6�>6���z�iR%ĳ��ɮg�Wv)�A�D3�lH쇟�T�|'ء�eX�p����T;��wB�bg8O��D�������Q]���ľ'�fT�;� �N�� 4�b{d����x��39�v�U�eq�I\��&�ɘ� ˼I��	`0լb�eiJn�b��v(����������r�M�Sɶ�sR0����h�H��	3�{@�������Q*�FmA�֠�U�����͈ꤊ�>	��)3i�e&�g��yJN�6�R"����wg�U��c���8��H�R���e���s�i�u��U�T�SL�DhY*Kc�m�^�aj�]��v��k���?%;�Q��Zg���o���i�LGc�T�Ӆ[��>���hꤺ������X�;��i�,��^2n9��L��]�V�C��h9զ�]����^����'�gj�T�����yX2�}Z
�y��i3Z��Y
�pIi���]R�i�4�=��Uؾ�M��DW<^��t}�=�X1����f��Y����Z�Ԃ�[�>�K��=��俪A�J�$�9��ƛ�f��jP�OҚ��_���.�*���w���U���ӫOY%��M��3�A�������4��JFsWs��su�z�TK7Mԣ*��0�=���N)mB�?'�Ukk}=4�W~�t� -��T���7>��M��7�ʨ�0TX���^	% _p$���"(H�@U��s�t�pI�le�d�w ���-�d��2�؍��d�c��L�P�I$�YM���2�� �ؓ$D�ER����� ^�mnI�"I0��rE� ( -�lg���2/ �D�`0���d[�&�^@��0��+�� �(�`~I��,I��,\��i��x���@��~���GSl�k���S������������]
�5���,Տ��Hq��}*u�)���ʹH�$$/29�H� $ `@dr=�] K�G$ �E�#��U�#G��o�0�|�m��XV@L� �3�D�`�y#k�	5�a��|W�ȹ2�+ Hd^K�{`��F�ĐZ�k��J��o�N�Wb$j@�}�'!��r;���+)�E�Y C� ��rXO�5��|���M�c�
�NZ�Z���
��d���<�R�0�v�{��
�>��oR�e��9�HP�˸������nڧ���]��S��^������.&7{�if�*�}א#�C9��iK6��9���w�6��5�T����#i/(��4Gn ����qQ?@=�j�c,�P�H�:Z�.0{���&��\O+䗛�R�5�n���|�V���a֒�?2I�N�f�1�ꝜbL����zK��<��C��p{Ҕ�Jir���%�����\A�t�o(������S���χ�Z5/�*�s�ϩ��o�P�R��x|���Z�t+N�J���h�n.mi����<>:��� N�p��g�Sl
��ʤ�O��Ϫr�KR� ��+N��.>�/(�O���'�m�R�qiQ�RF�6j�|Jv�6��Z��>�ѧ�~���7W.S��-�M�D{Z�Ó��6�ZJ.$�>�CNөS�ӎ���4�>��(.S�J�)GM�T�zjo�>��T����wC=�WӲ<��:������/��	p���N��:ӣ��<Ui$���� |ڴ�FUi8�7>���'�\)�ki>�1Fٺ��~��-_�-:ҕ��D�%�*�Z�iWO'߫B�x���ҖG�{Z�\{7�ey>��У2e��S(�殃�t�M�4h:�.������Ӓӱ�%	[�4���h��J��[K�u6�ڤ�<�Ӧ��,����5M�Lkm�	I��(����&����N�.p_P��t����_���ԣ���u��Ie���N����mJ����U��p�!��ZTTv�NoI����ɩ�jqjs�QS�$Zm䋭*�v��]�f��Y]�W�7Կ�B95Ҳ)���}�ֿ�\H��x4,7�����0���%��� X|x��i���?�D+�(� =��&
݀�_#� m4�S����lH�J��Qn:��7H#ҪE�8&��mU$$�����XJ� y�NJ&y %��Y��G�+
�#�753s"d"B)��|���c
�8"�<�L�n\2_�Ot���xHJ��ذ�_r�Q�F�}�'k�,@J�Ó@��$b@��3%��
d�q \`O�C,�� ���0,�rOl ��(
�܈~�:�����d�Y �0� ^	��GH��b� �C � ��A%��X�2 p���ƣ�>~ṹ��p����U9(��g�w2�EMr|� P��Ӝ�,T�l�T7�?[}[�m�7��j2�
��ԩ�<�z�=Jfݎ� �7i_t]��\ɟ�����WIӕo E[X��z�O���>�t��N�R�T����Us(��K�����^����t^�Rq�zs��MS }Z}Nץ~�J}OM�j��|1+�k�ӼҮa��ͽƃWh��ԚH�U'�0��U[w�J��4��K�?8�k�pinuU�jF�С������p���ou�mM?Z}CV/[M�}_�m�5m��xi�:���G�T�ꠟk�CЋ�oTY^�Kr��>���fI���z/����z�҄�Pn�mE=H/����!��='��	ӧT���2�g���:}6`׃���ˢ��>�Z�a�Z.���U.��U�\ݸ�z� �nm&բ���F�din��7V֤����y�`���h�4�A�U�OA�9�
�!�m;�U��S�KS0|�4*����i҉L}�K]�����7�+y�t鮝;�s���o��,�k�o�_R��ӅI�575�ܶ�=N�=��3j�ܓܗ��5�;R�0�Zhm�Co�η5J�}}��CI'ҟ�kS��{=j��.KV��?MUztS��??��U���u��)H7+& >�&�"���D	��ch6d�XN� i>J���p��Mi�U��Ӓr&]�bˏ�����O'���[��+9NF��Ws�\:���}J��M5sϧ�N�UI�y\����u���ҍWN��WRUT�ɚ־��W��.ǙjF'��F��x�s��:0j�Bwf�T���Ge+����4���2�0�Y�;r��b���*R��<������\L��٪i���c�����-XQ�]I�y9�*�\6rV��I�&YaI%@y���-�5$x4�ərh���:S�G W�9�	�y3S�Q�>L�����d��x�+_"e�L��#�W	0�&ŲWɚ��(��'�n�@7n�m���.��,|��� ,�F�j��j�|��bT���da�iyu��X���b9X(��f^-��P� �s�*3����i�xEA����N=��,���Q��s�{�����o�w͍T�s�X���Z�ΫQ5'�����Ru��f��u�I_Χ]�'}M�?J��b��ߨΫ�l�+��]MgR�s�u�9�Zfd�$�`�����j��k�H��oP�ш�Wf}]����mI����*n����N���?e��ӭM4up�Q��Φ�N��>����L-j%wG�����~~Y_w�vy���d�+_'���\�l���R;"��4���r��'�A�̣�ZT���������v�����6?�O��M`�"�^�ŏ��"M�-a��b����*��Ob�k�[�޷���PMku�������/ �H�F�E�ȭ���f��ե\�M\����AF�֚]J����Q���*�������B���L]�}W��W�:��]:T�N�K��}��]�����Z�jk.�V�����)�<��Ǭ׶Ҋ+���fd���s1��k���Cj�]�����v��57:�jj��u9m����c�
�����n��#,ާ�f%��P 
	�@Y)
�F��s��pA�afIfL�`n��sN�VЛ��#�
��l�� ��$aG2�� �R8%� ,�$�@K&@D�D�B�%�D؎�,Ap(�	,{�f�!5� �p�;��(
F���� II0�����H�{�nX��p%I�Oi��u�S�=Z^���4���"�mxf�O����}R�u(>���m�iԺ�ܘ�$k��婢��J�[~�����֡-*�M����z}
:hѢ�0���V��
��zx�CF�h\#M��� q`  �� 2Ǹ N�H��8I
� `���r�$�M� , ��`!/���)^ ��'�@�Y�21$�@�e�W��^Mqt<c3y��H���6�F�_)`�I�ʼ;�����C�@����~���dr�g���a~�pL bn{�܀���`�����H����	��$E�G�@��'0���V��Dd�����n�Ż;ds.����;���6�@�Ō����`��-w�b莬 J�S�N��6���MJ�nv9�fS�I���I,\ĩ~�~S�c���T'o&_�  ZZ3�24����ܯ�J0�s㒡�)��\E�6����+�2�]�#��,�3�ֲm�px��r�m���:Q�껱��U��5�V�D�l굺����Tԝ)�p����Օ�KRq��Ԅ��v��&U�U������1c�����B=��R��*�Fd�J�F���}
uiO#�Ҫ���R1!�֥���S��f�mj����Z���\�Z�7`}~��]3�|��]��G�Td��L�e�Jҙ��ymɕ�\��~�}�]3��4�tό�u���U3��}�������G�[��{�Ԯ��*>�Z�_����mJ�[�?��U8n���2ij(�G�[����L� �+��&��u��ˮ�������r][�/�S_ꦣ�
�x>
�t�R�M� �~�7�M}δ�\�Rnoa� ��vk��e�J�>-����� M�k�*�,�Jm��-���B6�A+����U
�G����I������v��cr��<���V��3�=?ҼXĞ�)Ŋ�������;4_�GdrZ��j�KM��jҥ��L}
b�\��Q%Uupz��N��NoeGO�]�oU7K�"��Q���T٪N��EVX�>�I#%����ƫ��X�����P���h�2駔Fq�56:�&c��I��D6�E��RO��[>�̦H��.�$��miy�q�kMN�� �y��^�j:S�r�J�>Φ�Ct���d���}�깵��t�w�e����Z.K�t3�����\2e{�ˀK�D�V��'|�C]�7k@���$���*��R�fI�H������3RY*v�6�ro��9�ܩ��:�RGJ[|�t��5@�+|:ͪ�r#�8�P�sU@�A%<�Jڒp#�>�y"(��
��-�<!���D��̀��I1��nLmd
��
�&���2Tӵ��ew(�i���Op6����u#]K���p�>Nuj)�ɗ�B���,�瞭��G��JI|��̞�Ѧ�K�3� �Vu�����l|�����x%^��O���VSE��~������S�K�%�^dzփ�j;ɷ�;t�ͥ����A���K�v�֤��m����_����r���S�{t�jQ����DjQ����<�w��+F� ��p�J{v�d浨qtk���0jn�MY�>P͠ʭ7+��X3��x��2�`j�̗�%Lë�Lr93�l�@�����M(�6�H''5��@��NU��O����ň7$�����pf|	�5,��ܝJl��dm&25!�s����py�h]7(����i}�j�o���G��ʋ�%~W]}��ǜA����N��pm���r�IEUUJ�
���̸؃�֯�������#x����̫y��K^O4J#�����rmo�|؟�p>��QS7�f�]��'T]�v�ΛYC�i�?r>��d��]]��}t;M���'ƧZ��ҝ�}H�����V�� �m.����>��t7UJ{V�T�S�b��N�h9W�گ���}OB��:ӽЫ��E|��:�KF�S��ik�U�SN�S>Zu�v�a}D��~��tiԮ��I���U��ԙ�֥欟i�4�T���e�S���[�TӚ��^����{���r��*�:��`r��+�\��N])#������ï���S���Uz��k�t[�X�W,b�~�o4��5N��jUH��ԩ(L}z��&/��I�Ѧ���ղM�k�Zi�r<��kw���L������P��������5*n��<��g)zj�N�2�{�#%`n�m��WY�J�v�Iֺ�~�g���B���+R<;oGp�Ԥ�:{Z4�DA�{�Z����ѫ�]&G���	g��IĴ:t��^T�.Tv�����^�S��M4kBw5�=<)͇$���9��������ǰa;9țȂ
��<X�� 1����D���Fӂ����b+�:�M�?'�Cu5G�x����K̭α���TXK��i�+���K]T�,�x�Iֽ]|2�TNO)�I��i馾�:Ө�O'S�-5�f��=��g�r��M���g;ˤ�z�N��i�nA�kGW,�܍�1�\5N�O���8�_'Zf	G���YƖ�蝌b�r��6:��$��U#d�q�5����x8'%�B+��K`f���Ҁ嬚�d���_dX�Gݨ`e��sಗ(�2Y�,If�s5�Z�YY2�T:���8�&�+�*��;�5.^ʰ�\"�vOj��9�8��ׂ��8�x� ;�9�4��ā�rg�Z$��Q��e�j�$��O��NN�.L4�(��cGJ�s5(P&e�6�̼�FZ����S:ԧؓ6��鹇L����HԬ��Z;::`Ԭ��r�k��4�!� D$de�@��	Eh0a7��07F���m3�m�[WJz�ϘD�&z�_֧v?U��MeQS��C��J��׶�]*������� �����~�wW��ޯ���:�c���F��*��t�sg��V��_q�-������:'�\]ܓy`c龆��MY���r�����m��~fo���_Q��R>����SV�]GUO,#�&G��֙�2�f���/�d�I��5!r��봮�U᳜�z��:U���SR�W5���BŃ4�ʈ��K�h�5KM~z�gR������D<X� $���X!y ) DY���M�0�6$�ArS( Y�pg� R���l
� ���F���`�������  \;�b@`pq`*`���p[��"<��Ib� _r<8�,��TijjZ�~����֣�T��l���Y��cG�5����>~���*W�����'1����T�7N����i��#�>���)���=TmthV�X�����������Ʀh��=�>�[}Q�~�QE)5J�b�.���������T��?'�O���~]4����S�7�Z����ӥC�G���jD���_uq�K�I�	��B���9��j�s�,�1�sRY��;�r<	J%Ӊ5�y��N�5+3J��|��ՙҍz��Q����p;�CW;ѯMJ��5�Vo5ղ&©5�R��$;�r��䑐���I M %�Y�($� ����2���� E��_� � 9�!�����dM��2p�r;��	��!�e��G I�J�+��5�T���Z���\G���.K�@%�TI�����i�1��M�	7��J�`�+�ɟ6`'�}�P,��v�b1n� ,��� 5�[�RM�H�9,.�́��E1$�K ~��{�:���܍�L"Bj�$��;��b䜲�&#6������o��YJ�ϭK�Wh���&j��Һf^U9 �qfa������x��"pFҷ%��f*X�F*U���R�jpa��#�Pv|�jj� �j��J�%R� )C�x#�n����m���i�;�T��G�|^��:�Stzi��x�~�J*�3���t���w71�8SSQ{�N䝖:�qRI��0��͹*�;����+ǖ��M`�R�YS���^�D�_�/JvH�9t� �-ؑō�\�N�O sT��¡[����M�n2D>��t]u]m�qbSw=��ҥM��J^M�)����T�ϡe����^KW��GN򤣅[k��j���}*t���QX�c�=����[;���}%���1|����j��+F�7c�W����|{o�M�����U���wM�}����b�^�-�2_�[�L�U���}��YK&^�]��K�|��"�Q�UIe��U������8/�e|����J�k����{+�lI�D2}�^E�ZsC����N�'�m]-����uL�%�>�{��b������_�kj���۷\9�M��{]�Yҝ���o�L�-I��>ͯ~���N���vn�PO��s�-'1{��Zmt���j�����+����*�>UM0�ju)R�����T�~��|)�Je��5)WD����5S2��N%I���7N��<�5_eT�e����o>�_��w���k���� R�n���O���S�pu�t���
�Bx#�3zw.^M�k���}b��7�K:*��%32�s�*V� a6&.p�����DM��^��,�.o%I�r)]��,c�+��FʚH����/b<��"b������L�䂷����,���ɺj}�Vઢ��Ή� �l�Z����%N�qU��:+\�S���
�qԧ i�Tsz����QM�J}�=$m`�׾Ӣ�WLxg�S��)n+��>�u,3�����*�ABvM��G�<�+�n�����Q���_�뺟S����U-OR�f^�)Ĩ�~3S׵�N88?V֭ê"��_���'�{�%S���J�S^��ԩ����S&����U^�����Jzԟ�{�gd��2�z���~����8u�������	����R�ש���gW���W��u?h/ʪk�?�r�M��%�_����t�^Y����W�\�����q"k���[��M광ίV�T��F|��P#�15�*�j�s�����7z�~珙y�\5�{�H��#w[� ��ur��mK��^��SQ-{��<꩹e�0�e�TY�����g
�`:�f��k�r������R؂-WNM�N�`z�N�*��ݪ��yUM��r��ުp�*�N������\���H5�תn�P��:S����o���I�b��i����4׃ѧ��YU�S� c�a��q����Q���\U�n�zt� �T���N��&.�uO��_���V����?-j�?������]v�ݼ�5��ޕx�>,o꧃�ޞ�_N��թG��O��P��,����>�+�G���:��?�gqU��b�Uש̓ɯ۽֚�J�:����i�O�U��j:�9�mV���Ըk�_�=	k�S����]�/��Z���Z����3.���8�����;jf5i~�?���8�P~%jU�u�,�������~dO����_S�*����^����Ō��y�?���6�_���a��?�+�{�� ��̶~6� ����k�������ݼ'Փ�j��%����0���m�������R�?���U\�d�����4�SF-Zg�u/sk_V�62��;�*���O����V�����uV5*�F���*�rj�}�Z?G�k�S���e���ˆ�C�ա6����֫ө,3�U��噫z�Z��������빩���i�)����F�S &�X3xD܉�]��̕ܗ��v�'�,�2�{���8dO n��rF�i���qJG�%S���j}�-�{KVym�&���Ux�ҥ�+UTZ��N�����:b��t�uiI*�{�o�鞚���P�e��k�O���R��z�VM;<B�5�W�^��>�K�Y>2W�����Uiw��~��M.�8>.��h���5�e)�GÛ����)�
�4N�-�aQ�P�I+���{�>��ɺ�!BrZ�����꺰s�����;�9#d�7M5T�w�J�z��U��n�����:��z�Wp��u%fU�Z��U��Bik v��Q;��k}�m�|�MI5q��+��rϟ���*�,���q�9Cc'q��"��ObO h�D��M��O��o�� 9$�`+�0����L��pA�p�ey-�pi8f$��m\��t�ba8hb��h���z�Ԧ�&$��Qݣ�\k|���cS�KqKJY��LA�󎒺͍Q_'$�*�A���U�2+]JN
���N������-rI��衬�N>�q�D���\�O�t���ja+�N/h9S�m�����9ri�Vra/���F��F��G1܎̱�2��Ay��U?l��%�Lc�>�k�4���S�"r�*��WypnT͛#��i/qSV(õ''��ptnI��K&�%�.f?`	��H�,�.�\�&y�������^I* ,��͈�sb��ݭ�8J�2����M�R��,�MTX����e�ܭ�ɇ��G�0�㱦�!QΩ0�ͷɆQΫ�,��d�ː�͘� G�e���QQ�2����H�2Ϳk�����Df�c,�$A�-�Q9#F�4H�Q
�+���;6$���zn�oY$����OW�� ��}:|v���j�J:�Z��?�wh���^ǫ�3�:���j"(�!rP�՚}G٧��V[}�:|_�9���M)4��Q�L�<kl�"`0��D,��DJXB�&����(�PT��2�JiJ�@����T겲F_����25X�5��T��� ����8.( HE R F�v1�H��0� �{�  ��# T� U��r12�2;�9
   �HY �VŅ� ��y����ii��5q�v�mSW:ӳ�߂z�漹��c�Q�T�?�K�7�O��jҭ�;�Ce�����Z|��ҧ�(����4�%	������G��=_�T߱���=���E���]\�Nw��q#�-8Ge�Jj$���Z�ݗ[w#��h���%XLSy'�	Y�� �P܌\�7l���Lܳܙe~�oubG���I��+����>�}�%E�䄮F�ș�>�eZ���Ņ��Q�iN�{���������}U�K��T�]I��mr�Ӯ�qss�/�����N◓Z���u)�Yɩ+"
B�d# 
N  <�H8�y B�����Re��`/���H#,���	�� ����	�< �&Yf� �P�f�����S�)\Un��{�������[��K�j������� �$s�d�� �NFtH��H����2��@MI+ydnlg����� E��!B,��y-��X3<�_潈��� �8�	B��%��~ 7܌JDr�x#�	d;(�G�����I��&�'b4�Ә��Ԧ��Ըppԥ�G����i9�%I�U\�S�+�pbl�6��pߐ�?c<>�-��� �r���>��7ܒ� ��=��V*%�$vy*�=̫��
�F����i�*Y�Wz9�ڋgs�SL��p��5��w:�ҕe�o�Pr�cM��Ui��d�#��51�5�mUdyۅu)s�Y�'�����j�v��:��ƺ�J�7>D���U-$T�±㢸���Ռ;�jw/b����I�ƝY�&ֲ�<���N�&�3�R�J�9Pmj*���G*���H�J�t�U��7�=Q�ᨁ<�V����vfĴ,����`��.:d��n��"��9�MÙ
Rq�:ʿ$Q��m��n�ԬX;�����@ڡG��V�*�\���]	eH��gU)ɮd�/F��LU��������G��m�?B���g&SK(�8=�)\���Տ���cة��R��{iH�D{��Vh�c��i��+kJ�H�Np������=�V�'�O}����|��_c��eW>�+���&��>=[
��q� ��V�P�}�B���j{�1�?��D���ETJ�.��z*/s���U����]U�eMS�T��Ыl����R�9�vż	6�(�y,���8�(X�lL%��S���B˒6��ȞdL��À4��&�#��|�nĀyQ�wPQ�N�@�!)v$٨��i��9˼�� T�N��{8)�$
��uD�˩S�jk��wR��ƻw<Z����ٞoZ�Y'>&��\;��$���u�gQږ�MOQ�V��SE�_���4h�K��j��)�m��
��*w���6�˩�,M~�W�0�U��ū���ږ���Ȳ^MHk��z��mJ���<���z�-F�$���Qb�k�����ɚ��Z[�9u��K�,��#Rږ����G7S
��A�\���ϩ�&�s�Q�Q$���Ӫ��o)�_u�>�ua85�%O)؃����x��c����2�9c������>����;ªJ[�L|�jsE��}z}.������7MY�1�im�K�[vM���ӴR�i�h�0���c�_GR�5�>�z\3���i�jSgE�M-E(z<�2����^0n�L֪�ԟ��әt�k�V����S�:�v�ֿ43�t��O�4����k\�/�&��}�v-�1�Բ�{��Es��ֲq,�Z�"鏆�����.�T*��V�B���7�t�^��l�c�?Eի���Y.�~��J�^LW�Em/�������R���l��z��n���z�	>�51�k��ЖN/N�mR=����	c��z��<�].`*`�|QF_ۄL�6��7���d�,2$�z�iU:-:uU��ʤ�ͨ͠�N��~V��h��4���jڷ��UjR�Ϋs��*�MR��U�U-8f�����t[�*_q���M���EI�A:(jTO`�.�j]���a��QӒt��-d*�@EMupo���eK�u��G����Ju1hj����"�Ԇ�-����6z�k�{�{i��־�i�X���Z���� B�+�8���[�JT{X?Lۻ�"{L~SZ���T�3�/���0�#n񤆘�_K�m�?kW��ڽ	vH�_���V�[�1��� /ڎm�7?cW��'/��j��z����i��T�Y#m,wW����?��������nhvĬ�L|�&Mi�������o���ztUK��E���'�S���ڌg%��p?t,G!	� ��g���R[�кW �%2���&��g�8��	�n[;!��*I�B�4����Of�]8ݕ�קJ�r���*+��v�U�m�*���W]��/R����Z�(�J��>�K�� SN.N���/J� T��h5��4�B���u���	p{6j_W��R�v��Z-�<�>w�jΤM��N��G��ߓ���1���4��M81U]�u$�m��IP#i��9��T� �p"�BW���"C~ uUܫQ�'�G�:-gI��~� �tUw���*�NNK��0ؐ�fT؃O�����#	܀[�����H, <����	�È;�̀9,�F ��n���2��6�,��]�a]n��v��T�U��Upk73f�+�ѭMiC�:.��T�U=Z[�&�r�u�k�6��ꈃ�ԞM'��N��_��T�<ɮ$��K�R�VDC��Uδj&�s��ӭ.pmY���Q��b��җܬ�qg����MA;v$�1%���X
yFx̕8*+~l�2Y�K+"��"&�7� �	˃*S��%���o%��i�)Dm���e� �it�ܼܗ�a�&�(*��ʱj]�E���J�F�G63>�ie�{��P��٣? ��+��& �X���》'%�ĶPuu]��n�T�2킸�$�eF_�sO����e�^M�TL\��V�,H�Q
���i��L�I�sf��i�5*J�#��* �d�!�$IS�|�c(pi�AS���rh�zo�A�g���o��� �� ��]*Qf>IM�C��^֑S��V~JA�q�Ԣ�&�c{M�ԵT�`�i�t(Ҧ�ɗ�.���ԟ3yC����z�V�.�����Y������4����9L�#ҥ+%':��U=T�w�68߉�� ���z}�\xg���zVG^~Iӟ_�$5}��V0ș��%
YQ�-�$e���&���<���&�C� �@@�.7AP�� 8
�^�m �=�^�	  $�C`�  ��D (�%��1� B���!b�g�i��\�%�Mr��Z�N�*mcj�V���>7ϣeS��Z6k����e�����m��$n�4�sd3�C��$�R���ri,�5S%Y��.��U��̟�ڤ�n~wF��Jo?G�?N�z#Qb��$�Ɇ�O��!H���ݮ"����r&ev�
%�����,~�$L ��X�O��P��0U��=�pg��l��i27]�lur�݈������w �4������K?��U`�^�GM}�c�����~ܾ�#�,�Z���>%^�SMSU�j�������5�_���OI^���������=����UN[g��:���n�7#���Se+�0I4��I �"� ��8 �O�GpNn�x#P��!T|��`��L�lI� �@;2�Ď@/!���K��w���!>��(3��Iη,۱�P��Y�D��I��%b$�$�^�5y	[2:���e!)\��3�n�^g���'��L�N�"7r�bL9`Gub�5��?� ��mS�%� � �rH�v�h�ܦ�%����pg�G%VX��V��_��^�Z�V�.�I������^ed(��q�&i����4�V �5��u���ܶ��M��k(\\�W�׭GR���T`�9]#6�:7��w0����	�T�R�7���f���r�nw���\Ŋی��G�+rrW *���H�LS�d�:��5M� =zt�P�i�]�z6�{����y��v����i������Mv��ZcR�Qɚ)�%�z��F�"��-�߂�9�,)��L��+�}2�W��S�ٰ�D�i�w6�يk�b�[��%�C�A)�햔��m'�p�Q�0j�X��f��(״�jw-8���U��i<�$f��5;�=�^m&޺��3P�6s�n|��}�hL���|���A�U0��5�!��z�Mő�]��ɥ��|��L{:�'�I̞_�	N-zze��1ާ�t�SU�V�|��5I��Rͥ��^<!���F�EŹF:��f�����6�9�Y+� �ZP����Y���۰uZ�I�)���V��T�KS�Q׭I[�t�7*s`�'`٘}���
�7�1>��/l �I��2i^� k�D��x��9���$6�':��Gw��� {�Q��c"�u@*S�>"E��M6�pFԀFZ�A�<�[D2B��Ϲ1��݃�DW�p� ?%qU�T���%���pe���;IT$�'
�tP�N��j����f�������b�Ji��|ǫ�j�oR��Æ\M~�S�����_�QK}.���֭�u3����&�����j~8G�S�[�ry\��RY.&�U]U���b�*w���)N
���ez�˪�~N]UA�MN���i9ɗZw��np�)�}MCr]r�GU�J�E�&���H<3W��Em`��
l�Zti�8���*�GJv��\F�i��M.�������E�Yg��p���ēLy��S�Қ��H��k����Pӕ�v�KM�I(9u�AҝEԻ]��J�,�֖�/�ގ�����ק]%u$5�����Џ�p��M44�F�Q	|�I�n�����}L��ђ+��������b�iL
�5N�Y�ӭ���L��H�?S�n����Я�T���e��iW	U|3�֢}����^	���=}*)��I�5=CoL�Z���I��J�����6� �V\�?q����S�r�!��V�̞M_Q�N��įy�S�psz�w�bk�W��Tʧ���ou+�z�����#�ש9�'�C}V����fS�5�k�
�����Su�Z�͞yL���ԩ�u82�n�'8�z�.�'�:Q�ԪK�,{4}+V��~����/�������>�]t��z=��/�j��kJ�d�ڍ��wT��~�E9�}��l�%t�\~j�Oի�N�^�\��i�J4)����	;"Zc���E6Yg��I����G��S-�D�ǅl�����4�:N�_��J;F���zVڹoIO����:���S���?���v�{MOI�P����V�a�� �F?	V�_N�i��8�]<4~���U��M{5}?B�N�~���Z�e�Z������/���C<:��:TQ����1���:��n��n�v�����l��O�n;�ߑ�#�ӈd��ʰF�Y�Ou����J���npW�M}-/X����/����I����u/�ԞCw �V��z&+���-CK��ը�Nyv?�f&��C_�h�]�������F�F���P� ��5�R�\���Kw��R�6��0�����4�m&�4�?G�n��L�=�5�QSu�����;�ӥ��?5������q�N��"�k�0z��j!��>����SMN��׮Ӫ��x�� OQ�t��<��z,�OK����}e[py+W4�a��8�K�(�A6ݬ���GQ!π,^�~� NBY,���4�7�r��b�u�GV�j_�z�}+u�鴻�c�6[�l����թ'[���Z�6��UUL���oEO�t���Ҷ���ZI��}[�tt�z�Ҳ�w�Jc�Q�ӌ���3i����J�'&��� �Xl��'��d�}����Y��UU�s�u�UUS�����	YW>j���;Q��W
�:n.��9�7]T�)v�x�ש�L�^�n	�ut����0�ydh��0FŀL�r؎��1�!�L_$�� �����b��V�I� �� ��f��σt��Gk0�0Ad��jK3��$~��	���@I�6n��fR	 ��&8) D�, 䩙� ��$�O���C�9�f�"�ѧ�U��[�+�5Gtn�����.���j��/S�ŧ�¨�QZ���'Z�4�qi8�ؽ\��׮�F�;Ѩ�Of�rb�N�E]X��<�kD4��USR���󎒨VeJ2��)��N�;ࢷq��|	#���W`$ܸ���+S�D��d5) �L��ڈə]��\��pN��(��Ȑݬ��3̖![�pM� �.lҙ�$�l�-	2� ����p*� D����|`�$�Y�e� �ra�M��f�*$�0��jH�g&[���P�����6�`��k��b�L�o63��r�eب����9(��囪&L�������<��Vd��2�F����,G�P  ��>�H2Ѿ�F`�a�1��,*c,�zu��y�O��ޫ1��|~���	�	M	���VpT��� ��4�ED.ױy�v�"6ė�lG X�^����l��Km���)mvgO����>����i�k���'�p�ۃ�N�4Ձ�T�5M}�9�;27$u���V3�$B(2UP%H��L#1bCgI�༛p-�q!M��2o��%�, H$y-�2�(�u^!�C�   �����'��x  ��R�xf��Hc&�-}M�%���0vU�V�M�_J��WLD ��ܒm��I�p1!y*�lj�:n��V=ޞҡ��'�d��j�3��\~��ę�R�5�s��-�I�dF�$]�8*N,�8�AVb^lT����j��
��M��K�S)�g�%�~j�Z����?�g��U|��ئUd���H%�ȟ"�R�J��UTi����'���ҟp&R)���='\�P�ϙV�ET�qr�����f�m:��QT�XIX���<�.������@k�2�8��_��e��L�I|�4�EL)g�S�4h�\M_V�b!��T��m�L�U�ԏ���z�U-Ϲ�s�^k~K槧߯y�D�Z<�ީE4����SP�nI��9f�����u+mM�}�1�y�|�ڎ������r���Y.&�g�a!�WG�?R������V?I�j��=M����Uh!^	`@!2�   6``e @�`F �y/�FY�>�f� ��0�`8\���\����$q"ma0���*,'���2^ ���.�߱�Lp��4���nŧ�DW�Ǐ%��`�b|\��$��*���P<%G�ݏ F�O�.&���r-�6߀�$P���%v����%Q��eܔ��4��'I/�װ�@�ٓ-��D �$����Y�<�"n���G6��i��FU=��6�|ۗ;x �;37�9<A~92�)N�63+��\6��vʓ٪�l-V��AQɴ݌U-�ӳf[�e�9�K���rA���U	r�M�ܓk��e�y2�n�C�C K�l�� +M�E��&�t�<{�ZT�&����y�J����s�\kr��n����<�z�%���ӥ5��R�I֥i�l2)M.M�fEt�9�2�u�	�2r뚎�$�rZUN,5��*\Tf�3c�4��GJQq���Үn������NNr�W����ժxG���;��f�f��f�n�ʗN{���bO���iNY��9<�UUN�˱Җ�g��㿙F�=�t^�����$LtI'|�%���Ws�ZJR�6��CD��\������S�t����94����1����iԮI�QP�z�/�M]]Z�&s�ei*�k�&:-�q���M�<�/�����L{)�S~�Ӹ\3©�	�Ѯ�mL3S�<��^��I��Y<5TK�Y|����V�dU]3�纚y/[T�nY�<��Z��T��>z�����}�����V���7g�USV��:�&��^���_���ik<���<ף�~�[�j����/���^���	u��=v�����^�q)e��� ����РH��;���<� �O�}t��/��ǥNy+p�o���˩%����NL}d��U�Gq8;�+++�T��" �R��Jv�bZ`m�f{���vfST7�WD����h�e��r�y�G�&��xV�a��p|�_Tҥ4��_X�� N��d5�ޭ4�.��:f��o�����-]G�G�SqUn[s�ˉ��n=e$�7o����OV�j߹򺛥�NG�,Mzk��W3U�q�����9��:�n��j�`˭�-?u��������o��Q����c��t�Y�:J���zm	&���k�K�ǥ�����V��KӪ��X�}]:hӵ�t�:	�<:^���U6w~���%~$�͕��=O������b�zp� �j����(��5q�e��a�~��&��]�&��R�X&�2��Os5uShh����(誇b��d�-�712�۫���a��ԐL��s��5dg�+H����C��N+QFNu�O6.W\8o=��]��o���Z�g���������?MC��ץ�ZUZ�J|3��U$��7a��e� ЏΧ�����~SOQ�2w���r�k�?�Z-Ҝ��OMR�>
mrĪy
�o���U)���yQ��I]���\A�U?����Z]Nvpu+�J����V����<�궭U���xL��&�}G0�#t�gs�p�2��2LreU(���8�R�T��f���f��qJ=�{MD���=>��Z���L�8?Q��������E�è�{_E�W�g}�hT��Hڧ�2��h�4�\��B��#��ɵH�aP���M�Xڜd�!��6ʭp9���G`��}`��i���ع�����O��N���^OG�X2��pj|������K�2�
�0,�ݙ&m i�ts�J��P��E��.��m�����H���ڶ�>���I��]L|o@J>�Rx�}^������"f��c�Z��������ip�|��4��5�t�QU4��������u��~�SҶ�&��?����WU5Wd]L~[�'tk�kS��s��_�����SJO�q����I�3�W�nT� ��j���T:*��c��$c�Uhj/�K�0�qQRq����
W�ie\��j�H�E]����i�P�����V�K�`�kw�g�O{�����}��@�|��Wfg����U�М+�pu��V~�q�z<��t�ޣ�)n_cѧ躺����x%4��'��� S� �7?�����J�tu{�4����׊*�^��nu����^O���44�Q�J���)�ҕ�����~թ']j�'����J����]R�"Wt�};�:[�;*(��J�$Q�4iԢ��U7dD�~��
,�W�|�_�Z{j��0}URT��?n���UVV,�_�ꭸ��ic$�ɶ�p^�4��	<�:M.��#o�WI#�p��{�2�S-�e�s9%�@�09  ��A�/�"�N ^DJqr�`.�r1�� N�/0F�r�p� ��#T���&��ૹ�� TĹ#w P�I*=� {�' =�	 \���H �a8���,�
I�l�KH�,�N �p��{��\3j��IȨ+�g]=gMWry�&�,Y^�5UPvP��i���O]¦��\:Ξ�h�<3�5�V��I�u��������g�Qf�.�����|��ڕ��&�ګ'�K]я���?���T�	0�kOV�E�Tu���MA9�!��
�v��� J�H��e���*��F�f_�Y�q�j��%���� ,�*�"D�8%�1��Ee��� !�$J��ID��V�K �n�ض��!E��*��#��y"��ʰ��#��u%6����Lr�L#Qc/�F?ܐm��ɚ�����Z�Q�; �5
��ř����0��X5s0bo$�i� ���2��r:[�,e��d�W�G0�:le0!��R��p  x!r��P�
��B,^��O��sc�Ѫ*��:����W�UJ\��O���Ԧ��]�������xg���ǧ��z�	��5���Ы63h4��bK6�3�[I89�[��s�����s�iӟc���_ft�� X����RN:�smk_s9�{c�Ӏ��rrY�t�'10�J�*�H�S�ҭ`�t�:y��Ou]+&,������a���3� ��Փo�'��֫���]9�t���uW����uzf���~�݄'��� �[�1���֥^��C�ZZ������kQG�m�K����o���KrT��m*^��sz*pz'q��c�#��������K�'��!;�֭�}*���f���*j�9a	�u�N�vrR��_[�51�WYSOM0y�n�
���Nά��_5����N�L��m(��{��z�����E\��}*i�#5R��'���=7͇D#�]�ʷ<��¤�;j6���fت���1��NG���J��9-Ct�n8
TƦ�T*)�ϓ��QSRc,�_���{�:;J�i�t� ��[�N���CCB��:*��~o��GV���������M��=}-���P�RP�����~gs���>�i�y���lky�z���\'Sn%z��qR��uJ�7&B���!X����?����|]*��Jp}�ޒo'������ɤ���Dq0st[',�;�fS�ُ�܉�*_�EX.qD��.�`:�� σ�оԏ��S��}̥3�×�k�!�k�f�����"CM(@x�:���MM.ǳ���6ut�UT����X�MT�GO�ה\4�]]m�_�z���WӪ��۹�mE��w|����mۯN����o�Kr�Ms����F�R��UJ>ߧjkj躵�.��>��o��T�c�^���ӧK�j�������81^�KMޤ~sS�5k̜*�թݶg�OO�jz��*O���ڦ��ww$I3S���j���ni<�+�Ԯ�G%.Q�5�6���r금�F�G�TD�[�ic�����	��JB_�(�ؓ��f���^A@�[\d�եr�V��Ô%��fY�=��}I��5]�.��6�m=��:zk=�ͮ�9D E�������H�`0X����O��y��68`�Lض�����ల0��A8� �X<���!F@;����bT�
$X�&����9V�����@9�r��'�i� � ��(5/��̕��:��x��&���"�^@�w-�X#���¸�,[~�D��k�,�۹E�Q�p<�_!FV
���~�o�^�2�� n`D",ౄ�e���SX���Y#wl����ɴP��E��6��&Pm��I��ߐ#����j��Gt*p�#�Wo�WTpr��6 Σq���j�6:US�퓋rk���/ҡ�w�;߀3i2�+Xӈ��s E���ؼò%VAY�i�5d��ǒ�k�#����deÐ�K8$Ţ@f\��IQҰ�< =i��O>�gu�%�˸w��4�4��v���LKM6�]d�q).>���t�w륩���NN��%-`����;}T�k��P�x��N.�w�Z�P���x��N�)��WL�i�J�@�e����V�U78�]/?��j��B���ֵ�r�G��_M(�Mu+`��2Kt�Sj���=J�S{I�{����$sҡYd�b ����j���M��e��-7j<��Vv,��L,�*�pGzeRڼ��ө�[UR��M%
�ϭ.�ۃ�k8��l맨���弝4��෕��R��#Q7�y*�����_�Lɬ:�d�O�ԗ��qx�wҥ�ܯ%���ы�t�f.p�R&]�5�̘c������:��*c''��XeLz��j�E�N��,u���+"&^�pWE���k����rMj�PY�\�X���vk*�}*Z��|�I�+�4*�-eX�V��bv�Lt�)#��-[�y'�2�˕�/Z��H�:u:�k��֪���f~��L�B�9=u1ܫU7
`i����-r(i�U�m0r�:l�������mLb%+���k��#L}uSV	�ύ��z18�Z;�mO�I��1h>�ϯ�ʥ��x�f�}:eu%i�򺞵�Sqe��׽ԩ˫�p�����Хԯ�}_VС��g�j׭� s��������c_����_j��&��j5��O�2����׾���w����WUS7<�L�S�S]j�u7��e�L[o!9��9��+U5dn�(Ъ��Z�� �)��W7��S�J������t��zt�P�5q���K�=:$�G��j\$uZ]I8%�c�ztqc�)R��u�m+��K?�5\�U6WLFQ�ʨ�h5xh#	MW:SOb*-`�I��º�SQ%��_&�0u��T"�O,�Z�8:�<��M8� �V�U^�*�l��%Zm9mHn�2�	���W�婵�)-[�=>&
�AU	Y�Dsգ�̜iM������<�jL�X�O�Q(��Ss��a�����5���G5����z�GS�S]ެ�c5j&�r��]̸��j��d�]^�Q�$��2���X@u��=t֩Jpxiq�^�{+�\zϜU]�Iw=�M��=Z�2�ƪ��7�V#qɛ%�+)nd��SsI���$� Y�ɖ��� I,����}��Om^�](+���EUY)g�����M��Om�)T�2i������k�>����]I�����;JhQ;�BN)L���.�h�iV=��4���A����)���]��A'�+r���(�Yf$&��|�ne\@F<�"Ia�pg��I֐t߈'B2�z��ОQ��J�Q��rƈ��d��{[o�Ǧ	M�)��E���£�;���p8��X�� s�"�L242��J�n �1����0�Ѹ�;������zu+Һ���<x���UgJ��}OI��3J��� �[%��+�M����[�(�6���H��]CL~J�H�������㥟�[d��t�GN�B��1��=sT�2���/��������BXJ
�,!�����v�?�ԙ>����4���w��u\;ؖ�3N��?����&�GbqbI��`�O�+��݉�a#��,'��$�倖�D��o	��ݬ\�c�+K`y�O^��ʧ?w����U7�}� �[����v\�y�t�ZD\rYY$ܡt��,��5�f��	�Ԗ!�����t�$�L�#J��T��`%���$B��9�2�E��Ň�z[a���
e�+π�8 E��/ȕ��~	2����7�/ i��r���D�M�[�M����j�g�!O# YP�b�}��G���Xg ��%��!&�qr@�$����G�X$� Y�� �'�L���9rT��+���zt���}�&�ӹ�η:}5R�J��8<ZZ�6���D�W�u�]���c�w�+nlc^�u*�{47Q	�]��S�l�SSW�7�jW٥ѫL����T5�����\��=��R^lnT����U=T�G�i܊��W�O�oܞ�8�dU3�M;��HrF��F�~��a�R��Zu|��� E�IPI��j��O1b�=̻/ #�6�o9��<��Q1$k�c����'���,X��<�Vf>H��x��,<��C����t��*J
����I�?�����#R��fQG7K��o��T����ҥ*QͮJ��H����/%F]�ڕ��(�����M��\FC2�%N�~V$�9*'c.�E�DTH$ZM<ؑb���I���
O PYx)> H�\Ӧ�U��uԹ7U/��r�����[�M;*��>���QZJ��~O����`�_�N�~��Jj�6�����zmt�n�t=EUJï��n~I_O�2����Tk*�r�:,I��t�f��"ų(�8w�>o�/�{��m���A��*>�� �&�?����ë�NU\﨔���R��N��Fn���#�@$ � D�8g�="^���'��?C���'8|� ���?��W�.c'G*��i��=Ӎ��VRcUM0^R�>SRN����UU7q��L�zp��_�G~��0UJ�/�:Ai(;�cm�	���h#Ч�;%���}Sޕ���ѡ)J�X�,vS#�BK�5����$X4���8�mˉ3Zk����M;���Wu��it����Z���VkŨ��g]Jaٜ�:G*�y!�CEe�}:J�r�rJ�vz�h�@�Ó��o��S���Ɇ�%2�%.8)Z����hM�ҕܟwItБ��������>�����]�9�,�n�	�{�����L	"�T�Y�ec)FC�\�U��\2'/U�=[	���}��r|}����:��x�3V:%̚h��:t)uI�S�4�]ɋ�e�ڲϑ���K����-Z�jK��߫R�3Q�S�M?�X��{�VԶa�]Iݚ���ܯթ���]_Vԩ5N�r�w/6,�5�Sw�]I�5:�+�5;���ظ�%�"/�q3�PJnG�*��3,0�K%b<�����.
,�mq�G��W~2g��e�,"�k�����V��3j�_5=G�Ԗ^L�ZR��E[w'Syf�,ޞ����z�-��f�ĽV��o��W%X�3���n�S�X�s�?'�F���qi���+Q )�d �+ yp@-��p[�#�dD�`�/��w$_!�] pe��&[�D�bD�	�;� �p/����[�ĲGp#��gj���P�ni~�U�m< ͣ,��MuXb.�d�`+O�^n2���;��o��Ì9�d�weO���Ӻ���y�aǸ�Z� �$O,H	�L\�ˑd|ỉs�x�+�W�I)��E|Rʜ��x���nr��ʪQ*����_�f��ż�� X���Gtjev1]P��p�}N�
�ru����ƪ�-8,~ʫ/'J�ݎu9�b�m�lb���I���LA{X�S��|�2f���F�(�Y���ϛ]��c0��x0� J��p���,��&^G9ʂ�j��	�֭LG�q���/D3��=u�KI��M�SҠ��m颋���ӕd�>mo�3L�N��5�r}�#t�κ{�NY�h8X3y�_GKwW�U�ק���/ݟT�7N�d���+s��h�QZ�GE�Kq+�??Nᤔ��Q���8�������U<�vK'Χ|��Iv:��9u���=�]NIRJ�2s�^�����Ef2��uP���uB�s�1��f���ָ-.��OJ�V,z�O?�+������S�b�
ǩ´Jf:9�c��U5De���O�뮎�ŧE��[�:�����T6�=Z�4�?M�Z����ףE��c_�YA�)T��j���LK��q���.��R�}:i���[����6�|+Ӟ87�~K����_�Yv��D���V�Uʥ�����]����[��Wg�M}��%ti+�R�w|�q�ux0���+�r�IT�z7N��O6�m���n>��IZ�7U��4����4�~Lj�����jOו7Vnv�*�@�M��n�k��u����i*mh�g_VR�iWl��T�쥜�e��R�0�M��G,�4ݶ\\wZ�(�4ҩ�9�pU5vU�q�Ǻ���XX��N��c��,�b�X�c.�	������/�E\�.��T֢�b��oU�Q2Gn	Â�jj� ����	T�Zt�y��#P��o_'}-�uT�W9m�i�Ӄ�Q�T~粟O�K~	�q�~��3'}-�u�+�m�u4��<IҍJ�1���NQ���$�q'բ��5��*ĵq�iM�|�VޕI��_ڍ]>F��ѧ�/��o����{w7
#��N�7b�':UR� bO������Nsc5Е�r�i'��[�t��n1��ӥL���,v4�\6|��B�U���P|>K��ۊnٗ�ҥ���~{S�U�M�'
�58�\M}�oRI�>�W�����ȫU���M�Xk��o�u��={���m��˽�u2�k�Z��`ˮ�>ہ����L��r��b����&g�a���9�DR_a)y$���`�W�/��{��� [��^߸UO���Ħ���$� iK��,��e���Z,��}M�"3���*�9�u$�OV������V�ѩ��}�z�
��غԹW>֎ڊR�n�������ZZl��oN��T��}4���ҋ���4P�);SJ�-4����T�Yb�K�M3s�[�:oԣ�b.S��Gn�� #�~��J��I���a*,|���ۍDΚ~����zH>��/�<�o�5�],���xi�Ӓ��Uk%��z�����5s���F�ṇ��T��pN�Xi�^�V'�9���+_Q����M�H�X6�xɥr���e!�W���b������	v'��  (� �y) H���YH�0 :�Ԡ�N��u>@Ӊ2�$�w��jH��6/ 2䜐; A�%,]�1�K�ܑ(��	� <ؒ^"p����JE����`̏�� �����2p&F�r 9�1�Z�B��4�t�vG��M£N)��_��u�n*wr�%[z����MU7'*�)��ta�zU%�:jYG��/*�)�<�%f���'��ŮT�� +�rIp�	 [�\�� y�&]�jC�6D�w�b{�j�Y7���M�"E�8/U���K�]J;m��}�3,�,ҥ<��P9��X�PuH�4�����m��$X,Z@�� 2\#<	`iIa1=�� �@5d<� �ؑ`܀��d��0���G! r���@"0@�R�6.	�^ K*��g ����S�ٜ��Q,jW��y���U���8;Q��Iˮ?���h�N�5%ps�IZM�j��r�s|�I��hn�!���=�Z�z˥ټ	8v�t��Mk�3yY��jh�� �ºZ3���%�S��TQ��Ҫ^`�e�˯gmM7Cv�����5Rr���~
'w#�صb`��28xy7.�n�+S�.[��b�rVDD�7�,�7rIv(���`�< v�y+$[�pE��l^L�ٚr��1,�783S�P�Q�������W�F^$���� húfzN�X�Z�ԡ���DB���3.����*1����d�ˎL�y�irH�FY�4G0TF��,��"�H�\�A9(�94O�Xq!�$Xd�p0 ��Q��H��e`�J��Z�Zf^����PcZ��U�rzmG�?*��`�����%��=5i��i��J�y���W��Kh�oS�Z��|�����\N���~�GqF�*O��'��*Ӫim{Go�]1��s�8w���۟�_��٧�]�<��M_F�<��L���U֪VG�շ�=*���e��Vc�j�S<����{���c�V���c�Ճf[$�.tr��� �2���ގ��h^$���?M��6��c�� �� ����o܍��ă���*�k��^I]��į45aR��������j�Ɲ1��Q��1�����#�=���n�+aL��"�䮙�snE\j�����Q�v2�ߒ�5���W��%�j#��ʴv�B1��+ɩE��U0�ut��ԣ��5��	�Fر�܁�pVT2��RD���"��#:�R�����4Q7vHWT��*}NOv�gԖ���.����՗0��)}���}g�u��X�aBH�&��q���$�5	rET�����|����U��_&z���k2u)��m�ٗ[u$��m_o������%{�J�)�<��r%

kuj�V��c���hC/��̰E�ؠT��T�
>K�SU�GWk�5ǹ�e+��������<5�~L�GZYh��K,���i�Qy���0�jf����:���z����`�e�ϧ���':�_s��5�'��U>lbI"F&���"��&-�ql$��k�z�������ؽ}��ک���ϰ9�M5B�����?O��==W^���i9j3�O�����P�׳���J�-���ɵ�%��o���v����t�i<Y|�H���?�j� �'��G�� 	Жʗ���Y���q Q��l 6 G �  w��6 '��Ifě �� w*�I� nH����<Z��@5bpG~� BV
�Q�x��-�*�=me\�R�p�������� *������I縋�-���w�%� \;�O&T����lj�
�ImYkrm��a�9�g�łK���!¹�+�v%�}�,ٔF��[Sb+(�IM��=<du�I��M&�b�'���Kk�q�۸C��=_!��]��2NFQJ� �T�v�(�_���AμYµf�'�X����0������
��I���J�Wk��7�F���7�fa�`G	�b%��*.bb�̵0e���m`_t�fn�im- �]���ex��	2D�"m��i�
�����>KE��z,�Sj���g��mb�W��L�����j��{������Z���玪c�k�Ǒ�ɨ�q)��n�쑊�qt��6ӌ�B@eY�c��q+�*��(�tC��n	�,�e{L�Ѿ��Q�&�p�_�U��ڣ}2��OyKwj�>S�j�GJ�˯�V���צmtvU(��G���V���;Q��e��� �����]�Y����P�;�3����� ���/����[�<�nPίU'�s�XקG��3җ��Z]YI�5�*�*�<�����x��	y��Q�ӦU���K�øj��T���DD��҈��Zk�i�U�ێK��>�jZ�gX��i�uU۱�ѥSDC�3F�UM'ETeC%�R�e��1K��J�ܒ�TX�<��J�=
��=��/0M:?CS���tWWfI3���8Ԧ_�DZ�Q6^�uW4�=I���ъ����dkM��W|�=q*"�Q���[��s���p�[�<�T��F�������iV��[�mG':��_ld����n[\�z�h})d�m���*RI%�=t�U��"Lg�w�	�l�0���u+~���͏�Nڦ�ԭ�g]=�`�>�||մ��OF���E1��%g
M�KT4�/�q�[
i���:-�$�U6w_��UJ����Nʎ��t[uJI$�B��b5<~�V:)J^{��k|��8#�>��٪j�"�r�י�ZhI� �Ԩfzv:i���4�۩�<���tt�m� %��)�h�^�F�ۨ`�Ҧ�#j��;[�i���kz�U;;}�U
����ZT��^O�������<�^��US�15��}SMJJ^&��T�"�>EZ��g���_)�~����w��^�nny��©�,�Muz���5U���	ur�5��GQRU��I��'��/��dʙ0����DŠ��2%g� '�?�/`)�6%9*�G�n�h��o 
�v+�@+��q�;����UQ�5f�@#�\�j�i@H\�裩+�����o(�Q������mvN��}m��4��Ʈ?;� ��_m����7T��>�ӣ�҇��k.�&�:�i*4҃б-*��4Y֧��}_VҡBRȯ�e��4�W�O�~s_�w��ӧ��UV�Z]n���������*M�g�W����m�>bڷ��ҍ�4�m07_��5��*��#��u�W�[;�&�Y���#� �kk�r�����Q��n�n�=6X8פ��g�=���sM��_[M���W��K�w:Mn����ɚ��i0�����kq���>���KY(���3�5m�X�u�������k��d�,��m��צ�:�Ws�m�GGZ5$㐯wE����X�>�~���=�qa�X& �q� (�vk>C(�p�/$u�2�W j>��s�Թ��������c��:ܑ��d%�-�M���x3��1����&}�f	7��s��ܢ�$~$�����3��؉ 'y�&�a(<�6I��2�y3Utҥ��z4+ԧܨ��(|��ھ���W�S�W<:߈(I�R�p��nR3�M2�j�]_^ׯ���x�=Sq��V�c~½��ԗ'�W�6�߭7���z����㱉���)���~ �o�����7^������. �%<�D�G]M��ٙ����-����PdM�=�,pK���<	F^C�I����h;<���$l��2��2'��#l>H�!�[$�2Hc�2Eq���1pé��G|�c��$W䥥[�Re�HP	�� �/& ��q��QZ-
jF�4�D�.��$�V(�ܓ#" 9~E� �A� ��vș�0&@d��Y�  
H Qd��2K�8�
�
I R�F@�lҩ���^�+k�����y<��Uw1yֹ�IU/&��Ѭ�OU�ҕ�W�u�k�x0�-�i�Upv���EI���(�,�jˏ�����J�u�T����פ��t|*j��m��I��|�Ν��i�2��SKsO����t���O+�t_�6Ӧ�ps�G��m�#��*�ʸ`eo�F�IA�ȵ+X��~	�آ���<d���rM�@�+E� � �$5��\ˎՓ5+H����o0�N2Q���y5%Q0���Ųu���xEj���}��7�؍~��ɚ��ɖo���kS����%F`�Id��*2��ܰF�ܗNJ�� ���O�.l�3��*�*"v5AVMЮe`�,�j4�{W4�6`Y�"*:LW�KWGF ��X�ע��q�N��U�ss����t�3l{+�Sc�Zp�ε��S���?N�Kvg*�������a�S���XM�1c�7ʉ�Hf�,P�Ԯ��zU���#�(�G�'�5��� �� ���?^����#g��tJ�.
��S��X����K!�k)+��L��T���������&�T�^�5��C�=����e��,�djx	���FpO|�O�	���	U)�$t���Fj�nv��J�u1âS���6=L᪯3R�y#� ���GM�����R!j!�:�H$9��D�� T�4�I\�pe��uʅ��(L���J�o'���r�>�F�2t������s�Ӫ�"���j��(�Cj�Eԓ����h��JZ�5qL~�F��m9�E<�x��� (�#� 5�*��Y��`W<�-��	�Q[M�Q�؉�s��"P�̽J�a�ҰjsR�fl!�s���޵SK⧨���q&*�J��:���&��ޏ�
0�_v�M��&�1���ٖ�&K6*jʂsa9SUu*hM��/7��I���^�UP���8hmu�5�=*�+쓰��|A��z?���֦�ڷDK���S�x���d��V��T)���V��]uЪ��z[����}�����r~��7۝=V�{��szP����u�>��������a��i���{�}��GqR����w�w���v:�m%k�&oX�����>��Ոn�~ƶ+�z�5SKqK���vm���US�M;o���r{6ۿI�V�
t�j��*"Q=�l)��Q��Z�5�2�h�������(���+��k�[�[k��u�u�MO��^��?�w{�������貭$�x��kW^�]U�ߓ<��z��[�M�f�#�M��te���tt�4��'ڨ���OG��b���7s��n' X�S���*� 6I�R dp���1�>���<�L�}����}�e�@�X��~�����X�ܝ�
�H�����8e���n0@v2�^H�Ծ�8U'j�~���r���\%���A��f[�@�ح���.�	�(��b|����/�9�=��ZDρ�	srʘA8bo+��� �H���fl&�\�呻��q{2����1�˒Hԧ�\d�ܭ�MDċe�8�ؖ�Q�w��&\���1�D�7|��x���N3$K+-6�`�M�!L��Qv��jY9�ů��GJ�NYʫ�H�N��M�64�#j��@�N�6�iAͿ��#x|��i�Q������]ra�F�dfdU���D���.;�R��6�`�� *��81t҇U��S�TX�V[:�\��[�Ҋ�\�>ޔ�'��M�K�rQ�֡�J.�ߪ��͚;��N��������'�WF�Md�s����4|��j�t��P�Wg]m��]'*�篥M�<U���t�\�W���bV�#�a��yD���"��%$ò����))9�t?���v��SN�k�S�#�F�9�驫�<�s�zt�t�Y;inݹ>W�wѩ/������o�F��Y�M���<�V��r�Q�N?����Zҝ٪w);��J����;��ZX�K^�~�sKV���]��#�ڢ��ۏ���j4)�U+��{�nOU��� �V/�M�Ӏ�S�|���7/��;���/�~���}v��eP|��]p��~�W�q2s�Q}GgT������݉⮹�_%W�Pt��ET�c�5���n�s�T˲��;_����J ,��LdC�i��� �b~R���U��#�T�y(^G�h��I�{d�M�)��.�z� � ��6�b����D)�C7�f����MO~��]ϧ�u��)�H�i�G��˟�t�&�9UGi��WB�\�kJ�P�.�jT٣�z�T�ԓGOQT�MJ�O�R�eДKH�Zޯn����j�dˉk��j���z�g���)���
��M�n���N��&�ޯ�Y��&��j�)�>eU�eU�j����p׷Wy]Y���ʽv�uK<����~I���R��s�.�Ռ�QP}���`
�dqfe9/� �I%��6e�2�I��t�Ȼո�|���}���ؘQy��T9����%3t����0����9rF��Y'���08�6*��7	Ř�y$��r��}�K�30�Bq�7UJRE�&"n�uӏ�h�S=4h`餩J���Ҹ����m�v�Ҧ��>�1Rt�R��?#�-ޖ�9V9��j��� ��ӷ�éĝ)��M����ꚵ~W�����UuZ�:UN�ż���d�02���J����n��MBV������n�;UЗڌ�G��T���������h̷=N��o����۹ae�SVJ�J%S�Qk2�q�WT{�{��/��f2/P�8�gSQ74�{@��ltRѫ��o�G7����E6n��O�ܹE4���(k>���SWJԦ;�'�5R���~�Gu��*��N����QV��N�KG�C��:p�u���b�?o���6���N��׀�aj'�u�:%`��OT�Z����e֑���$�]���V�Rrc�e�h7䋘�"҅���G��{��)�_ؾ�����`�2@|	�7�+�W$���H�@��W>CT��/R��Ԅw����jo�(wԥ{�ū�{z*�j�]�p}d���㔏��� n���.���5&j�"k��k����Ry�}Ko��Ut���u7z�����9�]M]�_����+���k���}4$�𔼲��^�OS��w��z��+uM��q��H�K%�Lr!CvA`�˶
�[ؘ�To�x2T���,�����ydv��M��̓�l�!]ɟ�V�a�e�,� ��L�����+�pBL*pT�@n��� H�$ �O�����*\�5kN���$�����f�ܢ�*dLHE��`ps���7EP*�����9rX� �d����X!�� 9�I y��N@� �r`��3pH�� Q�b��@p8@�0�ě� �� h&̀:�T�i���̜3]d��^�-g0��MR|�Y�OUӇ'>�t緻���d᧭MJ��I��st��J�Ʉ䩑]�ת�M�����Ҿ��O�|�~K��f���Vt����SסR}�<Z�5Q[�P����UCN��x>���4����S�E��;͍����d�O���ꨧ���t��H�:PȮu_x*���+����O��|	�X�?��/��݄G�!L�+$�$v�x�	�c7�դ�!R#�7�\�$r���V$�/6d}ʌ�a|�s
	t����K�5U̻<f>H�`�-�F9��\��EiE��i�pԗG&��ѩ3��ʎYdh��ii7�˾
��,�[���5k�S�RH�m�����G�mҠ4��ш��6O"�2iY+�i�����4i�q����T�S5�#k��ɤ��e��Q&V$�̑Z'���� &l�^�:d�T'���*X�U��z}�꼜�w�r�yy��p�4��+�95I\�sh�GF���sR�cH6�H+8��� c1s�>�������_r?Q���)�ǟ� G� .����H�+��'��U=�J�rUdX��Y��n˒]{�c�|dq���h(y���CY&A ����V�&\���@���A�9#PĹ��,TL�<�2�-SsjY4�El"�5�窭���3\�WM�5k�����fǗSI�`��h�Fl�Z���Θ��r���z�ۤ�q�oV��f�\dҢ�� *���Ҫ�Sd{hѣN��܄����5*e�t���M:����I����m��+��=4��~E4�)J�bu����?�T��!S�O�?C�����ɟ�ҰP�/s3�+x�U\q,��n^nG1���8%U(������U烛բop�59�z�������f�i�9U�ۓS�oocեR�s�׎$�:�䎯&��ޗ�n��Z��x59�ޫ�U�bSd�di�&D�,�Cv�7c��g���6�z:���K��K~Ư��tl[����Jg�}��m�/Wq�t읪ꊼ.D}��w��ӵЯU����gq����-ƕTUNUH�������ZZj�=:��~3���z�N�8�?�Ə�ա��_�}7��7�e�Z�T�g��I���w;�M�S�RK鬿�y�_�4�OOCm�T��iA�Ӯ�J���Rp���~�KsN��r�*���t��S�W�jօ+�R�DW��OY��5����u~j+���mg���I����U��WUU��%[M�Y{�]%��P�j%}O�4*�gI�-���4���������֦��I���-���ԏ�K=�n��zֆ�54��U{<���������t��V�|�7V�뭷UW>֧���V��4�$��z�z^����z������ qY�� �>�����ύ���f�ݨ���}Gִ��Zt}ڝ�G����m���W�Ȝ���tv~���a�R���I�����c��[J�ү�˩����y�]t��]5ӊ�p� S۽ν�u����U�kMƯ�׮�m7bi�J�c
�M�uk��TI�];=4��c�����mJ|#�vr������< �#�%���HrR0�26�5`�9�x�{��DR�e@�����$V�n�g��3b?|� 5ay�+v 2\��P_`#�#h5r01VN5)p�:j9]�=��WdfK2����� 1p��"���+�f9D�}�6I��P��up�'�>�s-����31O�&�3i+j.sn�i�E��k�7�˩<`˭)p���f:�jT�>�suZ� �ST��n�J�梨Y:� tN��-�d�?�Na9�`�����o�7,��V�tfTܝ\�a��<8'>݈��Z�O�p����tmt�r��� ��ݜ�xI��tԫ���v,Fj����ܦ�druKs��L�x��L�M��
��$�E�&c�7����$9e��x+I2w*$��k�r�)^��T��]V5KI����*w��Rt4�jne��*q���]+zu&�'�O��$|�[����4��"��jT�ùϮ�K�����T̞�uaO����K��k]U&�<���Y=�8��J&�M��1oR��5�I��X�n��+d�=]i$�����Wv}З*=>���V¤���ٮ�iXS���˹}���g��'��bg(��J�UT�ŸڥKhJ�>]��(�ѶuTzt�3�M�#ˡ������{UB�Q�4tU��7uY�5q�+]5d��R��n.Jhu8*%-�SUV>��a�M����e��}�2c�ӗ���(8֢�s8r[\{)�%K�c��I��$�'�^����*�L��G�J�SmI�S�M�7cR3zע�A�UOLI�U�ۭFN���֣�I��T��U_bL�kQ҇�+���Κ�Y��[{��ޞ��9�ܯ�i�ZZ�p���4B�%鋠�i��u����R�L������b$��G�2&���a�k�8p�}�V��'�k)$���E�r_0���*R:7<���å;&J��y6�T୤�,y��2��QT�sk�5SN���V����Z���鯹��T�jJ�����-͔ٟ��]�&�=Z�Y�`����J�O�Y�57�՗�z��91UUUy.Fu���WS���V�˗'	h�W�&��Y:�&'�g�B6�ʡ���(�&�7rZ��G���dD��[$x�'�J�XR��%����HX�R�py<��W	}�Au`�@?p�`@�
b�G%p�ۛ�L�#��,�0��I<��o�U^,E�=��M����x-1-�#�/%y�R>t�N�* ����EJ�*�e��:R�8���"�R���pw�Ъ�X鵢��4{���O���W}�/�+�N�
*ܒ��4�a�*�ɪ�Z�edg��Ƚ�b~�K�����J�J��:U� q,���Y�
��MPae��ymߟ�)���T�� �݃IBD^\���4:l�v�
� Uu�J����;���؆��&�sJ���*aɩ���ѭ���v�gS�2��4����Fʕ�M]4�$�������ڍ�v�UϪ���#]6>}����v�g�k���t�h��4h��vK����A1��WD��f�#�-$M����\��ǐ�9'��n@Ӻ�f&��ؖ$v'��n�m	��� &�	md�	ip;ܭ��R�r�½�7�@�\�L�'_���[N�<;��'p���_���݌=ƍ+��R~C[���m%��jn�k����K95�_U��5�&x5� QJI7ٟ�����abK�5���{q]}IǱ���ƣo�9��4^��cV�j���˗̕)�\6Q�,w�.��ȳ� 	�a�$a�EU�{�v@�o$lq�4ɋO`�6lOVD�I���3>��l�M�!"@prK��@i�'�@�Q� q�&S'��   ��ς��R�� &�@`��L� �+� 8�0j0�He�W`H%�À:��tzj���ܝ����������E2���=� =���4A��.2� �� �%�"ev&
 ���|;݁]�.wJ�h��( L`d n?� ��.Q%��#% �=ŀĎ�� P=�!� L��30I�+�Cg�OZ2�
w:*����:}-:�V/'��XJ���U<ߓ��gN��N"+�X)��7f��t~k�O�&.�������:�ǚ*�gӢ����?���������gJ5ڳ�LX����;Z��:a�WMI`�m}R�i�{�~��~Q�m�����J�t�yG<jW˛D��Ӯ��M3�P�I�$�N6�]�m�[�������M����� G��J�u/��P���;-�����h�)�Rɦ��P9l��(J_':��Ք+NI>>MJjx3�Dw�P�J��D�Q�MD�줮�E��I�95(5i�2���T�VDIM�F�9�n�*i�s!��F��0�`ݸ_$t�J0Չ+��x��ut��'O(���,�G^��
���j8�mbG��~�t���c����J�+�It�L��Ѧ�#.��Q��fӦ�g��^㧔k�\�x4�,N
��
�x*"�0���`���V�9"���N��Z&_�D~���nH�gə*K�9U�O�γQ����Ҙ6ݬe���α	�H�O��e�2t��Ya1��#��\t�1��ħ��F�>�IB��4�������(�W�'��N�u�?�?{�	Wt�[���+���S�a\ʳ��9���k��7+ب�!�,�m6n�[m]��6ڹP��K���J�{_�o�����pa��U[~�[�Q�$�ɕ|�AA�&Q8$�%����)��˥�E����5r�2�w*�Ya@iupUJm��L	XVA�J$�D����uA��e� ��f��#W����]))fz�CWL��^��sn�VP_5-��w54Ҳx�����OR�ɩ�7��խBY��[��$y�Ȫ�s���ޭv�cR��R�.dg�m�Л\İ�Y՛�NX�b���� +d�@�P!@���?�h�z5;�BZ��o�?�O^�4wpJݥ���:iQM4$�C4~k���j��:�i��W9;�	ѫ[u����It�����\�uf������u��]}R½����͖�Z������ ����F�����]5�t~��'�z�η�j)s�%f���׭��5*uV��dgV�ݤ~�{����h��S��B�O�v��Q� �����:zUR��*:'S���kuӺ�t�J��z���M{�O��1R禧���-���Kب��zΚ�{m�T:�������rf�{�c�O�7�l�5+�U5R������UL%���R�0��]�����������;�BӪ�])B�ͩ��k.���������~�=�:�F���� c����m�ަ�N�)K���m��T �P��]-T���'��a@A�������t� ܏;�w����ZK̅Eڨ��:G����M�S(� X���� I��9v �@/��r>�W؎{�<����ܒ�� ^,.��l��-�Z��;(+�n|3- �����I6��pL�.f����1T�@�YƦn�-��|�S����=ʜ��A��7{�\�U^@ӫ�)���9��}����b:�J1Ԧ[��d�{��:�Ӷp%;�k�$�U³����q����F��QH����$uzt�r��]V�:�W[��)����܎�@tU%3�����=ͪ���&��8SZ|�ꔮI���f���4&��4����$U*��&G�N��35U�/+�UWp��a��U��[�`�_��LD��xH�Wtrm%)�b��G���4���Ҝ�G�#ʖV�Ȣ1W���pf��M\�l�l�J� K6IB�؉X�W��FTY�(	ϱe%�ԟ&�ʕ�Gufj�mN z��t��:�%U	A�ғ��IO63�����j`�WET���(��ǇWo��eG�V���h驡���w4'RnY����v<N��j:\�#�W�����P�>W�n�g�Cq��˂X���R�w;haZO���Kj�F�^��1^�Im�՛j��M󓊪��F�.-�kSL'%�Oc��r�0����:����q'j5��K���um� �ښ���6��S�J5^�T�&v�ut&�l�������֟3WaE)���SM�*iG�}��S�O�����V��isl�TKPy�M�������~^0x=IY��3���\˵�pۈ=4�jj�B_'�C�r��cv��
��A��}�M�R�P�>n����\J�3:ѣV�����eSw_%����m[��Q����*�5R���Z5��w�	\�w'��Tv۩ե.��6K�^��i?/���K�����I<���$��Z����fi9�V��`;+X�+%K�8�� i��5w�?8�0��
�6D�IM9
����83)��ե��T�`*Q�Ȝ;���~9�TDت�����]��(K3��!�05�	yB�Y��`��E�@�"ȓ�+�� 	~J�sp�y$ �H���K�m@D�䟀�K�؊9�W1l���,۳�p��,I^�d��XVPK7�!Ǳq|����w�Y1p�B��a�H4���rF��U�і�!/�V��bB���֝'Y�Vv*��,���pMZO� c_H�}�+��R�%����0��jh�Sx+��J,O]:{�9���5:n�}���?MT��Ԉ���m�����cMe���-�nLG(*����8��û-���T�^_����#��W��>;
���~����H�dV�8��mL���6Ҭ�T�c��� vs�t�ɥ��M�֍�m%q��R��T�(g������m4ӘFG˦�������uE�}:4�a�
�G�Oc/�v=mh����̵�%:tӞ��q7*vv����:�&Hpt�~�*`��pJ�C��P����5$��Im�7`0%��a�O ^d9���_���X��˷�J*O�����L��R������^�OJS�7�˯��m?�� ��h�K.��� K���<޹�R��Qd5���S7<������RO�����_R�V�ƭJ���6\5�}]Ҧ�]�ǯj��[��>l]/�׷[Ե�]�g��jW����x��Y����R����*���a/�`���l���6�'r��S�m{	dd�S�&XX�M���&2g�I�������M\��!"�( ݚ�v8瑌��L��2�Ap��X� ��!�7��� / -��� �H�. {�q!� @ �G�^ a�n����k�� ;�` �� m]B0�����(�uU�����fC��*u1n(��8.�����PN�A�)P���������!G��� V�$L�V���`
� �`��� B�]� 9!}��*d �bH�ȶWD�Y ����Mv<���w%��v��%��jUa�2��:ѩY1yt���S�}=t󓵜9���t�]%�"I"H��U.U�'�m��J������e�/�X�,�����7)Q�J��5	���i.���;��>:��>~�Ե��eu�� �=�����u�������?W�tSi�>�[OP������Q��ЯmS��]-���� ������m��ޞ�Y}6�,��;e����)?�Z�|j�e]��V�QKJ�C+�������^����G�I,+J�ɯG�h���J�jd�̴��~��/�&�XD��R��k�Ô�$�Ly,Ap��)*ńq f{��o��X#����I�Te�&�p0���b[���R�LY��1F��t�c a��A�nMU�C��F��k�::m&9�uk���p�d�C.�U+���J�쌵.��"�J�J�@��|pc0_�ZWp����$�e��@�8'�j!x"����`�B0@��,�)7�r�B ��';�s��L�Y�j1Y���/�F����'���X,V���H�K
�J�g趵��W��R�>�٥��'��:|og6Qʚݤ�Rg����J҇Eڗ�
��m2e�f�� �������r�3ę�Z�pjL��έI��SX���e�Fb;�Z��y/S��2�`�~(���F ���8.U����/�B��ܨ�����	u�F D�!.���),���Q3q�����S2��0֢y#X9W����^�)�S�z[�pO�JY<Uj�ՙ�[��^���qJ_nN5���X걩�b�]�׮������f����:�"SFf\5d��K�	�e�	 ^�$
$�?}M��o�����U:z�h�����e��u�{��ױu����z�/�ҥ���l&,ϱ_�T��-��Me�K�����CЯG��R���n)ӧ�v4~rD���;:����F�����?#U=5�]��Pa��Eө�Z|��6kK�}�F�:���~��t.�'���_}�Z����*�5���K��� �6��]+WJ��Ӽ{�/I�=I�S��S����c��?�7{Z�uv�I�T����wyn�G_�}}�tn+T������'�]���O���9<�d�������Tj*�۱u��5�ԭ��z����[����U���.���cm�/wR���OEv��b��f�cztW�R�J����J�~�o�k���U��֩����O�}:���G�o�&�?!��=ꛘt�j�>uO�}���Ȋ����N�� s[���)Z:U?.���~#�k��i��9t~�K�}���N���U���E�J]:6�Q�M]ξ�oWR���s˻c�7��+Mm�t�C�� ����β�Ю�MT�R����g�Ӿ��<=E��~��N�CWqV��*��jk��k-������m��������	�p��BO��v��QS�>[���t� \���؋��S���4�/Mt�B��h��%�.؀�  �L��;��&[��tfR�i.@���ɗ�J�Q���4��&�9p�}j;��J%�S���`���8%۹Y�p7=���Ș�@�I���#|+�o��4ٗWn�J2��@�˖b�>�T�ru�S�r�r�]S�sK�(�b�x�Ηk�y ꅓ�;]��VH7Ԛ�g�w�ͷ���֤du�8���N�\���Sw��n�F��VɄ���md7�I�ɖڴ��*J0'ܓ6y@k�E�2�F�d����}�|W3�cs�.��	@s8�5�Ʈ4������H�;�t�U ǱT�&���Κ�ӱ��^H��N���Լ�y]w�^݋*c��,��9��������Itǵ�WRrԵ)ß���IC1^��z�]LZ��η�����-�U��Lt�鳃���n�o܎�
��U����CɊ�2��bBj�b8D��6ч��L���3c���Ffdt���i�%�B��d�Q�7�F�[e�2V�Z����K�ǏFɞ�*��*�;����$�ԝ�qx �^�<#ͩ�˱�xM"�䲣��mj�����C��W��SU2p��S]J��Y�c�L�Q��M��J��6�ڪV�%��5zN/I��+�m4\_KqMygd����{�j:pv��V�6�Lj(�����WCMR��y�޸���z��I�t*֮�>��aN�VO�R�W}M=�1��U�ΥBIB��CyS�i������ �x�6���f�55*������Ua��M��Rgo�Ӭ�J&�����]	D\��6�Z�x�=���Kuu�Ҳ�|��Ύ�J�f>N���-6ڲV��u��p�x��թD)���{�4�fy4t���J�cV��g���)I4�j�D{��:(�E(����M:W�iT�	a%�񷻽Jjt��LM��zuJI(3UU͏����U��M$�c/~�ږ�c�nv��j�oo_U4�=�o4S�������ꧥKV3<��]E^;��޲�l�z��$�>��}S6�~o�����&��R��K�<`K�H�e��L+Pi8�X0���f�[n\��w�"e�"@ک��N�X��fؘwN@ӪЂn�s-�����j�)pm����No�iU|��KW�r��NK�l��w�7�&~ �tK�J�#L�T�M�va�w&���H���W�	P��>��ҩ����	z��|�����q�u��W�L�~��SB]����N��3���j����0�v�ISUI9<.�76�M��_�8W76X*I�&��R�q2�@	��)���]�/�N	����HJ��Q��$�+���#i�
dy �Zx����\&��%Y��2T������"��3|A.߹BrHN��"�Ug��U�jY���D�Rj�4��R��tyŋ�KFi��t�}�R�mA�OrT���(T��k��u.����J�uԛ�;"L��r�M7ߵI��Vz��\�x6iYa��M��/�{w"���.��*��&RF��u8���7#R��֍�K
�'����'�,O��橣��'�[$���N�mt�QRS������Ss�;*�J>�4SM�A�I���F�%)9�w[Z)K���;�Xa>YV��T��3deG�r��F�Ywe�@g�CW�W���Z�4�|�����O�{[K�B�s��s
�M+�����L -�#�����wcù]��������
�q��ϭ���Y��'�W�4)M)o�q^1��M<��޿UN(��<:�����������׼Ѣz�V�xu}ooK��6K��J���u�ߖs�[��15�^}_��?[��������*]�T�j�z���� S�U;u6fo�d����:"�mB	�EP�8�Y�v�	��� `-�2�.�cF�ve�����*q�� W�2H���s!��3đ�(�͉,̴�L<�i9�#�	)`��,˰�P�e{�> ��K5���	��>y �?��#�-� J�.I�@8�خ�	�K��� �^�~�,$\���ϰ�/ ?���^	�RM���] �$�_��%��`!
��`2)F���>D�K��F@6>Cd�a2`z64S^�=x���P��Տ��r� ��{����зl����%N�^�`���KY���М� �=��p&P@JE����6
��p�.B� (�qq�2 `� x� ��n ��H�Ip��'%�p.@ yc�;$� &�";���<D �!��0	ɮ &j��1�;��.�OY�	��&mVՌ�Z�c��Z���c�S�	4�F���r�Y���U�IEJ�W�q�N2%���i�\�]���.��\�s�m}YU��w�-]<*�G�J�U�K��ή�A���ki�]��գ�<��פ�M5����o��F�����_��ϯ����ңwJ��­a��-��1+V����~���R������Ǳs䩕�%��H�y����K��s03�>H���^lC�U��x�E�=�%<���+��59�]�#�(˥�%�DX�"N	VW��p�X�R��FZ4��T�(�լ"y��(T�@�NGJe� q0��Fzx2���^ĩC���T�Ί�����%�k�����D��x3�����^Ƣ��!�]�T�hB�EJ�����V],��؉`L��ej���odT�&@U���&�Z#\���$s�&Z�ię5�Ube\۶	T�����o(G���Y��p2�)�*B;\�)�%�#ZK�\KJ:o�J����i��8���>���M�֢���_?-�zUqvs��Y*c�Uu7f�|�����o$����w7�&3�r�*�8*$�"�"K#����t˰�b���7>G7j��7��F��5tSI�aR�������C9խE��ĵ��q�sG����6�Y59�=G���0�Y�x��mݙu���ύ���V�)\Ʀ��	��=F���wz�T��:�u�&�&�㹖�	vT^��Id,�  �$�r�@�  f`�5Jo�3�^D�ގ��⾍����� ���g�_�7�]���_o]:Z������7�t���N����S?�jS�_�=*�N�t՟��q_��;�z��UkUU:zi7�ilz�����s���V���o��_�ݭ;j55)��R���7�ԯ��t�&}�f�нKg��__m�U�s������k�������UF���>��z�ڵ��F�5���1'���WF���E1-�9����Ξ����oz��Y�� cٰ��ijk�P�*�xpt�Q����.�:�himwI�%&��-�oOQ��o����G���t麖\p�̯X��������H���w��� �=]~��׳,�����ki�+iSm����V�Yx>���޷��� §I<Öϗ�Q�oKOW^��:�*�E-�_g�_�7IT�iХ���*>,����߂�����*�����~�ң���i��}K��.ɣ�;}��wTm������l}���R֊����?�U,��������ӧWS\QI��_�5���)y��>��������n55��_j=��E��:zZmsS�~'u�;����4���:���U6��`����v�Ni�N��d|}���ޫkF�B����*^�ǩow-�]z��6<�jsS*�XIFl�ʯ��� �����{=��SЦ�3�7�}/��uz��)�������k������*�
�UQ����^n�B�����U�Z���-r�;���HW��~���JZ�]ϭ����q�~:���7�+����~��j*J�x7d�F���i�Z���?Z�iZ�Ws8?D��M����,���U5]<�P�b��H7q�J�.pJڡMM%�Ʀ�ӡ��/'�}W�u5���N��N\�M{y�/���k���}cWQ���ޣj��Is,��}��50���.~O��uM�a������� �tz�t�9~O���6'�k�S꺔������	5ԗ��~�ij��y5�=���R�Jyg������>��s'��z�L*��{������7nN�5t�t4׃��2E��&jh�@ө���N��k�/�mm{t��+է�`�ׅ���n�u���A޽d݂ԾS�~2J3p=jO�s�)���G�U{��R�(�&�
� ,�zu17����8T��U]�dr��p�x��)�04���.��'��\�N�.��[��O�"v%M��D���2��x36p-3`,��W܉6�%b�\&��9���V��kX��V.�b�I�j�/�9T��d���ܢ+Ŭ���S�w��ZW9S�����,3�ZjÉ5N�S|!��Ӟ�*�(n;��nɜk�usp6�|3T�wfe%B�t����vi�2��7|��*EW2�rQ�[�k��mY�x*--��mU�ſ$���W��G�M&�}6�kx��r啺�٘i�[��>L��\�R��&*�L�*HqbCw�Vf��J��5��R�P��Mu\�N*m�M1֝D�fik��8T��>~��N��ΏY*\�Ȭ�:�q?Lz������՞��$Z�$��P���-F��mWJI��6�Eu���z�Iʋ릚���N?Q7f*�S4��c��T�fykТ���V��f����F<u�C�>��=�xKřgI��T����{^�N"�ZK�=\i��$�F��1�U����/�Z�맸�R�������NgD�/�5q�mF�s�� 1I�*bZ
��B.>�:��r|��Uj>�soY�e��׫��h��s�w��ԫ��j �n�z���E0ܯ&��u��J�M��U�Z��Wc��&�|��b�_��2�O��Л�=�^��5�Ҥ�WD�T|]:���:��II���ӭ�����Ң��Zb�tꦔ����r�E����J�Y/��z�]��b��o*OR��y�R:빩�������J������G���/�>�I4�#4��R»�̺�AUS=�)2�A��Ww0�,��I>�+�:L����o	O�+q[�e�mVq�R�J��YF���&g�:��\�驦j��Ӓ��fEu���J�9u�yL-D��E~kCo��SM-%�>���Oܜ��m�Th�3=�x=4P��A���ZZTQB�MCY=Zz�}���B�eB�5��z
*pc��jע������z��m��׭��ץ����<��ԥ��j%q��jT���ա�U�մ�n��CE}GU4���5+6>k�Dn|�xɗ�6����x�F��S˸��A��]�:S���q6h#����X%�����}����!a �"�̸{�<�2璧�؍>0�Ӗ샥��"p�=��:���Z6����Y4ǝ'���ϣ��ڎ�D�O]�By�OK���m�������:���c��h�X�LyW�T���N��j�t����)�G�̙�jI�B|�&)�A��I�cV���EZr�QQoa��N������e�x֛��֍&ڱ��J�Q���'�����8�tj�^.�[Ѫ ��hҩ��ލ:eJV1�>e;z�]4�z4�]qԾOz��e��j\��e����i��q���7x/K���ʔk
	�NB���r����(�ϱ[����F�
� D+%��U� �Q|"suI��]���g���OaO3��nL�{�u��Ia�4�Ƴ� m灑)�&5uiѦ[(ۄ��>��KF�T��>/�z�t�o�]����kk��ԩ���_��z��P�s�n=[s�-jT��*�K��Z�����Sf&��PJ�r�l�8  ҹ�ri�C(����$�/�*�ؒʜ;'�&y����y� ��Q�M��$M�#�7�j��&[$�I���a{��݌�+_�&${r�Ih{�`���$�9l.��V��W| �" ����NJ���#��� �	q H+��q�ʀ��d�x&��'�� I0���v���q<���%j�+�/�������#%��̸
�I E�G�h�@"��J��~�*�@,�*AS7�J@LY�K�,��ӫuOJ�?[M+�E*e��)u�SWX?Kn��_����]F�s��}_[�-v�Y�il�b�B��� �^@� =�(	�,�(�
0��v   d B��=ǁ��� ��� ~�
A7 �09�RH=�@�& �"D�T�"�ZGM$���:UU/W���+W������H�'������3�K Y�	�| �d� �i��n���pT�.��z��i=4j�Ҍ�6���Ek)�1xnv�9�*i�<�z��ކ����u�k�a?$���4��U�Us�"�����~���J�5����{֖�G^٪59���4朝��5'-T�ы�R�����骗K9��m�J���{�Ut� �eu�*�>�ѭZ;,��X޾e�Q�N��hñ (���b�Y�f�Vp���˳*��0%Y	Jc��JS��9���^�x+Ǹv��&�ć~ ��X�S��4I���y�j/&\�PwF]&�+� �%K��s��J�P��(�N��r�p� b��X˓� j"DK,H��J2����f,fD�N STc$���,��Fx-��\pZ��3gf���j�v�jk�Mn)��G}�½͓����5[m:^�5SMJ͟���6ztץ]�ߨz��:*���WSV�8������v�1ҌյԻTϔzu��=j���Mj_`��T���6��V���~�7gົ��[d�N�+.N<��MO	��6��.vZ<��;e��K�1�V�T��{�С)���x�Ѯ��Yh���D$�I��%�J�Қ)�W��UB���I�܃X�/6�0P�`�� C���"DJ㐭y(��d�1�Is����y�S��baۀ�n�R^�R��H�V��ÖYi͟�p��(�8չ�,nqk7���L��V��<UjUQ��j|l_��u�9չo,������3�}Z�&[�L:�&��jPl�Y`�&�*��#�(�	�>@�.�y �A& �
�̅.������U�ES����N�=MT��t�#���߃�uU�f��8T$���<EN�_M]+5E���O��c�zto5)��;����G�}>�j��i�Q�5*&,�އ�� 	�V����qE�SOE3x}����ԪԪ��
j�<���;]--�{��4�ӧQ�E8�t֦���֩u�������/�[͕z�Ʈ��
%�S�G�4?ឍ�CtUR��RYm�m��Z:Z�ڮ�4�z7��Q��5���S��=]1�?U�� ]�]4�QDU�OݪۯSM���?�Ӭ��}V���ass�5~(ۭw���.��R:Xk��Ih�=5h��7m��Φ�u�N�:���ꉾ�n?n��5kN*�t�� j>Mzښ�*uju%�'�_��-=��h%GF�Uԝ꿹��K����R�eQFj\��wm$��#ߵ�R�G��k4� ���f�������5�Օ�E�)�_V�>��m7/�?I����J���OE����gk�KҶ�V��^����>���UZ�*iUV�IK>����nRtlꢗΣT��z���� �N�F?�|������
j��i���Mqսݪ��_�ϥ���61]z_V�έS�`����f�ZV��i�q��n��ۍJ�:����_]���=uiSZt�#y�Ɩ�Т��wc���YU*�k�n�o�ƣ�]�>v����S��UM�f!�eS{���^�6/Ň U�,�H2p���D���_��=^�S�Cgƞ���-J�����d�5ƕ+��|��?�+���P d	�DA�g�j���7(��!^���TX�`ʯ�5'�9�i׭4��Co��i*��|�.x\�ͧ���Z���>��kR��O�u��什֡Z�I�]~��)v8׹JRv?5��Z��̞�7��O��Ɋ���F٤�����b���}�V�*�t���?<��J7�g���f㒽x���~��z~����Ws� 5�Z����Q�*�?U�iTӻ<�Ѫj|2+�ֹ-:��	�z�M��t��z�Щ)}/����uhQy?N����z>��ZS����+����9jj*TɊ��i<Z��T�ɖ���m��z��3�?nA[��el3-�#v�U>U�ڕ�R���F�*B7wɆ��M��ETZ -F�a2&WWjr�pe��
Po�Ĳ7�O�����Y���pK{�� T��I..Ol^ �rXs���P��;<��b�n�UeTr��	�<�)�-)BD��+������a��:��6�;��v��O�xu�����+���LӖi:m|��SL(3S(�ܘ6�f�ب�M�/R�ɯ�U�S[��n�pS�Utn.i�X�Rj�Vj@�`�ص8pJZu^T�sN�L�%vΩ'J"�ꋝ(�n�RJƟM��_EG��~���nR��JNa���*J�RñI��rիd����R��-b���W3��q�;=4�E����V���+V��%��]�:����ԫ��2�Mv��3&z�͎m�))N��G�SR��R���m��*ҳ��炵hJ �]�T�m9-�Z���f&H�(������K�	3+�g� 5J�V���f�	����V�3�=���k�B�s�nƕv�7�ш9��KDmO���K��j�MuD��=�aC3�6H�O%���ћ2�'��wj|�e��.�&�1�S���Jk��5�Jl�J�v�K�=���h�,\��N���A���s��{V�.lg註��V�j��TǓR�Sf�����IN��]�ǧӔr��a�n��(�'���QKr�1n�=r�a�� a3η�fin�i�C�R��*bY��hn��j�zl�E1�D�ja�����+������:$��ئҟ'?���QuJ`t�q�5�FI+�Ww`,�UkCT��GU)J<���lAֽl�=�5n���׃�s_T�3ҟ�Xz)�E��N�]D��x*��LロQ�gM~�6���	ʹ�U��f�U3�>f�J�INSo,�u��Ū\�R�%�L7R�z֚��K߱�U)7���GOB��+��^��Ju:�^O�����UM7<�����N_'���9gI���f�<Ɛ�P�� !��9��M�9(%/#���Y�f$�k
Z��$��$����S�A0��yP�UJ���ׁ�!#tiW]]*���%vX=�;mJ��fOf�����d|�tٵ�Ԫ�����QB�I���Q��S�����~��ZN#����L�|r}�t�iw�mR�Zq�����f��}�=m襤���z�);��;`TҕN�b�a���R���U6ň<����|�Ɗk�(>�t<+��J��hh����霪�M�>���YH�ե��nnV_>�<ɇE�{����ʽ.p�� ��u��Zm;\���o��ЪO��Zj�t�@z�q�}W�fp���:(}��jT��͆�QTW���RL��^�~�OV�Jf�,�MՏ���5�����mw4�Bm���[K�)5d��nj&�f�>�.nj{��I�
�*y���o�/���b����\L�nYb��t� ����P#��N�VX���۹a�D���#�t�����6�����p:'�e���y8�w����� ����J��������kn�sT�Q�W��m�Ұ�>MHͥ�܁���R,X܀������Ղ�$L�"�� %3�V��wd�$�X�xd�#̀դ7h11�@m?�ObM�#2VA;���3�I� L'b4Ld�El*܎b�Y�`W9d�U~lH��I#�D��5h+�H��`
܏"�q�Ep�D�E��� c�2d�r��
��<����4��T��}Ǳ�P3�S$K��a�Z�2X �	w�O��q�6i ��\E����#�'!;�	/�I��"d	�> �Xr�r�#�?R�Ip-�L����պuRG�h��w?5�zM��9������n?3�� ������N�ʃ��'EM�FVT0.Y �TB�  �"~_p� H}��0"r}�U�Y]�@�+� pp��, �r.�/ �r B�� 2�R���D N�V&��O��]x��NN��M����qV�0ON���rs�A֥ӓ���9\�WbD0VT� � Ba ,�� @�I�e�:���:�EJO%�*��%�ԯ����vNpϛE}����t�������AWs
�Z��^�;5fI�p�h����Ͷ�SF��*�/��iĬ�ŕ�7m�KY--n*Xg��SJ��>=�R���;OQ�ҥSW��x���yƧNu&��F�S�}�򞭭k��:����ЯN��t����\x#x��M8��L�k��͉0�^�9�J��Q^,-$���1b���� �DR_b;z�c1ܯ�rex$(4��x)?�ՠ���8��E��F��ς5cC�0�e�vGG9H�K�Q�^I�ઙ1�3W�t��&a�d��52�J1�c\`�@�E��R�Y)�쑦��N���$Wi�z;7�_ЗM��پ�K���ƿ�U]iE5��~}��,}4�rI!juu�]t��Rݩ���mң�ފ/�Z���k/%vo��;�Ą4ai��i*VB�j�5<	,N8��6j-7�%QO�M^ơ%!D�B|�,ܵ[��H��UP�J���j찻�2�&M,�=�f�f���Rg:�4S���M��Z&�<u��#n+k&���{�TR�l���\�<��ي��N��f��e{�p�r�sUI��mo�y�^�z�<�FfLL�6\g[n	�g�6Tk���@�2A%$0I R� @�#��_ �(֖������Ӫ���b��6�}]��OSQa������{�*���V��������QS� �y�{ק�U���i����)�Zz��SM-�ݒR�?c��S�CUe��>ᨣ�ioO��>�R�3����������W��ǣ��	z��ԯZ�*4�I�M��}��KN�Mj�(�P�yi�h�kjSJUWT�����{o�ޓ�Q��*J� V辡�ޙ��%V�N�JQV��h�j��54�vJZ��i�[Q݉ի���Zuա�U)�4�O�n��_ON��U'<���{���iQ��.8>F�ִk�Ҵ�]ue�ˈ��i����Zi�����B�E�N�T�V?���sUz�h7�T��v9k~$�M}����UO�*a��y5���Gg��WF��i��\X��z����Wa�F�o�=ZN�kٟ��WV���U^jrkCk���o���� 졳Y~��� ѻ�T�����应#�nw���*�+��6>���n!դ�i|�?�>���F��n���$����t��շ������m���*���O����W��u/��r� q��E�Jziզ�P��~_i�;����==�?�9g��~�iE[�}Mf���G�w��]m�[�S>&��'��[_W���*�?s���oJ�t��t��w��-��݆�ӥը�e�������m�f3�1_��~3׮~��4.�����ߨn��֪�ڛ#�Ů����]u9��ߒB�"�d�X��!p�	7m���o� qb@ Y (c�/�,J�n�?G�b�����$~{�6~����5�z�>_�U�:�����=��\�{��W]���9�w!�{6����=��{u��˸�#*�P
�9"*@�"QS���u*rK�@ywU7�x\M����n���j��Q*p��T	�A�� R�{ၩ�W[0[���+��|x��}-4�]�Z���j�s�ӻ�+v�2ێ�<h���� 쩮 9�������H�@Z��N�byl�NX�һ'362�E�M��'%2���F�5u^82���́��#��?݃J,ܜ�#wߘ �	���X�wȭM�"w
�"��EYQ������6"�WV�!����r*��Q
	X�"�Ek�[ ��Lj����k��
�-7��>f�fLP��޿�	��F�_ws-��$�DXO #�#�J�bD��3�G��jR(��ד)F
�p˹1���rD�詨7N��A�R�a��tz��E�ӷ&��m��-Z�Ͱ:�Y3�	'Se�s"c�r����M���C+IJl¼�X�U��s0��6��a;�P�RT�o����ęi~�WVv3�,yP�y�k���`V��ڑd�/�ڴ�
&�J�Wen�+ ��� ۙ��+�k2��X
��3s)q���Ҳ��Js"�y"�û��n��o�O�?�:�d�ŲX\e��X�;�l��ͻ���D�^B,�T!���J�m12��C���2��,°�4���^|�����T��9��jW���1��W�sVF�ܪ�MNT�#�T����R���'�DwU��I��UI($�(�U%�j��s��������5	g��u%�w8���r*��d��ҡ�Wݞ~��z��
��Өۆ�,z��&]��ESP�$�c��]VP��]O�N]n�2��i�WRj#W��0ꊥ^M&�4�51���M��n0j�6��?F�3c�Z�~RT�_l�m}�47��U�SUSM�N:��4(m������ ��7<:��J�٩-�K^�RԮRq��US��T��K'�/�nLf�T��	0�S䨳l�&��7v�%haY�; ���� `&@p�-nlj�+sk �`�;Q�Ԯb�z�}7V�5R5q����[�h��>���m���F�F�R�����jUwC=Z���U.�R��~�OF�t앹:*I�Q�я���tR���];���L�}3�M\pZtЭ�c�B�YU2ʨ��H�QGKv��:�����Ϣ�T:%�J*K�9�IzWsjn� b���
9:R#�t�}��{d�<�Rs�I6�=n���G��+O������I_��έ%�r鏍��S�ϩ������z<�88k�R�p]1�ޚu>UP��u6�:���^ڪ]����̫FӃ���>�tt���S�ZV��/#�\�U��7]a���GJk�j��yک;�������k*�t|�u_��jS	+�}��� �)h�:�jYT���������n���M��F1�_�J]�����(�uM�G��WL�P�.RZJA���DYr@�K�!�D�4�gy,ؓ�AE��Vx��D�`Z]�-\�U�S|�?�.�W �.し�4�Jܚ����jpn����"��	��#�ޱ�zڿM6��w>Ǭ�~���U�5c�u���Mr��&���EJ����%�E�E؂D�a�݊��qb�?#%j�X�F�� NBW̕��e�D�O�x#`&ļ��N �Z�be�E� m�Q����0�w`d�9��\6Eb�F}�FE��I����t&�&��@@1��K�1`L8,� �.�# Y�p�9�"ċ�rϸ�%��B� �6��	��D�^F.`"CD�, n�V��	0,��rY_����-�L��p ��^@M�9��[p��ZX���il ����av#��n9)�6'���K���iw+�=�����ʪ���-$}�H�=��� r��%�BI`�88߷D�ӧZ��&��>�鮖�J�����u�:��\J�Ei�T0z7�=g�?V  �/�� A��
8��9
   0_   q> d�H� d�� L��X �p0&� �bJ� ��j��~��ҕ)�t�ד4+A�#�}&AJ6��5��H�ˎ����'�QJ<u(f��7��3�Τ3��Ʒ)�P��� ��"	�
���.	 ���Q��Jkj�)���OV0�z��	�vg�L�N��fo:��X��h�xt��0�Q���Z��z��:�V2��D�
VL������Y(륯U*�N��(�oQ�Z����T��+����UuS��ŕ�u�T��M
���px����m��ҩ}*��xgѣSo���ۆp��ܯ�ҏ&a_����զ�jǛ����2�X���$<�>������K�
��>��� V��e5kp#��#�_b�ӛ���a�Y��S��������e���~@�"�X��3W�N<q���G�q0g�%��Ȕ�s��IepQ��GA�m��͊�4'�a���bC��Ws4�q2k�l�)wb�����%��\$"]�RV�i����ɦ���j��Jg�	|"7x�J*V�@�9	K-:UU�XI�@�P���k/�*��Bs_�z�S��9׹��ݏ5-��CdJ2�yk�:��G'�]Wrn|u��{�բ�v�OsO	G3w�M(��ٿ#�V�� i���S����K�j�djq�Z�S��l��g'S�#����]z�2��sr=ʚ�NrNI伀�8C�ŉ͋  �Y ��J���;���wN�oA>����ɞ�ƫ��~��lu=2���l�umMW���*i��kN�B�].ɖ�'���/L�'���V��iP|�����e=�Oo���TR����I�����Ǳ��?Þ���z��V��SN�i?�������v����P����5_��>����;].���{����[�z��]�F�S�zf�o��.�+�R��w���Ή�X�&oF>n��ʽ��c���ԣ=wO� ��=*�O��N���j��[�O� U���U������u�v�Sc�EQf�䞪��������Q�Ү��M�}��� ôQ� �.��_j�џ����t�*�tj$۫�~CӽB�����4}F��q&�?I��]��F�=����#��CON���o�S��:4'g�� ��?�t۽	��R��J���:����V�M9UQj�Q�~�GMl��w���g��z֎�g�M-J�)i�?3���kQѭ�Ԯ��9<�uE*[�%$�k�n=oV��:n�9��]ǩ��S�E5UMX�fY�g��7m}=�tR� �S�G����p���i\�5?�.H?+�����V�u�]Yd�үV��*+ԫ�4�D���m��I�T��V���zk��_���$�������?���;o�K��W�O����V�{ni�_��^���M5����>&��~�Q��E4'�R>��6���$�ѧR�Σ�����W��ҵ4t���U� D;�z��t� �׮�'�^���&�m��k��[}���u���u�QZҥ�J� s�*{��d��m]��^��u����6p�Y�#PT!ؤ� � E��`,R�TFD�A�R?p"O��[A�{�  X��N �J�k�2�!
A%HI}� <\e������������Yi��ب�|�f���u*�u5��:�_��K�� O,@�J���hZ��Ҿ�}%�c~	n�]�$�O��]�J�6�ශ6��\wR��8ץ2�NЧ$\��ۼ��z]-���0�y�*��^5�R�̫2�T�sM7�6��2�#�&���Z�7N�V��F��xG���RX��C��n�v��P��$�dvVØ�mGɗ�a��H�x$��Y�آ�%�uDܕB�2�
�j����P�H��l~�[�P�o�,�]��w�)C��nҰYs(
�y�%m�ǒ����R�[�o�1.e��dѩ�.Kd�a��]�w̑Z�2��j��Q�X"�}��i^�������>�Jp�;���j2.��0�Vsq���� �1f��!���%cS���r�j�D�,����(�t�(v9�d��_ɚ��e�X���E���X�"�58��Ob2���紁)R���\�� $�.E� !��%L �{j슘�� G|�"np���H���ũ�`� ��IU݊��x��-��r1�\)�,�n�eB��
��\��w��X���l�M	�W��qY�i%�(b����p�H���m�I�W��7�]K�,v�n�X�2�xP���l�`e{��$�x���y�ˀ	��+q$�$�q���2F�X�X�G�²�rݾ 	��rL8�EI'��[�W	Kd���ʈu(%n��0i�U@~��9�T,܉����%va�]���̅��R�$x�x%0۸WCb}��GjW,����i�x#sgj�� ����]i<�J��Img�Q�9���u\�S��QT�̻.	�{���6���岼J�:�]�����ސ�������Ej>V�Z�J��h��-87#��[?�r!�,B4$FrD��j/i�H��-3~BN��G�[L�J��M'����JZ�@y\a�����}&��v=�~�BI�M\~~�
�k�=^��[���iE5&�I��(Nؔg���h�C��3�ۥ�R��s��JN
�Wj�jiV�g_��6u�bKE3u���:R�Udv�o�����h5��pmS*U���$�@������v �V�iL�Gt� g�e�IB��tQ�'esP� EM��I�����J�k����)����S,bR ��93U;5$��*�E�5i���몖�:xDW��Ѫ-�^�� �}O�KwG7�ӈ��>={k��So|{SK��y�4S}����])�*Ӟ�^�2������*K���U8��)�}mJ}�%ZNn���[�U:[P����2զ
*����:��\�� L9
����<[i�p���ͪ�zt:�Ry1�R�_F�5�y��v����5����M��twt��Ezo�%�R�2�"b͕8��?��ؑ؈M�\L���������]ȝ���O_c-��� Oݖa%�2�� �ؚ��{}'^�iU�P��ޫ��S[����ɩk>��[�wU-�����tͱ�J��'�J ���O�,�9�K|���g�'� F���Ĕ�"T���&��@��| '�E�V��~@��"qb��(�rC*a���� qxp`˞ ���-�aۀ"��\F��+�ȲX�p"B�%T�F���Ac�37��	� #�� D.�� �8*�����ź@:��/��wDYr�!�@/�d.	>H������� .����
��	 F�P=�n���$
'ț ��*@@� rd.L�I�� uT���K�ZZ)����nڭmT����Ҧ�JXFz�F���#Sq&��-wPf;س=�>�mU58�����%LLr~sUEmeb��Q�T ��"p�!H �2"�H���@Ȃr#���	�� �#��Ag� K�� ��  d��(  �Qj��]d�O׮��b�)���_C���7MI(0��&�2F��z��lxu\8=n����i�\���l�[l�gW���Hi` [�8-����{�� ��X�9=��� 	�� �:Q�Ӕ�>
�3f�����I�o'�T���UnǣKY�jY���;{ڀ�姬�� ��Ř�(�?A�0\&EHi�(թT�g<��>���k��u���r{*���S�6�]�~z��ocӣ�zu�/��G;�� ƧO^��TTӥ������;����<V�ܚ��ףW]�,��_?,Aj�i�ň�!��P�c5a�V�XG`�r�Y`	H^c�U�����6���������bI͋Ԓ%U�@��pb�Kpfg߱q5�i\�hL���;�[uF��H�&�a�5��j�Z�L+c%q�4�$Y�Q0P��M����	aL0�J�$9����.O�9�R\~��nF���L�|��`�$��êڂ��đ�[�:&n�ʭ�)����OQ�mGے6�5#�^��qz����|l^�Z�֖��T���u.S<�6�ܑ:iQɹ��o�^����+�U7�r���/W�������,>��L����f_sXλը�Ɋ�\ŘF�m�Iw	�W%
�J�4R��%,
�_g��R�������ꡣ�T��A�9;lvzޡ��m����n�w�q��?Y��*����z�mYQM��� ��f��jtkWMI�����'SÎ�*j�������P�z�4�jwL��{�߅��KOw��ѷ���E*���Ӹ��T�%�[U����L+�]�G�5(�GZ�=ER��c�N����_E��?�}-?G�OKN����O�:*諫����="��Ὢ�����_� ��W��U*}KZ�T��$~��Ν~�Z�қ�� '�}MϨ���~��+Z_���	6�ݒ�����?���_OCW�J��}�z��~� 	���*t��M��=KW��j����� [���7����ԡ��Y�p}/JЧ{��}U�*Ў�^/'��=J�릪zRS��oY�l���vU(���R�j�G�w��y���ZzzU� ��	eW��:;}��Z��]<;6|��gKC��n��5*�O��n��kj�[�m��ڻ���:޹�FƝ'5753½KsF�����Ѫ��TԞ8
�]J�)uUS��[.HkӺ��7��;�MEٻ~��L��zG�J�z�m7�*^�~�Mz7������uMH�~k�ާ�k�l�Z�Z�_�>���V��{�Ζ��M��7_�v2��*ԏ� wM����e��V�F�Sî�mcm�KҶ�U�^��K=UB��r���L�4��hGhL���}Cu={���K�x*���UM��b���]�ҕ����l|]���r��T�<�s�PH����Ϩn��������-����'J�Wd �����,8�*��R��R4��k���N@���O�5�鵑��An ׹Pa� �P��P��A}�{�|āM+/s����J��Zu6K[���+�驼�=�jtRI,��c���k^*�k����\�=���Ҧ�$g�:���'.���q(�t���t��t� ��c��4��.ޖ�+AwM��ki&Ӧ�����--:2��^�����4���	��[��>M����w$p�55��b������B}$�%��"�	"�1�g�l��D���V.H��� �%@��& Gtf�)��5>�G�Sl�nqz-3�f�j�P����x/Ӫ0}��ʝ_��d7;jt��d4���}���R�=_I'(詌0�SI���KU4E}7�J�R:u��Oɺu:b&,����'�j��6�/{��o&Q��TX�Su�U�ʃ+�N}��.�
��S��V;�.,�+���1r;���� બ�NI6��.s
��\~�i9�9͉lR���*�)� �Vrc� �ڥ�E7��x%+௿$ֆ�\)�Y�JH�Bn.��W`*w$�C�
��exa���W�^KI�`s
�T�Į0)�ZIS�k8g)]����<��Y]���j�I_�Q1��w(���<lA�U���[��� ���/�D~�E�d���G%����W�&��N����H�va>n?P'LyH�6�L�4�M4g`���D�r��fa)�B�j`�X�iL�X[2)�v��$���qK��v�,e�r" x�"-��U�7���O%�M;bv�%y�:��r� R9n���j�w����^g�4�FF���3y�E���� ��CȻWeUZc� Լ���홦/"m�,˸T�Ki��P�6�?�/L�"��S�2���KKćL�R��^�{�t�� �1ě�>K���t��g9���Vl5*�sjf�j�V�R�6K��:[�C@e/�%2�:5�!Q{�ͺ\,A[��)��Z�킈ᄕ�:m.�
��&Ri
]��r�9pf:��	9�N;�0�;���e��(�rJY�s��Y���Ep�"������X6���zZpx�	}�����D��B�l�HN�S��F���t�F�L'(�pa�`�=�^��]�W��]���^��k�*�����h���K��~�K���)Wg�OkM�I=.?=����+���K�~iu]i$�#uSؚ�<Z{>�t����T٪_�ۥ��
i����)p�:T$�o�p��f�ɣ�N!R�iQ> �һ�� ���D��:*ni)��D85Mr�T�b@GNB��Pi)W�������������W4��\558+�J���Ą�0���r�Dhd�`F�,�%IrXY@aI��.�)#S��Z?���&đ�����gX�bt%p<���V�)K�'mZ�Q�S�غ9�$�ԏ=j��u�NLU�n+˩E-��{uSqL�{k��A�)�����1�56﵏-Z-7��
�xj�Sl�M�R�����I�c.��'���:j��5t�d_I�>�O�Y%���GON�����Ч���ԟWm������E�#J������78.�uSSVg���.���q�g:�tiU�>��Q�-u�Jy��j$�Һ�fL�;�f.�7����vO�`ے�X��@b�f6���+�qՂ�̞=�����vo�9z��-5]��֭�S���[�]ΧV�G���nLb�WL�8��+�`2�����:��,I�M��bJ��P�[ \Y��[�\ �e$܍ϸ�ğp݄��OBdM�	2�N�9 ����d!ف�8��V@��������7Q �Xs T�,؊��� ^��L�%R��6\�����"�Sn�r�C�p�#��%@4T��0�w�2 ������|�f�T�!�x'�� ��Ğ�܋^$�@��L�e����� �b7{b�{[ReG&JLX
�$O�� G�17(b,��<�0G�\ލj�ҖK��V�����ڭ%5]�Ց��h-��M_2{�~NTyGZc��TUn敦1�y��Ly$�ōɖ�*��?5���L��M1(�>��魵�5�5��6	�v�5sl����� '��T�r�(�B
Y�c����ܪ�Q�Մ���"l�P �P���/!�`<^I !��Z.d���� ;�9�:��Q�Ҫ2zT�3��g��Ã��Y�ru_�c��6<ڭNMש��ݶk��|���x$yDT�/ D���+�� K��< � ' ��R
� n8 �3T���'$�u#={������:�[H��[�c�Q��R���#�Q���K]T�.��y���vm��a��p�e�j�H,��8�Vӌ�ݵ�נ��o�����s7Xd�W_��[k�Qm-n��k�k�p�~�ʧY�_���S���TT�הr��7:J�t�5<����#���ՙ��h��d�&�O������q��N�t7va��Z�a����]T�8��c�e��o�O0s�Q�d�������5WS��O&n\5g�6�Ȋ���g$o�W0G-�djʛ�7긫.A�F���;�$�(�x4��)�uhEI4S��ݢ�jH�&6��*b{j��L��V�Б�ũz����]I]�
�z�Y8G:�ԩݳs�_�=�sBnZ9W�Q����-�i���g�Wz�Z�Y۱�Uu]��Z����ٹ�b�]b]���Y<� Q�F�y.&�=T�����\�Mk�6�ܑop��33r�k�i�3$l��~���4���ii֥(��#�I��m�'Ӵ�e^�� S�?��>��Z~��Thj:����O�h�~��{�R����:��N�Ow�Gն�/UiS�J��nZ�?m��]/L��)���iS� s>��z���I�,�����:��Ut�Ә�D�7����[Z���]U��Ǆ|��>�B�}J)JuR�w����Z~�SY�]1�mw�j��5���j������E��k�^�:t�����u-�9���f�ֹ�d�_�Rl�&����~��N�_�kj�J?S��W>��n=GeN��a��4�Q�*lJ?k�>�����{-�ү�f�������}j���Zԧ.�3�~����7��MJ��Ѣ���3���7�n���tL�nDW��>��:u�U�i��j��M(J�Q����4��;�j�T(q�Lz��m4�V��_R�u���{v��_��u7z��ig�=I��G]�u�>ޟ����m��uSJ�j�������]q
��H�)Y��.��6�^������M5�L�~m�Ȫ��k��E׭j�+�������im� ���V������=�oI��_Ci�Rx��_�ĳ9b��\������5W�E_���<����T��;w��� �K�� �2 A�d\�dm`��G�?N��ҫ�7
Zn�$��~U���Mv�����$߹(�^�����Z5/�+�� B� ��:����ujjUS��n���R�ܷVL$����y;�EE	O$L�`!S*i�� �P�N��V r9�4�rA��GQF�F]F�K���%M��� $;�`��a2H#=}�z˩8H$����ӱū�i���)Kn?G��,�6κ��t��[X~Y��-iĶ� Y�GZ���ڴ]/[SV)Ӆr��p����ҟ�]t�돹e��A��l��#���#�z����E]]}4�#����Z~��u��-�pg��k姈6e/���Ў�C���T�<48=z�Rr���,�jV�%�P]77��]����<����++�#K��:[�K)��j��S���=�k��)��:��|�K"���jn����>�#��\AEe��{ӵ��]P{�%���Y"Gb�E,.	|0���V
�W=���+ �M����x� ��ȂB`W�٧Q�6�b���᷃ϼ�����#˼}����"��;�;B�y#��_p.V��6���b'	�:�86�Tt��Od1^�kE�d�O:�U}�0v�eR��V���O?V�NI0�rۆKE��9�'�rR��b�`8F�}3�1�j�L�"+)�W�`�)�MSL<W
R:(Vi�]��2��Ņ��}�G)`³B��Y8,$+����Ho9�T�x�e&��ң�"*�E
��&T�*R�$��Ų	:��ק6<������+QT���	�����E�DI�E(!����]E��k�"ZDs��F��̠2�,Օ̹n>� ��L|F`cI:�������,s$I��/R��E�%�Wvi�X�5���g$m*MR����_<a䮞��XP>@�)����b���&C̰$!����Y�	+�Y&
�Dr-�eh��20x0�DS���4��e|��D}��"�ʉ���$I�E��)�������{�3)�sr��j�X����2�]T��D�>	���:S��y-.x+��^bl-�4�">�\a��k����#�8�M��U[��	>Y.ZkS"������5�Ղ�,��%7WW����٦�Vg�`K�0:٥��iS*��Ⓚ��Rn �U����N ����o�D���*�B�N@ӧ�$BV'Zw5�>P�U�2t^�u(��꧗ J���7ʓJ�]٤�J�5Qt:bR;:�t�U��bZ��]����o�:RJ��]�K6����}*��
{���̥	�� }�?L�үC����=�{]*]�S=*�j����%��b�̬�,��+I'��Q��ɤ�M�i�6��DѕM��eQ\��i.�a�� 3��^ME��-b��i����5Of���6�	^��iv��n��Ȳ�}E����W�Q� �.&�O�\�R��2���%@	��P��X�̆��"Ơ��\�$E���� %p�`9+���3`'vek$Vw �<��M�#Q&jqK`|��J��r��M5���5�UT��|�=z��b������.��URR��j�(��TU]k���预�gᙪ�K�z*t,����N��0꩹����	]
�h<���w��_k�Q0��y��'x��J�<.ū��Q*��S	��5B0���5[���"�owTm�ۙ�,�������uu8=~������?'ͥKv�Әů����u��^S?K��Q��U+�����մ�׷�4�o:J��19*�>n��t�	U*{E:k��is���3�H�
,�gr2ˉP/{˜��ܒR��?+���R��ZO�ni����}A��W�yf���n��F�4����	."GU��c�(�ͤ<�� �Cba@t��	1���$�s����@2�^;a�+�"9�%�
��ü20+ y�$"�o~��	3%��/D��̍��XS G�X�< �c��. �,�#�+v�%�r`�&�*�b%p,�'8h
��&e��Y�Mς�c/%�8r�fdM�n��y$�Üd^lK+0��YD�%����Q=� K��`���	�$p%' � �6�G�� % 0�J��	/#�H������Ɩ�Ua3��Һ�/�h�ҧ	���z�x=�[%L7���Ҧ�/s6��[m�:k���i��qc�
&5�JQ֔JW�I��is$�K�����D�A�i5et���|�����'�t�yw:sC���_�գ���0z�Zq����6�7q7hd��52��%K�¤+�E� ,,8���X/8�@�W�B17+�`y���r� �%w&@H`� &�p�,8Ȑ AD� ��֊�Gؕ�z�z�"�s�m��j����d�m�pV-�j��B%������P!q����`<�i��d  ��@��rI��=����	�R (�'%����(��N-.W���I^禍eZ>Z��:�[Q�;ä����pp��'j��N�G;1�]�K�?Uj0f��݌;<������֪�le��᱆�����ͪ�\�t��7ͮbƥt^�O(�sT�� �"e�N�ƪ~H�����j=��"�]�B!y�J�D*Q�&��n����Y���X#�`���;dD���9�M����V�U����[�F�6��G�$�5�M+(��n5+�s��Y���/���ӡݦs�}J_m6<MS�����s㑛�Wz�Z��8G7]mݳ��sz����b�k�\6GU4��U�y3�Xλ�Ec/U�I����u�3��
���(��
�0%H�* �8>���6��k�3N�?�����\ҿmi��]EU�S}�Kqc~��[Ӷ�.�
5j�Z�^��Kҷ[z������M5��|�O���΅mm4�c���O����Eh��֪���k���2�?1������Ht&�?��um�/MR�F�I|�w�꾱����P�)����J�=$�*J�[G�}c��_j����zK5Å��������wh�.���SJ����m��k����Zqj�g�7~����M��ѡQ�]�X����^�\X�_�V�^�� Z���QǧU8<?�4�;]V�uj6dq��� ���� Rg��� F�'�}yN���:�T�Z��R~�SG����U*]J�0>/�*��}�2|��:˧��G�6�J}/j�M6ܷݟ��[�Z��B�b�ԃ���
���:2�v������ۊ֮�����t��t|�ES���~)�j�Ү�S�զ���Q�վ���tڕ���垍����K���i�p0rz�.4*��r�:�թ_]m�ݟg�;����=
_�����{O�[-��n+�}��lW��_,���7�k�l��O��F��z?��է��C���S������m�T���h����o�kC׫OB�/��ck�3�����u�)>�� �ǽ�e2��-���{�������	�E��G�t�ދ�h�С����g�u��Ӷ�(��}�?�׫�[�멷�f>K��[�ƛ�S���4�z�S>��ĕz���� S�ӫV�[��i�Z�5��|�}o�ͯ�V��i�t������(�nj�ۨ�n��W�~��S����Ԓ?M�F��9#�(�S׭E/���ޤ�wڍ#��Ҟ���J�����Q���f�:w����/�ʻ�D'�X��<��T��u�M�&��@��f=�<�\*��]���I`@ d�Uv O�kN�� �m6k�w	1�4�n�s�?N�ӣ)��[IQTE�������jjW�J>�����Uu;���:z_Q�7��V�o���VG���ZU%�ޝ�:T�RVW�>�\j�����7���=J��aI��Q��]�G�Gz�����~�:���UM�*� �%Y3ɥ{ ��U��h�F�LW���B��O]/�G'̦x����I��o��}}�W�q{�{z�WN	��ۗ�Ԓ���R��N��$�z�Lyc��^��������J��i�t���=N�5���ï��ɫm[SU��&;���T�,��y:G��U� �HpW7]�+��SWO���p½vM�MM��Β�"�7�nnHȞ,�;a��	<�(G�	)���p� S>a�GĀ�T|[������Fqi���.�.ɔ}�
cEU<ۊ�w��P�r����uV�nl�)��N�Y��KO����d��b�?�&s�2��ux����99:��tu�R�<�j��uUNPV�)�%I���%ɾ��Z��A]z��Q�)���w%V�I��5���|����pe�*`*~얔�IXͪ%tm�&Qo$U�J���l����ڿ��fY�l�Y�ې/M��Gr������HK�%���� � �v�P�߸r:P��D��QhC�;\%�l���d3%0�W-O��<U��ѩ(���K��X�;�+O$PדH�y��<�*T��]�SY#]�A�X������5`C��e����m��&-�5������v���8-�o&���ʞQ8�Xv�	uy��k��@���K�'�
��/L�����%��r����"%@w��@%��D���$v����+$P���bĎ{�Vn�w39��B�B�!.{���D��|<2ҡ������U�];r�o�	͉*���\2�S��
���9���!��H�q�"-����}�R�����Zl6��m,�o<���L���i�n,W��� )��,�)�����K�x�̴� P/���I��g9�+��h+�NsT�� ,��t7M�KKs,^��",nWk�+���<�/�m.	�����4��+kf�T�ʳ*_�y��d+U5f�:c���,��#R������6/_VQ=ՄE��ү�Ws1o�3xQ��U5\�%�mX���ʅ�1��W��O� ���Я.dt]�\ck޽{W�� �����H�GܞO�НQ�&��]��_Qz�m͕17���KN�'ƪ�Y�������k��~�EMM�e��U�TϹ��[��R���y5�J7:Ub�Δ�K�vG��WIJ��Gꛤ���'0O&�l�������}���-����E����k�Q�P~i~$M�U/��O�:&#�]}��^��~!�QԚf5?h��>�,�l���>���]M$}/U���U�Ї7ei�c��v����?&��E�' v������JM�йQ���%O���"jn��mA<�Y� ����%�vrV��R�i.���W�٫+1�:TIT,\C2rj,D��o�e����*��x,1Z�\���TSUQ�O��i�'��-%�\��J��4��[���$��4����*�zu��R���֪v�%X�N��s	��RP�գғVhƴ�W��������O��ꛨ��!�ۙ���g_��uE\�\��4�����jWJ���]m˸�_e�)N�}-j\4��~�f�oOp�ECɯ�Q~nu�.��<-�Z��}U.�B�>������ϓM-U2~��6�Y�*Y����X�,�X��-��LU���}J��
Q�AT�Y��yy4�5tk��mA���ƦY�*�t?U-CR��i���n(�_i�m3'�6��mK��������K1u�[��L`她�����pgT��~�NQ�J�H�����;d���i��?{�ժ�KM���wKԪ��k�k��yA�S�NͲ��Sr��@���T�Es�D���b6h�����ĥܮ�ߠ�� jY#���pRo� A�M��da2%p.܀.w$8�,ȎP��/$0|�d{��X303v��Ob^!���I�'%���>�R��H^2�eN��W�
��2�EmY�Ymq �Ia x| 8,�$��L��8Hqi~W Ջ� XO�J ��Ka3��\�T�`pmi���֍�o�<�x*��h�N���L|�t�oJv�T����h%��N��^F�>Z�Y;��=�^}�b����bj��Nצ�u�M%jnwZr�mQ*�FLb���c��U�T����0m+b{���b��i_(eH
��o�%lV
��9O��wPr֡�m6=�˥�~oԴZ�b�R�~�w����>&�a^��nVlx<���zuQ�a�]D�,�D�J��檃t�
� �I;�.g�� "��� 11�〽�aذLH��@@��5l�`��J#�'�" \� +d�P#� �x"�H� F���+�K�(� �@@ ^ F. �!x 8�	�{HY�I�*�; �#����� �U��e�;SZyG}=Z�}�<I��'EV���S�}M=jkVg[5c�S]��}�V���V{��.��z~I]�ZkU"V�s8�Ճ�$M����V7e2sҶN��9����`'"�v��eU`ҿUPUU���#�]RF��1��#��W�ҥ6�����T��Z���mp��n���^�R�kI��S�l���7䏡^�N�S��q�v������I���;�WO�*�1UU��R�+���4��c^c>��v�����sc7l�3��z��UŎd�*k]n2f[� 8�	���%�7���"�7�J��� 3�ڒy7�_[�p�`V�y!@�f����� m���}B������ٟ����ļ�������J�T��SMQo��X����o�Bz[�*�x������oV��J�Z*]��5~��ҧO�O����:U��;OO_R�ꦛ��¿�>���է�Uj:��B�&�O׶[Z�S]hՈ}Q��>��ki�z{��T��R�r~�a����t���t�4�É_���v�z~��u窺�R�ě�v��g�h�;g�w�M�������Y�J�Ct���ǒH��;z�=KaMJ����L�I�R�O�:tꄥݟ������U;=�Zt�wNW�k{�~����[qWK�J$�G_�
7[ꖛ�ZO_��-�zf���P�4ڞ���OΧ�M���kWӣ�^�O
�&�~���7Zn�-�ӕ�T�����R�^�n���m?z����F�ΥQ�oi��R{����@����Gi��8��������m�^����}:�\�}��:����l���(��	��[O�~��IեN�/��� D}���}��{��<R�Q�y��CM5�Eu��G��~+��J��B�r����+��)}=)_�W�� VMϯznҖ���k�Y��q���� Z��O3m��Ƀ����zI5�ө�����~(�{S������qܸ/�k���q�s��]^�/W%V�*R*V	�V�@VL�Y�
)��� k�g�r}�����r���*`}��-/N�� �~)`���� "� �)�bAoU�'7(��˫���s�O��z���� �l�G���Wگ� [O�~��q�ܾ�A���Qw,�)�+�H20=�#�
G< l�� �B�=�P��K"�۲�����������}4�JIn,���u"Zi�&�����I,����_�=������֧������m)A7U:4Qocu�;e9��W1�β�w>����R���SV��|���i=j�i����gA����kU׮��n��:N����5k.D+�V��Zt�pg�m4�:��_�ӗv�k7V�^�`�������uՖr�tԪjv��s�s�)W�QE� W#�%D ����ɵ�,m^��1NҊy���i͋B}Y7M.���'�Kf�)���e��<��/�ѣ�u�{�i��$u�I��FoNZ[Zh��:Z��W
&�;)��o�%-�?�p����ƫ�VId������b�ɨ��O\�����@� focNy2�\
�}Δ�4�q�/2{h�M�pwUR�O��f��t�]}ly��	���O�+m>��cztu;�s�y5\L.D��D����$��c�\�������n��NnstK��W�UI%�:;�BwpQκZ�f�F�N�9G�z4���m�G:0�_ j[�,܋��]�U�x�ʩs �JM�R�kT��v�Δ�'s���U40��Z��_�ȫ}����1u���=zܟ6��G��_kpg��z&U�h���kN�L������j�,�Qm#Q�H��{����O佥�R�H�rY�R� ��ܸ�<,+���K��/q�<x*�" ��w
�&!/<��ȋ!e��c��� �<40�p,B��~K\�3�T���]�w=iX㸦R,>�/�Kɪ�,re)��d����e��:Z}I��hm�X��
҆��f[F����0��ɥ��c1
@K����y��G0�c�����ܭ2SLd���,G9���J�J$�*�H���U��ųX�FZG�|X�R�M���3RbxjH���¾X���,�M'Nng�\a�蔴���!UnI��%Xr@�o��P�Y���Eͤ+sb�gVͰ!LpL`��JEk�7���Ş��/��8� �(]�C�ߡ��0-O텒_!̶~���8�ܲT�s`� Y����K��n�#M���f�W���\��sv�V a��3�I|d
ڑ?%x̙J^ ��������E����	i� ��kY".Y�_~㜯,�K�B��R�ᚪ�S� � _�	� I�b��݋	Ĳ^[�v,Z�f#��.;@�E��I2�F;�Y��T��w��T�;Y��Qv	8~CNb�!�0	c�P���.N �$�SLt%n�U��:�קú9�z^����eĴV�����J�}�OI���&���Ҫs���]3u��}N�X�O��vQ��W�jSL��������&ݏ���qjZg������ B�5����y��w=:�U8pyޕM�\�+��K��C^�n-FRh��H�ݬD�PA���H���+�5 ��Z�Yrsz�y/Kjx�ӹ�Q�8F��Y�+R��qI?p��C^����{m�&שnh_n��OR���_B�W�*�����E������$�T�Wl�W_a~!���{�� ��r��Q�\rs��P�~��ĵ%�sӧ��JU�~I�ԔT�L&O��i�G���g�;S��J�+IO'�Si]�>�cɯ�/Xٵ+^��iz����%�~V�jlZu��cɯ߯P�5mZc�����o�ԥ�?�-z�pU��Nյ�L5�n�\���C�i� �%�~n���S�N�}���<��v�p��%����U���[_&��p��k_$�_���1�)ģ��{����%��M����y5��C��5WK���k�]Z_�v���gV���C}�P�*�m�+R�Էz�KV�����s�Ltt������7�3�ӭ���V�� 驥<ŕ�M+�G�����i�L'�>}[�MG2�<ڽz�uK'���ժ�����*Y���x�oE5^e���n�1T�8=�oL�<��}@F%����WR�(��u����:�2~wI�Ԝ�COV�͹9���:�,��y���?c�V���O��k�4�Y�9�ә�^�]�1-��^��s���ɗ��Y˗];W���?r+{3�L�n�<_J+����_�[���i�j����ǃ�G���5_����2���l����i�],;,�u�j�f;��m�WRjq5��zƾ���>�Uu���r��т{2ɉ�<��k�i���.�`�V`��E���./�ۀ"l���!l�5�嘖�T�V�s��ٙ��m+�Y�3�N��8{yf�n`Jj�^�Y|��>D� �($NdLm%�F&�n@�#�J@����X�``�_�(O  ��x����T�d��{��0�.�9/ �{P���+�L�/o���F@r /#�^��  ����[��B>ȰU1�"�b�4�}��'� qe�s�Nճ�;h�*CL|���:Q���J��)]i�IKV�ϥ�Σg.;ӳT�{�9���V�i�-:	#�Qx;�J�j	���Ӣ��v5�sT[�&,m�OJr4�>��,^�:*c��O*�A�qsJ{���Ȋ�KwF�jpK�
�s]&���G�-
�q�k�SL��I:MD�0���24���=I��WN����|����kl��p�G��M�n?C�4�5P�b�c�U�]�p{y>�T.T�}M9�ƴ��[(���FQ�+��(�U?iu1�zQ<��3�U�㩦���t��f
2
גpZ�#��HR�b.X NA\p �Q�9��%'  
�08) p> �(��@X��  ^"@n${�_r `|=�#;��c9�B������@F@)"e"���0 �Gb58 =�� ��� �0 �X�� iUh:S\(8c�$����t]?�z��?��N2t������ޱ=�_�"�}�tz�i��~��58������(����[ާjb~moԏZV�GZJ����7�y��UW%�K�G���w����%���V�2�?�ݝ'��#�W�UUV3����6y�RiV����z���'RG.��p�_m�w���E.�*�9:�f���^��̶�߸Y	�SWK�n��w*�}�D�)[��(��Kě�������YcV�U]4a��6�➪�e��*�/&d�����dH#pR:�G ��*y,!*,<H ) S-�d`	�c������ѳ�Jtut�S]N)��?'�,X�ɩ���G]Z�WLe4~o�m(��=*�Uv����_khQEz�E�UO���򮛍�{�z�5���b���s��]/����~�]�:6�QO��}'���֩'�ݪ{�)� sI��jj��� �]u�rM:+ԫ�J����R���6���'mjSV�_���_��z����E4�i%�$KG��_��Wv�[g�O}W����������� �M��w��Z)�)�~�7��Z��(���,}���~�}�:�i��Σ�թ����:��K��w���������ŏZ��6멶<�����-$֊�U�V>&���VV�4i��Y���Ap{w���?�w:��px�R��Soȟ ��{�� L���� ��w A2�#�x>��>����W���~��U?�e�Wm'��=�*_�R��~N�c�� �_����[?2�HU��&�nx(�z=^��_����J�v;��_�)��ݷ�����~(izv��Ԍ���l���f����\��G$�/�   ��A�
���6��h�h_v@����4��5:�w*�ƵN�B_uG��4�iuL��W���o�J�������So��{Χ�3���J)�т� ��N���������*��J)X7F�Z���9��V$���O��V\��MWDii�ccJZu6t�oS�Z��э�ۤ�����'�UUp����u5+�<��kQE1h匸�뮮�z��}���%���!OQ�J��Rϙ����UNe�Uן^�EqK���r�ua�L���	�r"�ɬ���m;@X�(�B�NT.Of�MjT�i��u���=;MJ�O���UYJ�\,��ekuU�l')�J��t��&5+�Y�Z���������O�z�O�j�z�M�`����Z�r���kmu�o6>_����p���uu�Y%�H�M0������J�c%��D�@0�J�.� C5Mm<�(�5ڳ;ѯ+'���/�1u�t��\��T?Zkh�k�Zܓ�9ը�f]m��zQ�T���}D��,�ȈTG���V$\z������c
��iv�_��]����85O���D�i�IV�ʺ�����W��U:�̪|��B,��iE��`�.�E�t�Ԡ��m?�w���J5>��� K�s�p�%��܍K�is1'7AG��t�rG6Y-=� E�R�'/�,6�vY*p���ٸ#P��ʁM�䩶�,� H�iň�XIB��A,2��-M��r�� ������-�R6�$I9���7f0�d��M;��7k�vm�κS~��>�v��ǝ)Rz�'���M2g<����'K��Ol�;F�yfn��S �qO$�1��.a�8�ʔ��˴�za���rg�x5ң���ld)����Ƣ}��� �f����	��:�Et��EJ*��G�!��+|	�}�%�-�4�ܭ���NKO���q�	���$vqa�e���k�U���r���f�P�Y�;SAzS�" �F��ܭ*�!rJ��"7
�W�]\�3s��bc�U�s=�UR����"P�m�@��,A;5�U
���R��R��K����u4��(�T��aD0�H
�Hp�M�������~QyWCVB`;&�J������S�e��ˀ�c+�+���"�f�ݕ�t��'9��EM$����QS�]]��dj��0�%o"!���h�>@���Sӂ�	� �3�4ա	�*��D�*�����	d�rʒ���+�5ܩ'���M��nv�e��U�"�WB��jL�������$�J���/U��V$\���Y	B�R�Ѧ��T{m'o�����u�(�����~�_�W�q���*����y���V#�M�#L~S�4�I+�moAJ�'�zP���wVc��zi�|z�sO� �+�?s��M��#ѥ�Iu1�� S�7��mIέ��..����Vi������5�1����xT��W�ZI4�����UwJ�c�~��S}4�S��55Ԉ�����ߣi�9�C�s��4�:Li���x��e^��j����4����c�O_�����/�/�SSKI���*j�*�����ӎ�e���=Y�*��CL|1r]�r�E�n��οG׷��]1�!�J��ϥW�n��Wv����.�U)�h�*�*�g�� ��]ޛ����j\='b���	����I�fc�T��:�~��u�аi8g��O�Y����k\J��9*��f�Q-�zme?bU�S�!�:-U�L+Aʚ*�J9��������h��)�E-J*�mY��ZGER�T��*�p�j5�X�5B�%T����GZ�s�W�A�:jk}=d�N���d�<O�O>����v�>�����
�W��7�t�h�58ʷ�V�[��u1�ӡL�К�]���JS���꜆�ӛ���<��ĳ轼��O&�F�r�����$�k��q�2��)0e7��ȥ���i��!&�,�W�v'�0A�f��a��������-�o"����vFX�H�d��]�O�n"�������-���%$i�ma�hKOsrO�dE�f@)ed~��̼(�e�ȝ�E�̣0P�2���q��l��܁�݈1�2��KfȺL�{�`����bB��"K$��xJC*�� D{!���E� H�Y J�n����X}�Mw]=�|Xi�C�Rt�F���}:
�`�N��D�v�� ��N�uY�t�x:tI5�y(Цe�;Ѣ�����GENe"h�(x�:}5�:*~��O��9�:��/M�)GH�+#] ���-45����2�����Kj��M�b�/�C���t����Jƕ1sJ�ɮ�DHVR�^��J�ٴ�j�j",o��Z�t!Oc�_��z.:J��\"��ts#>�0k�n��Z0UM�iS<���'�6������K�ɶ�����T��W�N�� ���LUOk��.	�#�����͏]T��+�V!�|���k*���}霣ϩF`���c�K���Q��]� �#�^��y�ӌ��U>���X�ʏP��ښq�rj	
e����d$�I�@@�" @���Gp (��`
9+��`~�� �/� �y%�� �8 L�`\�@䌤� \ � ����Dn �Â ("M�n/�6P ,����   ��` p�D��&dHi��Lըݓ0�nF�꜑���#�#�$�/!���B�k�mT��c�0۩��M��;�ҤA���
��ݲ7p��\� �h��Z�&��B��jSMGM�e�9iB�{K�7LR��WS��������5Udf�We��y� �XD��PGw _�b;`��,�'�m��n���m��<�m��gk�7Ե��ק�O2�~vB�������:P�:���vVG���z7��������U���`���oQ�_o��t� ���~���������(�]�RϿ��O�d�S��(R|}��V�m�Z���6��6߄}+oW�Z���c�ҽ/Ө�(��K�G�7?��Gs3�U+�6>f����]U�S}ۑ��&��_��7M*��|]��=Z�[}4��~J���^��}M��P�6��T��l|���u�]U?,�$䠼� ���}�)#e�$
��eY(E���D`	�ٓ $�س��̙uXlI�o�S� 7�������x?S�%ֿ�i_�� Ԟ�������⺯�����D�h����}��4ϯix����� ����~kH���)���W�t�g��YW���f��R�Ve3\Dy$��"�#`���Y+"+~ ֖�Z�(=t�Ҧk��o�F�7W3���Q��"���N�;�m�gm�=Zԯ%gF���U;�.۫Q�S��^�եQK��&��i��W���xw�P�P��T�v������]�٪w�Mf_b�COJ��jUQ��j�R��}���XJԞz��75#6����5�aǩ��ti�>]U���ˆ��*j��>�B��"���۹g]����i�;�l^�=U����]D��=]*jֿ�sUiD�`|���unjf�$d����R6�Ԡ�'J	Z��Қ]U*R��IQGJ���h~i==i)�s�c��2Gl�կ��]��Z�թj��Rs�z����Zu��.���Z�jK���4̖�61�=��=.��.���|oP�wNO�����4��'�޹�U9����qq�NJ�� �����c�z��D �*h��I�@+�S0D� 7NNԥ��J�tD�+1	� ���D}�w*~�q�H�8�#���WpEI�D��Y	�H*�	�F^SA��a��^L�������Kx��t[��e�Usд!^�BJ�4i���:|���`��}7^�4R�ݙ�-?F�Q����|�D�U�i�G�4�� K���R�'����o�����'�kѢ�$����F�uuQ4�c�7�ά+�|��[�Kա�]K��J�*��#Z�-%u] �'��w�+�X��r̕����+��ٕðDy�-Ȕ���')��"�*� %�,��2�L&��p섬NF\; m�OP}�*i�"�*�2�WEJ=�f�b�
֛����8G�����+Y['��gh4���7�L^2�(R9�T�;�T���͢	S�%NU���Wfq䯆��%�ʹ\̼��\;�.���ڳ��|���&RT�����]�dj����2�.ʊݭɕr�Y"_����[(h	g�.E����v�JQ�Dv����t�I�=�K��zoviw-]��Td�ϲ����]����w�aD�74���.[�!�T���/�%L@s _�\}���`�#R�������r|Z=�t� hi��	%Ov�L�E�S�rs� %^J���T X��_������wn�T�̊��{,�g
դ��+��g iD^d5*i%)�^�F�`��{�����*I�k�)w*v�����W-�
q�e6i)���6�p�E߸�6d�& �&�RN;���!>*m�)n�B�.08�\��/�!�\�r���
�K��mܩ��-�--)�C��"��I�(Y2�u���]�*9�	�H����IH�%d̲� �ct�k����i���������¥Rk��Ɋ�L¡��;�nLR�C-)�SpB�>��d�X�.�%��cR��ҋr�>�ޚ�����J-�8N����7;�`���UGK����L��V$��� i^�*�O���A:|(,R��Ɩ $z{$W�CJR4�"�E����S�J�hm8S�if�j.�G
��o�Q���-�M�M}�����|A�>�R�S)D��jm��R���Q�'y���5JO�O��_Z���l�*����^�]mС'%GR�G�ҩ�u���IAj<�4҂�ԛX:�eK~��jY29��v�D+�o�:�hիZT�J)n����m=�u��J˓���ʊRpj�RO�+��\|�v��#��J����s��4� �NxD��^��-4��W7S�Sc-7�u�O����R���xG�i����IN$��j�K���!�C=��&�����D��JT�Ѫ��T�>OU4]��iP҆�+�j�Z�}�&|�oN���mw?OК�f�-<�T�����B��h��W��6��j�����i��(ԩc�UԊ���״���<��:_�me�D����i�Di�DS��+���D�%�2�����ń�ȅ g�/5�O���ryF�bL�rJ��wo��@�=�^�Xr�� ̠�tW���	��Z�U�"�O��d䰛'%�[!�@=�2��܁FI6	��f��L�)0��*#�	�� �.K�ȋH���,�2 ]����'"���0ȳr���L;`��Rv�l^�T�+����l�Nݷ��抑V��2{�ۮSgZv�{=hT������F�N-(����Fڞ��s�ҳ�_�QLB4���$��4|B7��H��/J�h+M'����ץ7(t��Ϡ�G���r��DT��o0���M*o�#-َ����=�\��OT��ӧ�*�}0Ѯ�ӵ�ҥ�4�aXtC*��N�7/L�`aSk0�mY\��86�p.�ɥJ�:X*o�'L�:aL!�\�DA��C*PZ�UL�����L2�d�RH�$v'&�� ��tkȋ��j]�#�K�����U�]:j��0|/[�ΗT`�+ű�MJ��:�ݏ�i��J���O���l���v�N��ĕ�PIrI�|���kW�LWCͰv�a�`<�Rq��w�쪛D����ԣ�ª�Yﮛk�5|�x*�������U�j��*<��k}]7�{꧹ʪ{Q��/�F�V���G���F1�b�(RB����#Bl&�l�Xp ( O�� D�� ] � �����'�b��2�Gl�d�`eȰ^n��  { �� `9*�]�?ض�	�>@� a���
b�>@f@� Xx-�2 �D�cf���@ 
���@�%�A$�M�!u7�ܕV�~�hF�U) � 8!{ �F�@)�@ D�p6����j���}��z���Ҵ�:�j�LX8~�m?�*��uF�����{o�>���:���K�[� �MW��m�J������E-�[i�Wշ1UZ4��������}Sҽ:��j��K�h_쏓��g�L���U�v&����BOy�����,��������m���Կ�~Ku���*���/�*� ��5�z��:���� ��-W�=��/L�Sҵhq�t�����Ы޷o��~y\_u��Է	����|P��z��ڵ:�5+����2KD�SQR)
*B�*r��r�~���`$Xr_t 2pXB{�E���.属�6#��������%�۫�W2P	�r�	AXJ �/ V�~��R� z��?�~O��� �i� ���]�K�%7�g�F���g�R}�ŕ'��K���� �`׹��?C�)���]�_�G�ڿ�K�g?�T� �nk�i��?��I�A��j�E�*!\�2 ��d
� >
�)+�ri���ił��u�}5�̩��>��
��%'�Su^�������a>���G��0�/�:h��ժ)*9���>���QN�V���[n��������,�١��.��H��4��H��J�j�#�-Y?Wf��&����=��RI3;JR�4v�oJ���纪t��-�V����L��It'��>}:�M���몽G-���/�&�-�2�n� ��@v@H��xH> ��E��\�.+|~���pZ�nx0�������V�i�Ԧ��>������P�c����\����#U:p�M�&%�G]�t���K�.|ש�w.�ujT�yf))5�W�T�H���j�J:+��_��]������Z�N溼���}=��=�����jT�Fi"ᦰ\䬳࠴��]2�c�����D����y]-0�rv}�Tԕ�ł`�DH�*w�*���ڔ�<�ثR����])Dԗc��*�GSd�]!�G.�d�0��W�p�Ck��Y����~.Hl��Vv-4����E�EB^ň�����ZI����$%J���MZ�-����L�)���E�:��}����y?aG�H�����t��Ӻ?J��Ϧ�Y "�*:$᫳��_u7=�+��_q�9�����h��g���N��L�,Y_����n���}O��m�J��7q�Uiˣ�]�������u�B�5zZ9��ǸR�<���ǸX"�� �RS��Y�E�D���+4�Jb.�vm���J�7AC�Æ�O3� �E����VK� fd�JH��
�nn�6xZ���G^���Gϭ4���W�a�$�Ղ��O|
T؁RQ��\4�Q�*��z|�����L�ݦ��'�m�؍�7*�EV��
9��§{`�a.ւ���x0�g>�=��O���JW!S�ӆ��!L $���/ׂ߫�#����b�ʙ�FH�% f!�¶�JOe�w^���X����8��ʖ�^I0��4�a����r����ݚm���M����o,�F�� ص%
X�f��so$|��� �,�\5��s^-����ݓ��g s�*���<$m���X�"�zR�&s� ��H廕t�ԋ5u�	7��uȼ�	B���%[�[��We*�I�'!g74�ǐ#}8Y3wx��+K(	
o�g� �l�N ��$��SX�����0E��Ci�i;�d	wvO��UY.@�����'�gM��4��̻O ��?�.~�$pv�z��C^2HIF �N3.a�Zd�fӰN=�U��^���_2K2'x%�gmqT6i8W��A���1	�:�U�g���ISM(8ɉc�xs�*�L7�Z�,��M-ةX�V�Iz�L���V�~ ��T��O
�i�j�Q��g {m�VW[X���/!AfDH	���4���y5���`��u(�F�Xn%�i<���v��|���JܘSQ�t�$�N�ؽW:���3
D$k�PU7�����Ԕ}]��8�Q鄮s�Z�?3G���US�|j�U���\��oP���S<۽ml���FaS��ډv�%�3z�~��^,cWsM�R~�����2�=ʄ�y<���>�[�U�T�d�Г�h���j}Ѫ(�/���V�mE>]Z��)Lh�j�i�����[�Q���N���%S˃�m�CB�����|���j뾺�T�{Cm��Oڠ�%M�Ҡ�M�'�\�k�<X�\$�;U��~�y�N�/��N��X�g st�4�ӧ��i��1*�^u�𒱵���i�:SB��:ҕE��wT��*;�r�J�E����M�5�G��N��;t�bt�rtK%tK���iKdj�(�U�
� �ºm'��'7���S x*��JV.��K|^�(���Q�l51��v�1��w��'G����e�N�7*c�5mum#�Z5�����iGM�S�%�OI��4ӹ����6*&>=[�����>m�M��U�k2�8�Z�;�1ɢA���Z"����n���&��Nrst4��y����L~�[���S2V���#��dr�e���V�bp ��0-�$7�"�� �`1h �a�dB���@�����XQ� 
�,��R9�q�$\Azf�T01���T4�'Zt���G��M��t_U���S0M1�JY�h5	�{i�M`괬5q�Z�vu�G�'�iQ4�J���:*�IB�vt����B���}�&�%+��]������4�:h�ٵI�LtO.�UΚUѾ��t���2�L���r��~���jf�8�`2��UK���x4��I'b�do���[�`$�V�����5�����Sx*�rzt�%)6�i�<��棵�Wѥi�6��m������7�.��� &�/ ���I$"K H�^���&x� F�U�xAa�� ��b,$�$�e�\,�ˮ�r�5���������z^��9�|3�z��m��])����Y�����������0���WV���e�[�tk��SP����#�4E��R�T֕0�o�.�si�#/�Ϊ�2�QҪc���V�#�:��jS9jQ���8y�T��+��3�T�R���%IE�:.碪a����G��%fN�c۩D`��QcR�t5&"f��y���]F��r;�BL�A�H_� � RrP#�#�	��� @܋�@*Q  ����+��p@;��� � '#�� {��6_�	�`�`_���$
� =�@  %|���
  ��{�	=�%ɖ�$���\�!@�!�i�%O���ȍ䎥����$�E�
�+ؓp����.�m��q�};}MG� m r�L{i�G�5��SF�|�������	�i�V�q^�]�p����O^��7��}��s�B?�h�w��}=Th�S�U� vr�~#�ݪj�Jjk�.5_��~�jC�ki���g��~�ͼ=w^�Y�p�C�o?Tӧk�jg��z� �nT=f��M��G�U^��Eo��B<���	Z=Z�~���M���^F��� ��Zti��,�ۯV����k�R�0�EE�/S�b/�`�*&l-0TG� A�6F��v������&@�A+�@ Ѩ�e��)	s!֌u��`�S� n���3��e�&C�/�$��6Y@�8:�muumJ`rlp}M?G��u*�cͺ�}�Lp�Я^���������OM�������^	���Ш�]��,����QY�?�
=qW}O�G�*��oª?�>���D��~'s�4����,K�O�� �5��A����+���� ���[Tנ�������j����������WjL���cDH����3+#���d� ���k���/�ѽTi�i�'��U��ҙg:���-�P�:�#<��3U4��6�/�T�0�}
vzQ
��:�}-/�	�[lΫŭ��x=�Z)�K���˪�Z���(z*�T����[��wj�sܵ�-����I��|�ꪪ��$��t4ڪ�J�#4�i�u�Q�V��Ź�u��M��d�6�,ᬧS��t�-��M#KQOE	I��L��i�Uo���}ϫ���y/�g&��Һ1�ϧ���CU�Mo��Nj�n�Ck��U:uV�d~�k�oGO^���N�4å��G�ңJ�Z�iR��i�q�ǵ��7;�Ҥ�:n�R�?'��M����ZZNRWr|s�GD�Ix"��YVIwɶ�Pg}*KY+	��	��
�,H���G�[uխJ|�f�����ﴗz��@�?��Fݥ���P�|�������{�O��]��*��1�±Ye�&^M�^��D'�tʹ�IĐy�4��Ud��̺'%�|�Iy�z��I;wfTe��  x ^1p%�K���aX����� X�4��J����\E�Ғw,��ғ�4��*m$Jrk#�{����&_���rj�*� K)�����h�v�Wn�'�o�:�U���pc�SMNʗ'}=��Q��?��[F��i��R=�z:t~JU�ޖG�6���S�_�_k�:-:����h�Z�GN�*R�#��a)�HY!�@$�h"Vlix"�$	�J�<��Sm����+����U��'�#I�~_[��t����^�t����UB�CH�kl4��Q�jt���� %*g�>��ҡM����MJ*��b�xE��Ci��|�W��Q�f�_�`4F�Y|��|�S� ���}�-�����V�O�0�>��O f��6<Z�CH�֓G�]$��#�Ԇ���}1	��P��D%�i/�HӞ�9NŖ��SQ��R ���KOvn���[WS�UiY�F�U�$�h�n?Q4�$ʳ�U���$��2��J��.U�0V��m01�y#����H��04�x�*S{��Lԝ��*0�|\��HR�v#�h*2�:�R��IZ�u!5�@S{���*�Mw����L_�r]e�m*�I��i(�ByYUg�i��L�Y�}2�Ba\B��4��)r�#��d����Y� �ɠ��_�	M���#�^UR�����C�C��T�J@˲��JN���vq�D<c�%k���]�q������G�\��1�Ԁ�v+q���Ҁ"�	�ԱM߀�o n��a�f�J�+q�x�� <J@-��yaNJۨ�<8eM��maLa�"R�'&���+1 P�����.䋀wJ��T� �Ii�@Թ3����F���.\ j*�-L�y�����6��U�p'�$����U��'�^��������W*ĥ�B#���S�|$H��2�e����V���̍=��U�B���G�T��ۈKO{�]KiJ�g�Q�V���������|���*_uu9y4���W v��}é����>��_RgQ���Oҵ�mt�'�K��t���>/Ԯ�fm��4���*]L�&������S>�Km���M4����/w[���ٟsm�ZT.���=���/�M�U+�\є��2ڌ���-����Q���unQ�Te�z�w�>��,U��&�t��JF�JdT�6�ctҔ��"dp;�}�u�i�/���5G���xu�N�G�Wg�Wy�].����hiZ���y5=I�K�v\6|�5$�,Z�1�������8����T�T�uw}&�딓9չ�MMWg���*�S2�-Z���.Qq-}_R��=m�z��<Ν:/UW����KT�~�&����u_�+�Ҧg�px�׮���r�G���ME6H���>�10�Δj:d���2�g�T�>��Ӷ�)7����
���v��<4�����~���Ԥ��o��4}SOQ�S��p{?�����4g�ױϩ�fé:SNª-)�n^I
�5�(E��*TD�(�(�Ri.��� ��4�һ�i��Sjt�����S{��������ܱ,ݒ�H�
�A��'[A��a\�#�/WJ��X"8�/t͎�,��W���\�Z��B8�5g�)�wiLOb��=*{\�Z\B��錑S.@���r�B�R{ꥒ�T��>^�֗6���Wb�H������&�1��]�i����F�_�~��)mE����*��"�L|'LJ9:g�Oq�t�4��֢�b���Ub�k���j�F!�#ɦ�s-\�R���$��m�8����\����ȮŦ�"��+d�L'%��;��y�vt8���@-l/ع�	���scJ�~Ʃ��rD��QsT�؃�RiR�������4�X<�t�z��N�t�J�x���ZM�;S�k����m��M�\y�ҧ��:1t��v:SD�ഡ���k��	d�)|�:-(�4�77o&�iO��T�I�#M.~��*�Q�i&�F�_ aRiR�b����f/i*��n�ұp�A�L9j�&�u(+^@��tT�rʩO(j���m)��M��������:*W?�zR�4b}�g�j�4V����z4��G:)m�=	��\�90뤿V�7��0g�S�Z�(:e��u�1Zm�X���;\�?^�h�i+rr��N���0�7��}j�(p4z�	G����2N�VP4z���3�L�dx���m�T��V�z�\{jաqέ֚S(�F�G�]_��O�v��m��4�*��4)nU�*��Kg��tb���UQ�O�(���;S��LU���b�=�p�D�]�<O������4�jԜ�Y�եS�mh�����W�}��ϝ���U�ѽAν�RY����-�;�g�N�J���B�[m#�
Ƶ�f���n\X�gE�� 5yA]K`a�+H���߹���7��s� b�l�JŎ�O�-^B8�J�tœ;t�"�`TT�r����UB�ʵ�#�����~��jS�>~�Y�Rj#�P�,�����T�:SR+*�v*��ȋ �(��xr=��
 ���$G`TF�r&� �1 � 2H+� nE�� p p)�!��2�!(�p��@��t�)=�r>J@'  � �X���#�О�9!g��7 )�e 2[�9  A @,� <��.r'����?�n���u|��{?�{�D��kQ��݃�P��ZtW�TQMU��*O�O¾��]Z��T��v=�q��O��>�p�L��?��;�۶�W�K��G��6��0���� �M����0�i�:ը� D|m����������,�j�.�����uh�[_ݨ���^�����]:R��� ��Ϫo�Nu��OG�j��w?i��gB��Ҫ�58G��~'�yTj�4� ҏ�܈� ����뾭]]J���0�%� � �	$
G�	,� ��\J �$)� �g��u��q4�Fz�d +��@ H��@ ؐ2I*��d�IG�C�u���3ѩ�OIK�%�q��ٺt뮮��g�h�^.}]��QB�iLя������:�E��դ���Qn�z��)�3�����k#�i�SUJ������o�1�xvZ}Z˓ݽN���Orڒ.��Z��a3�k���Z	m��WVO���z����Ҽ�ͻ�HΌ�j�䈩�R?o�n���t� �]G�*p��zt�О[�(���4�[R1c�̳��N}WV8px�pQR%P'�5r������ �;���%�#�~*��.ԟo���v��� d|/��uz�� ����S�l����+$��4��d

�(+r�Ń�r��QEuSj[=�j->���+�{66զ��.O+�U����:�	GԪu�(T���:4����jt}�'غ�S��i㦗]i.Os�hQo��>ΕV��F��֮D�zN�y<��V�G�]�t���EJ�D۹!^�t�)�4���]N�w4Һ��g�_w�*���Ү���O��F�5R�_�p|��̣�]2k��n��
�.2|�}e]��8:��̹���\�0D��r�JWs���������.�O_�<��Ww=:;�]�jWC}�����T�z~��EU�ң����ksN��j�v�Gʪ�MKU[~�w39��UN��L�����L'sH�@� ��/�Gr����0G%Iԡd�{C���OE�����R?S��3�����U֨x��ս`��SA=�t� r���h�sN`�z=3�Z	�J�TҺ\�K��^������F��r��.O�z�_B���~y'�Gu%�J�7�z���7���E-q�90ÿ��D��N� ֩t8�'mFێQ��F�bIǐ!U�*+�:P��R=oSWPn�
i��ZimB7F�O�ҩK��+"h�F�K�����y�U)R,ph:A� ��څ'Jtu*k����<e�`�hzN�ZDWo�}Y����Ց��Eu���o�C�5�a�5�O��zn���U'��)��ҡx'���zw�l��J���y]�|�w&��th��JT�����WW@�0r�VA�	 4��pe"��T^Hk 0����#���Ob͉�� �nP,!�4i�4�u��3_�4�n�?������w�����3UH�.�#�����K9T�c���m=E��|�ǥ*��:���Y_�p��z�v:�Y��wG��:�ԾL�g�V��Uľ�
�(L��f�Jm�� u����I���z�;}T�k�ᮔ���bWc�T5S\��E�"M�	Ҡ�Ix��x�A"��U�E-v+p���^ )�C�J��%� 1R|�Z�7)��G2jP�	0�w7�@�r�ݛ1h��((�T�*ǃI��b
�)̑�\��W���<��B��Ss`0�*L���t��ݐVo�����>Ҍ!��7�2��A�f�/�K��sē��6%^@�� �_~����}�W!Oo�7h�B�n�2ʪ|�G�~��/��!˸�0��Y�i��2�	�$�� �!;`���y ژen�i�dF��
�����l'��"W�9/7"n'�Z��,��.��|�n�	S�lLE�)v�� Yi����R�L�L�����D��(�&��m`�J.�pd��a6\�0�Pw�-�LK�쮀U1�Y����&�ᓗh�i����+ix"��n9;���{�'M�%�]߁1�)IT@�n����R����lm	xr�/J�<�rZl�X�&_�;�EQ��{��wt�2�4.ޝ2��T���}wE/����=4�y�Û�l��%��37�>�^��y3��\�G:��3.� ��GRG
�o骤�OQM����\�-*s2o�R�%EU;�6��H��K��)/!Y��r�HSQ�_u����H����.4���>���3V<�ޣ�����>N�����ҎJ���^���Ԛ�B��J�m��+�(˶XJ�B5UJ����ծ�M�<�nS�Yb=�qJ�<���s<�k�ە��^�4�5U2Q�w^��i��5:�I�W��o.�-�*֮�v�q5�^�%Sw'M�UZ��SoKcuU[�`�A�`���95��`�rN,^ň"�I"�ph�*�)MU'���V��jWv<ٱh�ᑨ���Z�N|�OC}N���O��KnQ�ҥ�f���hԦ��0m>���^�R��Of����y}�cJ�8�ku,�쮑���^�M+�idڳ2��:һ�R�E�*V�*J��#�A����Yj�ɘ@F�x$X�L�=�wɨ�X(�,��4])�^�&6��:��0�8�� �삹8�\�Jpvv���@qk�9�L��)dԺ�Q�Fnԣ����U
���m^6��5����?'��5CY8Ԛr}=��f|�K�lW;��3����r�}��ElrVz�R��oB�)�9i�բ�+��%���䷂�7@e[��o�U��:Nppf�Y�Z0�$��I�\i�*�k��Ӈtz֛ja"�5�&�<�ō�;�G�i��Ҍ c�N��n�3;�b���<���6��D�Z��*�Yr0:R^Q�W��u�G��G^�/OL6�<� V�I:�e�k��E*[#֥%��>�no��S^�����nZ�pu6Ѥ�\�Mt��>�m7'*\K^xk�:�(��OZ��O3Ņ?k��/++髩NN��'�o�x=����r�cP�wF��"����a�S��%ةEٺi�T�o�x6�6�P+�`Ҧ�iZ1䪕�T��UL��i/dj�o=���繮�'K^D.�t�zc��L5>�$��*uX�zU%v*�:&99��M��Ъ������3S�
�*�j"�Z)��s�N�	%�j��G���:}(�ݫ�u��P����Ŏ@�]0r��w��R���8Qs�iO~ƺj\�I�/ cOn�rv�T�s����L�8BS&j������ƽ���*�P�u�\��`s��$��tV�k�嫺�E�\��z�E�M�5�֓yd�E`���V�C������ 3.&��Ң�s?SJ�z�����nkrb�������[�?�Gs�~��O*���5k����:���"k�z���?5�uT� ,#�*�R�ލk��p�ާ_�&�N�����Ի�Ws*�6*���{1NQB���L�QM5e\�[nV;��j퓯�OF��O
��ʪ���^�1ГO%��|��'/Wf௼�mR��*��f��u+��E� �WE��R��쮜�':��éO����Y�}J�X��פ�\W�|J]58=��>�u���:F,��5J5<���m>7��,?`�k��.� H���4 pD(#*�j�y`�� B��I� M�+v$ C#�� 1��, ��D��]�H!^  5r�   =� ATD  8���y+�r(�{�P%�
�ɖ �5���  ����8$r�)m�
���=�zzT�+�R�:t�R��F}'��zʝm�_N�uG/������m	�4i��JY�}[��uhmj�� ����55���u�T�o-�5_��~+��Zӯ��)G���1׮V�IR��s��NX����Z����V��8G����T߹D��> ?r ,�C�#>�\���݂ H �H.UpI�.� �=þ �!x�YR�"�B�� � �������~�n��R�IU����k�R���+�M�[�>�*�����n�G�EUD%��U|�[n����֚ͦ�N0gZ�>���T!o�!V�:�%r�� ���-�zhz����t�j�::yFU�R����RY���_U>O�C�V�����ҩj:��s�� ]j��Sc��i��F�6�|��T��Ȕ�l�Y�_�ޫ�Iujݳ��P�u���-�k�S�f߲=:�}m'SP�G��GS>�➝�);���Q���+΀��B�B�`+�?}�	�û4��_�?���eLzʕo�2Q�U�������^�_P}^������`��x4����~]?��]�l���>�����B�/�:+����/[s����3�;$ri*pL"�d+�Xo�H��^QO^�4��3�:�.�}Z544�!5������(IRx����)�ϯ�t�:��'�m���W�bQ�(�uW�*p��u�MN:��Rt�c�V���b�ӧ���Ǧ�ꦏ���/P��}˃�V�u�UU7,�V������2��U��S9���~�m�+�����y��g�Ge����*>����֦�ޤ\��wdu�o��4��z>���k�]:TZ��1~\�jp��[M*:�,r�����mB�c�Jl�lf�Hy��mDA�G܈�B #�>� ��G�o����}GM5t��/����6����it:úfm���z'�n4~�;z�#/� ��~���^�J�u�\{Cy���ҡ������e5;A/K��������:]�R{R������$g{����UWZn�g��X��:*���K���ںzk���z����߽F={�s�Z�}UU)9I���z�4*���N����+[y��[�WU*��\I�¥-�'��2��j�=46|k�}���ζ�Q�P���J�ަς���^��i�;��<�AA)rn�:Sd����*�
��e�MG� E�Q ykf����w7N��$��:uO'Zv�ĳ���A�*�1N�{��.��'!D�2hS�	,4�w�-	��[}]WQS`a+I��4=s�b�Q�6���L}H����c�thשj)o��m�q������Z;%j��t�$��ή>��h�NY��=?CIC�����#r�f��SJp�^Ʀ�+;�H�x	\@fƓ��`�"^ @F��VA� j	�Zp`�3s@0l  ����H� 9 2R �Af�i1�&@�Zj�u'�[c��KIA�L�.X�_q�U$�~��׶ԡ�\�s��K9jhѩOMT'�KW����X�������Zm(�>n���Bm)K�,jW�GO�����d�U�U)Bg�T���|�ӥ�f%L5'}k�0pi�͢��؍7o�{X���N"�t�H���eB�۰]Qr59b_ T�"��S���H�����I0%Ipa�����$��b˻}��ȈV��� T�-6�Z�rr�\�R���L������<���=�i��� ���t���0*��*G8������D�rf����B$���9r�o�NAP_���R����<��ڒ>��n���q GRj�#,Kp�O��ڴ-�O	�w,NؿtUl,�R���8v��k��]��$� �	IU2�.˒Kn&�j����!�#߀�IS�6���J��l�ɥl3-�P�+�e���&eG V�S�͑[���� ���&1�7Q���s�ؓ���cہ��_�	,(��0��f���E������@;^r���)&��D��v7|w��PS��RH�nc X�6�G�&������JỠ�9�{�ԝ�� �;��}٫t�#�#Q��7]�����?�T�w�ŧ��=X��Y�Z==t��i�4��U$u#�cT��R��u^]r�f+��WZ�XFz�AP۹�R��K�����pγ��LDpl�r��])��y�}OoBiT����Y3^����L_ի��6L�j��QU�>��մ��s�|�}����t��Slv*�S���uV毻�ޚ�sS~Q�jB�|���Rl#��R�νF��|�w��V8GJ�/ ע�d��s��v������ʪO&���p\M{�5�w<��i��U�]u}��T��D��SqUo�6���S�fM�
���t���%�K�'��
Z
���&��$����XRF�1`j!�[�Ӛ�5-`�L�o�AU��]%Us'5��R�L����tҎ������D'����U}�܍c�ҩ������Ju:���ɵWS�*�F�Zu}������TK�δ��|//�MI�Δ��>N�w])S_�}=-E�L��Y�B�3':.�tI �IX���E��I���b$�U/ث e�,,�X�J�v!���� FOdi�ܠbX7�ԣ->�`�M��8$j �y2�:?l��ͣL�99X3��i���G�6�C��3KK'��\���ͻ�{#��t]5�X���j�-�^������y,�c��X�0��V=��]ET�c�zU(�f�8�=[zme�:{Z�R���Ѫ��
HSL�-ɥD��F�=.M-8�&��Z
���jZ��=��MDTD�F��=���'�ԫ��=K�3����+�Ti�d��[�raR���ы_���e��s"�����ON��鹪�H���\Mi)�B+�J���J�K��geh3���f��#v�|���U(�֚��e�~���u9��I�!�'�Ap�;1���v#��MT����I+Y*���0J��5�മ��J�����0j���I+ɅRt�J���ذ�YJ�&,�A�I�W�>��}K���T��OV�U*���\�+�t�MѪi����m�Ҙ�_���:	w*R슩���H��*���+�J��S,��sIHS67!r�㒥ɥLرe+,i�i�����*�5E�M*U���`�>�XM���+�M�R��DaT:�A�e�� ei�ӧ��X��MD����B����͹��]P����T�N���Sm�ۥ#�t�@��eK�iK-J
>^�����X����M�3'��R�o6>N�S�X����&�e����؜�P�団���4���N%+�ґ�Q_���+� �׋���CDjW�>��U:�>���>޾�D}�'զ��&ê�V~�Ez�5&�CW>}]p�}T�J#�?sϫ��=Q�˦H>s���>�zv8գR�x�Y�f��SxiغT*��GM:e/�;#��Ȑ�qjU�US���*�}��UM���Q5D������N��}R��X�¡�=ޤ���Q�:O�kSyH���uR��MS�i]��j��k�~�L��	�(�� ��~�M�rWO d�1�=�`�ł ^	JK�C�9,���=�^ $��88� ^
������)8 ��b�� P�$� ~ @Q �9 ̚x�� 8 E������� ������ ^�-�ףJ�l(��?�hU��o4��>��ތ��7�_��U:�[7�b�h�($��EĖ`�9��S$�F ��� ���� 9 
 �Y B�y�I�ŀrh̚Mr
��҈5ENIxZ�����>�,�zK���}OIҲՌ��w��XI�����)���Ҧ�um�n*�,sm��U'��V���j˹�hN�N�'Ӯ4tZ�/H�N���香�>~���m�fw�S�]U<#����W�SUO=[�)��F=9�C�՞_ңQ��k�����uU�|��ըߓ߼�QE+KM�>n���Z"W��Ԩ�T��:4t���r|e���g�嫻Ԯ��l�M{�;������X���N�&^�9�۹�1-9Dɤ$�ɥ�?�i��H���J���v�2?��� ���zU�t��f���qWV�Q��2O���dJY�Q����f@���.��{T��ݟ��W>��?�?o�J�B�R���/�?	�s����0r��Xi(B��2�m̩ *V�y
�]QM�����x=���U|u���GJ�&�u��C�܌� \",��F�[U�T��? ������Gm蔪�Ի|��ך��4�W�M��M�j��=��h�n��3Ч�XӉ����~o�����C��W�>���h�RKM6�s��&��:�8%�ּ�M-�}5SP��U�W���T,bǭ�ѧ��c����59nT�4�ꨩ�cH>O�b&�e0}�Xna�|������ǿ�W&
�}�FO!�%�@������ΝF���MN����h���u�Sۯ��Ϲ�ʽO^��;m:����꙼�3��u��J�o����iU^����?9��ۊ4�޺���m��<��5��ow��뭨VK��U��+(�I�L�8�x���;���?<�?M�uG�kT��	V>o��:ԧ�>e2��=s��,X��Z)�J�(%%�T��U�u�B*m{�Y+q�� ��Ob;�� �y)H2�3I(
 %v�@����)��������E:u{�1�A�����])�����m�GJ���S�M�?1����SE�Co�z��7��'���i�Е%#��J����_C��I�R�������P��N�y��(�|	
b Ip,G�dE����B�*�$�
�b��"�x�L�" Gt9�U�$�X ����Ip�rR ��e ���$<\p E�w`v�$�@ 8���.��ɗBgL"yuv�V�L�Ϧ��C�a�e�jx%�u����V��G��\�?y��MT�&��ҴuԺa��]~?�ħ-�>���u��"�W���W���׆0p��Nnm�Ә�-6����;�a��IR�H���A[��"OV��R���:X;�P�̷%k�Cm�"汗$��5R������$iǸ�,�Y���WțKj��k���4�N܁�i�$s�3!]X���s~j_qiL�]	?<�����+�*9D��[
Y��M00�]�T�J峷(�ݤN$�}�sJ�4K��Ta&�b;��G�%�2��]��g(�E>䏸�6���j��%b�J�ȓ� �8�g`�6AC�LY��6����A�������V��b4�&��k(	ʔ(��@�o�ZpF��E���[~�gjܽ0��)��/�*Q���H�5h7t���O�K�A�������%���ܭ�2I9�#0�ܲ�S���
�hFe�&Ղ����b[�d;�W�
����5�>ęWI�D�`���AEʗa�R��r�L
�vh��+i�s3f�@�$�E��&ں��~�i����WOf��Gm��ӥ.��{���=�4�J<��t�+$�k����nN�M� q���n�49�OJ���bɕ-؀�+���Z��%�T��%���>f��h���Rx5���+�������Ѧj�~��_�&����*�����ɟ�[�.&�Z��z�;��:uW2��]M�eo�i§�g5J^�kV���КIj�lf�?v�U2�J���*��^�ZXS��^�*3�j��n�º���n�D����t�\��n��w�݌ewdj)�J�T�Yw$3XX$�E���--��VN�A.ԇ�rT� WP�TEؓ���02�F����(6��؊�Ӛ�}��Ԩ�7��5^U�ٗ�����\*P��]x�[��Ǯ�/����W(�J�CU\�J�Һf�jP�7�	��bS�7dnF��cI�$DʕM�d7�թ+���kR��x%;h�ϱǹV�\UOU<>�G*S;ѩ±zf��=[Mw���G���^fy^�p��_���U�<��sc��=�Znjos�m�:����uîq�6�H���\���B;���g��0"���`�Q?R�,�$	�3��Q1-���x"�K0!���G�-�G	`�$���`Ɋ�N��&Ge`9<���V6�f�f���G*���������í�����l�nW�}*����ZWRk�?�SJ��E��s��S�>��V�Jbp2њt�\�U����ヅ{ʜEO�|Tק�xF*t���{����]n׃S�OOeU�U��ʽy����K�~�n���s�uڭk�_���|s#��,��꩷|�g
�I�G�C5�6Ӗ!��
�a}����_&�-)Dmg�����NL�r�Ե�N���	���)9���SV&�\]�I��:��s��S��U8������%N�ܠ�j��h�9n���RI/�
��s4��6�k�Q�Tخ�����Δ��6� �*rHR�V��87D�(�����y�Q����GK�g��k��>F�YSU����MT���t�Û`�����94�&UO�MD��X�A��@D�V	%����T�F� �)/�i#�F(I#��]�G�2�H�R	\� ^	!�p�.L��u�ه���o�M��i����WI���3R`Ts�i؍�fs���&:����Yɢ�6�u;�xw4�K͏�U	��<���p�Wů���K��U'T@�%tk�Q��>�Wv�t��Aƴ����c��-����3�Ύ��m�QZg��T� ������U*���G����B�jU58O�h�{6�M'�BGM
�j�g��)k�}}h� �M٧D�t5i����N��^]m6�C���ߩL��J�G8�鱸\�˰Vn7��" �U<4�U�Ţǥ���Զ�������� ���EWCG緛Z����RjVz���\��ԡ�.s�m�+����~�+�ed#��\n�ST��
�*��I���p�����IʰC�+ �` 0�n�&� �D�x����l0�$��  �@��� &��NFy� ���P��� L(�PA�ex2� �9 
�����k�� ��� �l��'� %]Z���G� �U� �=_�Z�)E���W�i��f�v4� �#`d �P$�،���$0	ZYQQl����ҍ���N���Y�R��lG-�W�}w�;:�;n����Lݳ�W�^�vk-H�o$M��#��j>��Zm�ę�D#)H�@�( ��A67xY=Z{J�SU�>�}I��{���)�T��T�kE9�L�*�7���Q�l��1���:{~�g>��������)������x���ܥt�￪(��v��N�n��5WUuU�c�i��1�N����N�.��ө�K�Uo�Y��}]MM-�������6�ݞ]�Z�uUS9U�䳔���[��J���7���rˉ���T�ɇ�ܜ巂�jxEBY&�Z4*ԩ*S>���t�U���&��W�5��?M�$��|Mf��%ȗK1�o��Y:�p�D�hS�O��N�OKMO����z����G4TJQ�� kIN�*9?������S��v�v�N�܏���B��N�?�T�ԫݚ�ݙm���M-�����DT���T���;4����~p�u���3�柧��S�:K�?�W�uo�$Z�dw�FX�+ �<��,��T�%Y��ƴ*�OS���&$+�W�T��Ty<ښ�j?��c
��qM,���v�Y����&�}��*x���?U�լ��/K����b��58������QM��z��J��Ӣ�je��*)���i6�w��#���o�Jz���k����T#�5k��J7������~��d���)��IuUw��s��q�+ִ^����u[Z(�Z���]T.�wگON&�Fu�u�Uj4���bl٤��fe��a�����}
�R����S�BK'}�uR�5?�cu��>QM�=ǩi�KT� �Yͫ�<>�WV�r������w��uT�J磙�ǫ���9بb�\�(�A!ث��H"]��H������x�Ӕ��z->��~j�~cN��u)��.�	#���/L�(���v3�j?5�ڝ{����ʬ��SR���)��D��"�G> $�ҕc(�-%xB��Dv/Cn�Oc�է��p¼���m�s���jW��������ҳ�J�����4�{�v�4����m=V�z�G�?M������T{1�����oG��I�~O~�����hFᶤ�-��K�%��E����GK��{��r����XD2���rk7	H��HG� e$�\9X AB( "� D�.@� P��)�� <�	�	䤴�VD�d 
�Y$���k�� ��IE��l�+\�8 @" pI/��(#�J��4j�+���͹��=zZ�_��>�JFk�������mI�蟵��{��U�W(�*��V����.��$қ���*�
y;7�TE��veI�S�{2ߌ�Jy�*�UqU��%d�#���k�G��rI�0G��� �jy2鵊���d5k������M8O�ivFt��K�")RN`�RiO<DK�
�Wi�u2u4��p���J/6-QJ]9�M��B0�����1f��Q��qW�V��S� �ʴ��g`q����Q�ױ����j�Y"�K�BL�Wh���Hn-tXi�&���J�Y�R�!�v�\.+�X��3r��<,�O,Ӌ6���N��ݚX��7A��\�	����vRV��G=9SR�%����q�@�ܫ��&\�
4��:Z���_�iي� -�$�p�����s3 \ӛl�>���g��dSw-�� ;�Zv�7�a��r����:�x�Is�
�i��0�p�!er�Nm�q*2%� i����f�H�]9��h�U.�������a��t��'!�i���*g����Q�4��T�iG�K�f�?�J��p��|^��K���S��f��5�*�_K�K��IUTқmB<[�S��QL�� �?/�������ani�����k�kz��O�S���׮�O����-�5.��^K���QMIAp�Xo�v-7�9S��e���zi��V�^��=�u�6^犭�3G�S|���^副�V�1�9ժ��������9W�]K!5�qNR�ƭ☥B<���:R�&�jk�V�ݎR�W/L+d%h�r^�ɨ���-��Y�Z��(�N!���Wr�58FI���V@�~M$��/�Gw�΅,�QJ�dX�4��:�t��8L��u+�N�8]H%iW7M/�J"����暋ru�d��ze�q�i2U���鮌Z?�tZ��z)�#�����>��..g�*�֣�WM�s*���54c�ץh#�=<�K�:S��1��PMv��i��N��p�f��)�3�kxtU�Ʃ����ؿk�".	_�n�PER�aZW�)���*)s��}3r��WU�s��4��\w\>���F��e�S�:샺�^JAb�B�%ܪ	��$��a0���	D�o�W���E��b�[c�T�m%Y��2k��r��B�"[<�otT����k��e���j�������kz�6�t�>N*k�Rs�R�ڪ�����ڿ��J~5{��P�rjp������R� :�ǫ�ZT����]O�;�i��NS����Z��N�<�{��m�y�7#p��59KZ�^���rJz���C�m���\Mf/`藃Iw�1J���m)'L���)N��M�ȭ�w@fT)i�!�]}5J2�*�#���[F]T�3����˫
:�Fg��0e4��;�I�����b�L6���N0�9�X
�a2&��L]	p�\&����4���/*x	�r��k��b6�S#�KN��,z��T$�6Q�c�Je��d�]j�p:.�=H�V���½w�~�Ud���J�z�O7[W�7V �}e�j�d���s���K�j͞m�͞�T���(r���ֿK���3ѡWEJ�:���SUS+�Mҡrp��*�^�=���uZM�E��@�\@�`�v�
$�*�K;ZU�6�pZsp:(��5��r"�8�\
�IR�X� �M�L�pT�U�J�LU����i��g�ݑ:��ޥ=��H�K���G�샮VI6��@b���i2s�P�Nl�Ȕ�ͧ>ǟ^�R� C���q��&��X>�EmAΎǧsB�')T�QR�����ɥ�%��ѷ٪�u\�մӌ|�m=�Ӧ2g[�*t��� ��(�u�<�f2tԪ�G56a++{�ݰ}5]ĞXE��:u|~�N����u����YW�JJY�]8]IA��U���=i�O� ��m�(��������g�M�NN�.�(���R�a�6}�ҞO������{]T�P�G��i��VN���G<Or!�%�sp�"K��8�+�����P}<I��N�`��n�:[��xk��o6�T�y>�A�-#r�c�E���s>�e��95�]���G:\H��N��nD�(,2� e� ʀ$�j�Z*`	���d
K������a�M�@$��H� B�J �R|�� ��2^	t����Ȑ %` `E��C�{�"����4�e�  �`�<�� ��k}�g��3� 	N:�7�� Ij�6w�Qj�f���F�E�r�D`	�d��  "�T�� ����K,$Ie�* rD����uFB�G����W��է�M'UK����{N���E���[�c�������鞠���uiԺjk)>O�W�^�������ꩩ�UM_��>��im�k�GJ�*]m�hP�����R��A����Z����U:����{�Z�j�z�QKW�;W�v��z���c�v�M�yc��y+' 83�k�,%T��/M#�i���J�Yj�W�ޮ�EWf}m?Pzj�gǥ�uX�j��[�Q�YBm#�V�h�BF��eA�[
���Gi��\%b���*�ϵ���SթR�8�m)��13�q�V�L��}.�g5�G]���URՏ��_��qJ���9/L��Ҳ�x5�V���'��MZoR������ަI��ݘ7�ש�*(p�w�E;yy�Jv��=J��7�SZ����O��� �ߓ�z��R�vJ ��ާ9/)Xwr�J@F�0j�85N�����+�ZW�~����i��V���H����E� �����o�[p�$f�~���)ɦi����Ji��^M�WV�J�����@�7թ�� c��_�����CS� �5���D�Yb���T��~�y D_pX��GB�j�4�cm��R�^���[��}�G���u痛G��t�*Q�����h�T���;N���[����:���.ݎV�x��\�	��	�z����8����=������7���k}%)K�hm��Ss��o�87F�U����o5֦��lϤ� ^^\�7d�]�*�2�$���5i�z����-V�o�G��sZ�������Bɹͱ�����r�u��������}GZ��<νJ��繮~����u=^�[�S�y*�j��g���n�B�MI����g�z5�Q5T���<��J�R�v��8�4i��J��@.^J-��({��D�ad�q�&.��*M�r-1�v���ۨ�;j�]ݑ�6��b���4ҳE��ʤ�K����M����J��Wd~��/G��z���5.jr� s���W�Bt�����bj�l�K�h��Y��R���zߨ� U����J���>��w{��Z���U�<J��$� ���i("�^]��r�r��iP��hӮ��Ko��c����iN9p~�g�z:'ҥw&�?/��ۍv�4�����}����r��ѧF��I��Ϧ�������"�u:t(����(pKT��"Ƣ�A2�R��Jy	 $v4����p1�ϰVX��@�%�a�� �P�$ �@1�K��䂀�a݀)pX�@��P!G�B�P (BB�,ʸ �#(�n���d��pU	�X{H����%�)��#�:I+�����n�R�6�H ��d�@j���wUF�� ~C��]���Tĺ�w�T�75K�������� ����e�m�(�],�߀��W�<�,$����݇�o��W�����?P�fT�,lf>
����b�9�+R�)�$��L�`�7��V��4g������k��/��$9����4��\�uD�MO��m�N�4�r)�SW�o�"'�j!�?� a]��F���)o��*$��+؉E�u�6�s-Z;��ۙ�5R�R�T)�l��q�%��dQ�I�Xi�w�j��p1Ң�n��$�L'�|�
?���S/7K�'۔��F�a� V��xc��	%!ғ�Z�'剄�a�I6��W�O,a[%�xRI��D�B���'�]Ԡ"��%)A�U�������^,��rݾ
��EJ�PI"K3�)M;� m�3�U^gVP+��bD�GM�ޫ"� wdJfa��JR�Si/������P���)wI�B�_�O:Ѧ�Si$�ri�a���.f��5�9�f����]��ٻN�pCQ�)�5Eu]��~�4����Z��	�(fZm�v(�T�%҄Uq�j9\�Q2@ͣs�Ԏ�|��P؋���P�1h,pmiت��9�ڎSJnM�qɪ+ąrt�
��I/�����%����áp�GB�aQ�Z��x�Og��w\���e=��D�	T�zV�W��ӥ]d4tߓ�*rt����i�U�SJ��t��m��N�,��k~�UΚZ��ě����Ҋ_<���¹UBW�}%�M�E���nM�mi����
�&�1<���:SX��wt�B�u^*���Y8W�UI���1�f�>�!��Օ�+҄��c�Ud�O���V'�<ڻj�I��q�΢�������1�~C���GS�cqJ��T�\���6:4�2F�N�Ff��Δ���T�q/R9�9g���%��-�8<�]�R�y�p}���M5���z�h�#���cN�R�`�YH���M؋x��X�e!M�qa�bU� +�2e�SO'��;֧�r�������}+�˭�IG�R�F�	����sZ�r�~kSյ*�iuR�3�^�_Q��2Y�z~�Sy�KsU2�.����s��Zڕu��۩ݳ�=>Y�)�����]V�ܟ=��f��%�&�o�Z��R���g�Uo�5���EuW.�'JiT��&���S�-,�bCk��������vk���X3��Q���k�\1*��s�ZҿcR3xS^�R����'[��Ӧ��1Z�L&t�ׁ�W a�9�iQTUs뤦��½��F#�z�T�νkwS��I�Q��jwM��d��U��T"φs\�#��+��#�P����*QK��;"&�Q���c K�7ɮܻ� T�Z쉩�NiK�'K̕�q��n*[d7���LwHE� *S��C��+פ�+\�R�E��>
�UB��ԭ����OR�s�AT�A�W��Vڤ�"=�Qt9�'{�5czU.,�x"IUr�U�:j�º��R��Ӫbᢊ��Jv�5R��E�mv�t��'9�J��v�e_Km�By>��m�'�譪�K���{�U1�'.�r���F�:SE�N-4�i�܋����b�$�PD�k�d	��4�0���U7 �6D�9����X��eu,��Z��g���ר�0���Z��g,Զ��V��멹l��Cn�Ym�^�TX�LR��7(�6*���2���A�LpG8V�&�t�*� Þ���Na��@��I<`Ҧ96�� 䩗��WNh=аj�i�i���m�Lg�>�� E���Ζ�}�#�ǃ<�\�����`b��娎��ƿ rt������/ܨ�CN�֖N���J���麔���Z�i>/��T�gަ�U>�kO��E����i�¥<��G9�bM�9�u��d�i��Vƥ0�ʺR^�u*�Ri|�۩�B��w���iB�i���X2�G�nBM�Ave
��\�K�xC�f�ҪXL����5R�}4��5Qk�#�;�������L`�n�l�N�[WEO��r�c��C^MjiUK��&������G���:�ZQG�8gJj�a�d��c�	�
7i$��}�
��$	�y�8� @ \%p���+ �!X {�!PY �DrH � ~���y�J3�!H���  O�,`�� B����r���{����o�� P�B�e�#��� 􆧊߉� "�8�� ��� �v�O�Z� �f��󈷒Rh�#'�ȳ i>�%���ʺ*%�QEU��[�s���VF�Ҫ�1�j�/��?�w����]�Ǖm�*x�W���K�i��Q�A:m���֤�z��I)W1{z�?��~��UK���
O��ۧKi~��i��gNz׃��o�V��˥pj{����d��� <\	���� ��`�	�`TE`L,���ڭu.U=�<K��YN�������QN��I�L���+uUɜ~N�u��ҡ�ϵ��P�U���?C�5��	w:�l>�o���qGWE*��9o"�&�}����ӥ5G'�������p|�խB���n�it!�gOZ�z�)��6�Å�Ӷ����]J$������Mؓ�k���ꪧ���N�mD����b��U�e��׸Zo��ԟ��-��P���5��\�Ou�WUyh��t�j�ݗ��6��t���;���z���^�N�����i�V����v&�/����U�.}��U���'Z:�3|�Xp>
��!�|�f�@}A]~������.~��5];M���� �z�o��3�~(�-����/��m87c4��8���K���6��O�p���:z�gj��b`~���m5�j�S��_�j���_���ZDU���Q���A���bؑ���k�n������_+���������ߓ�ETқg͢�D\���nd�ON�}M�<ښ���L����νZ(��\�o{Hi͏&��h�)��_���F��j^��Ji�&;�}]��u&��|]�wu3�����u�� X�����7�)�ū��՟��y��IČ^�Jꮧ5T�:|�md�V4ȥ	#��N@��ɔ�%I&EJ�U`��]�Dy�H{"���^B�ˎN�$��J͑R=oO��ꍾ�u��[�>���IU��ZK�*�ͤ�{6���ݵ�t5*O����K��N]U�UK��*����6�mC�m�]J�J�4ǋi�F�U��*W�hW�O�F�ѽ-u==5R�����n� ����i��G����֩�Z��d��~)��SӶN��S��~"�k�������]<�b�-z���ꮪ�o�� �
"��\�c�-ҹa�L���=ޕ��y���WگS쀻OM��o�G��>����4��v߄Ϸ��F�J�(�YO,Ǧ��m���Qt$vn]�~J�$ʪ_� +;2�{�85�$�R*P�W� 5 ���%� 8� �.���E�vû��  h�\����R� L��
�H V*,�, �\�� ȸ��pXd�rY XN �l@� ���D�*& ���HE�Yd�6H��4��F��J���R��.�E� D�f�� �]�� B{`
@Ǔ�*��g�����j����ݷV�]Q�A���7��j�f�f��(͌��i��jg�]I�߹yBl���ȉ��R�Eq L�$�m� ��M�x�IE��nJ���Y���.�,}���� 7
&
ܲ{�y����,��,�K���p�D��
ݗag�V���T�<*�>C�0&�q2U&�*�b�W`t�<��'4�h�Q��6Bo�M8䖌�S�:\I�� �sdb#�s�2bUc�|��/�:��L�(�x,r�҈�)�ܨ�K���U)�w���T醞CO+���C�@a6԰��Y/Ob�� F�s"Ο%MNH���	ҞI
�nM���W	D��>L��������>�LS�!�݇�Û�x�?nL������$k�%���E)C�͊�A���fO�<�U��;H_�,
�d��94�de%�X�59X��*pf�Rw
^xvx-)G�*eX�B�!�Ӧ%��i�1cm������[m�b�O<Ah��|�ima��g��i��%�OM����yU!Rz��|������^uKUYIVnn.e��,V�-xy$N,n
���D���V]9-)g��t��H����J��8;�%�B����p8�a���i;����^���tMuE�F�/;�4�v�J]�4s�q|��p���+LT��F�j�b�Q5_jhi��_�])ǂ�8rΊ�Y��T�p�n��,����k+�����Zq2F�}1c�48}V���r��N��n�9^�UF#'Ji�1�P�'N����J�hҦqbj��:�9���T,��R�d���L�TKMpuTM-$T�YT�viR��cN���y��<�H�B�|�:*ZW4�Ve��K̕i��6��P����N�v;t����z*���V�W���}�*�>��u6T�l��ï�(>��]R�zr�_���>�ORo��.`�Ҧm�z����R�����&��{��3v��q=8ѡ	B=TSc��ӥ>���&j��QwR5汯ZN&|��_IJ��y��m���0�%�S�����3V��-$�����MmE2��u�UW����Y�z~�����Y<�z��+�)MY��5�]r��s*a����-}�O[w���˫���YU��H�s���k�_�j�T��>�8-�nm�'
���X�*_S��&���JSsW��uҰ�+USe�5ѨnlE1�rrz�8�9�ͱ��!�K��$����.֩�c�wv5��]U��f~�j*H�G��S��Mz~�jל`�u]ح¹G_���هUY�=M��:���rG*�3�F���P�C�"�$����G��Kg�F�B�z_��6�)|R���Uӕ`�:��1^W�qs?�Z箭D��j�^o��&>�jS��.!Aq:�+�W9�WC��}؝	ݐ|�Ԝ�]]NbeZs'�a6�<X�p��r��2��So��N-%RT��۪�Lf:���Vh�C���5M��z\s��%�|V�UZ0n�F�K�z_.ҹ"Y�{Ϊ��)�Բɫ�	8%�����n�ק�cO⦷9�mT���U��4ӱ��CL��� :�&��J��W���3�E�����O
�YS�=��T��3i����J������H�I�=t�(��k�Z}Vh�N��J�v�����.���$�$q&���T;\��v�5���� ��f�S�S�<5&��J�PKW鴪P�ۃ�l��)y>�i���Hҳ4��Wf�72�d�*�K���T�W
��]����v��/��O0ii���qU힊6�\ߌ������B�����´�団I���55MO�%z}>� �T��[��I�ei�@�]^�X�L,�W7�y:D�J��M��=
�*� 8S*�7�T� ��,�	(F(V:^<�e�ċ���x(���W�ס�Snӓ����S|���d����i��MX��J��	F�w�ʬ_'_�*�g*� P8���(Tec!���LUe��J3U�
=�F�����4ğ����Ϲ���ݙ��J]H��Y���P��z雵�EgI^�MD�LQ�����J�?Q^<������V���UM4�=:� ��'D�yj�X;��Ԝ��O�5�a9�ɤ�b"؉���p�	?$s>�$r����S]H+�MR��574,_�⪯~�zn)��C����B�u���M=N������j�A���uU���K�m����ӎecsD�<U&���բ��'m*]�GI\{�J��7KMC%t���2�WG0p������Q��LT���k�0�\�F��3b��"���8c P݉e��\eX L!t L�x ǀ qa% �x7 ����|��� !Y8�rr^@L��9�! �`p��@�C�9   C,��L���  8 *Gu }��K�wU� ��u�Mm4�����G��[� A�ī�:}�f����l���DdY 4RH@�%!���N�U2�t��nb��_�}8i��ߢ������L#�4�pq�}�� ���֗x56�L���0��E�3iR�����`�����Ih�-���IWCO���Z�'ձ�sL���ex���3�u�HZ�['9=1�z�P��N
����. A � ��(��9���@a�a�m�B�m�O���ӵ\ZO���i���
+Z�*0��Mr�miu뺝ྣ�/�5c�:t��1=ϙ�QSn���Z�o�QB�������������u7
�{��S8�[�G��ޭ���Տ�ד��F�'������R�+�m(��:�X8���ܧ�:�=5D�J�7Z:��&���T&�px)�5�cWtꮧ�<��}��M}�7ZMuj6�fx���)�����5�Y9��/�Ӿ��tĞj�섶
��2<����3<J�}��K��4�jj��� ?�<���ϫ��M������JT� ��� G��51"�|��}/�Tuz��v������>��Zg״?���
����������U����OTl�}�H���dA~HѨ#EDv2�Cl���]��������Rҥ��>�KZ	�R�K�v>�{�4i�e��_p�ɏ���:}*���SUH�j��NiRp��R��Srt[Z)�̳����u�TS4�ƩΥO��i�tRߘ9j�4�[�Y<�}k��K��"�u'SiR�7�f��Z�֞���5WF�USNjJ�h6�C=M?���A�o�Ԯ����y~���� ��3C��+ի�U�����׫�KN��|$zw~������khU���W��?i��m�U�S47i�����R�vujj4�k�A�1���K�:��[{�]���$r�Є�8`[�������4tu5?����v_�w��U��Ч������}��sZ�CGSQ� �L�����/eJ�uWթsU��ϯ�nƟ��t�℆����'��J�ƥ:+�K>և��V�u�/�R˭��{��[�V�У�p�������u�s����lvI��**�*t�#�o?���A-$��>ET�&魹�׫�[V��峗L�$2��X�d���Wr����D�����ɵE1p96�"��g't��#j� r�B��G��cF�l�_}jY��+B�M�+�W'���;#jȷ��
�Re�(#]1p��rX��*@f;(,yq�ī��@5k��J��0�"�9�pr ��� �����An � � $\��;EBD��� pP!U�rp%� xB��� � X!Dr��V@9� (���-6��̩.�uT*Q`t�.N�),�$bH �� 
0PLr"�X1͈��E�ܕ�$����I�}���󞿩�Ǜ?7S��fb]��m��쥧�-%ԦO��|yPE^rG������l2�~�X���
Y���H/�B^�v�)W�O�8~b����|��Û+��	ǒA��i@O�����(�ȩ.2�ɌaL
�������\��๴�t�b|���i���!9� a(]ɓ}*,�b�DNr�M���8.]��R�j�jI�L/�Kj8uGe&2�p�N�&�])�i�HӋ4Yo1샄�%���M����<�8ny�J�(X�IT�T:VR�%?�u7$y��y���j�E�iS
\��b6��
�G�
�i���K�Ki�D�*	���ό��V�/��#wX���3��xC��}�M�3i�CxM��,	��u\�[�	��Ĩ�3�O��D�r��`�+�MʔiM�'TDKPZ�,�*5�\��C��)Jr� ��҃�4D34P��vI�l.�M��
� �b�x6��n�%z�7c��HZQ�ҩ�%	ώY]3S�@y"m�X�J���髩7�;-�Sa��|��ɦ��&�<ծ��������[rf�*����+Q��pwҥM����Wx���F�_��[�*Q�M囦���>��U���8n���E<P��MJq0V�������.�F!���J��^N�,a�MRA�(~��}Jm<�aM��0�H1:S�DQ�N��b�w9�Sq��Tt����T)N ӥ�sT�ʔ��N���T�x�V)O�����rk��ܛ����j3��1k�j�O�ڡ;�S��iS,��LaP���P�W7�x�
�I8Hݓ�a&mSKR�U-�]��T��� EM��D�<���2�dT�~MҒp�i�����ɟ�E6��c��sTsi��CM�N��>�T�L+.O6��U	%sS���j:rO��J�RG�u=KZ�����{�j㪷~� 4��{�
%��8��4?�Ox>]NS�f-ݲώ'����z��)������)��xzTHq�S���^��D����_l��
��`�����N�λ��bؓ45���*�.�<��T'q�x�8�d��b��j�9Mz�ICq�f���<OY���/^��s��k��)Vn׭G<O3>�q���]*l��un-i�pl��*:լ��S1�>�5M�n�I	�W��H�H�N�x���&��v���H.*�QI�;�x,�7dy�~�F�.�j.�]N`)n�fne����j\�A֗dͺ���5cS�ԣ]U7�ۥ̳��L�Q����%:�'va�V#�&�ʶ�:Q����
�M�ڪ����ǎ�F�=44�0J�����Bt͍)�0�܊��i����T�{5)mYL�[MJ��Z���ad��o�Q�t�l�Q�����ڜZ��hT�����{*��e���YSnKV���L�ݹ�:�5;�����mB˄z)��Y,����u91���� �2�Ӧ�h�T���^�
Q�E��7����ʽZl����d�פ���5,�u�.�R�y%Z�!3	Uɮ����ֿ�?�>�Xx4�*n:�*��}m��SE*�T����J�~y|�--}U�S���6:����>�T�OJIu�J]o�zyz�%��\孧F���OV��OM��Ko���5:����o�-�J:��M,�U�ҟJN89���RJ�>�~.]%,\��+������;�>��Ɗh�s�jt���s?��5'���ҪoJ���k�����t<��X�Ί����zO�]Y���чc��eݩ*�]����!������=Hr�������ZmS6>��Z��JW�N]���%sraaG�PX�*Y�U�p��R�F�P���US n�WGUE+Sh5�(SȀ� ��7$b �� 26e�� jӂX����DXmreD�+F �T��_��*pr��٪�\�u<2j�[f��Y�$�
�J�T�-NV�IT�yG�I�UY�>�O�6h�UK�>��K�Y��t��j%y��e���ں{��-^�ͣ�;B��t� ��i��ǃT������`�N�J�y�)�4���!_��U)6垪��|� M���̟N�k�5^gK�Q����v8�3�i`xu�ژӥ5,��}̻{���:ޞ��z��ե�3'��ʣS�q�}Q�bm85������ax9i��puX2�O2k�*�+�lG�Ӧ�:�l���w�mt���X���W��ꮧW�>��i��Qx?5��Exɬ�%������T��<�h�WM�-���KZ�p��V���v�/5��V�uu���.��Q�E���u(l�[&�c���<�u'vv�]�<�\�ݙ�z+��U(�b�%ꃭ�\�U�5C�GJ�M*�M.y3�L��悦Z��?�Mr�YH���(i�d_brl 3�� "�زE��	�~�*�<`�1�-7<���J��% O�  �!�����ع A
@ȅ�~ X�r�$��E$H$+PF����
NK�h� ����5_���u�L�J�s�#� U�� ��� q�3?�:�W��;�3�,�����r=:/���*L���*�	���}O��c�ϓh͚M���_J6�b�&<_�7+t���0��v՞�\�K5����S����2�H��|���o4:[�v�Q�9<M\���|�2zؒB�$�o1� �0R0�V(X v+4Ӣ�Z�i��v��:ښ��ԧF�U��ޯS���"�n�46�qn��6��u5u5[u���"����>��+� ����ii�i���jS�m���^�׭��}~�����u�cź�����ԣo���g��ף�R���[^�N��4���Ti&�$�������m�u�걬M}���hv��jnxG��NSm�뫃R%�M[�����_U�Nm�#R1u�W#w'�eݖ�K�{M}kQ�S�>���k��Ԅ��H�Z�͎�z:��*)l�&��hi�zz�����P�T%�W��S����jiꮘG�����J�n����>����u1���� �Z�v��5������v���2��wur�G�5�J��2�4�N�!��_�)���_�t�gū'���Ե_m'��z?����Q���?���\���� pG��a!��t�ry4WrG`�3��x�E�J���z���J�M,�MER�v[��D�b����t��3ͩ�TJN}��+խ�zu�T��6��z��
�-(�x�׮��I�6߅7��g�^�4U����z?�m��4n7T�W��jI���s�����;�-�WTJ=~���{�N�O�u9/��i���z�Ͳ��ڟ�t��Q����~��~�Co����:(��+����G}N�W�T�馥�Jw�gq��ӿ���z����t�o��zn�=�*�'	E���ңZ������e&~Cs���:4� ˧�[�>~��_V��R�����z~�G[o^�5��wg�� z�ש���-:l��|���� WE�vV�j�T)>���no�t�S��~}M�~N�}��⮝-MJ��Q�}���Kإ^�OR�����5�w�vTth�C�(������=��ݯUy�>����l��^u�\��|����ƣt���wy>.��w����ׯ�;�]Ǯzn�O�E馿��|=���ƣ�m�T'��~r����� w�o�[�կ�U]�<�Nrj��,(C�b�i,V�nc�X�^��ݰ��V��&.^0I�l�K�#J�Iօ����;�S�ZO�G�=FUUT�e���<~�����(�'����j3�]������QZ���r�AR�9`��Xr�7.@F%�K���$L � ��K�@�@�r�Ax��),`�����0
F���"��G 49����� 8'( 0 ��T��DckM�)�+@i���#��K'EK��I,!$�   8�0V���`� �ď#$��D�  �Y�?��Z��9?M���D�~;ի��j��5d|9��nx-*i���W�V_��&��5��[�+�F�g����A�"�rDWn`�JiO��5�{��J���#S��/%�'7����U���|�8��]8-IBm�)na���u$vRIu0����\`	g���.��<
W|@Vw`^�q�p�JS�L�D��,�������X���B^���hL*���x��/S�ȩ�R�n��53	����~��rDҦ�SR��
��tJ�S��^n�CMD`L��#J��dI���擭�#���.[L���12�WTɚ�J"L�Ֆ#n�W����+��R(�w�$��԰�g5C���*�Dp�w|`
���F���^����N��Y�2O�}�W<��UHs(���#)���ò"jXp�`Vp�/�7ev�\0-[��R���m��Zvp�3$Q
���� ���$��;��nƱ��~�Jn_��W�Q��h���m*�Ie�b4�V"�j���::�T�UMUtjo�6���џ�a�g��eϱ:i�C6Ǘ�[f�s-�����?N�aU*!"���uEN`��<�֢�T_�")��_�֛��t���z��!]/Эc�IY+����ק����d5R�MSO��۔�subiKjSAR��mS�_�5���\wP���L����ΚSO!R��+�M��RT�4�N�v��I:my �Sj������K���01ETϱօj�J���g sTu9�F��>�d���0i(@Ji��*Sk���b��i8�*��kT��t����E��\�Q&�~�8�z)�H��v���k��Δ$��'ίԩ�Z��}OQ��g����ɚuhW����57��~?R���[��	��+����T�NUz�)ut��� mN��6�_枞��KZ��~�?'
�CV�*��<ʤ�~V��J=��]�7�S.�'*u��6�<���W�t*h_�ߖuתЊ�u.�I��<�5�Z�K�<�Z��ɟ���b�eU$�����z��UGs�ԯ�S^ꫦ�7�޵4�)<���fg����L�� ��%�{�lm%GW���V#�ud�9M44t�\��K��Yk����M��'�%NQ�&4i;�̋�^8 5(+Gb��e]_2��:��,���w��et�$ǱWh�p2��W�,��;�y�"@���y*R:@���N�.���E� 1l�"��52}0��kD�f\6� T�S+mReR�خ��*�Ip��`*^�Tǒ;Y�it�ET�~�u��j����ѡ���r�m�թ8��t�}*�B3zjr�QEm8���[V��d{��0�:�� �M��{w��0���Ċ�K�í�esT���� c����O�j��zR"�����F�/Q�i�bNv�Nd�y4��6�<�=--4�p�%BW�e�����]:�QҰs����*�^ �j���"���yf]q�T�z��S������#�����M<��t�����'�y~���V���H��52�U7�Fo�\t���ET]`�U����#�]���eb������k-��_sl�J��N�q�Q�E�Q��kG��|��m4(Ꚓ��ѧOJ�����>�#K�)��[o�'�GB�[�>R�J�
�/�+���zsZj��3OSN�mqU�qFޙ�r9�����lMm�qs�JJ�5�,��N�|�5S������I��Ϙ�r��+j�q0y�t]J�gO����ڏ�K���J����E-<I��s����,~��������I�o�����[t����8,N�$���BH�P�gX!r������,H���\X%����#6 f�1�f9��B	K�UAF:[w:*aI�H:�J��m�Z��9��u��.�K��$�+8�Γ��Q��
��&|��.�Զ���T�g����i:�����*iyP*Ӧ-�a0ۋ�r���2խ����ʢ�G%GvS)3�QL�_�U�j��B�pf/b��麑����ʫ~gcUKY$�?EC��֕Ҧ�j�lX�i)"�ۊz���F4��#��К4��dֶ�.��/��~�����o���L�~WR������5��V�IҜ��V��;ӵ]ZI�O�BM�v2���9U��C���t���,B	p�s��O��틦�~��:��-��UK�YR����͎]0�}���Kg��ҋ�\����T�8�Zb��Gv�qԢU���ɦ�`���3�T&���Q�A�0Y#��;R�W83T�r��S*NSuU�T���A�*5U-(�f�s5$@���DrH�d) r8 &8	_�i%��؈ �K�S$�}���vp&  a_   $�b@%d�Ť�̀"�9e��=��d �$ذ �EC0ð G0e�&��/ &��(� ��1�d7`?A�B�[� I��qr~� ����_���S���W�V
J]��" �Y T�
��\��s�����K�ju����C�m.�
�T��`�y}/��2��T�u,#U��w��4�	�i\n�݄�_,_��;խ&���dJ�����j�ڙd��f��X˪M8w�E�tҏN[���ss�ә��ߪx��8���˒0+�8 T=�9��5�k�8w4݀�͍EO���k���{j�*�QI�km�%��F���u��9ը۹�%�`����fJ*@�����G�R߰�����f�Z�R��>����M�kU�b�"�m~q'UQJ�zt��j����~�K�6��I�iS�t����� ���]Nuk�c�l�B�����g�i+�7F��O/v��G�����iSO�+���N���{!����~�Z�y*�+����
�L+��t�5���O�g�Y�'��=_���~�}=��_�|� ��u����~];ާz�c��#o��i�*�>]*�,(�Ga��"���� 3������~�4���ҐW��=W�^Y�G��L� ��_�� ���8&8 D���,A@f%���Y"�Vq��c��ڭǩW]T�S�D����Ѫ�	����+�V��Jk�t}4�iNOw�z};�� F�MQ�Ss8G����[k�ݭ��D���#����Z���G���P�ݵ[�-}%��+=�'�C{��t��iѨ�ud�>��Z:��Ѫ���P�)��_uP��V� �.ϟ�;�-��ԥJ���;� �:��GF��?����;�m�j�J�IB\"�JƻZ��ԛr�L�WMI��NSG]���]:��?��'����k��Q�O�5��U��jV��Ԫ��-�����+�-MG� j���o�~�����֭���:kzߦ�v��Ѧ�ӊh_�&����)�׊�m���Ϸ��9�{$��U��_�ߡ�7����v�B�Q�7���9�թ�ď��]Z��M��F�5�J���[��n��
�xm���*_���a�F���U�.�m>$���w,&�(�r5J	9@Ne�����z�����ڽ��uUH$�$kY:N��9auF�ʄL�K���g�K�H�D�"JMZn)S��!O�"��R��y	�]�ILA�=7F�muM8Y<����U_R���JG��)�ҥX�2�M
��؋��*V)+PP$���+{p�,w  d,^�   ��9�\`D !HY W� ) TNB
�dy��,,w��BȀ2��_(dY�B����Ko��t�%ʱ�t�w;SBK���kMM��C �@ )�@{��� ��l\�${� ��h�|�x$nļf�duK�UL�D0�,@��$7--6~;�� Ω�~�y�\���޹ԩ��GϪ���o�-N:��%�"M�� SxP�����*��s����xNP��5\y�O`,���|���H+ͽ�MH�_���N�)j�"{�?�fW�N�%-�)>�#�XEۄ�!�k��%Wp���>
�rGg�:�8Չ*�%�	��+U��Q�r����j@`_�'"KÐ��y/Rn8�f�tW�x@^�S�wfZ�����(�ID�N�M��8R��#S�SVle�
��˱pע��jpEU���=P�F�+�a��R�	Us���7���N�r����V2��r�$�T�n�d ��0E%fypPM��/�7�O33�
����Ya��*�D0�ڄ��S����e��;�X�Z�;`S7�V� �M��)ϐӈl	RV�y2�i5nhM���pk�X&rm��lҪ��s.�]�4�Q��	]WRW� �$����ۄ���)��b�ɺ[�`�$�E�ЪM�,蜫��Z�9�KU��:bJ�%]���u�)�S�[�����R� 4w*�nܓ��F�	<q�����I�G.��T�wG^��$tB��}=��ر�P�73�����H�Y���+8�
q`9t'���s�I8�$v^��-١�T�:��UL��Q��o�ӡ�ī�L^����M)��]-�ఓ���9yE��>�����U�#!$��3<\�WE*]�r��Ol"Ĺl����9��[��	O%���3,��$�U��\3��U5=S%�k�u�ժPf�ƞ����+ժ�=�۩]����}BMd㩿��|� i8��g	�M[���4����U.[<�-��6��79ĵҭv����U\��)���+�;P����<�[P��i,\�U�&57	~Wb�D��8�v<� �8�����i�a�ש�JJ�؝]2x�׻\�z����H��}JW��W�����u���?{��O�XN�jԧ��	�N�Z=lj}Q�joR�SGzt:j�l�U�3>�N����6�����T�ı2=�UD^r�=��_D�)�)�nlF�����w�wI�m�e>_�V�))�Je�¤�I�\_�"��3��u/!�q����V3�6�K-������/�]�!`R�D�͖�j��VW";S�I8�6��XP�K+� 3	��	+�ر�t�V*��㥈i�4X�l�X��%T�с�4���1�6�+�M�	���"�<��jT�Z���JR�t�#W�@�I:l��'wKT���0]GL��C���M�	]5<)�57J�Z�ҜI���*S�:Ӵ���2�cLyi���IK>����گUB����}?OE*���z��\Rr릧)N�ISM)@��IxD���]�J��������~_u�SW��-��Kj�>ꜞE����wRҥ���>9'��Nފ)���E6<� �:���OR�oU�O5ҭJ�V3j"^x<�qwЌ}F���ĳǫE4�8պ�n?��)��nkn�M�N���>M%�f)\���R��KJ��)�+9�6��M)Sɦ�]�	XHMH���$��uHM[b�:�`�����4i7lŠ���u�)�����P}m���<[-�Z�-J�#�U]:t%b3F������$n�GU�P�t���d�k����\��q���IB�ӟ�������)��x��E3M������T���"J�z�m�":_�q>�u�^������Jrj���̝4U4�5(T�#�Ӷ�Z[tꋯ��n������Z��/ʔi�ۗ*�1]�N��xIrrmSK�]�s�K�B�G�6��>����''�B��U����_�WD�u��^��x,��MSo$E�ȲC�@Y�r Y �N�j�X�$E#p ˩O������.}�;��k�	3pA΢,���[,
�J�,�U�cSW�pu:��:W��}n�pUO`"o��Qҝ9w:B�@.�`�>�$3-I�Mt8�{-��br��i˛���i�>޾�k��ui�,��/��MU{���*m�TpT�e�J��������~�|t���i��%�=�j뻔s�ڽ:fnTy��pe�|��m0�(��4��H�g��s�ڸ�f��Z�l�3V>�4E2̫�eU�M�2���3�JT���w�j�T��5)�K?-�]ͥ��ʪ�'���Z}T�(��x}[�TO6>���Z��6:�Ku|v?M��zjz�}�����c�RKM�
Jᣚ��Ui�Ց_Y9_�p�n�OMn�����TO���X��ڪ���w[V�p~��Wk��nvʺ_IeJ����H�WI���қh�Z�5`ܬ�t�6:�W�k�i��G�m:��IEs����-tA�nz�3�zv���xZj;P�������T&p��~�Ԫ�"8�uPш(��L�VH7��D�{	t���*�n�~���p��/q�r%7c.K�A<$8�-k��H�@<	��#�LIy��j���/L��@!!�`���T�-�\����sv��b�ǰex�`/Z)�` �T�P�#����Y� �_�����O�/�c[� H�M�-ɟ�_`#F�Ȑ* U��
���*&$OsTt�w�ߪR<�L��uTSf���W�D���$R��p��L��ɥ��*���iJ�� ����S�Cl�	p[I���+T�oc�<���t������V���̮�6�Z�A^H^ā��H�8 P����4tj�qNOv����]NǗCYhi�˹k�WU=4�+ѻ�OKMSKW>w,W]U����"Ȟ	�t��ڮ4�n|9H��}]C׭���v~��?r������:������=�oG�k]�Ҽ�����o��/�L��R�*R�r�7�jp����t�OY�}��A}�A�j�O���%��dw�Т�z�F����/�*x=Zz4��$�_Ǎi�[���8���U4i��[m�Y��R�%���j]��c��.�O^��:j�7TJ��UM4D�m�┡]�� � _:���������"[I/'<i�f��K�O�5��������͸>Cy����G���� ��z.�_��� ���� �/������+��g�~��_�����V	K����#X�g�����~Q� �o�Jz}u_��#�A_+�%I�O�N2}/�7���>d8����߀�%H�r$��G'��/T��w�V�7^�j+K1�7�&�j��U���~���j�릪����r~[_��i�ӧS��U-�>f������N����*O���+��խz8��>>��D����Y46�����iW�WjT�����͢Un[֩e����}g�}6����Q�hD��ݏ�?P�EZ�:��g��~���Un֩���>V��n���m��|���}Kw����T>�?i���K��>����������[������wh��6��҉�Ѹ�-�����v�<��&��h�APm%�� "Y|���掠�Ԇ�w>��ѵ+�u$����|);h�uuj首~�o�:J�U�Of���ʥO�5q�=���TO���^���U[�ر�s�6�9S�E?�����]Ί�X�[���Kt(����]M��n~έ:j�����ѩK��Tp�R���i�\� ��7��U/�Iu/��Z�}M:��Z�5,e�.�"��%+3!8.E�*�(V;\%{\(�������Z�VL�g�T�4��)?g�����VT���oO�q�MUR�	埰ӡQBXFz�F�ͬ #
��Vf�\�G��  � ��#�@�@�#��_%�8@!%�'�,y $w/���r� 
�{��+�
p /!HY��
�&��3(���u�BrͪU6@qZmٝ)�F� B����G HXy���'�� q` �H�Id��Ɇ��t��WZvE�AS(*y) ��!S���8�߃�ۺz�l�'�W���s..fֹx5N5+�L����S�����W/80�N2�RJ�d�@D}єۓm��^@7� ���x�L�	�W]V����E
Ȯbr��ߑ�/U�`��K-?�	Z�T��ng>	n�P��_��7%V���ֽó#v���~gq���'�1�D]��t˹�]�ƕn����]+�B��k��Vv#��A���I�X+Y�*���9D�S�!�݈�O6h�Ut��Tn��+�M�UZj�4�����9bb�8^	v�kɜ�N;�-��L@?���Ģ�J��.��*�J|I��=�3+�4�w/3SIe�[��Zd����֤�����|����UB�:�+�Sa^���N���Zu"��Ҋ��ɺkiXa�[���9��Y��:J��0�&|sد͊��"���js�;�(�x�a�Ř���4�N�����~���#�1�n@�W��/)�/U�s�XI~�D�M��wO�L�Uj�5BW��?���j#
���T���)K��ҡr&U���9MX(x5	IC(��I,���ƕ.[�k���b�I��I�a�QϦ푯�M�j��YQ�0aҤ�:U�u�e�2��T���{R��'�j"���8joX�������#���ԙ�檩��'%�T8���&��ԥ+�0��]Ϟ�a��z����=�7	�rڷ'��kȩ�a��5��j,U�s�t�w�[�Φݱ��������Hζ�s5?ԥ-�3M�G��+�t�w�kmMR�BҒm�Nn�i����V�*�KkХKx�?�*��w�NU71^�RIY��k��!+�ut�x�ũ��p��=J��.&��W��.e�S'��8�"��z�ܿ�KI��]Y8$�ېݯ�GW]O����r̫D�Dv`j��*��R�"���'p+��'+�,��M��"IԕNBp�ژk$�b�ǻn�iX����Cl�J��J�E-��O9E�_��\��_��h�ORȪ��
�n$D>�H�z��輧>f��r�aKw,$J\X%*[�MD�Jב�$�K�\�k0٨vl�X������9e�jQ�c��/���=�avʓHhOa~Kt��ƌ��-�87���-*�\҉��J˃m'�q���d<�|
T����b�t�QV��2Z����%���Cu{�EN��ԯe�E�Tu>nn�%]�X�_�t�d�ҩW�*9̸��/D�+&�S�*���EMy"ӛ���D�c��7.Ӧf$�Ӣe�{�RI��*��zU4���}-:TV�x=?O�T�RXGЫ�Z<�Q���J)����u7k��IRr���W[u5,����j/�;�o*�-}nd����Iq	9A��it�����oWڥ߃t�lHF(��c����[Ц�n�b��镀��KgӍ*ґ�T��_L;�$�r�<X�J;'8�j�I֞�OUA�iR�&ҫ�y����ᣆ���i��|�z}BJ쮤�(��n��ݣ���n%�<���z�L*��-M6�2�|ZV�o�����������Q��]�OO��Ӫ��/J�Ɨ�ji�[W��
(U*bY>�1���եF;���:R���JЎ:��tO]i�5d���ut�"**�Z�mM�0��'�S[WZ���#�?��n��KIE7g�Ss��d�i8���enҰG~~>yGE4ݹf"j�m�Զrz��vY��s�����x����L3����E6]ͭ=-�=M�Q�����k:�:��wT�E��_uV���:Rk��۞\-f�bܛu*T�:���y�uz���.������u�*8;�ӔJ?E點�4�R�$�ZuM)����R��y���=_�B�î]%{R�7N�-
̝�(Q�����*�bB}�����O��2Ĩ9�S�ԩܣ��7:���?!.�VN�tE��E�vT�����p�%I�uILŎډYd��i��,�.Yލ6�����֊s�Qd*w;�n`�S��P�C� �ծ��ZɵOSM-�6�Nx5
���J���mJZ>^��\/���i[�<��m�%��Zu58���J\IU]u>������y�k�Iڷf�<�MN��z��L6q�kiҡ5'���\ۃ�n��%A����I���4c�&�(�*U4��kO�&�1�N9k���ɕ}��MrtI�m�]T�x=Q%V��kSA�%��A�ý���~��J&ƒ��=&�i�M�GqiPϹ��U�����v�f�m�����ز����ڪ��&�sN��������V�M4�r�����n�Z�v=ސ-�b�#����@v˭��N���l��Yp}��I�[IUM�ಣ��-T�MM78?K���қp�V�z�rnT|�g�U\�Ss�۪)M;���w#�rj��-M>�95��*���n��(�5F�Ԛ��4�;ޤ�Ƶvu��rԤ��{+��s�4��{��0�V�D�Ap�
FL�k�V2Uea �@H �ˉ� [�� $T�伄�"^C�|��
��pQ7&2�Բ�#-�g�� "�L�P�,�"@��x ���@A� %�B�2��� ����Zs�g�$�����Juw��?�]�^L� ��H�i�R�t�ҋ���j�!`ލ2ٗ��(�'EE�i(�)��eP��IOr�Xj�EZ\9,ݑ�m�,���g�#jT����Ǩ�U�=�����7_���J�e�rROt�r� ���!	!@`h�v����[r��an,�3aR�O����=F����;�)9ߒF�5����]}�8�}=���J���G�v�*4���1ᣦ�t������mnqO�t4��O��i�i�ښ�=M�f�*�L���䐡'T.YKN�g�N��W�Z��ծ)��^���M�F��:kɝ��7��5�j���&]�i�P�x�zUEW>���4ϓK�s٥����sq��T�<��޾�Ԫ[�9U]	MU$�E�'Ҽ�S�}���h�̜?_��&���sS]��\%���o��N��3����mL�˶R��������ӯ�k�}���nw��Y�˭TZ���S�|���W:�噫�j��y6�����~����~_�~�����zz�� �����j��SY� �H<�v-��1t���U����?���ꭿ��mk�?m�{��9L�S%#����J�� jG��{=m� ����� h���0���OSV�F�.��)�K>���ǩn�ui�
{�;�|I}�iij�j*4h����?k��)�����z�c�U�=�����V�F�ҥ�(Rţ�/�ޥ���M:�k�����+��D���կW�/���74�4��G��z��t� �֩'�6���������UG�ҏ���_�Skk���˹��M�vT��`��}W{���]z��6<�uN[�*��(��Dmb@�J��Q��[�)n|Co�:թ�Q��S�v��jj�J[>����i��]]�mT4�I%���>��jU�cK��6�����u)��Y�X+M�uqΝ:(]4Ҿ�q��J�̐F��K��sܩw
��%.�' GKEIf%%jl!2�X�),[ g�3���KU5U*Y�T�X���F�tM,�������s�}66�"Ω��jlu���F�R�ۡ��~��'d��b���W�����1�n��veӢ��?k� ��&W�m��"�1�ޖٵ�Z�����J}3n��L�F�F���F?��ۍli��>���Sj�k�?CMҡR������Ɔ�����MDpvFd҃*ҹHj/��`���(��".PR[b�G�#�r  AX�d�e��p(@ �]���A�{�{ ���4:�Ӥ�@�~-:�;���l��Ҧ��m[*��� 	C 8� L Â6Ad�r  ��F�d������]�0�Ux*�m��D��H�$d�� ����ȩ���u��\�U���>ǩ֪mA�+P��Ϧ�ɭKsg�i�2�}��5N���K�-�쑇4�,�:�f��u4L�^:���S�J����ed�]0ᦟp1?��2X��;8��eU�F����0�����<�Hx�̯�A[U�c)�g�u^8���vA\^	nY|�����	�	ܜ̉���#��C�X�a; ��}2���7~�A6��P�g71�&�ؘ���j��R��N��8�3���%77��8g����,Eu����n�$J��F���w"�������_S�r�	��:�[���쌫5[��9�E..j�k�T5�� P2�Jl�-Y�&����X��*~ٓ��T�5d�Z���DW:��v�κ�*Կs
�5#6�-�Zg<`�2�Tz�2�b�4�����:�&*Wl���&L<�I%�4�r��7Mp�b�\+�N�m���U�%-ҭ�UO�0ף�M��R�C�NT��M:�dL]j���M�)k/!Ԟ,��Y
���^R�����N�''��7�Æi5��\�5KM��
�r����d��� �*<�Z��a���SI�&��}jRr�S��t����< ?b�~B���Դi��4�q̜j�Z��~ԸGO,��UJ�֥y9իBq)�s�׻Ԫ�u5&k��y�NM�O�^�M���8U��6|�S�b>��V8OO}[�-R�*��T�Ǜ�/���/��J�uLM�=t�i8<� I��&֚WN漳���)���p�nnD�M��Z�QU�|���tX%�q�qJ�W<��_�M.���J�s$u*,��<�Y��z��y5�맥>NoZ���y:��3.nɆ��]:a���֛'s�[��˙eޯ�9u7���ص\:��Q��D�ON.����˚��,+��]�jNƫ�B��'6�j{,�[*�"[(����4�Jy�li8����e�S�3t��5B�$�S�R��i˦�"���R�]�K�rV�%� +ԏ��҄�|�3ݵsB���zq~��M���{�YSxlԾ��fc,���>n�I��&���b��i�\�A]..���i'��;�	K��3,�Y�6��"QyĚJ� ��Q(�R�����ѪtӦ�JT@J=�E���e�`)��D�&�n�*���l\ҺV/M^?�t����W6�~ƕ)5ܸ�];��fuIbJ�YQ=�+����7Juw:,]��R�����SD]�T��F=E	�*��_�>K����s)��fy��9=J�����R��Fj�Jܞ*�2�|�^ǯ�����p��t����jO,�O-���]���$�3�	���(ޅ=Z�y&��^����uy:�7�qc˱���jR��{�MY��t�Z)��N���O��L?��K����^n���]�j��=�Q��ʭ&��c��_,��J��Jm�lӚ�M5tZ.n�����䩦�����ܻR�R9:�����CR�W'�\B�=z~������W�{4=?N�Ժ��>�^y|�4uu�t��=�OM��js��Tm�+�vT�B�5>�?�����K�t�f��OHӪ��y=uno��SF��l�p|��l�u��t�i����O�N֚Rl�N�c����^�j�����zn�M.����\��pI|X�c4��Q�:~�w)*HW�M	��A���-:g�6KZ��~:�E��5n44��u]ޮ��T'�9�'3�r=<�2O��Ww��ң�G�Л�ꖍK�0�{���y�n��"T�i`�C��_�d���'�Ңf��D��u"�~�<���S�3s������]M�*�j�CN��*M�����ԭ�I#�u>�������{57��iv<��UnkrEJɦ��8b�$�%z�ҚH�Uv��.��汝]MN��a����5	(����*��t���S�j�Qo�}�J��?�S��"�� �t��MH�SVW���U�X��>?��5U-[Yj���f:J�Oy,���i�Z\Wv�Që�T� tu�2s�I�4����K^�vE���F����(6�(E��)[I U	I�SUR��W�UN�뫬��y��㸦�����T�� cGA+��P�W3j~ ��fd��"s/���Z�r|@�X��"�Jim��4�ygO g�����[����GfZ��Px��M�쪆i�u}���U�u�9;�>�gϯRjiL�.�ܬy�4[s��\�&�Q)�tt��w���ҥ���J�i;M�#��/3J6���PҘS[V�TjUKɈ��ZN�m5j��p��l�:�b;w>���h��/N��c��~�[T�%W�T�V�DI�4�M����ʼ�(���I¹+M;� �z��kh�S�O�l���[�hG�w)}'(����ԝ�ԩ^�-�ziVk�54�d��2�K'F�Qܚ����Nޤ�W�z���R��Ͼ�iӧUu�U��`�����+��?G��Yӏ���sǯ�:ڟm)��a�?Bꦗz�8jov�jj��I���Z�����G[Yږ�g?������*S�T��_�5kb�r���z�U*�ݳ�O�$����">n��WU�UK1M���>�����I�hi�b����Kg�[�hk��OK��s��3Ҹ3]N;�i��z��7в|�k����>�\Bgĥ]��GuT����86�(�Q�G
�i��Ɋ�<�w�U0cATv����K���epp��GJ+LT�Dh#Ud���%L���i\*�p��B$d\#$*| #�y/"|@!bhd���x*P�2��M�(��(a~�E1q͋a���HV"�B�pø�� �l xǸ~B,�?�x.P,��� @R0+��",L�Dj���W��� �Q��n�}���7�Q��#��I��_`�Y��I*$v*�T��#(��V��tS�դ�߃�Nnzi�1^�U2���iiNd�*�4�R��d�� ��LT��~Y$�=�O�VU��U:U�8�jR�*���S�R9��-u&��Cd�܏7WZ�M$����=m��ѥ:�bp���;���o�����jj9������_�}}-�4��4�J'�k�W�V����ݥ_4�c��}e�۵FޝJ�%�Z�c׷z+CoTuը�^=_����Ei�]3�A��UzwU;}%�J�8�޾�z��WU�f84T#+D�Hb �� Uv���LҢ�
b�i�Z֏��)��+����t�=3'm�+�:��s�J�M�I��W�WV�JR�8�.^N�%h5[J��ˡQM�>����wry��\�>OV��4+~�M_�'�_MnS�9n�S�Iᦦ�jkSBn���z�1�i\�S�<Z���B�_Q���b��馑g��r�M=:~��yu}KF�g�|���j����Jj�m���� X�#�k��R�?Sy�]��ygK �8��գn���3�$�4�����_R9�ROɞ����z]�<��%�REV�%I[�/sR�痢O�����?�1W�k��������]��-~t��z��M�+�Ü%�e����n=��z�����+���������޶�z�գ�א�>�K� �V�MUK��<T�UU%B���JO蚵����}MM*��E_%{�G��#O�����v_�=Gx��?F��j[�>�����E����Y� ����*i�iO������������_�~ν���EKN�څ��oJt�4߽G�۪��S!S�0{�~��ݷ�u���x/U�5��(�AD�l䭚�N��R��׶��mo̝)���+�Zz:��(�����}N�z������ii&�){"ZH�����Ҽ�Oo�T^�����T�XmI5�r����QM�����U��܃??����eJ�$���
�r�. �݄�&�%V)$��i1J�JKQت��3���sMee����b��䰞 �L9e�,X����X�4Wr�J�`Ո"Ej0�P�)�#�E�{<f膻@�H��ML�+��ɨ3ؠ2�03a�p��{��0��3`XrFP � ��0y E (X�AV@R{�*l	�éX�N�WgEJA\)ҩ����T�l�)`�	�@pd   �� 	!� �d
@ؐ{�~��3$nĆ��i#�������PiR�(�N��I#D� @|���1���p��2�Iy$�^<���4q��='qiԫ����I7]ƣ��u7i9U+6ڡ��u�u#���zhr�X���(��]n]Tu)g�M����_N���u����}py�(�L��WCW2�n|CSE*S�Ǌ��U���+����D���{�9�]�M��WP�M$"��J� 5J��m~�dR�VL��$����?NH���@��6�8��wq7(��ɖ��Q%��X2���U8re֕��:��n�$���U7�Uprwh��c]]]Y�+���1Lŝ�u6��M4�����߃�M<�'��tҢ &���%K���iP!rT�b�ws*��^�5�����V�N�+���U?v�
硢�j�R��Ui����E�s6>n��U��I���p����u��ɕ-���MtU�8�̔	��{ �/�E���%�əsr�y]���<T�
���]�|�rT��v^@���ɓQ��&i/�¶KM^`.���Kk���&�$��ܕ7v�LZ�5l�T�sR��&\�j��tM5|��~93J\�i��c�{�Ңlk3�37�/��OdUu	`u5�ŋ�J�9UU*�[��Z�P�C���]]J�`�VYG����*��u8w.���j!G'7ZUd�=g�5UQwb�k���YRs�q�嫞ETLɚ���G��[�`�Z��Ǜ��6:��Q�꾩���Z�y�a9^K�I��ϰ��I��A��5
	S�W~
ҧ�,��ᓪ�"��&����F��i{���
��)��]��5� o��Y�@�E�okς��ri�j��(��+N-ܢ,^�D1rev��4�d�n���l���;�O�FVe��S6�l�e'p17�7Q��*!�\�Ho7g�l����T����
~�ȯ�LF~H�c2���R(�������b['Ry��Y�+�˹W��'�]E��͹����t��"�T�w�]&阃]0��J���W4�� ����4��cL��Z��qĕ(�QOU�9��d$��~��iVᡊ�M/�*/��uJ���\G5M��ZS���MA���7LSĖ9���#���}Yk�*2s�q�V��2u�ʚ�}h3�E-8g��or����<���O��w�.�GN����k���wx&�u^L�_(�ObhY�w#��Q9�
072U{~��<�U�T�B�rʒ��7�1֝�M8KW�J����*�+�W=���UL3�QW�z)����e}�U5ᢺZS����֪��������֥3��yt�뗆�DO2J7Z:�CI�+T��ԎV:��1U2�":�+��M���v�=����V��J�'���~�������
):S��Xd���u_S�*��$tZt�K��2��q'W��!��+u���ME�
4���V<uo���^�Z�"ee�hС9�RtV�����&�������i�t-h��{�9f+��UKR0}�M]-553����5�緩]�,�X��d]]mmj���ǡ'w�n)��3��������� �~4�WJKE��={�*\%'�S�,�)]�jp�����>�*�J�����}GZ�V\#�^��ym����>֦� B�}�����:�����[��M:m�t����Mj�l�pJh�`�Af�79�޵��w+�NQ.d�Z����]]XqO:�n���7��S�?��$nə��N��re�	ّ]S��7���\�SuD�=T(�%���cR��"�;]GN����NTg��4�U.��Ъad��jWӣVeU.�MJ�5(�cz�*��Z]�q��m6e^�j��=�4��6�GDΔ8�)��/\``�*��/Z������[��U��ʽV�9�FXo���%Y)j��ӄ�:Zj�-jv+�ʶ�������)W���@�K��S6**H5Pӱk'f:m b`���k':� b�c2�+�whJ�=Qcn�V��j�kW\'J��=5�g$=�`��S�L�Wr�C>f�9y43ER�;7'�A5S������H
�I�Q)���S���{��q��� �ѳ������j)y�=��qc�I9�:t��G�ISUg�P�Y֟�G=���tWY8����p��{����Ԣ"���S�>��jY��ԡV��p�ڽ����?�&��(��"Ǉ_�4饪�'��Q��u!����F��ұ�Z�N���ֺ�q���T�tSi���Mu�%c��Q����<�:��h�1��귔ѥS���i�uRr�y���E_�k��Q�������أ��=3E��ѳ�ɧ�TQJ�_d{jm\�UM�.�Q����	����/ˆI�"h�5	B�VD��B����f���P����:���&uz�屭*�=J������鈱�u��}��n��{�4ѮjX�^
����si��e�[5MW�q/ ui?��tv:�T��Հ�pw��'IQ�k�� <�� @Q�4���|�_9q��FA@[�@J��pNJ�-�܋�m`b6�^ @ˀ�r��'! |��ˀ)v
�w��0
�\�Y�ý��L0ӂ��I\���i�ran�� ��L�.X2��	�mǲ8~"k����~� ��dy� ~j/�?�*�`3H
rB��:i��:S������P�������ճ��6��ɗRU&�&6�:k�������jkj��N�n��J�n�u}COJ����c�r:o+�N��LY\��V���^�Z�6��u7&�,_���Aʪ��̶/�Ԏ=w��;X�v+������jէ��է�5j[=���zZ�g�SB�c�~=��L�2���=[���[���n\������M�Sk���F}�9(�";�5��@ "�T�N ޟ�������B�c��_�S�~�h�IJ�8���:�s�����?*o���صRI_��Z���t��㩺��W�?fk*kө]US� �2�|�ORs�>�
�;��uT�Qg�j^�}z����SG�[�t���>���M��!�vu���7�}-oUԩE��WU��3�P�T��9���F��
��vDuB.!�cQp��d�-7=�����P�KO�J���6��t4ګ{�U��dMW�MԒR{�މ�[�z[v�_괟���6�XЯl�:t��ӎO��u>���IҲKя��:��i�QU5�f�0����?�u���a}F�~V�ܣLxDl �7�ҫq��ҡMUԩFi��J�R꩸I)l��z7�6���I=�K��� $W��5i�zb�MM:p��.���Ϲ��}׫�=5�_��<Z� ��7�-�2KkP��e+]Q�E�"J#\;�&�R�N�����=�<�**��+��{oD���~����m����������}T�t�s�hz5
�r�^�Q��ZǛCk���(^d�J�DR���E�"xE�*J�X�Vz{͋�j�����*lX�sP��RJy	6�`�K�r-)(ʗd�"ҿSIL�R�a?b�y ʧ��pi.5�Y�b�.L	�IEʗ&����\{�+�e����T�B,cK"݀�,����@�&�.��\�"ʘ"�2���������؋&����"(H�e�EH���@@I��,�܎� 8-� �G`� D !n�؉�f�ө�)�K q�Δ�7��)a 3N�F�p�w�� rG��;�� vp$$�`_2� $�.��2�H�N��iN�V�K�/J4�����QH���(~H�� B�̇ I �K@.H$An��ѧ����VY�rܪT��55*�`v�sE6�������
��Ӫ)m����W��?���ys|�R����*VZ�Q�ܬ�*�d�T��E].Ȱ�r��=E?4�SW7Uݚɦ�lb�gF�Wf�t����ꮥ�>v�J��OY�������*��b8K+o��.�@�� ���Y[���@i+x%N ��;فn�rs�_� ��0Nŷ&Z��D�z�k���i�zU���[����ɇ[e�Zng2e�Ҍ�mēܬ�.,��LweR��!n.e{/�!Ԓ�*�����J��5M=P���Fn��-*b/�}D�B3V�NZ3e+�u���9T����3�vy��)Sd}��5*j��i��ǭ����yz5ޞ�)G�q����#���Z�&�8;�#v�u��pbm��&Z�m�RD��YD\4 ��	��Ld�k�XPF�{�]B��%%N�F��������H`�,���+;��b9"nn��MX�%�@UU��4�F���,f�n@�5��g?b�T�U+�;Qs�.�ZSdiڞ����D��L�\蒘fU�fnU,X�������*� ��wn	v��|��nZ��m�k�M�e�������+����j�qs+�o���2L\<H���I͊�9k��?��f.� ]����H���$v�b�=���"�l^<�$�%�4�$�
��I�_�M5�
����IVn:��q�S�[���$5~�d��R� ��^e�R�nN����J�"��o�5���1ҢP��n-|I���]3x4�J��LS!S�偕J�r*rm� �2�c�B�@jM];��	��G]�Tp�3JUe^��O�����(�M;\�:R�֚0�U�N��#��� ��WR��Z�]32t�R�35P�����n�-7�m�X�U320�(��:*)^�����U�K�/�[�YA­yvr�V���5�n�l"*�ꎬZ����a��8M{�	����qc��]����z���9=Z��h�nO�
ꫫ!�}�W�*��ƅ5[�S��.���-<|����!E�UE0���jmT�p�%!X�o�]��J�\�� �J#�a6o�{��@�̳Q��5^�b$�N�3i^j�2j���*a��',. 䩱Unt�Q䪛�˥Os}1� �M)�Ӵ\��T3��n1�UQUQh5F�m}֤j;����f��SJ�qV�殲����s��-Nq�*���t�3�u���z�>Z;��S��E>�ͩ7�ڼ��Οc�-Bs�����]~����%X������~�S�;�����[V�����i�1�VdxOO�-�չ���x'��w3RG甼���ǃ��?�m�[�S8�O��ԩR��t��Њ����W�:i���8� ��Ҽ-���Isbό��WꚜB��~�_J�8�x굸'N��%���uq���n��SUR��pX]�_)��S���uG)Zl�SEIc�s�S�o�X�蚥]��ٜ�M�H�m�V^I�ڻ�2�:��{�ɠ�Hȣ�ᵁJD�6�(7���2��X'�#d^�qrQWME�, =zZ��wIv<ZM,��w��zv�:*���+��҇Z�lY_�ۺ+�P�o�������⦽������p�c�y��'btԬ��T��t#<*Qe��ZT�*�E��<Ψp)UT�v�n�j�c�:
���4$��IazpGC�:�3M�_��;�J�BW:zJ�noؾL�� :�쑝E������j��m�GJe�R�Ί���Ax4�H�$Y+pX����v�Q��;d���Zi��w�IP�y�ӊS8Ո=:�7M�U:pA~�?��T�j�u5�4]�6��^��O��Jiҗ��kK��xk�L+x[�O���S��o.j:SJQJ.�KE&�M*c��Cs����R��2Hn�n�*]�t��tR��iv@J���vR�۟7s���XӦs���uҢ��rw�s�⯵�N��蚵'��⪽F�Kwk��eKm}==_�J>�;�j�(F����Z�[����Q�z*��k�=U���md�cT�m�-	�;�t�}62��宦��%q��n�w=t�<4Y�o�M7B��P.�KB��SJJw��YG*S��7țȦ�sT��	t���m.8B-0��^�InU1p�t��HjT3�J��J�<�uU��U�V��_Ѫ��G7L\���}3��۴�����U8<��5\����c��S����ٺ5ίE��Ԭ���QR��ۃI�u��cR��i���`y0e��WB��T4ʎ|+P� e�T�Zt��z��P�G�Sh��_c���:Zx"���>IU'n��#��y�n�/dc����22Y�#^E��`�Q� =�b� �h.� #��X ��,I._�/a���� ���� ���#�� �ؼ� Ԁ~H�2 �Y�,	�E 
B�����@��'�u��O�Z��=?�3��#�����TBF�|ea' �2ʼ�ɥ�)��\�l��ˎ��	X�Z�����b:����1֭^��ԓ%J���]uFlf����S`��	A� E���*�L� �������' d��bd���A�c����RM:�/'�v�*t�o��:mSZ|��w:�ԩM˲1���~�Ww����/�<��+�����x1��_I�G�O'��-:i�R^�#W����:��I�vN&����(�T/�����~j�K�p����J�ݘ�'U^:jnt4��N`�n7]T�Q	#X�,%]���z��#M	�Sp�R١��I�w�l7�M:u7[z��ʦ���7᭶����u]U�鞌"j?,�k��O��ש���.��������o�ԣhۥ7g��~�����]9�S�����>�^�z��UQ��zӳ~�k��W�zUm��T�WC����ѣյ�u+��J��/'��5���mn�Ҫ�Ss5q�iE/M�Ң�R�Bo���5V�58U?��ֿ�S���ۤ�j�Tx7^���ܪ鎊T$� ���[�i~���SR��~��[J�:����*r~g����}f�*�&O�V��}j�������}��>_��j�n>�:h_�<�eK���SS�JO�l�В��7� ٧e��R�}��(Ҧ���S�~��� �ob�=E�mKwg�3J��}�u����5��a�O۶�m���n� z��5�]	�IG��OF�oN�=*�9��?9�߉^��OcKT�=J����^���]Z��[�D�a�]��Su7v٨�2|.�`0�<�ԝ�v���*(m>`��nd��Eԭ��;�KC�44����p��v��Щ��ϣ��j�U��}�:(�ڕ<��m��.<z��Һ�� �릊)QL#b<�\���&UHT�I[$�}/�B�@�F�j�ipXS�0��5�AŊ$Ob�Z
�R�^R��(�K�A1�>��5T�d�j��X��ɦ��	E��pk�%�*���
�) ���I@o%N�J.˂�`�[ G��H�JJ\���+�x�8	sr�Ix�,b/b͠��
����$�D�@���d����Y����O�� (��P� q�9 r�� a��skMՋ��j��N�Y�:Ypte�ꨢ�PT��� 8!r�@�G�AF���� .B" $d�w��L�4T���XEw@  %���!|�` 	܀ �� vy�g���i�G���R�RAݴ��r���E����]g�U3]�U���TR��m��E�d�^��0r�J�M�^
� ��� �����J�G�O�n�T��'�7�j��f�Q�%��k���T�`�#S���p����GM:�&�+��q�؏8*WO�-�"=N\x8��kq5Lx5�n5O
��Zm����Q�ŏ+T��5�K�	K�=��/No�E�m6��%{��lX��\�e��I�[�e�DJ�'
IStԔ����b��*�`4�U89�9vv������kV�O�G��*Ffe�bBR�ςゥv�&y���ɗP�o4���Rӳ#�Űs�W���
�UU�EW�,��Z���EQ�UV%�\̕9�A-�A��iRЦ�:���G:��iꪪ�!�d+L_!v52�*�i*Y�+��AJB�V�Ȣ�Q�Di	l�TA]qc3F]��PwV	w� �ܤ�Șțp'����,�ћ`E�@g�N,�
�\L�6�[����.i5@���s����+�X�EmZ��gUS�]$�2�=��nn��tO�;�
�/Ֆ����j��fn��+�� pn����I�w���n�}A�8�$�r�,CDQ ,�j���3SK�0Kw|�ҋ��3.f$u>���J�8'&�@�b�;r��K�e�U0T��d	+����v^��i����ӥ���\hʇ������RT�7�l�j��b4�h��}�T�m�0��`:c�t���F�T�{A8Y�R�cjm�1`1N�̲���Q�RϹJ�(��X4酃j��u1$I5{�TZ!ҥt�I<���l>��
�#�TO���nKM.,��h�J�@�7ϹiI7
EI� �T��ې:�J��'U�2��:����5<)�&[���JxW9�T��տ����]ps����82�M>P5uxg%��V�vəM�W&[I�2�BV���O�/�A_%�}�%4����*P�&.�j�+���CR��Y<���#��#Q��sQ�%/S��,��+O�
2y�UK5	&�c�v&��`����TR�fo�iO��
�K:C]������9/ӌd�J\��sTt�N�DdӦ}ʔ١�
������U<�����ct�)R��[�T����5N����6Q�W�Ҕ�b3��2k�(V%Z��)�9�U3b��7_ij]+��{��I�޵M� �k�k��+��U���J<ι˹�_r䆽Zlb�g�pm�f�N�N����j��Ǖ�9*��^����֗�i��&��$�H�7/].��:�GS��5�i_�ֻ�pu��a���urU������Vcݸ�N���N�
Xu60m�ʵ����� 7��[�M�be���2��
Sha���Nd�(( ���o�,���GSe�4XSk�Wd�n�|w� �!!�%�� �J�Ky�k�ɢ+=7V
���R�:x �A�~���J��3��N�#Ω��]8V,�[੿fr���^`Q�B�����ޟ�z�i�t~Y���>��TV�n�}MnW��|��G*��:�+�IrDO���*3�d�Q$�\	�D��5UbS�ѪT��f�%�2� aҞN5���0�<�|���l�T��G����b�EJ�se�+O�Y=UWedii,�P��^�Zi��:վ�V:�%�ǯW�� W='
Է'U]��`<[��*�F�l�h����ޘNb�����`���d�)�nT��+Ji�n�iP�:�O-�i�����KMb�M]P���KJy>f���r��Jf�M�iU�莮�/�u+��X�h�U[��VܟkF��.��~���}���.����zZT���M�[j���էϹ�U�Ԣ�[�Nz��sҪ���<��MR鉋2ʏ���w=�w]*��:�iR����鮅�Eњ*}0����&�^���*�Drr��p��Л1�����`��'�%�������ҕ:��=�U2���'�`�jP����Sq�2Z$�L��W���(N%�n��a�>�ELD��R�L.Ƣ.|)4��X|H��'K��j!�6HiJ�����t���N,����J��i���P���l�S���7[OG�!��z�	�-	R��5t*�����[��a+�#_n�o�Z�<����F]�e��윒�81K�m]�U�'(=m&�r�������ME�#W-.�J'�t)��::�!��SJ%W'E��NOL(�$���'*���BL˥M��UKDg��%�8WKO��f#���  W ��U��@��B�'�S� �ŀ1hf���Xg$�bFKiB�#�y(���O	� �)0�������/(ܷ�?�?���{
_Op�O��V����W�S �b"���40
���� ��nPG�v�W� ��Ȑ� �@Q�"@�I&���K�,2�`�y4"Xb,i�$��C��&@�s���B֦�윞j"N�8�G٣qޥӘ8׼J���'̫V��������DW���M���^溦Y��� �-��A��������=�{o��{����*p����N�F��:��Gѫ��F���סU4%6�K��=l��Z��څ��6�'ڪ�NַSo���K���OὍ{:7[����bbg�zv�iN��R�詪\Cm��N�J��;a��m�z�V��C}554Ի�G�[����E����i�^�[S��}*�U4�a%c�z׮�����UU<R�������Ztj:hJ\�A��U:�z���O��kWӶZ�JUS�T�3�D��Gg辥�������U�G�s��u��ՙXt�����J���+K	�������i]{��� ӧe��V���z=����s�@��l}�w�}-M/��,����M/��m�N߹�{��oBt�4���d~y���n5z��?aF��zB�V�ҳU�󷟋��&��N��vG�k�SQ�uUS|�=9�0}}��=������� M'ˮ�MG5��o�����K��{D� �!��OSU�)���r&ێ����me�.�s���#J����B��i�jjZ�js��oF��S_ؽ�������tՎ��v�-\|����i)qS��m:tP��RF�RfuQ8��*����TI/q���#,ҥI�X�@�����\Ӕ�ӂĲ�`x#_q���f/�+B?P#H�/�K�+_nM%`�(��\�Uwt"� �-�-p٪qq̐"� bMp_؎�)]��a 3�
X��D]� �^`Gw%���~ /ऌw(�rV��O�)�+H ) P��P�
ZI��ت�+G�, 	�R| �MS�U^��R�੩�Jt[�;*RQ eiҽ�`r !Ȃ6��(C`P `
A( � %ą��� $6��@��,w,��#C�I  !̆X�!��N��2� �m�6��� �'-M֝2�z��u_ؚD����˹�uUN(W{V��z(Ӧ����ijV��u�B�nuVA]�<$^H�A�q,@6!o�M�]:n��+j��]��z��6۲G�?6�+QU���fc�*M]g��J�f��G�+)��Ұ��Y��<��Y���j��M.WZ�9�Zl�G�V�������=��'*��֭�h��H}Q�}<ͻ��y��>J��q/$S k�����!���U�ՉW�;��9=4����0��H���[�9���zj���s�E��XX�6�������I�ˡ��]e���S��t8�4��Lq�r��Ӏ���L��K�5��M�F]����mef��Cbߡb��%A���pK��T�fjr��Nr�f��k��3M.lF�@i�r�d�GbI�wˀ�:y���,`�,�-�i��f@��r�$vvB�r{��� r�d����)���Is�/��Y,��`!pT�ǒŦJd����T�E���H����$�m
z�S��F�MJ�z:aj��#H��$���z�����w�<��S6��Eu�VZ�3�aU7pZ� �%\��B� ��8�-d�zo�ҭq	� ,��̫)X����j�K�b��H\$�PELՖT�����%���:x�+�m�dZ���T䪐1J���<��N�WD8h:[X�*�b�EK���@stܵR�5�����T] 1M-���k*J�IhN|e��lUL�#�Y%����O��xT��j**v��P�Qb�Y%��4�Sr��3�-)�6�jj�݃���J$<`	7��������C�� �6��� C�w
�2P��J�X�3p#�3�Lɪ�y�P�.@\��f�v�UJ�Qg|iV��5�ڏ9-	'��s� ���kM'tQK��U�s5')�@�ҩqi�/�%|���S�-�Scʔ+��e����'L�ŋ�r�XK9�~Z���C��x6�sl�Uy����Ӣ\а!�y^4�E]�J2��š#]�0���	S	MFڽ���2���M�����'btr3J��Pn�c*Kwf�t0E�(Fj�x�:SGK��(�$�9$�cP�L��_���� \�n��$�Ʊw�j���/6F�t�D3�Ԡ�V��d0סS%�ĩ��RқO����M2�c�TU�>Lծ���<u6Բ&�2���uSkZٚ�R�<���&\�.#3.�%�5ȔGg܀��=�㑠��#Sh%J�p�`�In��ԗ��v*`?$�Ѕ�;_S	<��b��(��\E�e������g�8�b�/�$���qITڰt����Y�@_	P�ȳB�dU{ITF��E��	�X���&:m"%�$�W*EvP\Đe�p�n�a�5t��SOr+))�õ��N\�iS fx��sv���:-䉹͎�'�#J"n�J�>OM7���^O]���m�r�Sӫ�pfR��ܫ`ʿE������O�J�MJ��-WF�X���iNN=�I^��e"����ə��(I���E��N�N��#���(��ER�A�F�E\ �/!�GZ �ẻ�.�(�]�s�p=�۬í���T�-�q���=0ӽ�U4���sL):iG&w�U�Ɲ}j���^�)E+��f�`�T�X��
;62����i�\��T�gWr�$���Խ�<:�-�x>�W�&�ֽG�G���Z���4��b8<��>���w:t[�f��:����WKkB�RNyG��N���m7���(��j�g^ڴ�̤y7:�^�����۸���Oi��uUM�ϡ�U}GK���R�=5��ot�MT����T��ec����
�������m&�$J5���SM���0��BnwB��IN$��}�w-F�d}��V�-x4���UD9G��X:/^~��i�{����S rT�7��6ҋ-Z�J97�rd�*nV�Ň��If$E�3Z��q�����`�JT��95��f髒z�=^����r�<aߓi�Q�-���V!Z:]��n���1f|]�ͬ#R�c��R��v��t���F��x��(䙵P���L����y��C]��wG��I���Mt�NM5k\��Z�����զ�fd�A!u8�Ӌ\jS�κ%Aݮ�\�⮈pc��NV.y���EG0W�"�^ y��`9/� L�P x(�	�� {�A �` �I����%xZ � !�&�����W �B�� %x5��@��Ki����枵1��~� 'q��(֤��K ��4TcN0j;�{�$�@��� ���駥��_N���e��=#s��
�S�g�}7ж�)kk/��ʬG���iԨ�;ŏ�鞁��5^��ZmJo,����ѣN�m�����D��i骚�W�M\|-��m*6ν���J/WZ�?5�K��Kʱ��Xu�zF�*�S?��ש�nK��&�H(ȿ w,�dq��5�
�H �Z(z���Nji &����]:uWWjT�Z�mm
��ui�ԥR�@��4�#eB�۽J�N������}��}Mj���]U�QI�1��mZ�KJ��� J�ձ�j�t�t�J�3<A���:[=N���j瞽�>�����[�*t�[.��l
l��Ky�V�mqdp��3��Xn���Jho4��[}J�R���Q���[m�un5=O���L꾒�vξ�0yt�z{7ң�Q�M���:v���U���[�[�n4���uiг�h�ޛ�[-�������R����}C�.�CAѧ:Ϋ>��½GS��UO����z/�o�zz�/��-�u���Z��j��QS��'�[u����_R�J������
m*���� �O� ,�{?D�%Ѣ�_�[M����/�o_�;Z��Z�G��~�[��.i�� ���~.��'N֟��{��}�MS[���ذ~�����E=}:J��չg�y��k��kC�����M]MZ����o��Ű0}���]��MkN��'����թթ]U7�fm>�Sl�$��X@f�ŋ7	T�$��O�C���*(6>���%V���M1����&�����ƪ��J�����tR颙�;�+"i����jU�j��������QM(�2���3Z�J�M�R,6��m�N��j�zgܨ�6�TDT��f�R�k�!/ڿb���p�6ҕa`D�"_��ɨ
�%�Y�� �I�%���w,8ȶJ��$X�X�(/����k@��R�A�r�@;d���{�@x+W	Yq���w
l\�`',�|��R�3g��UIp ��L�~��p��� X�% Y�r9-�� ���4 �	��H�N�U\Iz*��N�4��H4��ꨦ���,؈ � !���@/x � �  
I�`	=�$�Je���9 E���*�#��d�� Ob��� L��A*Ԣ�����*�j�Wj��]nj�����T)8����#�F�4�'����)}�gji��"�("�eN}�   �&�� �5�Z��_Q�jL�J{�_�_{��tҟkqU-$� �����#V�/8"�R�EJ�U&�S���d����ծ�����%�O6�
m��x��n��é�'�R�$'t]��TT���SܩBLh����V]������̗R����igJ�X��هs�]uUf�HŪ�ӷ�j)g�8��k��XJ�zU���[$����M'���jUS���c��8d�N{\�	�� buCV29}+��E5-�/��瑦8�$ܬz���}��%�:��T��xI����J�zO/Ѵ��M����PO����}'�ΫM��'D5?����y0���פ��.�Uux=�Ӯ���9�zf�^8y�q7=�ʈ9נ�N0]���I1SGg�ڲ�ޅL��N�d��t�n�|��@e��b/�ݼ�,�E�H��X��N$+���	MGj鱇LLf	t�y,JW���0�L��0��lvb�b�x	�
���J
���ry �D�J�H L����
�Oq���9*\�c7q.�d)�+q�#K���n����r�F�Jc��M9��&����J�'Im��2Ӌ���E��m�TH�vn��˖k����+e�$����Ѓp��=n,�#�cq�dG92�!,�F�P����3�e�M%M�Mt���M+�l+����Ts��i��'6�/	!ܸ�]3�:O�r�a�2*o|�T�4վ@�*%�wK�s]?m�R���c����%k2EM�
U���vh�m������
���� �0^d	6����+�d"D���t�Ep��@���s�(Tܠ+��]̬��K��=< S�|���b�aSX	��_�^���8/��Lb�)�呹��9qi4��M����%t��J�¹;;3j��U�KW�.�S���5D�pJ�)N92��}-|���S�����Rؓ-��]RT?��G�TrT��Zt����ja�Ԕ>@�k�i�g��K�ٯLR��檛���V �)GviR� �)� ��y*W�X��M�Ҧ뱮���Zhv� EK��P�Aڝ6���(��u[��T7Jj�i*f�y-��q��k�ɷvf].$	M=ѵL�,�T�vG�J�e���|�+K<���]pa뺩�q�R��~�J�?�џ��7����g:�ry�M��,��V����wra�Zb`h��X����Sb;�X�/�|�e�*p���#�%�,V�\M�D����8�Ss|/�5Ԅý��Ui*O%�1LݑF��F�w�蠣����T���;�j��-.9�-7�+�1���&�s�9�;Se�$7(����DK
#��WWe����Bo�8V�dT&�'&m�]7 _%�i��y�p)�K�p�)�b���4�`�l�j�$j\`�$�+�"�t�I]�AU-�I)'T�,��`T��/3�9�YQ<�R����Z�g%K�"J�EY୷n	g��UX��\B��<Z������e�@�.j$� ���poN�J�j�?(d�j�t�Py��Ўʸd�u�T�Ss��v�h����۾F�]�Չ\�5+�]�j>�l�t�|��	B��ѥ]O,�-��5�tT� �������UB(����!~d�K�4a�A�Vױ�u/vWDR����{�E7Sr���u`t��6릅9;Ͱ�9�A�,M+,�Vh�^��Z�����"���R��ʪ���m�
�4�쌽e��O,�L�ujI���WrO��6�KJ�F���,n���o<ҽ��l���Ɇ�8:#�W�˩ć��f��H�42�T�J����n�3]-�@�j����w=:��'��B8�>��7�KQ$��窟W��kWV��Ҍ�����U�鯩v��m�P�i��|�+����ۧO����hm4����6o�&+��Z��SW�|]O���fϥO^���cͼ��y���]j�]-��(r��j�N���m���S�رޚg%Iv6����J�W(�=P��rf�{��V�AR��P�ҋ7��Z�L�$�8� ����/ ^�33q�<�[�\pU��B`M���9�OV�� C��&*M��4�j�H��Q��t&x��ʴ�K��2�����e�'���iJG�u�vp|�����5:K�t�݈�V=��z�sy*��ZNTd�X�0�SP
�P�N��D�#��[�j�WE^WM�s��>���T�Y�W�����v=�;�QQ*�uS��zlUZ�L�_�ͩL��Z��%zv��P{]3�p�N*��j8�R-�]��P{��	w'�m#��_,��#�G��� � E��U���br.�;�m\���=��ߒ� `�N`�Xa�4���iH,�?G�]Ɔ��x}{���=߆#�n��_Z��E|��j"�d"Kb{�}I��OQ�ԟN�.>�ὗ�tQ�]:�OVW�&��i�^�����N�.O���g~�>�4��zSR}J��-���᾽EeSX7������
���]
����W+��'O[CWSqET�QS�����~��Aj�J���Os������h�ou���i��}��;��ⅷ���T�6�������Y?\�:v4�SR�'�����-��::�+������Y*���Х����}OKo�Ӣ�����uc�z���7u�G�B�r|�]Z��z��ˉ���~$����k�t�*�y?7U]u��di2�Y9�IE��"
E�AfK�^ GcW�i�gM�:��t֗�����0�kCR�j5�� =*��
������]:���c��&}/U��:t5�t��WU2��|���M�[t�����xI�߃��Ǯ׿�� M�б9&+��;���WKs�U9pϓ���n�{QөC]6J��W�'���zv�sl����mOʗ��������z;J��gSR���M}mWի�Uu>��N���Z*�=ۏ��������� D�z:��O�v���^���{}�]?����?�u�վ������ ��o?l�S[d�k�����oPܶ���R�����z{OD�:�4S� UWl��?����kK���?����_^��UT�nY��32��~%���MJ����:����N�uT��%(ʦ�k�Y���]��UX*�H�;�m�5-�����]I�U������OF��_U�E���hh�4���F�4ޔ�h3�q�=«R�^����4����]D�Z%��JM� W	G�aRd`�\`���K�e�wv6�U7��3&����8*$x��X��*� �OcQ��c��dXr"2�%r�)v*Ri+��"[�p!c$�95���#I�#�� ��	a G%��24��	p��J�5�D��؂�)]����H��� ^`�xv�R�n8�(�D̄�"�  ��8(�M�`b��� �� @�i' w*V/ N�� C,�0�o��t]Y;ѡM9Ψu3���/t�X eQJVF� 0  �V@ ��  r �1�w,G�H� �^%k�	�"r\ $$W��2"��C�� ���� ��b� (� ��9< ��NZG
�Sr�
�=Mzi���-ML�(�K�]���jW�	����fz!+$ �j�#Qb� ��I��(�pH�[��� @-���̓]��5���qTi����m�Hnǆ�y�����i)]���MϹ,��)��K5u,�ڄ��x�x3.i��IjR��:����NS���-���j)r�s�N�Yu7����Y� ��Е��U%�*;��*��������=��<;��r��m�̷0k,���9TI�,�'�GM:ҪO~�����lv���81�:ԯ�Mr���������O^�r�Nv:Jڙ������R��2"�0GL9�j:U��2�ߐ2�N���.j]I>��{�|�����UYM�lH���p᎐3Ji��T����)�>׀$LB�s-}����B�� ���9�qK�j�mO��2�R�X���KP�̽�i� '|�$ҋO1�n��9���C����Zb!����#�ն�9H�ѫ���+K��L�Ni�)�}'��ZUa��ա�Qi�*��#�U~We��<>F��j9�*I����=.Ty<ڛy���y|�KWl���멥��s���3܏�|� DWp�F�"p.��������J�e�+�+�S`2�XF����v*]UXۣ�'gӧLS�¶�2]�#��9ɮ Sj�z4���J���j�����]�Zͼ������/�*�T��s2i�c����
��Ĥ,�6��&\���Z��P���5n`��c�-s�Jnۃr�*�R���ͣ��\�6�֔x6�ۇ%J�_"���ɵJ�����ȚP�GJm�iD��@R�n&Ee�}.�*IU0hO�f\8oح�2�ONyV5u7[�^Y%|� �&�*�J.:�Q~cUTա�Mr��HM�]Q/�p� #-u/!�h�_�s =�+WO��:����+�%W-<6��O�iI�DKlـ�����B�Դ��ڂ+�M�K�+R���"S-ܯ�d�U�i�&c�S�-�u�(�'�����^/O�sz�7�0zp� 4"U�g��^MD;�:U��3.�鹕C��6�\�:�jfM-�JR�:]1ct֔J,3��I~Wo'%SrN�����\��]�Zt��h]7ϫ[mJ9��ړ����'J�CI��y��YN�օ]��M0�H�M�y5Ɲ��ץ$�������3�̩I#m8�����;���a7�k�wd�6<�k7SSc.���^ʵ(J�9ժ��Z���g���z*֧�y2��^Q&j�����ɇUS�8�ڗ�&�:��ȉO�>�:�4��^J�������DwV3�}�#�J>=-B��K*�ӂL݅g�"��u`ʙ6�9#��kC�/UݬKa��k&��� �է������%��o�T��Q�tי	$���JW�b' gܑ,��
�!a{��6�i����L�L��]�}�N��,�\�ipA�c���i+ɥL$��&�U.bNz�;4�rb��� Z���0Թ.��D���+]�"NJ�\������^a���j��5)��2�f#� �(�D�ت��Ba��eJ-�~?r�*���-��$��J,C�|�q?����T�'b�N�PnT�
0&�2�t����LX�B�>�yD��!/؃JH�]���<�a��VnLaܳ9%�%F*��GJ�.a�� �v���禮��`�P撍��'U�0��l�wv%�{�w
�U-�Z���=GF�Iۓ��mE]	�~㤯J�4ٟl/'6�.lE���p݇� �O�4|�B�]8��mY���)�kp��KR�hV�Z��8馒B��$�R��3-��a�%ͰD�͐[���UGr��a|��H�x�Kn��o��X�V�W���]WN�sT.���J��u�ub�ү��jթ���U����Bt���I�f��+�ͳ��ޚ�E��ms�ӱ:g%G>�^|���zv�
�W��=J*UYX���R8j��8�;�aK�8�R⪝����S\z+��9�i��o���ͭ]� �v;7�T��M7�����r{5wq��>���4��7�T/���J�>]:u�V��}+�}=�ƍT�5�E*���7:}.���a!�7)�_������RF�үVZM�y���ѭ[ݕ��Ԧ�SM9;BQ���N�K��T�ԭZv��g���.�E	���,�@�Y9��`Dv�F��	� �&X�����y,8a+��I1�B�e�$�,<�i�$��L��YI�T�O�9�`�`ª�6���(��WIT�gT��d#��i��'���a���n�����rچ�:L~R�>�|�I���n�n��|�j:\E��͎I�UI�rT���IUg��T~�D�;��R�����:��Gm~����t�|���v��z|ؖ+��dƞ��d��c*�H�T�:�i3R���9g���֬r�M2�c�x6�i�x�M	�}��	d<��l$yC*� n8'�2X��2V�� H,B��,{�!� C5x5�e�p'�����e4�F����}Ϻ<>��m'���:��S[���+�+d���
��;#Q��\�/�t�}!t�uTz=Sy���J�U���Tg������Ѣ����w���{��S�ǃ8����W��lރէ�17m��]-]Ʈ����� ��
�M]t�R��5���օ��UIp��_Az�����)jg�'������[��S��K�ĕ��E�kWWSV�]m�3�J��D��HN_�$@�"�@�,
Ն}�  @X�8 T�%'�i����Q�ЯS�B���l��u{��t� ����m��}5ujS�UK��\�W�v~��޿�]�u��G��~ש����h��t�����~(�m'Oo����c�o�u�/𗁣��>�螗J��4�K������V�l�;j~�X��F��_qWV��U?,撑���?����ѥ� ���������u*��[2���+�:o%V*E�"$(*A��X)��5N�u�R�=�H�j%UQB`|�4�����e,��HѢ��j�w>���KN���������}]K�>���OC�t4Ե/��TM�y&�9ѥ�B�)v7�H�M���fd��&��~1���Ql����1���eT�T��Z�R55�v��T�X�TرH՛�Q����P#$���ةwt�T�ґ ��qr@.X�Ap��0j݄< �.P&\�8F�/��(R�]��ϸH	/��A�J!0'�W��Ut�"�Y���E���Q&=�|��sr�E�%t��x�Yb��Z�	J��G����a\.E�3]ұ�Oo]Wx�s�gM=*�wG��
(^N�X�N�ru�t��� H����#"�	�_`#�{ !A���p  7�X��`]�#eK�,�lҥ+���XJ� 7L�/�� `8$\���r� ��`2O"�y���Z��l���5,�"���J�­z�qJ5N�5)�, �?F���δ��M�۞ B�` ����H\�d",�(������
�?��-��d�pS���%�nB�EȊ�7o�E����
�M�����J�W=�)�-nk�L�M���~��/�1�%i�͈�~,mC�E�/6`Z��\j�pi�m���y5���n�2�'�����,J�V���}��ȔrTt�}����Z�#�M��x�Q&�J�T��ԡُ�����a�J��L���N���@�T8�ݾ�J�|��;�7Ō�ԯ�E}Xw:Swo�Š��뢣����)�	TE��s0țnr*�#�eҒ�#k�%7��,I5�� ,6�QU�ē�<�w����]��;["SX̹-�%O�3��_����q�p�%M,ᚘPg�|��J�������)Jotp�x��2��7h� �4�w�T�]��ҡ/�S�`&�m(��%��R�/��T'd�Ye���U�x��-	]�mM�b��ᩘ1R���c7�|Z����W�����u>�����I�u�^q��5��!�+(�Ga,��P%���`GS�W*phnm�)w6�J�2�/ �`<��N��w4�r;��Nj��ܝ���r���Ej��vQ���'U�iZ��R�e�*�X9�u�4�n��Tf`�K���	?p�	�+;�Xr�I)�w	_��Α�$z�I9�y�*�2nRmXCR�8.xJ;��r�|��%� �R��ÉI'�eJ��݋=Q��§�in���4�2��V�|���[w�i<���l����~"W��ɚl�i?�2�mܩe=ʕӆ���-�L�rUD T�\��`���m3y!)�'���J�y+].S�`�.j�«/p4�6,,��j%g&^�-����e),�*����+(1V�M�����D;6c���4��J�R�� cI0��Z���I79#���rW���rm�2�����W�:�Bt˱4pT���SD�0v�MD���]Mv(�П���4)�RW�Qƚ*i��O���feS(&����;���LҪ\2T�N�T�a1-4҈1֧���JU-R䣥��ы�I\�=t��=j����m/��uSn��*�m[�9�US�S^�����/����ʼ��ڽZ����۱����b�����N��d�U���hL+��Wy����N��_��ZbnH}��в ��c�Tj�s3k��s6#��(�K�V�.@�T�lnrE{2GSI�;�������v���R͇J�H	i�*K(%i����~�I&i���m!NI�r��r�T��p��5�D��7*̓|����hu^�7Ji4�3E/��(W�5'0�Ejb�T%�08�9s֑�R��Bm!��ї,ҥS��*�\4c�6�Ha��C�f����Sr�������J2��vLճ�p�&���9�@�6�Q��碹i���'O�8k��lT���XÌ�%�0�FiУ"M�Þ
k��
3ɮ�n��#6j9����r�HL�X�Y/J�E9� �7��ʕ���(���TCĕR�`�&�v��0�Zi�ʿ�|ri�f�L��-	�x�W��N@�S�A�ե|��Wς�ap���ފm-�R�b�h������\º�J�f@�S_�����˩*I$|+scӷ�tԺlc��J�m�jO�[�i��H����[EpE�.H*sb2� �ɫG�)rz�ɖ��p8S�E��Q�iҞ.j�����N�r��T�^B3`�B��`"0�d�Izc�]2��R�;�X��V�<�MA�$�+��D��F���/BF��2�K(T�CMpG�9�cS|Z�J������W�y^�Swv��R��cϩ�	��M#��MJ�ӑ�����s�]q��]-������=T�4��N�:i�~���k%Юp�tu�[�VM�5n��ziӤ�咎�zӣ	b�ͮ��\�l��>�����5��&�V�]4��@|�ףR���}]��RRԟ6�k��IFK����q#���0�v������U=4�X#MG�u$���� WP��bP��%M�`q�JD`��ł��@6Ie���Hl�2%!����%��&��,��<p��ur��I�@2�jK&���94�bԬa�����f�qK㱍Z:Ѿ��G�q�U&ڱ��{&�ӎ��I��km�I����mv����;��ۈg��Ъ�nV1�Y4��:_f�����`�A<�IS�0ɅRHa��t���*�t�jO��������Ԣ	��2#��*�؍(:����:���U��k����E�8��u�N�낌�J��"��� �܈rG�#����X�A��Iy, 2���3m��Uઋ e�+�.Y��J��f�RJ���1�n2|� ]� ��0��?[i�]������_9/(e_�y*`˼3DU�UiS0�RCܠH*�X�6y.G O��T��N���"�D "EFfN�;}]z�t�ꮯ�P�$I�v������T������z�lWV�S�Կ����Y���k�j��Ү��ke�Ww�q]:4�2ϩ���Ξ���.1�ۯě�iZ_��(Kj��:���
z�ҭ�uw��?gK��Ъ�%N�k���]J��g4�.&����f�ZV�Zt�\������V��U7̜T`�@b&�K�R��A�W$��Ev؉7U�������Zm݅y}�QMUa6}�ER��~��:;5�ЬM1�6����秥y>��ѩ�����L%	D�3j�㥴��K��(쨥_'&�Q�L��cIpi�ڱ��kĚ�}�Ji�,%{��_ f��-�%8$v(AR����"2�`��IrX��aI[��J
�%���X��"��#�"E�,^��1��6,��.X�YZ�	p"V29%�ňp�xG�`� Eb�I�l�K�;��eM�W#�,8G�R*V��X�Ћ�b �V	G�`�f�F���h!~@��%o�� @��eB ���k@~K@�"u���6K�+��-�U~w��(�@�ѡUQ��N�%vw�0%4SO����@(�@r�8 ��	$���R0�B�`H 	 ^&B]����I J� 	�`
�p@�  ����0N>�x ���R�2�ٚ��s��u8�?r}:�uV׸�g�ML�iӦ�A�����F�WgD�V�"�Zp�$ �~C�=������\�rX� � ;�XIx*�/�0���&�`; G��]EM-��X����r�d��U7�ţ�H������ti�Wa^�bY�;�+�Qi��,��_m���l�f�U}���b]�Tt�j&��Ź����A��p�'�^��R;���������7M��uTZ2z)lẇ�r��vWɗ3J��G~N�l�TH�f���3(��9�T��/>�R��I����U)%j>���袨� �h9�=1�2�s����n��xVli�NjɥT<�-7����K�G]?�R_�J�,A���\�S3yV���WZ���1R����Jk>K�S�s5j%L���k�����wb��`�cd�Ԙ�ܪ��OF�n��'LX*�W
�'c�~l�5OB�؎��EU9$&�Q��	#P^�i��D��J����v���4��\�v)^a255B*v���jm�i,2Ծ�$�KP��ƥ�Py�4�	�'�����i>eK7SJ�<�S�Ԣ��<��L�'L^^'K���EZmX�U��6_`��0�FJ�p��Tb�=[=J��O,��w�իZ�QB�w>��ҨI$��Y5�]]�Ӫ�8��}oS�j���|��nK*�h;��'�iC*W��E�piJ����:��`�NfMR��֣�-u]�*�Drq����ZVle\k�NN��;�%JR����J���3j�mIDy���,��2��li$�qRM#���3�u.��h$��!$��R�)4�˩4�{����Y���t���6��/��f�`�ޔ.J-*r�a��≥�p�L9t���sI�P��wJRRT��u)�XN�acV������jS��O,���#P��2�+9G:�)�.��g�����Pݑ��T߂�mUS��]4�nO"��{�e�����D<��m�/��e`�:mā>�K�몧.N�Nj��iQ��&�p��N����_��C�j$h�芕�L�M
z��)q&�/�j�]2�-4R�0t�]>݅6�,L%r�DL���Z�ܠ�O9f�DrD�M�a�$����rҺjo���Qfs�_��0ש5�#5:)�<O]����M�a�cա.�s��I[��m͝�o�v_�z^�2s�Q����9S�*��F�\��2c�	���:��I����tb{�qxyR�}�{d�ϐ���S�REw�ҾI)���	�"̹j"�AR'�I��-�T�j.�˱i�dq��F�o�
,�M;D��0��
�Y`����b�J�i��S	� � ��~��arD��Y��)ܙ]�0z3���E��^#���Q�������Z é��R�W.Q��-N�[���]�*-�9�8��kȧN�iSp9צ�L�;�BQ������5�-�����4ٗ���7h-0�H�F�lZ*m�@�D���[i�E�o'=J^P9թ7��U\܉^��e\�c�K��=4hҝ��)����zu&�$�w��J�`$�1i�j�U�-�m<p�xABO�I�W��e���НV=5~c��/<�8��a`��sm?�S��11�IrXmpiQқ�(�L˥�Tʳ-4��iva�T'˱��p��BN܆�6�J{���FzS��:\]�Ta�o�&%CNƺ%�:��e��洚r^�-�����U
-��t�NFxT�2�έU���o3~^���V���`�uK���esȵ\̏�WW#z�^I�Z�y3�jN�a�cD�M�'իk�8�&.�t�rN �-ik��Օ�k�LHT��1F����͉`�9Ņ.]�i�[I�N⚺n��؊�ޓ�R���i�4����U�Ԣ�?G��*�w�p�I^�M7|�i�i98��-� b�pZ��������$�a�Ȯ�@I�`�cJ��J�9�)GE�{�����Ҡ�ҠC3�t��#}��K D���l���@�r�+3��� H��ѥ؎���>^
����#ǫ��n��Jt��եDAG���$���;5G[���i�=e�ܤ���Ԫ���VP�}}M�mi��/ʉ� Ӣ�^�u;brλ:t覭mKR��]��W�7ҧ�Fh�n�4���h���7-A�ߧV�V�w<����OE*|�Se��j���M}O'�h����O���6�WkAH�
��)��+i<܊�p�e������(Xp��~�!�>
����H(�π$�+ܟ�Uo`�x$�����������8� ����VC�D`�|]�1R�5�b�<��>�3j��S{Mp���IV`�,�!�F�><�)b���U��W>f�h�vR�m�9ji*���wz�n⪗'�w[4ӫ�����Mޖ��Y��*�pt��t��r�&�YbF#^^ΘS��I��G����Ҽ��vJ��$j�$�E쌴�镌���v�jtð:Tw1U>CG7k��8�OW�y�(K��<��9*<MC�g(�j�A��b��Y���D'�cI�藐�W��+��8�� E<r�Zd
�2[�`Gus��?V���8.VE�g�;��_ ~���-��|������;�u���W���x��z��J�<*ȁY\I�,@���E�������@q��p^.� �j�jԯ�N�UO���!-�_i�w���ZT���cm�oc������� ��"�i�j�Wӥ�UU>)R}}����OR4W���Wꞙ�Ժ4(�G�Q��u�t>����� �^Ε^�W�Գ5[�:��ߦ��jh�:Q����q���J�8$��>���6�Q��Sߓ�ko7�:��3�JEW����ɥJW, ��eX�A&0�T;T��Iz����ں������Tة:�g��z=u9�p����}%�e�&��;-}u��n���SI���F�4��K�R��j�ˡ��J�h�R�J)�G�]���#6�
�Ѥ�Ŵ�N�R?�Ғ�܂)N�����b����J�4��齠�$�'�2V�H	$`D�V���������6�K̀,G)4����eL����� H���n^ŀ%%� �C�䯳..���ؼ"� ,	.lV��*e��-�~R@:Qc#�` �pDX�D䗒�
�DH�%�%���[L��b��>��( </�6|I�MT�#��֦���k)7F�u<A�B�87=6H{ZU��SM8El�Y$ܤ��      �!S I  �'��P2�D %�c� =���  r�H  p &nQp@/�q$��pJ��+��^�ٴ�c�z�Qd�cR���F�+ a�jj?�Z.f�'d��/$���i�`� `�"�    �T�L\ ��p��
rB�d(�
�A}Ȉ�"��1���G�?u��zTƜ6��߯�F���?7��-J�I��[�]v��y���Z�_�E��'O`���� Ck����E/�y
�&������
T�������J�c�R�w9�)�Pi*�R���j�'>�`�k�-�2p��܌�v��.��s�Sm�<���pk�Ԯ/8#��wc6��,V�T�FU�.ƢБ�)�Rp1�K�(9��GY�v������K=�����J��f��Uc��݋�l<�k��E}ԙ���jNQ~��d5���H�+�T�8E��p��*_sv7��^�Py�\S~�oJIB�%Y�U+&^[�t�ڹ��J��6�6�WSU��]ҺZ=OEM�&����ee��c���ݏzu�s���������
�.Ӭ��#�X�/ճwW��}E.�6����Ӯ�)7��s������Q+3J���ϖ�۽_��wW�ǅ��T�v%�˙<�\�.�ʈ�<��ֳ�ȴ�<��)� R�7N�1��ܞW]����kA������Q�̮p7���tJ�'��m4��r�mJ�ji<54�>�ә�+��R�c��C\�9=�P�ړ�ƭ���%cO	6ϡ�٩U�Dvg*4�'TI���L.YV�ƞ�j��yw^��CT8mD���.�5+��Ⳬ�V�uT�|��M/Wcl���Uȑ�IGr��WV2�y6��5O�N&��7F��њ�iE7��CJ���Q烥7��W-iy8Uwc��<�/��Fnf��m��(�,!�MG�/��I��bKʪӈ ��5z��Z�� P�c95
�� fou���  ���m4� �l���R�� b�Zp߱���� z�;�z�5C �Jg��"�2� T]ZP�� �Q�U)�����t�Ѐ �M5"�K��� 
UJ��N���z��p�0�U8r��������V�?���U���V��� 3�-�:� �LU/� �h�<`(���˻ S����d�%�R�GÕp5�nE,� �-���.�`�0� i�Ť*V@��Q c�r"@��T��T�
@j&�+��2 c��� 
�MNG� Ҽl�a� �M'/�]�4/J�9�)�7�� -U��i�:�� kQ���o���i��p�u3tR��@�aXT�S�SM/�P� 	Utӗ����4�4�Z9�WUJl���X
��J\� ��5wW-��L�(�V,e��SkA�� Q��Wq����VɪSut����v,M� #V��� Q�U&*ռ�G*��vJ�:�*�� �*&L˼ ����	0�^��Rn&XU3 �y�URX@j��~���u�S����`5V8�þ 25��>���z�����ڏ�iV��F�y@k���r 2%x��m�j\�t� 4�M*R �I#]1�
�@�w�R Tm � �  �@ �( � �L� �J�I�֡$��j��+�G��Mp����V�Jzg����tQ��z��$��;y����%E5*8]�Tl�kj�hK� ʹn��ӦO6����6�7�#�m���o'|� e��Eo� %ܮ� b?p ��.���Y� �E� H��` �>��@S���
�@ ;�t� �t� ��� �X�N�L;�-��jR� +��v$�\��U-��^X�nd�iթTSv�}-��V�Uju;~� U��58�Zt�vGC��:v :9��Tg� a���� #�I6�G���b8:Zx0�p
��� ��� \�� !� #ዀfy ��� x* 
�� ?K�o��Y��G�|�Y���
̓� �h� q��� �� T ��{Kg�[����tR� �� K�>����E*��������}��K�GN����v�u����)ת�d�_�#��=Kw�o�j7< iF��NJ�E�* V` ���}]f�7'���mJ��5H����+o��OS\��4������3V4ա�(� �*nٮ% J|w5� V��\�=� �Q�H ���
� ��  "K �f� .�G rL Q� ,F@  
��X J�R y 	�� v` ,r8 
 b\ * H��� .I� , @X�D\ /"�aX $�e� :Q�]g}=�K�r ���U��� �@    H  	r�   � �  �� �Up�>K1�� ��  =�         +� �Z����Uk��E YTW[��:S�JJPF��^@ r {  � � n ��� d@ $�x'�Evd )��\ 9j�4���RG���½:\8 �Y3[u��T�[�G
�UK�Ҹfg< o��/�	�
M/�@
��S�H 6�k��� ՞awˀ8n�]�:�n��|�D�$p�IՀĮQfZ��i�b]�O�� I$���@*� b� ��R� �u8
�X *�����4'SSv{�t��g�N^�Oږ�I?����|��$�@��^�[�I��І��o��Q��i��k ��~@uD	� V���{����]��Հ��k8��J5��� 3djWE�����F�t˿pز���|��f�T���J�fܠ ��윜��]���.��0f��7�`l��K���`�ªw0�\dH�M;�@����p6�M�3Z������ U�M���O�y����
```

### frontend/src/components/Auth/Login.js
Last modified: 2025-03-04T16:42:38.139Z
Size: 1.98 KB

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Wywołanie API logowania
      const { data } = await axios.post('/api/v1/auth/login', credentials);
      // Zapis tokena do localStorage
      localStorage.setItem('authToken', data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Błędne dane logowania');
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow max-w-md mx-auto">
      <h2 className="text-2xl font-heading font-bold mb-4">Logowanie</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
          <input 
            id="email"
            type="email" 
            name="email" 
            value={credentials.email} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-semibold mb-1">Hasło:</label>
          <input 
            id="password"
            type="password" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-brand-blue text-white px-4 py-2 rounded-full hover:bg-blue-400 transition">
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default Login;

```

### frontend/src/components/Auth/Register.js
Last modified: 2025-03-04T16:42:38.140Z
Size: 2.00 KB

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Logika rejestracji, np. wywołanie API
      navigate('/login');
    } catch (err) {
      setError('Błąd rejestracji');
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow max-w-md mx-auto">
      <h2 className="text-2xl font-heading font-bold mb-4">Rejestracja</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Imię:</label>
          <input 
            type="text" 
            name="name" 
            value={userData.name} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Hasło:</label>
          <input 
            type="password" 
            name="password" 
            value={userData.password} 
            onChange={handleChange} 
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-brand-blue text-white px-4 py-2 rounded-full hover:bg-blue-400 transition">
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};

export default Register;

```

### frontend/src/components/Button.js
Last modified: 2025-03-04T16:42:38.140Z
Size: 0.79 KB

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition";
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-400",
    secondary: "bg-brand-purple text-white hover:bg-purple-400",
    outline: "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
};

export default Button;

```

### frontend/src/components/Card.js
Last modified: 2025-03-04T16:42:38.140Z
Size: 0.43 KB

```javascript
// src/components/Card.js
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      {title && <h2 className="text-2xl font-heading font-bold mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;

```

### frontend/src/components/ContactFrom.js
Last modified: 2025-03-04T16:42:38.140Z
Size: 1.71 KB

```javascript
// src/components/ContactForm.js
import React, { useState } from 'react';
import { sendContactMessage } from '../api/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactMessage(formData);
      setSuccess('Wiadomość została wysłana!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSuccess('Wystąpił błąd, spróbuj ponownie.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Imię:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="border p-2 w-full" 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="border p-2 w-full" 
          required 
        />
      </div>
      <div>
        <label>Wiadomość:</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className="border p-2 w-full" 
          required 
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Wyślij
      </button>
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
};

export default ContactForm;

```

### frontend/src/components/Footer.js
Last modified: 2025-03-04T16:42:38.141Z
Size: 0.24 KB

```javascript
import React from 'react';

const Footer = () => (
  <footer className="bg-brand-dark text-white py-4 text-center">
    <p>&copy; {new Date().getFullYear()} Twoja Firma. Wszelkie prawa zastrzeżone.</p>
  </footer>
);

export default Footer;

```

### frontend/src/components/Hero.js
Last modified: 2025-03-04T16:42:38.141Z
Size: 2.18 KB

```javascript
// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroVideo from '../assets/video/hero-movie.mp4';

const Hero = () => {
  const typedElement = useRef(null);
  // Usunięto pasek stanu – nie potrzebujemy już scroll progress bar

  useEffect(() => {
    const options = {
      strings: [
        "Naprawiamy Twoje urządzenia!",
        "Telefony, tablety, dyski, pendrive'y, karty pamięci – wszystko!",
        "Twoje dane to nasza misja!"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Tło wideo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
      {/* Gradientowy overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      {/* Treść sekcji hero */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fadeInUp">
          <span ref={typedElement}></span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8 animate-fadeInUp delay-200">
          Profesjonalna naprawa urządzeń mobilnych i nośników danych – szybko, skutecznie i profesjonalnie!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="tel:666349210"
            className="bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition transform hover:scale-105"
          >
            Zadzwoń do nas
          </a>
          <a
            href="/contact"
            className="bg-brand-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition transform hover:scale-105"
          >
            Formularz kontaktowy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

```

### frontend/src/components/HomeSections.js
Last modified: 2025-03-06T15:40:32.383Z
Size: 0.77 KB

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeSections = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/homepage/sections')
      .then(response => {
        setSections(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania sekcji:', error);
      });
  }, []);

  return (
    <div>
      {sections.map(section => (
        <section key={section.id} className="py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomeSections;

```

### frontend/src/components/MediaGallery.js
Last modified: 2025-03-04T16:42:38.141Z
Size: 0.88 KB

```javascript
// src/components/MediaGallery.js
import React, { useEffect, useState } from 'react';
import { fetchMedia } from '../api/api';

const MediaGallery = () => {
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const data = await fetchMedia();
        // Jeśli data nie jest tablicą, ustaw pustą tablicę lub odpowiednią wartość
        setMediaItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Błąd pobierania mediów', error);
      }
    };

    loadMedia();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {mediaItems.map((item) => (
        <div key={item.id} className="border p-2">
          <img src={item.url} alt={item.alt || 'Media'} className="w-full" />
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;

```

### frontend/src/components/Navbar.js
Last modified: 2025-03-04T16:42:38.142Z
Size: 3.89 KB

```javascript
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';  // Import obrazka

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = { root: null, threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [location]);

  // Funkcja renderująca link z podkreśleniem
  const renderLink = (to, label, isSection = false) => {
    const isActive = isSection
      ? activeSection === to.substring(2) // np. href="/#home" -> id="home"
      : location.pathname === to;
    return (
      <li className="relative">
        {isSection ? (
          <a href={to} className="text-white hover:text-gray-300 transition block py-2">
            {label}
            {isActive && (
              <span className="absolute left-0 right-0 -bottom-2 h-1 bg-brand-blue"></span>
            )}
          </a>
        ) : (
          <Link to={to} className="text-white hover:text-gray-300 transition block py-2">
            {label}
            {isActive && (
              <span className="absolute left-0 right-0 -bottom-2 h-1 bg-brand-blue"></span>
            )}
          </Link>
        )}
      </li>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-brand-dark shadow z-50">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-[4rem]" /> {/* Użycie importowanego obrazka */}
            </Link>
          </div>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            {renderLink("/#home", "Strona główna", true)}
            {renderLink("/#about", "O nas", true)}
            {renderLink("/#services", "Usługi", true)}
            {renderLink("/contact", "Kontakt")}
            {renderLink("/login", "Zaloguj")}
          </ul>
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white focus:outline-none">
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            {isMobileMenuOpen && (
              <div className="bg-brand-dark">
                <ul className="flex flex-col space-y-2 px-4 pb-4">
                  {renderLink("/#home", "Strona główna", true)}
                  {renderLink("/#about", "O nas", true)}
                  {renderLink("/#services", "Usługi", true)}
                  {renderLink("/contact", "Kontakt")}
                  {renderLink("/login", "Zaloguj")}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

```

### frontend/src/components/PostsList.js
Last modified: 2025-03-04T16:42:38.142Z
Size: 0.75 KB

```javascript
// src/components/PostsList.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/api';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Błąd pobierania postów', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;

```

### frontend/src/components/ProtectedRoute.js
Last modified: 2025-03-04T16:42:38.142Z
Size: 0.40 KB

```javascript
// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Możesz zmienić logikę uwierzytelniania według potrzeb
  const isAuthenticated = localStorage.getItem('authToken');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;

```

### frontend/src/components/ResponsiveBox.js
Last modified: 2025-03-04T16:42:38.142Z
Size: 0.32 KB

```javascript
// src/components/ResponsiveBox.js
import styled from 'styled-components';

const ResponsiveBox = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #f6f6f6;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

export default ResponsiveBox;

```

### frontend/src/components/Services.js
Last modified: 2025-03-04T16:42:38.143Z
Size: 2.39 KB

```javascript
// src/components/Services.js
import React from 'react';

const servicesData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/198/198476.png", // Ikona dysku HDD/SSD
    title: "Odzyskiwanie danych z dysków HDD i SSD",
    description: "Szybka i skuteczna pomoc przy utracie danych z dysków.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1256/1256653.png", // Ikona kart pamięci
    title: "Odzyskiwanie danych z kart pamięci",
    description: "Przywracamy utracone zdjęcia i pliki z uszkodzonych lub sformatowanych kart.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/179/179405.png", // Ikona pendrive
    title: "Odzyskiwanie danych z pendrive",
    description: "Naprawa uszkodzonych pamięci USB i odzyskiwanie ważnych plików.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3642/3642489.png", // Ikona macierzy RAID
    title: "Odzyskiwanie danych z macierzy RAID",
    description: "Rozwiązania dla awarii w macierzach RAID 0,1,5 i innych.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2413/2413721.png", // Ikona telefonu – narzędzia naprawcze
    title: "Naprawa telefonów",
    description: "Usuwanie blokad, wymiana podzespołów i przywracanie danych.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2815/2815425.png", // Ikona tabletu – z narzędziami
    title: "Naprawa tabletów",
    description: "Diagnostyka i odzyskiwanie plików z uszkodzonych tabletów.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Usługi</h2>
        <p className="text-center max-w-3xl mx-auto text-lg mb-10">
          Odzyskujemy dane z dysków, kart pamięci, pendrive'ów, telefonów i tabletów. Naprawiamy również uszkodzone urządzenia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

```

### frontend/src/components/ServicesSection.js
Last modified: 2025-03-06T15:40:32.384Z
Size: 1.12 KB

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania usług:', error);
      });
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Oferowane Usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded shadow">
              {service.icon && (
                <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

```

### frontend/src/index.css
Last modified: 2025-03-04T16:42:38.143Z
Size: 0.35 KB

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Opcjonalnie: własne style globalne */
:root {
  --primary-color: #1fb6ff;
  --secondary-color: #7e5bef;
  --base-font: 'Roboto', sans-serif;
  --heading-font: 'Montserrat', sans-serif;
}

body {
  font-family: var(--base-font);
  background-color: var(--brand-gray);
  color: var(--brand-dark);
}

```

### frontend/src/index.js
Last modified: 2025-03-04T16:42:38.143Z
Size: 0.25 KB

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

### frontend/src/layouts/MainLayout.js
Last modified: 2025-03-04T16:42:38.144Z
Size: 0.41 KB

```javascript
// src/layouts/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

```

### frontend/src/pages/About.js
Last modified: 2025-03-04T16:42:38.144Z
Size: 2.33 KB

```javascript
// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white p-8 rounded shadow my-8">
      <div className="mx-auto px-4 py-8 w-3/5">
        <h2 className="text-3xl font-heading font-bold mb-6">O nas</h2>
        <p className="text-lg mb-4 leading-relaxed">
          W dzisiejszych czasach telefony komórkowe i smartfony stały się nieodłącznym elementem naszego życia.
          Zawierają one wiele cennych informacji, takich jak kontakty, zdjęcia, filmy czy dokumenty, które mogą być
          niezwykle ważne dla naszej pracy lub życia prywatnego. Niestety, zdarza się, że dane z telefonu mogą
          zostać utracone w wyniku awarii sprzętu, przypadkowego usunięcia, błędów systemowych lub ataków wirusowych.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          W takich sytuacjach warto skorzystać z usług profesjonalnej firmy zajmującej się odzyskiwaniem danych z telefonów.
          Nasza firma specjalizuje się w odzyskiwaniu danych z urządzeń mobilnych różnych marek i modeli.
          Dysponujemy najnowocześniejszym sprzętem i oprogramowaniem, dzięki czemu możemy odzyskać nawet te dane, 
          które uważano za utracone na zawsze.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Oferujemy kompleksowe usługi odzyskiwania danych, w tym:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 leading-relaxed">
          <li>Odzyskiwanie danych z telefonów uszkodzonych mechanicznie lub elektronicznie</li>
          <li>Odzyskiwanie danych z telefonów po zalaniu</li>
          <li>Odzyskiwanie danych po przypadkowym usunięciu lub formatowaniu pamięci telefonu</li>
          <li>Odzyskiwanie danych z telefonów z zablokowanym systemem operacyjnym lub hasłem</li>
        </ul>
        <p className="text-lg leading-relaxed">
          W naszej pracy stosujemy wyłącznie sprawdzone metody odzyskiwania danych oraz gwarantujemy pełną poufność i bezpieczeństwo
          przetwarzanych informacji. Oferujemy także konkurencyjne ceny oraz szybki czas realizacji usługi, co sprawia, że jesteśmy 
          idealnym wyborem dla osób, które potrzebują szybkiego i skutecznego odzyskania danych z telefonu.
        </p>
      </div>
    </section>
  );
};

export default About;

```

### frontend/src/pages/Contact.js
Last modified: 2025-03-04T16:42:38.144Z
Size: 0.34 KB

```javascript
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white p-8 rounded shadow">
      <h2 className="text-3xl font-heading font-bold mb-4">Kontakt</h2>
      <p className="text-lg">
        Formularz kontaktowy lub dane kontaktowe mogą się tu znaleźć.
      </p>
    </section>
  );
};

export default Contact;

```

### frontend/src/pages/Home.js
Last modified: 2025-03-06T15:40:32.385Z
Size: 0.91 KB

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServicesSection from '../components/ServicesSection';
import HomeSections from '../components/HomeSections';

const Home = () => {
  const [homepageData, setHomepageData] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/homepage')
      .then(response => {
        setHomepageData(response.data.homepage);
      })
      .catch(error => {
        console.error('Błąd pobierania strony głównej:', error);
      });
  }, []);

  return (
    <div>
      {homepageData && (
        <>
          <section className="hero">
            <h1 className="text-4xl font-bold">{homepageData.heroTitle}</h1>
            <p>{homepageData.heroSubtitle}</p>
            {/* Inne elementy sekcji hero */}
          </section>
          <ServicesSection />
          <HomeSections />
        </>
      )}
    </div>
  );
};

export default Home;

```

### frontend/src/reportWebVitals.js
Last modified: 2025-03-04T16:42:38.145Z
Size: 0.35 KB

```javascript
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

### frontend/src/setupTests.js
Last modified: 2025-03-04T16:42:38.145Z
Size: 0.24 KB

```javascript
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

### frontend/tailwind.config.js
Last modified: 2025-03-04T16:42:38.145Z
Size: 0.63 KB

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        'brand-dark': '#1a202c',
        'brand-blue': '#1fb6ff',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

```

### package.json
Last modified: 2025-03-04T19:11:11.255Z
Size: 0.31 KB

```json
{
    "scripts": {
        "start": "concurrently \"npm run start:backend\" \"npm run start:frontend\"",
        "start:backend": "cd backend && npm start",
        "start:frontend": "cd frontend && npm start"
    },
    "devDependencies": {
        "concurrently": "^9.1.2",
        "tailwindcss": "^3.3.3"
    }
}

```


```

