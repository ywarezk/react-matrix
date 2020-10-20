import React from 'react';
import './App.css';
import { TodoList } from '../../todo';
import { CatchError } from '../CatchErrors/CatchErrors';

export function App() {
  return (
    <div className="App">
		<CatchError>
			<TodoList />
		</CatchError>      
    </div>
  );
}

