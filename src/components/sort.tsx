import { useState } from "react";

export default function Sort() {
	const [open, setOpen] = useState(false);
	const sortList: any = [
		{ name: "популярности (DESC)", sortProperty: "rating" },
		{ name: "популярности (ASC)", sortProperty: "-rating" },
		{ name: "цене (DESC)", sortProperty: "price" },
		{ name: "цене (ASC)", sortProperty: "-price" },
		{ name: "алфавиту (DESC)", sortProperty: "title" },
		{ name: "алфавиту (ASC)", sortProperty: "-title" },
	];

	const onClickListItem = (obj: any) => {
		setOpen(false);
	};
	return (
		<div className="productList__sort sort">
			<div className="sort__lable">
				Сортировать по:
				<svg
					version="1.1"
					id="Layer_1"
					width="24"
					height="24"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					fill="black"
					viewBox="0 0 330 200"
					// style="enable-background:new 0 0 330 330;"
					xmlSpace="preserve"
				>
					<path
						id="XMLID_225_"
						d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
					/>
				</svg>
				<span onClick={() => setOpen(!open)}>клик</span>
			</div>
			{open && (
				<div className="sort__list">
					<ul>
						{sortList.map((obj: any, i: number) => (
							<li key={i} onClick={() => onClickListItem(obj)}>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
