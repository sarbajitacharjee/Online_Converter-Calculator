import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const ImageToTextConverter = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const convertImageToText = () => {
    if (!selectedImage) return;

    setLoading(true);
    Tesseract.recognize(
      selectedImage,
      'eng',
      {
        logger: (m) => console.log(m),
      }
    )
      .then(({ data: { text } }) => {
        setExtractedText(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6  bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full  text-center">
        <h1 className="text-3xl font-extrabold mb-6  animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Image to Text Converter
        </h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 p-2 w-full border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto mb-4 border rounded-lg"
          />
        )}

        <button
          onClick={convertImageToText}
          className={`mt-4 px-6 py-3 w-full rounded-lg font-semibold text-white shadow-md transition duration-150 ease-in-out ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500'
          }`}
          disabled={loading}
        >
          {loading ? 'Converting...' : 'Convert Image to Text'}
        </button>

        {extractedText && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md text-gray-800 text-left">
            <h2 className="text-xl font-bold mb-2">Extracted Text:</h2>
            <p className="whitespace-pre-line">{extractedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageToTextConverter;
