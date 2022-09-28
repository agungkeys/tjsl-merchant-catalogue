/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../store';

import TagManager from 'react-gtm-module';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { config } from '../lib/react-query-config';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import themes from '../styles/themes';

import '../styles/globals.css';
import '../styles/banners.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/** utils */
import { initApp } from '../helpers/utils';

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  *:focus {
    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }
`;

function MyApp(props) {
  const { Component, pageProps, store } = props;
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KTLSRNW' });
  }, []);
  const {
    storeGeneral: {
      device: { isMobile },
      isAmp,
    },
  } = store.getState();
  const queryClient = new QueryClient(config);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <Global styles={GlobalStyles} />
          <ChakraProvider theme={themes}>
            <Component {...pageProps} isMobile={isMobile} isAmp={isAmp} />
          </ChakraProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { Component, ctx, router } = appContext;
  const {
    store,
    isServer,
    res,
    req,
    query: { amp, lite, webview, bot },
  } = ctx;

  if (isServer) {
    initApp({
      isServer,
      userAgent: req.headers['user-agent'],
      cookies: req.headers.cookie,
      isAmp: !!amp,
      dispatch: store.dispatch,
    });
  }

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { pageProps };
};

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  store: PropTypes.object,
};

export default withRedux(createStore)(withReduxSaga(MyApp));
