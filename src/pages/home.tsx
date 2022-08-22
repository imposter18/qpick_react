import React from "react";
import ProductCard from "../components/productCard";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { togleLike } from "../store/likeSlice";

export default function Home() {
	const dispatch = useAppDispatch();
	let phonesData = useAppSelector((state) => state.phoneDataReducer.data);
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
						<div className="productList__items">
							По популярности
							<svg
								version="1.1"
								id="Layer_1"
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								// xmlns:xlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								fill="black"
								viewBox="0 0 330 200"
								// style="enable-background:new 0 0 330 330;"
								// xml:space="preserve"
							>
								<path
									id="XMLID_225_"
									d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
								/>
							</svg>
						</div>
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
