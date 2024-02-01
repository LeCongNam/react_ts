import { createSlice } from '@reduxjs/toolkit'
import { SLICE_CONSTANT } from '../slice.constant'

const counterSlice = createSlice({
	name: SLICE_CONSTANT.NAME.COUNTER,
	initialState: 0,
	reducers: {
		increase: (state) => {
			return state + 1
		},

		decrease: (state) => {
			return state - 1
		},
	},
})

const { actions, reducer } = counterSlice

export const { decrease, increase } = actions

export default reducer
