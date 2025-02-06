module.exports = (req, res, next) => {
    const { pageId, metaTitle, metaDescription } = req.body;
    if (!pageId || !metaTitle || !metaDescription) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane' });
    }
    next();
  };
  