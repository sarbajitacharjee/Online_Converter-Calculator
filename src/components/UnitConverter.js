// src/components/UnitConverter.js
import React, { useState } from 'react';

const UnitConverter = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [unit, setUnit] = useState('kmToMiles');

  const handleConvert = () => {
    if (unit === 'kmToMiles') {
      setResult(value * 0.621371);
    } else if (unit === 'milesToKm') {
      setResult(value / 0.621371);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100">
      <div className="w-full max-w-xs mb-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholder="Enter value..."
        />
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="kmToMiles">Kilometers to Miles</option>
          <option value="milesToKm">Miles to Kilometers</option>
        </select>
      </div>
      <button onClick={handleConvert} className="px-4 py-2 bg-blue-500 text-white rounded">Convert</button>
      {result !== 0 && (
        <div className="mt-4 text-lg font-semibold">
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default UnitConverter;
