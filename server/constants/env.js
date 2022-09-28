/** Current Env */
const CURRENT_ENV = process.env.ENV;

/** Env Types */
const ENV_TYPE = {
  LOCAL: 'local',
  DEV: 'dev',
  STAGING: 'staging',
  SANITY: 'sanity',
  PRODUCTION: 'production',
};

module.exports = {
  CURRENT_ENV,
  ENV_TYPE
};
