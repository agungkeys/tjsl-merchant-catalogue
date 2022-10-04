import {
  Box,
  Flex,
  Center,
  Image,
  Text,
  Grid,
  VStack,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { Product, Pagination, NextLink } from '../../components';
import { HiLink, HiShare } from 'react-icons/hi';

function MerchantPageContainerDesktop(props) {
  return (
    <Grid>
      <Box
        bgImage="https://res.cloudinary.com/borneos-co/image/upload/h_600/v1658911436/images/favourites/Featured_d8mpdr.webp"
        w="100%"
        minH={300}
        display="flex"
        alignItems="center"
        justifyItems="justify"
      >
        <Flex pl={200}>
          <Center
            rounded="full"
            boxSize="136px"
            backgroundColor="#fff"
            // marginTop="-50px"
            boxShadow="lg"
            // w="156px"
          >
            <Image boxSize="120px" src="/home.png" alt="" />
          </Center>
          <Center p={3} al>
            <Text fontSize="38px" fontWeight={'bold'}>
              Rumah Habati
            </Text>
          </Center>
        </Flex>
      </Box>
      <VStack>
        <Flex
          borderRadius={30}
          w="72%"
          my="-5.9%"
          mx={0}
          position={'relative'}
          minH="130px"
          bgColor={'white'}
          shadow={'md'}
          p={5}
        >
          <Box>
            <Text fontSize="16px">Jl Gunung Arjuna No.3 BSD, Rumah Habati</Text>
            <Text fontSize="14px">Kategori Makanan dan Minuman</Text>
          </Box>
          <Spacer />
          <Box>
            <Button leftIcon={<HiShare />}>Bagikan Halaman</Button>
          </Box>
        </Flex>
        <Flex>aa</Flex>
      </VStack>
      <VStack>
        <Flex w="72%">
          <Box mt="2%" p="1%">
            <Grid
              templateColumns="repeat(3, 1fr)"
              justifyContent="space-between"
              gap={5}
              p={8}
            >
              {[...Array(9)].map((item, idx) => (
                <Box key={idx}>
                  <Product isShowPrice isLanding isDetail />
                </Box>
              ))}
            </Grid>
          </Box>
        </Flex>
      </VStack>
    </Grid>
  );
}

export default MerchantPageContainerDesktop;
