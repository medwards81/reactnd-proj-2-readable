import * as types from '../actions/types'

export default function(state = {}, action) {
	switch(action.type) {
		case types.SUBMIT_VOTE_COMMENT:
			return {
        ...state,
				...action.payload
			}
		default:
			return state
	}
}
