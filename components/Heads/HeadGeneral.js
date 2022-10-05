/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable one-var */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
/** npm packages */
import React, { Component } from 'react';
import propTypes from 'prop-types';

import ENV from '../../constants/env';

export default class HeadGeneral extends Component {
  // static contextTypes = {
  // 	// _documentProps: propTypes.any,
  // };

  componentDidMount() {
    // GTM
    // (function (w, d, s, l, i) {
    //   w[l] = w[l] || [];
    //   w[l].push({
    //     'gtm.start': new Date().getTime(),
    //     event: 'gtm.js',
    //   });
    //   var f = d.getElementsByTagName(s)[0],
    //     j = d.createElement(s),
    //     dl = l != 'dataLayer' ? '&l=' + l : '';
    //   j.async = true;
    //   j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    //   f.parentNode.insertBefore(j, f);
    // })(window, document, 'script', 'dataLayer', ENV.GTM_ID);
  }

  render() {
    // const { styleTags, isAmp, inlineStyleAttributes, inlineCss } = this.props;
    return (
      <>
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ENV.GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ENV.GA_ID}');
          `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
                  {
                    "@context": "http://schema.org",
                    "@type": "Organization",
                    "name": "SehatQ – Asisten Kesehatan Anda",
                    "url": "https://www.sehatq.com/",
                    "logo": "https://www.sehatq.com/public/img/logo.png",
                    "sameAs": [
                        "https://www.facebook.com/SehatQIndonesia/",
                        "https://twitter.com/sehatq",
                        "https://www.instagram.com/sehatq_id/",
                        "https://www.linkedin.com/company/sehatq/"
                    ]
                  }
                `,
          }}
        /> */}

        <meta charSet="utf-8" />
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        /> */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="google-site-verification" content="" />
        <meta name="language" content="id" />
        <meta name="csrf-token" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#f27725" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          sizes="16x16"
          href="https://res.cloudinary.com/borneos-co/image/upload/v1664949691/tjsl-core/icon-logo/favicon_cen5ia.ico"
        />
        <meta
          property="og:twitter:title"
          content="borneos.co | Belanja jadi lebih mudah dalam genggaman"
        />
        <meta
          property="og:twitter:desc"
          content="Belanja jadi lebih mudah dalam genggaman, terkoneksi ratusan mitra umkm kalimantan timur, bontang, samarinda, balikpapan, sangatta"
        />
        <meta property="og:type" content="Website" />
        <meta property="og:locale" content="Id_ID" />
        <meta property="og:site_name" content="Borneos.co" />
        <meta property="og:twitter:card" content="Summary" />
        <meta property="og:twitter:site" content="@borneos" />
        {/* <meta property="fb:app_id" content="698840740537290" /> */}

        {/* <link rel="stylesheet" type="text/css" href="/static/css/global.css" /> */}
        {/* <noscript 
          dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTLSRNW"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}
        /> */}
      </>
    );
  }
}

HeadGeneral.propTypes = {};
