import React from 'react';

function Task({ text }) {
  const [showButtons, setShowButtons] = React.useState(false);

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

  return (
    <div className="todo-task" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {showButtons && (
        <div className="todo-buttons">
          <button className="time-play" />
          <button className="time-stop" />
          <button className="task-done" />
        </div>
      )}
      <p className="todo-text">{text}</p>
      {showButtons && <button className="remove-task" />}
    </div>
  );
}

export default Task;
