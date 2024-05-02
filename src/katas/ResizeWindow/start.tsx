import React, { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // TODO: Add event listener for 'resize' event and call handleResize
    // TODO: Return a cleanup function to remove the event listener
  }, []);

  return windowSize;
};

export default (): React.JSX.Element => {
  const { width, height } = useWindowSize();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-4 rounded-lg">
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
      </div>
    </div>
  );
};