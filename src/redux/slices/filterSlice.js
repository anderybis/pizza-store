import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	categoryId: 0,
	sort: { name: "популярности", sortProperty: "rating" },
}

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setActiveCategory(state, action) {
			state.categoryId = action.payload
		},
		setActiveParameter(state, action) {
			state.sort = action.payload
		},
	},
})

export const { setActiveCategory, setActiveParameter } = filterSlice.actions
export default filterSlice.reducer
