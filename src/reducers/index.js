import { combineReducers } from 'redux';
import CategoriesReducer from './categories';

const rootReducer = combineReducers({
    categories: CategoriesReducer
});

export default rootReducer;
