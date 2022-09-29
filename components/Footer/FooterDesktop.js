import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import NextLink from '../NextLink';

function FooterDesktop(props) {
  return (
    <Flex
      backgroundColor="#135690"
      color="#fff"
      alignItems="center"
      paddingY="24px"
    >
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="semibold" fontSize="32px">
            KamiUMKM
          </Text>
          <Box>
            <NextLink link={'/'}>
              <Text>Beranda</Text>
            </NextLink>
            <NextLink link={'/'}>
              <Text>Tentang</Text>
            </NextLink>
            <NextLink link={'/'}>
              <Text>Informasi</Text>
            </NextLink>
          </Box>
          <Box width="400px">
            <Text>Alamat Kantor</Text>
            <Text>
              Jl. James Simanjuntak Simandjuntak No.1, Guntung, Kec. Bontang
              Utara, Kota Bontang, Kalimantan Timur 75313
            </Text>
          </Box>
          <Box>
            <Flex>
              <Text>+628123131</Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}

FooterDesktop.propTypes = {};

export default FooterDesktop;
