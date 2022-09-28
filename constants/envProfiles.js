const API_MOCK = '';
const API_DEV = 'https://apps.borneos.co/api/v1';
// const API_SANITY = 'https://apps.borneos.co/api/v1/';
const API_PRODUCTION = 'https://apps.borneos.co/api/v1';
const STATIC_ASSET = 'https://web.borneos.co';

const DOMAIN_TYPE = {
  BOS: 'bos',
};

const ENV_TYPE = {
  LOCAL: 'local',
  DEV: 'dev',
  PRODUCTION: 'production',
};

/** Web Api */
const API_LOCAL = 'https://apps.borneos.co/api/v1';

/** Api Env */
const API_ENV = {
  [ENV_TYPE.LOCAL]: API_DEV,
  [ENV_TYPE.DEV]: API_DEV,
  [ENV_TYPE.PRODUCTION]: API_PRODUCTION,
};

const BOS_BASE_URL = {
  [ENV_TYPE.LOCAL]: 'http://localhost:3000',
  [ENV_TYPE.DEV]: 'http://localhost:3000',
  [ENV_TYPE.PRODUCTION]: 'https://web.borneos.co',
};

/** Asset Env */
const ASSET_URL_ENV = {
  [ENV_TYPE.LOCAL]: STATIC_ASSET,
  [ENV_TYPE.DEV]: STATIC_ASSET,
  [ENV_TYPE.PRODUCTION]: STATIC_ASSET,
};

const ENV_PROFILES = {
  ENV_TYPE,
  API_ENV,
  API_LOCAL,
  API_MOCK,
  ASSET_URL_ENV,
  BOS_BASE_URL,
  DOMAIN_TYPE,
};

export default ENV_PROFILES;
