import { Button, Center, Container, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebookSquare,
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
        backgroundColor="#00264d"
        color="#fff"
        alignItems="center"
        paddingY="42px"
      >
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            <Flex flexDirection="column" gap={4} width="300px">
              <Image
                src="https://res.cloudinary.com/borneos-co/image/upload/v1664949490/tjsl-core/icon-logo/kamiumkm_white_gfc8kf.png"
                alt="Logo KamiUMKM"
                width="250px"
              />
              <Text fontWeight="light" fontSize="md">
                KamiUMKM adalah program Pupuk Kaltim untuk menghimpun seluruh
                UMKM binaan PT Pupuk Kaltim dalam suatu wadah digital.
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
                <Text>Mitra</Text>
              </NextLink>
              <NextLink link={'/'}>
                <Text>Tentang</Text>
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
                    <Button h="full" color="#718096" variant="unstyled">
                      <FaInstagram />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink
                  link="https://twitter.com/pupukkaltim_id?s=11&t=tu09Rmou7btYxsDThRKzmg"
                  target="_blank"
                >
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="#718096" variant="unstyled">
                      <FaTwitter />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink
                  link="https://youtube.com/channel/UCEOm2rbBBTJ2qYOB0WKYWGQ"
                  target="_blank"
                >
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="#718096" variant="unstyled">
                      <FaYoutube />
                    </Button>
                  </Center>
                </NextLink>
                <NextLink
                  link="https://www.tiktok.com/@tjsl_pupukkaltim?_t=8WNp7cCpa3F&_r=1"
                  target="_blank"
                >
                  <Center w="48px" h="48px" borderRadius="8px">
                    <Button h="full" color="#718096" variant="unstyled">
                      <FaTiktok />
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
          KamiUMKM | Copyright &copy; 2022 All Rights Reserved
        </Text>
      </Flex>
    </>
  );
}

FooterDesktop.propTypes = {};

export default FooterDesktop;
