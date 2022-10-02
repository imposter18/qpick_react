import React from "react";

const SliderImg: React.FC<any> = ({ img, onClick, carrentMainIng }) => {
	return (
		<img
			onClick={() => onClick(img)}
			className={`subSlider__img-item ${
				carrentMainIng == img ? "activeSliderItem" : " "
			}`}
			src={img}
			alt={img}
		/>
	);
};

export default SliderImg;
