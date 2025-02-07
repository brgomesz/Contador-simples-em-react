import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const increment10 = () => {
    setCount(count + 10);
  }
  
  const decrement = () => {
    setCount(count - 1);
  };

  const decrement10 = () => {
    setCount(count - 10)
  }

  const resset = () => {
    setCount(0)
  }

  // Aqui abaixo vai o que seria o HTML
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador</h1>
        <div className="counter">
          <button onClick={decrement10}> -10 </button>
          <button onClick={decrement}>-1</button>
          <span>{count}</span>
          <button onClick={increment}>+1</button>
          <button onClick={increment10}>+10</button>
        </div>
        <button onClick={resset}>Resset</button>
      </header>
    </div>
  );
}


export default App;

