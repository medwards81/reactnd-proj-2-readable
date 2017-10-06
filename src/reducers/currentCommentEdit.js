import {
	SET_CURRENT_COMMENT_EDIT
} from '../actions'

export default function(state = {}, action) {
	switch(action.type) {
		case SET_CURRENT_COMMENT_EDIT:
			return action.payload
		default:
			return state
	}
}
