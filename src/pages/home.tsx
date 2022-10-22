import React, { useEffect } from "react";
import ProductCard from "../components/productCard";
import Sort from "../components/sort";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { addLike } from "../redux/Likes/likeSlice";
import Skeleton from "../components/skeletonProdCard";
import { useNavigate } from "react-router-dom";
import { fetchPhones } from "../redux/FetchingData/ActionCreators";
import qs from "qs";
import Search from "../components/Search/search";
import type { itemData } from "../redux/FetchingData/types";
import userEvent from "@testing-library/user-event";

export default function Home() {
	const dispatch = useAppDispatch();

	const { data: phonesData, status } = useAppSelector(
		(state) => state.fetchindDataSlice
	);
	const { choiceItem, searchValue } = useAppSelector(
		(state) => state.filterSlise
	);
	const { sort } = useAppSelector((state) => state.filterSlise);

	const likeUpdateInStore = (data: itemData) => {
		dispatch(addLike({ ...data, liked: true }));
	};
	const skeletons = [...new Array(9)].map((_, index) => (
		<Skeleton key={index} />
	));

	const navigate = useNavigate();

	React.useEffect(() => {
		const sortBy = sort.sortProperty.replace("-", "");
		const order = sort.sortProperty.includes("-") ? "asc" : "desc";
		(async function () {
			await dispatch(fetchPhones({ sortBy, order, choiceItem, searchValue }));
		})();

		// const testSearchValue = (
		// 	category: string,
		// 	sortBy: string,
		// 	order: string,
		// 	searchValue: string
		// ) => {
		// 	if (searchValue) {
		// 		return {
		// 			category,
		// 			sortBy,
		// 			order,
		// 			search: searchValue,
		// 		};
		// 	} else {
		// 		return {
		// 			category,
		// 			sortBy,
		// 			order,
		// 		};
		// 	}
		// };

		// const queryString = qs.stringify(
		// 	testSearchValue(choiceItem, sortBy, order, searchValue)
		// );
		// navigate(`?${queryString}`);
	}, [sort, choiceItem, searchValue]);

	useEffect(() => {
		const sortBy = sort.sortProperty.replace("-", "");
		const order = sort.sortProperty.includes("-") ? "asc" : "desc";
		const testSearchValue = (
			category: string,
			sortBy: string,
			order: string,
			searchValue: string
		) => {
			if (searchValue) {
				return {
					category,
					sortBy,
					order,
					search: searchValue,
				};
			} else {
				return {
					category,
					sortBy,
					order,
				};
			}
		};

		const queryString = qs.stringify(
			testSearchValue(choiceItem, sortBy, order, searchValue)
		);
		navigate(`?${queryString}`);
	}, [choiceItem, searchValue]);

	const items = phonesData.map((data: itemData, index: number) => (
		<ProductCard
			onClick={(data: itemData) => likeUpdateInStore(data)}
			key={`${data.id}_${index}`}
			data={data}
		></ProductCard>
	));

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
						<Search></Search>
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
