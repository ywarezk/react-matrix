import React, { useState } from 'react';

export default function StrongForm( {children, initialState} ) {
	const [formValues, setFormValues] = useState(initialState);
	
	const handleChange = (event) => {
		setFormValues({
			...formValues,
			[event.target.name] : event.target.value
		})
	}
	
	return children(formValues, handleChange);
}

/**

<StrongForm render={ () => {
	return (
		<form>
			...
		</form>
	)
}}  />

<StrongForm>
{
	() => {
		return (
			<form>
			...
			</form>
		)
	}	
}
</StrongForm>

 */