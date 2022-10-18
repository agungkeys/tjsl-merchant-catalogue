import { Box, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { populateAdditionalImage, priceFormat } from '../../helpers/utils';

function ProductDesktop(props) {
  const { isLanding, isShowPrice, isDetail, name, additionalImage, price } =
    props;
  return (
    <>
      {isLanding ? (
        <Box
          borderRadius="16px"
          width="100%"
          boxShadow="md"
          transition="all 0.5s ease-in-out"
          _hover={{
            transform: 'translate(-0.5rem, -0.5rem)',
          }}
        >
          {additionalImage?.length > 0 || additionalImage !== null ? (
            <Image
              src={
                additionalImage?.length > 0
                  ? populateAdditionalImage({
                      ...additionalImage[0],
                      height: 102,
                      width: 102,
                      extension: 'webp',
                    })
                  : ''
              }
              fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
              alt={name}
              borderTopRadius="16px"
              width="100%"
              h="102"
              objectFit="cover"
            />
          ) : (
            <Image
              src="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
              fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
              alt={name}
              borderTopRadius="16px"
              width="100%"
              h="102"
              objectFit="cover"
            />
          )}

          <Box my="0px" p="12px">
            <Text h={10} fontSize="sm" fontWeight="semibold" noOfLines={2}>
              {name}
            </Text>
            {isShowPrice && (
              <Text pt={1} fontWeight="normal" fontSize="sm">
                {priceFormat(20000)}
              </Text>
            )}
          </Box>
        </Box>
      ) : (
        <Box
          borderRadius="16px"
          width="100%"
          boxShadow="lg"
          transition="all 0.5s ease-in-out"
          _hover={{
            transform: 'translate(-0.5rem, -0.5rem)',
          }}
          height="300px"
        >
          <Box>
            {additionalImage?.length > 0 || additionalImage !== null ? (
              <Image
                src={
                  additionalImage?.length > 0
                    ? populateAdditionalImage({
                        ...additionalImage[0],
                        height: 230,
                        width: 230,
                        extension: 'webp',
                      })
                    : ''
                }
                fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
                alt={name}
                borderTopRadius="10px"
                width="100%"
                height="200px"
                objectFit="cover"
              />
            ) : (
              <Image
                src="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
                fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
                alt={name}
                borderTopRadius="16px"
                width="100%"
                h="102"
                objectFit="cover"
              />
            )}
          </Box>

          <Box my="0px" p="12px">
            <Text fontSize="md" fontWeight="bold" noOfLines={2}>
              {name}
            </Text>
            {isShowPrice && (
              <Text pt={1} fontWeight="normal" fontSize="md">
                {price === '0' ? '' : priceFormat(price)}
              </Text>
            )}
          </Box>
        </Box>
        // <>
        //   <Box
        //     transition="all 0.5s ease-in-out"
        //     _hover={{
        //       transform: "translate(-0.5rem, -0.5rem)",
        //     }}
        //   >
        //     <Image
        //       src="./pancake.jpg"
        //       alt=""
        //       width="100%"
        //       objectFit="cover"
        //       zIndex={2}
        //     />
        //   </Box>
        //   <Box
        //     position="absolute"
        //     display="flex"
        //     justifyContent="center"
        //     backgroundColor="salmon"
        //     alignItems="flex-end"
        //     textAlign="center"
        //     zIndex={1}
        //     transition="0.5s ease-in-out"
        //   >
        //     <Text fontSize="14px" fontWeight="semibold">
        //       Pancake Coklat
        //     </Text>
        //     <Text fontWeight="light">{priceFormat(20000)}</Text>
        //   </Box>
        // </>
        // <Text>tes</Text>
      )}
    </>
  );
}

ProductDesktop.propTypes = {
  isLanding: PropTypes.bool,
  isShowPrice: PropTypes.bool,
  isDetail: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.string,
  additionalImage: PropTypes.array,
};

export default ProductDesktop;
