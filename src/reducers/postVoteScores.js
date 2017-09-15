import {
	SUBMIT_VOTE_POST
} from '../actions'

export default function(state = {}, action) {
	switch(action.type) {
		case SUBMIT_VOTE_POST:
			return {
        ...state,
				...action.payload
			}
		default:
			return state
	}
}
