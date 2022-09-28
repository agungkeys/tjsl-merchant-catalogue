import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { Carousel } from "../../components";
import Product from "../../components/Product";

function HomePageContainerDesktop() {
  const itemBanners = [
    {
      id: 0,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1660137793/images/banners/cy1iztwb4bf6xbp89x1g.webp",
      title: "image-banner-0",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1660137643/images/banners/v3pxsshr9tybdalab3js.webp",
      title: "image-banner-1",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1660137500/images/banners/j6ptjrhj8szcrp3r0xpi.webp",
      title: "image-banner-2",
    },
  ];

  const itemServices = [
    {
      id: 0,
      image: "service_1.png",
      name: "Manfaat",
      description:
        "Memberikan kemanfaatan bagi pembangunan ekonomi, sosial, lingkungan, hukum dan tata kelola bagi perusahaan.",
    },
    {
      id: 1,
      image: "service_2.png",
      name: "Kontribusi",
      description:
        "Berkontribusi meningkatkan nilai tambah dengan prinsip yang terintegrasi, terarah dan terukur dampaknya serta akuntabel.",
    },
    {
      id: 2,
      image: "service_3.png",
      name: "Pembinaan",
      description:
        "Membina usaha mikro dan usaha kecil agar lebih tangguh dan mandiri serta masyarakat sekitar perusahaan.",
    },
  ];

  const itemCategories = [
    {
      id: 0,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1644567865/images/categories/Semua_eiizmq.svg",
      name: "Semua",
      description: "Semua Kategori",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1650784158/images/categories/xfx103dzxgsmhklumm5k.png",
      name: "Pertanian",
      description: "Kategori Pertanian",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1650784098/images/categories/pfh9klzrjkut442o24ae.png",
      name: "Fashion",
      description: "Kategori Fashion & Kain",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/borneos-co/image/upload/v1650784487/images/categories/jrgbaz2nm2cgrxyufwjt.png",
      name: "Perdagangan",
      description: "Kategori Perdagangan",
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
        <Box marginBottom="12px">
          <Text
            fontWeight="semibold"
            textTransform="uppercase"
            textDecoration=""
            fontSize="48px"
            color="#F57921"
          >
            Pupuk Kaltim
          </Text>
          <Text
            fontSize="32px"
            fontWeight="semibold"
            textTransform="uppercase"
            color="#0D5099"
          >
            UMKM Akademi
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
              transform: "translate(-0.5rem, -0.5rem)",
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
                  {" "}
                  {item.description}{" "}
                </Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </>
  );

  const MerchantSection = () => (
    <Flex justifyContent="space-between" width="100%">
      {[...Array(3)].map((item, idx) => (
        <Box
          key={idx}
          marginY="32px"
          borderRadius="16px"
          height="450px"
          boxShadow="lg"
          width="400px"
        >
          <Box
            backgroundColor="#0D5099"
            borderTopRadius="16px"
            height="100px"
          ></Box>
          <Flex paddingX="32px" width="100%" justifyContent="space-between">
            <Flex
              alignItems="center"
              justifyContent="center"
              rounded="full"
              boxSize="100px"
              backgroundColor="#fff"
              marginTop="-50px"
              boxShadow="lg"
            >
              <Image boxSize="64px" src="/home.png" alt="" />
            </Flex>
            <Box
              alignItems="center"
              justifyContent="center"
              width="220px"
              height="100px"
              backgroundColor="#fff"
              marginTop="-50px"
              boxShadow="lg"
              padding="12px"
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
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={6}
            marginX="32px"
            marginY="32px"
          >
            {[...Array(2)].map((item, idx) => (
              <GridItem key={idx}>
                <Product onMerchant />
              </GridItem>
            ))}
          </Grid>
        </Box>
      ))}
    </Flex>
  );

  return (
    <>
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
        <MerchantSection />
      </Container>
    </>
  );
}

export default HomePageContainerDesktop;
