import getConfig from 'next/config';
import ENV_PROFILES from './envProfiles';
const { publicRuntimeConfig } = getConfig();

/** Get Env Set form Config */
const CURRENT_API = publicRuntimeConfig.API || null;
const CURRENT_ENV = publicRuntimeConfig.BASE_ENV || null;
const CURRENT_HOST = publicRuntimeConfig.BASE_HOST || null;
const CURRENT_TOKENB = publicRuntimeConfig.TOKENB || null;
const CURRENT_PATH_BANNER = publicRuntimeConfig.PATH_BANNER || null;
const CURRENT_PATH_MERCHANT = publicRuntimeConfig.PATH_MERCHANT || null;
const CURRENT_PATH_COVER = publicRuntimeConfig.PATH_COVER || null;
const CURRENT_PATH_PRODUCT = publicRuntimeConfig.PATH_PRODUCT || null;
const CURRENT_PATH_IMAGE = publicRuntimeConfig.PATH_IMAGE || null;
const CURRENT_PATH_IMAGE_MERCHANT_EMPTY =
  publicRuntimeConfig.PATH_IMAGE_MERCHANT_EMPTY || null;
const CURRENT_PATH_IMAGE_PRODUCT_EMPTY =
  publicRuntimeConfig.PATH_IMAGE_PRODUCT_EMPTY || null;
const CURRENT_GOOGLE_API_KEY_SERVICE =
  publicRuntimeConfig.GOOGLE_API_KEY_SERVICE || null;
const LOGO = `https://apps.borneos.co/${CURRENT_PATH_BANNER}/2022-02-09-620362f0e4069.png`;
const LOGO_APPLE_TOUCH = `https://www.borneos.co/favicon/apple-touch-icon.png`;
const LOGO_16 = `https://www.borneos.co/favicon/favicon-16x16.png`;
const LOGO_32 = `https://www.borneos.co/favicon/favicon-32x32.png`;
const LOGO_192 = `https://www.borneos.co/favicon/favicon-192x192.png`;
const LOGO_512 = `https://www.borneos.co/favicon/favicon-512x512.png`;

/** Set of API */
const API = {
  LOCAL: ENV_PROFILES.API_LOCAL,
  SERVER: ENV_PROFILES.API_ENV[CURRENT_API],
  SERVER_MOCK: ENV_PROFILES.API_MOCK,
};

/** Setting */
const TIMEOUT = {
  REQUEST: 50000,
};

const ENV = {
  CURRENT_API,
  CURRENT_ENV,
  CURRENT_HOST,
  CURRENT_TOKENB,
  CURRENT_PATH_IMAGE,
  CURRENT_PATH_IMAGE_MERCHANT_EMPTY,
  CURRENT_PATH_IMAGE_PRODUCT_EMPTY,
  CURRENT_PATH_BANNER,
  CURRENT_PATH_MERCHANT,
  CURRENT_PATH_COVER,
  CURRENT_PATH_PRODUCT,
  CURRENT_GOOGLE_API_KEY_SERVICE,
  LOGO,
  LOGO_APPLE_TOUCH,
  LOGO_16,
  LOGO_32,
  LOGO_192,
  LOGO_512,

  API,
  TIMEOUT,
};

export default ENV;
