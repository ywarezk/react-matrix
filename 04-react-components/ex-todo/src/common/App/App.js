import React, { useState } from 'react';
import './App.css';
import { TodoList } from '../../todo';
import { CatchError } from '../CatchErrors/CatchErrors';

export function App() {
	// const [someState, setSomeState] = useState(true);
	
	// do not set the state in the function body
	// the render function should be pure
	// for a certain state, and a certain props, the same thing is returned
	// setSomeState(false)
	
	return (
		<div className="App">
			<CatchError>
				<TodoList />
			</CatchError>      
		</div>
	);
}

