import React from 'react';
import Task from './components/Task/Task';

function App() {
  const [inputText, setInputText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleInputEnter = (event) => {
    if (event.key === 'Enter' && inputText) {
      setTasks([...tasks, { text: inputText }]);
      setInputText('');
    }
  };

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
                <Task key={index} text={task.text} />
              ))}
            </div>
            <div className="tasks-done">
              <div className="todo-task todo-task_done">
                <button className="remove-task" />
                <p className="todo-text">
                  Написать список задачь на всю оставшуюся жизнь и провереть переполняемость блока
                </p>
                <div className="todo-buttons">
                  <button className="time-play" />
                  <button className="time-stop" />
                  <button className="task-done" />
                </div>
              </div>
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
