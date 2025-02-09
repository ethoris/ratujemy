const express = require('express');
const router = express.Router();
const { createPage, getPages, updatePage, deletePage } = require('../../controllers/pageController');
const cacheMiddleware = require('../../middleware/cacheMiddleware');

router.post('/', createPage);
router.get('/', cacheMiddleware('pages_all', 60), getPages);
router.put('/:id', updatePage);
router.delete('/:id', deletePage);

module.exports = router;
