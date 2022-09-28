import axios from 'axios';
import { race, call, delay, put, debounce, takeEvery, takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../../constants/actionTypes';
import ERROR_TYPES from '../../constants/errorTypes';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';

import { getErrorMessage, paramsToString } from '../../helpers/utils';

/**
 * Fetch search
 * @param {{payload: Object}}}
 */
 function* getSearch({ payload }) {
 console.log("🚀 ~ file: search.js ~ line 15 ~ function*getSearch ~ payload", payload)
	try {
		const isServer = true;
		const { name = '', offset = 1, limit = 20, } = payload;

		const params = paramsToString({
			name,
			offset,
			limit,
		});

		const uri = `${ENV.CURRENT_API}${ENDPOINTS.SEARCH}${params}`;
		const url = isServer ? uri : ENV.API.LOCAL;
		const endpoint = !isServer ? uri : null;
		const headers = {
			zoneid: 1,
			...(endpoint && { endpoint }),
			...((endpoint && { contenttype: 'application/json' }) || {
				'Content-Type': 'application/json',
			}),
		};

		const options = {
			url,
			method: 'GET',
			headers,
		};

		yield put({
			type: ACTION_TYPES.SEARCH.GET_LOAD,
		});

		const { timeout, response } = yield race({
			timeout: delay(ENV.TIMEOUT.REQUEST),
			response: call(axios, options),
		});

		if (timeout) {
			yield put({
				type: ACTION_TYPES.SEARCH.GET_ERR,
				error: ERROR_TYPES.TIMEOUT,
			});
		} else if (response.data.error) {
			yield put({
				type: ACTION_TYPES.SEARCH.GET_ERR,
				error: response.data.message,
			});
		} else {
			const result = {
				data: response.data,
			};
      console.log("🚀 ~ file: search.js ~ line 66 ~ function*getSearch ~ result", result)
			yield put({
				type: ACTION_TYPES.SEARCH.GET_RES,
				payload: result,
			});
		}
	} catch (err) {
		const error = getErrorMessage(err.response);
		yield put({
			type: ACTION_TYPES.SEARCH.GET_ERR,
			error: err,
		});
	}
}

export default function* combineSaga() {
	yield debounce(300, ACTION_TYPES.SEARCH.GET, getSearch);
}