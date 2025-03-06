const express = require('express');
const router = express.Router();
const sequelize = require('../../config/db.config');
const Page = require('../../models/Page'); // Model strony głównej – tabela "Pages"
const HomepageVersion = require('../../models/HomepageVersion'); // Model wersji strony głównej
const requireAdmin = require('../../middleware/requireAdmin');
const redisClient = require('../../redisClient');

// GET – Pobiera bieżącą zawartość strony głównej (z cache)
router.get('/', async (req, res) => {
  try {
    const cacheKey = 'homepage';
    const cached = await redisClient.get(cacheKey);
    if (cached) {
      return res.status(200).json(JSON.parse(cached));
    }
    const homepage = await Page.findOne({ where: { id: 1 } });
    if (!homepage) {
      return res.status(404).json({ message: 'Strona główna nie została jeszcze skonfigurowana.' });
    }
    await redisClient.setEx(cacheKey, 60, JSON.stringify(homepage));
    res.json(homepage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Błąd serwera podczas pobierania strony głównej.' });
  }
});

// POST – Aktualizacja (lub utworzenie) strony głównej z transakcją
router.post('/', requireAdmin, async (req, res) => {
  const t = await sequelize.transaction();
  try {
    // Pobieramy dane z żądania lub używamy domyślnych wartości
    const {
      heroTitle = 'Domyślny tytuł hero',
      heroSubtitle = 'Domyślny podtytuł hero',
      heroBackground = 'Domyślne tło',
      mainContent = '<p>Domyślna treść</p>',
      fontFamily = 'Arial, sans-serif',
      fontSize = '16px',
      textColor = '#000000'
    } = req.body;
    
    let homepage = await Page.findOne({ where: { id: 1 } }, { transaction: t });
    
    if (homepage) {
      // Zapisanie bieżącej wersji strony – używamy albo wartości aktualnych, albo z żądania, albo domyślnych
      await HomepageVersion.create({
        homepageId: homepage.id,
        heroTitle: homepage.heroTitle || heroTitle,
        heroSubtitle: homepage.heroSubtitle || heroSubtitle,
        heroBackground: homepage.heroBackground || heroBackground,
        mainContent: homepage.content || mainContent,
        fontFamily: homepage.fontFamily || fontFamily,
        fontSize: homepage.fontSize || fontSize,
        textColor: homepage.textColor || textColor
      }, { transaction: t });
      
      // Aktualizacja rekordu strony głównej – nadpisujemy lub pozostawiamy istniejące dane, jeśli podane w żądaniu
      homepage.heroTitle = heroTitle;
      homepage.heroSubtitle = heroSubtitle;
      homepage.heroBackground = heroBackground;
      homepage.content = mainContent;
      homepage.fontFamily = fontFamily;
      homepage.fontSize = fontSize;
      homepage.textColor = textColor;
      await homepage.save({ transaction: t });
    } else {
      // Jeśli rekord nie istnieje, tworzymy nowy rekord strony głównej z domyślnymi danymi
      homepage = await Page.create({
        title: heroTitle, // można użyć heroTitle jako tytułu strony
        slug: 'homepage',
        content: mainContent,
        heroTitle,
        heroSubtitle,
        heroBackground,
        fontFamily,
        fontSize,
        textColor
      }, { transaction: t });
    }
    await t.commit();
    // Inwalidacja cache – usunięcie starej wersji
    await redisClient.del('homepage');
    res.json({ message: 'Strona główna została zaktualizowana.', homepage });
  } catch (error) {
    await t.rollback();
    console.error(error);
    res.status(500).json({ message: 'Błąd podczas aktualizacji strony głównej.' });
  }
});

// GET – Pobranie historii wersji strony głównej
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

// POST – Przywrócenie wybranej wersji strony głównej z transakcją
router.post('/versions/:id/revert', requireAdmin, async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const versionId = req.params.id;
    const version = await HomepageVersion.findByPk(versionId, { transaction: t });
    if (!version) {
      await t.rollback();
      return res.status(404).json({ message: 'Wybrana wersja nie została znaleziona.' });
    }
    let homepage = await Page.findOne({ where: { id: 1 } }, { transaction: t });
    if (!homepage) {
      homepage = await Page.create({
        title: version.heroTitle || 'Domyślny tytuł hero',
        slug: 'homepage',
        content: version.mainContent || '<p>Domyślna treść</p>',
        heroTitle: version.heroTitle || 'Domyślny tytuł hero',
        heroSubtitle: version.heroSubtitle || 'Domyślny podtytuł hero',
        heroBackground: version.heroBackground || 'Domyślne tło',
        fontFamily: version.fontFamily || 'Arial, sans-serif',
        fontSize: version.fontSize || '16px',
        textColor: version.textColor || '#000000'
      }, { transaction: t });
    } else {
      homepage.heroTitle = version.heroTitle || 'Domyślny tytuł hero';
      homepage.heroSubtitle = version.heroSubtitle || 'Domyślny podtytuł hero';
      homepage.heroBackground = version.heroBackground || 'Domyślne tło';
      homepage.content = version.mainContent || '<p>Domyślna treść</p>';
      homepage.fontFamily = version.fontFamily || 'Arial, sans-serif';
      homepage.fontSize = version.fontSize || '16px';
      homepage.textColor = version.textColor || '#000000';
      await homepage.save({ transaction: t });
    }
    await t.commit();
    await redisClient.del('homepage');
    res.json({ message: 'Strona główna została przywrócona do wybranej wersji.', homepage });
  } catch (error) {
    await t.rollback();
    console.error(error);
    res.status(500).json({ message: 'Błąd podczas przywracania wersji strony głównej.' });
  }
});

module.exports = router;
