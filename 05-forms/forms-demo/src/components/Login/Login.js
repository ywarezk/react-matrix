import React, { useState } from 'react';
import forms from '../../hoc/forms.hoc';

function Login( {formValues, handleChange} ) {
	
	// const [emailValue, setEmailValue] = useState('')
	// const [passwordValue, setPasswordValue] = useState('');
	
	// const [formValues, setFormValues] = useState({
	// 	email: 'yariv@nerdeez.com',
	// 	password: ''
	// })
	
	// const handleEmailChange = (event) => {
	// 	setEmailValue(event.target.value);
	// }
	
	// const handlePasswordChange = (event) => {
	// 	setPasswordValue(event.target.value);
	// }
	
	// const handleChange = (event, fieldName) => {
	// 	setFormValues({
	// 		...formValues,
	// 		[fieldName] : event.target.value
	// 	})
	// }
	
	// const handleChange = (event) => {
	// 	setFormValues({
	// 		...formValues,
	// 		[event.target.name] : event.target.value
	// 	})
	// }
	
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

const StrongerLogin = forms({
	email: 'yariv@nerdeez.com',
	password: ''
})(Login);

export default StrongerLogin;
