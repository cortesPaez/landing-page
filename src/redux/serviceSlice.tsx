import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	servicesInfo: [],
};

const serviceSlice = createSlice({
	name: 'services',
	initialState,
	reducers: {
		setServicesInfo: (state, action) => {
			state.servicesInfo = action.payload;
		},
	},
});

export const { setServicesInfo } = serviceSlice.actions;
export default serviceSlice.reducer;
