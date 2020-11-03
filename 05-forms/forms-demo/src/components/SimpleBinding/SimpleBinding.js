/**
 * simple form
 * Single text input
 * Binding
 */

import React, { useDebugValue, useState } from 'react';

/**
 
 Controlled form
 Uncontrolled form
 
 */

const SimpleBinding =  () => {
	// const [name, setName] = useState('');
	// const [disabled, setDisabled] = useState(false);
	
	const [inputProps, setInputProps] = useState({
		value: '',
		disabled: false,
	})
	
	const handleNameChange = (event) => {
		// setName(event.target.value)
		setInputProps({
			...inputProps,
			value: event.target.value
		})
	}
	
	const handleSubmit = (event) => {
		console.log(inputProps);
		event.preventDefault();
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input 
				onChange={handleNameChange}
				{...inputProps}	
				name="yourFullName"
				type="text" 
				placeholder="Enter your name" 
			/>
			
			<button type="submit">
				Submit
			</button>
		</form>
	)
}

export default SimpleBinding;