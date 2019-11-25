export function fetchSearchBookList (query) {
    return ( dispatch ) => {
        dispatch({ type: 'LOADING_SEARCH_BOOK_LIST' });
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then( response => {
            if ( !response.ok && query.length === 0 ) { throw response }
            return response.json()  //we only get here if there is no error
        })
        .then( books => {
            console.log(books.items)
            if (books.error) {
                alert("There was an error")
            } else {
                dispatch({ type: 'ADD_SEARCH_BOOK_LIST', books })
            }
        })
        .catch( err => {
            err.text().then(errorMessage => {
                alert(JSON.parse(errorMessage).error.message)
            })
        })
    };
};