/* eslint-disable no-unused-vars */
/** npm packages */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Head } from 'next/document';
import HeadGeneral from './HeadGeneral';

const HeadMain = ({ children }) => {
  return (
    <Head>
      <HeadGeneral />
      {children}
    </Head>
  );
};

HeadMain.propTypes = {
  children: PropTypes.element,
};

export default HeadMain;
