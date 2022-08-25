// import { CartItem } from '../redux/cart/types';

export const calcTotalPrice = (items: any) => {
	return items.reduce((sum: any, obj: any) => obj.price * obj.count + sum, 0);
};
