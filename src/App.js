import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/1${count}`)
      .then(resp => resp.json())
      .then(data => setStarWarsData(data))
  },[count])
  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(starWarsData)}</p>
        <h2>The count is {count}</h2>
        <button
          onClick={() => setCount(prevVal => prevVal + 1)}
        >
          Add
        </button>
      </header>
    </div>
  );
}

export default App;
