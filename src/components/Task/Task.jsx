import React from 'react';

function Task() {
  const [hoverTask, setHoverTask] = React.useState(false);
  console.log(hoverTask);
  return (
    <div
      className="todo-task"
      onMouseOver={() => setHoverTask(true)}
      onMouseOut={() => setHoverTask(false)}
    >
      {hoverTask && <button className="remove-task" />}
      <p className="todo-text">Пройти урок по реакту</p>
      <div className="todo-buttons">
        <button className="time-play" />
        <button className="time-stop" />
        <button className="task-done" />
      </div>
    </div>
  );
}
export default Task;
