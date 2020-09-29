import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from '../todo/TodoList/TodoList';

function App() {
  return (
    <div className="App">
		<img src={ logo } alt="logo of the app" />
	
		<h1>hello world!!!!!</h1>
	  
		<TodoList />
    </div>
  );
}

export default App;
