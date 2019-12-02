import React, { PureComponent } from 'react';
import '../css/index.css';
import { connect } from 'react-redux';
import { deleteBook } from '../actions/wishList';
import { getMyWishList } from '../actions/wishList';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class WishListContainer extends PureComponent {

    componentDidMount() {
        this.props.getMyWishList();
    };

    handleDeleteBook = (book) => {
        console.log(book)
        this.props.deleteBook(book);
    };

    handleLoading = () => {
        const books = this.props.books.length > 0 ? 
        this.props.books.map( book => (

                <Card>
                    <Card.Img variant="top" src={ book.image === "" || book.image === null ? '/download.jpeg' : book.image } alt={ book.title } />
                    <Card.Body>
                        <Card.Text>
                            <button type="button" class="close" aria-label="Close" onClick={ () =>  this.handleDeleteBook( book.id )}><span aria-hidden="true">&times;</span></button>
                            {/*Passing props with Link react-router to `/wishlist/books/:id` that is connected to Book component*/}
                            <Link to={{
                                pathname: `/wishlist/books/${book.title}`,
                                state: book
                            }} ><h3>{ book.title }</h3></Link>
                            <p>by { book.author }</p>
                        </Card.Text>
                    </Card.Body>

                </Card>
        ))
        : null
        return books
        
    };
    
    render () {
        return (
            <Container className="custom-container">
                <h1>My wishlist</h1>
                <CardColumns>
                        {this.handleLoading()}
                </CardColumns>
            </Container>
        );
    };
};

const mapStateToProps = state => {
    return {
        books: state.wishList
    };
};

const mapDispatchToProps = dispatch => {
    return { 
        getMyWishList: () => dispatch(getMyWishList()),
        deleteBook: book => dispatch(deleteBook(book)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer);