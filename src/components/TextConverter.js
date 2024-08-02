// src/components/TextConverter.js
import React, { useState } from 'react';

const TextConverter = () => {
  const [text, setText] = useState('');

  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-4 mb-4 border border-gray-300 rounded"
        rows="10"
        placeholder="Enter your text here..."
      />
      <div className="flex space-x-4">
        <button onClick={handleUppercase} className="px-4 py-2 bg-blue-500 text-white rounded">Uppercase</button>
        <button onClick={handleLowercase} className="px-4 py-2 bg-green-500 text-white rounded">Lowercase</button>
      </div>
    </div>
  );
};

export default TextConverter;
