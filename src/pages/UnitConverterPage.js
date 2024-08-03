import React from 'react';
import LengthConverter from '../components/UnitConverter';
import Volume from '../components/Volume';
import Weight from '../components/Weight';
import Time from '../components/TIME';
import Temp from '../components/Temp';
import Area from '../components/Area';

function Unit() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-600 to-yellow-500 flex flex-col items-center p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-black animate-pulse">Unit Converters</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="flex flex-col items-center w-full">
          <LengthConverter />
        </div>

        <div className="flex flex-col items-center w-full">
          <Volume />
        </div>

        <div className="flex flex-col items-center w-full">
          <Weight />
        </div>
        
        {/* Add more components if needed */}
        <div className="flex flex-col items-center w-full">
          <Time />
        </div>

        <div className="flex flex-col items-center w-full">
          <Temp />
        </div>

        <div className="flex flex-col items-center w-full">
          <Area />
        </div>
      </div>
    </div>
  );
}

export default Unit;
