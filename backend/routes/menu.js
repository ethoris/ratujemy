const express = require('express');
const { getAllMenu, createMenu, updateMenu, deleteMenu } = require('../controllers/menuController'); // ✅ Poprawny import

const router = express.Router();

router.get('/', getAllMenu);
router.post('/', createMenu);
router.put('/:id', updateMenu); // ✅ Teraz działa!
router.delete('/:id', deleteMenu);

module.exports = router;
