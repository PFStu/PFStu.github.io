import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  if (!time) {
    return null;
  }

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const getHandStyles = (type: 'hour' | 'minute' | 'second') => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourAngle = (hours % 12) * 30 + minutes / 2;
    const minuteAngle = minutes * 6 + seconds / 10;
    const secondAngle = seconds * 6;

    let angle = 0;
    switch (type) {
      case 'hour':
        angle = hourAngle;
        return { transform: `rotate(${angle}deg)`, width: '5px', height: '25%', backgroundColor: '#00ff00' };
      case 'minute':
        angle = minuteAngle;
        return { transform: `rotate(${angle}deg)`, width: '3px', height: '35%', backgroundColor: '#aa22ff' };
      case 'second':
        angle = secondAngle;
        return { transform: `rotate(${angle}deg)`, width: '2px', height: '40%', backgroundColor: '#ff0000' };
    }
  };

  return (
    <div className="fixed bottom-0 right-0 m-4 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full p-4 z-50">
      <div className="relative border-2 border-green-400 rounded-full w-32 h-32 bg-black">
        <div className="absolute transform origin-bottom" style={{ ...getHandStyles('hour'), bottom: '50%', left: '50%', transformOrigin: 'bottom' }}></div>
        <div className="absolute transform origin-bottom" style={{ ...getHandStyles('minute'), bottom: '50%', left: '50%', transformOrigin: 'bottom' }}></div>
        <div className="absolute transform origin-bottom" style={{ ...getHandStyles('second'), bottom: '50%', left: '50%', transformOrigin: 'bottom' }}></div>
        <h2 className="text-3xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {formatTime(time)}
        </h2>
      </div>
    </div>
  );
};

export default Clock;
