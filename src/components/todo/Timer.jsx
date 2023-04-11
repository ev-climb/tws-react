import React, { useState, useEffect } from 'react';

function Timer({ timePlay, time, setTime }) {
  useEffect(() => {
    let interval;
    if (timePlay) {
      interval = setInterval(() => {
        setTime((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timePlay, setTime]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1 className="task-timer">{formatTime(time)}</h1>
    </div>
  );
}

export default Timer;
