// import { CartItem } from '../redux/cart/types';
import { calcTotalPrice } from "./calcTotalPrice";
import { calcTotalCounter } from "./calcTotalCounter";

export const getCartFromLS = () => {
	const data = localStorage.getItem("cart");
	const items = data ? JSON.parse(data) : [];
	const totalPrice = calcTotalPrice(items);
	const totalCounter = calcTotalCounter(items);

	return {
		items,
		totalPrice,
		totalCounter,
	};
};
