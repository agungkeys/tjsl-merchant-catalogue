/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Main, NextScript } from 'next/document';
import themes from '../styles/themes';
import HeadMain from '../components/Heads/HeadMain';

const MobileDetect = require('mobile-detect');

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const userAgent = ctx.req.headers['user-agent'];
    const mobileDetect = new MobileDetect(userAgent);
    const isMobile = !!mobileDetect.mobile();
    const isAmp = !!ctx.query.amp;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (Props) =>
          (
            <>
              <App {...Props} isMobile={isMobile} isAmp={isAmp} />
            </>
          ),
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isMobile, isAmp };
  }

  render() {
    return (
      <Html lang="id">
        <HeadMain />
        <body id="app" style={{ margin: 0 }}>
          <ColorModeScript initialColorMode={themes.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
