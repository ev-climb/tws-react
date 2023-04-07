import React, { useState, useRef, useEffect } from 'react';

function Timer({ timePlay }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
  };
  React.useEffect(() => {
    timePlay ? startTimer() : stopTimer();
  }, [timePlay]);

  return (
    <div>
      <h1 className="task-timer">{new Date(seconds * 1000).toISOString().substr(11, 8)}</h1>
    </div>
  );
}

export default Timer;
