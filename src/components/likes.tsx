import LikesItem from "./likesItem";
import { useAppSelector } from "../hooks/redux";

export default function Likes() {
	let likeData = useAppSelector((state) => state.likeSlice.value);

	const { data } = useAppSelector((state) => state.fetchindDataSlice);

	likeData = data.filter((element: any) => {
		return likeData.some((item: any) => {
			return item.id === element.id;
		});
	});
	console.log(![]);
	if (likeData.length <= 0) {
		return (
			<h2 className="LikesTitle"> Пока, вы не поставили ни одного лайка </h2>
		);
	}
	return (
		<>
			<h2 className="LikesTitle"> Вам понравилось: </h2>
			<div className="likeItemWrapper">
				{likeData.map((item: any, index: number): any => {
					return <LikesItem key={index} data={item}></LikesItem>;
				})}
			</div>
		</>
	);
}
