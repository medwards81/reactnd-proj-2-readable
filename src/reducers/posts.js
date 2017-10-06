import {
	FETCH_POSTS,
} from '../actions'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_POSTS:
			return Array.isArray(action.payload) ? action.payload.filter(post => post.deleted !== true) : state
		default:
			return state
	}
}
