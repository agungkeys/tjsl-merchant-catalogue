import React, { useState} from "react";
import Slider from "react-slick";
import { Card, Image } from '@nextui-org/react';
import { NextLink } from "..";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Carousel(props) {
  const { items } = props;

	const NextArrow = ({ onClick }) => {
		return (
			<div
				style={{ backgroundColor: '#fafafa', borderRadius: '2em', height: 'auto'}}
				className="arrow next"
				onClick={onClick}
			>
				<div style={{ height: '1em', display: 'flex', alignItems: 'center' }}>
					<BiChevronRight />
				</div>
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div
				style={{ backgroundColor: '#fafafa', borderRadius: '2em', height: 'auto' }}
				className="arrow prev"
				onClick={onClick}
			>
				<div style={{ height: '1em', display: 'flex', alignItems: 'center' }}>
					<BiChevronLeft />
				</div>
			</div>
		);
	};

	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		infinite: true,
		lazyLoad: true,
		autoplay: true,
		autoPlaySpeed: 6000,
		speed: 1500,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
    className: "center",
		centerMode: true,
		centerPadding: '320px',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="" style={{ width: '100%'}}>
			{items && (
				<Slider {...settings}>
					{items &&
						items.map((banner, idx) => (
							<NextLink
								key={idx}
								link={banner.link}
							>
								<div
                  style={{ borderRadius: '1em' }}
									className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
								>
                  <Card variant="flat" css={{ background: "white"}}>
                    <Image
                      src={banner && banner.image}
                      alt={banner.title}
                      css={{ borderRadius: '1em', width: '100%' }}
                    />
                  </Card>
								</div>
							</NextLink>
						))}
				</Slider>
			)}
		</div>
	);
}

export default Carousel;