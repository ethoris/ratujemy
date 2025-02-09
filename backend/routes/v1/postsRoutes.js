const express = require('express');
const { getAllPosts, getPostById, createPost, deletePost, updatePost} = require('../../controllers/postController');

const router = express.Router();

router.get('/', getAllPosts); // 📌 Pobieranie listy postów
router.get('/:id', getPostById); // 📌 Pobieranie posta po ID
router.post('/', createPost); // 📌 Tworzenie nowego posta
router.delete('/:id', deletePost); // 📌 Usuwanie posta
router.put('/:id', updatePost);


module.exports = router;
