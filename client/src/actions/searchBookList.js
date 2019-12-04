export const fetchSearchBookList = (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=newest&maxResults=40`
    return ( dispatch ) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( response => {
            if ( !response.ok && query.length === 0 ) { throw response }
            return response.json()  //we only get here if there is no error
        })
        .then( books => {
            console.log(books.items)
            if (books.error) {
                alert("There was an error")
            } else {
                dispatch({ type: 'SET_SEARCH_BOOK_LIST', books })
            }
        })
        .catch( err => {
            console.log(err)
        })
    };
};