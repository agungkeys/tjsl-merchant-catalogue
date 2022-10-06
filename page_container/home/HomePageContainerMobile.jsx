import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Image,
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
    dataBlogs,
    isSuccessBlogs,
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
      <Text fontSize="sm" fontWeight="regular">
        Merupakan suatu program persembahan Pupuk Kaltim dalam hal menghimpun
        seluruh UMKM binaan unggulan PT Pupuk Kaltim dalam suatu wadah digital.
        Dengan tujuan mempromosikan dan memperkenalkan produk UMKM lokal ke
        masyarakat luas.
      </Text>
      <Text fontSize="sm" fontWeight="regular">
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
        <Text fontWeight="light" fontSize="sm">
          {item?.description || ''}
        </Text>
      </Flex>
    </NextLink>
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
        {isSuccessBlogs &&
          dataBlogs?.data?.slice(0, 3).map((item, idx) => (
            <Box key={idx}>
              <BlogCard {...item} isMobile />
            </Box>
          ))}
      </Flex>
    </>
  );

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
        <CarouselMerchant items={dataMerchants} />
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
  dataBlogs: PropTypes.object,
  isSuccessBlogs: PropTypes.bool,
};

export default HomePageContainerMobile;
