import React, { cloneElement, useEffect, useState } from "react";
import SliderImg from "./sliderImg";

type sliderPrors = {
	images: string[],
};

const width = 100;
const TRANSITION_DURING = 300;

const Slider: React.FC<sliderPrors> = ({ images }) => {
	const [carrentMainIng, setCarrentMainIng] = useState(images[0]);
	const [sliderItems, setSliderItems] = useState([]);
	const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 });
	const [offset, setOffset] = useState(-300);
	const [taransitionDuring, setTaransitionDuring] = useState(TRANSITION_DURING);

	// useEffect(() => {
	// 	setOffset(-clonesCount.head * width);
	// }, [clonesCount]);

	useEffect(() => {
		setSliderItems([
			images[images.length - 3],
			images[images.length - 2],
			images[images.length - 1],

			...images,
			images[0],
			images[1],
			images[2],
		]);
		setClonesCount({ head: 3, tail: 3 });
	}, [images, offset]);

	useEffect(() => {
		if (offset == 0) {
			setTimeout(() => {
				setTaransitionDuring(0);
				setOffset(-(width * (sliderItems.length - 3 - clonesCount.tail)));
			}, TRANSITION_DURING);
			return;
		}
		if (offset == -(width * (sliderItems.length - 3))) {
			setTimeout(() => {
				setTaransitionDuring(0);
				setOffset(-(clonesCount.head * width));
			}, TRANSITION_DURING);
			return;
		}
	}, [offset, sliderItems, clonesCount]);

	// console.log(sliderItems);
	useEffect(() => {
		if (taransitionDuring === 0) {
			setTimeout(() => {
				setTaransitionDuring(TRANSITION_DURING);
			}, 10);
		}
	}, [taransitionDuring]);

	const arrowLeftClick = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset + width;
			return Math.min(newOffset, 0);
		});
	};

	const arrowRightClick = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset - width;
			const maxOffset = -(width * (sliderItems.length - 2));
			return Math.max(newOffset, maxOffset);
		});
	};
	const chooceOneSlide = (item) => {
		setCarrentMainIng(item);
	};
	return (
		<>
			<div className="slider">
				<img src={carrentMainIng} alt="iphone13" />
			</div>
			<div className="subSlider">
				<svg
					onClick={arrowLeftClick}
					className="svgLeft"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 386.258 386.258"
					xmlSpace="preserve"
				>
					<polygon points="96.879,193.129 289.379,386.258 289.379,0 " />
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
				</svg>
				<div className="subSlider__window">
					<div
						style={{
							transitionDuration: `${taransitionDuring}ms`,
							transform: `translateX(${offset}px)`,
						}}
						className="subSlider__carousel"
					>
						{sliderItems.map((item: any, index: number) => (
							<SliderImg
								carrentMainIng={carrentMainIng}
								onClick={() => chooceOneSlide(item)}
								key={`${item}__${index}`}
								img={item}
							></SliderImg>
						))}
					</div>
				</div>
				<svg
					onClick={arrowRightClick}
					className="svgRight"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 386.258 386.258"
					xmlSpace="preserve"
				>
					<polygon points="96.879,193.129 289.379,386.258 289.379,0 " />
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
				</svg>
			</div>
		</>
	);
};

export default Slider;
