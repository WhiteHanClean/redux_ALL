import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const userKera = useSelector((state)=> state) 

  return (
    <div className="App">
      <div>
        <h1>
          {userKera.user}
        </h1>
        <h2>
          {userKera.cash}
        </h2>

        <button>Add cash</button>
        <button>Remove cash</button>

      </div>
    </div>
  );
}

export default App;
