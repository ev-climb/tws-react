import React from 'react';
import Timer from './Timer';

function Task({ text, handleTaskDone, complited, removeTask }) {
  const [showButtons, setShowButtons] = React.useState(false);
  const [timePlay, setTimePlay] = React.useState(false);

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
    <div
      className={`todo-task ${complited ? 'todo-task_completed' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div>
        {showButtons && (
          <div className="todo-buttons">
            <div>
              {!timePlay && <button className="time-play" onClick={handleTimePlay} />}
              {timePlay && <button className="time-stop" onClick={handleTimeStop} />}
              <button className="task-done" onClick={() => handleTaskDone(text)} />
            </div>
            {timePlay && <Timer timePlay={timePlay} />}
          </div>
        )}
      </div>
      <p className="todo-text">{text}</p>
      {showButtons && <button className="remove-task" onClick={() => removeTask(text)} />}
    </div>
  );
}

export default Task;
