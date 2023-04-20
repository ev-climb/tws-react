import { useState, useEffect } from 'react';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');
  console.log(quotes);
  useEffect(() => {
    fetch('https://641b136a9b82ded29d49895c.mockapi.io/quotes')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    randomIndex && setRandomQuote(quotes[randomIndex].quote);
  }, [quotes]);

  return <>{randomQuote && <p className="header__quote-text">{randomQuote}</p>}</>;
}

export default Quote;
