import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from ".";

import { slice } from "./fetchingSlice";

// export const fetchPhonesd = (params: any) => async (dispatch: AppDispatch) => {
// 	const { sortBy, order, choiceItem } = params;
// 	try {
// 		dispatch(slice.actions.fetchingPhoneData());
// 		const response = await axios.get(
// 			`https://62f2bd9b18493ca21f3932d6.mockapi.io/${choiceItem}`,
// 			{
// 				params: {
// 					sortBy: sortBy,
// 					order: order,
// 				},
// 			}
// 		);
// 		dispatch(slice.actions.fetchingPhoneDataSuccess(response.data));
// 	} catch (e: any) {
// 		dispatch(slice.actions.fetchingPhoneDataError(e.message));
// 	}
// };
export const fetchPhones = createAsyncThunk<any>(
	"phones/fetchPhones",
	async (params: any) => {
		const { sortBy, order, choiceItem } = params;
		const { data } = await axios.get<any>(
			`https://62f2bd9b18493ca21f3932d6.mockapi.io/${choiceItem}`,
			{
				params: {
					sortBy: sortBy,
					order: order,
				},
			}
		);

		return data;
	}
);

export const fetchOneitem = async (getLok: any) => {
	try {
		const response = await axios.get(
			`https://62f2bd9b18493ca21f3932d6.mockapi.io${getLok}`
		);
		return response;
	} catch (e: any) {
		alert("Ошибка при получении данных");
	}
};
