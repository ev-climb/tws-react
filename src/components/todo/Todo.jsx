import React from 'react';
import Task from './Task';

function Todo() {
  const [inputText, setInputText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);
  const [mainTime, setMainTime] = React.useState(0);

  const formatMainTime = (mainTime) => {
    const hours = Math.floor(mainTime / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((mainTime % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (mainTime % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  React.useEffect(() => {
    const savedTasks = localStorage.getItem('myTasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleInputEnter = (event) => {
    if (event.key === 'Enter' && inputText) {
      setTasks([...tasks, { text: inputText, time: 0 }]);
      setInputText('');
    }
  };
  const handleTaskDone = (text, time, setTime) => {
    setCompletedTasks([...completedTasks, { text: text, time: time }]);
    setTasks(tasks.filter((task) => task.text !== text));
    setTime(0);
  };
  const removeTask = (text) => {
    setTasks(tasks.filter((task) => task.text !== text));
    setCompletedTasks(completedTasks.filter((task) => task.text !== text));
  };

  return (
    <div className="todo-container">
      <div className="timer">
        <p className="timer-time">{formatMainTime(mainTime)}</p>
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
            setMainTime={setMainTime}
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
