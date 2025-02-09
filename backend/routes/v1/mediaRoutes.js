// routes/v1/mediaRoutes.js
const express = require('express');
const multer = require('multer');
const { uploadFile, getAllFiles, deleteFile } = require('../../controllers/mediaController');

const router = express.Router();

// Konfiguracja Multer – zapis do folderu "uploads/"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Ustawiamy trasę POST na '/' zamiast '/upload'
router.post('/', upload.single('file'), uploadFile);

// Pozostałe trasy:
router.get('/', getAllFiles);
router.delete('/:id', deleteFile);

module.exports = router;
