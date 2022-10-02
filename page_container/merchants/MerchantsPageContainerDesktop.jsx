import { Box, Flex, Center, Image, Text, Grid } from '@chakra-ui/react';
import { Product, Pagination } from '../../components';

function MerchantsPageContainerDesktop(props) {
  const MerchantSection = () => (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        width="100%"
        pr="5%"
        pl="5%"
      >
        {[...Array(12)].map((item, idx) => (
          <Box
            key={idx}
            marginY={1}
            borderRadius="16px"
            boxShadow="lg"
            w="100%"
          >
            <Box
              backgroundColor="#0D5099"
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
                <Image boxSize="84px" src="/home.png" alt="" />
              </Center>
              <Box
                alignItems="center"
                justifyContent="center"
                height="100px"
                backgroundColor="#fff"
                marginTop="-50px"
                boxShadow="lg"
                padding="12px"
                w="100%"
                borderRadius="10px"
              >
                <Text fontWeight="bold" fontSize="16px">
                  Rumah Habati
                </Text>
                <Text fontWeight="light" fontSize="12px">
                  Jl Gunung Arjuna No.3 BSD, Rumah Habati
                </Text>
                <Text fontWeight="semibold" fontSize="10px">
                  Kategori Makanan dan Minuman
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent="space-between" gap={3} p={8}>
              {[...Array(3)].map((item, idx) => (
                <Box key={idx}>
                  <Product isLanding />
                </Box>
              ))}
            </Flex>
          </Box>
        ))}
      </Grid>
    </>
  );
  return (
    <Flex>
      <Box>
        <MerchantSection />
        <Box
          Box
          display="grid"
          w="100%"
          alignItems="center"
          justifyContent="center"
          pt={5}
          pb={5}
        >
          <Pagination
            siblingCount={2}
            currentPage={2}
            totalCount={300}
            pageSize={12}
            // onPageChange={(page) => fetchPagination(page)}
          />
        </Box>
      </Box>
    </Flex>
  );
}

export default MerchantsPageContainerDesktop;
