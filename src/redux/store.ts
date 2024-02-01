import { configureStore } from '@reduxjs/toolkit'

import { SLICE_CONSTANT } from './slice.constant'

import counterSlice from './slice/counterSlice'

const rootReducer = {
	[SLICE_CONSTANT.NAME.COUNTER]: counterSlice,
}

const store = configureStore({
	reducer: rootReducer,
})

export default store
