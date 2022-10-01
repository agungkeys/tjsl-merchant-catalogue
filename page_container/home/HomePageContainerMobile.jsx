import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Text,
} from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';
import { Carousel, NextLink, Product } from '../../components';

import Header from '../../components/Header/Header';

function HomePageContainerMobile() {
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
    <Flex gap={4} alignItems="center" marginY="42px" flexDirection="column">
      <Image src="/home.png" alt="" width="250px" />
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
      <Text fontSize="sm" fontWeight="regular" textAlign="center">
        Adalah program persembahan TJSL Pupuk Kaltim sebagai bentuk kontribusi
        nyata terhadap pertumbuhan dan kemajuan UMKM di seluruh Indonesia,
        khususnya Kalimantan Timur dengan berkolaborasi bersama para profesional
        dan pemangku kepentingan
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
        {[...Array(6)].map((item, idx) => (
          <Box key={idx}>
            <Category />
          </Box>
        ))}
      </Grid>
    </Box>
  );

  const Category = () => (
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
      >
        <Box boxSize="64px">
          <Image src="./service_1.png" alt="" />
        </Box>
        <Text fontWeight="extrabold" fontSize="24px">
          Kuliner
        </Text>
        <Text fontWeight="light" fontSize="16px">
          Berbagai macam pilihan makanan dan minuman
        </Text>
        <Flex justifyContent="end">
          <Box>
            <BiChevronRight />
          </Box>
        </Flex>
      </Flex>
    </NextLink>
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

  return (
    <Box height="100vh">
      <Header isMobile />
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
        <Carousel isMerchant isMobile>
          <MerchantSection />
        </Carousel>
      </Container>
    </Box>
  );
}

export default HomePageContainerMobile;
