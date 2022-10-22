import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypeOrderInfo {
	sity: string;
	street: string;
	building: string;
	entrance: string;
	flat: string;
	phoneNum: string;
}

const initialState: TypeOrderInfo = {
	sity: "",
	street: "",
	building: "",
	entrance: "",
	flat: "",
	phoneNum: "",
};

export const orderInfo = createSlice({
	name: "orderInfo",
	initialState,
	reducers: {
		upSity(state, action: PayloadAction<string>) {
			state.sity = action.payload;
			console.log(1, typeof action.payload);
		},
		upStreet(state, action: PayloadAction<string>) {
			state.street = action.payload;
		},
		upBuilding(state, action: PayloadAction<string>) {
			state.building = action.payload;
		},
		upEntrance(state, action: PayloadAction<string>) {
			state.entrance = action.payload;
		},
		upFlat(state, action: PayloadAction<string>) {
			state.flat = action.payload;
		},
		upPhoneNum(state, action: PayloadAction<string>) {
			state.phoneNum = action.payload;
			console.log(2, typeof action.payload);
		},
		clearOrderInput(state) {
			state.sity = "";
			state.street = "";
			state.building = "";
			state.entrance = "";
			state.flat = "";
			state.phoneNum = "";
		},
	},
});

export const {
	upSity,
	upStreet,
	upBuilding,
	upEntrance,
	upFlat,
	upPhoneNum,
	clearOrderInput,
} = orderInfo.actions;

export default orderInfo.reducer;
