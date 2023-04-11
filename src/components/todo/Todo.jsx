import React from 'react';
import Task from './Task';

function Todo() {
  const [inputText, setInputText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleInputEnter = (event) => {
    if (event.key === 'Enter' && inputText) {
      setTasks([...tasks, { text: inputText, time: 0 }]);
      setInputText('');
    }
  };
  const handleTaskDone = (text, time) => {
    setCompletedTasks([...completedTasks, { text: text, time: time }]);
    setTasks(tasks.filter((task) => task.text !== text));
    console.log(completedTasks);
  };
  const removeTask = (text) => {
    setTasks(tasks.filter((task) => task.text !== text));
    setCompletedTasks(completedTasks.filter((task) => task.text !== text));
  };

  return (
    <div className="todo-container">
      <div className="timer">
        <p className="timer-time">00:00:00</p>
      </div>
      <input
        className="todo-input"
        placeholder=" чем займемся?"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleInputEnter}
      />
      <div className="todo-tasks">
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            handleTaskDone={handleTaskDone}
            removeTask={removeTask}
            complited={false}
          />
        ))}
      </div>
      <div className="tasks-done">
        {completedTasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            complited={true}
            removeTask={removeTask}
            taskTime={Number(task.time)}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
