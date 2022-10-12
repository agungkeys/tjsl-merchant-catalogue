import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Flex,
  Center,
  Image,
  Text,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
import { Product, Pagination, NextLink } from '../../components';

import { populateAdditionalImage } from '../../helpers/utils';

function MerchantsPageContainerDesktop(props) {
  const {
    fetchPagination,
    dataCategories,
    isErrorCategories,
    isLoadingCategories,
    isFetchingCategories,
    isSuccessCategories,
    dataMerchants,
    isErrorMerchants,
    isLoadingMerchants,
    isFetchingMerchants,
    isSuccessMerchants,
  } = props;
  const MerchantSection = () => (
    <Container maxW="container.xl">
      <Box py={6}>
        <Flex gap={2}>
          {dataCategories?.data?.map((item) => (
            <Button colorScheme="facebook" key={item?.id} borderRadius="2em">
              {item?.name}
            </Button>
          ))}
        </Flex>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={8} width="100%">
        {dataMerchants?.data?.map((item, idx) => (
          <NextLink
            key={item?.id}
            link={`/merchants/${item?.slug}`}
            style={{
              width: '100%',
            }}
          >
            <Box
              key={idx}
              marginY={1}
              borderRadius="16px"
              boxShadow="lg"
              w="100%"
            >
              <Box
                backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665197952/tjsl-core/merchants/cover_image/merchant_header_lon2ob.webp"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                borderTopRadius="16px"
                height="100px"
              ></Box>
              <Flex paddingX="32px" width="100%" gap={4}>
                <Center
                  rounded="full"
                  boxSize="100px"
                  backgroundColor="#fff"
                  marginTop="-50px"
                  boxShadow="lg"
                  w="156px"
                >
                  {item?.image ? (
                    <Image
                      borderRadius="4em"
                      boxSize="100%"
                      src={populateAdditionalImage({
                        ...item.additionalImage,
                        height: 100,
                        width: 100,
                        extension: 'webp',
                      })}
                      alt={item?.name}
                    />
                  ) : (
                    <Image
                      borderRadius="4em"
                      boxSize="84px"
                      src="https://res.cloudinary.com/borneos-co/image/upload/v1644554350/images/item-empty_iiuizg.webp"
                      alt=""
                    />
                  )}
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
                    {item?.name || ''}
                  </Text>
                  <Text fontWeight="semibold" fontSize="10px" color="primary.0">
                    Kategori {item?.category?.name || ''}
                  </Text>
                  <Text fontWeight="light" fontSize="12px" noOfLines={2}>
                    {item?.address || ''}
                  </Text>
                </Box>
              </Flex>
              <Grid templateColumns="repeat(3, 1fr)" gap={3} p={8}>
                {item?.products?.map((item, idx) => (
                  <GridItem key={idx}>
                    <Product isLanding {...item} />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </NextLink>
        ))}
      </Grid>
    </Container>
  );
  return (
    <Box>
      <Container maxW="container.xl">
        <MerchantSection />
      </Container>
      <Box>
        <Box
          display="grid"
          w="100%"
          alignItems="center"
          justifyContent="center"
          pt={5}
          pb={5}
        >
          {(isSuccessMerchants && (
            <Pagination
              siblingCount={2}
              currentPage={dataMerchants?.meta?.pagination?.page}
              totalCount={dataMerchants?.meta?.pagination?.total}
              pageSize={dataMerchants?.meta?.pagination?.perPage}
              onPageChange={(page) => fetchPagination(page)}
            />
          )) ||
            null}
        </Box>
      </Box>
    </Box>
  );
}

MerchantsPageContainerDesktop.propTypes = {
  isMobile: PropTypes.bool,
  fetchPagination: PropTypes.func,
  dataCategories: PropTypes.object,
  isErrorCategories: PropTypes.bool,
  isLoadingCategories: PropTypes.bool,
  isFetchingCategories: PropTypes.bool,
  isSuccessCategories: PropTypes.bool,
  dataMerchants: PropTypes.object,
  isSuccessMerchants: PropTypes.bool,
  dataBlogs: PropTypes.object,
  isSuccessBlogs: PropTypes.bool,
  isErrorMerchants: PropTypes.bool,
  isLoadingMerchants: PropTypes.bool,
  isFetchingMerchants: PropTypes.bool,
};

export default MerchantsPageContainerDesktop;
