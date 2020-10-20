/**
 * Service that will interact with our todo rest api
 */
 
import { Todo } from '../models/todo.model';
 
class TodoService {
	
	/**
	 * will fetch the todo list from our server
	 * @returns {Promise<Todo[]>}
	 */
	getTodos() {
		// Promise<Response>
		return fetch('https://nztodo.herokuapp.com/api/tasks/?format=json')
			.then((response) => {
				// Promise<[{...}, {...}]>
				// response.json()
				return response.json();
			})
			.then((todoList) => {
				return todoList.map((todoObj) => {
					const newTodo = new Todo();
					newTodo.id = todoObj.id;
					newTodo.title = todoObj.title;
					return newTodo;
				})
			})
			// .catch(() => {
			// 	return [];
			// })
	}
	
}

export default new TodoService();