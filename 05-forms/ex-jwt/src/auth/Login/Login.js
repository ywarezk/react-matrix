import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types'

const loginSchema = yup.object().shape({
	email: yup.string().required('dfasdf').email().min(8, 'fffff'),
	password: yup.string().required().min(5)
})

export function Login( {cb} ) {
	const handleSubmit = async (values) => {
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const tokenObj = await response.json();
		cb(tokenObj.token);
	}
	
	return (
		<Formik
			initialValues={ { email: '', password: '' } }	
			onSubmit={handleSubmit}
			validationSchema={loginSchema}
		>
			<Form noValidate>
				<h1>
					Login
				</h1>
				<div className="form-group">
					<Field className="form-control" type="email" name="email" placeholder="Enter your email" />
					<ErrorMessage component="div" className="alert alert-danger" name="email" />
				</div>
				<div className="form-group">
					<Field className="form-control" type="password" name="password" placeholder="*****" />
					<ErrorMessage component="div" className="alert alert-danger" name="password" />
				</div>
				<div className="form-group">
					<button className="btn btn-primary" type="submit">
						Login
					</button>
				</div>
				
			</Form>
		</Formik>
	)
}

Login.propTypes = {
	cb: PropTypes.func.isRequired
}