# Redux

Redux library global state managment
data does not belong to one component but to many components

```
{
	auth: {
		firstName: 'Yariv',
		lastName: 'Chaitovsky'
	},
	
	todo: {
		tasks: []
	}
}
```

## Store

## Changes in the data

to change the data we use Action  
Action describe something that happened in our app.  

```
{
	type: 'BUTTON_PRESSED',
	payload?: data that we pass with the action to change the state according to this data 
}
```

```
{
	type: 'SET_FIRST_NAME',
	payload: 'Pigletshvily'
}
```

```
function setFirstName(name) {
	return {
		type: 'SET_FIRST_NAME',
		payload: name
	}
}
```

```
store.dispatch({
	type: 'SET_FIRST_NAME',
	payload: ...
})

store.dispatch(setFirstName('Pigletshvily'))
```

## Reducer

```
(state, action) => newState
```