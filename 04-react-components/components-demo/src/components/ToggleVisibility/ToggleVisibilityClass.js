import React from 'react';

export default class ToggleVisibility extends React.Component {
	state = {
		isVisible: true,
		msg: 'hello world'
	}
	
	toggleVisibility = () => {
		this.setState({
			isVisible: !this.state.isVisible
		})
	}
	
	render() {
		return (
			<div>
				{
					this.state.isVisible && (
						<h1>
							Toggle Me
						</h1>
					)
				}
				<button onClick={this.toggleVisibility} >
					Toggle Visibility
				</button>
			</div>
		)
	}
}