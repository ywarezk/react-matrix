import React, { useState } from 'react';
import forms from '../../hoc/forms.hoc';
// useState, handleChange
import StrongForm from '../../render-props/StrongForm';

export default function Login(  ) {
		
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`Email: ${formValues.email} Password: ${formValues.password}`);
	}
	
	return (
		<StrongForm initialState={ {email: 'yariv@nerdeez.com', password: ''} }>
			{
				(formValues, handleChange) => {
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
			}
		</StrongForm>
	)
	
	
}


