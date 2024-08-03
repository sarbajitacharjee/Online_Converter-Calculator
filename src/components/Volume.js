import React, { useState } from 'react';


const volumeUnits = {
  liter: 1,
  milliliter: 1000,
  cubicMeter: 0.001,
  gallon: 0.264172,
  quart: 1.056688,
  pint: 2.11338,
  cup: 4.22675,
};

const VolumeConverter = () => {
  const [inputValue, setInputValue] = useState(1);
  const [inputUnit, setInputUnit] = useState('liter');
  const [outputUnit, setOutputUnit] = useState('milliliter');
  const [outputValue, setOutputValue] = useState('');

  const convertVolume = () => {
    const valueInBaseUnit = parseFloat(inputValue) / volumeUnits[inputUnit]; // Convert input to liters (base unit)
    const convertedValue = valueInBaseUnit * volumeUnits[outputUnit]; // Convert from liters to the desired output unit
    setOutputValue(convertedValue);
  };
  // useEffect(() => {
  //   convertVolume();
   
  // });

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-xl shadow-lg max-w-lg mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-orange-500">Volume Unit Converter</h1>
      
      <div className="flex flex-col space-y-5 w-full">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800">Enter Value:</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 transition duration-150 ease-in-out"
          />
        </div>

        <div className="flex justify-between space-x-5">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-800">From:</label>
            <select
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
            >
              {Object.keys(volumeUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-800">To:</label>
            <select
              value={outputUnit}
              onChange={(e) => setOutputUnit(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
            >
              {Object.keys(volumeUnits).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={convertVolume}
          className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
        >
          Convert
        </button>

        {outputValue !== '' && (
          <div className="mt-6 text-lg font-medium text-gray-800">
            <p>
              <span className="font-bold text-orange-600">{inputValue}</span> {inputUnit} = <span className="font-bold text-orange-600">{outputValue}</span> {outputUnit}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolumeConverter;
