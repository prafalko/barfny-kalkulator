import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCount = localStorage.getItem('counter-value');
      setCount(savedCount ? parseInt(savedCount, 10) : 0);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever count changes (but only after initial load)
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem('counter-value', count.toString());
    }
  }, [count, isLoaded]);

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded shadow w-64 mx-auto">
      <h2 className="text-2xl font-bold">Counter</h2>
      <span className="text-4xl font-mono min-h-[3rem] flex items-center">
        {isLoaded ? count : ''}
      </span>
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
