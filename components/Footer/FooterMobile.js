import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Center, Container, Flex, Text } from '@chakra-ui/react';
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
              <Text>Hotline</Text>
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
        <Text fontWeight="bold" fontSize="lg" color="#00264d">
          KamiUMKM | Copyright &copy; 2022 All Rights Reserved
        </Text>
      </Flex>
    </>
  );
}

FooterMobile.propTypes = {};

export default FooterMobile;
