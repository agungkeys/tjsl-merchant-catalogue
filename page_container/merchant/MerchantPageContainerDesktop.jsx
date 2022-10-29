import { useState } from 'react';
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  GridItem,
} from '@chakra-ui/react';
import { Product, Pagination, NextLink } from '../../components';
import { HiLink, HiMap, HiShare } from 'react-icons/hi';
import { populateAdditionalImage, priceFormat } from '../../helpers/utils';
import { HiDotsVertical } from 'react-icons/hi';
import SocialShare from '../../components/SocialShare';
import QRCode from '../../components/QRCode';
import ENV from '../../constants/env';
import { FaMapMarked, FaMapMarker } from 'react-icons/fa';

function MerchantPageContainerDesktop(props) {
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
        backgroundImage={
          data?.data?.additionalImageCover
            ? populateAdditionalImage({
                ...data?.data?.additionalImageCover,
                extension: 'webp',
              })
            : 'https://res.cloudinary.com/borneos-co/image/upload/v1665467026/tjsl-core/merchants/cover_image/cover_head_udsiml.webp'
        }
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
              boxShadow="lg"
            >
              <Image
                boxSize="100%"
                src={
                  data?.data?.additionalImage
                    ? populateAdditionalImage({
                        ...data?.data?.additionalImage,
                        height: 136,
                        width: 136,
                        extension: 'webp',
                      })
                    : 'https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp'
                }
                borderRadius="full"
                fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
              />
            </Center>
            <Center p={3}>
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
            <Flex flexDirection="column" gap={2}>
              <Text fontSize="14px" fontWeight="semibold" color="primary.0">
                Kategori {data?.data?.category?.name || ''}
              </Text>
              <Text fontSize="lg" color="gray.60">
                {data?.data?.address || ''}
              </Text>
              <NextLink
                link={`https://maps.google.com/?q=${data?.data?.latitude}, ${data?.data?.longitude}`}
                target="_blank"
                style={{
                  width: '50px',
                }}
              >
                <Button leftIcon={<FaMapMarked />} variant="link">
                  Peta Alamat
                </Button>
              </NextLink>
            </Flex>
            <Spacer />
            <Flex gap={3} alignItems="center">
              <QRCode
                value={`${ENV.CURRENT_HOST}/merchants/${
                  data?.data?.slug || ''
                }`}
                size={192}
                imageSettings={{
                  src: 'https://res.cloudinary.com/borneos-co/image/upload/v1664949744/tjsl-core/icon-logo/favicon_lns2zu.webp',
                  height: 32,
                  width: 32,
                  excavate: true,
                }}
              />
              <SocialShare
                facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${
                  ENV.CURRENT_HOST
                }/merchants/${data?.data?.slug || ''}`}
                twitterLink={`https://twitter.com/intent/tweet?text=Hai! Cek Mitra UMKM yok, namanya ${
                  data?.data?.name || ''
                }, kamu bisa kunjungi link ini ya! ${
                  ENV.CURRENT_HOST
                }/merchants/${data?.data?.slug || ''}`}
                whatsappLink={`https://wa.me/?text=Hai! Cek Mitra UMKM yok, namanya ${
                  data?.data?.name || ''
                }, kamu bisa kunjungi link ini ya! ${
                  ENV.CURRENT_HOST
                }/merchants/${data?.data?.slug || ''}`}
                telegramLink={`https://t.me/share/url?url=${
                  ENV.CURRENT_HOST || ''
                }/merchants/${
                  data?.data?.slug || ''
                }&text=Cek Mitra UMKM yok, namanya ${data?.data?.name || ''}`}
                shopeeLink={data?.data?.linkShopee || ''}
                tokopediaLink={data?.data?.linkTokopedia || ''}
                bukalapakLink={data?.data?.linkBukalapak || ''}
                borneosLink={data?.data?.linkBorneos || ''}
                websitePageLink={data?.data?.website || ''}
                facebookPageLink={data?.data?.socFb || ''}
                twitterPageLink={data?.data?.socTwitter || ''}
                instagramPageLink={data?.data?.socIg || ''}
              />
            </Flex>
          </Flex>
        </VStack>
      </Container>

      <Container maxW="container.lg" my="64px">
        <Box marginTop="82px" marginBottom="16px">
          <Text fontSize="4xl" fontWeight="bold">
            Produk {data?.data?.name}{' '}
          </Text>
          <Text fontSize="md">{data?.data?.description || ''}</Text>
        </Box>
        <Grid
          templateColumns="repeat(4, 1fr)"
          justifyContent="space-between"
          gap={4}
        >
          {data?.data?.products?.length > 0
            ? data?.data?.products?.map((item, idx) => (
                <Box
                  key={idx}
                  onClick={() => handleClickProduct(item)}
                  cursor="pointer"
                >
                  <Product {...item} isShowPrice isDetail />
                </Box>
              ))
            : null}
        </Grid>
      </Container>
      <Modal onClose={onClose} size="xl" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {productDetail?.merchant?.name} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Box>
                <Image
                  src={
                    productDetail?.additionalImage?.length > 0
                      ? populateAdditionalImage({
                          ...productDetail?.additionalImage[0],
                          height: 400,
                          width: 528,
                          extension: 'webp',
                        })
                      : ''
                  }
                  alt={productDetail?.name || ''}
                  fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_1183,h_318,c_thumb/v1659589646/images/no-image-banner_uni0rj.webp"
                  objectFit="cover"
                  borderRadius="4px"
                  minHeight="200px"
                />
              </Box>
              <Box marginTop="10px">
                <Flex flexDirection="column" gap={2}>
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
                        className="product-description"
                      ></div>
                    ) : (
                      ''
                    )}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
