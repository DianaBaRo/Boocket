import wishListReducer from './wishListReducer';
import searchBookListReducer from './searchBookListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    wishList: wishListReducer,
    searchBookList: searchBookListReducer
});

export default rootReducer;