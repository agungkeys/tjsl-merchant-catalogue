import React, { useState } from 'react';
import { Image, Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import NextLink from '../NextLink';
import PropTypes from 'prop-types';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import { populateAdditionalImage } from '../../helpers/utils';
function CarouselMobile(props) {
  const { items, isMerchant, children } = props;

  const NextArrow = ({ onClick }) => {
    return (
      <Box
        bgColor="transparent"
        sx={{
          backgroundColor: '#fafafa',
          borderRadius: '4.8px',
          height: 'auto',
          top: '28px',
        }}
        className="arrow next"
        onClick={onClick}
      >
        <Box
          sx={{
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
          }}
        >
          <BiChevronRight />
        </Box>
      </Box>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <Box
        bgColor="transparent"
        sx={{
          backgroundColor: '#fafafa',
          borderRadius: '4.8px',
          height: 'auto',
          top: '28px',
        }}
        className="arrow prev"
        onClick={onClick}
      >
        <Box
          sx={{
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
          }}
        >
          <BiChevronLeft />
        </Box>
      </Box>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    speed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    className: 'center',
    slidesToShow: 1,
    arrows: false,
    dots: true,
  };
  return (
    <Box className="banner-container-mobile">
      {items && (
        <Slider {...settings}>
          {isMerchant && children}
          {items &&
            items.length > 0 &&
            items.map((banner, idx) => (
              <NextLink
                key={idx}
                link={banner.link}
                style={{ width: '100%', height: '20px' }}
              >
                <Box
                  className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
                >
                  <Image
                    src={banner.image}
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
      )}
    </Box>
  );
}

CarouselMobile.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  isMerchant: PropTypes.bool,
  children: PropTypes.node,
};

export default CarouselMobile;
