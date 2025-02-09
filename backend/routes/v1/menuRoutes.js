const express = require('express');
const router = express.Router();
const { createMenu, getMenu, updateMenu, deleteMenu } = require('../../controllers/menuController');

router.get('/', getMenu);
router.post('/', createMenu);
router.put('/:id', updateMenu);
router.delete('/:id', deleteMenu);

module.exports = router;
