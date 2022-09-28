import ACTION_TYPES from '../../constants/actionTypes';
import DEFAULT_STATES from '../../constants/defaultStates';
import STATUS_TYPES from '../../constants/statusTypes';

const defaultState = DEFAULT_STATES.CATEGORIES;

/**
 * Reducer Categories
 * @param {object} state
 * @param {object} action
 * @returns {object} state
 */
function reducer(state = defaultState, action) {
	switch (action.type) {
		case ACTION_TYPES.CATEGORIES.GET_LOAD:
			return {
				...state,
				status: STATUS_TYPES.LOADING,
				error: null,
			};

		case ACTION_TYPES.CATEGORIES.GET_RES:
			return {
				...state,
				status: STATUS_TYPES.SUCCESS,
				error: null,
				data: action.payload.data,
			};

		case ACTION_TYPES.CATEGORIES.GET_ERR:
			return {
				...state,
				status: STATUS_TYPES.ERROR,
				error: action.error,
			};

		default:
			return state;
	}
}

export default reducer;
