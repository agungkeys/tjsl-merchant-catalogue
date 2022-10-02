import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from '../NextLink';

function HeaderMobile(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Box width="100%" boxShadow="lg" paddingY="16px" marginBottom="16px">
      <Container maxW="container.xl">
        <Box onClick={onOpen}>
          <HamburgerIcon />
        </Box>
      </Container>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody padding="32px">
            <Flex flexDirection="column" gap={3} alignItems="center">
              <Text fontWeight="bold" fontSize="xl">
                KamiUMKM
              </Text>
              <NextLink link="/">
                <Button
                  variant={router.pathname === '/' ? 'secondary' : ''}
                  width="100%"
                >
                  Beranda
                </Button>
              </NextLink>
              <NextLink link="/mitra-kami">
                <Button
                  variant={router.pathname === '/mitra-kami' ? 'secondary' : ''}
                >
                  Mitra Kami
                </Button>
              </NextLink>
              <NextLink link="/blog">
                <Button
                  variant={router.pathname === '/blog' ? 'secondary' : ''}
                >
                  Blog
                </Button>
              </NextLink>
              <NextLink link="/kontak-kami">
                <Button
                  variant={
                    router.pathname === '/kontak-kami' ? 'secondary' : ''
                  }
                >
                  Kontak Kami
                </Button>
              </NextLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default HeaderMobile;
