import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { HiDotsVertical } from 'react-icons/hi';
import { Product } from '../../components';
function MerchantPageContainerMobile(props) {
  const { data, isError, isLoading, isFetching, isSuccess } = props;
  return (
    <Box>
      <Box
        backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665467026/tjsl-core/merchants/cover_image/cover_head_udsiml.webp"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        w="100%"
        height="110px"
      ></Box>
      <Container maxW="container.xl">
        <Flex marginTop="-60px" gap={3}>
          <Image
            src={data?.data?.image}
            height="120px"
            borderRadius="full"
            alt=""
          />
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            borderRadius="16px"
            boxShadow="md"
            padding="16px"
            backgroundColor="#fff"
            width="100%"
          >
            <Flex justifyContent="space-between">
              <Text fontSize="md" fontWeight="bold">
                {' '}
                {data?.data?.name}{' '}
              </Text>
              <HiDotsVertical />
            </Flex>
            <Text fontSize="sm" color="primary.0">
              Kategori {data?.data?.category?.name}
            </Text>
            <Text fontSize="sm"> {data?.data?.address} </Text>
          </Flex>
          <Box></Box>
        </Flex>
        <Box marginY="32px">
          <Text fontWeight="bold" fontSize="lg">
            Produk {data?.data?.name}
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} marginY="16px">
            {data?.data?.products?.map((item, idx) => (
              <GridItem key={idx}>
                <Product {...item} isMobile isShowPrice />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

MerchantPageContainerMobile.propTypes = {
  isMobile: PropTypes.bool,
  data: PropTypes.object,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isFetching: PropTypes.bool,
  isSuccess: PropTypes.bool,
  query: PropTypes.object,
  page: PropTypes.string,
  perPage: PropTypes.string,
};

export default MerchantPageContainerMobile;
