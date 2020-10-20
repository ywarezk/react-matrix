import React, {PureComponent} from 'react';

export class AdditionalStuff extends PureComponent {
	
	// will run on every update
	// return boolean : true, false
	// return true - the component will continue to update
	// return false - the component will not update
	
	// optimization
	// shouldComponentUpdate(nextProps, nextState) {
	// 	// return true;
	// }
	
	// props = {key: value, key1: value1, key2: {
		
	//}}
	shouldComponentUpdate(nextProps, nextState) {
		// shallow comparison
		// nextProps -> this.props ===
		// nextState -> this.state
		// if they are not changed the it returns false
		return false
	}
	
	componentDidCatch(error, info) {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		logComponentStackToMyService(info.componentStack);
	}
	
	
	
	render() {
		return (
			<h1>hello world</h1>
		)
	}
	
}