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
    if (!req.file) {
      return res.status(400).json({ error: 'Brak pliku w żądaniu' });
    }

    const { originalname, mimetype, size, filename } = req.file; // ✅ Pobranie danych pliku

    const file = await Media.create({
      fileName: filename, // ✅ Przechowujemy nazwę pliku
      originalName: originalname, // Oryginalna nazwa
      type: mimetype, // ✅ Typ MIME
      size: size, // ✅ Rozmiar pliku w bajtach
      url: `/uploads/${filename}`, // URL do pobrania pliku
    });

    res.status(201).json({ message: '✅ Plik przesłany!', file });
  } catch (error) {
    console.error('❌ Błąd przesyłania pliku:', error);
    res.status(500).json({ error: 'Błąd przesyłania pliku' });
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
