import React, { useState } from 'react';

const areaUnits = {
  squareMeter: 1,
  squareKilometer: 0.000001,
  hectare: 0.0001,
  acre: 0.000247105,
  squareFoot: 10.7639,
  squareYard: 1.19599,
  squareInch: 1550.0031,
};

const AreaConverter = () => {
  const [inputValue, setInputValue] = useState(1);
  const [inputUnit, setInputUnit] = useState('squareMeter');
  const [outputUnit, setOutputUnit] = useState('squareKilometer');
  const [outputValue, setOutputValue] = useState('');

  const convertArea = () => {
    const valueInBaseUnit = parseFloat(inputValue) * areaUnits[inputUnit]; // Convert input to square meters (base unit)
    const convertedValue = valueInBaseUnit / areaUnits[outputUnit]; // Convert from square meters to the desired output unit
    setOutputValue(convertedValue);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-xl shadow-lg max-w-lg mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-rose-700">Area Unit Converter</h1>
      
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800">Enter Value:</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="flex justify-between space-x-5">
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
          className="mt-6 px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 transition duration-150 ease-in-out"
        >
          Convert
        </button>

        {outputValue !== '' && (
          <div className="mt-6 text-lg font-medium text-gray-800">
            <p>
              <span className="font-bold text-rose-600">{inputValue}</span> {inputUnit} = <span className="font-bold text-rose-600">{outputValue.toFixed(2)}</span> {outputUnit}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaConverter;
