function latestBookListReducer ( state = [], action) {
    switch (action.type) {
        case 'LOADING_LATEST_BOOK_LIST':
            return state
            
        case 'ADD_LATEST_BOOK_LIST':
            return action.books.items

        default:
            return state;
    };
};

export default latestBookListReducer;