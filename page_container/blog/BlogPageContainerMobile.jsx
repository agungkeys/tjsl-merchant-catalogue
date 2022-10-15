import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SocialShare from '../../components/SocialShare';

function BlogPageContainerMobile(props) {
  const { data, isError, isLoading, isFetching, isSuccess } = props;

  const item = data?.data[0];
  return (
    <Container maxW="container.xl" marginBottom="32px">
      <Flex marginBottom="12px" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">
          {' '}
          {item?.title}{' '}
        </Text>
        <SocialShare
          facebookLink={`https://www.facebook.com/sharer/sharer.php?u=https://tjsl-merchant-catalogue.vercel.app/blog/${item?.slug}`}
          twitterLink={`https://twitter.com/intent/tweet?text=Hai! Cek blog dari KamiUMKM ini yok, judulnya ${item?.title}, kamu bisa kunjungi link ini ya! https://tjsl-merchant-catalogue.vercel.app/blog/${item?.slug}`}
          whatsappLink={`https://wa.me/?text=Hai! Cek blog dari KamiUMKM ini yok, judulnya ${item?.name}, kamu bisa kunjungi link ini ya! https://tjsl-merchant-catalogue.vercel.app/blog/${item?.slug}`}
          telegramLink={`https://t.me/share/url?url=https://tjsl-merchant-catalogue.vercel.app/blog/${item?.slug}&text=Cek blog dari KamiUMKM yok, judulnya ${item?.title}`}
          isMobile
          isBlogPage
        />
      </Flex>
      <Box>
        <Text fontSize="sm"> {item?.author} - 10 Oktober 2022 </Text>
      </Box>
      <Box marginY="16px">
        <Image src={item?.image} alt={item?.title} borderRadius="10px" />
      </Box>
      <Box fontSize="md" paddingX={2}>
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
