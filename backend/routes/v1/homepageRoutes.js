// routes/homepage.js
const express = require('express');
const router = express.Router();
const Homepage = require('../../models/Homepage');
const requireAdmin = require('../../middleware/requireAdmin');

// GET - Pobiera bieżącą zawartość strony głównej
router.get('/', async (req, res) => {
  try {
    const homepage = await Homepage.findOne({ where: { id: 1 } });
    if (!homepage) {
      return res.status(404).json({ message: 'Strona główna nie została jeszcze skonfigurowana.' });
    }
    res.json(homepage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd serwera podczas pobierania strony głównej.' });
  }
});

// POST - Aktualizacja (lub utworzenie) strony głównej
router.post('/', requireAdmin, async (req, res) => {
  try {
    const { heroTitle, heroSubtitle, heroBackground, mainContent, fontFamily, fontSize, textColor } = req.body;
    let homepage = await Homepage.findOne({ where: { id: 1 } });
    
    if (homepage) {
      // Zapisujemy obecną wersję przed aktualizacją
      await HomepageVersion.create({
        homepageId: homepage.id,
        heroTitle: homepage.heroTitle,
        heroSubtitle: homepage.heroSubtitle,
        heroBackground: homepage.heroBackground,
        mainContent: homepage.mainContent,
        fontFamily: homepage.fontFamily,
        fontSize: homepage.fontSize,
        textColor: homepage.textColor
      });
      // Aktualizujemy rekord
      homepage.heroTitle = heroTitle;
      homepage.heroSubtitle = heroSubtitle;
      homepage.heroBackground = heroBackground;
      homepage.mainContent = mainContent;
      homepage.fontFamily = fontFamily;
      homepage.fontSize = fontSize;
      homepage.textColor = textColor;
      await homepage.save();
    } else {
      // Jeśli rekord nie istnieje, tworzymy nowy
      homepage = await Homepage.create({
        heroTitle,
        heroSubtitle,
        heroBackground,
        mainContent,
        fontFamily,
        fontSize,
        textColor
      });
    }
    res.json({ message: 'Strona główna została zaktualizowana.', homepage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd podczas aktualizacji strony głównej.' });
  }
});

// GET - Pobranie historii wersji strony głównej
router.get('/versions', requireAdmin, async (req, res) => {
  try {
    const versions = await HomepageVersion.findAll({
      where: { homepageId: 1 },
      order: [['createdAt', 'DESC']]
    });
    res.json(versions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd podczas pobierania wersji strony głównej.' });
  }
});

// POST - Przywrócenie wybranej wersji strony głównej
router.post('/versions/:id/revert', requireAdmin, async (req, res) => {
  try {
    const versionId = req.params.id;
    const version = await HomepageVersion.findByPk(versionId);
    if (!version) {
      return res.status(404).json({ message: 'Wybrana wersja nie została znaleziona.' });
    }
    // Przywracamy wersję
    let homepage = await Homepage.findOne({ where: { id: 1 } });
    if (!homepage) {
      homepage = await Homepage.create({
        heroTitle: version.heroTitle,
        heroSubtitle: version.heroSubtitle,
        heroBackground: version.heroBackground,
        mainContent: version.mainContent,
        fontFamily: version.fontFamily,
        fontSize: version.fontSize,
        textColor: version.textColor
      });
    } else {
      homepage.heroTitle = version.heroTitle;
      homepage.heroSubtitle = version.heroSubtitle;
      homepage.heroBackground = version.heroBackground;
      homepage.mainContent = version.mainContent;
      homepage.fontFamily = version.fontFamily;
      homepage.fontSize = version.fontSize;
      homepage.textColor = version.textColor;
      await homepage.save();
    }
    res.json({ message: 'Strona główna została przywrócona do wybranej wersji.', homepage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd podczas przywracania wersji strony głównej.' });
  }
});

module.exports = router;
