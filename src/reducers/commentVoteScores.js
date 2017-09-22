import {
	SUBMIT_VOTE_COMMENT
} from '../actions'

export default function(state = {}, action) {
	switch(action.type) {
		case SUBMIT_VOTE_COMMENT:
			return {
        ...state,
				...action.payload
			}
		default:
			return state
	}
}
