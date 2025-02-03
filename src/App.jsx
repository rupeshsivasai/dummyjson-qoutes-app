import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);
  let list = '📃'
  let stars = '✨⭐🌟'
 
  return (
    <div className='App'>
    <h1>{list} Quotes List {stars}</h1>

    {loading ? (
      <p>Loading...</p>
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
  )
}

export default App