import { Box, Container, Divider, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { NextLink } from '../../components';
import SocialShare from '../../components/SocialShare';
import ENV from '../../constants/env';

function BlogPageContainerDesktop(props) {
  const { data, isError, isLoading, isFetching, isSuccess } = props;

  return (
    <Box>
      <Container maxW="container.xl">
        <Flex gap={8}>
          <Box width="70%" minH="100vh">
            <Box marginY="32px">
              <Flex justifyContent="space-between">
                <Text fontWeight="extrabold" fontSize="5xl">
                  {data?.data?.title || ''}
                </Text>
                <SocialShare
                  facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${ENV.CURRENT_HOST}/blog/${data?.data?.slug}`}
                  twitterLink={`https://twitter.com/intent/tweet?text=Hai! Cek blog dari KamiUMKM ini yok, judulnya "${data?.data?.title}", kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/blog/${data?.data?.slug}`}
                  whatsappLink={`https://wa.me/?text=Hai! Cek blog dari KamiUMKM ini yok, judulnya "${data?.data?.title}", kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/blog/${data?.data?.slug}`}
                  telegramLink={`https://t.me/share/url?url=${ENV.CURRENT_HOST}/blog/${data?.data?.slug}&text=Cek blog dari KamiUMKM yok, judulnya ${data?.data?.title}`}
                  isBlogPage
                />
              </Flex>

              <Text fontSize="lg">
                Posted by {data?.data?.author} - {data?.data?.dateCreate}
              </Text>
            </Box>
            <Image
              src={data?.data?.image}
              height="350"
              width="650px"
              objectFit="cover"
              alt=""
              borderRadius="10px"
              margin="0 auto"
            />

            <Box
              marginY="42px"
              fontSize="lg"
              fontWeight="normal"
              paddingRight="32px"
            >
              <div
                dangerouslySetInnerHTML={{ __html: data?.data?.description }}
                className="blog-description"
              ></div>
            </Box>
            <Flex justifyContent="space-between" marginY="16px">
              <Flex gap={3} alignItems="center">
                <Text>Tags : </Text>
                <Box borderRadius="10px" bgColor="#FFF7E9" padding="8px">
                  {data?.data?.tags}
                </Box>{' '}
              </Flex>
            </Flex>
          </Box>
          <Box width="5%" minHeight="100vh">
            <Divider orientation="vertical" width="20px" />
          </Box>
          <Box
            width="25%"
            marginY="16px"
            position="sticky"
            right={0}
            top="10px"
            marginRight="30px"
            height="400px"
            bottom="auto"
          >
            <NextLink link="https://www.borneos.co" target="_blank">
              <Image
                src="https://res.cloudinary.com/borneos-co/image/upload/v1666767680/tjsl-core/ads/Promosi_2_rtjck2.webp"
                borderRadius="8px"
                height="400px"
              />
            </NextLink>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

BlogPageContainerDesktop.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  data: PropTypes.object,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isFetching: PropTypes.bool,
  isSuccess: PropTypes.bool,
  query: PropTypes.object,
};

export default BlogPageContainerDesktop;
