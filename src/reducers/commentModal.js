import {
	CLOSE_COMMENT_MODAL,
	OPEN_COMMENT_MODAL
} from '../actions'

export default function(state = false, action) {
	switch(action.type) {
		case CLOSE_COMMENT_MODAL:
			return false
		case OPEN_COMMENT_MODAL:
			return true
		default:
			return state
	}
}
