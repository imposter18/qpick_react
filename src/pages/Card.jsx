import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { useAppDispatch } from "../hooks/redux";
import { addItemCart } from "../store/addToCartSlice";
import { addLike } from "../store/likeSlice";
import IconIsLiked from "../assets/svg/iconIsLiked";
import IconLike from "../assets/svg/iconLike";
import { fetchOnePhone } from "../store/ActionCreators";

export default function Card() {
	const dispatch = useAppDispatch();
	const [onePhoneData, setonePhoneData] = useState();

	const addToCart = (onePhoneData) => {
		dispatch(addItemCart(onePhoneData));
	};

	let likeData = useAppSelector((state) => state.likeSlice.value);

	const likeUpdateInStore = (id) => {
		dispatch(addLike({ id, liked: true }));
	};

	const likeUpdate = (likeData) => {
		const likeDataItem = likeData.find((item: any) => item.id === id);
		if (likeDataItem) {
			return <IconIsLiked />;
		} else return <IconLike />;
	};
	let getUrl = useParams();
	getUrl = getUrl.id;

	useEffect(() => {
		(async function set() {
			const res = await fetchOnePhone(getUrl);
			setonePhoneData(res.data);
		})();
	}, []);
	// console.log(onePhoneData);

	if (!onePhoneData) {
		return <h1>Загрузка...</h1>;
	}
	const { id, price, title, characteristics, titleImageUrl, ImagesUrl } =
		onePhoneData;
	return (
		<>
			<main>
				<div className="productWrapper">
					<div className="productMain">
						<div
							onClick={() => likeUpdateInStore(id)}
							className="productMain__like"
						>
							{likeUpdate(likeData)}
						</div>
						<h2 className="productMain__title title">{title}</h2>
						<div className="productMain__slider">
							<div className="slider">
								<img src={titleImageUrl} alt="iphone13" />
							</div>
						</div>
						<div className="productMain__price price">
							{price.toLocaleString("ru")} ₽
						</div>
					</div>
					<div className="productWrapper__button ButtonBlock">
						<Link
							to={"/cart"}
							onClick={() => addToCart(onePhoneData)}
							className="productButton"
						>
							Купить!
						</Link>
						<button
							onClick={() => addToCart(onePhoneData)}
							className="productButton"
						>
							Добавить в карзину
						</button>
					</div>
				</div>
				<div className="productAbout">
					<h3 className="productAbout__titlt title">
						Описание и характеристики
					</h3>
					<div className="productAbout__content">
						{characteristics.map(
							(item: string, index: number): React.ReactNode => {
								return <p key={`${item}__${index}`}>{item}</p>;
							}
						)}
					</div>
				</div>
			</main>
		</>
	);
}
