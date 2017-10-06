import * as PostsAPI from '../utils/PostsAPI'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST_DETAILS = 'FETCH_POST_DETAILS'
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS'
export const SET_POSTS_SORT_ORDER = 'SET_POSTS_SORT_ORDER'
export const SUBMIT_VOTE = 'SUBMIT_VOTE'
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
export const SET_COMMENTS_SORT_ORDER = 'SET_COMMENTS_SORT_ORDER'
export const SET_CURRENT_POST = 'SET_CURRENT_POST'
export const FETCH_POST_DETAIL_COMMENTS = 'FETCH_POST_DETAIL_COMMENTS'
export const OPEN_POST_MODAL = 'OPEN_POST_MODAL'
export const CLOSE_POST_MODAL = 'CLOSE_POST_MODAL'
export const UPDATE_POST = 'UPDATE_POST'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const OPEN_COMMENT_MODAL = 'OPEN_COMMENT_MODAL'
export const CLOSE_COMMENT_MODAL = 'CLOSE_COMMENT_MODAL'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_CONMENT = 'UPDATE_CONMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const SET_CURRENT_COMMENT_EDIT = 'SET_CURRENT_COMMENT_EDIT'

/* Category Actions */

export function fetchCategories() {
  const request = PostsAPI.getCategories()
	return {
			type: FETCH_CATEGORIES,
			payload: request
	};
}

/* Post Actions */

export function fetchPosts(category) {
  const request = PostsAPI.getPosts(category)
	return {
			type: FETCH_POSTS,
			payload: request
	};
}

export function fetchPostDetails(id) {
  const request = PostsAPI.getPostDetails(id)
	return {
			type: FETCH_POST_DETAILS,
			payload: request
	};
}

export function fetchPostComments(id) {
  const request = PostsAPI.getPostComments(id)
	return {
			type: FETCH_POST_COMMENTS,
			payload: request
	};
}

export function setPostsSortOrder(sortOrder) {
	return {
		type: SET_POSTS_SORT_ORDER,
		payload: sortOrder
	}
}

export function submitVote(id, type, option) {
  const request = PostsAPI.submitVote(id, type, option)
  return {
    type: SUBMIT_VOTE,
    payload: request
  }
}

export function setCurrentCategory(category) {
	return {
		type: SET_CURRENT_CATEGORY,
		payload: category
	}
}

export function setCommentsSortOrder(sortOrder) {
	return {
		type: SET_COMMENTS_SORT_ORDER,
		payload: sortOrder
	}
}

export function setCurrentPost(id) {
	return {
		type: SET_CURRENT_POST,
		payload: id
	}
}

export function fetchPostDetailComments(id) {
  const request = PostsAPI.getPostComments(id)
	return {
			type: FETCH_POST_DETAIL_COMMENTS,
			payload: request
	};
}

export function openPostModal() {
	return {
		type: OPEN_POST_MODAL,
		payload: true
	}
}

export function closePostModal() {
	return {
		type: CLOSE_POST_MODAL,
		payload: false
	}
}

export function updatePost(id, data, callback) {
	const request = PostsAPI.updatePost(id, data)
		.then(() => callback())
	return {
		type: UPDATE_POST,
		payload: request
	}
}

export function createPost(data, callback) {
	const request = PostsAPI.createPost(data)
		.then(() => callback())
	return {
		type: CREATE_POST,
		payload: request
	}
}

export function deletePost(id, callback) {
	const request = PostsAPI.deletePost(id)
		.then(() => callback())
	return {
		type: DELETE_POST,
		payload: request
	}
}

/* Comment actions */

export function openCommentModal() {
	return {
		type: OPEN_COMMENT_MODAL,
		payload: true
	}
}

export function closeCommentModal() {
	return {
		type: CLOSE_COMMENT_MODAL,
		payload: false
	}
}

export function createComment(data, parentId, callback) {
	const request = PostsAPI.createComment(data, parentId)
		.then(() => callback())
	return {
		type: CREATE_COMMENT,
		payload: request
	}
}

export function updateComment(id, data, callback) {
	const request = PostsAPI.updateComment(id, data)
		.then(() => callback())
	return {
		type: UPDATE_CONMENT,
		payload: request
	}
}

export function deleteComment(id, callback) {
	const request = PostsAPI.deleteComment(id)
		.then(() => callback())
	return {
		type: DELETE_COMMENT,
		payload: request
	}
}

export function setCurrentCommentEdit(comment) {
	return {
		type: SET_CURRENT_COMMENT_EDIT,
		payload: comment
	}
}
