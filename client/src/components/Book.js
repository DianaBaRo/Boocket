import React from 'react';
import '../css/Book.css';

const Book = (props) => {
    //Get its props from Link react-router, setted in SearchableBookListContainer and in WishListContainer
    console.log(props.location.data);

    const book = props.location.data;

    if (book) {

        return(
            <div className="BookListContainer">
                <h1>{ book.title }</h1>
                <img
                    src={ book.image === "" || book.image === null ? '/download.jpeg' : book.image }
                    alt={ book.title }
                />
                <p>by { book.author }</p>
                {/* Condition. if book.info contains http display link otherwise plain text*/}
                { book.info ? <p>{ book.info }</p> : <p>No more information available</p> }
                <p>{ book.description }</p>
            </div>
        )
    } else {

        return <h1>URL not valid</h1>

    };
};

export default Book;