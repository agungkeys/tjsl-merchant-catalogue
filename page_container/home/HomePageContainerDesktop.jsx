import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import PropTypes from "prop-types";
import { BiChevronRight } from 'react-icons/bi';
import { Carousel, Header, NextLink } from '../../components';
import BlogCard from '../../components/BlogCard/BlogCard';
import Footer from '../../components/Footer';
import Product from '../../components/Product';

import { populateAdditionalImage } from '../../helpers/utils';

function HomePageContainerDesktop(props) {
  const {
    dataCategories,
    isErrorCategories,
    isLoadingCategories,
    isFetchingCategories,
    isSuccessCategories
  } = props;
    console.log("🚀 ~ file: HomePageContainerDesktop.jsx ~ line 27 ~ HomePageContainerDesktop ~ dataCategories", dataCategories)
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

  const itemCategories = [
    {
      id: 0,
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1644567865/images/categories/Semua_eiizmq.svg',
      name: 'Semua',
      description: 'Semua Kategori',
    },
    {
      id: 1,
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1650784158/images/categories/xfx103dzxgsmhklumm5k.png',
      name: 'Pertanian',
      description: 'Kategori Pertanian',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1650784098/images/categories/pfh9klzrjkut442o24ae.png',
      name: 'Fashion',
      description: 'Kategori Fashion & Kain',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1650784487/images/categories/jrgbaz2nm2cgrxyufwjt.png',
      name: 'Perdagangan',
      description: 'Kategori Perdagangan',
    },
  ];

  const HeroSection = () => (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={6}
      marginY="48px"
      alignItems="center"
    >
      <GridItem>
        <Box marginBottom="8px">
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
        </Box>
        <Text fontSize="16px" fontWeight="regular">
          Adalah program persembahan TJSL Pupuk Kaltim sebagai bentuk kontribusi
          nyata terhadap pertumbuhan dan kemajuan UMKM di seluruh Indonesia,
          khususnya Kalimantan Timur dengan berkolaborasi bersama para
          profesional dan pemangku kepentingan
        </Text>
      </GridItem>
      <GridItem>
        <Flex justifyContent="center">
          <Image src="/home.png" alt="" width="420px" />
        </Flex>
      </GridItem>
    </Grid>
  );

  const BenefitSection = () => (
    <>
      <Text fontSize="24px" fontWeight="bold">
        Nilai [BRAND TJSL]
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {itemServices.map((item, idx) => (
          <GridItem
            key={idx}
            padding="16px"
            borderRadius="16px"
            boxShadow="xl"
            backgroundColor="#fff"
            marginY="12px"
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
          </GridItem>
        ))}
      </Grid>
    </>
  );

  const CategoriesSection = () => (
    <Box paddingY="16px" marginY="64px">
      <Text fontWeight="extrabold" fontSize="32px">
        Kategori Mitra Binaan KAMI
      </Text>
      <Flex gap={6} justifyContent='center'>
        {dataCategories?.data?.map((item, idx) => (
          <Box key={idx} marginY="16px">
            <Category {...item} />
          </Box>
        ))}
      </Flex>
    </Box>
  );

  const Category = (item) => (
    <>
      <NextLink>
        <Flex
          flexDirection="column"
          alignItems="end"
          textAlign="end"
          boxShadow="lg"
          padding="24px"
          _hover={{
            transform: 'translate(-0.5rem, -0.5rem)',
          }}
          transition="all 0.5s ease-in-out"
          borderRadius="16px"
          w='230px'
          h='100%'
        >
          <Box boxSize="64px">
            <Image 
              src={populateAdditionalImage({...item.additional_image, height: 64, width: 64, extension: 'webp'})} 
              alt={item?.name || ''}
              fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/w_68,h_68,c_fill/v1644554350/images/item-empty_iiuizg.webp"
            />
          </Box>
          <Text fontWeight="extrabold" fontSize="xl" color='gray.70'>
            {item?.name || ''}
          </Text>
          <Text fontWeight="light" fontSize="16px">
          {item?.description || ''}
          </Text>
          <Flex justifyContent="end">
            <Box>
              {/* <BiChevronRight /> */}
            </Box>
          </Flex>
        </Flex>
      </NextLink>
    </>
  );

  const MerchantSection = () => (
    <>
      <Text fontWeight="extrabold" fontSize="32px">
        Mitra Unggulan KAMI
      </Text>
      <Flex gap={8} width="100%">
        {[...Array(3)].map((item, idx) => (
          <Box
            key={idx}
            marginY="32px"
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
                <Image boxSize="84px" src="/home.png" alt="" />
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
              {[...Array(3)].map((item, idx) => (
                <Box key={idx}>
                  <Product isLanding />
                </Box>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  );

  const BlogSection = () => (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="extrabold" fontSize="32px">
          Artikel
        </Text>
        <Button color="#fff" fontWeight="bold" colorScheme="blue">
          Lihat semua artikel
        </Button>
      </Flex>
      <Flex gap={6}>
        {[...Array(3)].map((item, idx) => (
          <Box key={idx}>
            <BlogCard />
          </Box>
        ))}
      </Flex>
    </>
  );

  return (
    <Box>
      <Header />
      <Carousel items={itemBanners} />
      <Container maxW="container.xl">
        <HeroSection />
      </Container>
      <Box
        marginY="42px"
        backgroundColor="#f0f8ff"
        height="270px"
        paddingY="24px"
      >
        <Container maxW="container.xl">
          <BenefitSection />
        </Container>
      </Box>
      <Container maxW="container.xl">
        <CategoriesSection />
      </Container>
      <Container maxW="container.xl">
        <MerchantSection />
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
      <Footer />
    </Box>
  );
}

HomePageContainerDesktop.propTypes = {
  isMobile: PropTypes.bool,
  dataCategories: PropTypes.object,
  isErrorCategories: PropTypes.bool,
  isLoadingCategories: PropTypes.bool,
  isFetchingCategories: PropTypes.bool,
  isSuccessCategories: PropTypes.bool
};


export default HomePageContainerDesktop;
