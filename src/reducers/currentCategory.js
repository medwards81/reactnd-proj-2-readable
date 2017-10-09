import * as types from '../actions/types'

export default function(state = 'ALL', action) {
	switch(action.type) {
		case types.SET_CURRENT_CATEGORY:
			return action.payload
		default:
			return state
	}
}
