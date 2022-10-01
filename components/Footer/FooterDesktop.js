import { Button, Center, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import NextLink from '../NextLink';

function FooterDesktop(props) {
  return (
    <>
      <Flex
        backgroundColor="#00264d"
        color="#fff"
        alignItems="center"
        paddingY="42px"
      >
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <Flex flexDirection="column" gap={4} width="300px">
              <Text fontWeight="semibold" fontSize="3xl">
                KamiUMKM
              </Text>
              <Text fontWeight="light" fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Flex>
            <Flex flexDirection="column" gap={4}>
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
      </Flex>
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

FooterDesktop.propTypes = {};

export default FooterDesktop;
