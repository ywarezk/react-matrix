import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as yup from 'yup';

// function 

function IdField() {
	
}

function PhoneField({name}) {
	const [fieldProps, meta, helpers] = useField(name)
	
	return (
		<div>
			<Field type="text" />
			<Field type="text" />
		</div>
	)
}


const myNameSchema = yup.object().shape({
	myName: yup.string().required('This field is required').min(2, 'more letters please')
})

export default function MyNameFormik2() {
	// const formikContext = useFormikContext();
	// console.log(formikContext);
	
	const handleSubmit = (values) => {
		console.log(values);
	}
	
	return (
		<Formik
			initialValues={ { myName: 'yariv katz' } }
			onSubmit={handleSubmit}			
			validationSchema={myNameSchema}			
		>
			{
				( {errors} ) => {
					return (
						<Form>
							<h1>
								Formik can auto connect your form
							</h1>
							<Field 
								className={errors.myName && 'error'}			
								type="text" 
								placeholder="Enter your name..." 
								name="myName"
							/>
							{/* <PhoneField name="phone" /> */}
							
							<button type="submit">Submit</button>
							<ErrorMessage name="myName" />
						</Form>
					)
				}
			}
			
		</Formik>
	)
	
}

/*
function MyNameFormik() {
	// binding
	// validation
	// display errors
	
	const handleSubmit = (values) => {
		console.log(values);
	}
	
	return (
		
		<Formik
			initialValues={ { myName: 'yariv katz' } }
			onSubmit={handleSubmit}
		>
			{														{myName: 'this field...'}
				( {values, handleChange, handleBlur, handleSubmit, errors} ) => {
					return (
						<form onSubmit={handleSubmit}>
							<input 
								value={values.myName}
								onBlur={handleBlur} 
								onChange={handleChange} 
								type="text" 
								placeholder="Enter your name..." 
								name="myName" />
							<button type="submit">Submit</button>
						</form>				
					)
				}
			}
		</Formik>
		
		
	)
}
*/