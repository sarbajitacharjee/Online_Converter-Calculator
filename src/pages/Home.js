
import React from 'react';
import { Link } from 'react-router-dom';
import Qna from '../components/Qna.jsx'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-pulse">Welcome to My Converter App</h1>
        <p className="mb-8 text-lg opacity-75">Convert anything you need with our powerful tools</p>
      </div>
      <div className="space-y-6">
        <Link
          to="/calculator"
          className="block px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg text-center transform transition hover:scale-105 hover:bg-gray-100"
        >
          Calculator
        </Link>
        <Link
          to="/text-converter"
          className="block px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg transform transition hover:scale-105 hover:bg-gray-100"
        >
          Text Converter
        </Link>
        <Link
          to="/unit-converter"
          className="block px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg transform transition hover:scale-105 hover:bg-gray-100"
        >
          Unit Converter
        </Link>
        <Link
          to="/img-converter"
          className="block px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg transform transition hover:scale-105 hover:bg-gray-100"
        >
          Image Converter
        </Link>
      </div>
      <Qna />
      <div className=" bottom-5 text-md text-gray-900">
        ©  Sarbajit Acharjee,2024
      </div>

    </div>
  );
};

export default Home;
