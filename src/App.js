import React, {useState} from 'react';

import './App.css';

function App() {
  let [count, setCount] = useState(0)
  let marginRight = {marginRight: '10px'}

  const handleIncrementEvent = () => {
   setCount(count + 1)
  }

  const handleResetEvent = () => {
    setCount(0)
  }

  return (
    <div class="container">
      <div class="card mt-5 w-25">
        <h5 class="card-header">Click Counter</h5>
        <div class="card-body">
          <p class="card-text">Count: {count}</p>
          <button class="btn btn-primary" onClick={handleIncrementEvent} style={marginRight}>Click Me!</button>
          <button class="btn btn-success text-white" onClick={handleResetEvent}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
