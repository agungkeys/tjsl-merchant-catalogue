import { Box, Container, Image, Text } from '@chakra-ui/react';

function AboutPageContainerDesktop(props) {
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
          <Box padding="24px" marginY="32px">
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
              prinsip Good Corporate Governance (GCG) dan tanggung jawab sosial
              perusahaan sebagai Badan Usaha Milik Negara (BUMN) berdasarkan
              Peraturan Menteri BUMN nomor PER-05/mbu/04/2021 tentang program
              Tanggung Jawab Sosial dan Lingkungan Badan Usaha Milik Negara.
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
      </Container>
    </>
  );
}

export default AboutPageContainerDesktop;
