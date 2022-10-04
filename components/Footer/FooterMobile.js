import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Center, Container, Flex, Text } from '@chakra-ui/react';
import NextLink from '../NextLink';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

function FooterMobile() {
  return (
    <>
      <Box
        backgroundColor="#00264d"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
            <Flex flexDirection="column" gap={2}>
              <Text fontWeight="semibold" fontSize="3xl">
                Tautan Cepat
              </Text>
              <NextLink link={'/'}>
                <Text>Beranda</Text>
              </NextLink>
              <NextLink link={'/'}>
                <Text>Tentang</Text>
              </NextLink>
              <NextLink link={'/'}>
                <Text>Informasi</Text>
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
                <NextLink link="">
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="#718096" variant="unstyled">
                      <FaFacebookSquare />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink link="">
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="#718096" variant="unstyled">
                      <FaLinkedin />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink link="">
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="#718096" variant="unstyled">
                      <FaInstagram />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink link="">
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="#718096" variant="unstyled">
                      <FaTwitter />
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
        paddingY={2}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontWeight="bold" fontSize="lg" color="#00264d">
          KamiUMKM | Copyright @ 2022 All Rights Reserved
        </Text>
      </Flex>
    </>
  );
}

FooterMobile.propTypes = {};

export default FooterMobile;
