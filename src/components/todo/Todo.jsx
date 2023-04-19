import React from 'react';
import Task from './Task';

function Todo() {
  const [inputText, setInputText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);
  const [mainTime, setMainTime] = React.useState(0);
  const [showButtonsTimer, setShowButtonsTimer] = React.useState(false);

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
    const savedCompletedTasks = localStorage.getItem('myCompletedTasks');
    if (savedCompletedTasks) {
      setCompletedTasks(JSON.parse(savedCompletedTasks));
      console.log(completedTasks);
    }
    const savedMainTime = localStorage.getItem('myMainTime');
    if (savedMainTime) {
      setMainTime(JSON.parse(savedMainTime));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);
  React.useEffect(() => {
    localStorage.setItem('myCompletedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);
  React.useEffect(() => {
    localStorage.setItem('myMainTime', JSON.stringify(mainTime));
  }, [mainTime]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleInputEnter = (event) => {
    if (event.key === 'Enter' && inputText) {
      setTasks([...tasks, { text: inputText, date: Date.now() }]);
      setInputText('');
    }
  };
  const handleTaskDone = (text, time, date) => {
    setCompletedTasks([...completedTasks, { text: text, time: time, date: date }]);
    setTasks(tasks.filter((task) => task.date !== date));
  };

  const handleTimeUpdate = (date, newTime) => {
    const updatedTasks = tasks.map((task) => {
      if (task.date === date) {
        return { ...task, time: newTime };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (date) => {
    setTasks(tasks.filter((task) => task.date !== date));
    setCompletedTasks(completedTasks.filter((task) => task.date !== date));
  };

  function handleMouseOverTimer() {
    setTimeout(() => {
      setShowButtonsTimer(true);
    }, 200);
  }
  function handleMouseOutTimer() {
    setTimeout(() => {
      setShowButtonsTimer(false);
    }, 200);
  }

  return (
    <div className="todo-container">
      <div className="timer" onMouseOver={handleMouseOverTimer} onMouseOut={handleMouseOutTimer}>
        {
          <>
            <div
              className="timer__remove-all"
              onClick={() => {
                setTasks([]);
                setCompletedTasks([]);
                setMainTime(0);
              }}
            >
              <p>Очистить всё</p>
            </div>
            <div
              className="timer__remove-timer"
              onClick={() => {
                setMainTime(0);
              }}
            >
              <p>Очистить таймер</p>
            </div>
          </>
        }
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
        {tasks &&
          tasks.map((task) => (
            <Task
              key={task.date}
              date={task.date}
              text={task.text}
              handleTaskDone={handleTaskDone}
              removeTask={removeTask}
              complited={false}
              setMainTime={setMainTime}
              handleTimeUpdate={handleTimeUpdate}
              taskTime={Number(task.time)}
            />
          ))}
      </div>
      <div className="tasks-done">
        {completedTasks &&
          completedTasks.map((task) => (
            <Task
              key={task.date}
              date={task.date}
              text={task.text}
              complited={true}
              removeTask={removeTask}
              taskTime={Number(task.time)}
              handleTimeUpdate={handleTimeUpdate}
            />
          ))}
      </div>
    </div>
  );
}

export default Todo;
