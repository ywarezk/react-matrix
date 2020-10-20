import React from 'react';

// dataToPass = {}
// <HelloWorld {...dataToPass} />
// <HelloWorld isVisiable message="hello from parent" todoList={...} />
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