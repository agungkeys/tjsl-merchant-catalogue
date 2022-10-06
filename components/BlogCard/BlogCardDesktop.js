import { Box, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import NextLink from '../NextLink';
import { populateAdditionalImage } from '../../helpers/utils';

function BlogCardDesktop(props) {
  const { title, category, shortDescription, additionalImage, author, slug } =
    props;
  return (
    <NextLink link={`/blog/${slug}`}>
      <Box
        borderRightRadius="8px"
        backgroundColor="#fff"
        padding="8px"
        position="relative"
        top="80px"
        boxShadow="md"
        display="inline-block"
        zIndex={2}
      >
        <Text color="#0D5099" fontWeight="bold">
          {category?.name || ''}
        </Text>
      </Box>
      <Box borderRadius="8px" boxShadow="lg">
        <Image
          borderTopRadius="8px"
          src={populateAdditionalImage({
            ...additionalImage,
            height: 250,
            width: 385,
            extension: 'webp',
          })}
          alt=""
          objectFit="cover"
          width="100%"
          height="250px"
        />
        <Box padding="16px">
          <Text fontSize="xl" fontWeight="extrabold" height="45px">
            {title || ''}
          </Text>
          <Text
            fontWeight="light"
            marginTop="12px"
            fontSize="md"
            noOfLines={2}
            height="50px"
          >
            {shortDescription || ''}
          </Text>
          <Flex justifyContent="space-between" marginTop="12px">
            <Text fontSize="sm">30 September 2022</Text>
            <Text fontSize="sm">{`Posted by ${author || '-'}`}</Text>
          </Flex>
        </Box>
      </Box>
    </NextLink>
  );
}

BlogCardDesktop.propTypes = {
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  additionalImage: PropTypes.object,
  category: PropTypes.object,
  author: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
};

export default BlogCardDesktop;
