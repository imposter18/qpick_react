import { useLocation } from "react-router-dom";

export default function OrderConfirmed() {
	type LocationState = {
		data: number;
	};

	const location = useLocation();
	const { data } = location.state as LocationState;
	return (
		<main>
			<div className="orderConfirmedWrapper">
				<div className="orderConfirmed">
					Ваш заказ на сумму {data.toLocaleString("ru")} ₽ сформирован, с Вами
					свяжется наш менеджер!
				</div>
			</div>
		</main>
	);
}
