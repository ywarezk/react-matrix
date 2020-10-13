import React, {useState} from 'react';

export default function ToggleVisibility() {
	// [ isVisible, setIsVisible ]
	// const isVisibleArr = useState(true);
	// const isVisible = isVisibleArr[0];
	// const setIsVisible = isVisibleArr[1];
	
	// 1
	const [isVisible, setIsVisible] = useState(true);
	
	// 2
	const [todo, setTodo] = useState([]);
	
	// 3
	const [user, setUser] = useState({
		firstName: 'Yariv',
		lastName: 'Katz'
	})	
	
	
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
		
		setUser({
			...user,
			lastName: 'Chaitovsky'
		})
	}
	
	return (
		<div>
			{
				isVisible && (
					<h1>
						Toggle Me
					</h1>		
				)
			}			
			<button onClick={toggleVisibility} >
				Toggle Visibility
			</button>
		</div>
	)
}