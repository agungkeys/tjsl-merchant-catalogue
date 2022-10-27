import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaTelegram,
  FaTwitter,
  FaTwitterSquare,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiDotsVertical, HiLink, HiShare } from 'react-icons/hi';
import NextLink from '../NextLink';

function SocialShare(props) {
  const {
    isMobile,
    isBlogPage,
    facebookLink,
    twitterLink,
    whatsappLink,
    telegramLink,
    shopeeLink,
    tokopediaLink,
    bukalapakLink,
    borneosLink,
    facebookPageLink,
    instagramPageLink,
    twitterPageLink,
    websitePageLink,
  } = props;

  const toast = useToast();

  const handleValidationLink = (url) => {
    if (url.match('^https?://')) {
      return true;
    } else {
      return false;
    }
  };

  const dataMarketplace = [
    {
      id: 0,
      name: 'Borneos',
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1661914548/images/borneos_b9j4gk.webp',
      link: borneosLink,
    },
    {
      id: 1,
      name: 'Bukalapak',
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1665573431/tjsl-core/icon-logo/bukalapak-logo-freelogovectors.net__czxixy.png',
      link: bukalapakLink,
    },
    {
      id: 2,
      name: 'Shopee',
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1665570595/tjsl-core/icon-logo/shopee-circle-logo-design-shopping-bag-13_kjdqw0.webp',
      link: shopeeLink,
    },
    {
      id: 3,
      name: 'Tokopedia',
      image:
        'https://res.cloudinary.com/borneos-co/image/upload/v1665570595/tjsl-core/icon-logo/tkopedia_vavynm.webp',
      link: tokopediaLink,
    },
    {
      id: 4,
      name: 'Instagram',
      image: <Button colorScheme="pink">{<FaInstagram />}</Button>,
      link: instagramPageLink,
    },
    {
      id: 5,
      name: 'Twitter',
      image: <Button colorScheme="twitter">{<FaTwitter />}</Button>,
      link: twitterPageLink,
    },
    {
      id: 6,
      name: 'Facebook',
      image: <Button colorScheme="facebook">{<FaFacebook />}</Button>,
      link: facebookPageLink,
    },
    {
      id: 7,
      name: 'Website',
      image: <Button colorScheme="gray">{<HiLink />}</Button>,
      link: websitePageLink,
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isMobile ? (
        <>
          <Button
            fontSize="18px"
            fontWeight="semibold"
            color="#00001a"
            variant="link"
            onClick={onOpen}
          >
            <HiDotsVertical />
          </Button>
          <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <Text fontWeight="semibold">Bagikan ke</Text>
                <Grid templateColumns="repeat(5, 1fr)" gap={2} marginY="8px">
                  <NextLink link={facebookLink} target="_blank">
                    <Button colorScheme="facebook">{<FaFacebook />}</Button>
                  </NextLink>
                  <NextLink link={twitterLink} target="_blank">
                    <Button colorScheme="twitter">{<FaTwitter />}</Button>
                  </NextLink>
                  <NextLink link={whatsappLink} target="_blank">
                    <Button colorScheme="whatsapp">{<FaWhatsapp />}</Button>
                  </NextLink>
                  <NextLink link={telegramLink} target="_blank">
                    <Button colorScheme="telegram">{<FaTelegram />}</Button>
                  </NextLink>
                  <NextLink disabled>
                    <Button
                      colorScheme="gray"
                      onClick={() =>
                        setTimeout(() => {
                          navigator.clipboard.writeText(window.location.href);
                          toast({
                            position: 'top-right',
                            title: 'Link telah disalin',
                            description:
                              'Kamu bisa bagikan tautan ini kemanapun kamu mau',
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                          });
                        }, 500)
                      }
                    >
                      {<HiLink />}
                    </Button>
                  </NextLink>
                </Grid>
                {!isBlogPage && (
                  <>
                    <Text fontWeight="semibold" marginY="8px">
                      Kunjungi juga di
                    </Text>
                    <Grid
                      templateColumns="repeat(5, 1fr)"
                      gap={2}
                      alignItems="center"
                    >
                      {dataMarketplace.map((item, idx) =>
                        item.link && handleValidationLink(item.link) ? (
                          <Box key={idx}>
                            <GridItem>
                              {item.link && handleValidationLink(item.link) && (
                                <NextLink link={item.link} target="_blank">
                                  {typeof item.image === 'string' ? (
                                    <Image
                                      src={item.image || ''}
                                      alt={item.name || ''}
                                      width="28px"
                                      objectFit="cover"
                                    />
                                  ) : (
                                    item.image
                                  )}
                                </NextLink>
                              )}
                            </GridItem>
                          </Box>
                        ) : null,
                      )}
                    </Grid>
                  </>
                )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Popover placement="bottom-end" isLazy>
          <PopoverTrigger>
            {isMobile ? (
              <Button
                fontSize="18px"
                fontWeight="semibold"
                color="#00001a"
                variant="link"
                leftIcon={isMobile ? '' : <HiShare />}
              >
                <HiDotsVertical />
              </Button>
            ) : (
              <Button
                fontSize="20px"
                fontWeight="semibold"
                // color="primary.60"
                borderRadius="full"
                boxSize="46px"
                variant="primary"
              >
                <HiDotsVertical />
              </Button>
            )}
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody paddingY="16px">
              <Text fontWeight="semibold">Bagikan ke</Text>
              <Grid templateColumns="repeat(5, 1fr)" gap={2} marginY="8px">
                <NextLink link={facebookLink} target="_blank">
                  <Button colorScheme="facebook">{<FaFacebook />}</Button>
                </NextLink>
                <NextLink link={twitterLink} target="_blank">
                  <Button colorScheme="twitter">{<FaTwitter />}</Button>
                </NextLink>
                <NextLink link={whatsappLink} target="_blank">
                  <Button colorScheme="whatsapp">{<FaWhatsapp />}</Button>
                </NextLink>
                <NextLink link={telegramLink} target="_blank">
                  <Button colorScheme="telegram">{<FaTelegram />}</Button>
                </NextLink>
                <NextLink disabled>
                  <Button
                    colorScheme="gray"
                    onClick={() =>
                      setTimeout(() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast({
                          position: 'top-right',
                          title: 'Link telah disalin',
                          description:
                            'Kamu bisa bagikan tautan ini kemanapun kamu mau',
                          status: 'success',
                          duration: 3000,
                          isClosable: true,
                        });
                      }, 500)
                    }
                  >
                    {<HiLink />}
                  </Button>
                </NextLink>
              </Grid>
              {!isBlogPage && (
                <>
                  <Text fontWeight="semibold" marginY="8px">
                    Kunjungi juga di
                  </Text>
                  <Grid
                    templateColumns="repeat(5, 1fr)"
                    gap={2}
                    alignItems="center"
                  >
                    {dataMarketplace.map((item, idx) =>
                      item.link && handleValidationLink(item.link) ? (
                        <Box key={idx}>
                          <GridItem>
                            {item.link && handleValidationLink(item.link) && (
                              <NextLink link={item.link} target="_blank">
                                {typeof item.image === 'string' ? (
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    width="28px"
                                    objectFit="cover"
                                  />
                                ) : (
                                  item.image
                                )}
                              </NextLink>
                            )}
                          </GridItem>
                        </Box>
                      ) : null,
                    )}
                  </Grid>
                </>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}

SocialShare.propTypes = {
  isMobile: PropTypes.bool,
  isBlogPage: PropTypes.bool,
  facebookLink: PropTypes.string,
  twitterLink: PropTypes.string,
  telegramLink: PropTypes.string,
  whatsappLink: PropTypes.string,
  shopeeLink: PropTypes.string,
  tokopediaLink: PropTypes.string,
  bukalapakLink: PropTypes.string,
  borneosLink: PropTypes.string,
  facebookPageLink: PropTypes.string,
  instagramPageLink: PropTypes.string,
  twitterPageLink: PropTypes.string,
  websitePageLink: PropTypes.string,
};

export default SocialShare;
