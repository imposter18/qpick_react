import React from "react";
import "./App.scss";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import EmptyCart from "./components/emptyCart";
import Order from "./components/order";
import { Routes, Route } from "react-router-dom";
import Card from "./pages/Card";
import Likes from "./components/likes";

function App() {
	return (
		<div className="App">
			<div className="mainWrapper">
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/phones/:id" element={<Card />}></Route>
					<Route path="/headphones/:id" element={<Card />}></Route>
					<Route path="/emptyCart" element={<EmptyCart />}></Route>
					<Route path="/cart" element={<Order />}></Route>
					<Route path="/likes" element={<Likes />}></Route>
				</Routes>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
