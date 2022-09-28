import React, { useState } from "react";
// import { Card, Grid, Link, Text, Spacer } from "@nextui-org/react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import NextLink from "../NextLink";

function Header(props) {
  const [headerPosition, setHeaderPosition] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10 ? setHeaderPosition("fixed") : setHeaderPosition("");
    }
  };

  return (
    <Box>
      <Box
        position={headerPosition}
        boxShadow="lg"
        padding="16px"
        zIndex="999"
        backdropFilter="blur(100px)"
        width="100%"
      >
        <Container maxW="container.xl">
          <Flex width="100%">
            <Text>[Logo Brand TJSL]</Text>
            <Flex
              marginX="16px"
              justifyContent="space-between"
              color="#F57921"
              width="30%"
            >
              <NextLink link="/">
                <Text>Beranda</Text>
              </NextLink>
              <NextLink link="/mitra">
                <Text>Mitra</Text>
              </NextLink>
              <NextLink link="/tentang">
                <Text>Tentang</Text>
              </NextLink>
              <NextLink link="/blog">
                <Text>Blog</Text>
              </NextLink>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
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
  );
}

export default Header;
