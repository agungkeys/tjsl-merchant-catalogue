import { Box, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { priceFormat } from '../../helpers/utils';

function ProductMobile(props) {
  const { isLanding, isShowPrice, items } = props;
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
            src="./pancake.jpg"
            alt=""
            borderTopRadius="16px"
            width="100%"
            objectFit="cover"
          />
          <Box my="0px" p="12px">
            <Text fontSize="sm" fontWeight="semibold" noOfLines={2}>
              {items.productName}
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
  items: PropTypes.object,
};

export default ProductMobile;
