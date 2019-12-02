//Adding a book to wishlist selected from search list

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
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors ? book.volumeInfo.authors.toString() : "No author available",
                image: book.volumeInfo.imageLinks.thumbnail,
                info: book.volumeInfo.description ? book.volumeInfo.description : "No more info available"
			}
		})
	}).catch(error => console.log(error));
};

//Creating a book to add to wishlist

export const addBook = book => {
    persistBookToDatabase(book);
    return dispatch => {
        dispatch({
            type: 'ADD_BOOK', 
            book
        });
        
    };
};

const persistBookToDatabase = book => {
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
	}).catch(error => console.log(error));
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

//Get wishlist

export function getMyWishList () {
    return ( dispatch ) => {
        fetch("/api/books", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( response => {
            if ( !response.ok ) { throw response }
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
