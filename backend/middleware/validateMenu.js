module.exports = (req, res, next) => {
  const { title, link } = req.body;
  if (!title || !link) {
    return res.status(400).json({ error: 'Tytuł i link są wymagane' });
  }
  next();
};
