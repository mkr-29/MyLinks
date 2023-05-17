import React, { useEffect, useState } from 'react';
import './homepage.css';

const MAX_DOTS = 200;

const FloatingDots = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDot = () => {
      if (dots.length < MAX_DOTS) {
        const dot = {
          id: Math.random(),
          size: Math.floor(Math.random() * 5) + 1,
          top: Math.random() * 100,
          left: Math.random() * 100,
          speed: Math.random() * 2 + 1,
        };
        setDots((prevDots) => [...prevDots, dot]);
      }
    };

    const intervalId = setInterval(generateDot, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [dots]);

  return (
    <div className="floating-dots-container">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="dot"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: `${dot.top}vh`,
            left: `${dot.left}vw`,
            animationDuration: `${10 / dot.speed}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingDots;
