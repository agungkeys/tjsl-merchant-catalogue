import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Slider from 'react-slick';
import NextLink from '../NextLink';
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
        {items?.data && (
          <Slider {...settings}>
            {items?.data &&
              items?.data?.slice(0, 3).map((item, idx) => (
                <NextLink
                  key={idx}
                  link={`merchants/${item?.slug}`}
                  style={{
                    width: '100%',
                  }}
                >
                  <Box
                    marginY="32px"
                    borderRadius="16px"
                    boxShadow="lg"
                    w="100%"
                  >
                    <Box
                      backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665467026/tjsl-core/merchants/cover_image/cover_head_udsiml.webp"
                      backgroundRepeat="no-repeat"
                      backgroundSize="contain"
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
                        {item?.image ? (
                          <Image
                            boxSize="100%"
                            borderRadius="full"
                            src={item?.image}
                            alt={item?.name}
                          />
                        ) : (
                          <Image
                            boxSize="100%"
                            borderRadius="full"
                            src="https://res.cloudinary.com/borneos-co/image/upload/v1644554350/images/item-empty_iiuizg.webp"
                            alt=""
                          />
                        )}
                      </Center>
                      <Flex
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100px"
                        backgroundColor="#fff"
                        marginTop="-50px"
                        boxShadow="lg"
                        padding="12px"
                        w="100%"
                        borderRadius="10px"
                      >
                        <Text fontWeight="bold" fontSize="md">
                          {item?.name || ''}
                        </Text>
                        <Text
                          fontWeight="semibold"
                          fontSize="xs"
                          color="primary.0"
                        >
                          Kategori {item?.category?.name || ''}
                        </Text>
                        <Text fontWeight="light" fontSize="sm" noOfLines={2}>
                          {item?.address || ''}
                        </Text>
                      </Flex>
                    </Flex>
                    <Grid templateColumns="repeat(2, 1fr)" gap={3} p={4}>
                      {item?.products?.slice(0, 2).map((product, idx) => (
                        <GridItem key={idx}>
                          <Product isLanding isMobile {...product} />
                        </GridItem>
                      ))}
                    </Grid>
                  </Box>
                </NextLink>
              ))}
          </Slider>
        )}
      </Box>
    </>
  );
}

CarouselMerchant.propTypes = {
  items: PropTypes.object,
};

export default CarouselMerchant;
