const Page = require('../models/Page');

exports.createPage = async (req, res) => {
  try {
    const { title, slug, content, status } = req.body;
    if (!title || !slug || !content) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane (title, slug, content)' });
    }
    const page = await Page.create({ title, slug, content, status });
    return res.status(201).json({ message: 'Strona utworzona', page });
  } catch (error) {
    console.error('Błąd tworzenia strony:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.getPages = async (req, res) => {
  try {
    const pages = await Page.findAll();
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
    return res.status(200).json({ message: `Strona o ID ${id} została usunięta` });
  } catch (error) {
    console.error('Błąd usuwania strony:', error);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
};
