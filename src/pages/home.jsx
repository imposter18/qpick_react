import React from "react";
import ProductCard from "../components/productCard";
import Sort from "../components/sort";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { addLike } from "../store/likeSlice";
import Skeleton from "../components/skeletonProdCard";
import { useNavigate } from "react-router-dom";
import { fetchPhones } from "../store/ActionCreators";
import qs from "qs";

export default function Home() {
	const dispatch = useAppDispatch();
	let { data: phonesData, status } = useAppSelector(
		(state) => state.fetchindDataSlice
	);
	const { choiceItem } = useAppSelector((state) => state.filterSlise);
	const likeUpdateInStore = (data: any) => {
		dispatch(addLike({ ...data, liked: true }));
	};
	const skeletons = [...new Array(10)].map((_, index) => (
		<Skeleton key={index} />
	));
	const items = phonesData.map((data: any, index: number) => (
		<ProductCard
			onClick={(data: any) => likeUpdateInStore(data)}
			key={`${data.id}_${index}`}
			data={data}
		></ProductCard>
	));

	const navigate = useNavigate();
	const { sort } = useAppSelector((state) => state.filterSlise);

	React.useEffect(() => {
		const sortBy = sort.sortProperty.replace("-", "");
		const order = sort.sortProperty.includes("-") ? "asc" : "desc";
		(async function () {
			await dispatch(fetchPhones({ sortBy, order, choiceItem }));
		})();
		const queryString = qs.stringify({
			sortBy: sortBy,
			order: order,
		});
		navigate(`?${queryString}`);
	}, [sort, choiceItem]);

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
						<div className="productList__select">
							{choiceItem === "phones" ? "Телефоны" : "Наушники"}
						</div>
						<Sort></Sort>
					</div>
				</div>
				<div className="wrapper">
					{status === "LOADING" ? skeletons : items}
				</div>
			</main>
		</>
	);
}
