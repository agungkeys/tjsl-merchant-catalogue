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
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { BiChevronRight } from 'react-icons/bi';
import { HiChevronRight } from 'react-icons/hi';
import { BlogCard, Carousel, NextLink, Product } from '../../components';

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
    dataBanners,
    isErrorBanners,
    isLoadingBanners,
    isFetchingBanners,
    isSuccessBanners,
  } = props;

  const router = useRouter();

  const HeroSection = () => (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={6}
        alignItems="center"
        backgroundSize="cover"
      >
        <GridItem>
          <Box marginBottom="8px">
            <Text
              fontWeight="extrabold"
              fontSize="48px"
              color="#FF731D"
              lineHeight={1}
            >
              KamiUMKM
            </Text>
            <Flex gap={2}>
              <Text
                fontSize="23px"
                fontWeight="bold"
                textTransform="uppercase"
                color="#5f9df7"
              >
                Katalog Mitra UMKM Binaan
              </Text>
              <Image
                src="https://res.cloudinary.com/borneos-co/image/upload/v1664423538/images/sponsor/125144863_1_1_truasu.png"
                alt="Pupuk Kaltim"
                height="30px"
              />
            </Flex>
          </Box>
          <Text fontSize="18px" fontWeight="regular">
            <b>KamiUMKM</b> merupakan suatu program persembahan TJSL PKT dalam
            menghimpun seluruh UMKM binaan unggulan PKT dalam suatu wadah
            digital dengan tujuan mempromosikan dan memperkenalkan produk UMKM
            lokal Kota Bontang ke masyarakat luas. <br />
          </Text>
          <Text fontSize="18px" fontWeight="regular" marginTop="12px">
            <b>KamiUMKM</b> juga merupakan bentuk kontribusi nyata PKT terhadap
            pertumbuhan dan kemajuan UMKM di Indonesia, khususnya Kalimantan
            Timur dengan berkolaborasi dengan pemangku kepentingan dan para
            profesional.
          </Text>
          <NextLink link="/about">
            <Button
              fontSize="md"
              variant="primary"
              rightIcon={<HiChevronRight />}
              marginY="16px"
              boxShadow="lg"
            >
              Selengkapnya
            </Button>
          </NextLink>
        </GridItem>
        <GridItem>
          <Flex>
            <Image
              src="https://res.cloudinary.com/borneos-co/image/upload/v1665562112/tjsl-core/hero-section/Manipulasi_1_btinhk.png"
              alt=""
              width="550px"
              className="image-hero"
              marginTop="-120px"
            />
          </Flex>
        </GridItem>
      </Grid>
    </>
  );

  const BenefitSection = () => (
    <>
      <Text color="white" fontWeight="bold" fontSize="5xl" textAlign="center">
        Visi Misi TJSL Pupuk Kaltim
      </Text>
      <Flex gap={3} marginY="16px">
        <Box width="40%">
          <Text
            color="white"
            fontWeight="bold"
            fontSize="5xl"
            textAlign="center"
          >
            Visi
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
            <Flex gap={1}>
              <Image
                src="https://res.cloudinary.com/borneos-co/image/upload/v1665650542/tjsl-core/icon-logo/service_2_lbbo2x.webp"
                alt=""
                boxSize="92px"
              />
              <Text fontSize="lg" fontWeight="normal">
                Terwujudnya masyarakat mandiri dan berkelanjutan berbasis
                hubungan yang harmonis antara perusahaan dan masyarakat.
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box width="60%">
          <Text
            color="white"
            fontWeight="bold"
            fontSize="5xl"
            textAlign="center"
          >
            Misi
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
              <Image
                src="https://res.cloudinary.com/borneos-co/image/upload/v1665650541/tjsl-core/icon-logo/service_3_wa5xp7.webp"
                alt=""
                boxSize="92px"
              />
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
    </>
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
    <Box paddingY="18px" marginY="32px">
      <Text fontWeight="bold" fontSize="5xl">
        Kategori Mitra Binaan Kami
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
      <NextLink link={`/merchants?category=${item?.slug}`}>
        <Flex
          flexDirection="column"
          alignItems="start"
          textAlign="start"
          boxShadow="lg"
          padding="24px"
          _hover={{
            transform: 'translate(-0.5rem, -0.5rem)',
            bg: '#ff731d',
            color: '#fff',
          }}
          transition="all 0.5s ease-in-out"
          borderRadius="16px"
          w="230px"
          h="100%"
          backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665454114/tjsl-core/categories/bg-top-campaign_1_3_jrj0kt.webp"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          backgroundPosition="top"
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
          <Text fontWeight="extrabold" fontSize="xl">
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
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold" fontSize="5xl">
          Mitra Unggulan Kami
        </Text>
        <NextLink link="/merchants">
          <Button variant="link" rightIcon={<BiChevronRight />}>
            Lihat semua
          </Button>
        </NextLink>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {isLoadingMerchants &&
          isFetchingMerchants &&
          [...Array(3)].map((item, idx) => (
            <GridItem key={idx}>
              <SkeletonMerchant />
            </GridItem>
          ))}

        {isSuccessMerchants &&
          dataMerchants?.data.slice(0, 3).map((item, idx) => (
            <GridItem key={item?.id}>
              <NextLink
                style={{
                  width: '100%',
                }}
                link={`/merchants/${item?.slug}`}
              >
                <Box
                  marginY="32px"
                  borderRadius="16px"
                  boxShadow="lg"
                  w="100%"
                  cursor="pointer"
                >
                  <Box
                    bgImage={
                      item?.additionalImageCover
                        ? populateAdditionalImage({
                            ...item?.additionalImageCover,

                            extension: 'webp',
                          })
                        : 'https://res.cloudinary.com/borneos-co/image/upload/v1665467026/tjsl-core/merchants/cover_image/cover_head_udsiml.webp'
                    }
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"
                    backgroundPosition="top-right"
                    borderTopRadius="16px"
                    height="100px"
                  ></Box>
                  <Flex paddingX="32px" width="100%" gap={4}>
                    <Center
                      rounded="full"
                      boxSize="100px"
                      backgroundColor="#fff"
                      marginTop="-30px"
                      boxShadow="lg"
                      w="156px"
                    >
                      {item?.image ? (
                        <Image
                          borderRadius="4em"
                          boxSize="100%"
                          src={item?.image}
                          alt={item?.name}
                          fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/v1644554350/images/item-empty_iiuizg.webp"
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
                      marginTop="-30px"
                      boxShadow="lg"
                      padding="12px"
                      w="100%"
                      borderRadius="10px"
                    >
                      <Text fontWeight="bold" fontSize="md">
                        {item?.name || ''}
                      </Text>
                      <Text
                        fontWeight="semibold"
                        fontSize="sm"
                        color="primary.0"
                      >
                        Kategori {item?.category?.name || ''}
                      </Text>
                      <Text fontWeight="light" fontSize="sm" noOfLines={2}>
                        {item?.address || ''}
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
              </NextLink>
            </GridItem>
          ))}
      </Grid>
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
      {isLoadingBanners && isFetchingBanners && <Carousel isSkeleton />}
      {isSuccessBanners && <Carousel items={dataBanners} />}
      <Box
        backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1666684629/tjsl-core/background/header_bg_vk0xwz.webp"
        backgroundSize="cover"
        paddingY="32px"
      >
        <Container maxW="container.xl">
          <HeroSection />
        </Container>
      </Box>
      <Box
        backgroundColor="#5f9df7"
        backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1666428214/tjsl-core/background/blog_bg_amxfvf.webp"
        backgroundSize="contain"
        paddingY="32px"
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
        <Flex
          alignItems="center"
          justifyContent="space-between"
          marginTop="16px"
        >
          <Text fontWeight="bold" fontSize="5xl">
            Blog Kami
          </Text>
          <NextLink link="/blog">
            <Button variant="link" rightIcon={<BiChevronRight />}>
              Lihat semua
            </Button>
          </NextLink>
        </Flex>
      </Container>
      <Box
        backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665653072/tjsl-core/background/blog_bg_tnbbed.webp"
        backgroundSize="cover"
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
  dataBanners: PropTypes.object,
  isErrorBanners: PropTypes.bool,
  isLoadingBanners: PropTypes.bool,
  isFetchingBanners: PropTypes.bool,
  isSuccessBanners: PropTypes.bool,
};

export default HomePageContainerDesktop;
