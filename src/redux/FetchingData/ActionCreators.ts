import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "..";

export const fetchPhones = createAsyncThunk<any>(
	"phones/fetchPhones",
	async (params: any) => {
		const { sortBy, order, choiceItem, searchValue } = params;
		const { data } = await axios.get<any>(
			`https://62f2bd9b18493ca21f3932d6.mockapi.io/${choiceItem}`,
			{
				params: {
					sortBy: sortBy,
					order: order,
					search: searchValue,
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
