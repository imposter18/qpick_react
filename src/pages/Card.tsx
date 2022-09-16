import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { useAppDispatch } from "../hooks/redux";
import { addItemCart } from "../redux/Cart/addToCartSlice";
import { addLike } from "../redux/Likes/likeSlice";
import IconIsLiked from "../assets/svg/iconIsLiked";
import IconLike from "../assets/svg/iconLike";
import { fetchOneitem } from "../redux/FetchingData/ActionCreators";
import SkeletonCard from "../components/skeletonCard";
import { LikeitemData } from "../redux/Likes/types";
import { itemData } from "../redux/FetchingData/types";

const Card: React.FC = () => {
	const dispatch = useAppDispatch();
	const [onePhoneData, setOnePhoneData] = useState<itemData>();
	// const { choiceItem } = useAppSelector((state) => state.filterSlise);

	const addToCart = (onePhoneData: itemData) => {
		dispatch(addItemCart(onePhoneData));
	};

	const likeData = useAppSelector((state) => state.likeSlice.value);

	const likeUpdateInStore = (onePhoneData: itemData) => {
		dispatch(addLike({ ...onePhoneData, liked: true }));
	};

	const likeUpdate = (likeData: LikeitemData[]) => {
		const likeDataItem = likeData.find((item: any) => item.id === id);
		if (likeDataItem) {
			return <IconIsLiked />;
		} else return <IconLike />;
	};

	const getLok = useLocation().pathname;

	useEffect(() => {
		(async function set() {
			const res = await fetchOneitem(getLok);
			if (res) {
				setOnePhoneData(res.data);
			}
		})();
	}, []);

	if (!onePhoneData) {
		return <SkeletonCard></SkeletonCard>;
	}
	const { id, price, title, characteristics, titleImageUrl } = onePhoneData;
	return (
		<>
			<main>
				<div className="productWrapper">
					<div className="productMain">
						<div
							onClick={() => likeUpdateInStore(onePhoneData)}
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
};

export default Card;
