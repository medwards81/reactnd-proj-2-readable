import { combineReducers } from 'redux';
import CategoriesReducer from './categories';
import PostsReducer from './posts'
import SortOrderReducer from './sortOrder'

const rootReducer = combineReducers({
    categories: CategoriesReducer,
		posts: PostsReducer,
		sortOrder: SortOrderReducer
});

export default rootReducer;
