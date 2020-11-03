import React, { useState } from 'react';
import forms from '../../hoc/forms.hoc';
// useState, handleChange
import StrongForm from '../../render-props/StrongForm';

export default function Login(  ) {
		
	const handleSubmit = (values, event) => {
		event.preventDefault();
		console.log(values)
	}
	
	return (
		<StrongForm initialState={ {email: 'yariv@nerdeez.com', password: ''} }>
			{
				(formValues, handleChange) => {
					return (
						<form onSubmit={(event) => handleSubmit(formValues, event)} noValidate>
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


