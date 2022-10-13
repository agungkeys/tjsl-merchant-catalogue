import React, { useState } from 'react';
// import { Card, Grid, Link, Text, Spacer } from "@nextui-org/react";
import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import NextLink from '../NextLink';
import { populateAdditionalImage } from '../../helpers/utils';
import { useRouter } from 'next/router';

function HeaderDesktop(props) {
  const [headerPosition, setHeaderPosition] = useState('');
  const router = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10 ? setHeaderPosition('fixed') : setHeaderPosition('');
    }
  };

  return (
    <Box>
      <Box
        position={headerPosition}
        boxShadow="lg"
        padding="10px"
        zIndex="999"
        backdropFilter="blur(100px)"
        width="100%"
      >
        <Container maxW="container.xl">
          <Flex width="100%">
            <Flex
              marginX="16px"
              justifyContent="space-between"
              gap={4}
              alignItems="center"
            >
              <Image
                src="https://res.cloudinary.com/borneos-co/image/upload/v1664872088/tjsl-core/icon-logo/kamiumkm_g0bnvq.webp"
                alt=""
                height="50px"
                objectFit="cover"
              />
              <NextLink link="/">
                <Button
                  fontSize="lg"
                  fontWeight="semibold"
                  borderRadius="2em"
                  sx={{
                    _hover: {
                      bg: '#ff731d',
                      color: 'white',
                    },
                  }}
                  transition="all 0.3s ease-in-out"
                  variant={router.pathname === '/' ? 'primary' : ''}
                >
                  Beranda
                </Button>
              </NextLink>
              <NextLink link="/merchants">
                <Button
                  fontSize="lg"
                  fontWeight="semibold"
                  borderRadius="2em"
                  sx={{
                    _hover: {
                      bg: '#ff731d',
                      color: 'white',
                    },
                  }}
                  transition="all 0.3s ease-in-out"
                  variant={
                    router.pathname.includes('/merchants') ? 'primary' : ''
                  }
                >
                  Mitra Kami
                </Button>
              </NextLink>
              <NextLink link="/blog">
                <Button
                  fontSize="lg"
                  fontWeight="semibold"
                  borderRadius="2em"
                  sx={{
                    _hover: {
                      bg: '#ff731d',
                      color: 'white',
                    },
                  }}
                  transition="all 0.3s ease-in-out"
                  variant={router.pathname.includes('/blog') ? 'primary' : ''}
                >
                  Blog Kami
                </Button>
              </NextLink>
              <NextLink link="/contact">
                <Button
                  fontSize="lg"
                  fontWeight="semibold"
                  borderRadius="2em"
                  sx={{
                    _hover: {
                      bg: '#ff731d',
                      color: 'white',
                    },
                  }}
                  transition="all 0.3s ease-in-out"
                  variant={
                    router.pathname.includes('/contact') ? 'primary' : ''
                  }
                >
                  Kontak
                </Button>
              </NextLink>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );

  // <Card
  //   variants="shadow"
  //   css={{
  //     bgBlur: "rgba(255, 255, 255, 0.8)",
  //     // bgBlur: "linear-gradient(110deg, rgba(255, 144, 104, 0.6) 10%, rgba(255, 75, 31, 0.6) 100%)",
  //     position: "sticky",
  //     top: 0,
  //     zIndex: 999,
  //     mw: '100%',
  //     borderRadius: 0,
  //   }}
  // >
  //   <Card.Body>
  //     <Grid.Container justify="start" alignItems="center">
  //       <Grid>
  //         <Text h6 size={18} css={{ m: 0, ml: 20, fontWeight: 'bold', color: "$yellow600" }}>[BRAND TJSL]</Text>
  //       </Grid>
  //       <Spacer x={3} />
  //       <Grid>
  //         <Link href="#" underline css={{ fontSize: '16px', fontWeight: '500', color: '$gray600', '&:hover': { color: '$blue700', textDecoration: 'none'}}}>BERANDA</Link>
  //       </Grid>
  //       <Spacer x={1} />
  //       <Grid>
  //         <Link href="#" underline css={{ fontSize: '16px', fontWeight: '500', color: '$gray600', '&:hover': { color: '$blue700', textDecoration: 'none'}}}>MITRA UMKM</Link>
  //       </Grid>
  //       <Spacer x={1} />
  //       <Grid>
  //         <Link href="#" underline css={{ fontSize: '16px', fontWeight: '500', color: '$gray600', '&:hover': { color: '$blue700', textDecoration: 'none'}}}>BLOG [BRAND TJSL]</Link>
  //       </Grid>
  //     </Grid.Container>
  //   </Card.Body>
  // </Card>
}

export default HeaderDesktop;
