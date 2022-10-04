import { Box, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import NextLink from '../NextLink';

function BlogCardDesktop(props) {
  const { blogTitle, blogDescription, blogCategory, blogAuthor, blogPostDate } =
    props;
  return (
    <NextLink link="">
      <Box
        borderRightRadius="8px"
        backgroundColor="#fff"
        padding="8px"
        position="relative"
        top="80px"
        boxShadow="md"
        display="inline-block"
        zIndex={2}
      >
        <Text color="#0D5099" fontWeight="bold">
          Sosial
        </Text>
      </Box>
      <Box borderRadius="8px" boxShadow="lg" width="385px">
        <Image
          borderTopRadius="8px"
          src="./pancake.jpg"
          alt=""
          objectFit="cover"
          width="100%"
          height="250px"
        />
        <Box padding="16px">
          <Text fontSize="xl" fontWeight="extrabold">
            Apa itu KamiUMKM?
          </Text>
          <Text fontWeight="light" marginTop="12px" fontSize="md" noOfLines={2}>
            KamiUMKM merupakan Katalog Mitra UMKM Binaan TJSL PT. PUPUK KALTIM
            Mitra UMKM Binaan TJSL PT. PUPUK KALTIM
          </Text>
          <Flex justifyContent="space-between" marginTop="12px">
            <Text fontSize="sm">30 September 2022</Text>
            <Text fontSize="sm">Posted by admin</Text>
          </Flex>
        </Box>
      </Box>
    </NextLink>
  );
}

BlogCardDesktop.propTypes = {
  blogTitle: PropTypes.string,
  blogDescription: PropTypes.string,
  blogCategory: PropTypes.string,
  blogAuthor: PropTypes.string,
  blogPostDate: PropTypes.string,
};

export default BlogCardDesktop;
