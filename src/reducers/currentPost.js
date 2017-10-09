import * as types from '../actions/types'

export default function(state = null, action) {
	switch(action.type) {
		case types.SET_CURRENT_POST:
			return action.payload
		default:
			return state
	}
}
