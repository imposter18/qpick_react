import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
	value: any;
}

const initialState: DataState = {
	value: [],
};

export const LikeSlice = createSlice({
	name: "likeSlice",
	initialState,
	reducers: {
		togleLike(state, action: PayloadAction<object>) {
			state.value = action.payload;
		},
		addLike(state, action: PayloadAction<any>) {
			const findItem = state.value.find(
				(obj: any) => obj.id === action.payload.id
			);
			const findIndex = state.value.indexOf(findItem);
			if (findItem) {
				state.value.splice(findIndex, 1);
			} else {
				state.value.push(action.payload);
			}
		},
	},
});

export const { togleLike, addLike } = LikeSlice.actions;

export default LikeSlice.reducer;
