import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { JwtContext } from '../../auth';
import { useSelector } from 'react-redux';

export function TodoList(  ) {
	const [todos, setTodos] = useState([])
	const {jwt} = useContext(JwtContext);
	const token = useSelector((state) => state.auth.token);
	
	useEffect(() => {
		if (!jwt) return;
		
		fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
			headers: {
				'Authorization': `Bearer ${jwt}`
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
		
	}, [jwt])
	
	return (
		<>
			<h1>Todo List {token}</h1>
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