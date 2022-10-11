import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function BlogPageContainerMobile(props) {
  const { data, isError, isLoading, isFetching, isSuccess } = props;

  const item = data?.data[0];
  return (
    <Container maxW="container.xl" marginBottom="32px">
      <Box marginBottom="12px">
        <Text fontSize="xl" fontWeight="bold">
          {' '}
          {item?.title}{' '}
        </Text>
      </Box>
      <Box>
        <Text fontSize="sm"> {item?.author} - 10 Oktober 2022 </Text>
      </Box>
      <Box marginY="16px">
        <Image src={item?.image} alt={item?.title} borderRadius="10px" />
      </Box>
      <Box fontSize="md">
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: item?.description }}
        ></div>
      </Box>
      <Flex alignItems="center" fontSize="sm" marginY="16px">
        <Text>Tags : </Text>
        <Box borderRadius="10px" bgColor="#FFF7E9" padding="8px">
          {item?.tags}
        </Box>
      </Flex>
    </Container>
  );
}

BlogPageContainerMobile.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  data: PropTypes.object,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isFetching: PropTypes.bool,
  isSuccess: PropTypes.bool,
  query: PropTypes.object,
};

export default BlogPageContainerMobile;
