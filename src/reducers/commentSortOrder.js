import * as types from '../actions/types'

export default function(state = '-voteScore', action) {
	switch(action.type) {
		case types.SET_COMMENTS_SORT_ORDER:
			return action.payload
		default:
			return state
	}
}
