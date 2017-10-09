import * as PostsAPI from '../utils/PostsAPI'
import * as types from './types'


/* Category Actions */

export function fetchCategories() {
  const request = PostsAPI.getCategories()
	return {
			type: types.FETCH_CATEGORIES,
			payload: request
	};
}

/* Post Actions */

export function fetchPosts(category) {
  const request = PostsAPI.getPosts(category)
	return {
			type: types.FETCH_POSTS,
			payload: request
	};
}

export function fetchPostDetails(id) {
  const request = PostsAPI.getPostDetails(id)
	return {
			type: types.FETCH_POST_DETAILS,
			payload: request
	};
}

export function fetchPostComments(id) {
  const request = PostsAPI.getPostComments(id)
	return {
			type: types.FETCH_POST_COMMENTS,
			payload: request
	};
}

export function setPostsSortOrder(sortOrder) {
	return {
		type: types.SET_POSTS_SORT_ORDER,
		payload: sortOrder
	}
}

export function submitVote(id, type, option) {
  const request = PostsAPI.submitVote(id, type, option)
  return {
    type: types.SUBMIT_VOTE,
    payload: request
  }
}

export function setCurrentCategory(category) {
	return {
		type: types.SET_CURRENT_CATEGORY,
		payload: category
	}
}

export function setCommentsSortOrder(sortOrder) {
	return {
		type: types.SET_COMMENTS_SORT_ORDER,
		payload: sortOrder
	}
}

export function setCurrentPost(id) {
	return {
		type: types.SET_CURRENT_POST,
		payload: id
	}
}

export function fetchPostDetailComments(id) {
  const request = PostsAPI.getPostComments(id)
	return {
			type: types.FETCH_POST_DETAIL_COMMENTS,
			payload: request
	};
}

export function openPostModal() {
	return {
		type: types.OPEN_POST_MODAL,
		payload: true
	}
}

export function closePostModal() {
	return {
		type: types.CLOSE_POST_MODAL,
		payload: false
	}
}

export function updatePost(id, data, callback) {
	const request = PostsAPI.updatePost(id, data)
		.then(() => callback())
	return {
		type: types.UPDATE_POST,
		payload: request
	}
}

export function createPost(data, callback) {
	const request = PostsAPI.createPost(data)
		.then(() => callback())
	return {
		type: types.CREATE_POST,
		payload: request
	}
}

export function deletePost(id, callback) {
	const request = PostsAPI.deletePost(id)
		.then(() => callback())
	return {
		type: types.DELETE_POST,
		payload: request
	}
}

/* Comment actions */

export function openCommentModal() {
	return {
		type: types.OPEN_COMMENT_MODAL,
		payload: true
	}
}

export function closeCommentModal() {
	return {
		type: types.CLOSE_COMMENT_MODAL,
		payload: false
	}
}

export function createComment(data, parentId, callback) {
	const request = PostsAPI.createComment(data, parentId)
		.then(() => callback())
	return {
		type: types.CREATE_COMMENT,
		payload: request
	}
}

export function updateComment(id, data, callback) {
	const request = PostsAPI.updateComment(id, data)
		.then(() => callback())
	return {
		type: types.UPDATE_CONMENT,
		payload: request
	}
}

export function deleteComment(id, callback) {
	const request = PostsAPI.deleteComment(id)
		.then(() => callback())
	return {
		type: types.DELETE_COMMENT,
		payload: request
	}
}

export function setCurrentCommentEdit(comment) {
	return {
		type: types.SET_CURRENT_COMMENT_EDIT,
		payload: comment
	}
}
