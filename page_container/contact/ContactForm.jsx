import { useForm } from 'react-hook-form';
import { Box, Button, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { fetchResponder } from '../../hooks/useResponder';
import { useState } from 'react';
function ContactForm() {
  const schema = yup
    .object({
      name: yup.string().required('Nama wajib diisi'),
      email: yup
        .string()
        .email('Format email belum benar')
        .required('Email wajib diisi'),
      telp: yup.number('Telphone harus nomer').required('Telphone wajib diisi'),
      message: yup.string().required('Pesan wajib diisi'),
    })
    .required();

  const toast = useToast();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(
    '🚀 ~ file: ContactPageContainer.jsx ~ line 21 ~ ContactPageContainer ~ errors',
    errors,
  );

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    mutateResponder(data);
  };
  const { mutate: mutateResponder } = useMutation(fetchResponder, {
    retry: 3,
    onSuccess: async (data) => {
      console.log(data);
      setIsLoading(false);
      reset((formValues) => ({
        ...formValues,
        name: '',
        email: '',
        telp: '',
        message: '',
      }));
      toast({
        position: 'top-right',
        title: 'Pesanan Sukses Dibuat',
        description: `Mohon menunggu beberapa saat`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box p={2} pt={0}>
        <Text>Nama</Text>
        <Input isInvalid={errors?.name} {...register('name')} w="100%" />
        {(errors?.name && (
          <Text color="red.60" fontSize="md">
            {errors?.name?.message}
          </Text>
        )) ||
          null}
      </Box>
      <Box p={2}>
        <Text>Email</Text>
        <Input isInvalid={errors?.email} {...register('email')} w="100%" />
        {(errors?.email && (
          <Text color="red.60" fontSize="md">
            {errors?.email?.message}
          </Text>
        )) ||
          null}
      </Box>
      <Box p={2}>
        <Text>Nomor Telepon</Text>
        <Input isInvalid={errors?.telp} {...register('telp')} w="100%" />
        {(errors?.telp && (
          <Text color="red.60" fontSize="md">
            {errors?.telp?.message}
          </Text>
        )) ||
          null}
      </Box>
      <Box p={2}>
        <Text>Pesan</Text>
        <Textarea
          isInvalid={errors?.message}
          {...register('message')}
          w="100%"
        />
        {(errors?.message && (
          <Text color="red.60" fontSize="md">
            {errors?.message?.message}
          </Text>
        )) ||
          null}
      </Box>
      <Box p={2}>
        <Button
          type="submit"
          mt={3}
          variant="primary"
          fontWeight="bold"
          w="100%"
          isLoading={isLoading}
        >
          Kirim
        </Button>
      </Box>
    </form>
  );
}

export default ContactForm;
