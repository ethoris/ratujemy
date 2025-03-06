const express = require('express');
const router = express.Router();
const {
  getHomeSections,
  createHomeSection,
  updateHomeSection,
  deleteHomeSection
} = require('../../controllers/homeSectionController');
const requireAdmin = require('../../middleware/requireAdmin');

router.get('/', getHomeSections);
router.post('/', requireAdmin, createHomeSection);
router.put('/:id', requireAdmin, updateHomeSection);
router.delete('/:id', requireAdmin, deleteHomeSection);

module.exports = router;
