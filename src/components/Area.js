import React, { useState } from 'react';

const areaUnits = {
  sqMeter: 1,
  sqKilometer: 1000000,
  hectare: 10000,
  acre: 4046.85642,
  squareFoot: 0.092903,
  squareYard: 0.836127,
  squareInch: 0.00064516,
};

const AreaConverter = () => {
  const [inputValue, setInputValue] = useState(1);
  const [inputUnit, setInputUnit] = useState('sqMeter');
  const [outputUnit, setOutputUnit] = useState('sqKilometer');
  const [outputValue, setOutputValue] = useState('');

  const convertArea = () => {
    const valueInBaseUnit = parseFloat(inputValue) * areaUnits[inputUnit];
    const convertedValue = valueInBaseUnit / areaUnits[outputUnit];
    setOutputValue(convertedValue);
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-gray-100 rounded-xl shadow-lg w-full max-w-lg mx-auto">
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-rose-700 text-center">Area Unit Converter</h1>

      <div className="flex flex-col space-y-4 sm:space-y-5 w-full">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800">Enter Value:</label>
          <input
            type="number"
            step="0.01"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0 w-full">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-800">From:</label>
            <select
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-rose-500 transition duration-150 ease-in-out"
            >
              {Object.keys(areaUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-800">To:</label>
            <select
              value={outputUnit}
              onChange={(e) => setOutputUnit(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-rose-500 transition duration-150 ease-in-out"
            >
              {Object.keys(areaUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={convertArea}
          className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-150 ease-in-out"
        >
          Convert
        </button>

        {outputValue !== '' && (
          <div className="mt-4 sm:mt-6 text-lg font-medium text-gray-800 text-center">
            <p>
              <span className="font-bold text-rose-600">{inputValue}</span> {inputUnit} = <span className="font-bold text-rose-600">{outputValue.toFixed(6)}</span> {outputUnit}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaConverter;
