import * as types from '../actions/types'

export default function(state = {}, action) {
	switch(action.type) {
		case types.FETCH_POST_DETAILS:
			return {
				...action.payload
			}
		default:
			return state
	}
}
