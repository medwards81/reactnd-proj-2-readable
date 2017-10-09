import * as types from '../actions/types'

export default function(state = false, action) {
	switch(action.type) {
		case types.CLOSE_COMMENT_MODAL:
			return false
		case types.OPEN_COMMENT_MODAL:
			return true
		default:
			return state
	}
}
