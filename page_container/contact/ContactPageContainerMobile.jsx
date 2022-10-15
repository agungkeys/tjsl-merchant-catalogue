import PropTypes from 'prop-types';
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
  const { 
    register,
    handleSubmit,
    errors,
    onSubmit
  } = props;

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box marginY="24px">
            <Box pt={0}>
              <Text>Nama</Text>
              <Input isInvalid={errors?.name} {...register("name")} w="100%" />
              {errors?.name && <Text color="red.60" fontSize="md">{errors?.name?.message}</Text> || null}
            </Box>
            <Box pt={3}>
              <Text>Email</Text>
              <Input isInvalid={errors?.email}  {...register("email")} w="100%" />
              {errors?.email && <Text color="red.60" fontSize="md">{errors?.email?.message}</Text> || null}
            </Box>
            <Box pt={3}>
              <Text>Nomor Telepon</Text>
              <Input isInvalid={errors?.telp}  {...register("telp")} w="100%" />
              {errors?.telp && <Text color="red.60" fontSize="md">{errors?.telp?.message}</Text> || null}
            </Box>
            <Box pt={3}>
              <Text>Pesan</Text>
              <Textarea isInvalid={errors?.message}  {...register("message")} w="100%" />
              {errors?.message && <Text color="red.60" fontSize="md">{errors?.message?.message}</Text> || null}
            </Box>
            <Button type="submit" mt={6} variant="primary" fontWeight="bold" w="100%">
              Kirim
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

ContactPageContainerMobile.propTypes = {
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  onSubmit: PropTypes.func
};

export default ContactPageContainerMobile;
