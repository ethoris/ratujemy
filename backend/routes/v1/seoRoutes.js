// routes/v1/seoRoutes.js
const express = require('express');
const router = express.Router();
const { createSeo, getSeo, updateSeo, deleteSeo } = require('../../controllers/seoController');

router.post('/', createSeo);
router.get('/', getSeo);
router.put('/:id', updateSeo);
router.delete('/:id', deleteSeo);

module.exports = router;
