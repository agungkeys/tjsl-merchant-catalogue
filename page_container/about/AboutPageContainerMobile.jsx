import { Box, Container, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import CarouselMerchant from '../../components/Carousel/CarouselMerchant';

function AboutPageContainerMobile(props) {
  const {
    dataMerchants,
    isSuccessMerchants,
    isLoadingMerchants,
    isFetchingMerchants,
  } = props;

  return (
    <>
      <Container maxW="container.xl">
        <Box marginBottom="16px">
          <Text fontSize="3xl" fontWeight="bold">
            Tentang KamiUMKM
          </Text>
        </Box>
        <Box marginY="16px">
          <Image
            src="https://res.cloudinary.com/borneos-co/image/upload/v1668844436/tjsl-core/banners/banner_revisi_hsspun.webp"
            alt=""
            borderRadius="16px"
            boxShadow="xl"
          />
        </Box>
        <Box paddingX="16px" marginBottom="16px">
          <Text fontSize="md" fontWeight="regular">
            Pupuk Kaltim terus berkomitmen melaksanakan Program
            <b> Tanggung Jawab Sosial (TJSL)</b> dan program pendanaan
            <b> Usaha Mikro Kecil (UMK)</b> dalam mewujudkan masyarakat mandiri
            dan berkelanjutan berbasis hubungan harmonis antara perusahaan dan
            masyarakat.
          </Text>
          <Text fontSize="md" fontWeight="regular" marginTop="12px">
            Pelaksanaan program TJSL Pupuk Kaltim direalisasikan sejalan dengan
            salah satu tujuan pendirian Badan Usaha Milik Negara (BUMN) yaitu
            aktif memberikan bimbingan dan bantuan kepada pengusaha golongan
            ekonomi lemah, koperasi dan masyarakat sebagaimana tertuang dalam
            Undang-Undang No. 19 tentang Badan Usaha Milik Negara.
          </Text>
          <Text fontSize="md" fontWeight="regular" marginTop="12px">
            Pelaksanaan program TJSL juga sebagai wujud dari pelaksanaan prinsip
            <i> Good Corporate Governance</i> (GCG) dan tanggung jawab sosial
            perusahaan sebagai Badan Usaha Milik Negara (BUMN) berdasarkan
            Peraturan Menteri BUMN nomor PER-05/mbu/04/2021 tentang program
            Tanggung Jawab Sosial dan Lingkungan Badan Usaha Milik Negara.
          </Text>
          <Text fontSize="md" fontWeight="regular" marginTop="12px">
            <b>KamiUMKM</b> merupakan suatu program persembahan TJSL PKT dalam
            menghimpun seluruh UMKM binaan unggulan PKT dalam suatu wadah
            digital dengan tujuan mempromosikan dan memperkenalkan produk UMKM
            lokal Kota Bontang ke masyarakat luas. <br />
          </Text>
          <Text fontSize="md" fontWeight="regular" marginTop="12px">
            <b>KamiUMKM</b> juga merupakan bentuk kontribusi nyata PKT terhadap
            pertumbuhan dan kemajuan UMKM di Indonesia, khususnya Kalimantan
            Timur dengan berkolaborasi dengan pemangku kepentingan dan para
            profesional.
          </Text>
        </Box>
        <Box marginY="32px">
          <CarouselMerchant items={dataMerchants} isAboutPage />
        </Box>
      </Container>
    </>
  );
}

AboutPageContainerMobile.propTypes = {
  dataMerchants: PropTypes.object,
  isSuccessMerchants: PropTypes.bool,
  isLoadingMerchants: PropTypes.bool,
  isFetchingMerchants: PropTypes.bool,
};

export default AboutPageContainerMobile;
