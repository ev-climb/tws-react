import React from 'react';

function Task({ text, handleTaskDone, complited, removeTask, taskTime }) {
  const [showButtons, setShowButtons] = React.useState(false);
  const [timePlay, setTimePlay] = React.useState(false);
  const [time, setTime] = React.useState(0);
  console.log(taskTime);
  React.useEffect(() => {
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

  function handleMouseOver() {
    setTimeout(() => {
      setShowButtons(true);
    }, 200);
  }

  function handleMouseOut() {
    setTimeout(() => {
      setShowButtons(false);
    }, 200);
  }

  function handleTimePlay() {
    setTimePlay(true);
  }
  function handleTimeStop() {
    setTimePlay(false);
  }

  return (
    <div className="task-container">
      <div
        className={`todo-task ${complited ? 'todo-task_completed' : ''}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div>
          {showButtons && (
            <div className="todo-buttons">
              {!timePlay && <button className="time-play" onClick={handleTimePlay} />}
              {timePlay && <button className="time-stop" onClick={handleTimeStop} />}
              <button className="task-done" onClick={() => handleTaskDone(text, time, setTime)} />
            </div>
          )}
        </div>
        <p className="todo-text">{text}</p>
        {showButtons && <button className="remove-task" onClick={() => removeTask(text)} />}
      </div>
      <h1 className="task-timer">{complited ? formatTime(taskTime) : formatTime(time)}</h1>
    </div>
  );
}

export default Task;
