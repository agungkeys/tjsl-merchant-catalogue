import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Slider from 'react-slick';
import Product from '../Product';

function CarouselMerchant(props) {
  const { items } = props;

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: false,
    lazyLoad: true,
    speed: 1500,
    beforeChange: (current, next) => setImageIndex(next),
    className: 'center',
    slidesToShow: 1.2,
    arrows: false,
  };
  return (
    <>
      <Text fontWeight="extrabold" fontSize="32px" textAlign="center">
        Mitra Unggulan KAMI
      </Text>
      <Box className="banner-container-mobile">
        {items && (
          <Slider {...settings}>
            {items &&
              items.length > 0 &&
              items.map((item, idx) => (
                <Box
                  key={idx}
                  marginY="32px"
                  borderRadius="16px"
                  boxShadow="lg"
                  w="100%"
                >
                  <Box
                    backgroundColor="#0D5099"
                    borderTopRadius="16px"
                    height="100px"
                  ></Box>
                  <Flex paddingX="16px" width="100%" gap={4}>
                    <Center
                      rounded="full"
                      boxSize="100px"
                      backgroundColor="#fff"
                      marginTop="-50px"
                      boxShadow="lg"
                      w="192px"
                    >
                      <Image boxSize="84px" src="/home.png" alt="" />
                    </Center>
                    <Box
                      alignItems="center"
                      justifyContent="center"
                      height="100px"
                      backgroundColor="#fff"
                      marginTop="-50px"
                      boxShadow="lg"
                      padding="12px"
                      w="100%"
                      borderRadius="10px"
                    >
                      <Text fontWeight="bold" fontSize="16px">
                        {item?.name}
                      </Text>
                      <Text fontWeight="light" fontSize="12px">
                        {item?.address}
                      </Text>
                      <Text fontWeight="semibold" fontSize="10px">
                        {item?.category}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap={3} p={4}>
                    {item?.product?.slice(0, 2).map((product, idx) => (
                      <Box key={idx}>
                        <Product items={product} isLanding isMobile />
                      </Box>
                    ))}
                  </Flex>
                </Box>
              ))}
          </Slider>
        )}
      </Box>
    </>
  );
}

CarouselMerchant.propTypes = {
  items: PropTypes.array,
};

export default CarouselMerchant;
