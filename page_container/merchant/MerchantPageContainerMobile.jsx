import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Product } from '../../components';
import QRCode from '../../components/QRCode';
import SocialShare from '../../components/SocialShare';
import ENV from '../../constants/env';
import { populateAdditionalImage, priceFormat } from '../../helpers/utils';
function MerchantPageContainerMobile(props) {
  const { data, isError, isLoading, isFetching, isSuccess } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [productDetail, setProductDetail] = useState({});

  const handleClickProduct = (product) => {
    onOpen();
    setProductDetail(product);
  };

  return (
    <Box>
      <Box
        bgImage={
          data?.data?.additionalImageCover
            ? populateAdditionalImage({
                ...data?.data?.additionalImageCover,

                extension: 'webp',
              })
            : 'https://res.cloudinary.com/borneos-co/image/upload/v1665467026/tjsl-core/merchants/cover_image/cover_head_udsiml.webp'
        }
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        w="100%"
        height="110px"
      ></Box>
      <Container maxW="container.xl">
        <Flex marginTop="-50px" gap={3}>
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
              <Text fontSize="md" fontWeight="bold" noOfLines={2}>
                {' '}
                {data?.data?.name}{' '}
              </Text>

              <Flex alignItems="center">
                <QRCode
                  value={`${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}`}
                  size={192}
                  imageSettings={{
                    src: 'https://res.cloudinary.com/borneos-co/image/upload/v1664949744/tjsl-core/icon-logo/favicon_lns2zu.webp',
                    height: 32,
                    width: 32,
                    excavate: true,
                  }}
                  isMobile
                />

                <SocialShare
                  facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}`}
                  twitterLink={`https://twitter.com/intent/tweet?text=Hai! Cek Mitra UMKM yok, namanya ${data?.data?.name}, kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}`}
                  whatsappLink={`https://wa.me/?text=Hai! Cek Mitra UMKM yok, namanya ${data?.data?.name}, kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}`}
                  telegramLink={`https://t.me/share/url?url=${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}&text=Cek Mitra UMKM yok, namanya ${data?.data?.name}`}
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
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Produk {data?.data?.name}
            </Text>
            <Text fontSize="sm"> {data?.data?.description} </Text>
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} marginY="16px">
            {data?.data?.products?.map((item, idx) => (
              <GridItem key={idx} onClick={() => handleClickProduct(item)}>
                <Product {...item} isMobile isShowPrice />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {' '}
            {productDetail?.merchant?.name}{' '}
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <Image
                src={
                  productDetail?.additionalImage?.length > 0
                    ? populateAdditionalImage({
                        ...productDetail?.additionalImage[0],

                        extension: 'webp',
                      })
                    : ''
                }
                alt={productDetail?.name}
                fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_1183,h_318,c_thumb/v1659589646/images/no-image-banner_uni0rj.webp"
                objectFit="cover"
                borderRadius="4px"
              />
              <Flex flexDirection="column" gap={2} marginTop="16px">
                <Text fontWeight="bold" fontSize="xl">
                  {productDetail?.name || ''}
                </Text>
                <Text fontSize="xl">
                  {priceFormat(productDetail?.price) || ''}
                </Text>
                <Text fontSize="13px">
                  {productDetail?.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: productDetail?.description,
                      }}
                    ></div>
                  ) : (
                    ''
                  )}
                </Text>
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
