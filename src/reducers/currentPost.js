import {
	SET_CURRENT_POST
} from '../actions'

export default function(state = null, action) {
	switch(action.type) {
		case SET_CURRENT_POST:
			return action.payload
		default:
			return state
	}
}
