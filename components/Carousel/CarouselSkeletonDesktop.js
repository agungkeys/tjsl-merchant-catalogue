import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton } from '@chakra-ui/react';
import Slider from 'react-slick';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function CarouselSkeletonDesktop() {
  const NextArrow = ({ onClick }) => {
    return (
      <Box
        sx={{
          backgroundColor: '#fafafa',
          borderRadius: '4px',
          height: 'auto',
        }}
        className="arrow next"
        onClick={onClick}
      >
        <Box sx={{ height: '1em', display: 'flex', alignItems: 'center' }}>
          <BiChevronRight />
        </Box>
      </Box>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <Box
        sx={{
          backgroundColor: '#fafafa',
          borderRadius: '4',
          height: 'auto',
        }}
        className="arrow prev"
        onClick={onClick}
      >
        <Box sx={{ height: '1em', display: 'flex', alignItems: 'center' }}>
          <BiChevronLeft />
        </Box>
      </Box>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    speed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: 'carousel center',
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
    <Slider {...settings}>
      <Skeleton height="259px" borderRadius="1em" />
      <Skeleton height="259px" borderRadius="1em" />
      <Skeleton height="259px" borderRadius="1em" />
    </Slider>
  );
}

CarouselSkeletonDesktop.propTypes = {
  onClick: PropTypes.func,
};

export default CarouselSkeletonDesktop;
