import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCard = (props) => (
	<ContentLoader
		speed={2}
		width={1180}
		height={668}
		viewBox="0 0 1180 668"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="830" y="620" rx="5" ry="5" width="254" height="45" />
		<rect x="830" y="560" rx="5" ry="5" width="254" height="45" />
		<rect x="0" y="0" rx="50" ry="50" width="800" height="668" />
	</ContentLoader>
);

export default SkeletonCard;
