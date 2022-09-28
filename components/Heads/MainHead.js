import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import ENV from '../../constants/env';

function MainHead(props) {
  const { seo } = props;
  const {
    TITLE,
    DESC,
    KEYWORDS,
    CANONICAL_URL,
    OG_LOCALE,
    OG_TITLE,
    OG_DESC,
    OG_TYPE,
    OG_SITENAME,
    OG_URL,
    OG_IMAGE,
    OG_IMAGE_URL,
    OG_IMAGE_TYPE,
    OG_IMAGE_WIDTH,
    OG_IMAGE_HEIGHT,
    OG_IMAGE_ALT,
    OG_TWITTER_CARD,
    OG_TWITTER_TITLE,
    OG_TWITTER_DESC,
    OG_TWITTER_SITE,
  } = seo;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{TITLE}</title>
      {DESC && <meta name="description" content={DESC} />}
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://www.borneos.co/favicon.ico"
      />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="referrer" content="no-referrer-when-downgrade" />

      {ENV.CURRENT_ENV !== 'local' ? (
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      ) : (
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"
        />
      )}

      {ENV.CURRENT_ENV !== 'local' ? (
        <meta name="robots" content="index, follow" />
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}

      <meta
        name="google-site-verification"
        content="GawGhNmUKF7tV960d3oDgYe33g_w6TQnc2_5aJWCPcg"
      />
      <meta name="language" content="id" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"
      />
      <meta name="theme-color" content="pink" />
      {/* <meta property="fb:app_id" content={ENV.FB_APP_ID} /> */}

      {/* META OG */}
      <meta property="og:locale" content={OG_LOCALE} />
      <meta property="og:title" content={OG_TITLE} />
      {OG_DESC && <meta property="og:description" content={OG_DESC} />}
      <meta property="og:type" content={OG_TYPE} />
      <meta property="og:site_name" content={OG_SITENAME} />
      <meta property="og:url" content={OG_URL} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:url" content={OG_IMAGE_URL} />
      <meta property="og:image:type" content={OG_IMAGE_TYPE} />
      <meta property="og:image:width" content={OG_IMAGE_WIDTH} />
      <meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta property="og:twitter:card" content={OG_TWITTER_CARD} />
      <meta property="og:twitter:title" content={OG_TWITTER_TITLE} />
      {OG_TWITTER_DESC && (
        <meta property="og:twitter:description" content={OG_TWITTER_DESC} />
      )}
      <meta property="og:twitter:site" content={OG_TWITTER_SITE} />

      <link rel="canonical" href={CANONICAL_URL} />

      {/* <HeadLinks /> */}
      <link rel="icon" href={ENV.LOGO} />
      <link
        rel="apple-touch-icon"
        sizes="300x300"
        href={ENV.LOGO_APPLE_TOUCH}
      />
      <link rel="icon" type="image/png" sizes="32x32" href={ENV.LOGO_32} />
      <link rel="icon" type="image/png" sizes="16x16" href={ENV.LOGO_16} />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="16x16"
        href={ENV.LOGO_16}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
					var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
					(function(){
					var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
					s1.async=true;
					s1.src='https://embed.tawk.to/61f758929bd1f31184da1e0c/1fqn340hd';
					s1.charset='UTF-8';
					s1.setAttribute('crossorigin','*');
					s0.parentNode.insertBefore(s1,s0);
					})();
			`,
        }}
      />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-D7RPVS3YDB`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-D7RPVS3YDB', {
					page_path: window.location.pathname,
				});
			`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-KTLSRNW');`,
        }}
      />
    </Head>
  );
}

MainHead.propTypes = {
  seo: PropTypes.object,
};

export default MainHead;
