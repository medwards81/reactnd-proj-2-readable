import * as types from '../actions/types'

export default function(state = {}, action) {
	switch(action.type) {
		case types.SUBMIT_VOTE:
			return {
        ...state,
				...action.payload
			}
		default:
			return state
	}
}
