import * as PostsAPI from '../utils/PostsAPI'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'
export const UPDATE_SORT_ORDER = 'UPDATE_SORT_ORDER'

export function fetchCategories() {
  const request = PostsAPI.getCategories()
	return {
			type: FETCH_CATEGORIES,
			payload: request
	};
}

export function fetchPosts() {
  const request = PostsAPI.getPosts()
	return {
			type: FETCH_POSTS,
			payload: request
	};
}

export function updateSortOrder(sortOrder) {
	return {
		type: UPDATE_SORT_ORDER,
		payload: sortOrder
	}
}
