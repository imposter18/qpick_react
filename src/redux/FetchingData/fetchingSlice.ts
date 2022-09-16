import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPhones } from "./ActionCreators";
import { itemData } from "./types";
interface DataState {
	data: itemData[];
	status: string;
}

const initialState: DataState = {
	data: [],
	status: "LOADING",
};

export const slice = createSlice({
	name: "phoneData",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPhones.pending, (state) => {
			state.status = "LOADING";
			state.data = [];
		});

		builder.addCase(
			fetchPhones.fulfilled,
			(state, action: PayloadAction<itemData[]>) => {
				state.data = action.payload;
				state.status = "SUCCESS";
			}
		);

		builder.addCase(fetchPhones.rejected, (state) => {
			state.status = "ERROR";
			state.data = [];
		});
	},
});

export default slice.reducer;
