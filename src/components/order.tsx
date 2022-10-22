import { useAppDispatch, useAppSelector } from "../hooks/redux";
import EmptyCart from "./emptyCart";
import OrderItem from "./orderItem";
import type { CartitemData } from "../redux/Cart/types";
import { clearItem } from "../redux/Cart/addToCartSlice";
import { Link } from "react-router-dom";

export default function Order() {
	const dispatch = useAppDispatch();
	const { items, totalPrice } = useAppSelector((state) => state.addToCartSlice);
	if (!totalPrice) {
		return <EmptyCart />;
	}
	const clearCart = () => {
		dispatch(clearItem());
	};
	return (
		<main>
			<div className="orderWrapper">
				<h2 className="orderTitle">Корзина</h2>
				{items.map((data: CartitemData, index: number) => (
					<OrderItem key={`${data.title}__${index}`} data={data}></OrderItem>
				))}

				<div className="orderConfirm">
					<div className="orderConfirm__top">
						<div className="orderConfirm__title">ИТОГО</div>
						<div className="orderConfirm__price">
							{totalPrice.toLocaleString("ru")} ₽
						</div>
					</div>
					<Link to={"/ordering"} className="orderConfirm__bottom">
						Перейти к оформлению
					</Link>
				</div>
				{totalPrice > 0 ? (
					<button onClick={() => clearCart()} className="clearCart">
						Очистить карзину
					</button>
				) : (
					""
				)}
			</div>
		</main>
	);
}
