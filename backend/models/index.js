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
