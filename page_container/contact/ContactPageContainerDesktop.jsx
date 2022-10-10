import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import Maps from '../../components/Maps';

function ContactPageContainerDesktop(props) {
  return (
    <Flex>
      <VStack w="100%">
        <Box m={2} mb={0}>
          <Text fontSize={'36px'} fontWeight="bold">
            Kontak Kami
          </Text>
        </Box>
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
                +62 812345678
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
                Jl. James Simandjuntak No. 1. Bontang 75313. Kalimantan Timur, Indonesia.
              </Text>
            </Flex>
          </Box>
          <Box w="45%" borderLeft={'1px'} borderColor="gray.100" p={5} pt={0}>
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
        </Flex>
      </VStack>
    </Flex>
  );
}

export default ContactPageContainerDesktop;