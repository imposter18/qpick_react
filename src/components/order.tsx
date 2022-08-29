import { useAppSelector } from "../hooks/redux";
import EmptyCart from "./emptyCart";
import OrderItem from "./orderItem";

export default function Order() {
	const { items, totalPrice } = useAppSelector((state) => state.addToCartSlice);
	// console.log(items);
	if (!totalPrice) {
		return <EmptyCart />;
	}
	return (
		<main>
			<div className="orderWrapper">
				<div className="orderTitle">Корзина</div>
				{items.map((data: any, index: number) => (
					<OrderItem key={`${data.title}__${index}`} data={data}></OrderItem>
				))}

				<div className="orderConfirm">
					<div className="orderConfirm__top">
						<div className="orderConfirm__title">ИТОГО</div>
						<div className="orderConfirm__price">
							{totalPrice.toLocaleString("ru")} ₽
						</div>
					</div>
					<button className="orderConfirm__bottom">Перейти к оформлению</button>
				</div>
			</div>
		</main>
	);
}
