import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../components';
import { Box } from '@chakra-ui/react';

function MainLayout(props) {
  const { children } = props;
  return (
    <Box>
      <Header {...props} />
      <Box>{children}</Box>
      <Footer {...props} />
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.array,
};

export default MainLayout;
