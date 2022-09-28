import axios from 'axios';
import { race, call, delay, put, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../../constants/actionTypes';
import ERROR_TYPES from '../../constants/errorTypes';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';

import { getErrorMessage } from '../../helpers/utils';

export function* getConfig() {
	try {
		const isServer = true;

		const uri = `${ENV.CURRENT_API}${ENDPOINTS.CONFIG}`;
		const url = isServer ? uri : ENV.API.LOCAL;
		const endpoint = !isServer ? uri : null;
		const headers = {
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
			type: ACTION_TYPES.CONFIG.GET_LOAD,
		});

		const { timeout, response } = yield race({
			timeout: delay(ENV.TIMEOUT.REQUEST),
			response: call(axios, options),
		});

		if (timeout) {
			yield put({
				type: ACTION_TYPES.CONFIG.GET_ERR,
				error: ERROR_TYPES.TIMEOUT,
			});
		} else if (response.data.stack) {
			yield put({
				type: ACTION_TYPES.CONFIG.GET_ERR,
				error: response.data.message,
			});
		} else {
			yield put({
				type: ACTION_TYPES.CONFIG.GET_RES,
				payload: { data: response.data },
			});
		}
	} catch (err) {
		const error = getErrorMessage(err.response);
		yield put({
			type: ACTION_TYPES.CONFIG.GET_ERR,
			error,
		});
	}
}

export default function* combineSaga() {
	yield takeEvery(ACTION_TYPES.CONFIG.GET, getConfig);
}
