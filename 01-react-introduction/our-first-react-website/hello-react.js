
/*
<h1>
	<span>
		<u>		
			Hello world from React
		</u>
	</span>
</h1>

*/

// const h1 = (
// 	<h1>
// 		<span>
// 			<u>
// 				Hello world from React with JSX
// 			</u>
// 		</span>
// 	</h1>
// )

// Component
function H1() {
	return (
		<h1>
			<span>
				<u>
					Hello world from React with JSX from function 
				</u>
			</span>
		</h1>
	)
}

function Header() {
	return (
		<header>
			<img src="https://i.cbc.ca/1.5507480.1585002199!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/puppy-facts.jpg" />
			
			<nav>
				<ul>
					<li>
						<a href="/" >
							Homepage
						</a>
					</li>
				</ul>
			</nav>
			
			<H1 />
		</header>
	)
}

function App() {
	return (
		<div>
			<Header />
			<Footer />
		</div>
	)
}

/*
const h1 = React.createElement(
	'h1', 
	null, 
	React.createElement(
		'span',
		null,
		React.createElement(
			'u',
			null,
			'Hello world from React with underline'
		)
	)
)
*/

ReactDOM.render(
	<Header />,
	document.getElementById('container')
)
