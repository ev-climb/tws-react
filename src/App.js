import React from 'react';
import Todo from './components/todo/Todo';

import Quote from './components/Quote';
import Calendar from './components/Calendar';

function App() {
  const [pushQuote, setPushQuote] = React.useState(false);
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="header__container">
            <img className="header__logo" src="img/logo-tws.svg" alt="logo" />
            <div className="header__quote">
              <div
                className="header__text-fone"
                onClick={() => {
                  setPushQuote(!pushQuote);
                }}
              >
                <Quote pushQuote={pushQuote} />
              </div>
              <img className="header__marcus" src="img/marcus.png" alt="marcus" />
            </div>
          </div>
        </header>
        <div className="main">
          <img className="space-cow" alt="spaceCow" src="img/spacecow.png" />
          <Calendar />
          <Todo />
          <div className="music-box">
            <iframe
              frameBorder="0"
              src="https://music.yandex.ru/iframe/#playlist/music-blog/2479"
            ></iframe>
          </div>
        </div>
        <div className="footer">
          <a className="copyright" href="https://github.com/ev-climb">
            Ⓒ Evseev
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
