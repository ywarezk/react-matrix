/**
inside jsx we can place js expression
 */
 
 // <h1>0.2345245</h1>
 // 1.
const h1 = (
	<h1>
		{
			Math.random()					
		}
	</h1>
)

const styleOfObject = {
	backgroundColor: 'red',
	border: '1px solid red',
}

// 2.
const p = (
	<p style={ styleOfObject }>
	
		{
			<span>hello</span>
		}
	</p>
)

// 1. What js can i place between tags <h1> {...} </h1>

// number
// string
// boolean
// null / undefined
// React.createElement
// Array of the above

const h1 = (
	<h1>
		{
			(function() {
				if (Math.random() > 0.5) {
					return 'high'
				} else {
					return 'low'
				}
			})()
		}
	</h1>
)

// 2. what the attribute expects to get

const anotherP = (
	<p id={ `hello-${Math.random()}` }>
		hello
	</p>
)

function hello() {
	alert('hello world');
}

const eventsExample = (
	<button onClick={ hello }>
		click me		
	</button>
)

