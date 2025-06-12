import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import Timer from './Timer';

function App() {
  return (
    <div className='container'>
      <TodoList />
      <Timer />
    </div>
  );
}

export default App;
