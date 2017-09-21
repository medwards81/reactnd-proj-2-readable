import {
	FETCH_POST_DETAIL_COMMENTS
} from '../actions'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_POST_DETAIL_COMMENTS:
		return action.payload
		default:
			return state
	}
}
