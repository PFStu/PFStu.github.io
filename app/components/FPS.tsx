import React, { useEffect, useRef, useState } from 'react';

const FPSCounter: React.FC = () => {
  const [fps, setFps] = useState(0);
  const lastFrameTimeRef = useRef<number>(performance.now()); // 明确指定初始值和类型
  const frameCountRef = useRef<number>(0); // 添加初始值0
  const animationFrameRef = useRef<number | null>(null); // 明确可以为null

  useEffect(() => {
    const updateFps = (currentTime: number) => {
      frameCountRef.current++;

      const deltaTime = currentTime - lastFrameTimeRef.current;

      if (deltaTime >= 1000) {
        setFps(frameCountRef.current);
        frameCountRef.current = 0;
        lastFrameTimeRef.current = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(updateFps);
    };

    animationFrameRef.current = requestAnimationFrame(updateFps);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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