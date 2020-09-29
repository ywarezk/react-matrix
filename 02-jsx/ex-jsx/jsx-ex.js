function Button() {
	const helloWorld = (event) => {
		alert('hello world');
	}
	
	return (
		<button onClick={helloWorld} >
			click me
		</button>
	)
}

function If() {
	const randomNum = Math.random();
	
	return (
		<h1>{ randomNum > 0.5 ? 'high' : 'low' }</h1>
	)
}

function Todo() {
	const todoList = [
		// {id: 1, ...}
		'Buy tofu',
		'Buy soya milk',
		'walk with piglet and sweetness'
	]
	
	// [<li key={}></li>]
	return (
		<ul>
			{
				todoList.map((singleTodo, index) => {
					return (
						<li key={index}>
							{singleTodo}
						</li>
					)
				})
			}
		</ul>
	)
}

function App() {
	return (
		<>
			<Button />
			<If />
			<Todo />	
		</>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
