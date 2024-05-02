import React, { useState, useMemo } from 'react';

interface Props {
  // Component props
}

const ComplexValueComponent = (props: Props): React.JSX.Element => {
  const [count, setCount] = useState(0);

  const complexValue = useMemo(() => {
    // Expensive computation based on count
    let result = 0;
    for (let i = 1; i <= count; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Preventing Re-renders with React.useMemo</h1>
      <p className="mb-2">Current Count: {count}</p>
      <p className="mb-4">Computed Complex Value: {complexValue}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment Count
      </button>
    </div>
  );
};

export default ComplexValueComponent;