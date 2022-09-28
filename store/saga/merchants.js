import axios from 'axios';
import { race, call, delay, put, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../../constants/actionTypes';
import ERROR_TYPES from '../../constants/errorTypes';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';

import { getErrorMessage, handleCallback, paramsToString } from '../../helpers/utils';

/**
 * Fetch merchants list
 * @param {{payload: Object}}}
 */
function* getMerchants({ payload, callback }) {
	try {
		const isServer = true;
		const { offset = 1, limit = 20, slug = '' } = payload;

		const params = paramsToString({
			offset,
			limit,
			slug,
		});

		const uri = `${ENV.CURRENT_API}${ENDPOINTS.MERCHANTS}${params}`;
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
			type: ACTION_TYPES.MERCHANTS.GET_LOAD,
		});

		const { timeout, response } = yield race({
			timeout: delay(ENV.TIMEOUT.REQUEST),
			response: call(axios, options),
		});

		if (timeout) {
			yield put({
				type: ACTION_TYPES.MERCHANTS.GET_ERR,
				error: ERROR_TYPES.TIMEOUT,
			});
		} else if (response.data.error) {
			yield put({
				type: ACTION_TYPES.MERCHANTS.GET_ERR,
				error: response.data.message,
			});
		} else {
			const result = {
				data: response.data,
			};
			yield put({
				type: ACTION_TYPES.MERCHANTS.GET_RES,
				payload: result,
			});
			handleCallback({ callback, result });
		}
	} catch (err) {
		const error = getErrorMessage(err.response);
		yield put({
			type: ACTION_TYPES.MERCHANTS.GET_ERR,
			error: err,
		});
	}
}

export default function* combineSaga() {
	yield takeEvery(ACTION_TYPES.MERCHANTS.GET, getMerchants);
}
