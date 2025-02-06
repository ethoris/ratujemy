const Menu = require('../models/Menu');

exports.getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.findAll();
    res.status(200).json({ total: menu.length, menu });
  } catch (error) {
    console.error('❌ Błąd pobierania menu:', error);
    res.status(500).json({ error: 'Błąd serwera', details: error.message });
  }
};

exports.createMenu = async (req, res) => {
  try {
    const { title, slug, order } = req.body;
    
    if (!title || !slug || !order) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }

    const menu = await Menu.create({ title, slug, order });

    res.status(201).json(menu);
  } catch (error) {
    console.error('❌ Błąd tworzenia menu:', error);
    res.status(500).json({ error: 'Błąd tworzenia menu' });
  }
};

exports.updateMenu = async (req, res) => {  // ✅ Dodane updateMenu
  try {
    const { id } = req.params;
    const { title, slug, order } = req.body;

    const menu = await Menu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ error: 'Pozycja menu nie istnieje' });
    }

    await menu.update({ title, slug, order });
    res.status(200).json(menu);
  } catch (error) {
    console.error('❌ Błąd aktualizacji menu:', error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findByPk(id);

    if (!menu) {
      return res.status(404).json({ error: 'Pozycja menu nie istnieje' });
    }

    await menu.destroy();
    res.status(200).json({ message: `Pozycja menu o ID ${id} została usunięta.` });

  } catch (error) {
    console.error('❌ Błąd usuwania menu:', error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
};
