module.exports = (req, res, next) => {
  const { title, slug, content } = req.body;
  if (!title || !slug || !content) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
  }
  next();
};
