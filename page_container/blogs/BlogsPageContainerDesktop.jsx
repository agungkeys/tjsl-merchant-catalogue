import {
  Badge,
  Box,
  Button,
  CloseButton,
  Container,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { BlogCard, NextLink, Pagination } from '../../components';

function BlogsPageContainerDesktop(props) {
  const router = useRouter();
  const {
    category,
    dataBlogs,
    isErrorBlogs,
    isLoadingBlogs,
    isFetchingBlogs,
    isSuccessBlogs,
    dataBlogCategories,
    isErrorBlogCategories,
    isLoadingBlogCategories,
    isFetchingCategories,
    isSuccessBlogCategories,
    fetchPagination,
    fetchResetBlogs,
  } = props;

  function handleLink(slug) {
    return {
      pathname: `/blog?category=${slug}`,
      query: { category: slug },
      asPath: `/blog?category=${slug}`,
    };
  }

  return (
    <Container maxW="container.xl" paddingY="16px">
      <Text mb="24px" mt="8px" fontWeight="extrabold" fontSize="5xl">
        Blog Kami
      </Text>
      <Flex gap={2} marginBottom="16px">
        {dataBlogCategories?.data?.map((item) => (
          <NextLink key={item?.id} link={handleLink(item?.slug)}>
            <Button
              borderRadius="2em"
              backgroundColor={category === item?.slug ? `#ff731d` : `#e2eeff`}
              color={category === item?.slug ? `#fff` : `#000`}
              sx={{
                ':hover': {
                  backgroundColor:
                    category === item?.slug ? `#ff731d` : '#c2dbff',
                },
              }}
            >
              {item?.name}
            </Button>
          </NextLink>
        ))}
      </Flex>
      <Box marginTop="16px" marginBottom="32px">
        {category ? (
          <Flex color="gray.60" alignItems="center">
            <Text fontSize="14px">{`Menampilkan ${
              dataBlogs?.meta?.pagination?.total || '0'
            } blog untuk kategori:`}</Text>
            {dataBlogs?.data?.length > 0 ? (
              <Box
                ml={2}
                px={2}
                py={1}
                backgroundColor="gray.30"
                borderRadius="2em"
              >
                <Flex alignItems="center">
                  <Text fontWeight="bold" fontSize="14px" mr={1}>
                    {dataBlogs?.data?.length > 0
                      ? dataBlogs?.data[0]?.category?.name
                      : null}
                  </Text>
                  <CloseButton
                    onClick={fetchResetBlogs}
                    sx={{
                      width: '20px',
                      height: '20px',
                      fontSize: '8px',
                      borderRadius: '2em',
                    }}
                  />
                </Flex>
              </Box>
            ) : (
              <>
                <Text>Blog tidak ditemukan</Text>
              </>
            )}
          </Flex>
        ) : (
          <Text color="gray.60" fontSize="14px">{`Menampilkan ${
            dataBlogs?.meta?.pagination?.total || ''
          } blog dari semua kategori`}</Text>
        )}
      </Box>

      <Grid
        h="500px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={8}
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
                <Text
                  fontWeight="bold"
                  fontSize="5xl"
                  color="#fff"
                  noOfLines={2}
                >
                  {item?.title || ''}
                </Text>
              </Box>
              <Flex justifyContent="space-between">
                <Text fontSize="lg" color="#fff">
                  {item?.dateCreate}
                </Text>
                <Text fontSize="lg" color="#fff">
                  Posted by {item?.author}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </Grid>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} marginY="42px">
        {dataBlogs?.data?.slice(3, 9).map((item, idx) => (
          <GridItem key={idx}>
            <BlogCard {...item} />
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent="center">
        <Box marginY="16px">
          {(isSuccessBlogs && (
            <Pagination
              siblingCount={2}
              currentPage={dataBlogs?.meta?.pagination?.page}
              totalCount={dataBlogs?.meta?.pagination?.total}
              pageSize={dataBlogs?.meta?.pagination?.perPage}
              onPageChange={(page) => fetchPagination(page)}
            />
          )) ||
            null}
        </Box>
      </Flex>
    </Container>
  );
}

BlogsPageContainerDesktop.propTypes = {
  category: PropTypes.string,
  dataBlogs: PropTypes.object,
  isSuccessBlogs: PropTypes.bool,
  isErrorBlogs: PropTypes.bool,
  isLoadingBlogs: PropTypes.bool,
  isFetchingBlogs: PropTypes.bool,
  fetchPagination: PropTypes.func,
  fetchResetBlogs: PropTypes.func,
  dataBlogCategories: PropTypes.object,
  isErrorBlogCategories: PropTypes.bool,
  isLoadingBlogCategories: PropTypes.bool,
  isFetchingCategories: PropTypes.bool,
  isSuccessBlogCategories: PropTypes.bool,
};

export default BlogsPageContainerDesktop;
