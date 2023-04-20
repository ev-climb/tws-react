import React from 'react';
import Todo from './components/todo/Todo';

function App() {
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
          <Todo />
          <img className="space-cow" alt="spaceCow" src="/img/spacecow.png" />
          <div className="music-box">
            <iframe
              frameborder="0"
              src="https://music.yandex.ru/iframe/#playlist/music-blog/2479"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
