/**
 * wrap all our component with this component
 * This component will be in charge of displaying errors to the user
 
 <CatchError>
	<App />	
	<TodoList />
 </CatchError>
 
 */
 
import React from 'react';

// this.props.children
export class CatchError extends React.Component {
	state = {
		error: null // new Error()
	}
	
	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { error: error };
	}

	// some additional logic when error happens
	componentDidCatch(error, info) {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		// logComponentStackToMyService(info.componentStack);
	}
	
	render() {
		if (this.state.error) {
			return (
				<div>
					<h1>
						Error
					</h1>
					<p>
						{this.state.error.message}
					</p>
				</div>				
			)
		}
		
		return this.props.children;
	}
}