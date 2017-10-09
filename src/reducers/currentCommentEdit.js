import * as types from '../actions/types'

export default function(state = {}, action) {
	switch(action.type) {
		case types.SET_CURRENT_COMMENT_EDIT:
			return action.payload
		default:
			return state
	}
}
