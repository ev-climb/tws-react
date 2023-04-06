import React from 'react';
import Task from './components/Task/Task';

function App() {
  const [inputText, setInputText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);
  const [complited, setComplited] = React.useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleInputEnter = (event) => {
    if (event.key === 'Enter' && inputText) {
      setTasks([...tasks, { text: inputText }]);
      setInputText('');
    }
  };
  const handleTaskDone = (text) => {
    const taskIndex = tasks.findIndex((task) => task.text === text);
    const completedTask = tasks[taskIndex];
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task.text !== text));
    setComplited(true);
  };
  console.log(completedTasks);
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="header__container">
            <img className="header__logo" src="/img/logo-tws.svg" alt="logo" />
            <div className="header__quote">
              <div className="header__text-fone">
                <p className="header__quote-text">
                  «Счастье не в великом количестве вещей, а в мере наших потребностей»
                </p>
                <p className="header__quote-autor">Зенон Китийский</p>
              </div>
              <img className="header__marcus" src="/img/marcus.png" alt="marcus" />
            </div>
          </div>
        </header>
        <div className="main">
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
                  complited={false}
                />
              ))}
            </div>
            <div className="tasks-done">
              {completedTasks.map((task, index) => (
                <Task key={index} text={task.text} complited={true} />
              ))}
            </div>
          </div>
          <img className="space-cow" alt="spaceCow" />
          <div className="music-box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
