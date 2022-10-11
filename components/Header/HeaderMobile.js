import { HamburgerIcon } from '@chakra-ui/icons';
import { HiMenuAlt3 } from 'react-icons/hi';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from '../NextLink';
import { useEffect, useState } from 'react';

function HeaderMobile(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const [headerPosition, setHeaderPosition] = useState('');

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
    <Flex
      width="100%"
      boxShadow="xl"
      paddingY="12px"
      marginBottom="16px"
      backdropFilter="blur(100px)"
      position={headerPosition}
      zIndex={999}
    >
      <Container maxW="container.xl">
        <Image
          src="https://res.cloudinary.com/borneos-co/image/upload/v1664949744/tjsl-core/icon-logo/favicon_lns2zu.png"
          alt=""
          height="50px"
          objectFit="cover"
        />
      </Container>
      <Container maxW="container.xl">
        <Flex justifyContent="flex-end">
          <Button onClick={onOpen} variant="unstyled">
            <HiMenuAlt3 size={42} />
          </Button>
        </Flex>
      </Container>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody padding="32px">
            <Flex flexDirection="column" gap={3} alignItems="start">
              <Image
                src="https://res.cloudinary.com/borneos-co/image/upload/v1664872088/tjsl-core/icon-logo/kamiumkm_g0bnvq.png"
                alt=""
                height="50px"
                objectFit="cover"
              />
              <NextLink
                link="/"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              >
                <Button
                  variant={router.pathname === '/' ? 'secondary' : ''}
                  width="100%"
                >
                  Beranda
                </Button>
              </NextLink>
              <NextLink
                link="/merchants"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              >
                <Button
                  variant={router.pathname === '/merchants' ? 'secondary' : ''}
                  width="100%"
                >
                  Mitra Kami
                </Button>
              </NextLink>
              <NextLink
                link="/blog"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              >
                <Button
                  variant={router.pathname === '/blog' ? 'secondary' : ''}
                  width="100%"
                >
                  Blog
                </Button>
              </NextLink>
              <NextLink
                link="/tentang"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              >
                <Button
                  variant={router.pathname === '/tentang' ? 'secondary' : ''}
                  width="100%"
                >
                  Kontak Kami
                </Button>
              </NextLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default HeaderMobile;
