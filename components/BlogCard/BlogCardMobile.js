import { Flex, Image, Text } from '@chakra-ui/react';
import NextLink from '../NextLink';

function BlogCardMobile(props) {
  return (
    <>
      <NextLink link="">
        <Flex
          flexDirection="column"
          gap={3}
          bgColor="#fff"
          borderRadius="16px"
          padding="9px"
          boxShadow="md"
        >
          <Image
            src="./pancake.jpg"
            alt=""
            borderRadius="8px"
            height="150px"
            objectFit="cover"
          />
          <Text fontSize="md" fontWeight="extrabold">
            Apa itu KamiUMKM?
          </Text>
          <Text fontWeight="light" fontSize="sm" noOfLines={2}>
            KamiUMKM merupakan Katalog Mitra UMKM Binaan TJSL PT. PUPUK KALTIM
            Mitra UMKM Binaan TJSL PT. PUPUK KALTIM
          </Text>
          <Flex justifyContent="space-between">
            <Text fontSize="sm">30 September 2022</Text>
            <Text fontSize="sm">Posted by admin</Text>
          </Flex>
        </Flex>
      </NextLink>
    </>
  );
}

export default BlogCardMobile;
