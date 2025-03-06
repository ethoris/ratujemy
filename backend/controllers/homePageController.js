// backend/controllers/homepageController.js
const Homepage = require('../models/Homepage');

exports.getHomepage = async (req, res) => {
  try {
    const homepage = await Homepage.findOne();
    if (!homepage) {
      return res.status(404).json({ message: 'Strona główna nie została jeszcze skonfigurowana.' });
    }
    res.status(200).json({ homepage });
  } catch (error) {
    console.error('Błąd pobierania strony głównej:', error);
    res.status(500).json({ error: 'Błąd pobierania strony głównej' });
  }
};
