import PropTypes from 'prop-types';
import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { NextLink } from '../../components';

function BlogPageContainerDesktop(props) {
  const {
    data,
    isError,
    isLoading,
    isFetching,
    isSuccess
  } = props;

  const item = data?.data[0];
    console.log("🚀 ~ file: BlogPageContainerDesktop.jsx ~ line 17 ~ BlogPageContainerDesktop ~ item", item)
    console.log("🚀 ~ file: BlogPageContainerDesktop.jsx ~ line 15 ~ BlogPageContainerDesktop ~ data", data)
  return (
    <Box>
      <Container maxW="container.xl" paddingY="56px">
        <Flex gap={6}>
          <Box width="70%" minH="100vh">
            <Image
              src={item?.image}
              height="575px"
              width="100%"
              objectFit="cover"
              alt=""
              borderRadius="16px"
            />
            <Box marginY="16px">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight="extrabold" fontSize="5xl">
                  Apa Itu KamiUMKM?
                </Text>
                <Text>02 Oktober 2022</Text>
              </Flex>
              <Text fontSize="lg">Posted by admin</Text>
            </Box>
            <Box paddingY="16px">
              <Text fontSize="xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis dolor mollitia impedit tenetur fugit culpa et?
                Assumenda modi deleniti non at dolorem reprehenderit ad
                repudiandae esse asperiores labore tenetur nostrum voluptate
                placeat et nisi maxime voluptatibus corrupti eaque, nobis, nemo
                unde ipsa dolorum! Cupiditate similique eos quod sed laudantium
                necessitatibus, odit ab omnis sit et enim. Accusantium aut
                aliquid, eaque atque velit maxime deleniti quaerat nostrum?
                Minima quam consectetur ad soluta magni ducimus nemo ipsa
                quisquam quae tenetur deleniti inventore, fugit ab quaerat enim
                odio quos. Quos dolor veniam consectetur tempora culpa obcaecati
                veritatis quia, cupiditate totam ipsa corrupti voluptatibus
                aliquam earum est amet quaerat quod quasi dolore! Error iste
                deleniti tempora, praesentium minus repellendus at nostrum.
                Quidem recusandae dolore labore quis placeat et. Est, nam.
                Voluptatibus cumque commodi quo animi, similique explicabo ipsa
                aperiam sequi, natus repudiandae architecto non ab dolores?
                Expedita sit culpa aut recusandae architecto. Suscipit ducimus
                totam fugiat aspernatur nemo odit repellendus architecto
                voluptatem, possimus et nam saepe provident vitae hic nesciunt!
                Veniam, quidem necessitatibus. Unde quod qui placeat dicta
                dolorum hic asperiores odit provident in, sapiente laboriosam
                culpa adipisci maxime eum consequuntur inventore laudantium
                similique tempore nemo fugiat rem dolores? Debitis iste ex vitae
                commodi.
              </Text>
            </Box>
            <Flex justifyContent="space-between" marginY="16px">
              <Button leftIcon={<BiChevronLeft />} variant="link">
                Artikel Sebelumnya
              </Button>
              <Button rightIcon={<BiChevronRight />} variant="link">
                Artikel Selanjutnya
              </Button>
            </Flex>
          </Box>
          <Box width="30%">
            <Text fontWeight="extrabold" fontSize="5xl">
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
            </Flex>
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
