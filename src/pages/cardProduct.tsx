import React from "react";
import { useAppSelector } from "../hooks/redux";
import { useAppDispatch } from "../hooks/redux";
import { addItemCart } from "../store/userSlice";

export default function Card() {
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.cardReduser.value);
	const { price, title, characteristics, titleImageUrl, ImagesUrl } = data;

	const addToCart = (data: object) => {
		dispatch(addItemCart(data));
	};
	return (
		<>
			<main>
				<div className="productWrapper">
					<div className="productMain">
						<div className="productMain__like">
							<svg
								width="20"
								height="19"
								viewBox="0 0 20 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z"
									fill="#1C1C27"
								/>
							</svg>
						</div>
						<h2 className="productMain__title title">{title}</h2>
						<div className="productMain__slider">
							<div className="slider">
								<img src={titleImageUrl} alt="iphone13" />
							</div>
						</div>
						<div className="productMain__price price">{price} ₽</div>
					</div>
					<div className="productWrapper__button ButtonBlock">
						<a href="#" className="productButton">
							Купить!
						</a>
						<div onClick={() => addToCart(data)} className="productButton">
							Добавить в карзину
						</div>
					</div>
				</div>
				<div className="productAbout">
					<h3 className="productAbout__titlt title">
						Описание и характеристики
					</h3>
					<div className="productAbout__content">
						{characteristics.map((item: string): React.ReactNode => {
							return <p>{item}</p>;
						})}
					</div>
				</div>
			</main>
		</>
	);
}
