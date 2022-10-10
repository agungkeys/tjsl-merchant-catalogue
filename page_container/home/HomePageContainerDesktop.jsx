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
import { BiChevronRight, BiChevronRightCircle } from 'react-icons/bi';
import {
  BlogCard,
  Carousel,
  Category,
  Footer,
  Header,
  NextLink,
  Product,
} from '../../components';

import { populateAdditionalImage } from '../../helpers/utils';

function HomePageContainerDesktop(props) {
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
          Merupakan suatu program persembahan Pupuk Kaltim dalam hal menghimpun
          seluruh UMKM binaan unggulan PT Pupuk Kaltim dalam suatu wadah
          digital. Dengan tujuan mempromosikan dan memperkenalkan produk UMKM
          lokal ke masyarakat luas. <b>KamiUMKM</b> adalah bentuk kontribusi
          nyata PT Pupuk Kaltim terhadap pertumbuhan dan kemajuan UMKM di
          seluruh Indonesia, khususnya Kalimantan Timur dengan berkolaborasi
          bersama para profesional dan pemangku kepentingan.
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
    <Flex gap={3}>
      <Box width="40%">
        <Text fontSize="24px" fontWeight="bold" textTransform="uppercase">
          Visi KaMiUMKM
        </Text>
        <Flex
          marginY="8px"
          alignItems="start"
          borderRadius="16px"
          boxShadow="xl"
          backgroundColor="#fff"
          padding="16px"
          height="192px"
        >
          <Flex gap={4}>
            <Image src="./service_2.png" alt="" boxSize="92px" />

            <Text fontSize="lg" fontWeight="normal">
              Terwujudnya masyarakat mandiri dan berkelanjutan berbasis hubungan
              yang harmonis antara perusahaan dan masyarakat.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box width="60%">
        <Text fontSize="24px" fontWeight="bold" textTransform="uppercase">
          Misi KaMiUMKM
        </Text>
        <Flex
          marginY="8px"
          alignItems="start"
          borderRadius="16px"
          boxShadow="xl"
          backgroundColor="#fff"
          padding="16px"
        >
          <Flex gap={8} alignItems="start">
            <Image src="./service_3.png" alt="" boxSize="92px" />

            <Box paddingY="8px">
              <ul>
                <li>
                  <Text fontSize="lg" fontWeight="normal">
                    Memberdayakan potensi sumber daya lokal dengan membentuk
                    kegiatan usaha yang dapat meningkatkan taraf ekonomi dan
                    kemandirian masyarakat,
                  </Text>
                </li>
                <li>
                  <Text fontSize="lg" fontWeight="normal">
                    Menciptakan keserasian lingkungan sekitar dengan membangun
                    infrastruktur pendukung secara berkelanjutan,
                  </Text>
                </li>
                <li>
                  <Text fontSize="lg" fontWeight="normal">
                    Meningkatkan sinergi dan citra positif perusahaan dengan
                    stakeholder untuk berkelanjutan operasional perusahaan.
                  </Text>
                </li>
              </ul>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );

  const SkeletonCategories = () => (
    <Box>
      <Box
        width="230px"
        borderRadius="16px"
        height="175px"
        marginY="16px"
        border="1px solid #e1eaf7"
        padding="24px"
      >
        <Skeleton boxSize="64px" borderRadius="16px" />
        <SkeletonText noOfLines={3} marginY="24px" />
      </Box>
    </Box>
  );

  const CategoriesSection = () => (
    <Box paddingY="16px" marginY="64px">
      <Text fontWeight="extrabold" fontSize="32px">
        Kategori Mitra Binaan KAMI
      </Text>
      <Flex gap={6} justifyContent="center">
        {isLoadingCategories &&
          isFetchingCategories &&
          [...Array(5)].map((item, idx) => (
            <Box key={idx}>
              <SkeletonCategories />
            </Box>
          ))}
        {isSuccessCategories &&
          dataCategories?.data?.map((item, idx) => (
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
          alignItems="start"
          textAlign="start"
          boxShadow="lg"
          padding="24px"
          _hover={{
            transform: 'translate(-0.5rem, -0.5rem)',
            bg: '#f0f8ff',
          }}
          transition="all 0.5s ease-in-out"
          borderRadius="16px"
          w="230px"
          h="100%"
          backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665033486/tjsl-core/categories/bg-top-campaign_1_vjtn2j.webp"
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
          <Text fontWeight="extrabold" fontSize="xl" color="gray.70">
            {item?.name || ''}
          </Text>
          <Text fontWeight="light" fontSize="sm">
            {item?.description || ''}
          </Text>
          <Flex justifyContent="end">
            <Box>{/* <BiChevronRight /> */}</Box>
          </Flex>
        </Flex>
      </NextLink>
    </>
  );

  const SkeletonMerchant = () => (
    <Box
      marginY="32px"
      borderRadius="16px"
      boxShadow="lg"
      w="395px"
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
  );

  const MerchantSection = () => (
    <>
      <Flex justifyContent="space-between">
        <Text fontWeight="extrabold" fontSize="32px">
          Mitra Unggulan KAMI
        </Text>
        <NextLink link="/merchants">
          <Button variant="link" rightIcon={<BiChevronRight />}>
            Lihat semua
          </Button>
        </NextLink>
      </Flex>

      <Flex gap={8} width="100%">
        {isLoadingMerchants &&
          isFetchingMerchants &&
          [...Array(3)].map((item, idx) => (
            <Box key={idx}>
              <SkeletonMerchant />
            </Box>
          ))}
        {isSuccessMerchants &&
          dataMerchants?.data?.slice(0, 3).map((item) => (
            <Box
              key={item?.id}
              marginY="32px"
              borderRadius="16px"
              boxShadow="lg"
              w="100%"
            >
              <Box
                // backgroundColor="#0D5099"
                backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665197952/tjsl-core/merchants/cover_image/merchant_header_lon2ob.png"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
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
                  {item?.image ? (
                    <Image
                      borderRadius="4em"
                      boxSize="84px"
                      src={item?.image}
                      alt={item?.name}
                    />
                  ) : (
                    <Image
                      borderRadius="4em"
                      boxSize="84px"
                      src="https://res.cloudinary.com/borneos-co/image/upload/v1644554350/images/item-empty_iiuizg.webp"
                      alt=""
                    />
                  )}
                </Center>
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100px"
                  backgroundColor="#fff"
                  marginTop="-50px"
                  boxShadow="lg"
                  padding="12px"
                  w="100%"
                  borderRadius="10px"
                >
                  <Text fontWeight="bold" fontSize="md">
                    {item?.name || ''}
                  </Text>
                  <Text fontWeight="light" fontSize="sm" noOfLines={2}>
                    {item?.address || ''}
                  </Text>
                  <Text fontWeight="semibold" fontSize="sm">
                    Kategori {item?.category?.name || ''}
                  </Text>
                </Flex>
              </Flex>
              <Grid gap={3} p={8} templateColumns="repeat(3, 1fr)">
                {item?.products?.map((item, idx) => (
                  <GridItem key={idx}>
                    <Product isLanding {...item} />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          ))}
      </Flex>
    </>
  );

  const SkeletonBlog = () => (
    <Box
      marginY="32px"
      borderRadius="16px"
      boxShadow="lg"
      border="1px solid #e1eaf7"
    >
      <Skeleton width="100%" height="250px" borderTopRadius="8px" />
      <Box padding="16px">
        <SkeletonText noOfLines={4} />
        <Flex justifyContent="space-between" marginTop="12px">
          <SkeletonText width="120px" noOfLines={1} />
          <SkeletonText width="120px" noOfLines={1} />
        </Flex>
      </Box>
    </Box>
  );

  const BlogSection = () => (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="extrabold" fontSize="32px">
          Blog Kami
        </Text>
        <NextLink link="/blog">
          <Button variant="link" rightIcon={<BiChevronRight />}>
            Lihat semua
          </Button>
        </NextLink>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {isLoadingBlogs &&
          isFetchingBlogs &&
          [...Array(3)].map((item, idx) => (
            <Box key={idx}>
              <SkeletonBlog />
            </Box>
          ))}
        {isSuccessBlogs &&
          dataBlogs?.data?.slice(0, 3).map((item) => (
            <GridItem key={item?.id}>
              <BlogCard {...item} />
            </GridItem>
          ))}
      </Grid>
    </>
  );

  return (
    <Box>
      <Carousel items={itemBanners} />
      <Container maxW="container.xl">
        <HeroSection />
      </Container>
      <Box
        marginY="42px"
        backgroundColor="#f0f8ff"
        height="290px"
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
    </Box>
  );
}

HomePageContainerDesktop.propTypes = {
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

export default HomePageContainerDesktop;
