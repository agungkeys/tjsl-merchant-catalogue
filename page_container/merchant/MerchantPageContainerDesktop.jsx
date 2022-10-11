import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Center,
  Container,
  Image,
  Text,
  Grid,
  VStack,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { Product, Pagination, NextLink } from '../../components';
import { HiLink, HiShare } from 'react-icons/hi';

function MerchantPageContainerDesktop(props) {
  const {
    data,
    isError,
    isLoading,
    isFetching,
    isSuccess
  } = props;
    console.log("🚀 ~ file: MerchantPageContainerDesktop.jsx ~ line 24 ~ MerchantPageContainerDesktop ~ data", data)
  return (
    <Box>
      <Box
        bgImage="https://res.cloudinary.com/borneos-co/image/upload/v1665197952/tjsl-core/merchants/cover_image/merchant_header_lon2ob.webp"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="100%"
        minH="280px"
        display="flex"
        alignItems="center"
        justifyItems="justify"
      >
        <Container maxW="container.lg">
          <Flex>
            <Center
              rounded="full"
              boxSize="136px"
              backgroundColor="#fff"
              // marginTop="-50px"
              boxShadow="lg"
              // w="156px"
            >
              <Image boxSize="100%" src="/home.png" alt="" />
            </Center>
            <Center p={3} al>
              <Text fontSize="38px" fontWeight="semibold">
                Rumah Habati
              </Text>
            </Center>
          </Flex>
        </Container>
      </Box>
      <Container maxW="container.lg">
        <VStack>
          <Flex
            borderRadius="2em"
            alignItems="center"
            w="100%"
            my="-5.9%"
            mx={0}
            position="relative"
            minH="130px"
            bgColor="white"
            shadow="md"
            p={5}
          >
            <Box>
            <Text fontSize="14px" fontWeight="semibold" color="primary.0">Kategori Makanan dan Minuman</Text>
              <Text fontSize="lg" color="gray.60">Jl Gunung Arjuna No.3 BSD, Rumah Habati</Text>
            </Box>
            <Spacer />
            <Box>
              <Button colorScheme="orange" borderRadius="2em" leftIcon={<HiShare />}>Bagikan Halaman</Button>
            </Box>
          </Flex>
        </VStack>
      </Container>
      

      <Container maxW="container.lg" mt="80px">
        <Grid
          templateColumns="repeat(3, 1fr)"
          justifyContent="space-between"
          gap={5}
        >
          {[...Array(9)].map((item, idx) => (
            <Box key={idx}>
              <Product isShowPrice isDetail />
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

MerchantPageContainerDesktop.propTypes = {
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

export default MerchantPageContainerDesktop;
