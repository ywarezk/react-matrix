/**
 * uncontrolled - dom elements is managing the state
 * when intrested we grab the state from the dom element
 */
 
import React, {createRef} from 'react';

// this.inputRef
export default class UncontrolledExampleClass extends React.Component {
	constructor(props) {
		super(props);
		
		// RefObject => { current: null } => { current: HtmlInputElement}
		this.inputRef = createRef();
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		
		console.log(this.inputRef.current.value);
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					ref={this.inputRef}
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
}