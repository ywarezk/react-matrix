import React, { useState } from 'react';
import forms from '../../hoc/forms.hoc';
// useState, handleChange
import useForms from '../../hooks/forms.hook';

export default function Login( ) {
	
	const [formValues, handleChange] = useForms({
		email: '',
		password: ''
	})
	
	/*
	const [formValues, setFormValues] = useState({
		email: '',
		password: ''
	})
	
	const handleChange = (event) => {
		setFormValues({
			...formValues,
			[event.target.name] : event.target.value
		})
	}
	*/
		
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`Email: ${formValues.email} Password: ${formValues.password}`);
	}
	
	return (
		<form onSubmit={handleSubmit} noValidate>
			<input 
				value={formValues.email}
				onChange={handleChange}
				name="email"								
				type="email"
				placeholder="enter your mail" />
			<input 
				value={formValues.password}
				onChange={handleChange}
				type="password"
				name="password"
				placeholder="enter your password"
			/>
			<button type="submit">
				Login
			</button>
		</form>
	)
	
	
}


