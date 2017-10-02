import {
	FETCH_POSTS,
} from '../actions'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_POSTS:
			return action.payload.filter(post => post.deleted !== true)
		default:
			return state
	}
}
