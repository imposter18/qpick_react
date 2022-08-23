import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { useAppDispatch } from "../hooks/redux";
import { addItemCart } from "../store/addToCartSlice";
import { togleLike } from "../store/likeSlice";
import IconIsLiked from "../assets/svg/iconIsLiked";
import IconLike from "../assets/svg/iconLike";
import { fetchOnePhone } from "../store/ActionCreators";

export default function Card() {
	const dispatch = useAppDispatch();
	const [onePhoneData, setonePhoneData] = useState();
	// const data = useAppSelector((state) => state.cardReduser.value);

	const addToCart = (onePhoneData) => {
		dispatch(addItemCart(onePhoneData));
	};

	let likeData = useAppSelector((state) => state.likeSlice.value);

	const likeUpdateInStore = (id) => {
		const cloneLikes = likeData.map((item) => {
			return { id: item.id, liked: item.liked };
		});
		for (let i = 0; i < cloneLikes.length; i++) {
			if (cloneLikes[i].id === id) {
				cloneLikes[i].liked = !cloneLikes[i].liked;
			}
		}
		dispatch(togleLike(cloneLikes));
	};

	const likeUpdate = (likeData) => {
		const likeDataItem = likeData.find((item) => item.id == id);
		if (likeDataItem !== undefined) {
			if (likeDataItem.liked === true) {
				return <IconIsLiked />;
			} else return <IconLike />;
		}
	};
	let getUrl = useParams();
	getUrl = getUrl.id;

	useEffect(() => {
		(async function set() {
			const res = await fetchOnePhone(getUrl);
			setonePhoneData(res.data);
		})();
	}, []);
	console.log(onePhoneData);

	if (!onePhoneData) {
		return <>Загрузка...</>;
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
						<div className="productMain__price price">{price} ₽</div>
					</div>
					<div className="productWrapper__button ButtonBlock">
						<a href="#" className="productButton">
							Купить!
						</a>
						<div
							onClick={() => addToCart(onePhoneData)}
							className="productButton"
						>
							Добавить в карзину
						</div>
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
