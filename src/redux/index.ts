import { configureStore } from "@reduxjs/toolkit";
import fetchindDataSlice from "./FetchingData/fetchingSlice";
import addToCartSlice from "./Cart/addToCartSlice";
import likeSlice from "./Likes/likeSlice";
import filterSlise from "./Filter/filterSlise";
import orderInfo from "./orderInfo/orderInfoSlice";

export const setupStore = configureStore({
	reducer: {
		fetchindDataSlice,
		addToCartSlice,
		likeSlice,
		filterSlise,
		orderInfo,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
