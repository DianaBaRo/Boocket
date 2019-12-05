//the reducer updates the global store with the data that was sent by action

function wishListReducer ( state = [], action) {
    switch (action.type) {
        case 'ADD_BOOK':
            return state.concat(action.book);

        case 'DELETE_BOOK':
            return state.filter( book => book.id !== action.book );

        case 'SET_MY_WISHLIST':
            return action.books;

        case 'ADD_LIKE':
            action.book.likes += 1
            return state.filter( book => book.id !== action.book );
        default:
            return state;
    };
};

export default wishListReducer;