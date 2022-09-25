import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slices/userName.slice'

export default configureStore({
	reducer: {
		// Aquí van los reducers
		userName: userNameSlice,
	},
})