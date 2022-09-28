import STATUS_TYPES from './statusTypes';
// A
// B
const BANNERS = {
  status: 'init',
  data: [],
  error: null,
};
// C
const CATEGORIES = {
  status: 'init',
  data: [],
  error: null,
};
const CONFIG = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: {},
};
// D
const DISTANCE = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: {},
};
// G
const GENERAL = {
  device: { isMobile: null, clientId: 'web' },
  isAmp: null,
  toast: {},
};
// M
const MERCHANT = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: {},
};
const MERCHANTS = {
  status: STATUS_TYPES.INIT,
  data: [],
  error: null,
};
// P
const PRODUCTS = {
  status: STATUS_TYPES.INIT,
  error: null,
  data: [],
};
// S
const SEARCH = {
  status: STATUS_TYPES.INIT,
  data: [],
  error: null,
};

const DEFAULT_STATES = {
  // A
  // B
  BANNERS,
  // C
  CATEGORIES,
  CONFIG,
  // D
  DISTANCE,
  // G
  GENERAL,
  // M
  MERCHANT,
  MERCHANTS,
  // P
  PRODUCTS,
  // S
  SEARCH,
};

export default DEFAULT_STATES;
