import './App.css';
import { Login } from '../auth';
import { TodoList } from '../todo';
import { useState } from 'react';

export function App() {
	const [token, setToken] = useState(null)	
	
	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<Login cb={setToken} />
					</div>
					<div className="col-6">
						<TodoList token={token} />
					</div>
				</div>
			</div>
		</div>
	);
}
