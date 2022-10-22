import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LikeitemData } from "./types";

const getLikesDataFromLS = () => {
	const data = localStorage.getItem("likes");
	const value = data ? JSON.parse(data) : [];
	return { value };
};

interface DataState {
	value: LikeitemData[];
}

const initialState: DataState = getLikesDataFromLS();

export const LikeSlice = createSlice({
	name: "likeSlice",
	initialState,
	reducers: {
		removeLikes(state) {
			state.value = [];
		},
		addLike(state, action: PayloadAction<LikeitemData>) {
			const findItem = state.value.find(
				(obj: LikeitemData) => obj.id === action.payload.id
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
