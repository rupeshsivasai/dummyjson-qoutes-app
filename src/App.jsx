import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('https://dummyjson.com/quotes/')
        .then(response => response.json())
        .then(data => {
          setQuotes(data.quotes);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error Fetching Data', error);
          setLoading(false);
        });
    }, 2000); // 10 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  let list = '📃';
  let stars = '✨⭐🌟';

  return (
    <div className='App'>
      <h1>{list} Quotes List {stars}</h1>

      {loading ? (
        <div>
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className='quotes-container'>
          {quotes.map(quote => (
            <div key={quote.id} className="quote-card">
              <p className="quote-text">"{quote.quote}"</p>
              <p className="quote-author">- {quote.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;