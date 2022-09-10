import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [bookData, setBookData] = React.useState({});
  let random = Math.floor(Math.random() * 68835)
  const [count, setCount] = React.useState(random);
  React.useEffect(() => {
    fetch(`https://gutendex.com/books/${count}`)
      .then(resp => resp.json())
      .then(data => setBookData(data))
  }, [count])
  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(bookData)}</p>
        <h2>Get A Random Book <br/>{count}</h2>
        <button
          onClick={() => setCount(random)}
        >
          Random
        </button>
      </header>
    </div>
  );
}

export default App;
