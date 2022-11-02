import {
  Box,
  Button,
  CloseButton,
  Container,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { NextLink, Pagination } from '../../components';
import CarouselBlog from '../../components/Carousel/CarouselBlog';
import { populateAdditionalImage } from '../../helpers/utils';

function BlogsPageContainerMobile(props) {
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

  const Blogs = () => (
    <>
      {dataBlogs?.data?.slice(3, 9).map((item, idx) => (
        <NextLink key={idx} link={`blog/${item?.slug}`}>
          <Flex
            marginY="16px"
            gap={3}
            borderRadius="16px"
            boxShadow="md"
            padding="12px"
          >
            <Image
              borderRadius="8px"
              src={populateAdditionalImage({
                ...item?.additionalImage,
                height: 100,
                width: 100,
                extension: 'webp',
              })}
            />
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              width="100%"
            >
              <Box>
                <Text fontSize="sm" fontWeight="bold" noOfLines={2}>
                  {item?.title || ''}
                </Text>
                <Text fontSize="sm" fontWeight="normal">
                  {item?.category?.name}
                </Text>
              </Box>
              <Flex justifyContent="space-between">
                <Text fontSize="sm" fontWeight="light">
                  {item?.dateCreate}
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Posted by {item?.author}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </NextLink>
      ))}
    </>
  );

  const BlogCategories = () => (
    <>
      <Flex gap={2} paddingBottom="12px" marginTop="16px" overflowX="scroll">
        {dataBlogCategories?.data?.map((item) => (
          <NextLink key={item?.id} link={handleLink(item?.slug)}>
            <Button
              borderRadius="2em"
              backgroundColor={category === item?.slug ? `#ff731d` : `#e2eeff`}
              color={category === item?.slug ? `#fff` : `#000`}
              sx={{
                ':hover': {
                  backgroundColor: '#c2dbff',
                },
              }}
            >
              {item?.name}
            </Button>
          </NextLink>
        ))}
      </Flex>
      <Box my={2}>
        {category ? (
          <Flex color="gray.60" alignItems="center">
            <Text fontSize="sm">{`Menampilkan ${
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
    </>
  );

  return (
    <Box>
      <Container maxW="container.xl">
        <Text fontSize="xl" fontWeight="bold">
          Blog Kami
        </Text>
        <BlogCategories />
        <Box marginBottom="16px">
          <CarouselBlog items={dataBlogs} />
        </Box>
        <Box marginY="32px">
          <Blogs />
        </Box>
        <Flex justifyContent="center" marginBottom={5}>
          <Box>
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
    </Box>
  );
}

BlogsPageContainerMobile.propTypes = {
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

export default BlogsPageContainerMobile;
