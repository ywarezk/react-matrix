import React from 'react';
import PropTypes from 'prop-types';

// interface CountdownProps {  }
// export default class Countdown extends React.Component<CountdownProps> {
export default class Countdown extends React.Component {
	static propTypes = {
		initialCount: PropTypes.number.isRequired,
		destroyCb: PropTypes.func.isRequired
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
		this.intervalId = setInterval(() => {
			
			// when you change the state based on previous state
			// this is not the way
			
			// if (this.state.counter <= 0) {
			// 	clearInterval(intervalId);
			// };
			
			// do not update the state from previous state like this
			// this.setState({
			// 	counter: this.state.counter - 1				
			// })
			
			this.setState((theRightState) => {
				return {
					counter: theRightState.counter - 1
				}
			})
			
		}, 1000)
	}
	
	decrementCounter = () => {
		if (this.state.counter <= 0) return;
		this.setState({
			counter: this.state.counter - 1
		})
	}
	
	/**
	 * every update - when we do setState, or one of parent is doing setState
	 * you put here actions that should happen as a result of an update
	 */
	componentDidUpdate(prevProps, prevState) {
		//
		// if ....
		// ... this.setState()	
		
		if (this.state.counter === 0) {			
			clearInterval(this.intervalId);
			this.props.destroyCb(false);
		}
		
		// { num: 7 }
		if (this.props.initialCount !== prevProps.initialCount) {
			this.setState({
				counter: this.props.initialCount
			})
		}
		
	}
	
	/**
	 * before the component is removed
	 * cleanup
	 */
	componentWillUnmount() {
		clearInterval(this.intervalId);	
	}
	
	render() {
		// setInterval()
		
		return (
			<>
				<h1>
					{ this.state.counter }
				</h1>
				<button onClick={this.decrementCounter}>
					Decrement Counter
				</button>
				<button onClick={() => this.props.destroyCb(false)}>
					Destroy
				</button>
			</>
		)
	}
}