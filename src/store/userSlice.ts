import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
	value: any;
}

const initialState: DataState = {
	value: [],
};

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState,
	reducers: {
		addItemCart(state, action: PayloadAction<object>) {
			state.value.push(action.payload);
		},
	},
});

export const { addItemCart } = UserSlice.actions;

export default UserSlice.reducer;
