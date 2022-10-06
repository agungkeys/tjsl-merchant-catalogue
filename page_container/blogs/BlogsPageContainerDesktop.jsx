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
import { Router, useRouter } from 'next/router';
import { BlogCard, NextLink } from '../../components';

function BlogsPageContainerDesktop() {
  const router = useRouter();
  return (
    <Box>
      <Container maxW="container.xl" paddingY="32px">
        <Text marginY="24px" fontWeight="extrabold" fontSize="5xl">
          Artikel
        </Text>
        <Grid
          h="500px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem
            rowSpan={2}
            colSpan={3}
            padding="16px"
            borderRadius="16px"
            sx={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./pancake.jpg)',
              backgroundSize: 'cover',
            }}
            onClick={() => router.push('/')}
            cursor="pointer"
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
            onClick={() => router.push('/')}
            cursor="pointer"
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
            onClick={() => router.push('/')}
            cursor="pointer"
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
        </Grid>

        <Grid templateColumns="repeat(3, 1fr)" gap={4} marginY="32px">
          {[...Array(6)].map((item, idx) => (
            <GridItem key={idx}>
              <BlogCard />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default BlogsPageContainerDesktop;
