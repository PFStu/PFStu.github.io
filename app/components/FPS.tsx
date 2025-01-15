import React, { useEffect, useRef, useState } from 'react';

const FPSCounter: React.FC = () => {
  const [fps, setFps] = useState(0);
  const lastFrameTimeRef = useRef(performance.now());
  let frameCount = 0;

  useEffect(() => {
    const updateFps = (currentTime: number) => {
      frameCount++;

      const deltaTime = currentTime - lastFrameTimeRef.current;

      if (deltaTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastFrameTimeRef.current = currentTime;
      }

      requestAnimationFrame(updateFps);
    };

    requestAnimationFrame(updateFps);

    return () => {
      setFps(0);
    };
  }, []);

  return (
    <div className="fixed top-4 left-4 bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg z-50">
      <h2 className="text-2xl font-bold text-white">FPS: {fps}</h2>
    </div>
  );
};

export default FPSCounter;
