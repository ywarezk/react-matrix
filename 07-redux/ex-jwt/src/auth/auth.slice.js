import { createSlice } from '@reduxjs/toolkit';

// {reducer: (state, action) => state, actions: {setFirstName}}
export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		firstName: 'Pigletshvily',
		lastName: 'Chaitovsky',
		token: null,
	},
	reducers: {
		setFirstName: (state, action) => {
			state.firstName = action.payload;	
		},
		setToken: (state, action) => {
			state.token = action.payload;
		}
	}
})