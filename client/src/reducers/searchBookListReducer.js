function searchBookListReducer ( state = [], action) {
    switch (action.type) {
        case 'LOADING_SEARCH_BOOK_LIST':
            return state
            
        case 'ADD_SEARCH_BOOK_LIST':
            return action.books.items

        default:
            return state;
    };
};

export default searchBookListReducer;