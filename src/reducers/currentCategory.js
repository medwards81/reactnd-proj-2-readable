import {
	SET_CURRENT_CATEGORY
} from '../actions'

export default function(state = 'ALL', action) {
	switch(action.type) {
		case SET_CURRENT_CATEGORY:
			return action.payload
		default:
			return state
	}
}
