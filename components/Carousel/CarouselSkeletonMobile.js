import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import Slider from 'react-slick';

function CarouselSkeletonMobile() {
  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    speed: 1500,
    className: 'center',
    slidesToShow: 1,
    arrows: false,
    dots: true,
  };

  return (
    <Slider {...settings}>
      <Box>
        <Skeleton height="153px" />
      </Box>
      <Box>
        <Skeleton height="153px" />
      </Box>
      <Box>
        <Skeleton height="153px" />
      </Box>
    </Slider>
  );
}

export default CarouselSkeletonMobile;
