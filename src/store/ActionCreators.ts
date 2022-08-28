import axios from "axios";
import { AppDispatch } from ".";

import { slice } from "./fetchingSlice";

export const fetchPhones = (params: any) => async (dispatch: AppDispatch) => {
	const { sortBy, order } = params;
	try {
		dispatch(slice.actions.fetchingPhoneData());
		const response = await axios.get(
			"https://62f2bd9b18493ca21f3932d6.mockapi.io/phones",
			{
				params: {
					sortBy: sortBy,
					order: order,
				},
			}
		);
		dispatch(slice.actions.fetchingPhoneDataSuccess(response.data));
	} catch (e: any) {
		dispatch(slice.actions.fetchingPhoneDataError(e.message));
	}
};

export const fetchOnePhone = async (id: any) => {
	try {
		const response = await axios.get(
			`https://62f2bd9b18493ca21f3932d6.mockapi.io/phones/${id}`
		);
		return response;
	} catch (e: any) {
		alert("Ошибка при получении данных");
	}
};
