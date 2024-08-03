import React, { useState } from 'react';

const temperatureUnits = {
  celsius: (temp) => temp,
  fahrenheit: (temp) => (temp - 32) * 5 / 9,
  kelvin: (temp) => temp - 273.15,
};

const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [inputUnit, setInputUnit] = useState('celsius');
  const [outputUnit, setOutputUnit] = useState('fahrenheit');
  const [outputValue, setOutputValue] = useState('');

  const convertTemperature = () => {
    const tempInCelsius = temperatureUnits[inputUnit](parseFloat(inputValue));
    const convertedValue = outputUnit === 'celsius'
      ? tempInCelsius
      : outputUnit === 'fahrenheit'
      ? tempInCelsius * 9 / 5 + 32
      : tempInCelsius + 273.15;
    setOutputValue(convertedValue);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-xl shadow-lg max-w-lg mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-purple-700">Temperature Unit Converter</h1>
      
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800">Enter Value:</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="flex justify-between space-x-5">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-800">From:</label>
            <select
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            >
              {Object.keys(temperatureUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-800">To:</label>
            <select
              value={outputUnit}
              onChange={(e) => setOutputUnit(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            >
              {Object.keys(temperatureUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={convertTemperature}
          className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out"
        >
          Convert
        </button>

        {outputValue !== '' && (
          <div className="mt-6 text-lg font-medium text-gray-800">
            <p>
              <span className="font-bold text-purple-600">{inputValue}</span> {inputUnit} = <span className="font-bold text-purple-600">{outputValue.toFixed(2)}</span> {outputUnit}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemperatureConverter;
