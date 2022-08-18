import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState1 {
	value: any;
}

const initialState: DataState1 = {
	value: {},
};

export const CardSlice = createSlice({
	name: "CardData",
	initialState,
	reducers: {
		upCardData(state, action: PayloadAction<object>) {
			state.value = action.payload;
		},
	},
});

export const { upCardData } = CardSlice.actions;

export default CardSlice.reducer;
