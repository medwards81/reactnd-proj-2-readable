import * as types from '../actions/types'

export default function(state = [], action) {
	switch(action.type) {
		case types.FETCH_POSTS:
			return Array.isArray(action.payload) ? action.payload.filter(post => post.deleted !== true) : state
		default:
			return state
	}
}
