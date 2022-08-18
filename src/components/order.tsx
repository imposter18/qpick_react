export default function Order() {
	return (
		<main>
			<div className="orderWrapper">
				<div className="orderTitle">Корзина</div>
				<div className="orderItem">
					<div className="orderItem__img">
						<img src="../assets/img/Image.png" alt="card item" />
					</div>
					<div className="orderItem__infoBlock">
						<div className="orderItem__title">Apple BYZ S852I</div>
						<div className="orderItem__price">2 999 ₽</div>
					</div>
					<div className="orderItem__counter counter">
						<div className="counter__minus">-</div>
						<div className="counter__value">1</div>
						<div className="counter__plus">+</div>
					</div>
					<div className="orderItem__value">2 999 ₽</div>
				</div>
				<div className="orderConfirm">
					<div className="orderConfirm__top">
						<div className="orderConfirm__title">ИТОГО</div>
						<div className="orderConfirm__price">2 999 ₽</div>
					</div>
					<div className="orderConfirm__bottom">Перейти к оформлению</div>
				</div>
			</div>
		</main>
	);
}
