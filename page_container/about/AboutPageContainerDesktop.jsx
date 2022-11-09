import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { BiChevronRight } from 'react-icons/bi';
import { NextLink, Product } from '../../components';
import { populateAdditionalImage } from '../../helpers/utils';

function AboutPageContainerDesktop(props) {
  const {
    dataMerchants,
    isSuccessMerchants,
    isLoadingMerchants,
    isFetchingMerchants,
  } = props;

  const MerchantSection = () => (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold" fontSize="5xl">
          Kunjungi juga mitra unggulan kami
        </Text>
        <NextLink link="/merchants">
          <Button variant="link" rightIcon={<BiChevronRight />}>
            Lihat semua
          </Button>
        </NextLink>
      </Flex>

      <Flex gap={8} width="100%">
        {isSuccessMerchants &&
          dataMerchants?.data?.slice(0, 3).map((item) => (
            <NextLink
              key={item?.id}
              style={{
                width: '100%',
              }}
              link={`/merchants/${item?.slug}`}
            >
              <Box
                marginY="32px"
                borderRadius="16px"
                boxShadow="lg"
                w="100%"
                cursor="pointer"
              >
                <Box
                  // backgroundColor="#0D5099"
                  bgImage={
                    item?.additionalImageCover
                      ? populateAdditionalImage({
                          ...item?.additionalImageCover,

                          extension: 'webp',
                        })
                      : 'https://res.cloudinary.com/borneos-co/image/upload/v1665467026/tjsl-core/merchants/cover_image/cover_head_udsiml.webp'
                  }
                  backgroundRepeat="no-repeat"
                  backgroundSize="contain"
                  backgroundPosition="top-right"
                  borderTopRadius="16px"
                  height="100px"
                ></Box>
                <Flex paddingX="32px" width="100%" gap={4}>
                  <Center
                    rounded="full"
                    boxSize="100px"
                    backgroundColor="#fff"
                    marginTop="-50px"
                    boxShadow="lg"
                    w="156px"
                  >
                    {item?.image ? (
                      <Image
                        borderRadius="4em"
                        boxSize="100%"
                        src={item?.image}
                        alt={item?.name}
                        fallbackSrc="https://res.cloudinary.com/borneos-co/image/upload/v1644554350/images/item-empty_iiuizg.webp"
                      />
                    ) : (
                      <Image
                        borderRadius="4em"
                        boxSize="84px"
                        src="https://res.cloudinary.com/borneos-co/image/upload/v1644554350/images/item-empty_iiuizg.webp"
                        alt=""
                      />
                    )}
                  </Center>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100px"
                    backgroundColor="#fff"
                    marginTop="-50px"
                    boxShadow="lg"
                    padding="12px"
                    w="100%"
                    borderRadius="10px"
                  >
                    <Text fontWeight="bold" fontSize="md">
                      {item?.name || ''}
                    </Text>
                    <Text fontWeight="semibold" fontSize="sm" color="primary.0">
                      Kategori {item?.category?.name || ''}
                    </Text>
                    <Text fontWeight="light" fontSize="sm" noOfLines={2}>
                      {item?.address || ''}
                    </Text>
                  </Flex>
                </Flex>
                <Grid gap={3} p={8} templateColumns="repeat(3, 1fr)">
                  {item?.products?.map((item, idx) => (
                    <GridItem key={idx}>
                      <Product isLanding {...item} />
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </NextLink>
          ))}
      </Flex>
    </>
  );

  return (
    <>
      <Container maxW="container.xl">
        <Box paddingY="24px">
          <Text fontSize="3xl" fontWeight="bold" marginY="16px">
            Tentang KamiUMKM
          </Text>
          <Box>
            <Image
              src="https://res.cloudinary.com/borneos-co/image/upload/v1665562462/tjsl-core/banners/vwbmhcx8ysvmeruicvhj.png"
              alt=""
              borderRadius="16px"
              boxShadow="xl"
            />
          </Box>
          <Box paddingY="16px" marginY="32px">
            <Text fontSize="18px" fontWeight="regular">
              Pupuk Kaltim terus berkomitmen melaksanakan Program
              <b> Tanggung Jawab Sosial (TJSL)</b> dan program pendanaan
              <b> Usaha Mikro Kecil (UMK)</b> dalam mewujudkan masyarakat
              mandiri dan berkelanjutan berbasis hubungan harmonis antara
              perusahaan dan masyarakat.
            </Text>
            <Text fontSize="18px" fontWeight="regular" marginTop="12px">
              Pelaksanaan program TJSL Pupuk Kaltim direalisasikan sejalan
              dengan salah satu tujuan pendirian Badan Usaha Milik Negara (BUMN)
              yaitu aktif memberikan bimbingan dan bantuan kepada pengusaha
              golongan ekonomi lemah, koperasi dan masyarakat sebagaimana
              tertuang dalam Undang-Undang No. 19 tentang Badan Usaha Milik
              Negara.
            </Text>
            <Text fontSize="18px" fontWeight="regular" marginTop="12px">
              Pelaksanaan program TJSL juga sebagai wujud dari pelaksanaan
              prinsip <i>Good Corporate Governance</i> (GCG) dan tanggung jawab
              sosial perusahaan sebagai Badan Usaha Milik Negara (BUMN)
              berdasarkan Peraturan Menteri BUMN nomor PER-05/mbu/04/2021
              tentang program Tanggung Jawab Sosial dan Lingkungan Badan Usaha
              Milik Negara.
            </Text>
            <Text fontSize="18px" fontWeight="regular" marginTop="12px">
              <b>KamiUMKM</b> merupakan suatu program persembahan TJSL PKT dalam
              menghimpun seluruh UMKM binaan unggulan PKT dalam suatu wadah
              digital dengan tujuan mempromosikan dan memperkenalkan produk UMKM
              lokal Kota Bontang ke masyarakat luas. <br />
            </Text>
            <Text fontSize="18px" fontWeight="regular" marginTop="12px">
              <b>KamiUMKM</b> juga merupakan bentuk kontribusi nyata PKT
              terhadap pertumbuhan dan kemajuan UMKM di Indonesia, khususnya
              Kalimantan Timur dengan berkolaborasi dengan pemangku kepentingan
              dan para profesional.
            </Text>
          </Box>
        </Box>

        <Box marginY="24px">
          <MerchantSection />
        </Box>
      </Container>
    </>
  );
}

AboutPageContainerDesktop.propTypes = {
  dataMerchants: PropTypes.object,
  isSuccessMerchants: PropTypes.bool,
  isLoadingMerchants: PropTypes.bool,
  isFetchingMerchants: PropTypes.bool,
};

export default AboutPageContainerDesktop;
