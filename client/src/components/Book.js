import React from 'react';
import '../css/index.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const Book = (props) => {
    //Get its props from Link react-router, setted in SearchableBookListContainer and in WishListContainer
    console.log(props.location.state);

    const book = props.location.state;

    if (book) {
        return(
            <Container className="custom-container">
                <Col xs={6}>
                    <img
                        src={ book.image === "" || book.image === null ? '/download.jpeg' : book.image.thumbnail ?  book.image.thumbnail : book.image }
                        alt={ book.title === undefined || book.title === "" ? 'Book image' : book.title }
                    />
                    <h1>{ book.title === undefined || book.title === "" ? 'No title available' : book.title }</h1>
                    
                    <p>by <h4>{ book.author === undefined || book.author === "" ? 'No author available' : book.author.concat(' ') } </h4> </p>
                    {/* Condition. if book.info contains http display link otherwise plain text*/}
                    { book.infoLink === undefined || book.infoLink === "" ? '' : <p><a href={ book.infoLink } >More info</a></p> }
                    <p>{ book.info === undefined || book.info === "" ? '' : book.info }</p>
                </Col>
            </Container>
        )
    } else {

        return (
            <Container className="error-container">
            </Container>
        )
    };
};

export default Book;