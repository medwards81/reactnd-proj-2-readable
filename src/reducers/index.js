import { combineReducers } from 'redux';
import CategoriesReducer from './categories';
import PostsReducer from './posts'
import SortOrderReducer from './sortOrder'
import PostCommentsReducer from './postComments'
import PostVoteScoresReducer from './postVoteScores'
import PostDetailsReducer from './postDetails'

const rootReducer = combineReducers({
    categories: CategoriesReducer,
		posts: PostsReducer,
		postsSortOrder: SortOrderReducer,
		postComments: PostCommentsReducer,
    postVoteScores: PostVoteScoresReducer,
		postDetails: PostDetailsReducer
});

export default rootReducer;
