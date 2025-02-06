module.exports = (req, res, next) => {
  const { fileName, url, type, size } = req.body;
  if (!fileName || !url || !type || !size) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
  }
  next();
};
