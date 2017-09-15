import { combineReducers } from 'redux';
import CategoriesReducer from './categories';
import PostsReducer from './posts'
import SortOrderReducer from './sortOrder'
import PostCommentsReducer from './postComments'
import PostVoteScoresReducer from './postVoteScores'

const rootReducer = combineReducers({
    categories: CategoriesReducer,
		posts: PostsReducer,
		postsSortOrder: SortOrderReducer,
		postComments: PostCommentsReducer,
    postVoteScores: PostVoteScoresReducer
});

export default rootReducer;
