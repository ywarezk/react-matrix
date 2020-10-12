# Forms

In this lesson we will learn how to deal with forms using react

## Lesson Plan

- Creating a simple form
- Controlled form
- Uncontrolled form
- useRef
- createRef
- HOC
- Render props
- Custom hooks
- Formik

## EX.

In this EX. you will learn how JWT works in React application.
- Create a new application using `create-react-app`
- Create the following components (as functions)
  - `App`
  - `TodoList`
  - `Login`
- The `Login` will contain a form with an email field and a password field.
- Manage the form binding and validation using `Formik`
- The email and password should be sent to the following server

```
const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify({
					email: 'yariv@nerdeez.com',
					password: '12345678'
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
```
- if you send the following data the server will return a JWT token.
- Pass that token to the `TodoList`, after getting the token the `TodoList` should fetch the data from the server:

```
fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			.then(
				(response) => {
					return response.json()
				}
			)
			.then((json) => {
				setTodos(json);
			})
```
- the server will only return the data upon a valid jwt token