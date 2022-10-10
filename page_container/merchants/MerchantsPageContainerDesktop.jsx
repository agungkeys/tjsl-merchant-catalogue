import PropTypes from 'prop-types';
import { Box, Button, Flex, Center, Container, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import { Product, Pagination, NextLink } from '../../components';

import { populateAdditionalImage } from '../../helpers/utils';

function MerchantsPageContainerDesktop(props) {
  const {
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
      <Box py={4}>
        <Flex gap={2}>
          {dataCategories?.data?.map(item => 
            <Button colorScheme='facebook' key={item?.id} borderRadius='2em'>{item?.name}</Button>
          )}
        </Flex>
      </Box>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        width="100%"
      >
        {dataMerchants?.data?.map((item, idx) => (
          <NextLink key={item?.id} link={`/merchants/${item?.slug}`}>
            <Box
              key={idx}
              marginY={1}
              borderRadius="16px"
              boxShadow="lg"
              w="100%"
            >
              <Box
                backgroundColor="#0D5099"
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
                  <Image
                    boxSize="64px"
                    src={populateAdditionalImage({
                      ...item.additionalImage,
                      height: 64,
                      width: 64,
                      extension: 'webp',
                    })}
                    alt={item?.name || ''}
                    fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
                  />
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
                    Rumah Habati
                  </Text>
                  <Text fontWeight="light" fontSize="12px">
                    Jl Gunung Arjuna No.3 BSD, Rumah Habati
                  </Text>
                  <Text fontWeight="semibold" fontSize="10px">
                    Kategori Makanan dan Minuman
                  </Text>
                </Box>
              </Flex>
              <Flex justifyContent="space-between" gap={3} p={8}>
                {item?.products?.map((item, idx) => (
                  <Box key={idx}>
                    <Product isLanding {...item} />
                  </Box>
                ))}
              </Flex>
            </Box>
          </NextLink>
        ))}
      </Grid>
    </Container>
  );
  return (
    <Flex>
      <Box>
        <MerchantSection />
        <Box
          Box
          display="grid"
          w="100%"
          alignItems="center"
          justifyContent="center"
          pt={5}
          pb={5}
        >
          <Pagination
            siblingCount={2}
            currentPage={2}
            totalCount={300}
            pageSize={12}
            // onPageChange={(page) => fetchPagination(page)}
          />
        </Box>
      </Box>
    </Flex>
  );
}

MerchantsPageContainerDesktop.propTypes = {
  isMobile: PropTypes.bool,
  dataCategories: PropTypes.object,
  isErrorCategories: PropTypes.bool,
  isLoadingCategories: PropTypes.bool,
  isFetchingCategories: PropTypes.bool,
  isSuccessCategories: PropTypes.bool,
  dataMerchants: PropTypes.object,
  isSuccessMerchants: PropTypes.bool,
  dataBlogs: PropTypes.object,
  isSuccessBlogs: PropTypes.bool,
};

export default MerchantsPageContainerDesktop;
