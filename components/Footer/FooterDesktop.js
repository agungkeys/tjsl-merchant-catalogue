import {
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebookSquare,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import NextLink from '../NextLink';

function FooterDesktop(props) {
  return (
    <>
      <Flex
        backgroundColor="#1746a2"
        color="#fff"
        alignItems="center"
        paddingY="42px"
      >
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <Flex flexDirection="column" gap={1} width="300px">
              <Image
                src="https://res.cloudinary.com/borneos-co/image/upload/v1664949490/tjsl-core/icon-logo/kamiumkm_white_gfc8kf.png"
                alt="Logo KamiUMKM"
                width="250px"
              />
              <Text fontWeight="light" fontSize="sm">
                KamiUMKM adalah program Pupuk Kaltim untuk menghimpun seluruh
                UMKM binaan PT Pupuk Kaltim dalam suatu wadah digital.
              </Text>
            </Flex>
            <Flex flexDirection="column" gap={4}>
              <Text fontWeight="semibold" fontSize="3xl">
                Tautan Cepat
              </Text>
              <NextLink link="/">
                <Text>Beranda</Text>
              </NextLink>
              <NextLink link="/merchants">
                <Text>Mitra</Text>
              </NextLink>
              <NextLink link="/contact">
                <Text>Kontak</Text>
              </NextLink>
              <NextLink link="https://www.pupukkaltim.com" target="_blank">
                <Text>PT. Pupuk Kaltim</Text>
              </NextLink>
              <NextLink link="https://www.borneos.co/" target="_blank">
                <Text>Borneos.co</Text>
              </NextLink>
            </Flex>
            <Flex flexDirection="column" gap={2} width="300px">
              <Text fontWeight="semibold" fontSize="3xl">
                Alamat Kantor
              </Text>
              <Text fontWeight="light" fontSize="md">
                Jl. James Simanjuntak Simandjuntak No.1, Guntung, Kec. Bontang
                Utara, Kota Bontang, Kalimantan Timur 75313
              </Text>
              <Text>Hotline</Text>
              <NextLink link="https://wa.me/62811591270" target="_blank">
                <Text>0811-591-270</Text>
              </NextLink>
            </Flex>
            <Flex flexDirection="column" gap={2} width="300px">
              <Text fontWeight="semibold" fontSize="3xl">
                Ikuti Kami
              </Text>
              <Flex gap={2}>
                <NextLink
                  link="https://instagram.com/pupukkaltim_id?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="white" variant="unstyled">
                      <FaInstagram />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink
                  link="https://twitter.com/pupukkaltim_id?s=11&t=tu09Rmou7btYxsDThRKzmg"
                  target="_blank"
                >
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="white" variant="unstyled">
                      <FaTwitter />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink
                  link="https://youtube.com/channel/UCEOm2rbBBTJ2qYOB0WKYWGQ"
                  target="_blank"
                >
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="white" variant="unstyled">
                      <FaYoutube />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink
                  link="https://www.tiktok.com/@tjsl_pupukkaltim?_t=8WNp7cCpa3F&_r=1"
                  target="_blank"
                >
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="white" variant="unstyled">
                      <FaTiktok />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink link="https://www.pupukkaltim.com" target="_blank">
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="white" variant="unstyled">
                      <FaGlobe />
                    </Button>
                  </Center>
                </NextLink>
              </Flex>
              <Grid
                templateColumns="repeat(4, 1fr)"
                gap={3}
                alignItems="center"
              >
                <GridItem>
                  <Image
                    src="https://res.cloudinary.com/borneos-co/image/upload/v1665804074/tjsl-core/icon-logo/Logo_PKT_2_rxv6vu.png"
                    alt="PT Pupuk Kaltim"
                    height="50px"
                    objectFit="contain"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://res.cloudinary.com/borneos-co/image/upload/v1665804073/tjsl-core/icon-logo/Sahabat_ukceak.png"
                    alt="PKT Sahabat UMKM"
                    height="50px"
                    objectFit="contain"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://res.cloudinary.com/borneos-co/image/upload/v1665659247/tjsl-core/icon-logo/logo-bangga-buatan-indonesia-4_qbbbut.png"
                    alt="Bangga Produk Indonesia"
                    height="50px"
                    objectFit="contain"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://res.cloudinary.com/borneos-co/image/upload/v1666428552/tjsl-core/icon-logo/logo_borneos_white_zmxec7.png"
                    alt="Bangga Produk Indonesia"
                    height="80px"
                    objectFit="contain"
                  />
                </GridItem>
              </Grid>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Flex
        bgColor="f0f8ff"
        paddingY={2}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontWeight="normal" fontSize="14px" color="#00264d">
          KamiUMKM | Copyright &copy; 2022 - TJSL PT. Pupuk Kalimantan Timur
        </Text>
      </Flex>
    </>
  );
}

FooterDesktop.propTypes = {};

export default FooterDesktop;
