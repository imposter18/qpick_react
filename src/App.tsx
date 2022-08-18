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
import Card from "./pages/cardProduct";

function App() {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchPhones());
	}, []);

	return (
		<div className="App">
			<div className="mainWrapper">
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/items" element={<Card />}></Route>
					<Route path="/emptyCart" element={<EmptyCart />}></Route>
					<Route path="/userCart" element={<Order />}></Route>
				</Routes>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
