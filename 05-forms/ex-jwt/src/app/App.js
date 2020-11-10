import './App.css';
import { Login, JwtContext, StamContext, AviContext } from '../auth';
import { TodoList } from '../todo';
import { useState } from 'react';


export function App() {
	const [token, setToken] = useState(null)	
	
	return (
		<div className="App">
			<div className="container">
				<StamContext.Provider value="stam">
					<JwtContext.Provider value={ {jwt: token, setJwt: setToken} }>				
						<div className="row">
							<div className="col-6">
								<Login />
							</div>
							<div className="col-6">
								<TodoList />
							</div>
						</div>
					</JwtContext.Provider>				
				</StamContext.Provider>
				
			</div>
		</div>
	);
}
