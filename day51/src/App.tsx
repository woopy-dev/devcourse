import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import Timer from './Timer';
import MyWeather from './MyWeather';

function App() {
  return (
    <div className='container'>
      <TodoList />
      {/* <Timer /> */}
      <MyWeather children='일기예보' weather='맑음' />
    </div>
  );
}

export default App;
