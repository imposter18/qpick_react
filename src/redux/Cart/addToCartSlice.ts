import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { calcTotalCounter } from "../../utils/calcTotalCounter";
import { CartitemData } from "./types";
import { itemData } from "../FetchingData/types";

interface DataState {
	items: CartitemData[];
	totalPrice: number;
	totalCounter: number;
}

const initialState: DataState = {
	items: [],
	totalPrice: 0,
	totalCounter: 0,
};

export const addToCartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemCart(state, action: PayloadAction<itemData>) {
			const findItem = state.items.find(
				(obj: itemData) => obj.id === action.payload.id
			);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}

			state.totalPrice = calcTotalPrice(state.items);
			state.totalCounter = calcTotalCounter(state.items);
		},
		minusItem(state, action: PayloadAction<CartitemData>) {
			const findItem = state.items.find(
				(obj: CartitemData) => obj.id === action.payload.id
			);

			if (findItem) {
				const findIndex = state.items.indexOf(findItem);
				findItem.count--;

				if (findItem.count === 0) {
					state.items.splice(findIndex, 1);
				}
			}

			state.totalPrice = calcTotalPrice(state.items);
			state.totalCounter = calcTotalCounter(state.items);
		},
	},
});

export const { addItemCart, minusItem } = addToCartSlice.actions;

export default addToCartSlice.reducer;
