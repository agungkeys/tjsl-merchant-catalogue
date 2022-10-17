import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { NextLink } from '../../components';
import { dateFormat, populateAdditionalImage } from '../../helpers/utils';
import SocialShare from '../../components/SocialShare';
import ENV from '../../constants/env';

function BlogPageContainerDesktop(props) {
  const { data, isError, isLoading, isFetching, isSuccess } = props;

  const item = data?.data[0];

  return (
    <Box>
      <Container maxW="container.xl">
        <Flex gap={8}>
          <Box width="70%" minH="100vh">
            <Box marginY="32px">
              <Flex justifyContent="space-between">
                <Text fontWeight="extrabold" fontSize="5xl">
                  {item?.title}
                </Text>
                <SocialShare
                  facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${ENV.CURRENT_HOST}/blog/${item?.slug}`}
                  twitterLink={`https://twitter.com/intent/tweet?text=Hai! Cek blog dari KamiUMKM ini yok, judulnya "${item?.title}", kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/blog/${item?.slug}`}
                  whatsappLink={`https://wa.me/?text=Hai! Cek blog dari KamiUMKM ini yok, judulnya "${item?.title}", kamu bisa kunjungi link ini ya! ${ENV.CURRENT_HOST}/blog/${item?.slug}`}
                  telegramLink={`https://t.me/share/url?url=${ENV.CURRENT_HOST}/blog/${item?.slug}&text=Cek blog dari KamiUMKM yok, judulnya ${item?.title}`}
                  isBlogPage
                />
              </Flex>

              <Text fontSize="lg">
                Posted by {item?.author} - {item?.dateCreate}
              </Text>
            </Box>
            <Image
              src={item?.image}
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
                dangerouslySetInnerHTML={{ __html: item?.description }}
                className="description"
              ></div>
            </Box>
            <Flex justifyContent="space-between" marginY="16px">
              <Flex gap={3} alignItems="center">
                <Text>Tags : </Text>
                <Box borderRadius="10px" bgColor="#FFF7E9" padding="8px">
                  {item?.tags}
                </Box>{' '}
              </Flex>
            </Flex>
          </Box>
          <Box width="5%" minHeight="100vh">
            <Divider orientation="vertical" width="20px" />
          </Box>
          <Box width="25%">
            {/* <Text fontWeight="extrabold" fontSize="5xl">
              Artikel Terbaru
            </Text>
            <Flex flexDirection="column" gap={6}>
              {[...Array(3)].map((item, idx) => (
                <Box key={idx}>
                  <NextLink link="">
                    <Flex
                      height="240px"
                      width="100%"
                      borderRadius="16px"
                      sx={{
                        background:
                          'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://res.cloudinary.com/borneos-co/image/upload/v1660148191/cld-sample-4.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      padding="16px"
                    >
                      <Text fontWeight="bold" color="#fff" alignSelf="flex-end">
                        Judul Blog
                      </Text>
                    </Flex>
                  </NextLink>
                </Box>
              ))}
            </Flex> */}
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
