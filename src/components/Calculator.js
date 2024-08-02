/* eslint-disable no-eval */

import React, { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Calculator = () => {
  const [value, setValue] = useState('');
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 24,
        speed: 800,
        glare: true,
        // scale:1.2,
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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-900 to-red-600">
      <div ref={tiltRef} className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-md shadow-lg">
        <h1 className='text-center text-lg'>Simple Calculator</h1>
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
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            /
          </button>
          <button
            type="button"
            onClick={() => handleClick('*')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            *
          </button>
          <button
            type="button"
            onClick={() => handleClick('7')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            7
          </button>
          <button
            type="button"
            onClick={() => handleClick('8')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            8
          </button>
          <button
            type="button"
            onClick={() => handleClick('9')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            9
          </button>
          <button
            type="button"
            onClick={() => handleClick('-')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => handleClick('4')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            4
          </button>
          <button
            type="button"
            onClick={() => handleClick('5')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            5
          </button>
          <button
            type="button"
            onClick={() => handleClick('6')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
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
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            1
          </button>
          <button
            type="button"
            onClick={() => handleClick('2')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            2
          </button>
          <button
            type="button"
            onClick={() => handleClick('3')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            3
          </button>
          <button
            type="button"
            onClick={() => handleClick('0')}
            className="col-span-2 bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => handleClick('.')}
            className="bg-gray-800 text-white font-bold p-4 rounded hover:bg-gray-900"
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
      <h1 className='sm:hidden block' style={{color:"white"}}>Note: Curve Your Handset to see effect </h1>
    </div>
  );
};

export default Calculator;
