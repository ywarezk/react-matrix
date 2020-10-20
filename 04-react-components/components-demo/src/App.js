import React, { useState } from 'react';
import './App.css';
// import Countdown from './components/Countdown/CountdownClass';
import Countdown from './components/Countdown/Countdown';
// import HelloWorld from './components/HelloWorld/HelloWorld'
import ToggleVisibility from './components/ToggleVisibility/ToggleVisibility';

function App() {
	const extraProps = {foo: 'bar', piletshvily: 'chaitovsky', sweetness: 'fluffy belly'}
	
	const [isCountdown, setIsCountdown] = useState(true);
	
	return (
		<div className="App">
			<h1>
			React components Demo
			</h1>
			
			{/* <HelloWorld
				{...extraProps}
				isVisible2 				
				isVisible={true}
				msg="this is valid cause the value is string"  
				message={'hello from parent'} 
				todoList={[1,2,3,4]} />
			
			<HelloWorld /> */}
			
			{/* <ToggleVisibility /> */}
			
			{
				isCountdown && <Countdown initialCount={3} destroyCb={setIsCountdown} />
			}
			
			
			{/* <Countdown />
			
			<Countdown /> */}
			
		</div>
	);
}

export default App;
