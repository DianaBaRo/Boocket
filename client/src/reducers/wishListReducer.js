//the reducer updates the global store with the data that was sent by action

function wishListReducer ( state = [], action) {
    switch (action.type) {
        case 'ADD_BOOK':
            //adding without mutating
            return state.concat(action.book);

        case 'DELETE_BOOK':
            //deletin without mutating
            return state.filter( book => book.id !== action.book );

        case 'SET_MY_WISHLIST':
            return state.concat(action.books);

        default:
            return state;
    };
};

export default wishListReducer;