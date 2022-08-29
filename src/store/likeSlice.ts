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
		removeLikes(state) {
			state.value = [];
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

export const { removeLikes, addLike } = LikeSlice.actions;

export default LikeSlice.reducer;
