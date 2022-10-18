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
} from '@chakra-ui/react';
import { Product, Pagination, NextLink } from '../../components';
import { HiLink, HiShare } from 'react-icons/hi';
import { populateAdditionalImage } from '../../helpers/utils';
import { HiDotsVertical } from 'react-icons/hi';
import SocialShare from '../../components/SocialShare';
import QRCode from '../../components/QRCode';
import ENV from '../../constants/env';
import { useState } from 'react';

function MerchantPageContainerDesktop(props) {
  const { data, isError, isLoading, isFetching, isSuccess } = props;
  console.log(
    '🚀 ~ file: MerchantPageContainerDesktop.jsx ~ line 33 ~ MerchantPageContainerDesktop ~ data',
    data,
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [productName, setProductName] = useState();

  const handleClickProduct = (product) => (
    <Modal onClose={onClose} size="xl" isOpen={onOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{product.name}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
  // // setProductName(product);
  // onOpen();
  // return (
  //   <Modal onClose={onClose} size="xl" isOpen={onOpen} isCentered>
  //     <ModalOverlay />
  //     <ModalContent>
  //       <ModalHeader>Modal Title</ModalHeader>
  //       <ModalCloseButton />
  //       <ModalBody>tes</ModalBody>
  //       <ModalFooter>
  //         <Button onClick={onClose}>Close</Button>
  //       </ModalFooter>
  //     </ModalContent>
  //   </Modal>
  // );
  // console.log(product);

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
            <Flex gap={3} alignItems="center">
              <QRCode
                value={`${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}`}
                size={192}
                imageSettings={{
                  src: 'https://res.cloudinary.com/borneos-co/image/upload/v1664949744/tjsl-core/icon-logo/favicon_lns2zu.webp',
                  height: 32,
                  width: 32,
                  excavate: true,
                }}
              />
              <SocialShare
                facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}`}
                twitterLink={`https://twitter.com/intent/tweet?text=Hai! Cek Mitra UMKM yok, namanya ${data?.data?.name}, kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}`}
                whatsappLink={`https://wa.me/?text=Hai! Cek Mitra UMKM yok, namanya ${data?.data?.name}, kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}`}
                telegramLink={`https://t.me/share/url?url=${ENV.CURRENT_HOST}/merchants/${data?.data?.slug}&text=Cek Mitra UMKM yok, namanya ${data?.data?.name}`}
                shopeeLink={data?.data?.linkShopee}
                tokopediaLink={data?.data?.linkTokopedia}
                bukalapakLink={data?.data?.linkBukalapak}
                borneosLink={data?.data?.linkBorneos}
                websitePageLink={data?.data?.website}
                facebookPageLink={data?.data?.socFb}
                twitterPageLink={data?.data?.socTwitter}
                instagramPageLink={data?.data?.socIg}
              />
            </Flex>
          </Flex>
        </VStack>
      </Container>

      <Container maxW="container.lg" my="128px">
        <Text fontSize="4xl" fontWeight="bold" mb={5}>
          Produk {data?.data?.name}{' '}
        </Text>
        <Grid
          templateColumns="repeat(4, 1fr)"
          justifyContent="space-between"
          gap={4}
        >
          {data?.data?.products?.map((item, idx) => (
            <Box
              key={idx}
              onClick={() => handleClickProduct(item)}
              cursor="pointer"
            >
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
