import { combineReducers } from 'redux';
import CategoriesReducer from './categories';
import PostsReducer from './posts'
import PostSortOrderReducer from './postSortOrder'
import PostCommentsReducer from './postComments'
import VoteScoresReducer from './voteScores'
import PostDetailsReducer from './postDetails'
import CurrentCategoryReducer from './currentCategory'
import CommentSortOrderReducer from './commentSortOrder'
import CurrentPostReducer from './currentPost'
import PostDetailCommentsReducer from './postDetailComments'


const rootReducer = combineReducers({
    categories: CategoriesReducer,
		posts: PostsReducer,
		postsSortOrder: PostSortOrderReducer,
		postComments: PostCommentsReducer,
    voteScores: VoteScoresReducer,
		postDetails: PostDetailsReducer,
		currentCategory: CurrentCategoryReducer,
		commentsSortOrder: CommentSortOrderReducer,
		currentPost: CurrentPostReducer,
		postDetailComments: PostDetailCommentsReducer
});

export default rootReducer;
