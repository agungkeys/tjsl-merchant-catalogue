import PropTypes from 'prop-types';
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import { Router, useRouter } from 'next/router';
import { BlogCard, NextLink } from '../../components';

function BlogsPageContainerDesktop(props) {
  const router = useRouter();
  const {
    dataBlogs,
    isErrorBlogs,
    isLoadingBlogs,
    isFetchingBlogs,
    isSuccessBlogs,
  } = props;

  return (
    <Box>
      <Container maxW="container.xl" paddingY="16px">
        <Text marginY="24px" fontWeight="extrabold" fontSize="5xl">
          Blog Kami
        </Text>
        <Grid
          h="500px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          {dataBlogs?.data?.slice(0, 3).map((item, idx) => (
            <GridItem
              key={item?.id}
              rowSpan={idx > 0 ? 0 : 2}
              colSpan={idx > 0 ? 2 : 3}
              padding="16px"
              borderRadius="16px"
              sx={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item?.image})`,
                backgroundSize: 'cover',
              }}
              onClick={() => router.push(`/blog/${item?.slug}`)}
              cursor="pointer"
              height="100%"
            >
              <Flex
                flexDirection="column"
                height="100%"
                justifyContent="space-between"
              >
                <Box>
                  <Badge colorScheme="purple" borderRadius="xl">
                    {item?.category?.name || ''}
                  </Badge>
                  <Text fontWeight="bold" fontSize="5xl" color="#fff">
                    {item?.title || ''}
                  </Text>
                </Box>
                <Flex justifyContent="space-between">
                  <Text fontSize="lg" color="#fff">
                    10 Oktober 2022
                  </Text>
                  <Text fontSize="lg" color="#fff">
                    Posted by {item?.author}
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>

        <Grid templateColumns="repeat(3, 1fr)" gap={4} marginY="32px">
          {dataBlogs?.data?.slice(3, 9).map((item, idx) => (
            <GridItem key={idx}>
              <BlogCard {...item} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

BlogsPageContainerDesktop.propTypes = {
  dataBlogs: PropTypes.object,
  isSuccessBlogs: PropTypes.bool,
  isErrorBlogs: PropTypes.bool,
  isLoadingBlogs: PropTypes.bool,
  isFetchingBlogs: PropTypes.bool,
};

export default BlogsPageContainerDesktop;
