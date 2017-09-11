import * as PostsAPI from '../utils'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

export function fetchCategories() {
  PostsAPI.getCategories().then(categories => {
    return {
        type: FETCH_CATEGORIES,
        payload: categories
    };
  })
}
