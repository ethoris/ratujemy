const Media = require('../models/Media');

exports.getAllFiles = async (req, res) => {
  try {
    const files = await Media.findAll();
    res.status(200).json({ total: files.length, files });
  } catch (error) {
    console.error('❌ Błąd pobierania plików:', error);
    res.status(500).json({ error: 'Błąd pobierania plików' });
  }
};

exports.uploadFile = async (req, res) => {
  try {
    let fileData;
    if (req.file) {
      // Jeśli plik został przesłany przez Multer (multipart/form-data)
      const { originalname, mimetype, size, filename } = req.file;
      fileData = {
        fileName: filename,
        originalName: originalname,
        type: mimetype,
        size: size,
        url: `/uploads/${filename}`
      };
    } else if (req.body && req.body.fileName) {
      // Jeśli dane są przesłane jako JSON
      const { fileName, originalName, type, size, url } = req.body;
      fileData = {
        fileName,
        originalName,
        type,
        size,
        url: url || `/uploads/${fileName}`
      };
    } else {
      return res.status(400).json({ error: 'Brak pliku w żądaniu' });
    }
    
    const file = await Media.create(fileData);
    return res.status(201).json({ message: '✅ Plik przesłany!', file });
  } catch (error) {
    console.error('❌ Błąd przesyłania pliku:', error);
    return res.status(500).json({ error: 'Błąd przesyłania pliku' });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await Media.findByPk(id);
    if (!file) return res.status(404).json({ error: 'Plik nie znaleziony' });
    await file.destroy();
    res.status(200).json({ message: `✅ Plik o ID ${id} został usunięty` });
  } catch (error) {
    console.error('❌ Błąd usuwania pliku:', error);
    res.status(500).json({ error: 'Błąd usuwania pliku' });
  }
};
