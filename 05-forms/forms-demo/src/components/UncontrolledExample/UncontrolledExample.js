import React, {useRef} from 'react';

export default function UncontrolledExample() {
	// { current: null } 
	// {current: HtmlInputElement}
	// { current: 'hello' } 
	// createRef() wrong
	// this.
	const inputRef = useRef(null);
	
	return (
		<form>
			<input 
				ref={inputRef}
				name="yourFullName"
				type="text" 
				placeholder="Enter your name" 
			/>
			
			<button type="submit">
				Submit
			</button>
		</form>
	)
}