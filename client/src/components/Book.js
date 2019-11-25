import React from 'react';
import '../css/Book.css';

const Book = (props) => {
    console.log(props)
;    const book = props.location.state;

    if (book) {

        let bookTitle = book.volumeInfo.title;
        let bookImage = book.volumeInfo.imageLinks.thumbnail;
        let bookAuthor = book.volumeInfo.authors.join('');
        let bookInfo = book.volumeInfo.infoLink;
        let bookDescription = book.volumeInfo.description;

        return(
            <div className="BookListContainer">
                <h1>{ bookTitle }</h1>
                <img src={bookImage} alt={bookTitle} />
                <p>by { bookAuthor }</p>
                <p><a href={ bookInfo }>More Info</a></p>
                <p>{ bookDescription }</p>
            </div>
        )
    } else {

        return <h1>URL not valid</h1>

    };
};

export default Book;