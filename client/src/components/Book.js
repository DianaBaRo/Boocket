import React from 'react';
import '../css/Book.css';

const Book = (props) => {
    //Get its props from Link react-router, setted in SearchableBookListContainer and in WishListContainer
    console.log(props.location.state);

    const book = props.location.state;

    if (book) {
        return(
            <div className="BookListContainer">
                <h1>{ book.title === undefined || book.title === "" ? 'No title available' : book.title }</h1>
                <img
                    src={ book.image === "" || book.image === null ? '/download.jpeg' : book.image.thumbnail ?  book.image.thumbnail : book.image }
                    alt={ book.title === undefined || book.title === "" ? 'Book image' : book.title }
                />
                <p>by { book.author === undefined || book.author === "" ? 'No author available' : book.author.concat(' ') }</p>
                {/* Condition. if book.info contains http display link otherwise plain text*/}
                { book.infoLink === undefined || book.infoLink === "" ? '' : <p><a href={ book.infoLink } >More info</a></p> }
                <p>{ book.info === undefined || book.info === "" ? '' : book.info }</p>
            </div>
        )
    } else {

        return <h1>URL not valid</h1>

    };
};

export default Book;