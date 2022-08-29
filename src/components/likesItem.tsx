import { title } from "process";
import { Link } from "react-router-dom";

export default function LikesItem({ data }: any) {
	const { id, title, titleImageUrl, price } = data;
	return (
		<>
			<div className="likeItem orderItem">
				<Link to={`/phones/${id}`}>
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
}
