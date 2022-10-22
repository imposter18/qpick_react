import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { useAppDispatch } from "../hooks/redux";
import { setChoiceItem, setSearchValue } from "../redux/Filter/filterSlise";
import type { LikeitemData } from "../redux/Likes/types";
import type { CartitemData } from "../redux/Cart/types";

export default function Header() {
	const dispatch = useAppDispatch();

	const { choiceItem: item } = useAppSelector((state) => state.filterSlise);
	const { totalCounter, items } = useAppSelector(
		(state) => state.addToCartSlice
	);
	const { value: likeData } = useAppSelector((state) => state.likeSlice);

	const choiceItem = (value: string) => {
		dispatch(setChoiceItem(value));
		dispatch(setSearchValue(""));
	};
	const isMounted = React.useRef(false);

	const writeInlocalStorage = (
		items: LikeitemData[] | CartitemData[],
		name: string
	) => {
		const json = JSON.stringify(items);
		localStorage.setItem(`${name}`, json);
	};

	React.useEffect(() => {
		if (isMounted.current) {
			writeInlocalStorage(items, "cart");
			writeInlocalStorage(likeData, "likes");
		}
		isMounted.current = true;
	}, [items, likeData]);

	return (
		<header className="header">
			<Link to={"/"} className="logo headerLogo">
				QPICK
			</Link>

			<div className="selectProduct header__select">
				<Link
					onClick={() => choiceItem("phones")}
					to={"/"}
					className={`selectProduct__phone ${
						item === "phones" ? "active" : null
					}`}
				>
					<svg
						width="15"
						height="21"
						viewBox="0 0 15 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.14286 2.1V18.9H12.8571V2.1H2.14286ZM1.07143 0H13.9286C14.2127 0 14.4853 0.110625 14.6862 0.307538C14.8871 0.504451 15 0.771523 15 1.05V19.95C15 20.2285 14.8871 20.4955 14.6862 20.6925C14.4853 20.8894 14.2127 21 13.9286 21H1.07143C0.787268 21 0.514746 20.8894 0.313814 20.6925C0.112883 20.4955 0 20.2285 0 19.95V1.05C0 0.771523 0.112883 0.504451 0.313814 0.307538C0.514746 0.110625 0.787268 0 1.07143 0ZM7.5 15.75C7.78416 15.75 8.05668 15.8606 8.25761 16.0575C8.45855 16.2544 8.57143 16.5215 8.57143 16.8C8.57143 17.0785 8.45855 17.3455 8.25761 17.5425C8.05668 17.7394 7.78416 17.85 7.5 17.85C7.21584 17.85 6.94332 17.7394 6.74239 17.5425C6.54145 17.3455 6.42857 17.0785 6.42857 16.8C6.42857 16.5215 6.54145 16.2544 6.74239 16.0575C6.94332 15.8606 7.21584 15.75 7.5 15.75Z"
							fill="#838383"
						/>
					</svg>
					Телефоны
				</Link>
				<Link
					onClick={() => choiceItem("headphones")}
					to={"/"}
					className={`selectProduct__headphone ${
						item === "headphones" ? "active" : null
					}`}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M1.52699 2.81568C2.47384 1.83595 3.87252 1 5.5 1C8.42358 1 11 3.1311 11 6V17C11 18.6569 9.65685 20 8 20C6.34315 20 5 18.6569 5 17V10.9737C3.58653 10.8246 2.37539 10.0622 1.52699 9.18432C1.15893 8.80348 1 8.31132 1 7.85087V4.14913C1 3.68868 1.15893 3.19652 1.52699 2.81568ZM7 10.8108V17C7 17.5523 7.44771 18 8 18C8.55229 18 9 17.5523 9 17V9.85658C8.41512 10.2937 7.73374 10.621 7 10.8108ZM9 6C9 4.45062 7.54698 3 5.5 3C4.58372 3 3.68747 3.47342 3 4.16985V7.83015C3.68747 8.52658 4.58372 9 5.5 9C5.63633 9 5.77052 8.99332 5.90221 8.98038C7.74335 8.79947 9 7.44709 9 6ZM18.5 6C16.453 6 15 7.45062 15 9C15 10.4471 16.2566 11.7995 18.0978 11.9804C18.2295 11.9933 18.3637 12 18.5 12C19.4163 12 20.3125 11.5266 21 10.8301V7.16985C20.3125 6.47342 19.4163 6 18.5 6ZM15 12.8566C15.5849 13.2937 16.2663 13.621 17 13.8108V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20V12.8566ZM19 13.9737C20.4135 13.8246 21.6246 13.0622 22.473 12.1843C22.8411 11.8035 23 11.3113 23 10.8509V7.14913C23 6.68868 22.8411 6.19652 22.473 5.81568C21.5262 4.83595 20.1275 4 18.5 4C15.5764 4 13 6.1311 13 9V20C13 21.6569 14.3431 23 16 23C17.6569 23 19 21.6569 19 20V13.9737Z"
							fill="#293644"
						/>
					</svg>
					Наушники{" "}
				</Link>
			</div>
			<div className="userMenu">
				<div className="userMenu__like">
					<Link to={"/likes"}>
						<svg
							width="23"
							height="20"
							viewBox="0 0 23 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.4867 1.65429C14.0706 -0.627558 18.0635 -0.551821 20.5528 1.90098C23.0409 4.35486 23.1267 8.2629 20.8124 10.812L11.4845 20L2.15892 10.812C-0.155442 8.2629 -0.0685429 4.34837 2.41851 1.90098C4.90996 -0.548575 8.89519 -0.630804 11.4867 1.65429ZM18.9952 3.42979C17.3452 1.80469 14.6833 1.73869 12.9563 3.26425L11.4878 4.56044L10.0183 3.26533C8.2858 1.73761 5.62935 1.80469 3.97498 3.43195C2.33601 5.04407 2.25351 7.62455 3.76379 9.32971L11.4856 16.937L19.2075 9.3308C20.7189 7.62455 20.6364 5.04732 18.9952 3.42979Z"
								fill="#838383"
							/>
						</svg>
					</Link>
					{likeData.length === 0 ? null : (
						<div className="userMenu__like-counter">{likeData.length}</div>
					)}
				</div>
				<div className="userMenu__cart">
					<Link to={"/Cart"}>
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.08589 6.04598L0.48584 2.50532L2.05663 0.959961L5.65556 4.50172H22.5757C22.7487 4.50171 22.9193 4.54149 23.074 4.61789C23.2286 4.69428 23.3629 4.80518 23.4662 4.94173C23.5695 5.07828 23.639 5.2367 23.669 5.40435C23.699 5.57199 23.6888 5.74422 23.6391 5.90729L20.9749 14.6443C20.9064 14.8693 20.7659 15.0667 20.5743 15.2069C20.3827 15.3472 20.1503 15.423 19.9114 15.423H6.30608V17.6072H18.5172V19.7915H5.19598C4.90157 19.7915 4.61921 19.6764 4.41103 19.4716C4.20284 19.2668 4.08589 18.989 4.08589 18.6993V6.04598ZM6.30608 6.68597V13.2387H19.0855L21.0837 6.68597H6.30608ZM5.75103 24.16C5.30941 24.16 4.88587 23.9874 4.5736 23.6801C4.26132 23.3729 4.08589 22.9562 4.08589 22.5218C4.08589 22.0873 4.26132 21.6706 4.5736 21.3634C4.88587 21.0562 5.30941 20.8836 5.75103 20.8836C6.19266 20.8836 6.61619 21.0562 6.92847 21.3634C7.24074 21.6706 7.41618 22.0873 7.41618 22.5218C7.41618 22.9562 7.24074 23.3729 6.92847 23.6801C6.61619 23.9874 6.19266 24.16 5.75103 24.16ZM19.0722 24.16C18.6306 24.16 18.207 23.9874 17.8948 23.6801C17.5825 23.3729 17.4071 22.9562 17.4071 22.5218C17.4071 22.0873 17.5825 21.6706 17.8948 21.3634C18.207 21.0562 18.6306 20.8836 19.0722 20.8836C19.5138 20.8836 19.9374 21.0562 20.2496 21.3634C20.5619 21.6706 20.7373 22.0873 20.7373 22.5218C20.7373 22.9562 20.5619 23.3729 20.2496 23.6801C19.9374 23.9874 19.5138 24.16 19.0722 24.16Z"
								fill="#838383"
							/>
						</svg>
					</Link>
					{totalCounter === 0 ? null : (
						<div className="userMenu__cart-counter">{totalCounter}</div>
					)}
				</div>
			</div>
		</header>
	);
}
