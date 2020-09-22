/**
 jsx code must be wrapped with a single parent
 */
 
 
// React.createElement(  )
const div = (
	
	<div>
		<h1>
			hello world
		</h1>
	</div>
	<div>
		<p>
			this is a wrong code
		</p>
	</div>
) // error

const div = (
	<>
		<div>
			<h1>
				hello world
			</h1>
		</div>
		<div>
			<p>
				this is a wrong code
			</p>
		</div>
	</>
) // error