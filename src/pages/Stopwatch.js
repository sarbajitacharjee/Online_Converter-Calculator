import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const formatTime = (time) => {
    const getMilliseconds = `0${time % 100}`.slice(-2);
    const seconds = Math.floor(time / 100);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(seconds / 60) % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  const startStopwatch = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 10);
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTime(0);
    setLaps([]);
  };

  const lapStopwatch = () => {
    setLaps([...laps, time]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Stopwatch</h1>
        <div className="text-4xl sm:text-6xl font-mono text-center mb-8">
          {formatTime(time)}
        </div>
        <div className="flex justify-center space-x-2 sm:space-x-4">
          {!isActive ? (
            <button
              onClick={startStopwatch}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 sm:px-4 rounded-lg transition duration-300"
            >
              Start
            </button>
          ) : (
            <button
              onClick={stopStopwatch}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 sm:px-4 rounded-lg transition duration-300"
            >
              Stop
            </button>
          )}
          <button
            onClick={lapStopwatch}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-3 sm:px-4 rounded-lg transition duration-300"
            disabled={!isActive}
          >
            Lap
          </button>
          <button
            onClick={resetStopwatch}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 sm:px-4 rounded-lg transition duration-300"
          >
            Reset
          </button>
        </div>
        {laps.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Laps</h2>
            <ul className="list-decimal pl-6 text-lg sm:text-xl">
              {laps.map((lap, index) => (
                <li key={index} className="mb-1">
                  {index + 1}. {formatTime(lap)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
