// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import TextConverterPage from './pages/TextConverterPage';
import UnitConverterPage from './pages/UnitConverterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/text-converter" element={<TextConverterPage />} />
        <Route path="/unit-converter" element={<UnitConverterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
