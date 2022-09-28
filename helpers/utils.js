/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import ACTION_TYPES from '../constants/actionTypes';
import { format, addDays } from 'date-fns';
import ENV from '../constants/env';
import { useRouter } from 'next/router';
const MobileDetect = require('mobile-detect');
/**
 * Cek if device type is mobile
 * @param {{userAgent:string, dispatch:function}}
 * @returns {object} isMobile, clientId
 */
function initMobileDevice({ userAgent, dispatch }) {
  const mobileDetect = new MobileDetect(userAgent);
  const isMobile = !!mobileDetect.mobile();
  const os = mobileDetect.os();
  const clientId = !os
    ? 'web'
    : os === 'iOS' || os === 'iPadOS'
    ? 'ios'
    : 'android';

  dispatch({
    type: ACTION_TYPES.GENERAL.DEVICE_GET,
    payload: { isMobile, clientId },
  });

  return { isMobile, clientId };
}

/**
 * get error message from object error
 * @param {object} errorResponse
 * @returns {string} error message
 */

export function getErrorMessage(errorResponse) {
  let error = '';
  if (errorResponse) {
    if (
      errorResponse.data.customResponse &&
      errorResponse.data.customResponse.errors &&
      errorResponse.data.customResponse.errors.length > 0
    ) {
      errorResponse.data.customResponse.errors.forEach((elm) => {
        error += `${elm.detail}, `;
      });
      if (error) {
        error = error.replace(/,\s*$/, '');
      }
    } else if (errorResponse.statusText) {
      error = errorResponse.statusText;
    } else if (
      errorResponse.data.errors &&
      errorResponse.data.errors.length > 0
    ) {
      errorResponse.data.errors.forEach((elm) => {
        error += `${elm.detail}, `;
      });
      if (error) {
        error = error.replace(/,\s*$/, '');
      }
    } else {
      error = 'Error';
    }
  }

  return error;
}

/**
 * generate object to query string
 * @param {object} params Object of params
 * @param {boolean} excludeEmptyValue empty value is exclude or not
 * @param {boolean} sort sorting result or not
 * @returns {string} query string
 */
export function paramsToString(
  params = {},
  excludeEmptyValue = true,
  sort = true,
) {
  const paramsArray = [];

  Object.entries(params).forEach((param) => {
    if (excludeEmptyValue) {
      if (param[1]) {
        paramsArray.push(`${param[0]}=${encodeURIComponent(param[1])}`);
      }
    } else {
      paramsArray.push(`${param[0]}=${encodeURIComponent(param[1])}`);
    }
  });

  if (sort) paramsArray.sort();

  return paramsArray.length ? `?${paramsArray.join('&')}` : '';
}

/**
 * Initiate device
 * @param {{userAgent:string, isAmp:boolean, dispatch:function}}
 */
export function initDevice({ userAgent, dispatch }) {
  initMobileDevice({ userAgent, dispatch });
}

/**
 * Initiate App
 * @param {{userAgent:string, cookies:string, isAmp:boolean, dispatch:function}}
 */
export function initApp({ userAgent, dispatch }) {
  initMobileDevice({ userAgent, dispatch });
}

export function stringToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaaeeeeiiiioooouuuunc------';

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

export function isObjectEmpty(obj) {
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

/**
 * Handle redirect to custom 404
 * @param {Object} res | server response
 * @param {String} route | url route for custom 404
 * @returns {Function} redirect to 404 pages
 */
export function redirect404({ res, route }) {
  return typeof window !== 'undefined'
    ? Router.push(route)
    : res.redirect(301, `${ENV.CURRENT_HOST}${route}`);
}

/**
 * Handle callback function
 * @param {Function} callback | function for callback
 * @param {String} event | name of event
 * @param {Object} result | result of API
 * @returns {Function} execute callback function
 */
export function handleCallback({ callback, event = null, result = null }) {
  return callback ? callback(event, result) : null;
}

export function isElementInViewport(el, parentEl) {
  const rect = el.getBoundingClientRect();

  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left <
      ((parentEl || window).innerWidth ||
        document.documentElement.clientWidth) &&
    rect.top <
      ((parentEl || window).innerHeight ||
        document.documentElement.clientHeight)
  );
}

export function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

export function priceFormat(price = 0, currency = 'Rp') {
  const formatedPrice = price
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  return `${currency} ${formatedPrice}`;
}

export function limitString(string, length) {
  return string.length > length
    ? string.substring(0, length - 3) + '...'
    : string;
}

export function rem(value) {
  return `${value / 16}rem`;
}

export function dateFormat(
  date = null,
  formatDate = 'DD-MM-YYYY',
  lang = 'id',
) {
  if (date !== null) {
    let newDate = format(date, formatDate);

    if (formatDate === 'DD MMM YYYY' && lang === 'id') {
      newDate = newDate.replace(/May/g, 'Mei');
      newDate = newDate.replace(/Aug/g, 'Agu');
      newDate = newDate.replace(/Oct/g, 'Okt');
      newDate = newDate.replace(/Dec/g, 'Des');
    }

    if (formatDate === 'DD MMMM YYYY' && lang === 'id') {
      newDate = newDate.replace(/January/g, 'Januari');
      newDate = newDate.replace(/February/g, 'Febuari');
      newDate = newDate.replace(/March/g, 'Maret');
      newDate = newDate.replace(/May/g, 'Mei');
      newDate = newDate.replace(/June/g, 'Juni');
      newDate = newDate.replace(/July/g, 'Juli');
      newDate = newDate.replace(/August/g, 'Agustus');
      newDate = newDate.replace(/October/g, 'Oktober');
      newDate = newDate.replace(/December/g, 'Desember');
    }

    if (formatDate.includes('dddd') && lang === 'id') {
      newDate = newDate.replace(/Sunday/g, 'Minggu');
      newDate = newDate.replace(/Monday/g, 'Senin');
      newDate = newDate.replace(/Tuesday/g, 'Selasa');
      newDate = newDate.replace(/Wednesday/g, 'Rabu');
      newDate = newDate.replace(/Thursday/g, 'Kamis');
      newDate = newDate.replace(/Friday/g, 'Jumat');
      newDate = newDate.replace(/Saturday/g, 'Sabtu');
    }

    return `${newDate}`;
  }
  return '';
}

/**
 * Handle populate image from additional claoudinary
 * ex: populateAdditionalImage({...item.additional_image, height: 64, width: 64, extension: 'webp'})
 */

export function populateAdditionalImage(data) {
  const CDN = `https://res.cloudinary.com/borneos-co/image/upload/`;
  const { isGrayscale, public_id, extension, height, width, crop = 'c_fill' } = data;

  return `${CDN}w_${width},h_${height},${crop}/${
    isGrayscale ? `e_grayscale/` : ``
  }${public_id}.${extension}`;
}

export function convertSlugToString(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}
