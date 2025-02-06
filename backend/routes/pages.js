// backend/routes/pages.js
const express = require('express');
const { getAllPages, createPage, getPageById, updatePage, deletePage } = require('../controllers/pageController');
const router = express.Router();

router.get('/', getAllPages);
router.post('/', createPage);
router.get('/:id', getPageById);
router.put('/:id', updatePage);
router.delete('/:id', deletePage);

module.exports = router;