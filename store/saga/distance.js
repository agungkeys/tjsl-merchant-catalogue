import axios from 'axios';
import { race, call, delay, put, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../../constants/actionTypes';
import ERROR_TYPES from '../../constants/errorTypes';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';

import { handleCallback, getErrorMessage, paramsToString } from '../../helpers/utils';

export function* getDistance({ payload, callback }) {
	try {
		const isServer = true;
		const { origin_lat, origin_lng, destination_lat, destination_lng } = payload;
		const queryParams = {
			origin_lat, 
			origin_lng, 
			destination_lat, 
			destination_lng
		}

		const params = paramsToString(queryParams);

		const uri = `${ENV.CURRENT_API}${ENDPOINTS.DISTANCE}${params}`;
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
			type: ACTION_TYPES.DISTANCE.GET_LOAD,
		});

		const { timeout, response } = yield race({
			timeout: delay(ENV.TIMEOUT.REQUEST),
			response: call(axios, options),
		});

		if (timeout) {
			yield put({
				type: ACTION_TYPES.DISTANCE.GET_ERR,
				error: ERROR_TYPES.TIMEOUT,
			});
		} else if (response.data.stack) {
			yield put({
				type: ACTION_TYPES.DISTANCE.GET_ERR,
				error: response.data.message,
			});
		} else {
			yield put({
				type: ACTION_TYPES.DISTANCE.GET_RES,
				payload: { data: response.data },
			});
			handleCallback({ callback, result: response.data });
		}
	} catch (err) {
		const error = getErrorMessage(err.response);
		yield put({
			type: ACTION_TYPES.DISTANCE.GET_ERR,
			error,
		});
	}
}

export default function* combineSaga() {
	yield takeEvery(ACTION_TYPES.DISTANCE.GET, getDistance);
}
