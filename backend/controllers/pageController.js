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
