import { useState, useEffect } from 'react';

function Quote({ pushQuote }) {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    fetch('https://641b136a9b82ded29d49895c.mockapi.io/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    randomIndex && setRandomQuote(quotes[randomIndex]);
  }, [quotes, pushQuote]);

  return (
    <>
      {randomQuote ? (
        <p className="header__quote-text">{randomQuote.quote}</p>
      ) : (
        <p className="header__quote-text">
          Счастье не в том, чтобы делать всегда, что хочешь, а в том, чтобы всегда хотеть того, что
          делаешь.
        </p>
      )}
      {randomQuote ? (
        <p className="header__quote-autor">{randomQuote.author}</p>
      ) : (
        <p className="header__quote-autor">Зенон Китийский</p>
      )}
    </>
  );
}

export default Quote;
