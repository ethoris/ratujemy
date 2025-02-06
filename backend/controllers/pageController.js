const Page = require('../models/Page');

exports.getAllPages = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const pages = await Page.findAndCountAll({ limit, offset });
    
    res.status(200).json({
      total: pages.count,
      pages: Math.ceil(pages.count / limit),
      data: pages.rows,
    });
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
};


exports.createPage = async (req, res) => {
  try {
    const { title, slug, content, status } = req.body;

    if (!title || !slug || !content) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }

    const newPage = await Page.create({ title, slug, content, status });
    res.status(201).json(newPage);
  } catch (error) {
    console.error('🔥 Błąd tworzenia strony:', error); // Bardziej szczegółowe logowanie
    res.status(500).json({ error: 'Błąd tworzenia strony', details: error.message });
  }
};


exports.getPageById = async (req, res) => {
  try {
    const page = await Page.findByPk(req.params.id);
    if (!page) return res.status(404).json({ error: 'Strona nie istnieje' });
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updatePage = async (req, res) => {
  try {
    const { title, slug, content, status } = req.body;
    const page = await Page.findByPk(req.params.id);
    if (!page) return res.status(404).json({ error: 'Strona nie istnieje' });
    await page.update({ title, slug, content, status });
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ error: 'Błąd aktualizacji strony' });
  }
};

exports.deletePage = async (req, res) => {
  try {
    const { id } = req.params;
    const page = await Page.findByPk(id);

    if (!page) {
      return res.status(404).json({ error: "Strona nie znaleziona" });
    }

    await page.destroy();
    return res.status(200).json({ message: "Strona usunięta" });
  } catch (error) {
    console.error("❌ Błąd usuwania strony:", error);
    return res.status(500).json({ error: "Błąd usuwania strony" });
  }
};
