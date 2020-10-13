import React from 'react';
import PropTypes from 'prop-types';

// interface CountdownProps {  }
// export default class Countdown extends React.Component<CountdownProps> {
export default class Countdown extends React.Component {
	static propTypes = {
		initialCount: PropTypes.number.isRequired
	}
	
	static defaultProps = {
		initialCount: 5
	}
	
	// state = {
	// 	counter: 5
	// }
	
	// will be called once
	// simple initializations of properties
	constructor(props) {
		super(props);
		
		// anti pattern
		this.state = {
			counter: props.initialCount
		}
	}
	
	/**
	 * jumps once when component is born
	 * complex initialization
	 */
	componentDidMount() {
		setInterval(() => {
			this.setState({
				counter: this.state.counter - 1
			})
		}, 1000)
	}
	
	render() {
		// setInterval()
		
		return (
			<h1>
				{ this.state.counter }
			</h1>
		)
	}
}