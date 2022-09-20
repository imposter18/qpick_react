import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { addItemCart } from "../redux/Cart/addToCartSlice";
import { minusItem } from "../redux/Cart/addToCartSlice";
import type { CartitemData } from "../redux/Cart/types";

interface OrderItem {
	data: CartitemData;
}

const OrderItem: React.FC<OrderItem> = ({ data }) => {
	const dispatch = useAppDispatch();

	const { id, types, price, title, titleImageUrl, count } = data;

	const calcCost = (price: number, count: number): number => {
		return price * count;
	};

	const itemCartPlus = (data: CartitemData) => {
		dispatch(addItemCart(data));
	};

	const itemCartMinus = (data: CartitemData) => {
		dispatch(minusItem(data));
	};

	return (
		<div className="orderItem">
			<Link to={`/${types}/${id}`}>
				<div className="orderItem__img">
					<img src={titleImageUrl} alt="card item" />
				</div>
			</Link>
			<div className="orderItem__infoBlock">
				<Link to={`/${types}/${id}`} className="orderItem__title">
					{title}
				</Link>
				<div className="orderItem__price">{price.toLocaleString("ru")} ₽</div>
			</div>
			<div className="orderItem__counter counter">
				<button onClick={() => itemCartMinus(data)} className="counter__minus">
					-
				</button>
				<div className="counter__value">{count}</div>
				<button onClick={() => itemCartPlus(data)} className="counter__plus">
					+
				</button>
			</div>
			<div className="orderItem__value">
				{calcCost(price, count).toLocaleString("ru")} ₽
			</div>
		</div>
	);
};
export default OrderItem;
