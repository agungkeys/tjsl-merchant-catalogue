import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import Maps from '../../components/Maps';

function ContactPageContainerMobile(props) {
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
              <HiPhone />
              <Text ml={2} mt={-1}>
                +62 811-591-270
              </Text>
            </Flex>
            <Flex>
              <HiMail />
              <Text ml={2} mt={-1}>
                info@kamiumkm.com
              </Text>
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
        <Box marginY="24px">
          <Box p={2} pt={0}>
            <Text>Nama</Text>
            <Input w={'100%'} name="nama" />
          </Box>
          <Box p={2}>
            <Text>Email</Text>
            <Input w={'100%'} name="email" type={'email'} />
          </Box>
          <Box p={2}>
            <Text>Nomor Telepon</Text>
            <Input w={'100%'} name="telp" />
          </Box>
          <Box p={2}>
            <Text>Pesan</Text>
            <Textarea name="pesan" w={'100%'} />
          </Box>
          <Box p={2}>
            <Button bgColor={'#00A3FF'} fontWeight="bold">
              Kirim
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactPageContainerMobile;
