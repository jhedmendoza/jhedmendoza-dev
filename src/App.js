import React, {useState} from 'react';

import './App.css';

function App() {

  return (
    <div class="featurette">
    <div class="featurette-inner text-center">
       <form role="form" class="search">
          <div class="input-group input-group-lg">
             <input type="search" placeholder="Type words in here" class="form-control" />
             <span class="input-group-btn">
             <button class="btn btn-success btn-search" type="button">Search</button>
             </span>
          </div>
       </form>
    </div>
 </div>

  );
}

export default App;
