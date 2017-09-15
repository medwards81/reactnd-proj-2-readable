import * as PostsAPI from '../utils/PostsAPI'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST_DETAILS = 'FETCH_POST_DETAILS'
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS'
export const SET_POSTS_SORT_ORDER = 'SET_POSTS_SORT_ORDER'
export const SUBMIT_VOTE_POST = 'SUBMIT_VOTE_POST'

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

export function submitVotePost(id, option) {
  const request = PostsAPI.submitVotePost(id, option)
  return {
    type: SUBMIT_VOTE_POST,
    payload: request
  }
}
