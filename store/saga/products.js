import axios from 'axios';
import { race, call, delay, put, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../../constants/actionTypes';
import ERROR_TYPES from '../../constants/errorTypes';
import ENV from '../../constants/env';
import ENDPOINTS from '../../constants/endpoints';

import { getErrorMessage, paramsToString } from '../../helpers/utils';

/**
 * Fetch products list
 * @param {{payload: Object}}}
 */
function* getProducts({ payload }) {
	try {
		const isServer = true;
		const { restaurant_id } = payload;
		const queryParams = {
			restaurant_id,
		};
		const params = paramsToString(queryParams);
		const uri = `${ENV.CURRENT_API}${ENDPOINTS.PRODUCTS}${params}`;
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
			type: ACTION_TYPES.PRODUCTS.GET_LOAD,
		});

		const { timeout, response } = yield race({
			timeout: delay(ENV.TIMEOUT.REQUEST),
			response: call(axios, options),
		});

		if (timeout) {
			yield put({
				type: ACTION_TYPES.PRODUCTS.GET_ERR,
				error: ERROR_TYPES.TIMEOUT,
			});
		} else if (response.data.error) {
			yield put({
				type: ACTION_TYPES.PRODUCTS.GET_ERR,
				error: response.data.message,
			});
		} else {
			const result = {
				data: response.data,
			};
			yield put({
				type: ACTION_TYPES.PRODUCTS.GET_RES,
				payload: result,
			});
		}
	} catch (err) {
		const error = getErrorMessage(err.response);
		yield put({
			type: ACTION_TYPES.PRODUCTS.GET_ERR,
			error: err,
		});
	}
}

export default function* combineSaga() {
	yield takeEvery(ACTION_TYPES.PRODUCTS.GET, getProducts);
}
