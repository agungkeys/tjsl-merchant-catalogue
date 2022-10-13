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
import { HiChevronRight } from 'react-icons/hi';
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
    dataBanners,
    isErrorBanners,
    isLoadingBanners,
    isFetchingBanners,
    isSuccessBanners,
  } = props;

  const HeroSection = () => (
    <Flex gap={4} marginY="42px" flexDirection="column" paddingY="16px">
      <Text
        fontWeight="extrabold"
        fontSize="48px"
        color="#FF731D"
        lineHeight={1}
      >
        KamiUMKM
      </Text>
      <Flex gap={2} alignItems="center">
        <Text
          fontSize="14px"
          fontWeight="bold"
          textTransform="uppercase"
          color="#5f9df7"
        >
          Katalog Mitra UMKM Binaan
        </Text>
        <Image
          src="https://res.cloudinary.com/borneos-co/image/upload/v1664423538/images/sponsor/125144863_1_1_truasu.png"
          alt="Pupuk Kaltim"
          height="17px"
        />
      </Flex>
      <Text fontSize="14px" fontWeight="regular">
        <b>KamiUMKM</b> merupakan suatu program persembahan TJSL PKT dalam
        menghimpun seluruh UMKM binaan unggulan PKT dalam suatu wadah digital
        dengan tujuan mempromosikan dan memperkenalkan produk UMKM lokal Kota
        Bontang ke masyarakat luas.
      </Text>
      <Text fontSize="14px" fontWeight="regular">
        <b>KamiUMKM</b> juga merupakan bentuk kontribusi nyata PKT terhadap
        pertumbuhan dan kemajuan UMKM di Indonesia, khususnya Kalimantan Timur
        dengan berkolaborasi dengan pemangku kepentingan dan para profesional.
      </Text>
      <NextLink link="/about">
        <Button
          fontSize="sm"
          variant="primary"
          rightIcon={<HiChevronRight />}
          marginY="16px"
          boxShadow="lg"
        >
          Selengkapnya
        </Button>
      </NextLink>
      <Image
        src="https://res.cloudinary.com/borneos-co/image/upload/v1665562112/tjsl-core/hero-section/Manipulasi_1_btinhk.png"
        alt=""
        width="350px"
        alignSelf="center"
        className="image-hero"
        marginTop="-50px"
      />
    </Flex>
  );

  const BenefitSection = () => (
    <>
      <Box paddingY="24px">
        <Text
          fontWeight="bold"
          fontSize="24px"
          textAlign="center"
          marginBottom="12px"
        >
          Visi Misi TJSL Pupuk Kaltim
        </Text>
        <Flex flexDirection="column" gap={4}>
          <Box
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
            <Image
              src="./service_2.png"
              alt=""
              boxSize="128px"
              margin="0 auto"
            />
            <Text
              textAlign="center"
              fontSize="24px"
              marginBottom="16px"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Visi
            </Text>

            <Box>
              <Text fontWeight="normal" fontSize="md" textAlign="center">
                Terwujudnya masyarakat mandiri dan berkelanjutan berbasis
                hubungan yang harmonis antara perusahaan dan masyarakat.
              </Text>
            </Box>
          </Box>
          <Box
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
            <Image
              src="./service_3.png"
              alt=""
              boxSize="128px"
              margin="0 auto"
            />
            <Text
              textAlign="center"
              fontSize="24px"
              marginBottom="16px"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Misi
            </Text>
            <Box paddingX="12px">
              <ul>
                <li>
                  <Text fontSize="sm" fontWeight="normal">
                    Memberdayakan potensi sumber daya lokal dengan membentuk
                    kegiatan usaha yang dapat meningkatkan taraf ekonomi dan
                    kemandirian masyarakat,
                  </Text>
                </li>
                <li>
                  <Text fontSize="sm" fontWeight="normal">
                    Menciptakan keserasian lingkungan sekitar dengan membangun
                    infrastruktur pendukung secara berkelanjutan,
                  </Text>
                </li>
                <li>
                  <Text fontSize="sm" fontWeight="normal">
                    Meningkatkan sinergi dan citra positif perusahaan dengan
                    stakeholder untuk berkelanjutan operasional perusahaan.
                  </Text>
                </li>
              </ul>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
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
      <Text fontWeight="extrabold" fontSize="18px" marginBottom="16px">
        Kategori Mitra Binaan Kami
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
    <NextLink link={`/merchants?category=${item?.slug}`}>
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
              <BlogCard key={idx} {...item} isMobile />
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
      {isLoadingBanners && isFetchingBanners && (
        <Carousel isSkeleton isMobile />
      )}
      {isSuccessBanners && <Carousel items={dataBanners} isMobile />}
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
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="extrabold" fontSize="18px">
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
        backgroundImage="https://res.cloudinary.com/borneos-co/image/upload/v1665653072/tjsl-core/background/blog_bg_tnbbed.png"
        backgroundSize="cover"
        marginY="32px"
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
  dataBanners: PropTypes.object,
  isErrorBanners: PropTypes.bool,
  isLoadingBanners: PropTypes.bool,
  isFetchingBanners: PropTypes.bool,
  isSuccessBanners: PropTypes.bool,
};

export default HomePageContainerMobile;
