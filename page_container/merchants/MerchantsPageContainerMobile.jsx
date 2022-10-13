import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { NextLink, Pagination, Product } from '../../components';

function MerchantsPageContainerMobile(props) {
  const {
    category,
    fetchResetMerchants,
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

  function handleLink(slug) {
    return {
      pathname: `/merchants?category=${slug}`,
      query: { category: slug },
      asPath: `/merchants?category=${slug}`,
    };
  }

  const BreadCrumb = () => (
    <>
      <Text fontWeight="bold" fontSize="xl">
        Mitra UMKM Binaan TJSL PT. Pupuk Kaltim
      </Text>
      <Flex gap={2} paddingY="16px" overflowX="scroll">
        {dataCategories?.data?.map((item) => (
          <NextLink key={item?.id} link={handleLink(item?.slug)}>
            <Button
              // colorScheme="orange"
              borderRadius="2em"
              backgroundColor={category === item?.slug ? `#ff731d` : `#e2eeff`}
              color={category === item?.slug ? `#fff` : `#000`}
              sx={{
                ':hover': {
                  backgroundColor:
                    category === item?.slug ? `#ff731d` : `#c2dbff`,
                },
              }}
            >
              {item?.name}
            </Button>
          </NextLink>
        ))}
      </Flex>
    </>
  );

  const Merchants = () => (
    <Box>
      {dataMerchants?.data?.map((item, idx) => (
        <NextLink key={idx} link={`merchants/${item?.slug}`}>
          <Box marginY="32px" borderRadius="16px" boxShadow="lg" w="100%">
            <Box
              backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665467026/tjsl-core/merchants/cover_image/cover_head_udsiml.webp"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              borderTopRadius="16px"
              height="100px"
            ></Box>
            <Flex paddingX="16px" width="100%" gap={4} alignItems="center">
              <Center
                rounded="full"
                boxSize="100%"
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
                    boxSize="84px"
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
                <Text fontWeight="semibold" fontSize="xs" color="primary.0">
                  Kategori {item?.category?.name || ''}
                </Text>
                <Text fontWeight="light" fontSize="sm" noOfLines={2}>
                  {item?.address || ''}
                </Text>
              </Flex>
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={3} p={4}>
              {item?.products?.slice(0, 3).map((product, idx) => (
                <GridItem key={idx}>
                  <Product isLanding isMobile {...product} />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </NextLink>
      ))}
    </Box>
  );

  const SkeletonMerchant = () =>
    [...Array(1)].map((item, idx) => (
      <Box
        key={idx}
        marginY="32px"
        borderRadius="16px"
        boxShadow="lg"
        w="100%"
        border="1px solid #e1eaf7"
      >
        <Box border="1px solid #e1eaf7" borderTopRadius="16px" height="100px" />
        <Flex paddingX="32px" width="100%" gap={4}>
          <Skeleton
            rounded="full"
            boxSize="100px"
            backgroundColor="#fff"
            marginTop="-50px"
            boxShadow="lg"
            w="156px"
          />

          <Box
            height="100px"
            backgroundColor="#fff"
            marginTop="-50px"
            boxShadow="lg"
            padding="12px"
            w="100%"
            borderRadius="10px"
          >
            <SkeletonText noOfLines={3} />
          </Box>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={3} p={8}>
          {[...Array(3)].map((item, idx) => (
            <GridItem key={idx}>
              <Box
                borderRadius="16px"
                border="1px solid #e1eaf7"
                width="100%"
                height="162px"
              >
                <Skeleton borderTopRadius="16px" boxSize="102px" />
                <SkeletonText marginX={2} noOfLines={2} marginTop="12px" />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    ));

  return (
    <Box scrollBehavior="smooth">
      <Container maxW="container.xl">
        <BreadCrumb />
        {isLoadingMerchants && isFetchingMerchants && <SkeletonMerchant />}
        {(isSuccessMerchants && (
          <>
            <Merchants />
            <Box
              display="grid"
              w="100%"
              alignItems="center"
              justifyContent="center"
              pt={5}
              pb={5}
            >
              <Pagination
                siblingCount={2}
                currentPage={dataMerchants?.meta?.pagination?.page}
                totalCount={dataMerchants?.meta?.pagination?.total}
                pageSize={dataMerchants?.meta?.pagination?.perPage}
                onPageChange={(page) => fetchPagination(page)}
                isMobile
              />
            </Box>
          </>
        )) ||
          null}
      </Container>
    </Box>
  );
}

MerchantsPageContainerMobile.propTypes = {
  isMobile: PropTypes.bool,
  category: PropTypes.string,
  fetchResetMerchants: PropTypes.func,
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

export default MerchantsPageContainerMobile;
