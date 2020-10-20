/**
 * countdown as a function
 */
 
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Countdown({ initialCount, destroyCb }) {
	const [counter, setCounter] = useState(initialCount);
	
	// this hook is used to connect our function component with the following lifecycle events
	// componentDidMount + componentDidUpdate + componentWillUnmount
	// componentDidMount
	useEffect(() => {
		const intervalId = setInterval(() => {
			// this updates the state
			// counter remains 3
			setCounter((theRightCounter) => {
				return 	theRightCounter - 1;
			});
		}, 1000);
		
		// cleanup function
		// 
		return () => {
			clearInterval(intervalId);
		}
	}, []);
	
	// destroy the component
	useEffect(() => {
		if (counter === 0) {
			destroyCb(false);
		}
		
		return () => {
			
		}
	}, [counter])
	// you place state / props
	// when the state/props are changed activate the function
	
	
	
	return (
		<h1>
		{ counter }
		</h1>
	)
}

Countdown.propTypes = {
	initialCount: PropTypes.number,
	destroyCb: PropTypes.func.isRequired
}

Countdown.defaultProps = {
	initialCount: 5
}