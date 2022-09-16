import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type sort = {
	name: string;
	sortProperty: string;
};

interface DataState {
	sort: sort;
	choiceItem: string;
	searchValue: string;
}

const initialState: DataState = {
	sort: {
		name: "популярности",
		sortProperty: "rating",
	},
	choiceItem: "phones",
	searchValue: "",
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setSort(state, action: PayloadAction<sort>) {
			state.sort = action.payload;
		},
		setChoiceItem(state, action: PayloadAction<string>) {
			state.choiceItem = action.payload;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
	},
});

export const { setSort, setChoiceItem, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
