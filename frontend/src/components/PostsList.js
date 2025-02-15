// src/components/PostsList.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/api';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Błąd pobierania postów', error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
