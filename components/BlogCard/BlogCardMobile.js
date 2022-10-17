import { Box, Flex, Image, Text } from '@chakra-ui/react';
import NextLink from '../NextLink';
import PropTypes from 'prop-types';
import { populateAdditionalImage } from '../../helpers/utils';

function BlogCardMobile(props) {
  const {
    title,
    category,
    shortDescription,
    additionalImage,
    author,
    slug,
    dateCreate,
  } = props;

  return (
    <>
      <NextLink link={`/blog/${slug}`}>
        <Box
          borderRightRadius="8px"
          backgroundColor="#fff"
          padding="8px"
          position="relative"
          top="60px"
          boxShadow="md"
          display="inline-block"
          zIndex={2}
        >
          <Text color="#0D5099" fontWeight="bold">
            {category?.name || ''}
          </Text>
        </Box>
        <Flex
          flexDirection="column"
          gap={3}
          bgColor="#fff"
          borderRadius="16px"
          padding="9px"
          boxShadow="md"
        >
          <Image
            src={populateAdditionalImage({
              ...additionalImage,
              height: 250,
              width: 385,
              extension: 'webp',
            })}
            alt=""
            borderRadius="8px"
            height="150px"
            objectFit="cover"
          />
          <Text fontSize="md" fontWeight="extrabold" noOfLines={2} height="55px">
            {title}
          </Text>
          <Flex justifyContent="space-between">
            <Text fontSize="sm">{dateCreate}</Text>
            <Text fontSize="sm">Posted by {author}</Text>
          </Flex>
        </Flex>
      </NextLink>
    </>
  );
}

BlogCardMobile.propTypes = {
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  additionalImage: PropTypes.object,
  category: PropTypes.object,
  author: PropTypes.string,
  dateCreate: PropTypes.string,
  slug: PropTypes.string,
};

export default BlogCardMobile;
