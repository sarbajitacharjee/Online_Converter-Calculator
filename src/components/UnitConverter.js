import React, { useState } from 'react';

const units = {
  meter: 1,
  kilometer: 0.001,
  centimeter: 100,
  millimeter: 1000,
  mile: 0.000621371,
  yard: 1.09361,
  foot: 3.28084,
  inch: 39.3701,
};


const LengthConverter = () => {
  const [inputValue, setInputValue] = useState(1);
  const [inputUnit, setInputUnit] = useState('meter');
  const [outputUnit, setOutputUnit] = useState('kilometer');
  const [outputValue, setOutputValue] = useState('');

  const convertLength = () => {
    const valueInBaseUnit = parseFloat(inputValue) / units[inputUnit]; // Convert input to meters (base unit)
    const convertedValue = valueInBaseUnit * units[outputUnit]; // Convert from meters to the desired output unit
    setOutputValue(convertedValue);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-xl shadow-lg max-w-lg mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-700">Length Unit Converter</h1>
      
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800">Enter Value:</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="flex justify-between space-x-5">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-800">From:</label>
            <select
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              {Object.keys(units).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-800">To:</label>
            <select
              value={outputUnit}
              onChange={(e) => setOutputUnit(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              {Object.keys(units).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={convertLength}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Convert
        </button>

        {outputValue !== '' && (
          <div className="mt-6 text-lg font-medium text-gray-800">
            <p>
              <span className="font-bold text-blue-600">{inputValue}</span> {inputUnit} = <span className="font-bold text-blue-600">{outputValue}</span> {outputUnit}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LengthConverter;
