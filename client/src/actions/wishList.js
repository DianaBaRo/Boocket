//Tengo que crear persistBookFromSearchToDatabase y addBookFromSearch

export const addBookFromSearch = book => {
    persistBookFromSearchToDatabase(book);
    return dispatch => {
        dispatch({
            type: 'ADD_BOOK', 
            book: {
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors.toString(),
                image: book.volumeInfo.imageLinks.smallThumbnail,
                info: book.volumeInfo.description
            }
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
                author: book.volumeInfo.authors.toString(),
                image: book.volumeInfo.imageLinks.smallThumbnail,
                info: book.volumeInfo.description
			}
		})
	}).catch(error => console.log(error));
};

export const addBookFromNewReleases = book => {
    persistBookFromNewReleasesToDatabase(book);
    return dispatch => {
        dispatch({
            type: 'ADD_BOOK', 
            book: {
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors.toString(),
                image: book.volumeInfo.imageLinks.smallThumbnail,
                info: book.volumeInfo.description
            }
        });
        
    };
};


const persistBookFromNewReleasesToDatabase = book => {
    fetch('/api/books', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			book: {
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors.toString(),
                image: book.volumeInfo.imageLinks.smallThumbnail,
                info: book.volumeInfo.description
			}
		})
	}).catch(error => console.log(error));
};


export const addBook = book => {
    persistBookToDatabase(book);
    return dispatch => {
        dispatch({
            type: 'ADD_BOOK', 
            book: {
                ID: book.id,
                title: book.title,
                author: book.author.toString(),
                image: book.image,
                info: book.info
            }
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
                id: book.id,
				title: book.title,
				author: book.author.toString(),
				image: book.image,
				info: book.info
			}
		})
	}).catch(error => console.log(error));
};

export const deleteBook = book => {
    console.log(book)
    deleteBookInDatabase(book);
    return dispatch => {
        dispatch({
            type: 'DELETE_BOOK', 
            book: {
                id: book.id,
                title: book.title,
                author: book.author,
                image: book.image,
                info: book.info
            }
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
