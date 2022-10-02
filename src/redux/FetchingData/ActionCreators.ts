import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AppDispatch } from "..";
import type { itemData } from "./types";

type params = {
	sortBy: string;
	order: string;
	choiceItem: string;
	searchValue: string;
};

export const fetchPhones = createAsyncThunk<itemData[], params>(
	"phones/fetchPhones",
	async (params: params) => {
		const { sortBy, order, choiceItem, searchValue } = params;
		const { data } = await axios.get<itemData[]>(
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

export const fetchOneitem = async (item: string) => {
	try {
		const response = await axios.get<itemData>(
			`https://62f2bd9b18493ca21f3932d6.mockapi.io${item}`
		);
		return response;
	} catch (e) {
		alert("Ошибка при получении данных");
	}
};
