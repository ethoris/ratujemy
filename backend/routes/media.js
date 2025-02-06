const express = require('express');
const multer = require('multer');
const { uploadFile, getAllFiles, deleteFile } = require('../controllers/mediaController');

const router = express.Router();

// 📌 Konfiguracja multer – zapis do folderu "uploads/"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.get('/', getAllFiles);
router.post('/upload', upload.single('file'), uploadFile);
router.delete('/:id', deleteFile);

module.exports = router;
