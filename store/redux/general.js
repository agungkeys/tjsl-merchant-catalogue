import ACTION_TYPES from '../../constants/actionTypes';
import DEFAULT_STATES from '../../constants/defaultStates';

const defaultState = DEFAULT_STATES.GENERAL;

/**
 * Reducer General
 * @param {object} state
 * @param {object} action
 * @returns {object} state
 */
function reducer(state = defaultState, action) {
	switch (action.type) {
		case ACTION_TYPES.GENERAL.DEVICE_GET_RES:
			return {
				...state,
				device: action.payload,
			};

		case ACTION_TYPES.GENERAL.TOAST_SET_RES:
			return {
				...state,
				toast: action.payload,
			};

		default:
			return state;
	}
}

export default reducer;
