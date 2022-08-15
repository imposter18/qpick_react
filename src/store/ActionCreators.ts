import axios from "axios";
import { AppDispatch } from ".";

import { slice } from "./slice";

export const fetchPhones = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(slice.actions.getPhoneData());
		const response = await axios.get(
			"https://62f2bd9b18493ca21f3932d6.mockapi.io/phones"
		);
		dispatch(slice.actions.getPhoneDataSuccess(response.data));
	} catch (e: any) {
		dispatch(slice.actions.getPhoneDataError(e.message));
	}
};
