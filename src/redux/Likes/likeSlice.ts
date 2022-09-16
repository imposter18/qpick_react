import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LikeitemData } from "./types";
interface DataState {
	value: LikeitemData[];
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
		addLike(state, action: PayloadAction<LikeitemData>) {
			const findItem = state.value.find(
				(obj: any) => obj.id === action.payload.id
			);

			if (findItem) {
				const findIndex = state.value.indexOf(findItem);
				state.value.splice(findIndex, 1);
			} else {
				state.value.push(action.payload);
			}
		},
	},
});

export const { removeLikes, addLike } = LikeSlice.actions;

export default LikeSlice.reducer;
