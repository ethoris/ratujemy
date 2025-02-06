module.exports = (req, res, next) => {
    const { title, slug, content, author } = req.body;
    if (!title || !slug || !content || !author) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    next();
  };
  