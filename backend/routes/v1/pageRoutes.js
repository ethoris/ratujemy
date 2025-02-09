const express = require('express');
const router = express.Router();
const { createPage, getPages, updatePage, deletePage } = require('../../controllers/pageController');

router.post('/', createPage);
router.get('/', getPages);
router.put('/:id', updatePage);
router.delete('/:id', deletePage);

module.exports = router;
