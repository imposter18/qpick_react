export default function EmptyCart() {
	return (
		<main>
			<div className="emptyCartWrapper">
				<div className="emptyCart">
					<div className="emptyCart__logo">
						<img src="../assets/img/cart.png" alt="cart" />
					</div>
					<div className="emptyCart__content">
						<div className="emptyCart__title">Корзина пуста</div>
						<div className="emptyCart__subTitle">
							Но это никогда не поздно исправить :)
						</div>
					</div>
					<div className="emptyCart__button">
						<div>В каталог товаров</div>
					</div>
				</div>
			</div>
		</main>
	);
}
