import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
	<ContentLoader
		className="productCard"
		speed={2}
		width={350}
		height={430}
		viewBox="0 0 350 430"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="35" y="43" rx="8" ry="8" width="300" height="280" />
		<circle cx="22" cy="21" r="13" />
		<rect x="35" y="397" rx="0" ry="0" width="76" height="30" />
		<rect x="34" y="338" rx="0" ry="0" width="300" height="44" />
		<rect x="235" y="396" rx="0" ry="0" width="101" height="29" />
	</ContentLoader>
);

export default Skeleton;
