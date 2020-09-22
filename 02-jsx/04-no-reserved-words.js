/**
jsx is very similar to html
but
html is using js reserved words
 */
 
const h1 = (
	<h1 class="hello">
		this is wrong
	</h1>
)

const h1 = (
	<h1 className="hello">
		this is wrong
	</h1>
)

const label = (
	<label for="some-element">some label</label>
) // wrong

const label = (
	<label htmlFor="some-element">some label</label>
) // wrong