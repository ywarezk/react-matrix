const todoList = [
	'hello',
	'world'
]

// [<li>hello</li>, <li>world</li>]

const ul = (
	<ul>
		{
			todoList.map((singleTodo) => {
				return (
					<li>
						{singleTodo}
					</li>
				)
			})
		}
	</ul>
)