import React from 'react';

// <HelloWorld />
// { message: 'hello from parent', todoList: [1,2,3,4] }
export default function HelloWorld( {message} ) {
	return (
		<h1>
			{ message }
		</h1>
	)
}

// HelloWorld.propTypes = {
	
// }

// HelloWorld.defaultProps = {
	
// }