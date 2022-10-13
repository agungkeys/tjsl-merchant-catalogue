import { Box, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { populateAdditionalImage } from '../../helpers/utils';
import NextLink from '../NextLink';

function CarouselMobile(props) {
  const { items } = props;

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    speed: 1500,
    beforeChange: (current, next) => setImageIndex(next),
    className: 'center',
    slidesToShow: 1,
    arrows: false,
    dots: true,
  };
  return (
    <Box className="banner-container-mobile">
      <Slider {...settings}>
        {items &&
          items?.data?.map((banner, idx) => (
            <NextLink
              key={idx}
              link={banner.link}
              style={{ width: '100%', height: '20px' }}
            >
              <Box
                className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
              >
                <Image
                  src={populateAdditionalImage({
                    ...banner?.additionalImage,
                    height: 283,
                    width: 803,
                    extension: 'webp',
                  })}
                  alt={banner.title}
                  variant="banner"
                  w="100%"
                  borderRadius="8px"
                  fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_390,h_134,c_fill/v1644554350/images/item-empty_iiuizg.webp"
                />
              </Box>
            </NextLink>
          ))}
      </Slider>
    </Box>
  );
}

CarouselMobile.propTypes = {
  items: PropTypes.object,
  onClick: PropTypes.func,
};

export default CarouselMobile;
