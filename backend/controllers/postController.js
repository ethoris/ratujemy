const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error('❌ Błąd pobierania postów:', error);
    res.status(500).json({ error: 'Błąd pobierania postów' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`🔍 Szukam posta o ID: ${id}`); // LOG DLA DEBUGOWANIA

    const post = await Post.findByPk(id);

    if (!post) {
      console.log(`❌ Post ID ${id} nie znaleziony!`); // LOG
      return res.status(404).json({ error: 'Post nie znaleziony' });
    }

    console.log(`✅ Post znaleziony:`, post); // LOG
    res.status(200).json(post);
  } catch (error) {
    console.error('❌ Błąd pobierania posta:', error);
    res.status(500).json({ error: 'Błąd pobierania posta', details: error.message });
  }
};

  
  exports.createPost = async (req, res) => {
    try {
      const { title, slug, content, status } = req.body;
  
      if (!title || !slug || !content) {
        return res.status(400).json({ error: "Wszystkie pola są wymagane" });
      }
  
      const newPost = await Post.create({ title, slug, content, status });
      return res.status(201).json(newPost);
    } catch (error) {
      console.error("❌ Błąd tworzenia posta:", error);
      return res.status(500).json({ error: "Błąd tworzenia posta", details: error.message });
    }
  };

  exports.deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);
      if (!post) return res.status(404).json({ error: 'Post nie znaleziony' });
  
      await post.destroy();
      res.status(200); // ❌ Nie zwraca wiadomości
    } catch (error) {
      console.error('❌ Błąd usuwania posta:', error);
      res.status(500).json({ error: 'Błąd usuwania posta' });
    }
  };

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, content, status } = req.body;

    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: 'Post nie znaleziony' });

    await post.update({ title, slug, content, status });
    res.status(200).json(post);
  } catch (error) {
    console.error('❌ Błąd aktualizacji posta:', error);
    res.status(500).json({ error: 'Błąd aktualizacji posta' });
  }
};