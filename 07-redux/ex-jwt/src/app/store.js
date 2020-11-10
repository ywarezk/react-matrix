/**
 * Create a redux store that will hold and manage our app global state.
 */
 
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../auth';
import { todoSlice } from '../todo';

/** 
export const store = createStore(
	(state) => state,
	{
		auth: {
			firstName: 'Pigletshvily',
			lastName: 'Chaitovsky'
		},
		
		todo: {
			tasks: []
		}
	}
)

*/

export const store = configureStore({
	reducer: combineReducers({
		auth: authSlice.reducer,
		todo: todoSlice.reducer
	})	
})