import React from 'react';
import TodoForm from "./components/TodoForm"
import connect from "react-redux"

import Counter from './components/Counter';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Counter/><br/><br/>
<TodoForm/>
Todos:
    </div>
  );
}

// export default App;
export default App;
