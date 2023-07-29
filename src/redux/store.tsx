import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './serviceSlice';

export const store = configureStore({
	reducer: {
		services: servicesReducer,
	},
});
