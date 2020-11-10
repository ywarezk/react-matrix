import './App.css';
import { Login, JwtContext, StamContext, AviContext } from '../auth';
import { TodoList } from '../todo';
import { useState } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

function setFirstName(name) {
	return {
		type: 'SET_FIRST_NAME',
		payload: name
	}
}

store.dispatch(setFirstName('Sweetness'))

export function App() {
	const [token, setToken] = useState(null)	
	
	return (
		<Provider store={store}>
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
		</Provider>
		
	);
}
