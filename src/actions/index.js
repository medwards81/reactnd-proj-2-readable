import * as PostsAPI from '../utils/PostsAPI'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'
export const SET_POSTS_SORT_ORDER = 'SET_POSTS_SORT_ORDER'

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

export function setPostsSortOrder(sortOrder) {
	return {
		type: SET_POSTS_SORT_ORDER,
		payload: sortOrder
	}
}
