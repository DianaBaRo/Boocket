export const addBook = book => {
    return {
        type: 'ADD_BOOK', 
        book: book
    };
};

export const deleteBook = book => {
    return {
        type: 'DELETE_BOOK', 
        book: book
    };
};