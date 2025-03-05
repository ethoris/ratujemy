// EditContent.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditContent = ({ initialContent, onChange }) => {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [content, setContent] = useState(initialContent || '');

  const handleToggleMode = () => setIsHtmlMode(prev => !prev);

  const handleContentChange = (value) => {
    setContent(value);
    onChange(value);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleToggleMode}
        className="mb-2 bg-gray-200 px-3 py-1 rounded"
      >
        Przełącz tryb: {isHtmlMode ? 'HTML' : 'WYSIWYG'}
      </button>
      {isHtmlMode ? (
        <textarea
          className="w-full border p-2 rounded h-40"
          value={content}
          onChange={(e) => handleContentChange(e.target.value)}
        />
      ) : (
        <ReactQuill 
          value={content} 
          onChange={handleContentChange} 
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['link', 'image', 'video'],
              ['clean']
            ]
          }}
          formats={[
            'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'link', 'image', 'video'
          ]}
        />
      )}
    </div>
  );
};

export default EditContent;
