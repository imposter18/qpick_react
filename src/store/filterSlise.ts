import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface DataState {
	sort: any;
	choiceItem: string;
}

const initialState: DataState = {
	sort: {
		name: "популярности",
		sortProperty: "rating",
	},
	choiceItem: "phones",
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setSort(state, action: PayloadAction<object>) {
			state.sort = action.payload;
		},
		setChoiceItem(state, action: PayloadAction<string>) {
			state.choiceItem = action.payload;
		},
	},
});

export const { setSort, setChoiceItem } = filterSlice.actions;

export default filterSlice.reducer;
