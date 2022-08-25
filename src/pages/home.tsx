import React from "react";
import ProductCard from "../components/productCard";
import Sort from "../components/sort";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { togleLike } from "../store/likeSlice";

export default function Home() {
	const dispatch = useAppDispatch();
	let phonesData = useAppSelector((state) => state.fetchindDataSlice.data);
	let likes = useAppSelector((state) => state.likeSlice.value);

	const likeUpdateInStore = (id: number) => {
		const cloneLikes = likes.map((item: any) => {
			return { id: item.id, liked: item.liked };
		});
		for (let i = 0; i < cloneLikes.length; i++) {
			if (cloneLikes[i].id === id) {
				cloneLikes[i].liked = !cloneLikes[i].liked;
			}
		}
		dispatch(togleLike(cloneLikes));
	};

	return (
		<>
			<div className="bannerWrapper">
				<article className="banner">
					<img
						src="../assets/img/iPhone-13-Pro-Max-silver-1000x1000 1.png"
						alt="iphone"
					/>
					<h1>
						Выбор покупателей
						<br />
						Iphone 13 Pro Max
					</h1>
				</article>
			</div>
			<main>
				<div className="productListWrapper">
					<div className="productList">
						<div className="productList__select">Телефоны</div>
						<Sort></Sort>
					</div>
				</div>
				<div className="wrapper">
					{phonesData.map((data: any, index: number) => (
						<ProductCard
							onClick={(id: number) => likeUpdateInStore(id)}
							key={`${data.id}_${index}`}
							data={data}
						></ProductCard>
					))}
				</div>
			</main>
		</>
	);
}
