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
