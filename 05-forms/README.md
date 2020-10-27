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

## H.W EX

Let's go over the composition patterns we learned: `hoc, render-props, custom hooks`.
- Our REST server can give us logs, by sending a `GET` request to the following url: <https://nztodo.herokuapp.com/api/tasks/?format=json>
- Each log object will look like this:

```js
{
	"id":9862,
	"title":"some title",
	"description":"some description",
	"group":"45",
	"when":"2019-09-07T18:27:32.960000Z"
}
```

- We have a repeating pattern where components will have to read logs of a certain group, and add log to a certain group.
- Sending a GET request with the `group` param will filter the list from the server according to a group

> <https://nztodo.herokuapp.com/api/tasks/?format=json&group=45>
>
> Will filter and show the logs that belongs to group 45.

- create the following `HOC`

```
const EnhancedComponent = withLogger(group)(RegularComponent)
```

`EnhancedComponent` will get in the props an array of `logs`  
`EnhancedComponent` wll get in the props a function `createLog` to create a new log that belongs to the group

```js
function createLog(title, description, when) {...} 
```

the component will have a button to create a new log and you should see the new log in the list

- Create the following `render-props`

```js
<LoggerWrapper group="someGroup">
	{
		(logs, createLog) => {
			return (...)
		}
	}
</LoggerWrapper>
```

- Create the following `custom hooks`

```js
const [logs, createLogs] = useLogs(someGroup); 
```

