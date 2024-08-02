/* eslint-disable no-eval */
// src/components/Calculator.js
import React, { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Calculator = () => {
  const [value, setValue] = useState('');
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  const handleClick = (input) => {
    if (input === 'C') {
      setValue('');
    } else if (input === '=') {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue('Error');
      }
    } else {
      setValue(value + input);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-900 to-red-600">
      <div ref={tiltRef} className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-md shadow-lg">
        <h1 className=''>Simple Calculator</h1>
        <form name="calc" className="grid grid-cols-4 gap-2">
          <input
            type="text"
            readOnly
            value={value}
            className="col-span-4 h-20 text-3xl text-right p-4 bg-transparent text-white border-b border-r border-opacity-5 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleClick('C')}
            className="col-span-2 bg-red-500 text-white font-bold p-4 rounded hover:bg-red-600"
          >
            C
          </button>
          <button
            type="button"
            onClick={() => handleClick('/')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            /
          </button>
          <button
            type="button"
            onClick={() => handleClick('*')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            *
          </button>
          <button
            type="button"
            onClick={() => handleClick('7')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            7
          </button>
          <button
            type="button"
            onClick={() => handleClick('8')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            8
          </button>
          <button
            type="button"
            onClick={() => handleClick('9')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            9
          </button>
          <button
            type="button"
            onClick={() => handleClick('-')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => handleClick('4')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            4
          </button>
          <button
            type="button"
            onClick={() => handleClick('5')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            5
          </button>
          <button
            type="button"
            onClick={() => handleClick('6')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            6
          </button>
          <button
            type="button"
            onClick={() => handleClick('+')}
            className="row-span-2 h-36 bg-blue-600 text-white font-bold p-4 rounded hover:bg-blue-700"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => handleClick('1')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            1
          </button>
          <button
            type="button"
            onClick={() => handleClick('2')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            2
          </button>
          <button
            type="button"
            onClick={() => handleClick('3')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            3
          </button>
          <button
            type="button"
            onClick={() => handleClick('0')}
            className="col-span-2 bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => handleClick('.')}
            className="bg-gray-700 text-white font-bold p-4 rounded hover:bg-gray-800"
          >
            .
          </button>
          <button
            type="button"
            onClick={() => handleClick('=')}
            className="bg-green-500 text-white font-bold p-4 rounded hover:bg-green-700"
          >
            =
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
