const Seo = require('../models/Seo');

exports.getSeoForPage = async (req, res) => {
  try {
    const { page } = req.params;
    const seo = await Seo.findOne({ where: { page } });

    if (!seo) {
      return res.status(404).json({ error: 'Brak ustawień SEO dla tej strony' });
    }

    res.status(200).json(seo);
  } catch (error) {
    console.error('❌ Błąd pobierania SEO:', error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.createSeo = async (req, res) => {
  try {
    const { page, title, description, keywords } = req.body;

    if (!page || !title || !description || !keywords) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }

    const seo = await Seo.create({ page, title, description, keywords });

    res.status(201).json(seo);
  } catch (error) {
    console.error('❌ Błąd tworzenia SEO:', error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.updateSeo = async (req, res) => {
  try {
    const { page } = req.params;
    const { title, description, keywords } = req.body;

    const seo = await Seo.findOne({ where: { page } });
    if (!seo) {
      return res.status(404).json({ error: 'Brak ustawień SEO dla tej strony' });
    }

    await seo.update({ title, description, keywords });
    res.status(200).json(seo);
  } catch (error) {
    console.error('❌ Błąd aktualizacji SEO:', error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteSeo = async (req, res) => {
  try {
    const { page } = req.params;
    const seo = await Seo.findOne({ where: { page } });

    if (!seo) {
      return res.status(404).json({ error: 'Brak ustawień SEO do usunięcia' });
    }

    await seo.destroy();
    res.status(200).json({ message: `Ustawienia SEO dla strony "${page}" zostały usunięte.` });
  } catch (error) {
    console.error('❌ Błąd usuwania SEO:', error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};
