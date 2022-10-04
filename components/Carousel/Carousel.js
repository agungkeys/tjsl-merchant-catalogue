import React from 'react';
import PropTypes from 'prop-types';

import CarouselMobile from './CarouselMobile';
import CarouselDesktop from './CarouselDesktop';
import CarouselSkeletonDesktop from './CarouselSkeletonDesktop';
import CarouselSkeletonMobile from './CarouselSkeletonMobile';
import CarouselMerchant from './CarouselMerchant';

function Carousel(props) {
  const { isMobile, isMerchant, isSkeleton } = props;

  if (isMobile) {
    // Mobile
    if (isSkeleton) {
      return <CarouselSkeletonMobile {...props} />;
    } else {
      return <CarouselMobile {...props} />;
    }

    if (isMerchant) {
      return <CarouselMerchant {...props} />;
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
  isMerchant: PropTypes.bool,
  children: PropTypes.node,
};

export default Carousel;
