import LikesItem from "./likesItem";
import { useAppSelector } from "../hooks/redux";
import { LikeitemData } from "../redux/Likes/types";

export default function Likes() {
	const likeData = useAppSelector((state) => state.likeSlice.value);

	if (likeData.length <= 0 && likeData != undefined) {
		return (
			<h2 className="LikesTitle"> Пока, вы не поставили ни одного лайка </h2>
		);
	}
	return (
		<>
			<h2 className="LikesTitle"> Вам понравилось: </h2>
			<div className="likeItemWrapper">
				{likeData.map((data: LikeitemData, index: number) => {
					return <LikesItem key={index} data={data}></LikesItem>;
				})}
			</div>
		</>
	);
}
