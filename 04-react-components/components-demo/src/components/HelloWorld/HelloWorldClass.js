/**
 * a component in react can also be described in a class syntax
 */
 
import React from 'react';

export default class HelloWorld extends React.Component {
	render() {
		return (
			<h1>
				{this.props.message}
			</h1>
		)
	}
}