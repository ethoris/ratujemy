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
