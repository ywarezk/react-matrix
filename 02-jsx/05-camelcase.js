/**
html we are using usually lowercase for attribute
<div aria-data=""

 */
 
const form = (
	<form novalidate>
	</form>
) // error

const form = (
	<form noValidate>
	</form>
)

const button = (
	<button onClick={...}>
	</button>
)

const p = (
	<p style={ {backgroundColor: 'red'} }>
	</p>
)