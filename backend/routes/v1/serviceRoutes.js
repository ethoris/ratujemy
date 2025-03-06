const express = require('express');
const router = express.Router();
const {
  getServices,
  createService,
  updateService,
  deleteService
} = require('../../controllers/serviceController');
const requireAdmin = require('../../middleware/requireAdmin');

router.get('/', getServices);
router.post('/', requireAdmin, createService);
router.put('/:id', requireAdmin, updateService);
router.delete('/:id', requireAdmin, deleteService);

module.exports = router;
