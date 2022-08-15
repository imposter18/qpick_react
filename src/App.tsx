import React from "react";
import { fetchPhones } from "./store/ActionCreators";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Home from "./pages/home";
import { getPhoneDataSuccess } from "./store/slice";

function App() {
	const dispatch = useAppDispatch();
	// const selector = useAppSelector(state.data);

	React.useEffect(() => {
		// fetch("https://62f2bd9b18493ca21f3932d6.mockapi.io/phones")
		// 	.then((res) => res.json())
		// 	.then((data) => getPhoneDataSuccess(data));
		// getPhoneDataSuccess(dispatch(fetchPhones()));
		// dispatch(getPhoneDataSuccess(fetchPhones()));
		dispatch(fetchPhones());
	}, []);

	return (
		<div className="App">
			<Home></Home>
		</div>
	);
}

export default App;
