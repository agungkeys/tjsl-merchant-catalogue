import PropTypes from 'prop-types';
import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import Maps from '../../components/Maps';
import ContactForm from './ContactForm';

function ContactPageContainerDesktop() {
  return (
    <Container maxW="container.xl" paddingY="16px">
      <VStack w="100%">
        <Text mb="24px" mt="8px" fontWeight="extrabold" fontSize="5xl">
          Kontak Kami
        </Text>
        <Flex w={'80%'}>
          <Maps />
        </Flex>
        <Flex w="89%" m={20} pt={4}>
          <Box w={'50%'} p={20} pt={0}>
            <Flex p={5} pt={0} pb={1}>
              <Text fontSize="24px" fontWeight="bold">
                Informasi Kontak
              </Text>
            </Flex>
            <Flex p={5}>
              <HiPhone />
              <Text ml={2} mt={-1}>
                +62 811-591-270
              </Text>
            </Flex>
            <Flex p={5}>
              <HiMail />
              <Text ml={2} mt={-1}>
                info@kamiumkm.com
              </Text>
            </Flex>
            <Flex p={5}>
              <HiLocationMarker />
              <Text ml={2} mt={-1}>
                Jl. James Simandjuntak No. 1. Bontang 75313. Kalimantan Timur,
                Indonesia.
              </Text>
            </Flex>
          </Box>
          <Box w="45%" borderLeft="1px" borderColor="gray.100" p={5} pt={0}>
            <ContactForm />
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
}

ContactPageContainerDesktop.propTypes = {
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default ContactPageContainerDesktop;
