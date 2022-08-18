import { configureStore } from "@reduxjs/toolkit";
import reducer from "./fetchingSlice";
import cardReduser from "./CardDataSlice";
import userSlice from "./userSlice";

// export const setupStore = () => {
// 	return configureStore({
// 		reducer: {
// 			phoneDataReducer: reducer,
// 			cardReduser: cardReduser,
// 		},
// 		devTools: process.env.NODE_ENV !== "production",
// 	});
// };

// export type RootState = ReturnType<typeof reducer>;
// export type RootState1 = ReturnType<typeof cardReduser>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore["dispatch"];

export const setupStore = configureStore({
	reducer: {
		phoneDataReducer: reducer,
		cardReduser,
		userSlice,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
