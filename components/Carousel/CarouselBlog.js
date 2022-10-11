import { Box, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Slider from 'react-slick';
import BlogCard from '../BlogCard';

function CarouselBlog(props) {
  const { items } = props;

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: false,
    lazyLoad: true,
    speed: 1500,
    beforeChange: (current, next) => setImageIndex(next),
    className: 'center',
    slidesToShow: 1.1,
    arrows: false,
  };
  return (
    <Box>
      <Slider {...settings}>
        {items?.data?.slice(0, 3).map((item, idx) => (
          <Box key={idx}>
            <BlogCard {...item} isMobile />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

CarouselBlog.propTypes = {
  items: PropTypes.object,
};

export default CarouselBlog;
