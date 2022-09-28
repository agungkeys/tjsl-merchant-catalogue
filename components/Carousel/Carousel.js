import React from 'react';
import PropTypes from 'prop-types';

import CarouselMobile from './CarouselMobile';
import CarouselDesktop from './CarouselDesktop';
import CarouselSkeletonDesktop from './CarouselSkeletonDesktop';
import CarouselSkeletonMobile from './CarouselSkeletonMobile';

function Carousel(props) {
  const { isMobile, isSkeleton } = props;

  if (isMobile) {
    // Mobile
    if (isSkeleton) {
      return <CarouselSkeletonMobile {...props} />;
    } else {
      return <CarouselMobile {...props} />;
    }
  } else {
    // Desktop
    if (isSkeleton) {
      return <CarouselSkeletonDesktop {...props} />;
    } else {
      return <CarouselDesktop {...props} />;
    }
  }
}

Carousel.propTypes = {
  isMobile: PropTypes.bool,
  isSkeleton: PropTypes.bool,
};

export default Carousel;
