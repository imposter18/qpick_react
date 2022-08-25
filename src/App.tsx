import React from "react";
import { fetchPhones } from "./store/ActionCreators";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import EmptyCart from "./components/emptyCart";
import Order from "./components/order";
import { Routes, Route } from "react-router-dom";
import Card from "./pages/Card";
import { togleLike } from "./store/likeSlice";

function App() {
	const dispatch = useAppDispatch();
	let phonesData = useAppSelector((state) => state.fetchindDataSlice.data);

	React.useEffect(() => {
		(async function () {
			await dispatch(fetchPhones());
		})();
	}, []);

	React.useEffect(() => {
		let LikeData = phonesData.map((data: any, index: any) => {
			return { id: data.id, liked: data.liked };
		});
		dispatch(togleLike(LikeData));
	}, [phonesData]);

	return (
		<div className="App">
			<div className="mainWrapper">
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/phones/:id" element={<Card />}></Route>
					<Route path="/emptyCart" element={<EmptyCart />}></Route>
					<Route path="/cart" element={<Order />}></Route>
				</Routes>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
