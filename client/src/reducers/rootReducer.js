import wishListReducer from './wishListReducer';
import latestBookListReducer from './latestBookListReducer';
import searchBookListReducer from './searchBookListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    wishList: wishListReducer,
    latestBookList: latestBookListReducer,
    searchBookList: searchBookListReducer
});

export default rootReducer;