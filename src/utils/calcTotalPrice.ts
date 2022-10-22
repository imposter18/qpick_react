// import { CartItem } from '../redux/cart/types'
import type { CartitemData } from "../redux/Cart/types";

export const calcTotalPrice = (items: CartitemData[]) => {
	return items.reduce(
		(sum: number, obj: CartitemData) => obj.price * obj.count + sum,
		0
	);
};
