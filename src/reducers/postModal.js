import {
	CLOSE_POST_MODAL,
	OPEN_POST_MODAL
} from '../actions'

export default function(state = false, action) {
	console.log(action)
	switch(action.type) {
		case CLOSE_POST_MODAL:
			return false
		case OPEN_POST_MODAL:
			return true
		default:
			return state
	}
}
