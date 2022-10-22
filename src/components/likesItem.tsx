import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { LikeitemData } from "../redux/Likes/types";
import IconIsLiked from "../assets/svg/iconIsLiked";
import IconLike from "../assets/svg/iconLike";
import { addLike } from "../redux/Likes/likeSlice";

interface LikesItems {
	data: LikeitemData;
}

const LikesItem: React.FC<LikesItems> = ({ data }) => {
	const dispatch = useAppDispatch();
	const { id, types, title, titleImageUrl, price } = data;

	// const likeData = useAppSelector((state) => state.likeSlice.value);

	// const likeUpdate = (likeData: LikeitemData[]) => {
	// 	const likeDataItem = likeData.find((item: LikeitemData) => item.id === id);
	// 	if (likeDataItem) {
	// 		return <IconIsLiked />;
	// 	} else return <IconLike />;
	// };

	const likeUpdateInStore = (data: LikeitemData) => {
		dispatch(addLike({ ...data, liked: true }));
	};

	return (
		<>
			<div className="likeItem orderItem">
				<Link to={`/${types}/${id}`}>
					<div className="likeItem__img ">
						<img src={titleImageUrl} alt="card item" />
					</div>
				</Link>
				<div onClick={() => likeUpdateInStore(data)} className="likeItem__like">
					<IconIsLiked />
				</div>
				<div className="orderItem__infoBlock">
					<Link to={`/phones/${id}`} className="orderItem__title">
						{title}
					</Link>
					<div className="orderItem__price">{price.toLocaleString("ru")} ₽</div>
				</div>

				{/* <div className="orderItem__value">{calcCost(price, count)} ₽</div> */}
			</div>
		</>
	);
};
export default LikesItem;
