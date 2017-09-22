import {
	SUBMIT_VOTE
} from '../actions'

export default function(state = {}, action) {
	switch(action.type) {
		case SUBMIT_VOTE:
			return {
        ...state,
				...action.payload
			}
		default:
			return state
	}
}
