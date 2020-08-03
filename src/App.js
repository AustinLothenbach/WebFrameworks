import React, { useState } from 'react';
import './App.css';

function App() {

    const todos = ['Learn About React', 'Build React App', 'Submit Assignment', 'Order Pizza'];

  return (
    <div className="App">
    <header>
    <h1>Note Keeping App</h1>
    </header>
  <body>
    <div class="container">
    <br /> 
    <div id="textForm">
      <form>
      <input type="text" name="newNote" placeholder="Enter a new note here..." />
    </form>
    </div>
  </div>
    <div class="flex-container">
      <div>Note 1<p>{todos[0]}</p><button>Completed</button></div>
      <div>Note 2<p>{todos[1]}</p><button>Completed</button></div>
      <div>Note 3<p>{todos[2]}</p><button>Completed</button></div>
      <div>Note 4<p>{todos[3]}</p><button>Completed</button></div>
    </div>
  </body>
  <footer>Copyright 2020 Austin Lothenbach</footer>
  </div>
  );
}

export default App;
