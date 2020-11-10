import { createSlice } from '@reduxjs/toolkit';

// {reducer: (state, action) => state, actions: {setFirstName}}
export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		tasks: []
	},
	reducers: {
		addTask: (state, action) => {
			state.tasks.push(action.payload);	
		}
	}
})