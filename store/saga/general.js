import { put, takeEvery } from 'redux-saga/effects';

import ACTION_TYPES from '../../constants/actionTypes';

function* getDevice(params = {}) {
	try {
		yield put({
			type: ACTION_TYPES.GENERAL.DEVICE_GET_RES,
			payload: params.payload,
		});
	} catch (error) {
		//
	}
}

function* setToast(params = {}) {
	try {
		yield put({
			type: ACTION_TYPES.GENERAL.TOAST_SET_RES,
			payload: params.payload,
		});
	} catch (error) {
		//
	}
}

export default function* rootSaga() {
	yield takeEvery(ACTION_TYPES.GENERAL.DEVICE_GET, getDevice);
	yield takeEvery(ACTION_TYPES.GENERAL.TOAST_SET, setToast);
}
