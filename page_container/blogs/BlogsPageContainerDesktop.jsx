import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import { BlogCard } from '../../components';

function BlogsPageContainerDesktop() {
  return (
    <Box minHeight="100vh">
      <Container maxW="container.xl" paddingY="32px">
        <Text marginY="24px" fontWeight="extrabold" fontSize="5xl">
          Artikel
        </Text>
        <Grid
          h="500px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={2}
        >
          <GridItem
            rowSpan={2}
            colSpan={1}
            padding="16px"
            borderRadius="16px"
            sx={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./pancake.jpg)',
              backgroundSize: 'cover',
            }}
          >
            <Box display="inline-block">
              <Badge colorScheme="purple" borderRadius="xl">
                New
              </Badge>
              <Text fontWeight="bold" fontSize="5xl" color="#fff">
                Blog
              </Text>
            </Box>
          </GridItem>
          <GridItem
            colSpan={2}
            borderRadius="16px"
            padding="16px"
            sx={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./pancake.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box display="inline-block">
              <Badge colorScheme="purple" borderRadius="xl">
                New
              </Badge>
              <Text fontWeight="bold" fontSize="5xl" color="#fff">
                Blog
              </Text>
            </Box>
          </GridItem>
          <GridItem
            colSpan={2}
            borderRadius="16px"
            padding="16px"
            sx={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./pancake.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box display="inline-block">
              <Badge colorScheme="purple" borderRadius="xl">
                New
              </Badge>
              <Text fontWeight="bold" fontSize="5xl" color="#fff">
                Blog
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={4} bg="tomato" />
        </Grid>

        <Flex
          width="100%"
          flexWrap="wrap"
          gap={6}
          justifyContent="center"
          marginY="32px"
        >
          {[...Array(6)].map((item, idx) => (
            <Box key={idx}>
              <BlogCard />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

export default BlogsPageContainerDesktop;
