import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Category(props) {
  const { item } = props;
  return (
    <Box>
      <Text>Category</Text>
    </Box>
    // <Card css={{ p: "$2", mw: "400px" }} variant="bordered" isPressable isHoverable>
    //   <Card.Header>
    //     <Image
    //       alt="nextui logo"
    //       src={item.image || ''}
    //       width="34px"
    //       height="34px"
    //     />
    //     <Grid.Container css={{ pl: "$6" }}>
    //       <Grid xs={12}>
    //         <Text h4 size={16} css={{ lineHeight: "$xs" }}>
    //           {item.name || ''}
    //         </Text>
    //       </Grid>
    //       <Grid xs={12}>
    //         <Text size={10} css={{ color: "$accents8" }}>{item.description || ''}</Text>
    //       </Grid>
    //     </Grid.Container>
    //   </Card.Header>
    // </Card>
  )
}

Category.propTypes = {
  item: PropTypes.array,
};

export default Category;