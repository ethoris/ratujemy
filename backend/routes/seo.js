const express = require('express');
const { getSeoForPage, createSeo, updateSeo, deleteSeo } = require('../controllers/seoController');

const router = express.Router();

router.get('/:page', getSeoForPage); // Pobieranie SEO dla strony
router.post('/', createSeo); // Tworzenie ustawień SEO
router.put('/:page', updateSeo); // Aktualizacja SEO
router.delete('/:page', deleteSeo); // Usunięcie SEO

module.exports = router;
