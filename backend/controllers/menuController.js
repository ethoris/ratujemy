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
