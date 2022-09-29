import { Box, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { priceFormat } from '../../helpers/utils';

function ProductDesktop(props) {
  const { onMerchant } = props;
  return (
    <>
      {onMerchant ? (
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
            <Text fontSize="14px" fontWeight="bold" noOfLines={2}>
              Pancake Coklat Lezat, enak dan bergizi
            </Text>
            <Text pt={1} fontWeight="light">
              {priceFormat(20000)}
            </Text>
          </Box>
        </Box>
      ) : (
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
        'tes'
      )}
    </>
  );
}

ProductDesktop.propTypes = {
  onMerchant: PropTypes.bool,
};

export default ProductDesktop;
