import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";

export const setupStore = () => {
	return configureStore({
		reducer: {
			phoneDataReducer: reducer,
		},
	});
};
export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
