import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SocialShare from '../../components/SocialShare';
import ENV from '../../constants/env';

function BlogPageContainerMobile(props) {
  const { data, isError, isLoading, isFetching, isSuccess } = props;

  return (
    <Container maxW="container.xl" marginBottom="32px">
      <Box>
        <Flex marginBottom="12px" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">
            {' '}
            {data?.data?.title}{' '}
          </Text>
          <SocialShare
            facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${ENV.CURRENT_HOST}/blog/${data?.data?.slug}`}
            twitterLink={`https://twitter.com/intent/tweet?text=Hai! Cek blog dari KamiUMKM ini yok, judulnya "${data?.data?.title}", kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/blog/${data?.data?.slug}`}
            whatsappLink={`https://wa.me/?text=Hai! Cek blog dari KamiUMKM ini yok, judulnya "${data?.data?.title}", kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/blog/${data?.data?.slug}`}
            telegramLink={`https://t.me/share/url?url=${ENV.CURRENT_HOST}/blog/${data?.data?.slug}&text=Cek blog dari KamiUMKM yok, judulnya ${data?.data?.title}`}
            isMobile
            isBlogPage
          />
        </Flex>
        <Box>
          <Text fontSize="sm">
            {' '}
            {data?.data?.author} - {data?.data?.dateCreate}{' '}
          </Text>
        </Box>
        <Box marginY="16px">
          <Image
            src={data?.data?.image}
            alt={data?.data?.title}
            borderRadius="10px"
          />
        </Box>
        <Box fontSize="md" paddingX={2}>
          <div
            className="blog-description"
            dangerouslySetInnerHTML={{ __html: data?.data?.description }}
          ></div>
        </Box>
        <Flex alignItems="center" fontSize="sm" marginY="16px">
          <Text>Tags : </Text>
          <Box borderRadius="10px" bgColor="#FFF7E9" padding="8px">
            {data?.data?.tags}
          </Box>
        </Flex>
      </Box>
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
