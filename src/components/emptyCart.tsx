import { Link } from "react-router-dom";

export default function EmptyCart() {
	return (
		<div className="emptyCartWrapper">
			<div className="emptyCart">
				<div className="emptyCart__logo">
					<img src="./assets/img/cart.png" alt="emptyCart" />
				</div>
				<div className="emptyCart__content">
					<div className="emptyCart__title">Корзина пуста</div>
					<div className="emptyCart__subTitle">
						Но это никогда не поздно исправить :)
					</div>
				</div>
				<Link to={"/"} className="emptyCart__button">
					<span>В каталог товаров</span>
				</Link>
			</div>
		</div>
	);
}
