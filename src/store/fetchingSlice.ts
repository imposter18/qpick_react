import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
	data: any;
	isLoading: Boolean;
	error: String;
}

const initialState: DataState = {
	data: [],
	isLoading: false,
	error: "",
};

export const slice = createSlice({
	name: "phoneData",
	initialState,
	reducers: {
		fetchingPhoneData(state) {
			state.isLoading = true;
		},
		fetchingPhoneDataSuccess(state, action: PayloadAction<[]>) {
			state.isLoading = false;
			state.error = "";
			state.data = action.payload;
		},
		fetchingPhoneDataError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// export const { getPhoneDataSuccess } = slice.actions;

export default slice.reducer;
