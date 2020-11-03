/**
 * Login => StrongLoginForm - contains the useState and handleChange
 
 const StrongLoginForm = forms(Login)
 
 */

import React, { useState } from "react"

export default function forms(initialState) {	
	return function(WeakForm) {		
		return function StrongForm(props) {
			const [formValues, setFormValues] = useState(initialState);
			
			const handleChange = (event) => {
				setFormValues({
					...formValues,
					[event.target.name] : event.target.value
				})
			}
			
			return (
				<WeakForm 
					{...props}
					handleChange={handleChange}
					formValues={formValues} />
			)
		}		
	}	
}
 
// export default function forms(WeakForm) {
	
// 	return function StrongForm() {
// 		const [formValues, setFormValues] = useState({
// 			email: 'yariv@nerdeez.com',
// 			password: ''
// 		})
		
// 		return (
// 			<WeakForm />
// 		)
// 	}
	
// }