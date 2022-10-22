import React from "react";

type SliderImgPrors = {
	onClick: (img: string) => void;
	img: string;
	carrentMainIng: string;
};

const SliderImg: React.FC<SliderImgPrors> = ({
	img,
	onClick,
	carrentMainIng,
}) => {
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
