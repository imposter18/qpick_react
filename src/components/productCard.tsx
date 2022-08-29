import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import IconIsLiked from "../assets/svg/iconIsLiked";
import IconLike from "../assets/svg/iconLike";

type productCardProps = {
	data: {
		id: number;
		title: string;
		rating: number;
		price: number;
		titleImageUrl: string;
	};
	onClick: any;
};

export default function ProductCard({ data, onClick }: productCardProps) {
	const { id, title, rating, price, titleImageUrl } = data;

	const likeData = useAppSelector((state) => state.likeSlice.value);

	const likeUpdate = (likeData: any) => {
		const likeDataItem = likeData.find((item: any) => item.id === id);
		if (likeDataItem) {
			return <IconIsLiked />;
		} else return <IconLike />;
	};
	console.log((1000000).toLocaleString("ru"));
	return (
		<div className="productCard">
			<div onClick={() => onClick(id)} className="productCard__like">
				{likeUpdate(likeData)}
			</div>
			<div>
				<Link to={`/phones/${id}`}>
					<div className="productCard__img">
						<img src={titleImageUrl} alt="phone" />
					</div>
					<div className="productCard__titlt">
						<h3>{title}</h3>
					</div>
				</Link>
			</div>

			<div className="productCard__raiting">
				<div className="productCard__ratingStar">
					<svg
						width="25"
						height="23"
						viewBox="0 0 25 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12.627 18.2497L5.41636 22.6079L7.37665 14.4742L0.960938 9.03564L9.38233 8.36796L12.627 0.647087L15.8716 8.36796L24.2943 9.03564L17.8773 14.4742L19.8376 22.6079L12.627 18.2497Z"
							fill="#FFCE7F"
						/>
					</svg>
				</div>
				<div className="productCard__ratingNam">{rating}</div>
				<div className="productCard__price">{price.toLocaleString("ru")} ₽</div>
			</div>
		</div>
	);
}
