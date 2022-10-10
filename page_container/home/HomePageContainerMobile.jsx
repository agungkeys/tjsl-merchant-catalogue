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
import { BiChevronRight } from 'react-icons/bi';
import { BlogCard, Carousel, NextLink, Product } from '../../components';
import CarouselMerchant from '../../components/Carousel/CarouselMerchant';
import { populateAdditionalImage } from '../../helpers/utils';

function HomePageContainerMobile(props) {
  const {
    dataCategories,
    isErrorCategories,
    isLoadingCategories,
    isFetchingCategories,
    isSuccessCategories,
    dataMerchants,
    isSuccessMerchants,
    isLoadingMerchants,
    isFetchingMerchants,
    dataBlogs,
    isSuccessBlogs,
    isLoadingBlogs,
    isFetchingBlogs,
  } = props;

  const itemBanners = [
    {
      id: 0,
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1660137793/images/banners/cy1iztwb4bf6xbp89x1g.webp',
      title: 'image-banner-0',
    },
    {
      id: 1,
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1660137643/images/banners/v3pxsshr9tybdalab3js.webp',
      title: 'image-banner-1',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1660137500/images/banners/j6ptjrhj8szcrp3r0xpi.webp',
      title: 'image-banner-2',
    },
  ];

  const itemServices = [
    {
      id: 0,
      image: 'service_1.png',
      name: 'Manfaat',
      description:
        'Memberikan kemanfaatan bagi pembangunan ekonomi, sosial, lingkungan, hukum dan tata kelola bagi perusahaan.',
    },
    {
      id: 1,
      image: 'service_2.png',
      name: 'Kontribusi',
      description:
        'Berkontribusi meningkatkan nilai tambah dengan prinsip yang terintegrasi, terarah dan terukur dampaknya serta akuntabel.',
    },
    {
      id: 2,
      image: 'service_3.png',
      name: 'Pembinaan',
      description:
        'Membina usaha mikro dan usaha kecil agar lebih tangguh dan mandiri serta masyarakat sekitar perusahaan.',
    },
  ];

  const HeroSection = () => (
    <Flex gap={4} marginY="42px" flexDirection="column">
      <Image
        src="/home.png"
        alt=""
        width="250px"
        alignSelf="center"
        marginY="24px"
      />
      <Text
        fontWeight="extrabold"
        fontSize="48px"
        color="#F57921"
        lineHeight={1}
      >
        KamiUMKM
      </Text>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textTransform="uppercase"
        color="#0D5099"
      >
        Katalog Mitra UMKM
      </Text>
      <Text fontSize="14px" fontWeight="regular">
        Merupakan suatu program persembahan Pupuk Kaltim dalam hal menghimpun
        seluruh UMKM binaan unggulan PT Pupuk Kaltim dalam suatu wadah digital.
        Dengan tujuan mempromosikan dan memperkenalkan produk UMKM lokal ke
        masyarakat luas.
      </Text>
      <Text fontSize="14px" fontWeight="regular">
        <b>KamiUMKM</b> adalah bentuk kontribusi nyata PT Pupuk Kaltim terhadap
        pertumbuhan dan kemajuan UMKM di seluruh Indonesia, khususnya Kalimantan
        Timur dengan berkolaborasi bersama para profesional dan pemangku
        kepentingan.
      </Text>
    </Flex>
  );

  const BenefitSection = () => (
    <Box paddingY="24px">
      <Text
        textAlign="center"
        fontSize="24px"
        marginBottom="16px"
        fontWeight="bold"
      >
        Nilai [BRAND TJSL]
      </Text>
      <Flex flexDirection="column" gap={4}>
        {itemServices.map((item, idx) => (
          <Box
            key={idx}
            padding="16px"
            borderRadius="16px"
            boxShadow="xl"
            backgroundColor="#fff"
            transition="all 0.5s ease-in-out"
            _hover={{
              transform: 'translate(-0.5rem, -0.5rem)',
            }}
            cursor="context-menu"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Image src={item.image} alt="" boxSize="128px" />
              <Box>
                <Text fontWeight="bold" fontSize="16px">
                  {item.name}
                </Text>
                <Text fontWeight="light" fontSize="12px">
                  {' '}
                  {item.description}{' '}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );

  const SkeletonCategory = () => (
    <Box
      width="188px"
      borderRadius="16px"
      height="178px"
      border="1px solid #e1eaf7"
      padding="24px"
    >
      <Skeleton boxSize="64px" borderRadius="16px" />
      <SkeletonText noOfLines={3} marginY="24px" />
    </Box>
  );

  const CategoriesSection = () => (
    <Box paddingY="24px" marginY="32px">
      <Text
        fontWeight="extrabold"
        fontSize="4xl"
        textAlign="center"
        marginBottom="16px"
      >
        Kategori Mitra Binaan KAMI
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {isLoadingCategories &&
          isFetchingCategories &&
          [...Array(5)].map((item, idx) => (
            <Box key={idx}>
              <SkeletonCategory />
            </Box>
          ))}
        {isSuccessCategories &&
          dataCategories?.data?.map((item, idx) => (
            <Box key={idx}>
              <Category {...item} />
            </Box>
          ))}
      </Grid>
    </Box>
  );

  const Category = (item) => (
    <NextLink>
      <Flex
        flexDirection="column"
        boxShadow="lg"
        padding="24px"
        _hover={{
          transform: 'translate(-0.5rem, -0.5rem)',
        }}
        transition="all 0.5s ease-in-out"
        borderRadius="16px"
        backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665033486/tjsl-core/categories/bg-top-campaign_1_vjtn2j.svg"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        height="100%"
      >
        <Box boxSize="64px">
          <Image
            boxSize="64px"
            src={populateAdditionalImage({
              ...item.additional_image,
              height: 64,
              width: 64,
              extension: 'webp',
            })}
            alt={item?.name || ''}
            fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
          />
        </Box>
        <Text fontWeight="extrabold" fontSize="md">
          {item?.name || ''}
        </Text>
        <Text fontWeight="light" fontSize="sm" noOfLines={2}>
          {item?.description || ''}
        </Text>
      </Flex>
    </NextLink>
  );

  const SkeletonBlog = () => (
    <Box
      flexDirection="column"
      gap={3}
      bgColor="#fff"
      borderRadius="16px"
      padding="9px"
      boxShadow="md"
      border="1px solid #e1eaf7"
      marginY="8px"
    >
      <Skeleton height="150px" borderRadius="8px" />
      <Box marginY="16px">
        <SkeletonText noOfLines={4} />
        <Flex marginTop="24px" justifyContent="space-between">
          <SkeletonText noOfLines={1} width="80px" />
          <SkeletonText noOfLines={1} width="80px" />
        </Flex>
      </Box>
    </Box>
  );

  const BlogSection = () => (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="extrabold" fontSize="24px">
          Artikel
        </Text>
        <NextLink link="/blog">
          <Button variant="link" rightIcon={<BiChevronRight />}>
            Lihat semua
          </Button>
        </NextLink>
      </Flex>
      <Flex flexDirection="column">
        {isLoadingBlogs &&
          isFetchingBlogs &&
          [...Array(3)].map((item, idx) => (
            <Box key={idx}>
              <SkeletonBlog />
            </Box>
          ))}
        {isSuccessBlogs &&
          dataBlogs?.data?.slice(0, 3).map((item, idx) => (
            <Box key={idx}>
              <BlogCard {...item} isMobile />
            </Box>
          ))}
      </Flex>
    </>
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
    <Box>
      <Carousel items={itemBanners} isMobile />
      <Container maxW="container.xl">
        <HeroSection />
      </Container>
      <Box backgroundColor="#f0f8ff">
        <Container maxW="container.xl">
          <BenefitSection />
        </Container>
      </Box>
      <Container>
        <CategoriesSection />
        {isLoadingMerchants && isFetchingMerchants && <SkeletonMerchant />}
        {isSuccessMerchants && <CarouselMerchant items={dataMerchants} />}
      </Container>
      <Box
        backgroundImage="linear-gradient(#f0f8ff, white)"
        marginY="32px"
        paddingY="24px"
      >
        <Container maxW="container.xl">
          <BlogSection />
        </Container>
      </Box>
    </Box>
  );
}

HomePageContainerMobile.propTypes = {
  isMobile: PropTypes.bool,
  dataCategories: PropTypes.object,
  isErrorCategories: PropTypes.bool,
  isLoadingCategories: PropTypes.bool,
  isFetchingCategories: PropTypes.bool,
  isSuccessCategories: PropTypes.bool,
  dataMerchants: PropTypes.object,
  isSuccessMerchants: PropTypes.bool,
  isLoadingMerchants: PropTypes.bool,
  isFetchingMerchants: PropTypes.bool,
  dataBlogs: PropTypes.object,
  isSuccessBlogs: PropTypes.bool,
  isLoadingBlogs: PropTypes.bool,
  isFetchingBlogs: PropTypes.bool,
};

export default HomePageContainerMobile;
