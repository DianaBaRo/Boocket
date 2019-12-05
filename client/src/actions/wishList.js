//Adding a book to wishlist selected from search list

//This function is an action creator
export const addBookFromSearch = book => {
    persistBookFromSearchToDatabase(book);
    return dispatch => {
        dispatch({
            type: 'ADD_BOOK', 
            book
        });
        
    };
};

const persistBookFromSearchToDatabase = book => {
    fetch('/api/books', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			book: {
                title: book.volumeInfo.title ? book.volumeInfo.title : "No title available",
                author: book.volumeInfo.authors ? book.volumeInfo.authors.toString() : "No author available",
                image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
                info: book.volumeInfo.description ? book.volumeInfo.description : "No more info available"
			}
		})
	}).catch(error => console.log(error));
};

//Creating a book to add to wishlist

export const addBook = book => { // refactor to an async action w/ persistBookToDatabase
    persistBookToDatabase(book)
    return dispatch => {
        dispatch({
            type: 'ADD_BOOK', 
            book
        });
        
    };
};

const persistBookToDatabase = book => {
    console.log('C')
    fetch('/api/books', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			book: {
				title: book.title,
				author: book.author,
				info: book.info
			}
        })

    }).then((res) => {
        console.log('D')
    }).catch(error => console.log(error));
    console.log('E')
};

//Deleting book from wishlist

export const deleteBook = book => {
    console.log(book)
    deleteBookInDatabase(book);
    return dispatch => {
        dispatch({
            type: 'DELETE_BOOK', 
            book
        });
        
    };
};

const deleteBookInDatabase = book => {
    fetch('/api/books/' + book, {
		method: 'delete',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: book
	}).catch(error => console.log(error));
};

//Add like
export const addLike = (book) => {
    persistLike(book);
    return ( dispatch ) => {
        dispatch({ 
            type: 'ADD_LIKE', 
            book
        });
    };
};
    
const persistLike = (book) => {
    fetch('/api/books/' + book.id, {
        method: 'put',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            book: book  
        })
    }).catch( err => console.log(err))
};

//Get wishlist

export const getMyWishList = () => {
    return ( dispatch ) => {
        fetch("/api/books", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( response => {
            if ( !response.ok ) { throw response } //throws an user-defined exception
            return response.json()  //we only get here if there is no error
        })
        .then( books => {
            console.log(books)
            if (books.error) {
                alert("There was an error")
            } else {
                dispatch({ type: 'SET_MY_WISHLIST', books })
            }
        })
        .catch( err => {
            err.text().then(errorMessage => {
                alert(JSON.parse(errorMessage).error.message)
            })
        })
    };
};
