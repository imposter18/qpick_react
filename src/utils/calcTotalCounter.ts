import type { CartitemData } from "../redux/Cart/types";

export const calcTotalCounter = (items: CartitemData[]) => {
	return items.reduce((sum: number, obj: CartitemData) => obj.count + sum, 0);
};
