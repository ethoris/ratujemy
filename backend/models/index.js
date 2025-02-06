const sequelize = require('../config/db.config');
const Page = require('./Page');
const Post = require('./Post');
const Media = require('./Media');
const Menu = require('./Menu');
const Seo = require('./Seo');
const User = require('./User'); // Dodajemy model User

const db = { sequelize, Page, Post, Media, Menu, Seo, User };

sequelize.sync().then(() => {
  console.log('📌 Baza danych zsynchronizowana.');

  // ✅ Optymalizacja zapytań przez indeksy
  sequelize.query('CREATE INDEX IF NOT EXISTS idx_pages_slug ON "Pages" (slug)');
  sequelize.query('CREATE INDEX IF NOT EXISTS idx_posts_slug ON "Posts" (slug)');
  sequelize.query('CREATE INDEX IF NOT EXISTS idx_media_url ON "Media" (url)');
  sequelize.query('CREATE INDEX IF NOT EXISTS idx_menu_link ON "Menus" (link)');
  sequelize.query('CREATE INDEX IF NOT EXISTS idx_seo_pageId ON "Seos" (pageId)');
  sequelize.query('CREATE INDEX IF NOT EXISTS idx_users_email ON "Users" (email)'); // ✅ Dodajemy indeks na email
});

module.exports = db;
