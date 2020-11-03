import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function TodoList( {token} ) {
	const [todos, setTodos] = useState([])
	
	useEffect(() => {
		if (!token) return;
		
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
		
	}, [token])
	
	return (
		<>
			<h1>Todo List</h1>
			<ul>				
				{
					todos.map(singleTodo => {
						return (
							<li key={singleTodo.id}>
								<h1>
									{singleTodo.title}
								</h1>
								<p>
									{singleTodo.description}
								</p>
							</li>
						)
					})		
				}
			</ul>
		</>
	)
}

TodoList.propTypes = {
	token: PropTypes.string
}