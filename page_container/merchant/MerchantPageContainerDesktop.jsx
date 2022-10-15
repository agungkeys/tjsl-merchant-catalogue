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
import { populateAdditionalImage } from '../../helpers/utils';
import { HiDotsVertical } from 'react-icons/hi';
import SocialShare from '../../components/SocialShare';

function MerchantPageContainerDesktop(props) {
  const { data, isError, isLoading, isFetching, isSuccess } = props;
  console.log(
    '🚀 ~ file: MerchantPageContainerDesktop.jsx ~ line 24 ~ MerchantPageContainerDesktop ~ data',
    data,
  );
  return (
    <Box>
      <Box
        bgImage="https://res.cloudinary.com/borneos-co/image/upload/v1665467026/tjsl-core/merchants/cover_image/cover_head_udsiml.webp"
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
              <Image
                boxSize="100%"
                src={populateAdditionalImage({
                  ...data?.data?.additionalImage,
                  height: 136,
                  width: 136,
                  extension: 'webp',
                })}
                borderRadius="full"
                alt=""
                fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
              />
            </Center>
            <Center p={3} al>
              <Text fontSize="38px" fontWeight="semibold">
                {data?.data?.name || 'Merchant Name'}
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
              <Text fontSize="14px" fontWeight="semibold" color="primary.0">
                Kategori {data?.data?.category?.name || 'Merchant Category'}
              </Text>
              <Text fontSize="lg" color="gray.60">
                {data?.data?.address || 'Merchant Address'}
              </Text>
            </Box>
            <Spacer />
            <Box>
              {/* <Button
                colorScheme="orange"
                borderRadius="2em"
                leftIcon={<HiShare />}
              >
                Bagikan Halaman
              </Button> */}
              <SocialShare
                facebookLink={`https://www.facebook.com/sharer/sharer.php?u=https://tjsl-merchant-catalogue.vercel.app/merchants/${data?.data?.slug}`}
                twitterLink={`https://twitter.com/intent/tweet?text=Hai! Cek Mitra UMKM yok, namanya ${data?.data?.name}, kamu bisa kunjungi link ini ya! https://tjsl-merchant-catalogue.vercel.app/merchants/${data?.data?.slug}`}
                whatsappLink={`https://wa.me/?text=Hai! Cek Mitra UMKM yok, namanya ${data?.data?.name}, kamu bisa kunjungi link ini ya! https://tjsl-merchant-catalogue.vercel.app/merchants/${data?.data?.slug}`}
                telegramLink={`https://t.me/share/url?url=https://btjsl-merchant-catalogue.vercel.app/merchants/${data?.data?.slug}&text=Cek Mitra UMKM yok, namanya ${data?.data?.name}`}
                shopeeLink={data?.data?.linkShopee}
                tokopediaLink={data?.data?.linkTokopedia}
                bukalapakLink={data?.data?.linkBukalapak}
                borneosLink={data?.data?.linkBorneos}
                websitePageLink={data?.data?.website}
                facebookPageLink={data?.data?.socFb}
                twitterPageLink={data?.data?.socTwitter}
                instagramPageLink={data?.data?.socIg}
              />
            </Box>
          </Flex>
        </VStack>
      </Container>

      <Container maxW="container.lg" my="128px">
        <Text fontSize="4xl" fontWeight="bold">
          Produk {data?.data?.name}{' '}
        </Text>
        <Grid
          templateColumns="repeat(4, 1fr)"
          justifyContent="space-between"
          gap={4}
        >
          {data?.data?.products?.map((item, idx) => (
            <Box key={idx}>
              <Product {...item} isShowPrice isDetail />
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
