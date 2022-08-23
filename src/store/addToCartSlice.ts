import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
	value: any;
}

const initialState: DataState = {
	value: [],
};

export const addToCartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemCart(state, action: PayloadAction<object>) {
			state.value.push(action.payload);
		},
	},
});

export const { addItemCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
