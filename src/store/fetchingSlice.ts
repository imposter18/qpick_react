import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPhones } from "./ActionCreators";
interface DataState {
	data: any;
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
		builder.addCase(fetchPhones.pending, (state, action) => {
			state.status = "LOADING";
			state.data = [];
		});

		builder.addCase(fetchPhones.fulfilled, (state, action) => {
			state.data = action.payload;
			state.status = "SUCCESS";
		});

		builder.addCase(fetchPhones.rejected, (state, action) => {
			state.status = "ERROR";
			state.data = [];
		});
	},
});

export default slice.reducer;
