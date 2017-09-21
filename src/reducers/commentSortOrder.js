import {
	SET_COMMENTS_SORT_ORDER
} from '../actions'

export default function(state = '-voteScore', action) {
	switch(action.type) {
		case SET_COMMENTS_SORT_ORDER:
			return action.payload
		default:
			return state
	}
}
