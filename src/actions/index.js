import * as PostsAPI from '../utils/PostsAPI'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

export function fetchCategories() {
  const request = PostsAPI.getCategories()
	return {
			type: FETCH_CATEGORIES,
			payload: request
	};
}
