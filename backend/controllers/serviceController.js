const Service = require('../models/Service');

exports.getServices = async (req, res) => {
  try {
    const services = await Service.findAll({ order: [['order', 'ASC']] });
    res.status(200).json(services);
  } catch (error) {
    console.error('Błąd pobierania usług:', error);
    res.status(500).json({ error: 'Błąd pobierania usług' });
  }
};

exports.createService = async (req, res) => {
  try {
    const { title, description, icon, image, order } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Tytuł jest wymagany' });
    }
    const service = await Service.create({ title, description, icon, image, order });
    res.status(201).json({ message: 'Usługa utworzona', service });
  } catch (error) {
    console.error('Błąd tworzenia usługi:', error);
    res.status(500).json({ error: 'Błąd tworzenia usługi' });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, icon, image, order } = req.body;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Usługa nie znaleziona' });
    }
    service.title = title !== undefined ? title : service.title;
    service.description = description !== undefined ? description : service.description;
    service.icon = icon !== undefined ? icon : service.icon;
    service.image = image !== undefined ? image : service.image;
    service.order = order !== undefined ? order : service.order;
    await service.save();
    res.status(200).json({ message: 'Usługa zaktualizowana', service });
  } catch (error) {
    console.error('Błąd aktualizacji usługi:', error);
    res.status(500).json({ error: 'Błąd aktualizacji usługi' });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: 'Usługa nie znaleziona' });
    }
    await service.destroy();
    res.status(200).json({ message: 'Usługa usunięta' });
  } catch (error) {
    console.error('Błąd usuwania usługi:', error);
    res.status(500).json({ error: 'Błąd usuwania usługi' });
  }
};
