import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconWrite from "../assets/svg/iconWrite";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
	upSity,
	upStreet,
	upBuilding,
	upEntrance,
	upFlat,
	upPhoneNum,
	clearOrderInput,
} from "../redux/orderInfo/orderInfoSlice";
import { clearItem } from "../redux/Cart/addToCartSlice";

const Ordering = () => {
	const dispatch = useAppDispatch();
	const [phoneFormError, setPhoneFormError] = useState(true);
	const [addressFormError, setAddressFormError] = useState(true);
	const [validForm, setValidForm] = useState(true);
	const [checkValidForm, setCheckValidForm] = useState(false);

	const { sity, street, building, entrance, flat, phoneNum } = useAppSelector(
		(state) => state.orderInfo
	);

	useEffect(() => {
		if (!phoneFormError && !addressFormError) {
			setValidForm(false);
		} else setValidForm(true);
	}, [phoneFormError, addressFormError]);

	useEffect(() => {
		if ((sity && street && building) !== "") {
			setAddressFormError(false);
		} else setAddressFormError(true);
	}, [sity, street, building]);

	useEffect(() => {
		const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
		if (reg.test(phoneNum)) {
			setPhoneFormError(false);
		} else setPhoneFormError(true);
	}, []);

	const upInputPhoneNumber = (value: string) => {
		dispatch(upPhoneNum(value));
		const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
		if (reg.test(value)) {
			setPhoneFormError(false);
		} else setPhoneFormError(true);
	};
	const clearOrderData = () => {
		dispatch(clearOrderInput());
		dispatch(clearItem());
	};

	const { items, totalPrice } = useAppSelector((state) => state.addToCartSlice);

	const calcCost = (price: number, count: number): number => {
		return price * count;
	};
	const deliveryPrice = 500;

	const overallPrice = deliveryPrice + totalPrice;

	return (
		<div className="orderingWrapper">
			<h2 className="orderingTitle">Оформление заказа</h2>
			<div className="ordering">
				<div className="ordering__left-menu">
					<div className="addresBlock">
						<div className="addresBlock__header">
							<div className="addresBlock__title">Доставка курьером</div>
							<div className="addresBlock__delivery">500 р</div>
						</div>
						<div className="addresBlock__map">
							<div style={{ position: "relative", overflow: "hidden" }}>
								<a
									href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
									style={{
										color: "#eee",
										fontSize: "12px",
										position: "absolute",
										top: "0px",
									}}
								>
									Санкт‑Петербург
								</a>
								<a
									href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.344981%2C59.927359&utm_medium=mapframe&utm_source=maps&z=14.8"
									style={{
										color: "#eee",
										fontSize: "12px",
										position: "absolute",
										top: "14px",
									}}
								>
									Яндекс Карты — транспорт, навигация, поиск мест
								</a>
								<iframe
									src="https://yandex.ru/map-widget/v1/-/CCUZUSgmDB"
									max-width="370"
									height="150"
									frameBorder="1"
									allowFullScreen
									style={{ position: "relative" }}
								></iframe>
							</div>
						</div>
						<div className="addresBlock__inputs inputsBlock">
							<div className="inputsBlock__title">
								<svg
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.0379 22L3.70937 15.5563C2.25993 14.2819 1.27286 12.6581 0.872967 10.8905C0.473076 9.12277 0.678327 7.29051 1.46277 5.62539C2.2472 3.96027 3.5756 2.53707 5.27996 1.53576C6.98433 0.534448 8.98812 0 11.0379 0C13.0878 0 15.0916 0.534448 16.7959 1.53576C18.5003 2.53707 19.8287 3.96027 20.6131 5.62539C21.3976 7.29051 21.6028 9.12277 21.2029 10.8905C20.803 12.6581 19.816 14.2819 18.3665 15.5563L11.0379 22ZM16.7382 14.1246C17.8655 13.1333 18.6331 11.8704 18.9441 10.4956C19.2551 9.12075 19.0954 7.69569 18.4852 6.40064C17.8751 5.10558 16.8419 3.99868 15.5163 3.21991C14.1907 2.44114 12.6322 2.02548 11.0379 2.02548C9.44367 2.02548 7.88519 2.44114 6.55959 3.21991C5.23399 3.99868 4.20079 5.10558 3.59065 6.40064C2.98051 7.69569 2.82083 9.12075 3.1318 10.4956C3.44277 11.8704 4.21042 13.1333 5.33768 14.1246L11.0379 19.1366L16.7382 14.1246ZM11.0379 11.1377C10.4271 11.1377 9.8413 10.9243 9.40938 10.5445C8.97746 10.1648 8.73481 9.64969 8.73481 9.11262C8.73481 8.57554 8.97746 8.06047 9.40938 7.6807C9.8413 7.30093 10.4271 7.08757 11.0379 7.08757C11.6488 7.08757 12.2346 7.30093 12.6665 7.6807C13.0984 8.06047 13.3411 8.57554 13.3411 9.11262C13.3411 9.64969 13.0984 10.1648 12.6665 10.5445C12.2346 10.9243 11.6488 11.1377 11.0379 11.1377Z"
										fill="#101010"
									/>
								</svg>
								<span>Адрес доставки</span>
							</div>

							<div className="inputsBlock__content">
								<form>
									<input
										value={sity}
										onChange={(e) => dispatch(upSity(e.target.value))}
										placeholder="Город"
										className="input-sity"
										autoFocus
									></input>
									<IconWrite className={"svg-input-sity"}></IconWrite>
									<input
										placeholder="Улица / Район"
										className="input-street"
										value={street}
										onChange={(e) => dispatch(upStreet(e.target.value))}
									></input>
									<IconWrite className={"svg-input-street"}></IconWrite>
									<input
										placeholder="Дом"
										className="input-building"
										value={building}
										onChange={(e) => dispatch(upBuilding(e.target.value))}
									></input>
									<IconWrite className={"svg-input-building"}></IconWrite>
									<input
										placeholder="Подезд"
										className="input-entrance"
										value={entrance}
										onChange={(e) => dispatch(upEntrance(e.target.value))}
									></input>
									<IconWrite className={"svg-input-entrance"}></IconWrite>
									<input
										placeholder="Квартира"
										className="input-flat"
										value={flat}
										onChange={(e) => dispatch(upFlat(e.target.value))}
									></input>
									<IconWrite className={"svg-input-flat"}></IconWrite>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="ordering__right-menu">
					<div className="orderItems">
						<div className="orderItems__title">Ваш заказ</div>
						<div className="orderItems__delivery">
							<span>Доставка</span>
							<span>{deliveryPrice} ₽</span>
						</div>

						{items.map((item, index) => {
							return (
								<div key={index} className="orderItems__content">
									<span>
										<span>{item.count}x </span>
										{item.title}
									</span>
									<span>
										{calcCost(item.price, item.count).toLocaleString("ru")} ₽
									</span>
								</div>
							);
						})}

						<div className="orderItems__price">
							<span>К оплате</span>
							<span>{overallPrice.toLocaleString("ru")} ₽</span>
						</div>
					</div>
					<div className="paymentMethod">
						<div className="paymentMethod__title">Способ оплаты</div>
						<div className="paymentMethod__content">
							Наличными при получении
						</div>
					</div>
					<div className="userPhoneNumber">
						<span>Номер получателя</span>
						<input
							type="number"
							placeholder="+7 ___ ___ __ __"
							value={phoneNum}
							onChange={(e) => upInputPhoneNumber(e.target.value)}
						></input>
						<IconWrite className={"svg-userPhoneNumber"}></IconWrite>
					</div>

					{checkValidForm && phoneFormError && (
						<span className="formError">Укажите корректный номер телефона</span>
					)}

					{checkValidForm && addressFormError && (
						<span className="formError formError2">
							Укажите корректный адрес
						</span>
					)}
					<div onClick={() => setCheckValidForm(true)}>
						<Link
							to={"/ordering/orderConfirmed"}
							state={{ data: overallPrice }}
							style={validForm ? { pointerEvents: "none" } : undefined}
							onClick={() => clearOrderData()}
							className="ordering__button"
						>
							Закончить оформление
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Ordering;
