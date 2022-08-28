import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { addItemCart } from "../store/addToCartSlice";
import { minusItem } from "../store/addToCartSlice";

export default function OrderItem({ data }: any) {
	const { id, price, title, titleImageUrl, count } = data;
	// console.log(count);

	const calcCost = (price: number, count: number): number => {
		return price * count;
	};
	const dispatch = useAppDispatch();
	const itemCartPlus = (data: any) => {
		dispatch(addItemCart(data));
	};

	const itemCartMinus = (data: any) => {
		dispatch(minusItem(data));
	};

	return (
		<div className="orderItem">
			<Link to={`/phones/${id}`}>
				<div className="orderItem__img">
					<img src={titleImageUrl} alt="card item" />
				</div>
			</Link>
			<div className="orderItem__infoBlock">
				<div className="orderItem__title">{title}</div>
				<div className="orderItem__price">{price} ₽</div>
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
			<div className="orderItem__value">{calcCost(price, count)} ₽</div>
		</div>
	);
}
