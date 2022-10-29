import PropTypes from 'prop-types';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import Maps from '../../components/Maps';
import ContactForm from './ContactForm';
import { NextLink } from '../../components';

function ContactPageContainerMobile() {
  return (
    <Box>
      <Container maxW="container.xl">
        <Text fontSize="24px" fontWeight="bold">
          Kontak Kami
        </Text>
        <Box marginY="24px">
          <Maps />
        </Box>
        <Box marginY="16px">
          <Flex flexDir="column" gap={3}>
            <Flex>
              <Text fontSize="24px" fontWeight="bold">
                Informasi Kontak
              </Text>
            </Flex>
            <Flex>
              <NextLink link="tel:+62811591270" target="_blank">
                <Button leftIcon={<HiPhone />} variant="link" color="#000">
                  +62 811-591-270
                </Button>
              </NextLink>
            </Flex>
            <Flex>
              <NextLink link="mailto:info@kamiumkm.com" target="_blank">
                <Button leftIcon={<HiMail />} variant="link" color="#000">
                  info@kamiumkm.com
                </Button>
              </NextLink>
            </Flex>
            <Flex>
              <HiLocationMarker />
              <Text ml={2} mt={-1}>
                Jl. James Simandjuntak No. 1. Bontang 75313. Kalimantan Timur,
                Indonesia.
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box py={4}>
          <ContactForm />
        </Box>
      </Container>
    </Box>
  );
}

ContactPageContainerMobile.propTypes = {
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default ContactPageContainerMobile;
