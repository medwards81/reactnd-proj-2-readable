import * as types from '../actions/types'

export default function(state = false, action) {
	switch(action.type) {
		case types.CLOSE_POST_MODAL:
			return false
		case types.OPEN_POST_MODAL:
			return true
		default:
			return state
	}
}
