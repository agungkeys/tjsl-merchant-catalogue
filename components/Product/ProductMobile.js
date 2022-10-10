import { Box, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { populateAdditionalImage, priceFormat } from '../../helpers/utils';

function ProductMobile(props) {
  const { isLanding, isShowPrice, name, additionalImage } = props;

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
          <Image
            src={populateAdditionalImage({
              ...additionalImage[0],
              height: 120,
              width: 120,
              extension: 'webp',
            })}
            alt=""
            borderTopRadius="16px"
            width="100%"
            fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
          />
          <Box my="0px" p="12px">
            <Text fontSize="sm" fontWeight="semibold" noOfLines={2}>
              {name}
            </Text>
            {isShowPrice && (
              <Text pt={1} fontWeight="normal" fontSize="sm">
                {priceFormat(items.price)}
              </Text>
            )}
          </Box>
        </Box>
      ) : (
        'tes'
      )}
    </>
  );
}

ProductMobile.propTypes = {
  isLanding: PropTypes.bool,
  isShowPrice: PropTypes.bool,
  name: PropTypes.string,
  additionalImage: PropTypes.array,
};

export default ProductMobile;
