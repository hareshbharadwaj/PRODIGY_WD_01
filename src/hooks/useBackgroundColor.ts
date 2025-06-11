import { useState, useEffect } from 'react';

export const useBackgroundColor = (intervalTime = 4000) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [
    'bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500',
    'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
    'bg-gradient-to-br from-green-400 via-blue-500 to-purple-600',
    'bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500',
    'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    'bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600'
  ];

  const changeBackground = () => {
    setBackgroundIndex(Math.floor(Math.random() * backgrounds.length));
  };

  useEffect(() => {
    const intervalID = setInterval(changeBackground, intervalTime);
    return () => clearInterval(intervalID);
  }, [intervalTime]);

  return backgrounds[backgroundIndex];
};