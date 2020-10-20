import React, { useEffect, useState } from 'react';
import todoService from '../services/todo.service';

export const TodoList = () => {
	const [todoList, setTodoList] = useState([])
	const [error, setError] = useState(null);
	
	useEffect(() => {
		todoService.getTodos().then(
			(newTodoList) => {
				setTodoList(newTodoList);
			},
			(err) => {
				setError(err)
			}
		)		
	}, [])
	
	if (error) {
		throw error;
		// return (
		// 	<h1>
		// 		Something very terrible has happened {error.message}
		// 	</h1>
		// )
	}
	
	return (
		<ul>
			{
				todoList.map((todoItem) => {
					return (
						<li key={todoItem.id}>
							{
								todoItem.title
							}
						</li>
					)
				})
			}
		</ul>
	)
}