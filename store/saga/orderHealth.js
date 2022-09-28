import axios from 'axios';

import { race, call, delay, put, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../../constants/actionTypes';
import ERROR_TYPES from '../../constants/errorTypes';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';

import { getErrorMessage } from '../../helpers/utils';

export function* addOrderHealth({ payload, callback }) {
  try {
    const isServer = true;
    const { data } = payload;
    const uri = `${ENV.CURRENT_API}${ENDPOINTS.ORDER_HEALTH}`;
    const url = isServer ? uri : ENV.API.LOCAL;
    const headers = {
      'Content-Type': 'application/json',
    };

    const options = {
      url,
      method: 'POST',
      headers,
      data,
    };

    const { timeout, response } = yield race({
      timeout: delay(ENV.TIMEOUT.REQUEST),
      response: call(axios, options),
    });

    if (callback) {
      if (timeout) {
        callback('Timeout');
      } else if (response.data.stack) {
        callback('Error');
      } else {
        callback(null, response);
      }
    }
  } catch (err) {
    const error = getErrorMessage(err.response);
    if (callback) {
      callback(error);
    }
  }
}

export default function* combineSaga() {
  yield takeEvery(ACTION_TYPES.ORDER_HEALTH.ADD, addOrderHealth);
}