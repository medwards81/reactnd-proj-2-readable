import {
	FETCH_POST_COMMENTS
} from '../actions'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_POST_COMMENTS:
		const payloadParentId = action.payload.length ? action.payload[0].parentId : null
			return [
				...state.filter(comment => comment.parentId !== payloadParentId),
				...action.payload
			]
		default:
			return state
	}
}
