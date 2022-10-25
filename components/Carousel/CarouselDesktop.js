import React from 'react';
import { useState } from 'react';
import { Image, Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import NextLink from '../NextLink';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { populateAdditionalImage } from '../../helpers/utils';
import PropTypes from 'prop-types';

function CarouselDesktop(props) {
  const { items } = props;

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
    <Box className="banner-container" pt={6}>
      <Slider {...settings}>
        {items &&
          items?.data?.map((banner, idx) => (
            <NextLink key={idx} link={banner.link} style={{ width: '100%' }}>
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
                  p={1}
                  variant="banner"
                  width="100%"
                  borderRadius="1em"
                  fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_1183,h_318,c_thumb/v1659589646/images/no-image-banner_uni0rj.webp"
                />
              </Box>
            </NextLink>
          ))}
      </Slider>
    </Box>
  );
}

CarouselDesktop.propTypes = {
  items: PropTypes.object,
  onClick: PropTypes.func,
};

export default CarouselDesktop;
