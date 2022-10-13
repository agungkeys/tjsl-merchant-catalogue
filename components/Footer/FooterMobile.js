import React from 'react';
import PropTypes from 'prop-types';
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
import NextLink from '../NextLink';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function FooterMobile() {
  return (
    <>
      <Box
        backgroundColor="#1746a2"
        color="#fff"
        alignItems="center"
        paddingY="42px"
      >
        <Container maxW="container.xl">
          <Flex flexDirection="column" gap={6}>
            <Box>
              <Text fontWeight="semibold" fontSize="3xl">
                KamiUMKM
              </Text>
              <Text fontWeight="light" fontSize="md">
                KamiUMKM adalah program Pupuk Kaltim untuk menghimpun seluruh
                UMKM binaan PT Pupuk Kaltim dalam suatu wadah digital.
              </Text>
            </Box>
            <Flex flexDirection="column" gap={2}>
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
            </Flex>
            <Flex flexDirection="column" gap={4} width="300px">
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
            <Flex flexDirection="column" gap={4} width="300px">
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
              </Flex>
              <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                <GridItem>
                  <Image
                    src="https://res.cloudinary.com/borneos-co/image/upload/v1664423538/images/sponsor/125144863_1_1_truasu.png"
                    alt="PT Pupuk Kaltim"
                    height="50px"
                    objectFit="contain"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    src="https://res.cloudinary.com/borneos-co/image/upload/v1664423539/images/sponsor/logo-pkt-sahabat-umkm_ofbadt.png"
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
              </Grid>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Flex
        bgColor="f0f8ff"
        justifyContent="center"
        alignItems="center"
        padding={4}
      >
        <Text fontWeight="bold" fontSize="sm" color="#00264d">
          KamiUMKM | Copyright &copy; 2022 All Rights Reserved
        </Text>
      </Flex>
    </>
  );
}

FooterMobile.propTypes = {};

export default FooterMobile;
