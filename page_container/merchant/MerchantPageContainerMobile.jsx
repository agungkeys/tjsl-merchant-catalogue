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
import QRCode from '../../components/QRCode';
import SocialShare from '../../components/SocialShare';
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

              <Flex alignItems="center">
                <QRCode
                  value={`https://tjsl-merchant-catalogue.vercel.app/merchants/${data?.data?.slug}`}
                  size={192}
                  imageSettings={{
                    src: 'https://res.cloudinary.com/borneos-co/image/upload/v1664949744/tjsl-core/icon-logo/favicon_lns2zu.webp',
                    height: 36,
                    width: 36,
                    excavate: true,
                  }}
                  isMobile
                />

                <SocialShare
                  facebookLink={`https://www.facebook.com/sharer/sharer.php?u=https://tjsl-merchant-catalogue.vercel.app/merchants/${data?.data?.slug}`}
                  twitterLink={`https://twitter.com/intent/tweet?text=Hai! Cek Mitra UMKM yok, namanya ${data?.data?.name}, kamu bisa kunjungi link ini ya! https://tjsl-merchant-catalogue.vercel.app/merchants/${data?.data?.slug}`}
                  whatsappLink={`https://wa.me/?text=Hai! Cek Mitra UMKM yok, namanya ${data?.data?.name}, kamu bisa kunjungi link ini ya! https://tjsl-merchant-catalogue.vercel.app/merchants/${data?.data?.slug}`}
                  telegramLink={`https://t.me/share/url?url=https://btjsl-merchant-catalogue.vercel.app/merchants/${data?.data?.slug}&text=Cek Mitra UMKM yok, namanya ${data?.data?.name}`}
                  tokopediaLink={data?.data?.linkTokopedia}
                  bukalapakLink={data?.data?.linkBukalapak}
                  borneosLink={data?.data?.linkBorneos}
                  websitePageLink={data?.data?.website}
                  facebookPageLink={data?.data?.socFb}
                  twitterPageLink={data?.data?.socTwitter}
                  instagramPageLink={data?.data?.socIg}
                  isMobile
                  isProduct
                />
              </Flex>
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
