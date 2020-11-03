import {useState} from 'react';

export default function useForms(initialState) {
	const [formValues, setFormValues] = useState(initialState)
	
	const handleChange = (event) => {
		setFormValues({
			...formValues,
			[event.target.name] : event.target.value
		})
	}
	
	return [formValues, handleChange];
}