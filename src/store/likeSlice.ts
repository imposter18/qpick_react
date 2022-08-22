import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
	value: any;
}

const initialState: DataState = {
	value: [
		{
			id: null,
			liked: null,
		},
	],
};

export const LikeSlice = createSlice({
	name: "likeSlice",
	initialState,
	reducers: {
		togleLike(state, action: PayloadAction<object>) {
			state.value = action.payload;
		},
	},
});

export const { togleLike } = LikeSlice.actions;

export default LikeSlice.reducer;
