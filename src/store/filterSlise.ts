import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
	sort: any;
}

const initialState: DataState = {
	sort: {
		name: "популярности",
		sortProperty: "rating",
	},
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setSort(state, action: PayloadAction<object>) {
			state.sort = action.payload;
		},
	},
});

export const { setSort } = filterSlice.actions;

export default filterSlice.reducer;
