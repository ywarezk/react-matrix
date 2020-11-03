import React from 'react';
import { useForm } from 'react-hook-form';

export default function MyNameHookForm() {
	// custom hooks
	const { handleSubmit, register, errors } = useForm({
		
	});
	console.log(errors.myName);
	
	const printName = (values) => {
		console.log(values);
	}
	
	return (
		<form onSubmit={handleSubmit(printName)}>
			<h1>
				My name hook form
			</h1>
			<input
				ref={register({required: true, minLength: 2})}
				type="text" 
				placeholder="Enter your name..." 
				name="myName" />
			<p>
				{errors.myName.type === 'required' && 'this field is required'}
			</p>
			<button type="submit">Submit</button>
		</form>	
	)
}