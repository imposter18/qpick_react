import React from "react";
import { Link } from "react-router-dom";
import { LikeitemData } from "../redux/Likes/types";

interface LikesItems {
	data: LikeitemData;
}

const LikesItem: React.FC<LikesItems> = ({ data }) => {
	const { id, types, title, titleImageUrl, price } = data;
	return (
		<>
			<div className="likeItem orderItem">
				<Link to={`/${types}/${id}`}>
					<div className="likeItem__img ">
						<img src={titleImageUrl} alt="card item" />
					</div>
				</Link>
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
