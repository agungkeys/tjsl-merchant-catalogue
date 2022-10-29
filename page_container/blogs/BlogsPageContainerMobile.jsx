import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { NextLink, Pagination } from '../../components';
import CarouselBlog from '../../components/Carousel/CarouselBlog';
import { populateAdditionalImage } from '../../helpers/utils';

function BlogsPageContainerMobile(props) {
  const router = useRouter();
  const {
    dataBlogs,
    isErrorBlogs,
    isLoadingBlogs,
    isFetchingBlogs,
    isSuccessBlogs,
    fetchPagination,
  } = props;
  const Blogs = () => (
    <>
      <Text>Blog Lainnya</Text>
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

  return (
    <Box>
      <Container maxW="container.xl">
        <Text fontSize="xl" fontWeight="bold">
          Blog Kami
        </Text>
        <Flex gap={2} paddingBottom="12px" marginTop="16px" overflowX="scroll">
          {dataBlogs?.data?.map((item) => (
            <NextLink
              key={item?.id}
              // link={handleLink(item?.slug)}
            >
              <Button
                borderRadius="2em"
                backgroundColor="#e2eeff"
                // backgroundColor={category === item?.slug ? `#ff731d` : `#e2eeff`}
                color="#000"
                // color={category === item?.slug ? `#fff` : `#000`}
                sx={{
                  ':hover': {
                    backgroundColor: '#c2dbff',
                  },
                }}
                fontSize="sm"
              >
                {item?.category?.name}
              </Button>
            </NextLink>
          ))}
        </Flex>
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
  dataBlogs: PropTypes.object,
  isSuccessBlogs: PropTypes.bool,
  isErrorBlogs: PropTypes.bool,
  isLoadingBlogs: PropTypes.bool,
  isFetchingBlogs: PropTypes.bool,
  fetchPagination: PropTypes.func,
};

export default BlogsPageContainerMobile;
